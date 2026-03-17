import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Course } from "./course.model";
import { CertificateAttributes } from "../utils/interfaces";

@Table({
  tableName: "certificates",
  timestamps: false,
})
export class Certificate extends Model<CertificateAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
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

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  issuedAt!: Date;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Course)
  course!: Course;
}
