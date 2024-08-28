import express from "express";
import categoryController from "../controller/category.controller";
import { authenticate } from "../middleware/authenticate.middleware";
import { checkAdmin } from "../middleware/check_role.middleware";
const categoryRoute = express.Router();

categoryRoute.get(
  "/category/:id",
  categoryController.findById.bind(categoryController)
);

categoryRoute.post(
  "/category",
  authenticate,
  checkAdmin,
  categoryController.create.bind(categoryController)
);

categoryRoute.put(
  "/category/:id",
  authenticate,
  checkAdmin,
  categoryController.update.bind(categoryController)
);

categoryRoute.delete(
  "/category/:id",
  authenticate,
  checkAdmin,
  categoryController.delete.bind(categoryController)
);

export default categoryRoute;
