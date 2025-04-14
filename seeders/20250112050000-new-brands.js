'use strict'

const brands = [
	{
		id: '16707e4e-5dfc-400a-9c6c-1ac8a2829f5f',
		name: 'Foxconn'
	},

]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'brands',
			brands.map(({ id, name }) => ({
				id,
				name,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down (queryInterface, Sequelize) {
		return
	}
}
