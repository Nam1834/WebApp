"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrator = void 0;
const umzug_1 = require("umzug");
const db_datasource_1 = __importDefault(require("./db.datasource"));
exports.migrator = new umzug_1.Umzug({
    migrations: {
        glob: ["src/database/migrations/*.ts", { cwd: undefined }],
    },
    context: db_datasource_1.default,
    storage: new umzug_1.SequelizeStorage({
        sequelize: db_datasource_1.default,
    }),
    logger: console,
});
