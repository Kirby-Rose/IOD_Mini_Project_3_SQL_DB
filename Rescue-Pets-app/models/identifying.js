import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;

class Identifying extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Identifying.init(
  {
    size: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    colour: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    charactoristics: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "animals",
        key: "animalId",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Identifying",
    timestamps: false,
    freezeTableName: true,
  }
);
export default Identifying;
