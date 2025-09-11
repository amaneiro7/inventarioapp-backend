'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Step 1: Add the column
    await queryInterface.addColumn('users', 'employee_id', {
      type: Sequelize.UUID, // Corrected type to UUID
      allowNull: true,
      references: {
        model: 'employees',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // Step 2: Backfill existing data
    await queryInterface.sequelize.query(
      'UPDATE users SET employee_id = (SELECT id FROM employees WHERE employees.email = users.email)'
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'employee_id');
  }
};
