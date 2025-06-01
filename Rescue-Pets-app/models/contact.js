import { DataTypes, Model } from "sequelize";
import dbConnect from "../dbConnect.js";

const sequelizeInstance = dbConnect;

class Contact extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Contact.init(
  {
    humanName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
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
    modelName: "contact",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Contact;
