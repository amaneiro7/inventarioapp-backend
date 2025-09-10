'use strict'

const { operatingSystem } = require('./operatingSystem/operatingSystem')
const { newOsUpdate } = require('./operatingSystem/newOs')

const DEVICE_COMPUTER_TABLE = 'device_computers'
const DEVICE_TABLE = 'devices'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// 2. Iterate through the devices to be updated and execute the update.
		for (const update of newOsUpdate) {
			const serial = update.serial ? update.serial.trim() : null
			const osNameKey = update.operatingSystemName
			const osId = operatingSystem.find(os => os.name === osNameKey)?.id

			if (osId && serial) {
				console.log(`Updating device with serial ${serial} to OS ID ${osId}`)
				try {
					await queryInterface.sequelize.query(
						`UPDATE \"${DEVICE_COMPUTER_TABLE}\" 
             SET \"operating_system_version_id\" = :osId, \"updated_at\" = :now
             WHERE \"device_id\" IN (
               SELECT \"id\" FROM \"${DEVICE_TABLE}\" WHERE \"serial\" = :serial
             )`,
						{
							replacements: {
								osId: osId,
								now: new Date(),
								serial: serial
							},
							type: Sequelize.QueryTypes.UPDATE
						}
					)
				} catch (error) {
					console.error(`Failed to update device with serial ${serial}:`, error)
				}
			} else {
				if (!serial) {
					console.warn(`Skipping update because serial is empty for computer: ${update.computerName}`)
				} else {
					console.warn(
						`Could not find a matching OS ID for '${osNameKey}'. Skipping update for serial: ${serial}`
					)
				}
			}
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Reverting this specific, data-driven update is complex as it would require
		 * storing the previous state of each updated row.
		 * Therefore, the down method is intentionally left empty.
		 * A manual backup or a separate rollback script would be needed for a true reversal.
		 */
		await Promise.resolve()
	}
}
