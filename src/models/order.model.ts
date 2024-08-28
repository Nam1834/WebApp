import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "./user.model";
import { OrderItem } from "./order_item.model";

@Table({
  timestamps: true,
  tableName: "Order",
})
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ID!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userID!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  totalAmount!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;

  @HasMany(() => OrderItem)
  items!: OrderItem[];
}
