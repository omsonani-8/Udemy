import { Response } from "express";

export const successResponse = <T>(res:Response, statusCode:number, message:string, data?:T) => {
  return res.status(statusCode).json({ success: true, message, data});
};

export const errorResponse = <T>(res:Response, statusCode:number, message:string, error?:T) => {
  return res.status(statusCode).json({ success: false, message, error });
};
