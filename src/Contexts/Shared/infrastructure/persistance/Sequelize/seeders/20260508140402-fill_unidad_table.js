'use strict'

const { newCoordinacion } = require('./newUpdate/newCoordinacion')
const { newGerencia1 } = require('./newUpdate/newGerencia1')
const { newGerencia2 } = require('./newUpdate/newGerencia2')

const { newVicepresidenciaEjecutiva, newDirectiva } = require('./newUpdate/newJerarquia')
const { newVicepresidencia } = require('./newUpdate/newVPJerarquia')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.bulkInsert(
				'unidades',
				newDirectiva.map(unit => ({
					id: unit.id,
					name: unit.name,
					level: unit.level,
					centro_de_costo: unit.centroDeCosto,
					codigo_interno: unit.codigoInterno,
					parent_id: unit.parent_id,
					is_unit_active: unit.isUnitActive,
					created_at: unit.created_at,
					updated_at: unit.updated_at
				})),
				{ transaction }
			)
			await queryInterface.bulkInsert(
				'unidades',
				newVicepresidenciaEjecutiva.map(unit => ({
					id: unit.id,
					name: unit.name,
					level: unit.level,
					centro_de_costo: unit.centroDeCosto,
					codigo_interno: unit.codigoInterno,
					parent_id: unit.parent_id,
					is_unit_active: unit.isUnitActive,
					created_at: unit.created_at,
					updated_at: unit.updated_at
				})),
				{ transaction }
			)
			await queryInterface.bulkInsert(
				'unidades',
				newVicepresidencia.map(unit => ({
					id: unit.id,
					name: unit.name,
					level: unit.level,
					centro_de_costo: unit.centroDeCosto,
					codigo_interno: unit.codigoInterno,
					parent_id: unit.parent_id,
					is_unit_active: unit.isUnitActive,
					created_at: unit.created_at,
					updated_at: unit.updated_at
				})),
				{ transaction }
			)
			await queryInterface.bulkInsert(
				'unidades',
				newGerencia1.map(unit => ({
					id: unit.id,
					name: unit.name,
					level: unit.level,
					centro_de_costo: unit.centroDeCosto,
					codigo_interno: unit.codigoInterno,
					parent_id: unit.parent_id,
					is_unit_active: unit.isUnitActive,
					created_at: unit.created_at,
					updated_at: unit.updated_at
				})),
				{ transaction }
			)
			await queryInterface.bulkInsert(
				'unidades',
				newGerencia2.map(unit => ({
					id: unit.id,
					name: unit.name,
					level: unit.level,
					centro_de_costo: unit.centroDeCosto,
					codigo_interno: unit.codigoInterno,
					parent_id: unit.parent_id,
					is_unit_active: unit.isUnitActive,
					created_at: unit.created_at,
					updated_at: unit.updated_at
				})),
				{ transaction }
			)
			await queryInterface.bulkInsert(
				'unidades',
				newCoordinacion.map(unit => ({
					id: unit.id,
					name: unit.name,
					level: unit.level,
					centro_de_costo: unit.centroDeCosto,
					codigo_interno: unit.codigoInterno,
					parent_id: unit.parent_id,
					is_unit_active: unit.isUnitActive,
					created_at: unit.created_at,
					updated_at: unit.updated_at
				})),
				{ transaction }
			)
			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en la migración de unidades:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('unidades', null, {})
	}
}
