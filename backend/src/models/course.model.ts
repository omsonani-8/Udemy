import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";

import { User } from "./user.model";       
import { Category } from "./categories.model"; 
import { CourseAttributes } from "../utils/interfaces";
import { Lecture } from "./lecture.model";
import { Certificate } from "./certificate.model";
import { CartItem } from "./cartItem.model";
import { Review } from "./review.model";
import { Payment } from "./payment.model";
import { Enrollment } from "./enrollment.model";

@Table({
  tableName: "courses",
  timestamps: true,
  paranoid: true,
})
export class Course extends Model<CourseAttributes> {

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  price!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  instructor_id!: number;

  @ForeignKey(() => Category)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  category_id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  approved!: boolean;

  @ForeignKey(() => User)
  @AllowNull(true)
  @Column(DataType.INTEGER)
  approver_id?: number;

  @AllowNull(true)
  @Column(DataType.DATE)
  approvedAt?: Date;

  @AllowNull(true)
  @Column(DataType.STRING)
  thumbnail?: string;


  @BelongsTo(() => User, { foreignKey: "instructor_id", as: "instructor" })
  instructor!: User;

  @BelongsTo(() => User, { foreignKey: "approver_id", as: "approver" })
  approver?: User;

  @BelongsTo(() => Category, { foreignKey: "category_id", as: "category" })
  category!: Category;

  @BelongsToMany(() => User, {through: () => Enrollment,as: "enrolledUsers"})
  enrolledUsers!: User[];

  @BelongsToMany(() => User, {through: () => CartItem, as: "cartUsers"})
  cartUsers!: User[];

  @HasMany(()=> Lecture ,{foreignKey:"course_id", as:"lectures"})
  lectures!:Lecture[];

  @HasMany(() => Certificate , {foreignKey:"course_id",as:"certificates"})
  certificates!: Certificate[];

  @HasMany(() => CartItem , {foreignKey:"course_id",as:"cartItems"})
  cartItems!: CartItem[];

  @HasMany(() => Review, {foreignKey:"course_id",as:"reviews"})
  reviews!: Review[];

  @HasMany(() => Payment, {foreignKey:"course_id",as:"payments"})
  payments!: Payment[];
}
