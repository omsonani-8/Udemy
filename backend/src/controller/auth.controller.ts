import { Request, Response } from "express";
import logger from "../helper/winston";
import { authServices } from "../services/auth.services";
import ApiError from "../utils/Error/ApiError";
import { errorResponse, successResponse } from "../utils/common.response";
import { STATUS_CODES } from "../constant/status.code";

export const authController = {

  async login(req: Request, res: Response): Promise<void> {
    try {
    const { email, password } = req.body;
    const {token,payload} = await authServices.login({ email, password });
      res.cookie("token", token , { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
      successResponse(res, STATUS_CODES.OK, "Login successfully",payload);
      return;
  } catch (error:unknown) {
    console.log(error);
    if (error instanceof ApiError) {
      errorResponse(res, error.statusCode, error.message, error);
      return;
    } else {
      logger.error("Internal server error", error);
      errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      return;
    }
  }
  },

    async logout (req: Request,res: Response): Promise<void> {
    try {
      if(req.cookies.token){
        res.clearCookie("token");
        logger.info("Logout successfully");
        res.status(200).json({message:"Logout successfully"});
        return;
      }
      else{
        throw new ApiError("User already logout",400);
      }
    } catch (error) {
      if(error instanceof ApiError){
        res.status(error.statusCode).json({ message: error.message });
        return;
      }
      else{
        logger.error("Internal server error", error);
        res.status(500).json({ error, message: "Internal server error" });
        return;
      }  
    }   
  },

 
};