import { OrderItem } from "../models/order_item.model";
import { BaseRepository } from "./base/base.repository";

export class OrderItemRepository extends BaseRepository<OrderItem> {
  constructor() {
    super(OrderItem);
  }
}
