'use strict'

const { employeeAgencyPhone } = require('./employee/employeeAgencyPhone')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		for (const employee of employeeAgencyPhone) {
			const existingEmployee = await queryInterface.rawSelect(
				'employees',
				{
					where: {
						user_name: {
							[Sequelize.Op.iLike]: `${employee.userName.toLowerCase()}`
						}
					}
				},
				['id']
			)
			if (existingEmployee) {
				await queryInterface.bulkUpdate(
					'employees',
					{
						phone: employee.extension
					},
					{
						id: existingEmployee
					}
				)
			}
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}
