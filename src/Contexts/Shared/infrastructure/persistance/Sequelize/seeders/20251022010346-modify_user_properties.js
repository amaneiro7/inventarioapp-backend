'use strict'

const { randomUUID } = require('crypto') // Usamos crypto para generar UUIDs seguros

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// --- FASE 1: OBTENER DATOS NECESARIOS ---
			console.log('Obteniendo usuarios y rol de administrador...')
			// Get all users with their old email, role, password and all employees
			const [users, [adminRole]] = await Promise.all([
				queryInterface.sequelize.query('SELECT id, email, name, last_name, role_id, password FROM users', {
					type: Sequelize.QueryTypes.SELECT,
					transaction
				}),
				queryInterface.sequelize.query("SELECT id FROM role WHERE name = 'Admin'", {
					type: Sequelize.QueryTypes.SELECT,
					transaction
				})
			])

			const adminRoleId = adminRole?.id
			console.log(`Usuarios encontrados: ${users.length}. ID de Rol Admin: ${adminRoleId}`)

			const employeePromises = users.map(async user => {
				let employee = null
				// Solo buscar si el usuario tiene un email
				if (user.email) {
					const [foundEmployee] = await queryInterface.sequelize.query(
						'SELECT id FROM employees WHERE LOWER(email) = LOWER(:email)',
						{
							replacements: { email: user.email.toLowerCase() },
							type: Sequelize.QueryTypes.SELECT,
							transaction
						}
					)
					employee = foundEmployee
				}
				return {
					user,
					employee
				}
			})

			const results = await Promise.all(employeePromises)
			console.log('Starting user-employee association seeder...')

			// 4. Procesamiento Final: Filtramos y separamos los resultados.
			const notFoundUsers = results
				.filter(result => !result.employee) // Filtramos solo aquellos donde 'employee' es undefined/null
				.map(result => result.user) // Dejamos solo los datos del 'user' original

			const foundEmployees = results
				.filter(result => result.employee) // Filtramos solo aquellos donde 'employee' fue encontrado
				.map(result => ({
					user: result.user,
					employeeId: result.employee.id
				})) // Ejemplo de estructura para el array final de empleados asociados

			console.log(
				'✅ Búsqueda completada. Encontrados:',
				foundEmployees.length,
				'Faltantes:',
				notFoundUsers.length
			)
			// ----------------------------------------------------------------------

			// --- FASE 2: ACTUALIZAR EMPLEADOS ENCONTRADOS (type = 'service') ---
			if (foundEmployees.length > 0) {
				const employeeIdsToUpdate = foundEmployees.map(e => e.employeeId)

				console.log(`🔨 Actualizando ${employeeIdsToUpdate.length} empleados existentes a type 'service'...`)

				await queryInterface.bulkUpdate(
					'employees',
					{ type: 'service' },
					{ id: { [Sequelize.Op.in]: employeeIdsToUpdate } }, // Usar Op.in para un solo query
					{ transaction }
				)
				console.log('✅ Empleados existentes actualizados.')
			}

			// --- FASE 3: CREAR EMPLEADOS FALTANTES (type = 'service') ---
			let createdEmployeeAssociations = []
			if (notFoundUsers.length > 0) {
				console.log(`➕ Creando ${notFoundUsers.length} nuevos empleados...`)

				// 3.1 Crear los nuevos empleados para el bulkInsert
				const newEmployeesData = notFoundUsers.map(user => {
					// Generar el nombre de usuario (ej: 'juan.perez@corp.com' -> 'juan.perez')
					const userName = user.email?.split('@')[0]

					return {
						id: randomUUID(), // Si tu DB no maneja UUIDs nativos, debes generarlo aquí si es necesario.
						user_name: userName,
						type: 'service',
						name: user.name,
						last_name: user.last_name,
						email: user.email,
						is_still_working: true,
						// Todos los demás campos quedan en NULL o valor por defecto
						employee_code: null,
						nationality: null,
						cedula: null,
						location_id: null,
						directiva_id: null,
						vicepresidencia_ejecutiva_id: null,
						vicepresidencia_id: null,
						departamento_id: null,
						cargo_id: null,
						extension: Sequelize.literal('ARRAY[]::varchar[]'), // Guardar como JSON string
						phone: Sequelize.literal('ARRAY[]::varchar[]'), // Guardar como JSON string
						created_at: new Date(),
						updated_at: new Date()
					}
				})
				// 3.2 Realizar el bulkInsert y capturar los IDs generados
				// NOTA: Sequelize/Node solo retorna los IDs generados si la DB los soporta (ej: PostgreSQL)
				const createdEmployees = await queryInterface.bulkInsert('employees', newEmployeesData, {
					returning: true, // Importante para obtener los IDs generados
					transaction
				})

				// 3.3 Crear las asociaciones a partir de los resultados de la inserción
				createdEmployeeAssociations = notFoundUsers.map((user, index) => ({
					user: {
						id: user.id
					},
					employeeId: createdEmployees[index]?.id // Usar el ID retornado
				}))

				console.log('✅ Nuevos empleados creados y mapeados.')
			}

			// --- FASE 4: ASOCIACIÓN FINAL (bulkUpdate en la tabla users) ---
			const allAssociations = [...foundEmployees, ...createdEmployeeAssociations]

			console.log(`🔄 allAssociations: ${allAssociations.length}`, allAssociations)

			if (allAssociations.length > 0) {
				console.log(`🔗 Asociando ${allAssociations.length} usuarios con sus empleados...`)

				// Preparamos un array de promesas de actualización
				const updatePromises = allAssociations.map(association => {
					const user = users.find(u => u.id === association.user.id)
					const isUserAdmin = user?.role_id === adminRoleId

					// Usamos una consulta raw para manejar de forma segura la contraseña con caracteres especiales ($)
					// El uso de replacements previene errores de "Named bind parameter"
					return queryInterface.sequelize.query(
						`
						UPDATE users
						SET 
							employee_id = :employeeId,
							password_never_expires = :passwordNeverExpires,
							password_history = ARRAY[:password]
						WHERE id = :userId
					`,
						{
							replacements: {
								employeeId: association.employeeId,
								passwordNeverExpires: isUserAdmin,
								password: user.password,
								userId: user.id
							},
							transaction
						}
					)
				})

				await Promise.all(updatePromises)
				console.log('✅ Propiedad employee_id de los usuarios actualizada exitosamente.')
			} else {
				console.log('ℹ️ No se encontraron usuarios para asociar/crear.')
			}

			await transaction.commit()
			console.log('🌟 Seeder completado exitosamente.')
		} catch (error) {
			await transaction.rollback()
			console.error('Error during user-employee association seeder:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		// This will set the employee_id back to null for all users.
		// The original email data cannot be restored automatically.
		await queryInterface.bulkUpdate(
			'users',
			{ employee_id: null },
			{}, // An empty where clause updates all rows
			{}
		)
	}
}
