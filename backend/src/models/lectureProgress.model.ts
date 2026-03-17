import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Lecture } from "./lecture.model";
import { LectureProgressAttributes } from "../utils/interfaces";

@Table({
  tableName: "lecture_progress",
  timestamps: false,
})
export class LectureProgress extends Model<LectureProgressAttributes> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @ForeignKey(() => Lecture)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lecture_id!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  completed!: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  completedAt?: Date;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Lecture)
  lecture!: Lecture;
}
