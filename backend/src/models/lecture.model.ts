import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Course } from "./course.model";
import { LectureAttributes } from "../utils/interfaces";
import { LectureProgress } from "./lectureProgress.model";
import { User } from "./user.model";

@Table({
  tableName: "lectures",
  timestamps: true,
  paranoid: true,
})
export class Lecture extends Model<LectureAttributes> {

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Course)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  course_id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.ENUM("video", "text"))
  type!: "video" | "text";

  @AllowNull(false)
  @Column(DataType.STRING)
  content!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  sequence!: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  duration?: number;

  @BelongsTo(() => Course, { foreignKey: "course_id", as: "course" })
  course!: Course;

  @HasMany(() => LectureProgress, { foreignKey: "lecture_id", as: "lectureProgressRecord" })
  lectureProgressRecord!: LectureProgress[];

  @BelongsToMany(() => User, {through: () => LectureProgress, as: "usersCompleted"})
  usersCompleted!: User[];
  
}
