import { Order } from "../models/order.model";
import { OrderItem } from "../models/order_item.model";
import { BaseRepository } from "./base/base.repository";

export class OrderRepository extends BaseRepository<Order> {
  constructor() {
    super(Order);
  }
  async findByUserId(userID: number): Promise<Order | null> {
    return await Order.findOne({
      where: { userID },
      include: [{ model: OrderItem, as: "items" }],
    });
  }
}
