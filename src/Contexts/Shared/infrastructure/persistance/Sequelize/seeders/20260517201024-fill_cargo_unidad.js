'use strict'

const { cargoUnidadData } = require('./newUpdate/cargoUnidad')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Filtrar registros que no tienen IDs válidos para evitar errores de integridad
			const validData = cargoUnidadData.filter(d => d.unidad_id && d.cargo_id)

			if (validData.length === 0) {
				console.warn('⚠️ No se encontraron datos válidos para insertar en cargo_unidad.')
				await transaction.rollback()
				return
			}

			await queryInterface.bulkInsert(
				'cargo_unidad',
				validData.map(({ cargo_id, unidad_id }) => ({
					unidad_id,
					cargo_id,
					created_at: new Date(),
					updated_at: new Date()
				})),
				{ transaction }
			)

			await transaction.commit()
			console.log(`✅ Se insertaron ${validData.length} relaciones en la tabla cargo_unidad.`)
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la ejecución del seeder fill_cargo_unidad:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('cargo_unidad', null, {})
	}
}
