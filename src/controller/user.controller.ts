import { Request, Response } from "express";
import { BaseController } from "./base/base.controller";
import { UserService } from "../service/user.service";
import { User } from "../models/user.model";
import Joi from "joi";

class UserController extends BaseController<User> {
  protected userService: UserService;
  constructor() {
    super(new UserService());
    this.userService = new UserService();
  }

  // async getUserById(req: Request, res: Response): Promise<void> {
  //   const data = req.params;
  //   await this.userService.getById(data);
  // }

  // async createUser(req: Request, res: Response): Promise<void> {
  //   const data = req.body;
  //   await this.userService.create(data);
  // }
  async login(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const userSchema = Joi.object({
        phoneNumber: Joi.string()
          .pattern(/^[0-9]+$/)
          .required(),
        passWord: Joi.string().min(8).required(),
      });

      const { error } = userSchema.validate(data);
      if (error) {
        res.status(400).json({ message: error.details[0].message });
      }

      const { phoneNumber, passWord } = data;
      const { token, user } = await this.userService.login(
        phoneNumber,
        passWord
      );

      res.status(200).json({
        message: "Success!",
        data: {
          token,
          user,
        },
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

const userController = new UserController();
export default userController;
