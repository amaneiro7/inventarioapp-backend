'use strict'

const { cities, cityOnlyNames } = require('./location/cities')
const states = require('./location/state')
const { typeOfSite, typeOfSiteOnlyName } = require('./location/typeOfSite')

const newCity = [
	{
		id: '120c8487-cc9d-4629-b59b-79ed94ae1b60',
		name: 'La Asunción',
		stateId: states.filter(state => state.name === 'Nueva Esparta')[0].id
	}
]
const newSite = [
	{
		id: '7ba237fb-3374-4aaf-a5af-4c34ce287f48',
		name: '(542) Taquilla Gobernación Estado Nueva Esparta',
		address: 'Av. Constitución, La Asunción, Estado Nueva Esparta.',
		cityId: cities.filter(city => city.name === cityOnlyNames.LAASUNCION)[0].id
	}
]
const newLocation = [
	{
		id: '38c91a68-d95a-41c6-80b2-98c1c053698f',
		typeOfSiteId: typeOfSite.filter(type => type.name === typeOfSiteOnlyName.AGENCIA)[0].id,
		siteId: '7ba237fb-3374-4aaf-a5af-4c34ce287f48',
		name: 'Agencia (542) Taquilla Gobernación Estado Nueva Esparta',
		subnet: '10.105.42.0'
	}
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'cities',
			newCity.map(({ id, name, stateId }) => ({
				id,
				name,
				state_id: stateId
			})),
			{}
		)
		await queryInterface.bulkInsert(
			'sites',
			newSite.map(({ id, name, address, cityId }) => ({
				id,
				name,
				address,
				city_id: cityId
			})),
			{}
		)
		await queryInterface.bulkInsert(
			'locations',
			newLocation.map(({ id, name, siteId, subnet, typeOfSiteId }) => ({
				id,
				name,
				site_id: siteId,
				subnet,
				type_of_site_id: typeOfSiteId
			})),
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('locations', { name: newLocation.name }, {})
		await queryInterface.bulkDelete('sites', { name: newSite.name }, {})
		await queryInterface.bulkDelete('cities', { name: newCIty.name }, {})
	}
}
