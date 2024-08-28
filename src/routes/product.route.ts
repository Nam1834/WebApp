import express from "express";
import productController from "../controller/product.controller";
import { authenticate } from "../middleware/authenticate.middleware";
import { checkAdmin } from "../middleware/check_role.middleware";
const productRoute = express.Router();

productRoute.get(
  "/product/:id",
  productController.findById.bind(productController)
);

productRoute.post(
  "/product",
  authenticate,
  checkAdmin,
  productController.create.bind(productController)
);

productRoute.post(
  "/product/uploads",
  // authenticate,
  // checkAdmin,
  productController.uploadFile.bind(productController)
);

productRoute.put(
  "/product/:id",
  authenticate,
  checkAdmin,
  productController.update.bind(productController)
);

productRoute.delete(
  "/product/:id",
  authenticate,
  checkAdmin,
  productController.delete.bind(productController)
);

export default productRoute;
