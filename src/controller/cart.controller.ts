import { UserRequest } from "../middleware/authenticate.middleware";
import { Cart } from "../models/cart.model";
import { CartService } from "../service/cart.service";
import { BaseController } from "./base/base.controller";
import { Request, Response } from "express";

class CartController extends BaseController<Cart> {
  protected cartService: CartService;
  constructor() {
    super(new CartService());
    this.cartService = new CartService();
  }

  async addToCart(req: Request, res: Response): Promise<void> {
    try {
      const loggedinUser = (req as UserRequest).user;
      const userID = loggedinUser.idUser;
      const products = req.body.products; // Nhận mảng sản phẩm từ body

      // Gọi service để thêm nhiều sản phẩm vào giỏ
      const cartItems = await this.cartService.addToCart(userID, products);

      res.status(200).json(cartItems);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // Lấy giỏ hàng của người dùng
  async getCart(req: Request, res: Response): Promise<void> {
    try {
      const loggedinUser = (req as UserRequest).user;
      const userID = loggedinUser.idUser;
      const cart = await this.cartService.getCart(userID);
      res.status(200).json(cart);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
const cartController = new CartController();
export default cartController;
