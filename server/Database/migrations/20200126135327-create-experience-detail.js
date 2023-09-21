'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Experience_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      experiencesId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Experience_details');
  }
};
