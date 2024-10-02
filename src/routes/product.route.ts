import express from "express";
import productController from "../controller/product.controller";
import { authenticate } from "../middleware/authenticate.middleware";
import { checkAdmin } from "../middleware/check_role.middleware";
const productRoute = express.Router();

const Validator = require("../middleware/validate.middleware");

productRoute.get(
  "/product/:id",
  productController.getProduct.bind(productController)
);

productRoute.get(
  "/products",
  productController.getProductsByPage.bind(productController)
);

productRoute.post(
  "/product",
  authenticate,
  Validator("createProductValidate"),
  checkAdmin,
  productController.create.bind(productController)
);

productRoute.post(
  "/product/uploads",
  authenticate,
  checkAdmin,
  productController.uploadFile.bind(productController)
);

productRoute.put(
  "/product/:id",
  authenticate,
  Validator("updateProdcutValidate"),
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
