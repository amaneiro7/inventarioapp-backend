'use strict'

// IDs de los grupos (deben coincidir con el seeder de permissionGroupTable)
const ADMIN_GROUP_ID = 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01'
const IT_SUPPORT_GROUP_ID = 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02'
const READ_ONLY_GROUP_ID = 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03'

// IDs de los permisos (deben coincidir con el seeder de permissionTable)
const PERMISSIONS = {
	USERS_CREATE: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
	USERS_READ: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
	USERS_UPDATE: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
	USERS_DELETE: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
	DEVICES_CREATE: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11',
	DEVICES_READ: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b12',
	DEVICES_UPDATE: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b13',
	DEVICES_DELETE: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b14',
	ACCESS_CONTROL_READ: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380c11',
	ACCESS_CONTROL_ASSIGN: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380c12'
}

const relations = [
	// El grupo Admin tiene TODOS los permisos
	...Object.values(PERMISSIONS).map(permId => ({ permission_group_id: ADMIN_GROUP_ID, permission_id: permId })),

	// El grupo IT Support solo puede gestionar dispositivos
	{ permission_group_id: IT_SUPPORT_GROUP_ID, permission_id: PERMISSIONS.DEVICES_CREATE },
	{ permission_group_id: IT_SUPPORT_GROUP_ID, permission_id: PERMISSIONS.DEVICES_READ },
	{ permission_group_id: IT_SUPPORT_GROUP_ID, permission_id: PERMISSIONS.DEVICES_UPDATE },
	{ permission_group_id: IT_SUPPORT_GROUP_ID, permission_id: PERMISSIONS.DEVICES_DELETE },

	// El grupo Read-Only solo puede leer
	{ permission_group_id: READ_ONLY_GROUP_ID, permission_id: PERMISSIONS.USERS_READ },
	{ permission_group_id: READ_ONLY_GROUP_ID, permission_id: PERMISSIONS.DEVICES_READ },
	{ permission_group_id: READ_ONLY_GROUP_ID, permission_id: PERMISSIONS.ACCESS_CONTROL_READ }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const relationsWithTimestamps = relations.map(r => ({
			...r,
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('permission_group_permissions', relationsWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('permission_group_permissions', null, {})
	}
}
