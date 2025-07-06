'use strict'

const administrativeRegions = require('./location/administrativeRegion')

const regions = [
	{ id: '5', name: 'Los Andes', administrativeRegions: '2' },
	{ id: '6', name: 'Occidente', administrativeRegions: '2' }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		regions.forEach(async region => {
			await queryInterface.bulkUpdate(
				'regions',
				{
					administrative_region_id: region.administrativeRegions
				},
				{
					id: region.id
				}
			)
		})
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}
