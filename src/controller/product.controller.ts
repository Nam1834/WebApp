import { Product } from "../models/product.model";
import { ProductService } from "../service/product.service";
import { BaseController } from "./base/base.controller";
import { Request, Response } from "express";

class ProductController extends BaseController<Product> {
  protected productService: ProductService;

  constructor() {
    super(new ProductService());
    this.productService = new ProductService();
  }

  async uploadFile(req: Request, res: Response): Promise<void> {
    try {
      const fileUrl = await this.productService.uploadFile(req, res);
      res.status(200).json({
        message: "File uploaded successfully",
        fileUrl: fileUrl,
      });
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while uploading the file" });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const fileUrl = req.body.productImage || "";
      const data = req.body;
      const newProduct = await this.productService.createProduct(data, fileUrl);
      res.status(201).json(newProduct);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  }

  async getProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const product = await this.productService.getProduct(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while retrieving the product" });
    }
  }
  async getProductsByPage(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = 10;
      const products = await this.productService.getProductsByPage(page, limit);
      res.status(200).json(products);
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while retrieving products" });
    }
  }
}
const productController = new ProductController();
export default productController;
