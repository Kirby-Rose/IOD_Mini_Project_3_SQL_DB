import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Animal extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    breed: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    petName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    reasonForSurrender: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "animals",
    timestamps: false,
    freezeTableName: true,
  }
);
export default Animal;
