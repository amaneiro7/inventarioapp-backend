'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('devices', 'location_id', {
			type: Sequelize.UUID,
			allowNull: true
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('devices', 'location_id', {
			type: Sequelize.UUID,
			allowNull: false
		})
	}
}
