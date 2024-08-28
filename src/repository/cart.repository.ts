import { Cart } from "../models/cart.model";
import { BaseRepository } from "./base/base.repository";

export class CartRepository extends BaseRepository<Cart> {
  constructor() {
    super(Cart);
  }
}
