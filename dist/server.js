"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_datasource_1 = __importDefault(require("./database/db.datasource"));
const config = require("config");
const server_config = config.get("server");
const enviroment = config.get("enviroment");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.json({ message: "Sequelize Example" });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_datasource_1.default.sync();
        const port = server_config.port || 3000;
        app.listen(port, () => {
            console.log(`Server started on port ${port} in ${enviroment} mode`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
void start();
