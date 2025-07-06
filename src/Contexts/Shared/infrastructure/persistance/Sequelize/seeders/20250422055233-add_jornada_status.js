'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('status', [{ id: '9', name: 'Jornada' }])
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('status', {
			id: {
				[Sequelize.Op.in]: ['9']
			}
		})
	}
}
