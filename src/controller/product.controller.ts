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
      await this.productService.uploadFile(req, res);
      res
        .status(200)
        .json({
          message: "File uploaded successfully",
          fileName: req.file?.filename,
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
      const data = req.body;

      const newProduct = await this.productService.createProduct(
        data,
        req.body.productImage
      );
      res.status(201).json(newProduct);
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the product" });
    }
  }
}
const productController = new ProductController();
export default productController;
