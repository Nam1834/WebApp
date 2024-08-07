import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  IDCategory!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: false,
  })
  nameProduct!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: false,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: false,
  })
  quantity!: number;
}
