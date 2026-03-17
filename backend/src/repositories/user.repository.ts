import { User } from "../models";
import { UserAttributes } from "../utils/interfaces";

class UserRepository {

  async create(data: UserAttributes): Promise<UserAttributes> {
    return await User.create(data);
  }

  async findAll(): Promise<User[]> {
    return await User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  async findByEmail(email: string): Promise<UserAttributes | null> {
    const user = await User.findOne({ where: { email } });
    return user ? user.get({ plain: true }) : null;
  }

  async update(id: number, data: UserAttributes): Promise<[number, UserAttributes[]]> {
    return await User.update(data, { where: { id }, returning: true });
  }

  async delete(id: number): Promise<number> {
    return await User.destroy({ where: { id } });
  }
}

export default new UserRepository();
