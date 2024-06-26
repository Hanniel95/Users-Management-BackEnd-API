import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { first_name, last_name, email, gender } = req.body;
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.gender = gender;

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);

    return res.status(200).json({ error: false, user });
  }

  static async getUsers(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    return res.status(200).json({
      error: false,
      users: users,
    });
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { first_name, last_name, gender, email } = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.gender = gender;

    await userRepository.save(user);

    res.status(200).json({ error: false, user });
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    await userRepository.remove(user);

    res.status(200).json({ error: false });
  }
}
