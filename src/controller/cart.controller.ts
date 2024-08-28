import { Cart } from "../models/cart.model";
import { CartService } from "../service/cart.service";
import { BaseController } from "./base/base.controller";

class CartController extends BaseController<Cart> {
  protected cartService: CartService;
  constructor() {
    super(new CartService());
    this.cartService = new CartService();
  }
}
const cartController = new CartController();
export default cartController;
