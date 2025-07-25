'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('location_status', {
			id: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('location_status')
	}
}
