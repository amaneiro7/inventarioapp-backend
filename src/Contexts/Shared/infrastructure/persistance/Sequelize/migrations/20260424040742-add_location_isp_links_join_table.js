'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('location_isp_link', {
			location_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'locations',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			isp_link_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'isp_links',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
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
		await queryInterface.dropTable('location_isp_link')
	}
}
