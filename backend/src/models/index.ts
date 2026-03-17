import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
import logger from "../helper/winston";
import { Sequelize } from "sequelize-typescript";
import { Review } from "./review.model";
import { User } from "./user.model";
import { RolePermission } from "./rolePermission.model";
import { Role } from "./role.model";
import { Lecture } from "./lecture.model";
import { LectureProgress } from "./lectureProgress.model";
import { Payment } from "./payment.model";
import { CartItem } from "./cartItem.model";
import { Category } from "./categories.model";
import { Certificate } from "./certificate.model";
import { Enrollment } from "./enrollment.model";
import { Course } from "./course.model";
import { Permission } from "./permission.model";


const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  logging: false,
  models: [
    User,
    Role,
    RolePermission,
    Review,
    Lecture,
    LectureProgress,
    Payment,
    CartItem,
    Category,
    Certificate,
    Enrollment,
    Course,
    Permission
  ]
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully");
  } catch (error) {
    logger.error("Unable to connect to the database", error);
  }
};
connect();

export {
  sequelize,
  User,
  Role,
  RolePermission,
  Review,
  Lecture,
  LectureProgress,
  Payment,
  CartItem,
  Category,
  Certificate,
  Enrollment,
  Course,
  Permission
};
