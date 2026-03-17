import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  PrimaryKey,
} from "sequelize-typescript";
import { Role } from "./role.model";
import { Permission } from "./permission.model";
import { RolePermissionAttributes } from "../utils/interfaces";

@Table({
  tableName: "role_permissions",
})
export class RolePermission extends Model<RolePermissionAttributes> {

  @PrimaryKey
  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  role_id!: number;
  
  @PrimaryKey
  @ForeignKey(() => Permission)
  @Column(DataType.INTEGER)
  permission_id!: number;
}
