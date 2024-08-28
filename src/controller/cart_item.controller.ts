import { CartItem } from "../models/cart_item.model";
import { CartItemService } from "../service/cart_item.service";
import { BaseController } from "./base/base.controller";

class CartItemController extends BaseController<CartItem> {
  protected cartItemService: CartItemService;
  constructor() {
    super(new CartItemService());
    this.cartItemService = new CartItemService();
  }
}
const cartItemController = new CartItemController();
export default cartItemController;
