'use strict'
const { v4: uuidv4 } = require('crypto')

const dataModelProcesor = [
	// ... (tu data completa aquí)
	{
		modelName: 'HP ProBook 460 16 inch G11 Notebook PC',
		modelId: '5f37c47d-5103-43cc-a039-a2b81969e842',

		processorName: 'Intel(R) Core(TM) i7 13700H',
		processorId: 'e7cc69cc-ba84-4b08-85c9-e96733dcdfe1'
	},
	{
		modelName: 'HP ENVY Laptop 16-h1xxx',
		modelId: '23901920-0a41-4fba-9238-6d81af9a9e97',

		processorName: 'Intel(R) Core(TM) Ultra 7 155U',
		processorId: '2340dea8-5ea6-4f6a-8677-ae3465b4ca43'
	}

]

const PROCESSOR_TABLE = 'model_processor'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.bulkInsert(
				PROCESSOR_TABLE,
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

	async down (queryInterface, Sequelize) {
		/**
		 * Reverts the seeder by deleting all entries from the model_processor table.
		 */
		await queryInterface.bulkDelete(PROCESSOR_TABLE, null, {})
	}
}
