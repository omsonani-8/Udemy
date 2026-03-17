import { Router } from "express";
import multer from "multer";
import userController from "../controller/user.controller";
import fileUpload from "../middleware/image_upload";
import { authController } from "../controller/auth.controller";

const upload = multer();

export const userRouter = Router();

 
userRouter.post("/create",fileUpload() ,userController.createUser);
userRouter.get("/getById/:id", upload.none(), userController.getUserById);
userRouter.put("/update",fileUpload(), userController.updateUser);
userRouter.delete("/delete/:id", upload.none(), userController.deleteUser);
userRouter.get("/get/all/users", userController.getAllUsers);
userRouter.post("/login", upload.none(), authController.login);
userRouter.get("/logout", authController.logout);