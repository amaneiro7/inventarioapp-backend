'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('departamentos', {
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
			vicepresidencia_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'vicepresidencias',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			centro_costo_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'centro_costos',
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

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('departamentos')
	}
}
