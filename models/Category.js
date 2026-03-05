import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";   // tumhara sequelize instance

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: true
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "categories",   // must match migration
    timestamps: true,    // createdAt & updatedAt
  }
);

export default User;
