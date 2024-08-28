import { Product } from "../models/product.model";
import { ProductRepository } from "../repository/product.repository";
import { BaseService } from "./base/base.service";
import multer from "multer";
import path from "path";
import { Request, Response } from "express";
import "dotenv/config";

export class ProductService extends BaseService<Product> {
  private storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = process.env.UPLOADS_DIR || "uploads/";
      cb(null, uploadDir); // Thư mục lưu trữ file
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  public upload = multer({ storage: this.storage });

  constructor() {
    super(new ProductRepository());
  }
  async uploadFile(req: Request, res: Response): Promise<void> {
    return new Promise((resolve, reject) => {
      this.upload.single("productImage")(req, res, (err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async createProduct(
    data: Partial<Product>,
    fileName?: string
  ): Promise<Product> {
    const productData = {
      ...data,
      productImage: fileName || "",
    };
    return await this.repository.create(productData as Product);
  }
}
