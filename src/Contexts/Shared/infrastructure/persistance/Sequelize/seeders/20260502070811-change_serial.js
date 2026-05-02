'use strict'

const fixSerial = [
	{
		serial: 'WB11218504WB03041101',
		newSerial: 'WB11218504'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const item of fixSerial) {
				await queryInterface.bulkUpdate(
					'devices',
					{
						serial: item.newSerial,
						updated_at: new Date()
					},
					{ serial: item.serial },
					{ transaction }
				)
			}
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const item of fixSerial) {
				await queryInterface.bulkUpdate(
					'devices',
					{
						serial: item.serial,
						updated_at: new Date()
					},
					{ serial: item.newSerial },
					{ transaction }
				)
			}
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}
