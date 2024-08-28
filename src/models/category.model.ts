import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
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

  @HasMany(() => Product)
  products!: Product[];
}
