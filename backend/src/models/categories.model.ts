import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { Course } from "./course.model";
import { CategoryAttributes } from "../utils/interfaces";

@Table({
  tableName: "categories",
  timestamps: true,
  paranoid: true,
})
export class Category extends Model<CategoryAttributes> {

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  description?: string;


  @HasMany(() => Course, { foreignKey: "category_id", as: "courses" })
  courses?: Course[];
}
