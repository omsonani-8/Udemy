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
} from "sequelize-typescript";
import { PermissionAttributes } from "../utils/interfaces";
import { Role } from "./role.model";
import { RolePermission } from "./rolePermission.model";

@Table({
  tableName: "permissions",
  timestamps: true,
  paranoid: true, 
})
export class Permission extends Model<PermissionAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  name!: string;

  
  @BelongsToMany(()=> Role , {through:()=> RolePermission , as:"permissionRoles"})
  permissionRoles!:Role[];

}
