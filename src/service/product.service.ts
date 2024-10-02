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
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  public upload = multer({ storage: this.storage });

  protected repository = new ProductRepository();

  constructor() {
    super(new ProductRepository());
    this.repository = new ProductRepository();
  }
  async uploadFile(req: Request, res: Response): Promise<string> {
    return new Promise((resolve, reject) => {
      this.upload.single("productImage")(req, res, (err: any) => {
        if (err) {
          reject(err);
        } else {
          const fileUrl = `${process.env.BASE_URL}/uploads/${req.file?.filename}`;
          resolve(fileUrl);
        }
      });
    });
  }

  async createProduct(
    data: Partial<Product>,
    fileUrl?: string
  ): Promise<Product> {
    const existingProduct = await this.repository.findByName(
      data.productName || ""
    );

    if (existingProduct) {
      throw new Error("Product already exists");
    }
    const productData = {
      ...data,
      productImage: fileUrl || "",
    };
    return await this.repository.create(productData as Product);
  }

  async getProduct(id: number): Promise<Product | null> {
    return await this.repository.findById(id);
  }
  async getProductsByPage(
    page: number,
    limit: number
  ): Promise<{ products: Product[]; currentPage: number; totalPages: number }> {
    const offset = (page - 1) * limit;

    const totalProducts = await this.repository.count();

    const products = await this.repository.findAll({
      limit,
      offset,
    });

    const totalPages = Math.ceil(totalProducts / limit);

    return {
      products,
      currentPage: page,
      totalPages,
    };
  }
}
