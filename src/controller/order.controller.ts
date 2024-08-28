import { Order } from "../models/order.model";
import { OrderService } from "../service/order.service";
import { BaseController } from "./base/base.controller";

class OrderController extends BaseController<Order> {
  protected orderService: OrderService;
  constructor() {
    super(new OrderService());
    this.orderService = new OrderService();
  }
}
const orderController = new OrderController();
export default orderController;
