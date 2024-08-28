import { CartItem } from "../models/cart_item.model";
import { CartItemRepository } from "../repository/cart_item.repository";
import { BaseService } from "./base/base.service";

export class CartItemService extends BaseService<CartItem> {
  constructor() {
    super(new CartItemRepository());
  }
}
