import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";
import fileType from "file-type";
import fs from "fs/promises";

type FilenameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, path.join(__dirname, "..","..", "public", "upload"));
  },
  filename: (req: Request, file: Express.Multer.File, cb: FilenameCallback) => {
    if (file) {
      cb(
        null,
        file.originalname.split(".")[0] +
          "_" +
          Date.now() +
          path.extname(file.originalname)
      );
    } else {
      cb(new Error("No file found!"), "");
    }
  }
});



const fileUpload = () => {


  const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 }, 
    fileFilter: (
      req: Request,
      file: Express.Multer.File,
      cb: multer.FileFilterCallback
    ) => {
      const filetypes:RegExp = /jpeg|jpg|png/;
      const mimetype:boolean = filetypes.test(file.mimetype);
      const extname: boolean = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      if (mimetype && extname) {
        cb(null, true);
      } else {
        cb(new Error("Error: File type not supported!"));
      }
    }
  }).array("profilePicture");

  return  (req:Request,res:Response,next:NextFunction) =>{
    upload(req, res,async (err: unknown) => {
      try {
        if (err instanceof multer.MulterError) {
          return res
            .status(400)
            .json({ error: err.message, message: "File upload error." });
        }else if (err) {
          return res.status(400).json({ error: (err as Error).message });
        }
        else{
          for (const file of req.files as Express.Multer.File[]) {
            const buffer = await fs.readFile(file.path);
            const type = await fileType.fileTypeFromBuffer(buffer);
            if (!type) {
              await fs.unlink(file.path);
              return res.status(400).json({ error: "No file type determine" });
            }
            if (!["jpg", "jpeg", "png"].includes(type.ext)) {
              await fs.unlink(file.path);
              return res.status(400).json({ error: "File is compromised" });
            }
        }
        next();
      }
      } catch (error) {
        return res.status(400).json({ error: error });
      }
     
    });
  };

};

export default fileUpload;
