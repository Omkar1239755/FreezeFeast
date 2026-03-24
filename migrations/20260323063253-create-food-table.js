'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
await queryInterface.createTable('Food', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_id :{
          type:Sequelize.INTEGER,
          allowNull:false,

            references:{
              model: 'Categories', 
              key: 'id'
              },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
    },
  resturant_name :{

    type: Sequelize.STRING,
    allowNull:true

  },
    food: {
      type: Sequelize.STRING,
      allowNull:true
    },
    image: {
      type: Sequelize.STRING,
      allowNull:true 
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });

}
export async function down(queryInterface, Sequelize) {
}
