'use strict'

const { operatingSystem } = require('./operatingSystem/operatingSystem.js')

const TABLE_NAME = 'operating_system_versions'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const recordsToUpdate = operatingSystem.filter(os => parseInt(os.id, 10) <= 17)
		const recordsToInsert = operatingSystem.filter(os => parseInt(os.id, 10) > 17)

		// Update existing records
		for (const record of recordsToUpdate) {
			let name
			if (record.name === 'Windows 11') {
				name = `${record.name} ${record.version}`
			} else if (record.name === 'Windows 10') {
				name = `${record.name} ${record.version}`
			} else {
				name = record.name
			}
			await queryInterface.sequelize.query(
				`UPDATE "${TABLE_NAME}" SET "build_number" = :buildNumber, "version" = :version WHERE "id" = :id`,
				{
					replacements: {
						name,
						buildNumber: record.buildNumber,
						version: record.version,
						id: record.id
					},
					type: Sequelize.QueryTypes.UPDATE
				}
			)
		}

		// Insert new records
		if (recordsToInsert.length > 0) {
			const recordsToInsertDb = recordsToInsert.map(record => {
				let name
				if (record.name === 'Windows 11') {
					name = `${record.name} ${record.version}`
				} else if (record.name === 'Windows 10') {
					name = `${record.name} ${record.version}`
				} else {
					name = record.name
				}
				return {
					id: record.id,
					name,
					build_number: record.buildNumber,
					version: record.version
				}
			})
			await queryInterface.bulkInsert(TABLE_NAME, recordsToInsertDb, {})
		}
	},

	async down(queryInterface, Sequelize) {
		const recordsToUpdate = operatingSystem.filter(os => parseInt(os.id, 10) <= 17)
		const recordsToInsert = operatingSystem.filter(os => parseInt(os.id, 10) > 17)

		// Revert updated records
		const idsToRevert = recordsToUpdate.map(r => r.id)
		if (idsToRevert.length > 0) {
			await queryInterface.bulkUpdate(
				TABLE_NAME,
				{
					build_number: null,
					version: null,
					updated_at: new Date()
				},
				{
					id: { [Sequelize.Op.in]: idsToRevert }
				}
			)
		}

		// Delete inserted records
		if (recordsToInsert.length > 0) {
			const idsToDelete = recordsToInsert.map(record => record.id)
			await queryInterface.bulkDelete(TABLE_NAME, { id: { [Sequelize.Op.in]: idsToDelete } }, {})
		}
	}
}
