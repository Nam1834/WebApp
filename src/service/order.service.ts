import { CartItem } from "../models/cart_item.model";
import { Order } from "../models/order.model";
import { OrderItem } from "../models/order_item.model";
import { Product } from "../models/product.model";
import { CartRepository } from "../repository/cart.repository";
import { OrderRepository } from "../repository/order.repository";
import { BaseService } from "./base/base.service";

export class OrderService extends BaseService<Order> {
  protected cartRepository: CartRepository;
  protected orderRepository: OrderRepository;
  constructor() {
    super(new OrderRepository());
    this.cartRepository = new CartRepository();
    this.orderRepository = new OrderRepository();
  }

  async createOrder(userID: number): Promise<Order> {
    // Lấy giỏ hàng của người dùng
    const cart = await this.cartRepository.findByUserId(userID);
    if (!cart || !cart.items.length) {
      throw new Error("Cart is empty");
    }

    // Tính tổng giá trị đơn hàng
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Tạo đơn hàng
    const order = await this.repository.create({
      userID,
      totalAmount,
      status: "Pending",
    });

    // Tạo các sản phẩm trong đơn hàng (OrderItems)
    await Promise.all(
      cart.items.map(async (cartItem) => {
        await OrderItem.create({
          orderID: order.ID,
          productID: cartItem.productID,
          quantity: cartItem.quantity,
          price: cartItem.price,
        });

        // Cập nhật số lượng sản phẩm tồn kho
        const product = await Product.findByPk(cartItem.productID);
        if (product) {
          product.productQuantity -= cartItem.quantity;
          await product.save();
        }
      })
    );

    // Xóa giỏ hàng sau khi đặt hàng
    await CartItem.destroy({ where: { cartID: cart.ID } });

    return order;
  }
}
