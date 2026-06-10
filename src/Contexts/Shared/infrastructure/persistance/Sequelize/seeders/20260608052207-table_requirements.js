'use strict'

const crypto = require('node:crypto')
const { migrationRule, processorsMigrationRulesData } = require('./newUpdate/migrationRuleProcessor')

const newPermissions = [
	{
		id: crypto.randomUUID(),
		name: 'migration-rules:read-list',
		description: 'Permite listar todas las reglas de migración de hardware registradas.'
	},
	{
		id: crypto.randomUUID(),
		name: 'migration-rules:read',
		description: 'Permite ver el detalle de una regla de migración de hardware específica.'
	},
	{
		id: crypto.randomUUID(),
		name: 'migration-rules:create',
		description: 'Permite crear una nueva regla de migración de hardware.'
	},
	{
		id: crypto.randomUUID(),
		name: 'migration-rules:update',
		description: 'Permite actualizar los parámetros de una regla de migración de hardware existente.'
	},
	{
		id: crypto.randomUUID(),
		name: 'migration-rules:delete',
		description: 'Permite eliminar una regla de migración de hardware del sistema.'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.bulkInsert(
				'migration_rules',
				[migrationRule].map(({ id, minRamGb, minDiskGb, isActive }) => ({
					id,
					min_ram_gb: minRamGb,
					min_disk_gb: minDiskGb,
					is_active: isActive,
					created_at: new Date(),
					updated_at: new Date()
				})),
				{ transaction }
			)

			const permissionsWithTimestamps = newPermissions.map(p => ({
				...p,
				created_at: new Date(),
				updated_at: new Date()
			}))

			await queryInterface.bulkInsert('permissions', permissionsWithTimestamps, { transaction })

			await queryInterface.bulkInsert('processors_migration_rules', processorsMigrationRulesData, { transaction })

			await transaction.commit()
			console.log(
				`✅ Se insertó la regla de migración, los permisos y ${processorsMigrationRulesData.length} procesadores asociados.`
			)
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la ejecución del seeder table_requirements:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Eliminamos en orden inverso para respetar las llaves foráneas
			await queryInterface.bulkDelete(
				'permissions',
				{ name: { [Sequelize.Op.in]: newPermissions.map(p => p.name) } },
				{ transaction }
			)
			await queryInterface.bulkDelete('processors_migration_rules', null, { transaction })
			await queryInterface.bulkDelete('migration_rules', null, { transaction })

			await transaction.commit()
			console.log('⏪ Requisitos de migración y permisos eliminados.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			throw error
		}
	}
}
