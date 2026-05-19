'use strict'

const { unidadCompleteUpdate } = require('./newUpdate/unindadActualDuplicate')

const accessPolicyMigrate = [
	{
		name: 'Soporte TI Occidente',
		unidad_id: unidadCompleteUpdate.find(
			d => d.name.toLowerCase() === 'Gerencia De Soporte Técnico Occidente'.toLowerCase()
		)?.id
	},
	{
		name: 'Soporte TI Occidente Manager',
		unidad_id: unidadCompleteUpdate.find(
			d => d.name.toLowerCase() === 'Gerencia De Soporte Técnico Occidente'.toLowerCase()
		)?.id
	},
	{
		name: 'Soporte Tecnico Gerencial',
		unidad_id: unidadCompleteUpdate.find(
			d => d.name.toLowerCase() === 'Gerencia De Soporte Técnico Occidente'.toLowerCase()
		)?.id
	},
	{
		name: 'Soporte TI Caracas',
		unidad_id: unidadCompleteUpdate.find(
			d => d.name.toLowerCase() === 'Gerencia De Soporte Técnico Caracas'.toLowerCase()
		)?.id
	},
	{
		name: 'Soporte Tecnico VP',
		unidad_id: unidadCompleteUpdate.find(
			d => d.name.toLowerCase() === 'V.P. Gestión De Soporte Técnico Y Arquitectura TI'.toLowerCase()
		)?.id
	}
]
const tableName = 'access_policies'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			for (const policy of accessPolicyMigrate) {
				if (!policy.unidad_id) {
					console.warn(`  ⚠️ Saltando política "${policy.name}": unidad_id no encontrado en la jerarquía.`)
					continue
				}

				await queryInterface.bulkUpdate(
					tableName,
					{
						unidad_id: policy.unidad_id,
						updated_at: new Date()
					},
					{ name: policy.name },
					{ transaction }
				)
			}
			await transaction.commit()
			console.log('✅ Migración de unidad_id en access_policies completada con éxito.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la migración de access_policies:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const names = accessPolicyMigrate.map(p => p.name)
			await queryInterface.bulkUpdate(
				tableName,
				{
					unidad_id: null,
					updated_at: new Date()
				},
				{ name: { [Sequelize.Op.in]: names } },
				{ transaction }
			)
			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			throw error
		}
	}
}
