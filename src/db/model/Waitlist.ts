import {
  Column,
  Model,
  CreatedAt,
  Table,
  DataType,
  PrimaryKey,
  Default,
  IsEmail,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

@Table({
  tableName: "Waitlists",
  timestamps: true,
})
export class Waitlists extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.STRING(100))
  firstName!: string;

  @IsEmail
  @Column(DataType.STRING(100))
  email!: string;

  @Column(DataType.STRING)
  phoneNumber!: string;

  @Column(DataType.STRING)
  company!: string;
  
  @CreatedAt
  createdAt!: Date;
}


// import { DataTypes, Sequelize } from "sequelize";
// import { v4 as uuidv4 } from "uuid";

// export const Waitlists = (sequelize: Sequelize) => {
//   return sequelize.define("waitlist", {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: uuidv4,
//       primaryKey: true,
//     },
//     firstName: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//       validate: {
//         isEmail: true,
//       },
//     },
//     phoneNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     company: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//       allowNull: false,
//     },
//   });
// };
