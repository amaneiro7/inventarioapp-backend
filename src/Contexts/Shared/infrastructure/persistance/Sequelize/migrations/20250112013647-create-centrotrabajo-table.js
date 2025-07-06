'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('centro_trabajos', {
			id: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
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

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('employees', 'centro_trabajo_id')
		await queryInterface.dropTable('centro_trabajos')
	}
}
