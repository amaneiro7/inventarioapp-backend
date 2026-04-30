'use strict'

const { newIPUpdate } = require('./newUpdate/updateIpAddress')
const DEVICE_COMPUTER_TABLE = 'device_computers'
const DEVICE_TABLE = 'devices'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Es recomendable envolver todo en una transacción para mayor seguridad
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const update of newIPUpdate) {
				const { serial, ipAddress } = update

				if (ipAddress && serial) {
					console.log(`Updating device with serial ${serial} to IP ${ipAddress}`)
					await queryInterface.sequelize.query(
						`UPDATE \"${DEVICE_COMPUTER_TABLE}\" 
          SET \"ip_address\" = :ipAddress, \"updated_at\" = :now
          WHERE \"device_id\" IN (
            SELECT \"id\" FROM \"${DEVICE_TABLE}\" WHERE \"serial\" = :serial
          )`,
						{
							replacements: {
								ipAddress: ipAddress,
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
