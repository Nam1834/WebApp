import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import { Product } from "./product.model";

@Table({
  timestamps: false,
  tableName: "Category",
})
export class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ID!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: false,
  })
  nameCategory!: string;
}

Category.hasMany(Product, { as: "Category", foreignKey: "IDCategory" });
