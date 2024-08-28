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
import { CartItem } from "./cart_item.model";

@Table({
  timestamps: true,
  tableName: "Cart",
})
export class Cart extends Model {
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

  @HasMany(() => CartItem)
  items!: CartItem[];
}
