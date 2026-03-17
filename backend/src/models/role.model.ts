import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  DataType,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { RoleAttributes } from "../utils/interfaces";
import { Permission } from "./permission.model";
import { RolePermission } from "./rolePermission.model";
import { User } from "./user.model";

@Table({
  tableName: "roles",
  timestamps: true,
  paranoid: true, 
})
export class Role extends Model<RoleAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  name!: string;

  @HasMany(()=>User, {foreignKey:"role_id", as:"users"})
  users!:User[];

  @BelongsToMany(()=> Permission , {through:()=> RolePermission , as:"rolePermissions"})
  rolePermissions!:Permission[];
}
