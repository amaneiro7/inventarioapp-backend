'use strict'

const newRoles = [
	{ id: '5', name: 'Estandar' },
	{ id: '6', name: 'Dashboard/Monitoreo' },
	{ id: '7', name: 'Invitado' }
]

const oldRolesMap = {
	Admin: '1', // Mismo ID
	Especialista: '5', // Mapea a Estandar
	Coordinador: '5', // Mapea a Estandar
	Gerente: '5' // Mapea a Dashboard/Monitoreo
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// --- PASO 1: OBTENER ROLES ANTIGUOS ---
			console.log('Obteniendo roles antiguos...')
			const oldRoles = await queryInterface.sequelize.query('SELECT id, name FROM role', {
				type: Sequelize.QueryTypes.SELECT,
				transaction
			})

			// --- PASO 2: CREAR LOS NUEVOS ROLES ---
			console.log('Creando nuevos roles...')
			await queryInterface.bulkInsert('role', newRoles, { transaction })

			// --- PASO 3: MIGRAR USUARIOS A LOS NUEVOS ROLES ---
			console.log('Migrando usuarios a los nuevos roles...')
			for (const oldRole of oldRoles) {
				const newRoleId = oldRolesMap[oldRole.name]
				if (newRoleId) {
					console.log(`Migrando usuarios del rol '${oldRole.name}' al nuevo rol ID: ${newRoleId}`)
					await queryInterface.bulkUpdate(
						'users',
						{ role_id: newRoleId },
						{ role_id: oldRole.id },
						{ transaction }
					)
				} else {
					console.warn(
						`Advertencia: No se encontró un mapeo para el rol antiguo '${oldRole.name}'. Los usuarios con este rol no serán migrados.`
					)
				}
			}

			// --- PASO 4: ELIMINAR LOS ROLES ANTIGUOS ---
			// (Excepto el Admin que se reutiliza/actualiza)
			console.log('Eliminando roles antiguos...')
			const oldRoleIdsToDelete = oldRoles.filter(r => r.name !== 'Admin').map(r => r.id)

			await queryInterface.bulkDelete(
				'role',
				{
					id: {
						[Sequelize.Op.in]: oldRoleIdsToDelete
					}
				},
				{ transaction }
			)

			await transaction.commit()
			console.log('✅ Migración de roles completada exitosamente.')
		} catch (error) {
			await transaction.rollback()
			console.error('Error durante la migración de roles:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		// La reversión es compleja, pero un intento sería:
		// 1. Re-crear los roles antiguos.
		// 2. Intentar re-mapear usuarios (esto es imperfecto porque perdimos el estado original).
		// 3. Eliminar los roles nuevos.
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const oldRolesToRestore = [
				{ id: '2', name: 'Especialista' },
				{ id: '3', name: 'Coordinador' },
				{ id: '4', name: 'Gerente' }
			]

			// Por simplicidad, en el down, simplemente restauramos los roles antiguos
			// y dejamos a los usuarios en su estado migrado. Una reversión completa
			// requeriría un backup.
			await queryInterface.bulkDelete('role', null, { transaction }) // Limpiar roles
			await queryInterface.bulkInsert('role', oldRolesToRestore, { transaction }) // Restaurar los antiguos

			// Opcional: Reasignar todos los no-admin a 'Especialista' como un estado seguro.
			await queryInterface.sequelize.query("UPDATE users SET role_id = '2' WHERE role_id != '1'", {
				type: Sequelize.QueryTypes.SELECT,
				transaction
			})
			await transaction.commit()
			console.log('⏪ Reversión de migración de roles completada.')
		} catch (error) {
			await transaction.rollback()
			console.error('Error durante la reversión de la migración de roles:', error)
			throw error
		}
	}
}
