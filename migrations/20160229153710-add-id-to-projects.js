'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'projects', 'id', {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface
      .removeColumn('projects', 'id')
  }
};