import { OrderItem } from "../models/order_item.model";
import { OrderItemRepository } from "../repository/order_item.repository";
import { BaseService } from "./base/base.service";

export class OrderItemService extends BaseService<OrderItem> {
  constructor() {
    super(new OrderItemRepository());
  }
}
