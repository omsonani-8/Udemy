import bcrypt from "bcrypt";
import { User_Login, UserAttributes } from "../utils/interfaces";
import jwt, { JwtPayload } from "jsonwebtoken";
import logger from "../helper/winston";

import ApiError from "../utils/Error/ApiError";
import userRepository from "../repositories/user.repository";

export const authServices = {
  async login(data: User_Login): Promise<{token:string,payload:JwtPayload}> {
    const { email, password } = data;
    const user = (await userRepository.findByEmail(
      email
    )) as UserAttributes | null;
    
    if (!user) {
       throw new ApiError("Invalid email or password", 401);
    } else {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
       throw new ApiError("Invalid email or password", 401);
      } else {
        const { password, ...payload } = user;
        logger.info(password);
        const token: string = jwt.sign(
          payload,
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: "24h" }
        );
        return {token,payload};
      }
    }
  },


};
