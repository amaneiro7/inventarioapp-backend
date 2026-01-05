'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const tableName = 'employees'
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// ---------------------------------------------------------
			// 1. ELIMINAR RESTRICCIONES ANTIGUAS (Global Unique)
			// ---------------------------------------------------------
			// Nota: Verifica en tu DB (pgAdmin/DBeaver) el nombre exacto de la constraint.
			// Sequelize por defecto usa: tablename_columnname_key

			// Intentamos eliminar la restricción única de cédula si existe
			try {
				await queryInterface.removeConstraint(tableName, 'employees_cedula_key', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_employee_code_key', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key1', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key2', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key3', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key4', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key5', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key6', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key7', { transaction })
				await queryInterface.removeConstraint(tableName, 'employees_user_name_key8', { transaction })
			} catch (error) {
				console.warn('Constraint employees_cedula_key no encontrada o ya eliminada, continuando...')
			}

			// Si tenías unique en email o userName globalmente, descomenta esto:
			// try { await queryInterface.removeConstraint(tableName, 'employees_email_key', { transaction }); } catch (e) {}
			// try { await queryInterface.removeConstraint(tableName, 'employees_user_name_key', { transaction }); } catch (e) {}

			// ---------------------------------------------------------
			// 2. CREAR ÍNDICES ÚNICOS PARCIALES (Solo activos)
			// ---------------------------------------------------------

			// Unique UserName (Solo si trabaja actualmente)
			await queryInterface.addIndex(tableName, {
				fields: ['user_name'],
				unique: true,
				where: { is_still_working: true },
				name: 'unique_username_active_employee',
				transaction
			})

			// Unique Email (Solo si trabaja actualmente)
			await queryInterface.addIndex(tableName, {
				fields: ['email'],
				unique: true,
				where: { is_still_working: true },
				name: 'unique_email_active_employee',
				transaction
			})

			// Unique Cedula (Solo si trabaja actualmente)
			await queryInterface.addIndex(tableName, {
				fields: ['cedula'],
				unique: true,
				where: { is_still_working: true },
				name: 'unique_cedula_active_employee',
				transaction
			})

			// ---------------------------------------------------------
			// 3. CREAR ÍNDICES DE RENDIMIENTO (Foreign Keys)
			// ---------------------------------------------------------
			const fkFields = [
				'location_id',
				'cargo_id',
				'departamento_id',
				'directiva_id',
				'vicepresidencia_id',
				'vicepresidencia_ejecutiva_id'
			]

			for (const field of fkFields) {
				await queryInterface.addIndex(tableName, {
					fields: [field],
					name: `idx_employees_${field}`, // Convención de nombres para índices
					transaction
				})
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// 1. Eliminar los índices parciales creados
			await queryInterface.removeIndex('employees', 'unique_username_active_employee', { transaction })
			await queryInterface.removeIndex('employees', 'unique_email_active_employee', { transaction })
			await queryInterface.removeIndex('employees', 'unique_cedula_active_employee', { transaction })

			// 2. Eliminar índices de FK
			const fkFields = [
				'location_id',
				'cargo_id',
				'departamento_id',
				'directiva_id',
				'vicepresidencia_id',
				'vicepresidencia_ejecutiva_id'
			]
			for (const field of fkFields) {
				await queryInterface.removeIndex('employees', `idx_employees_${field}`, { transaction })
			}

			// 3. Restaurar la restricción única global de cédula (Revertir al estado anterior)
			// Solo haz esto si originalmente era única globalmente
			await queryInterface.addConstraint('employees', {
				fields: ['cedula'],
				type: 'unique',
				name: 'employees_cedula_key',
				transaction
			})

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}
