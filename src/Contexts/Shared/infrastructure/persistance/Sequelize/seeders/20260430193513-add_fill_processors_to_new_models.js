'use strict'
const { v4: uuidv4 } = require('crypto')

const dataModelProcesor = [
	// ... (tu data completa aquí)
	{
		modelName: 'QL15R3BM8256',
		modelId: 'cabda7e3-6381-4f9a-9f45-4067d6496e4e',
		processorName: 'AMD Ryzen 3 3200U with Radeon Vega Mobile Gfx',
		processorId: '2b2cb1f8-8bc4-4466-9488-60aa48590a68'
	},
	{
		modelName: 'Vivobook_ASUSLaptop X1404VA_X1404VA',
		modelId: 'a813fa80-4074-4b2b-8c66-b77ee5a3aae3',
		processorName: 'Intel(R) Core(TM) i5 1334U CPU @ 3.4GHz',
		processorId: '24844614-a77d-4b2f-a9e1-c92de2cc47f2'
	},
	{
		modelName: 'Inspiron 14 5441',
		modelId: 'db16f029-0502-44f3-9953-8e62e5c16772',
		processorName: 'Snapdragon(R) X Plus X1P64100 Qualcomm(R) Oryon(TM)',
		processorId: '65fd6c17-645e-4ec9-85ef-509123044aff'
	},
	{
		modelName: 'ThinkCentre M58e',
		modelId: 'cf9bfd9d-a6aa-472f-95cc-380f31e81f0e',
		processorName: 'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz',
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.bulkInsert(
				'model_processor',
				dataModelProcesor.map(({ modelId, processorId }) => ({
					model_id: modelId,
					processor_id: processorId,
					created_at: new Date(),
					updated_at: new Date()
				})),
				{ transaction }
			)

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			console.error('Error en el seeder de model_processor:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Reverts the seeder by deleting all entries from the model_processor table.
		 */
		await queryInterface.bulkDelete('model_processor', null, {})
	}
}
