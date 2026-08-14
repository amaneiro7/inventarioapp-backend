'use strict'

const { newProcessors } = require('./newUpdate0826/newProcessors')

const PROCESSOR_TABLE = 'processors'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		queryInterface.bulkInsert(
			PROCESSOR_TABLE,
			newProcessors.map(({ id, product_collection, number_model, frequency, cores, threads }) => {
				return {
					id,
					product_collection,
					number_model,
					frequency,
					cores,
					threads,
					name: `${product_collection} ${number_model} CPU @ ${frequency}`,
					created_at: new Date(),
					updated_at: new Date()
				}
			})
		)
	},

	async down (queryInterface, Sequelize) {
		queryInterface.bulkDelete(
			PROCESSOR_TABLE,
			newProcessors.map(processor => processor.id),
			{}
		)
	}
}
