'use strict'

const administrativeRegions = require('./location/administrativeRegion')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'administrative_regions',
			administrativeRegions.map(({ id, name }) => ({
				id,
				name
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('administrative_regions', null, {})
	}
}
