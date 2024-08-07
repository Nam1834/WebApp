import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BeforeCreate,
  AfterCreate,
  BeforeUpdate,
} from "sequelize-typescript";
const bcrypt = require("bcrypt");

@Table({
  timestamps: false,
  tableName: "User",
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ID!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber!: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  passWord!: String;

  @Column({
    type: DataType.ENUM,
    values: ["admin", "user"],
    allowNull: false,
  })
  role!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  verifyUser!: boolean;

  @BeforeCreate
  static beforeCreateHook(record: any, options: any): void {
    const myPlaintextPassword = record.dataValues.passWord;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    record.dataValues.passWord = hash;
  }
  @BeforeUpdate
  static beforeUpdateHook(record: any, options: any): void {
    const myPlaintextPassword = record.dataValues.passWord;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    record.dataValues.passWord = hash;
  }
}
