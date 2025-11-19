'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('asignacion_permiso_grupo', {
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
		await queryInterface.dropTable('asignacion_permiso_grupo')
	}
}
