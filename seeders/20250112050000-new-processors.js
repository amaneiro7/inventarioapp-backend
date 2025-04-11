'use strict'

const processors = [{
	id: '8c3255a1-bbae-44c9-ad5f-7b62a65f9676',
	product_collection: 'AMD Athlon Silver',
	number_model: '3050U',
	frequency: '2.30GHz',
	cores: 2,
	threads: false
},
{
	id: 'fdb4b53d-e2a0-47d5-8978-15e187113150',
	product_collection: 'AMD Ryzen 3',
	number_model: '3250U',
	frequency: '2.60GHz',
	cores: 2,
	threads: true
},
{
	id: 'ec898a3c-86db-4100-8c08-ef277f214e78',
	product_collection: 'Intel(R) Core(TM) i7',
	number_model: '1145G7',
	frequency: '2.60GHz',
	cores: 4,
	threads: true
},
{
	id: '0e3ce31e-7206-4cce-9474-8a972a997415',
	product_collection: 'Intel(R) Celeron(R)',
	number_model: 'G1610',
	frequency: '2.60GHz',
	cores: 2,
	threads: false
},]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'processors',
			processors.map(({ id, product_collection, number_model, frequency, cores, threads }) => {
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
		return queryInterface.bulkDelete('processors', null, {})
	}
}
