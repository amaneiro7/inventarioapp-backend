'use strict'

const LOCATION_MONITORING_TABLE = 'location_monitorings'
const newLocationsToMonitor = [{ id: '38c91a68-d95a-41c6-80b2-98c1c053698f' }]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const locationMonitoringsData = newLocationsToMonitor.map(loc => ({
				id: loc.id,
				location_id: loc.id,
				status: 'not available',
				last_scan: null,
				last_success: null,
				last_failed: null,
				created_at: new Date(),
				updated_at: new Date()
			}))

			if (locationMonitoringsData.length > 0) {
				await queryInterface.bulkInsert(LOCATION_MONITORING_TABLE, locationMonitoringsData, { transaction })
				console.log(`✅ Se crearon ${locationMonitoringsData.length} registros de monitoreo de ubicación.`)
			}

			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en el seeder de monitoreo de ubicaciones:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const ids = newLocationsToMonitor.map(loc => loc.id)

		if (ids.length > 0) {
			await queryInterface.bulkDelete(LOCATION_MONITORING_TABLE, {
				id: {
					[Sequelize.Op.in]: ids
				}
			})
			console.log(`⏪ Se eliminaron los registros de monitoreo para las ubicaciones especificadas.`)
		}
	}
}
