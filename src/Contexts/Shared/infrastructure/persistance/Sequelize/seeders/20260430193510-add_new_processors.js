'use strict'

const newProcessors = [
	{
		id: '2b2cb1f8-8bc4-4466-9488-60aa48590a68',
		product_collection: 'AMD Ryzen 3',
		number_model: '3200U with Radeon Vega Mobile Gfx',
		frequency: '2.6GHz',
		cores: 2,
		threads: true
	},
	{
		id: '24844614-a77d-4b2f-a9e1-c92de2cc47f2',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '1334U',
		frequency: '3.4GHz',
		cores: 10,
		threads: true
	},
	{
		id: '65fd6c17-645e-4ec9-85ef-509123044aff',
		product_collection: 'Snapdragon(R) X Plus',
		number_model: 'X1P64100 Qualcomm(R) Oryon(TM)',
		frequency: '3.4GHz',
		cores: 10,
		threads: false
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.bulkInsert(
			'processors',
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

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete(
			'processors',
			newProcessors.map(processor => processor.id),
			{}
		)
	}
}
