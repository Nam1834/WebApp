import { Product } from "../models/product.model";
import { BaseRepository } from "./base/base.repository";

export class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super(Product);
  }
  async findByName(productName: string): Promise<Product | null> {
    return await Product.findOne({
      where: { productName },
    });
  }
}
