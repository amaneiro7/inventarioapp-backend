'use strict'
const { unidadCompleteUpdate } = require('./newUpdate/unindadActualDuplicate')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log(
				`--- Iniciando actualización/inserción de ${unidadCompleteUpdate.length} unidades (Nivel 6) ---`
			)

			for (const unit of unidadCompleteUpdate) {
				await queryInterface.sequelize.query(
					`INSERT INTO unidades (id, name, level, codigo_interno, is_unit_active, parent_id, created_at, updated_at)
					 VALUES (:id, :name, :level, :codigoInterno, :isUnitActive, :parent_id, :created_at, :updated_at)
					 ON CONFLICT (id) DO UPDATE SET 
						level = EXCLUDED.level,
						codigo_interno = EXCLUDED.codigo_interno,
						is_unit_active = EXCLUDED.is_unit_active,
						parent_id = EXCLUDED.parent_id,
						updated_at = EXCLUDED.updated_at`,
					{
						replacements: {
							id: unit.id,
							name: unit.name,
							level: unit.level,
							codigoInterno: unit.codigoInterno,
							isUnitActive: unit.isUnitActive,
							parent_id: unit.parent_id ?? null,
							created_at: unit.created_at || new Date(),
							updated_at: unit.updated_at || new Date()
						},
						type: Sequelize.QueryTypes.INSERT,
						transaction
					}
				)
			}

			await transaction.commit()
			console.log('✅ Proceso de actualización de unidades Nivel 6 completado.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en el seeder de actualización de unidades:', error)
			throw error
		}
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
