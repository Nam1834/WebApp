import "dotenv/config";
import "reflect-metadata";
import express, { Request, Response } from "express";
import connection from "./database/db.datasource";
import config from "config";

const enviroment = config.get("enviroment");

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example" });
});

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    const port = config.get<number>("server.port");
    app.listen(port, () => {
      console.log(`Server started on port ${port}in ${enviroment} mode`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
