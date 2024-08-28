import { CartItem } from "../models/cart_item.model";
import { BaseRepository } from "./base/base.repository";

export class CartItemRepository extends BaseRepository<CartItem> {
  constructor() {
    super(CartItem);
  }
}
