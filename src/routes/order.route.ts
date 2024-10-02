import express from "express";
import { authenticate } from "../middleware/authenticate.middleware";
import { checkGuest } from "../middleware/check_role.middleware";
import orderController from "../controller/order.controller";
const orderRoute = express.Router();

orderRoute.post(
  "/order",
  authenticate,
  checkGuest,
  orderController.createOrder.bind(orderController)
);

export default orderRoute;
