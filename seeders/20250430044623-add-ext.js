'use strict';

const { employeeExtMcbo } = require('./employee/employeeExt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (const employee of employeeExtMcbo) {
      const existingEmployee = await queryInterface.rawSelect(
        'employees',
        {
          where: {
            user_name: {
              [Sequelize.Op.iLike]: `${employee.userName}`
            }
          }
        },
        ['id']
      )
      if (existingEmployee) {
        await queryInterface.bulkUpdate(
          'employees',
          {
            location_id: employee.locationId,
            extension: employee.extension,
          },
          {
            id: existingEmployee
          }
        )
      }
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
