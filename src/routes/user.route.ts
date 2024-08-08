import express from "express";
import userController from "../controller/user.controller";
import { authenticate } from "../middleware/authenticate.middleware";

const Validator = require("../middleware/validate.middleware");

const userRoute = express.Router();

userRoute.get("/user/:id", userController.findById.bind(userController));

userRoute.post(
  "/user",
  Validator("createUserValidate"),
  userController.create.bind(userController)
);

userRoute.post("/user/login", userController.login.bind(userController));

userRoute.put(
  "/user",
  Validator("updateUserValidate"),
  authenticate,
  userController.update.bind(userController)
);

userRoute.delete(
  "/user/:id",
  authenticate,
  userController.delete.bind(userController)
);

export default userRoute;
