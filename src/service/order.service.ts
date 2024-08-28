import { Order } from "../models/order.model";
import { OrderRepository } from "../repository/order.repository";
import { BaseService } from "./base/base.service";

export class OrderService extends BaseService<Order> {
  constructor() {
    super(new OrderRepository());
  }
}
