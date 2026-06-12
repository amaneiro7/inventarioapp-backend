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
		name: 'dashboard:read-hardware-evaluation-dashboard',
		description: 'Permite visualizar el tablero de control de evaluación de hardware para procesos de migración.'
	},
	{
		id: crypto.randomUUID(),
		name: 'dashboard:hardware-evaluation-dashboard:download',
		description: 'Permite descargar los reportes del tablero de control de evaluación de hardware.'
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

const newPermissionGroup = [
	{
		id: crypto.randomUUID(),
		name: 'Lector de Reglas de Migración',
		description: 'Permite visualizar las reglas de migración y el tablero de evaluación de hardware.'
	},
	{
		id: crypto.randomUUID(),
		name: 'Gestor de Reglas de Migración',
		description: 'Permite administrar (crear, editar, eliminar) las reglas de migración de hardware.'
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

			const groupsWithTimestamps = newPermissionGroup.map(g => ({
				...g,
				created_at: new Date(),
				updated_at: new Date()
			}))

			await queryInterface.bulkInsert('permission_groups', groupsWithTimestamps, { transaction })

			const lectorGroup = newPermissionGroup.find(g => g.name === 'Lector de Reglas de Migración')
			const gestorGroup = newPermissionGroup.find(g => g.name === 'Gestor de Reglas de Migración')
			const assignments = []

			newPermissions.forEach(p => {
				// Asignar permisos de lectura al Lector
				if (p.name.includes('read') || p.name.includes('download')) {
					assignments.push({
						permission_id: p.id,
						permission_group_id: lectorGroup.id,
						created_at: new Date(),
						updated_at: new Date()
					})
				}
				// Asignar permisos de escritura/gestión al Gestor
				if (
					p.name.includes('create') ||
					p.name.includes('update') ||
					p.name.includes('delete') ||
					p.name.includes('download')
				) {
					assignments.push({
						permission_id: p.id,
						permission_group_id: gestorGroup.id,
						created_at: new Date(),
						updated_at: new Date()
					})
				}
			})

			await queryInterface.bulkInsert('asignacion_permiso_grupo', assignments, { transaction })

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
				'asignacion_permiso_grupo',
				{ permission_group_id: { [Sequelize.Op.in]: newPermissionGroup.map(g => g.id) } },
				{ transaction }
			)
			await queryInterface.bulkDelete(
				'permission_groups',
				{ id: { [Sequelize.Op.in]: newPermissionGroup.map(g => g.id) } },
				{ transaction }
			)
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
