import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  CreatedAt,
  BelongsTo,
  PrimaryKey,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Course } from "./course.model";

@Table({
  tableName: "enrollments",
  timestamps: false,
})

export class Enrollment extends Model {
  
  @PrimaryKey
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  user_id!: number;

  @PrimaryKey
  @ForeignKey(() => Course)
  @Column(DataType.INTEGER)
  course_id!: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  enrolledAt!: Date;

  @Column(DataType.STRING)
  progress?: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Course)
  course!: Course;
}
