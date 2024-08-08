import { User } from "../models/user.model";
import { BaseRepository } from "./base/base.repository";

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
  async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return await User.findOne({ where: { phoneNumber } });
  }
}
