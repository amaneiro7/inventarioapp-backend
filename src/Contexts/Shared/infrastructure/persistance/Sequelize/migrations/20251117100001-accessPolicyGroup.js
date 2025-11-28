'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('access_policy_group', {
			access_policy_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'access_policies',
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
		await queryInterface.dropTable('access_policy_group')
	}
}
