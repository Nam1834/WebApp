import { Order } from "../models/order.model";
import { BaseRepository } from "./base/base.repository";

export class OrderRepository extends BaseRepository<Order> {
  constructor() {
    super(Order);
  }
}
