import { DataTypes } from "sequelize";
import type { Migration } from "../umzug";

export const up: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("Category", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nameCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
  });
  await sequelize.getQueryInterface().createTable("Product", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    IDCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Category",
        },
        key: "ID",
      },
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    productPrice: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
};

export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("Category");
  await sequelize.getQueryInterface().dropTable("Product");
};
