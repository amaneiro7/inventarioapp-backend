'use strict'

const { newLocationUpdate } = require('./newUpdate/updateLocation')

const DEVICE_TABLE = 'devices'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Es recomendable envolver todo en una transacción para mayor seguridad
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const update of newLocationUpdate) {
				const { serial, locationId } = update

				if (locationId && serial) {
					console.log(`Updating device with serial ${serial} to location ID ${locationId}`)
					await queryInterface.sequelize.query(
						`UPDATE \"${DEVICE_TABLE}\" 
          SET \"location_id\" = :locationId, \"updated_at\" = :now
          WHERE \"serial\" = :serial`,
						{
							replacements: {
								locationId: locationId,
								now: new Date(),
								serial: serial
							},
							type: Sequelize.QueryTypes.UPDATE,
							transaction
						}
					)
				}
			}
			await transaction.commit()
		} catch (error) {
			// Si algo falla, deshacemos todo lo anterior
			await transaction.rollback()
			console.error(`Migration failed. Rolling back. Error:`, error)
			throw error // Es importante lanzar el error para que Sequelize sepa que la migración falló
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}
