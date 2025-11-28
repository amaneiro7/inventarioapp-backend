'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('access_policies', {
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
			cargo_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'cargos', // Asegúrate que el nombre de la tabla sea correcto
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			departamento_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'departamentos', // Asegúrate que el nombre de la tabla sea correcto
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			priority: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 99
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('access_policies')
	}
}
