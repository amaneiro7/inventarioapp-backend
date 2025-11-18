'use strict'

const { randomUUID } = require('crypto')

const permissions = [
	// Permisos de Usuario
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', name: 'users.create' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', name: 'users.read' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', name: 'users.update' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', name: 'users.delete' },
	// Permisos de Dispositivos
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11', name: 'devices.create' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b12', name: 'devices.read' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b13', name: 'devices.update' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b14', name: 'devices.delete' },
	// Permisos de Control de Acceso (meta-permisos)
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380c11', name: 'access_control.read' },
	{ id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380c12', name: 'access_control.assign' }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const permissionsWithTimestamps = permissions.map(p => ({
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
				id: { [Sequelize.Op.in]: permissions.map(p => p.id) }
			},
			{}
		)
	}
}
