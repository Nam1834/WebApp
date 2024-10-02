import express from "express";
import { authenticate } from "../middleware/authenticate.middleware";
import { checkGuest } from "../middleware/check_role.middleware";
import cartController from "../controller/cart.controller";
const cartRoute = express.Router();

cartRoute.post(
  "/cart",
  authenticate,
  checkGuest,
  cartController.addToCart.bind(cartController)
);
export default cartRoute;
