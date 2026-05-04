'use strict'

/** @type {import('sequelize-cli').Migration} */

const newPermissions = [
	{
		id: '3ff7d447-ff51-4d00-9c62-d180e0f13a93',
		name: 'isp-links:read-list',
		description: 'Permite listar todo los proveedores de servicios de internet (ISP) registrados en el sistema.'
	},
	{
		id: 'ba9e4785-febc-443c-a2ca-5046b08695ea',
		name: 'isp-links:read',
		description: 'Permite ver el detalle de un proveedor de servicios de internet (ISP) específico.'
	},
	{
		id: '4606d3fa-77dd-4feb-b22b-7edf3ed0e88d',
		name: 'isp-links:create',
		description: 'Permite crear un nuevo proveedor de servicios de internet (ISP) en el sistema.'
	},
	{
		id: 'f2025954-420d-468f-9b38-f69d1f6fd299',
		name: 'isp-links:update',
		description: 'Permite actualizar un proveedor de servicios de internet (ISP) existente en el sistema.'
	},
	{
		id: 'e539786d-5333-4af7-9e8a-3db9783762b1',
		name: 'admin:clear-cache',
		description: 'Permite limpiar el cache de la aplicación.'
	}
]

module.exports = {
	async up(queryInterface, Sequelize) {
		const permissionsWithTimestamps = newPermissions.map(p => ({
			...p,
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('permissions', permissionsWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'permissions',
			{
				id: { [Sequelize.Op.in]: newPermissions.map(p => p.id) }
			},
			{}
		)
	}
}
