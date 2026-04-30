'use strict'

const { directivaData, directivaOnlyNames } = require('./employee/area/directiva')

const newVPE = [
	{
		id: 'c4003d5d-50a4-4f80-84b4-fc085c3b3a1a',
		name: 'V.P.E. Banca Corporativa Multinacional & Energía',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const vpeWithTimestamps = newVPE.map(p => ({
			id: p.id,
			name: p.name,
			directiva_id: p.directivaId,
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('vicepresidencia_ejecutivas', vpeWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'vicepresidencia_ejecutivas',
			{
				id: { [Sequelize.Op.in]: newVPE.map(p => p.id) }
			},
			{}
		)
	}
}
