'use strict'

const newProcessorName = [
	{
		id: 'eaab0158-63e1-44bc-8abb-64940b1a5674',
		number_model: 'HT 650',
		name: 'Intel(R) Pentium(R) 4 HT 650 CPU @ 3.40GHz'
	},
	{
		id: '10603d93-fb0d-489e-bc66-33acf7ec6437',
		number_model: '650',
		name: 'Intel(R) Core(TM) i5 650 CPU @ 3.2GHz'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const update of newProcessorName) {
				const { id, number_model, name } = update

				if (id) {
					console.log(`Updating processor ID ${id}: number_model=${number_model}, name=${name}`)
					await queryInterface.bulkUpdate(
						'processors',
						{
							number_model: number_model,
							name: name,
							updated_at: new Date()
						},
						{ id: id },
						{ transaction }
					)
				}
			}
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			console.error('Migration failed. Rolling back. Error:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		// Revertir cambios de nombre manualmente es complejo sin el estado anterior.
		// Se recomienda realizar un backup de la tabla antes de ejecutar si se requiere reversibilidad total.
	}
}
