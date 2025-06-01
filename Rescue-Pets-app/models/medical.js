import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;

class Medical extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Medical.init(
  {
    desexed: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    vaxinated: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    medicalHistory: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    ongoingHealthRequrements: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    otherInfo: {
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
    modelName: "medical",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Medical;
