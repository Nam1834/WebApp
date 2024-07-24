import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { log } from "console";

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  models: [User],
});
console.log(process.env.DB_USERNAME, "tttttttttttt");

export default connection;
