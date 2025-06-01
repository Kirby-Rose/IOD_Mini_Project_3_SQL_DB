import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;

class Personality extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Personality.init(
  {
    livedWithChildren: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    anxiety: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    aggression: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    energyLevels: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    exerciseRoutine: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    trainingReceived: {
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
    modelName: "personality",
    timestamps: false,
    freezeTableName: true,
  }
);
export default Personality;
