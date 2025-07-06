'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Primero, consulta los datos necesarios de la tabla 'locations'
		const locations = await queryInterface.sequelize.query(
			`SELECT
         id AS id
       FROM locations`,
			{ type: Sequelize.QueryTypes.SELECT }
		)

		// Mapea los resultados para que coincidan con la estructura de location_monitorings
		const locationMonitoringsData = locations.map(location => {
			console.log(location)
			return {
				id: location.id,
				location_id: location.id, // Asume que 'location_id' en location_monitorings se refiere al ID del sitio
				status: 'not available', // Estado inicial desconocido
				last_scan: null,
				last_success: null,
				last_failed: null,
				created_at: new Date(),
				updated_at: new Date()
			}
		})

		// Inserta los datos en la tabla 'location_monitorings'
		if (locationMonitoringsData.length > 0) {
			await queryInterface.bulkInsert('location_monitorings', locationMonitoringsData, {})
			console.log(`Se insertaron ${locationMonitoringsData.length} registros en 'location_monitorings'.`)
		} else {
			console.log('No se encontraron sitios con dirección IP para seedear en "location_monitorings".')
		}
	},

	async down(queryInterface, Sequelize) {
		// Opción 2 (Más drástica, si el seed siempre limpia la tabla):
		await queryInterface.bulkDelete('location_monitorings', null, {})
		// console.log('Se eliminaron todos los registros de "location_monitorings".');
	}
}
