'use strict'

const { agencyClass } = require('./newUpdate/agencytype')
const tableName = 'locations'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const location of agencyClass) {
				if (!location.agencyClassification) {
					console.warn(`  ⚠️ Saltando ubicación "${location.name}": agencyClassification no encontrado.`)
					continue
				}

				await queryInterface.bulkUpdate(
					tableName,
					{
						agency_classification: location.agencyClassification
					},
					{ id: location.id },
					{ transaction }
				)
			}
			await transaction.commit()
			console.log('✅ Actualización de agency_classification en locations completada con éxito.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la actualización de agency_classification:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const ids = agencyClass.map(p => p.id)
			await queryInterface.bulkUpdate(
				tableName,
				{
					agency_classification: null
				},
				{ id: { [Sequelize.Op.in]: ids } },
				{ transaction }
			)
			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			throw error
		}
	}
}
