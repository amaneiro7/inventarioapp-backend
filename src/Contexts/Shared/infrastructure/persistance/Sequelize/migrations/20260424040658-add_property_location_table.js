'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('locations', 'agency_classification', {
			type: Sequelize.ENUM('A', 'B', 'C', 'D', 'E'), // Define los valores permitidos para el ENUM
			allowNull: true,
			defaultValue: null
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('locations', 'agency_classification')
	}
}
