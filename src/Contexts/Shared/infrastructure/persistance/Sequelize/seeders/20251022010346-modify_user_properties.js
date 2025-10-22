'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // Get all users with their old email and all employees
      const users = await queryInterface.sequelize.query(
        'SELECT id, email FROM users',
        { type: Sequelize.QueryTypes.SELECT, transaction }
      );

      const employees = await queryInterface.sequelize.query(
        'SELECT id, email FROM employees',
        { type: Sequelize.QueryTypes.SELECT, transaction }
      );

      // Create a map for quick employee lookup by email
      const employeeMap = new Map(employees.map(e => [e.email?.toLowerCase(), e.id]));

      for (const user of users) {
        // Skip the admin user as requested
        if (user.email === 'admin@admin.com') {
          console.log('Skipping admin user...');
          continue;
        }

        const employeeId = employeeMap.get(user.email?.toLowerCase());

        if (employeeId) {
          console.log(`Associating user ${user.id} with employee ${employeeId}`);
          await queryInterface.bulkUpdate('users',
            { employee_id: employeeId },
            { id: user.id },
            { transaction }
          );
        } else {
          console.warn(`No employee found for user with email: ${user.email}. User ID: ${user.id}`);
        }
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      console.error('Error during user-employee association seeder:', error);
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    // This will set the employee_id back to null for all users.
    // The original email data cannot be restored automatically.
    await queryInterface.bulkUpdate('users',
      { employee_id: null },
      {}, // An empty where clause updates all rows
      {}
    );
  }
};
