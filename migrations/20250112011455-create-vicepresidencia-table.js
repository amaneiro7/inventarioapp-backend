'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('vicepresidencias', {
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
			vicepresidencia_ejecutiva_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'vicepresidencia_ejecutivas',
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
		await queryInterface.dropTable('vicepresidencias')
	}
}
