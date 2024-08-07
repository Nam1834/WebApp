import { User } from "../models/user.model";
import { BaseService } from "./base/base.service";
import { UserRepository } from "../repository/user.repository";

const jwt = require("jsonwebtoken");
const SECRET_KEY: any = process.env.SECRET_KEY;
const bcrypt = require("bcrypt");

export class UserService extends BaseService<User> {
  protected userRepository: UserRepository;
  constructor() {
    super(new UserRepository());
    this.userRepository = new UserRepository();
  }
  async login(phoneNumber: string, passWord: string) {
    const user = await this.userRepository.findByphoneNumber(phoneNumber);
    if (!user) {
      throw new Error("User not found");
    }

    const passWordInDB = user.passWord;
    const match = await bcrypt.compare(passWord, passWordInDB);
    if (!match) {
      throw new Error("Wrong password");
    }

    if (!user.verifyUser) {
      throw new Error("You must verify your account!");
    }

    const token = jwt.sign({ idUser: user.ID }, SECRET_KEY, {
      expiresIn: 60 * 60,
    });

    return { token, user: { ...user.get(), passWord: undefined } };
  }
}
