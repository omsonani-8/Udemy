import { AllowNull, AutoIncrement, BeforeCreate, BeforeUpdate, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

import { UserAttributes} from "../utils/interfaces";
import { Role } from "./role.model";
import bcrypt from "bcrypt";
import { Certificate } from "./certificate.model";
import { CartItem } from "./cartItem.model";
import { LectureProgress } from "./lectureProgress.model";
import { Review } from "./review.model";
import { Payment } from "./payment.model";
import { Course } from "./course.model";
import { Enrollment } from "./enrollment.model";
import { Lecture } from "./lecture.model";

@Table({
  tableName:"users",
  timestamps:true,
  paranoid:true,
})

export class User extends Model<UserAttributes> {

  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  first_name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  last_name!: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    validate: {
      len: [10, 10],
    },
  })
  phone_no?: string;

  @PrimaryKey
  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  role_id!: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  profilePicture!:string;

  @BelongsToMany(() => Course, {through: () => Enrollment, as:"enrolledCourses"})
  enrolledCourses!: Course[];

  @BelongsToMany(() => Lecture, {through: () => LectureProgress, as: "completedLectures"})
  completedLectures!: Lecture[];

  @BelongsToMany(() => Course, {through: () => CartItem,as: "cartCourses",})
  cartCourses!: Course[];

  @HasMany(() => Certificate, {foreignKey:"user_id", as:"certificates"})
  certificates!: Certificate[];

  @HasMany(() => CartItem, {foreignKey:"user_id", as:"cartItems"})
  cartItems!: CartItem[];

  @HasMany(() => LectureProgress, {foreignKey:"user_id", as:"userLectureProgresses"})
  userLectureProgresses!: LectureProgress[];

  @HasMany(() => Review, {foreignKey:"user_id", as:"reviews"})
  reviews!: Review[];

  @HasMany(() => Payment, {foreignKey:"user_id", as:"payments"})
  payments!: Payment[];

  @BelongsTo(()=>Role)
  role!:Role;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(user: UserAttributes) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  }
}

