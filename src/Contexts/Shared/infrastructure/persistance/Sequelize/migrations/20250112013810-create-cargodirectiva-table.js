'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('cargo_directiva', {
			cargo_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'cargos',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			directiva_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'directivas',
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
		await queryInterface.dropTable('cargo_directiva')
	}
}
