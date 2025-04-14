'use strict'

const processors = [
	{
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
	},
	// de Boleita	
	{
		id: '10603d93-fb0d-489e-bc66-33acf7ec6437',
		product_collection: 'Intel(R) Core(TM) i5',
		number_model: '550',
		frequency: '3.20GHz',
		cores: 2,
		threads: true
	},
	{
		id: 'ccf3a235-b43f-4fcf-be12-99bf441dd989',
		product_collection: 'Intel(R) Core(TM) i7',
		number_model: '7700',
		frequency: '3.60GHz',
		cores: 4,
		threads: true
	},
	// resto de agencia
	{
		id: 'f69229af-efcf-40a7-bfd4-a4848fbda639',
		product_collection: 'Intel(R) Pentium(R) Dual-Core',
		number_model: 'E2220',
		frequency: '2.40GHz',
		cores: 2,
		threads: false
	},
	{
		id: '2452b822-8e2c-420c-91b0-7d63889cb3f2',
		product_collection: 'Intel(R) Pentium(R) D',
		number_model: '820',
		frequency: '2.80GHz',
		cores: 2,
		threads: false
	},
	{
		id: 'eaab0158-63e1-44bc-8abb-64940b1a5674',
		product_collection: 'Intel(R) Pentium(R) 4',
		number_model: '650',
		frequency: '3.40GHz',
		cores: 1,
		threads: true
	},
	{
		id: 'f0effa9b-ca8d-4db3-b4f7-afc73486c5ef',
		product_collection: 'Intel(R) Celeron(R)',
		number_model: '420',
		frequency: '1.60GHz',
		cores: 1,
		threads: false
	},
]

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
