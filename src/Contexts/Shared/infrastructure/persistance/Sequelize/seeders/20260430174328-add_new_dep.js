'use strict'

const { VPOnlyNames, VPData } = require('./employee/area/vicepresidencia')

const newDep = [
	{
		id: '296e9347-451e-4a2f-9f68-e3533cdef8c8',
		name: 'Gerencia Control Institucional',
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const depsWithTimestamps = newDep.map(p => ({
			id: p.id,
			name: p.name,
			vicepresidencia_id: p.vicepresidenciaId,
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('departamentos', depsWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'departamentos',
			{
				id: { [Sequelize.Op.in]: newDep.map(p => p.id) }
			},
			{}
		)
	}
}
