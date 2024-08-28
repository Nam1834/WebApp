import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { Cart } from "../models/cart.model";
import { Order } from "../models/order.model";
import { CartItem } from "../models/cart_item.model";
import { OrderItem } from "../models/order_item.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: console.log,
  models: [User, Category, Product, Cart, Order, CartItem, OrderItem],
});

export default connection;
