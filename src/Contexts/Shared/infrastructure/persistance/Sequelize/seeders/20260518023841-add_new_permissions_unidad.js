'use strict'

/** @type {import('sequelize-cli').Migration} */

const newPermissions = [
	{
		id: crypto.randomUUID(),
		name: 'unidades:read-list',
		description: 'Permite listar todos los proveedores de servicios de internet (ISP) registrados.'
	},
	{
		id: crypto.randomUUID(),
		name: 'unidades:read',
		description: 'Permite ver el detalle de un proveedor de servicios de internet (ISP) específico.'
	},
	{
		id: crypto.randomUUID(),
		name: 'unidades:create',
		description: 'Permite registrar un nuevo proveedor de servicios de internet (ISP).'
	},
	{
		id: crypto.randomUUID(),
		name: 'unidades:update',
		description: 'Permite actualizar la información de un proveedor de servicios de internet (ISP) existente.'
	}
]

module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const permissionsWithTimestamps = newPermissions.map(p => ({
				...p,
				created_at: new Date(),
				updated_at: new Date()
			}))
			await queryInterface.bulkInsert('permissions', permissionsWithTimestamps, { transaction })
			await transaction.commit()
			console.log('✅ Permisos de unidades insertados con éxito.')
		} catch (error) {
			await transaction.rollback()
			console.error('❌ Error insertando permisos de unidades:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.bulkDelete(
				'permissions',
				{
					name: { [Sequelize.Op.in]: newPermissions.map(p => p.name) }
				},
				{ transaction }
			)
			await transaction.commit()
			console.log('⏪ Permisos de unidades eliminados.')
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}
