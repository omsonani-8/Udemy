import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Course } from "./course.model";

@Table({
  tableName: "payments",
  paranoid: true,
})
export class Payment extends Model {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

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

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  transaction_id!: string;

  @Column({
    type: DataType.ENUM("pending", "completed", "failed"),
    allowNull: false,
  })
  status!: "pending" | "completed" | "failed";


  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Course)
  course!: Course;
}
