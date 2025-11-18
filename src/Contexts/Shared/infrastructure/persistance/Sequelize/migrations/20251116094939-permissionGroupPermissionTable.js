'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('permission_group_permission', {
			permission_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'permissions',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			permission_group_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'permission_groups',
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
		await queryInterface.dropTable('permission_group_permission')
	}
}
