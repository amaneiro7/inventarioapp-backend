'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // The column name in the table is underscored
    await queryInterface.removeColumn('users', 'role_id');
  },

  async down (queryInterface, Sequelize) {
    // Re-add the column with its original constraints
    await queryInterface.addColumn('users', 'role_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'roles', // Assuming 'roles' is the table name for the Role model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION', // Assuming this was the original constraint to prevent role deletion if users are assigned
    });
  }
};