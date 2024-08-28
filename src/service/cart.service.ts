import { Cart } from "../models/cart.model";
import { CartRepository } from "../repository/cart.repository";
import { BaseService } from "./base/base.service";

export class CartService extends BaseService<Cart> {
  constructor() {
    super(new CartRepository());
  }
}
