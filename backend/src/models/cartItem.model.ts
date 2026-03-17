import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Course } from "./course.model";
import { CartItemAttributes } from "../utils/interfaces";

@Table({
  tableName: "cart_items",
  timestamps: false,
})

export class CartItem extends Model<CartItemAttributes> {

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @ForeignKey(() => Course)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  course_id!: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  createdAt!: Date;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Course)
  course!: Course;
}
