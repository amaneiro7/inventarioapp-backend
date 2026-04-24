'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		console.log('Creating isp_links table...')
		await queryInterface.createTable('isp_links', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			created_at: {
				type: Sequelize.DATE
			},
			updated_at: {
				type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('isp_links')
	}
}
