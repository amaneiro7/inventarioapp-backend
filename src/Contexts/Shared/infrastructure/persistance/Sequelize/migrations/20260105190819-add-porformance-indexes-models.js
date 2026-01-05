'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// ---------------------------------------------------------
			// 1. ÍNDICES EN TABLA PRINCIPAL (models)
			// ---------------------------------------------------------

			// Optimiza búsquedas por categoría (ej. "Traeme todas las Laptops")
			await queryInterface.addIndex('models', {
				fields: ['category_id'],
				name: 'idx_models_category_id',
				transaction
			})

			// Optimiza JOINs con la tabla de Marcas
			// Nota: Aunque brand_id es parte del índice único compuesto, tenerlo aislado
			// ayuda mucho si filtras SOLO por marca sin importar el nombre.
			await queryInterface.addIndex('models', {
				fields: ['brand_id'],
				name: 'idx_models_brand_id',
				transaction
			})

			// ---------------------------------------------------------
			// 2. ÍNDICES EN SUB-MODELOS (Foreign Keys)
			// ---------------------------------------------------------

			// Computadoras: Optimiza JOIN con tipos de RAM
			await queryInterface.addIndex('model_computers', {
				fields: ['memory_ram_type_id'],
				name: 'idx_model_computers_memory_ram_type_id',
				transaction
			})

			// Laptops: Optimiza JOIN con tipos de RAM
			await queryInterface.addIndex('model_laptops', {
				fields: ['memory_ram_type_id'],
				name: 'idx_model_laptops_memory_ram_type_id',
				transaction
			})

			// Si también aplicaste los cambios en Teclados y Mouses, descomenta esto:
			/*
      await queryInterface.addIndex('model_keyboards', {
        fields: ['input_type_id'],
        name: 'idx_model_keyboards_input_type_id',
        transaction
      });

      await queryInterface.addIndex('model_mouses', {
        fields: ['input_type_id'],
        name: 'idx_model_mouses_input_type_id',
        transaction
      });
      */

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Revertir cambios
			await queryInterface.removeIndex('models', 'idx_models_category_id', { transaction })
			await queryInterface.removeIndex('models', 'idx_models_brand_id', { transaction })
			await queryInterface.removeIndex('model_computers', 'idx_model_computers_memory_ram_type_id', {
				transaction
			})
			await queryInterface.removeIndex('model_laptops', 'idx_model_laptops_memory_ram_type_id', { transaction })

			// await queryInterface.removeIndex('model_keyboards', 'idx_model_keyboards_input_type_id', { transaction });
			// await queryInterface.removeIndex('model_mouses', 'idx_model_mouses_input_type_id', { transaction });

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}
