import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Category from "./Category";


const Food = sequelize.define(
    "Food",
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
      },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        },
    
    food: {
        type: DataTypes.STRING,
        allowNull: true,
        },
    
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        }
    },

    {
      tableName: "Food",   // must match migration
      timestamps: true,    // createdAt & updatedAt
    }
  );

  Food.belongsTo(Category,{ 
    foreignKey: "category_id",
  })
  
  export default Category;