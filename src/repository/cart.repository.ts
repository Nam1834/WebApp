import { Cart } from "../models/cart.model";
import { CartItem } from "../models/cart_item.model";
import { BaseRepository } from "./base/base.repository";

export class CartRepository extends BaseRepository<Cart> {
  constructor() {
    super(Cart);
  }
  async findByUserId(userID: number): Promise<Cart | null> {
    return await Cart.findOne({
      where: { userID },
      include: [{ model: CartItem, as: "items" }],
    });
  }
}
