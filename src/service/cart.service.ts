import { Cart } from "../models/cart.model";
import { CartItem } from "../models/cart_item.model";
import { Product } from "../models/product.model";
import { CartRepository } from "../repository/cart.repository";
import { BaseService } from "./base/base.service";

export class CartService extends BaseService<Cart> {
  protected cartRepository: CartRepository;
  constructor() {
    super(new CartRepository());
    this.cartRepository = new CartRepository();
  }
  async addToCart(
    userID: number,
    products: { productID: number; quantity: number }[]
  ): Promise<CartItem[]> {
    // Tìm hoặc tạo giỏ hàng cho người dùng
    let cart = await this.cartRepository.findByUserId(userID);
    if (!cart) {
      cart = await this.repository.create({ userID });
    }

    const addedItems: CartItem[] = [];

    // Lặp qua các sản phẩm cần thêm vào giỏ
    for (const { productID, quantity } of products) {
      // Tìm sản phẩm và kiểm tra số lượng có sẵn
      const product = await Product.findByPk(productID);
      if (!product) {
        throw new Error(`Product with ID ${productID} not found`);
      }

      if (product.productQuantity < quantity) {
        throw new Error(`Insufficient quantity for product ID ${productID}`);
      }

      // Tìm hoặc cập nhật CartItem
      let cartItem = await CartItem.findOne({
        where: { cartID: cart.ID, productID },
      });

      if (cartItem) {
        // Cập nhật số lượng và giá nếu sản phẩm đã có trong giỏ
        cartItem.quantity += quantity;
        cartItem.price = product.productPrice;
        await cartItem.save();
      } else {
        // Tạo mới CartItem nếu sản phẩm chưa có trong giỏ
        cartItem = await CartItem.create({
          cartID: cart.ID,
          productID,
          quantity,
          price: product.productPrice,
        });
      }

      addedItems.push(cartItem); // Thêm sản phẩm đã xử lý vào mảng kết quả
    }

    return addedItems; // Trả về tất cả các sản phẩm đã được thêm/cập nhật
  }

  // Method to get the user's cart
  async getCart(userID: number): Promise<Cart | null> {
    return await this.cartRepository.findByUserId(userID);
  }
}
