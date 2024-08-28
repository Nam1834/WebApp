import { OrderItem } from "../models/order_item.model";
import { OrderItemService } from "../service/order_item.service";
import { BaseController } from "./base/base.controller";

class OrderItemController extends BaseController<OrderItem> {
  protected orderItemService: OrderItemService;
  constructor() {
    super(new OrderItemService());
    this.orderItemService = new OrderItemService();
  }
}
const orderItemController = new OrderItemController();
export default orderItemController;
