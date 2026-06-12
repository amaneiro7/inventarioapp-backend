'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.createTable(
				'migration_rules',
				{
					id: {
						type: Sequelize.UUID,
						primaryKey: true,
						allowNull: false
					},
					min_disk_gb: {
						type: Sequelize.INTEGER,
						allowNull: false
					},
					min_ram_gb: {
						type: Sequelize.INTEGER,
						allowNull: true
					},
					is_active: {
						type: Sequelize.BOOLEAN,
						defaultValue: true
					},
					created_at: {
						type: Sequelize.DATE
					},
					updated_at: {
						type: Sequelize.DATE
					},
					deleted_at: {
						type: Sequelize.DATE
					}
				},
				{ transaction }
			)
			// index
			await queryInterface.addIndex('migration_rules', {
				fields: ['is_active'],
				type: 'unique',
				where: { is_active: true, deleted_at: null },
				name: 'unique_active_migration_rule',
				transaction
			})

			await queryInterface.createTable(
				'processors_migration_rules',
				{
					processor_id: {
						type: Sequelize.UUID,
						allowNull: false,
						references: {
							model: 'processors',
							key: 'id'
						},
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE'
					},
					migration_rule_id: {
						type: Sequelize.UUID,
						allowNull: false,
						references: {
							model: 'migration_rules',
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
					},
					deleted_at: {
						type: Sequelize.DATE
					}
				},
				{ transaction }
			)

			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en la migración table_requirements:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Eliminamos primero la tabla de unión por las llaves foráneas
			await queryInterface.dropTable('processors_migration_rules', { transaction })
			await queryInterface.dropTable('migration_rules', { transaction })
			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error al revertir la migración table_requirements:', error)
			throw error
		}
	}
}
