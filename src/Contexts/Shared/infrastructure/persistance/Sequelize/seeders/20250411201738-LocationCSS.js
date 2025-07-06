'use strict'

const { locationCCS } = require('./newDeviceData/torresCCS')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'locations',
			locationCCS.map(({ id, typeOfSiteId, siteId, name, subnet }) => ({
				id,
				type_of_site_id: typeOfSiteId,
				site_id: siteId,
				name,
				subnet
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('locations', null, {})
	}
}
