'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.createTable(
				'unidades',
				{
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
					centro_de_costo: {
						type: Sequelize.STRING,
						allowNull: true,
						unique: true,
						field: 'centro_de_costo'
					},
					codigo_interno: {
						type: Sequelize.STRING,
						allowNull: true,
						unique: true,
						field: 'codigo_interno'
					},
					isUnitActive: {
						type: Sequelize.BOOLEAN,
						defaultValue: true,
						field: 'is_unit_active'
					},
					parentId: {
						type: Sequelize.UUID,
						allowNull: true,
						references: {
							model: 'unidades',
							key: 'id'
						},
						field: 'parent_id'
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
			await queryInterface.addColumn(
				'employees',
				'unidad_id',
				{
					type: Sequelize.UUID,
					allowNull: true,
					references: {
						model: 'unidades',
						key: 'id'
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL'
				},
				{ transaction }
			)
			await queryInterface.addIndex('employees', ['unidad_id'], {
				name: 'employees_unidad_id_idx',
				transaction
			})
			await queryInterface.createTable(
				'cargo_unidad',
				{
					unidad_id: {
						type: Sequelize.UUID,
						allowNull: false,
						references: {
							model: 'unidades',
							key: 'id'
						},
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE'
					},
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
			console.error('❌ Error en la migración add_unidad_table:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// 1. Eliminar tabla de unión (depende de unidades y cargos)
			await queryInterface.dropTable('cargo_unidad', { transaction })

			// 2. Eliminar índice en employees
			await queryInterface.removeIndex('employees', 'employees_unidad_id_idx', { transaction })

			// 3. Eliminar columna en employees
			await queryInterface.removeColumn('employees', 'unidad_id', { transaction })

			// 4. Eliminar la tabla unidades
			await queryInterface.dropTable('unidades', { transaction })

			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error al revertir la migración add_unidad_table:', error)
			throw error
		}
	}
}
