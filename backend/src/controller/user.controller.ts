import { Request, Response } from "express";
import ApiError from "../utils/Error/ApiError";
import userServices from "../services/user.services";
import logger from "../helper/winston";
import { errorResponse, successResponse } from "../utils/common.response";
import { STATUS_CODES } from "../constant/status.code";

class userController {

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      let data = req.body;
      const files = req.files as Express.Multer.File[];
      const filePath = `public/upload/${files?.[0]?.filename}`;
      data = {...data,profilePicture:filePath};
      console.log(data);
      const user = await userServices.createUser(data);
      logger.info("User created successfully");
      successResponse(res, STATUS_CODES.CREATED, "User created successfully", user);
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof ApiError) {
        errorResponse(res, error.statusCode, error.message, error);
      } else {
        logger.error("Internal server error", error);
        errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      }
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userServices.getAllUsers();
      logger.info("Get all users details successfully");
      successResponse(res, STATUS_CODES.OK, "Get all users details successfully", users);
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        errorResponse(res, error.statusCode, error.message, error);
      } else {
        logger.error("Internal server error", error);
        errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      }
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await userServices.getUserById(Number(id));
      logger.info("Get user by ID successfully");
      successResponse(res, STATUS_CODES.OK, "Get user by ID successfully", user);
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        errorResponse(res, error.statusCode, error.message, error);
      } else {
        logger.error("Internal server error", error);
        errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      }
    }
  }

  async getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params;
      const user = await userServices.getUserByEmail(email);
      logger.info("Get user by email successfully");
      successResponse(res, STATUS_CODES.OK, "Get user by email successfully", user);
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        errorResponse(res, error.statusCode, error.message, error);
      } else {
        logger.error("Internal server error", error);
        errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      }
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedUser = await userServices.updateUser(Number(id), req.body);
      logger.info("User updated successfully");
      successResponse(res, STATUS_CODES.OK, "User updated successfully", updatedUser);
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        errorResponse(res, error.statusCode, error.message, error);
      } else {
        logger.error("Internal server error", error);
        errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      }
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await userServices.deleteUser(Number(id));
      logger.info("User deleted successfully");
      successResponse(res, STATUS_CODES.OK,"User updated successfully");
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        errorResponse(res, error.statusCode, error.message, error);
      } else {
        logger.error("Internal server error", error);
        errorResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal server error", error);
      }
    }
  }
}

export default new userController();
