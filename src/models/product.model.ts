import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Category } from "./category.model";

@Table({
  timestamps: false,
  tableName: "Product",
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ID!: Number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  IDCategory!: Number;

  @BelongsTo(() => Category)
  category!: Category;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  productName!: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
    defaultValue: 0,
  })
  productPrice!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: false,
  })
  productImage!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  productQuantity!: number;
}
