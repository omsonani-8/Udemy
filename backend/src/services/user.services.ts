import { STATUS_CODES } from "../constant/status.code";
import userRepository from "../repositories/user.repository";
import ApiError from "../utils/Error/ApiError";
import { UserAttributes } from "../utils/interfaces";

class userServices {
  async createUser(data: UserAttributes): Promise<UserAttributes> {
    return await userRepository.create(data);
  }

  async getAllUsers(): Promise<UserAttributes[]> {
    const users = await userRepository.findAll();
    if (users.length === 0) {
      throw new ApiError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return users;
  }

  async getUserById(id: number): Promise<UserAttributes> {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new ApiError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return user;
  }

  async getUserByEmail(email: string): Promise<UserAttributes> {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new ApiError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return user;
  }

  async updateUser(id: number, data:UserAttributes): Promise<[number, UserAttributes[]]> {
    const result = await userRepository.findById(id);
    if (result) {
      throw new ApiError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return await userRepository.update(id, data);
  }

  async deleteUser(id: number):Promise<number> {
    const result = await userRepository.delete(id);
    if(result===0)
      {
        throw new ApiError("User not found", STATUS_CODES.NOT_FOUND);
      }
    return result;
  }
}

export default new userServices();
