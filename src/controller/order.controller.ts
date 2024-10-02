import { UserRequest } from "../middleware/authenticate.middleware";
import { Order } from "../models/order.model";
import { OrderService } from "../service/order.service";
import { BaseController } from "./base/base.controller";
import { Request, Response } from "express";

class OrderController extends BaseController<Order> {
  protected orderService: OrderService;
  constructor() {
    super(new OrderService());
    this.orderService = new OrderService();
  }
  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const loggedinUser = (req as UserRequest).user;
      const userID = loggedinUser.idUser;
      const order = await this.orderService.createOrder(userID);
      res.status(201).json(order);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
const orderController = new OrderController();
export default orderController;
