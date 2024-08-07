import "dotenv/config";
import "reflect-metadata";
import express, { Request, Response } from "express";
import connection from "./database/db.datasource";
import apiRoute from "./routes/index.route";
import ErrorHandler from "./middleware/errorhandle.middleware";
import cors from "cors";
const config = require("config");

const server_config = config.get("server");
const enviroment = config.get("enviroment");

const app = express();

app.use(express.json());

app.use(cors());

apiRoute(app);

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example" });
});

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    const port = server_config.port || 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port} in ${enviroment} mode`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.use(ErrorHandler);
void start();
