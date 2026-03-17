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
  tableName: "reviews",
  paranoid: true,
})

export class Review extends Model {

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
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  comment?: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Course)
  course!: Course;
}
