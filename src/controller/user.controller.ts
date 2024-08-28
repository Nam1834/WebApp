import { Request, Response } from "express";
import { BaseController } from "./base/base.controller";
import { UserService } from "../service/user.service";
import { User } from "../models/user.model";
import Joi from "joi";
import { UserRequest } from "../middleware/authenticate.middleware";
import _ from "lodash";

class UserController extends BaseController<User> {
  protected userService: UserService;
  constructor() {
    super(new UserService());
    this.userService = new UserService();
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const loggedinUser = (req as UserRequest).user;

    try {
      const data = req.body;
      const updatedUser = await this.userService.updateUser(
        loggedinUser.idUser,
        data
      );
      if (!updatedUser) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      console.log(updatedUser);

      const updateresponse = _.omit(updatedUser.dataValues, ["passWord"]);

      res.json(updateresponse);
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while updating the user" });
    }
  }
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
