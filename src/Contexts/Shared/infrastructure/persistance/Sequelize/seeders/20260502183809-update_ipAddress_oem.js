'use strict'

const { newOEMIPUpdate } = require('./newUpdate/updateOEMIpAddress')

const DEVICE_COMPUTER_TABLE = 'device_computers'
const DEVICE_TABLE = 'devices'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Es recomendable envolver todo en una transacción para mayor seguridad
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const update of newOEMIPUpdate) {
				const { computerName, ipAddress } = update

				if (ipAddress && computerName) {
					console.log(`Updating device with computerName ${computerName} to IP ${ipAddress}`)
					await queryInterface.sequelize.query(
						`UPDATE "${DEVICE_COMPUTER_TABLE}"
          SET "ip_address" = :ipAddress, "updated_at" = :now
          WHERE "computer_name" = :computerName`,
						{
							replacements: {
								ipAddress: ipAddress,
								now: new Date(),
								computerName: computerName
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
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const update of newOEMIPUpdate) {
				const { computerName } = update

				if (computerName) {
					console.log(`Reverting IP address for device with computerName ${computerName}`)
					await queryInterface.sequelize.query(
						`UPDATE "${DEVICE_COMPUTER_TABLE}"
            SET "ip_address" = NULL, "updated_at" = :now
            WHERE "computer_name" = :computerName`,
						{
							replacements: {
								now: new Date(),
								computerName: computerName
							},
							type: Sequelize.QueryTypes.UPDATE,
							transaction
						}
					)
				}
			}
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			console.error(`Migration rollback failed. Error:`, error)
			throw error
		}
	}
}
