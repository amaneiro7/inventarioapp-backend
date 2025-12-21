'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const tableName = 'models' // ⚠️ VERIFICA: Asegúrate de que coincida con el nombre real de tu tabla en la BD

		// Nombres posibles de la restricción anterior.
		// Sequelize suele nombrarlas como 'nombreTabla_columna_unique' o 'nombreTabla_columna_key'
		const possibleOldConstraintNames = [
			'models_name_key',
			'models_name_unique',
			'models_name_key1',
			'models_name_key2',
			'models_name_key3',
			'models_name_key4',
			'models_name_key5',
			'models_name_key6',
			'models_name_key7',
			'models_name_key8'
		]

		// 1. Intentar eliminar la restricción unique actual en 'name'
		let removed = false
		for (const constraintName of possibleOldConstraintNames) {
			try {
				await queryInterface.removeConstraint(tableName, constraintName)
				console.log(`Restricción '${constraintName}' eliminada.`)
				removed = true
				break
			} catch (error) {
				// Continuar intentando con el siguiente nombre
			}
		}

		if (!removed) {
			// Fallback: Intentar eliminar por índice si no se encontró por nombre de constraint
			try {
				await queryInterface.removeIndex(tableName, 'name')
				console.log(`Índice en 'name' eliminado.`)
			} catch (error) {
				console.warn(
					'⚠️ No se pudo eliminar la restricción anterior automáticamente. Verifica si ya fue eliminada o si tiene un nombre personalizado.'
				)
			}
		}

		// 2. Agregar la nueva restricción compuesta (name + brandId)
		// Esto asegura que no existan dos modelos con el mismo nombre DENTRO de la misma marca.
		await queryInterface.addConstraint(tableName, {
			fields: ['name', 'brand_id'],
			type: 'unique',
			name: 'unique_model_name_per_brand'
		})
	},

	async down(queryInterface, Sequelize) {
		const tableName = 'models'

		// 1. Revertir: Eliminar la restricción compuesta
		await queryInterface.removeConstraint(tableName, 'unique_model_name_per_brand')

		// 2. Revertir: Restaurar la restricción única global en 'name'
		await queryInterface.addConstraint(tableName, {
			fields: ['name'],
			type: 'unique',
			name: 'models_name_key'
		})
	}
}
