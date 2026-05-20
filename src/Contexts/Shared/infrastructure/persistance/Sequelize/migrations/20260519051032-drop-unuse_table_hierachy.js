'use strict'
const tableEmployeeName = 'employees'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Remover índices relacionados a las claves foráneas antes de eliminar las columnas
			const fkFields = ['departamento_id', 'directiva_id', 'vicepresidencia_id', 'vicepresidencia_ejecutiva_id']
			for (const field of fkFields) {
				try {
					await queryInterface.removeIndex(tableEmployeeName, `idx_employees_${field}`, { transaction })
				} catch (e) {
					console.warn(`Índice idx_employees_${field} no encontrado, continuando...`)
				}
			}

			// 1. Remover las columnas de claves foráneas de employees
			await queryInterface.removeColumn(tableEmployeeName, 'directiva_id', { transaction })
			await queryInterface.removeColumn(tableEmployeeName, 'vicepresidencia_ejecutiva_id', { transaction })
			await queryInterface.removeColumn(tableEmployeeName, 'vicepresidencia_id', { transaction })
			await queryInterface.removeColumn(tableEmployeeName, 'departamento_id', { transaction })

			// Eliminar las tablas de relación
			await queryInterface.dropTable('cargo_departamento', { transaction })
			await queryInterface.dropTable('cargo_vicepresidencia', { transaction })
			await queryInterface.dropTable('cargo_vicepresidencia_ejecutiva', { transaction })
			await queryInterface.dropTable('cargo_directiva', { transaction })

			// Remover índices y columnas de access_policies
			// Nota: Mantengo el nombre 'access_polices' con el error ortográfico detectado en migraciones previas
			await queryInterface.removeIndex('access_policies', 'access_polices_departamento_id_idx', { transaction })
			await queryInterface.removeIndex('access_policies', 'access_polices_vicepresidencia_id_idx', {
				transaction
			})
			await queryInterface.removeIndex('access_policies', 'access_polices_vicepresidencia_ejecutiva_id_idx', {
				transaction
			})
			await queryInterface.removeIndex('access_policies', 'access_polices_directiva_id_idx', { transaction })

			await queryInterface.removeColumn('access_policies', 'departamento_id', { transaction })
			await queryInterface.removeColumn('access_policies', 'vicepresidencia_id', { transaction })
			await queryInterface.removeColumn('access_policies', 'vicepresidencia_ejecutiva_id', { transaction })
			await queryInterface.removeColumn('access_policies', 'directiva_id', { transaction })

			// Eliminar tablas maestras
			await queryInterface.dropTable('departamentos', { transaction })
			await queryInterface.dropTable('vicepresidencias', { transaction })
			await queryInterface.dropTable('vicepresidencia_ejecutivas', { transaction })
			await queryInterface.dropTable('directivas', { transaction })

			await queryInterface.removeColumn('model_laptops', 'processor_socket_id', { transaction })
			await queryInterface.dropTable('processor_sockets', { transaction })
			await queryInterface.dropTable('centro_trabajos', { transaction })
			await queryInterface.dropTable('centro_costos', { transaction })

			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('Error en migración drop-unuse_table_hierachy:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// 1. Recrear tablas maestras en orden inverso
			await queryInterface.createTable(
				'directivas',
				{
					id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
					name: { type: Sequelize.STRING, allowNull: false },
					created_at: { type: Sequelize.DATE },
					updated_at: { type: Sequelize.DATE }
				},
				{ transaction }
			)

			await queryInterface.createTable(
				'vicepresidencia_ejecutivas',
				{
					id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
					name: { type: Sequelize.STRING, allowNull: false },
					directiva_id: {
						type: Sequelize.UUID,
						references: { model: 'directivas', key: 'id' },
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL'
					},
					created_at: { type: Sequelize.DATE },
					updated_at: { type: Sequelize.DATE }
				},
				{ transaction }
			)

			await queryInterface.createTable(
				'vicepresidencias',
				{
					id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
					name: { type: Sequelize.STRING, allowNull: false },
					vicepresidencia_ejecutiva_id: {
						type: Sequelize.UUID,
						references: { model: 'vicepresidencia_ejecutivas', key: 'id' },
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL'
					},
					created_at: { type: Sequelize.DATE },
					updated_at: { type: Sequelize.DATE }
				},
				{ transaction }
			)

			await queryInterface.createTable(
				'departamentos',
				{
					id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
					name: { type: Sequelize.STRING, allowNull: false },
					vicepresidencia_id: {
						type: Sequelize.UUID,
						references: { model: 'vicepresidencias', key: 'id' },
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL'
					},
					created_at: { type: Sequelize.DATE },
					updated_at: { type: Sequelize.DATE }
				},
				{ transaction }
			)

			// 2. Agregar columnas e índices a access_policies
			const apCols = ['departamento_id', 'vicepresidencia_id', 'vicepresidencia_ejecutiva_id', 'directiva_id']
			const apModels = ['departamentos', 'vicepresidencias', 'vicepresidencia_ejecutivas', 'directivas']

			for (let i = 0; i < apCols.length; i++) {
				await queryInterface.addColumn(
					'access_policies',
					apCols[i],
					{
						type: Sequelize.UUID,
						allowNull: true,
						references: { model: apModels[i], key: 'id' },
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL'
					},
					{ transaction }
				)

				// Restaurar el índice con el nombre original (incluyendo el typo 'polices')
				await queryInterface.addIndex('access_policies', [apCols[i]], {
					name: `access_polices_${apCols[i]}_idx`,
					transaction
				})
			}

			// 3. Recrear tablas de unión
			const junctionTables = [
				{ name: 'cargo_departamento', col: 'departamento_id', ref: 'departamentos' },
				{ name: 'cargo_vicepresidencia', col: 'vicepresidencia_id', ref: 'vicepresidencias' },
				{
					name: 'cargo_vicepresidencia_ejecutiva',
					col: 'vicepresidencia_ejecutiva_id',
					ref: 'vicepresidencia_ejecutivas'
				},
				{ name: 'cargo_directiva', col: 'directiva_id', ref: 'directivas' }
			]

			for (const table of junctionTables) {
				await queryInterface.createTable(
					table.name,
					{
						cargo_id: {
							type: Sequelize.UUID,
							references: { model: 'cargos', key: 'id' },
							onUpdate: 'CASCADE',
							onDelete: 'CASCADE'
						},
						[table.col]: {
							type: Sequelize.UUID,
							references: { model: table.ref, key: 'id' },
							onUpdate: 'CASCADE',
							onDelete: 'CASCADE'
						},
						created_at: { type: Sequelize.DATE },
						updated_at: { type: Sequelize.DATE }
					},
					{ transaction }
				)
			}

			// 4. Agregar columnas e índices a employees
			for (let i = 0; i < apCols.length; i++) {
				const colName = apCols[i]
				await queryInterface.addColumn(
					tableEmployeeName,
					colName,
					{
						type: Sequelize.UUID,
						allowNull: true,
						references: { model: apModels[i], key: 'id' },
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL'
					},
					{ transaction }
				)

				await queryInterface.addIndex(tableEmployeeName, {
					fields: [colName],
					name: `idx_employees_${colName}`,
					transaction
				})
			}

			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('Error al revertir migración drop-unuse_table_hierachy:', error)
			throw error
		}
	}
}
