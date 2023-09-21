'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tag_Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER,

        foreignKey: true,
        references: {
          model: 'Projects',
          key: 'id'
        }
      },
      tagId: {
        type: Sequelize.INTEGER,

        foreignKey: true,
        references: {
          model: 'Tags',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tag_Projects');
  }
};
