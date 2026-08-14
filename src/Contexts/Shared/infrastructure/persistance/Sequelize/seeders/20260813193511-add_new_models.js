'use strict'

const { categoryNames, categoriesData } = require('./newDeviceData/allCategory')
const { models } = require('./newUpdate0826/newModels')
const { updateModel, updateModelParam, deleteDuplicateModel } = require('./newUpdate0826/updateModelAndEliminateDuplicateModel')


const DEVICE_TABLE = 'devices'
const MODEL_TABLE = 'models'
const MODEL_COMPUTER_TABLE = 'model_computers'
const MODEL_LAPTOP_TABLE = 'model_laptops'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		// Helpers para obtener IDs de categoría de forma segura
		const getCategoryIds = (name) => {
			const category = categoriesData.find(c => c.name === name)
			return Array.isArray(category?.id) ? category.id : [category?.id].filter(Boolean)
		}

		const computerIds = getCategoryIds(categoryNames.Desktop)
		const servidoresIds = getCategoryIds(categoryNames.SERVIDORES)
		const allInOneIds = getCategoryIds(categoryNames['All in One'])
		const laptopIds = getCategoryIds(categoryNames.Laptop)

		const modelComputer = models.filter(model =>
			computerIds.includes(model.categoryId) ||
			servidoresIds.includes(model.categoryId) ||
			allInOneIds.includes(model.categoryId)
		)

		const modelLaptop = models.filter(model =>
			laptopIds.includes(model.categoryId)
		)

		// Es recomendable envolver todo en una transacción para mayor seguridad
		const transaction = await queryInterface.sequelize.transaction()
		// 2. Transacción gestionada automáticamente por Sequelize
		try {
			if (models.length > 0) {
				await queryInterface.bulkInsert(
					MODEL_TABLE,
					models.map(({ id, name, categoryId, brandId }) => ({
						id,
						name,
						category_id: categoryId,
						brand_id: brandId,
						created_at: new Date(),
						updated_at: new Date()
					})),
					{ transaction }
				)
			}
			if (modelComputer.length > 0) {
				await queryInterface.bulkInsert(
					MODEL_COMPUTER_TABLE,
					modelComputer.map(
						({
							id,
							categoryId,
							memoryRamTypeId,
							memoryRamSlotQuantity,
							hasBluetooth,
							hasDVI,
							hasHDMI,
							hasVGA,
							hasWifiAdapter
						}) => ({
							id,
							model_series_id: id,
							category_id: categoryId,
							memory_ram_type_id: memoryRamTypeId,
							memory_ram_slot_quantity: memoryRamSlotQuantity,
							has_bluetooth: hasBluetooth,
							has_dvi: hasDVI,
							has_hdmi: hasHDMI,
							has_vga: hasVGA,
							has_wifi_adapter: hasWifiAdapter,
							created_at: new Date(),
							updated_at: new Date()
						})
					),
					{ transaction }
				)
			}
			if (modelLaptop.length > 0) {
				await queryInterface.bulkInsert(
					MODEL_LAPTOP_TABLE,
					modelLaptop.map(
						({
							id,
							categoryId,
							memoryRamTypeId,
							memoryRamSlotQuantity,
							hasBluetooth,
							hasDVI,
							hasHDMI,
							hasVGA,
							hasWifiAdapter,
							batteryModel
						}) => ({
							id,
							model_series_id: id,
							category_id: categoryId,
							memory_ram_type_id: memoryRamTypeId,
							memory_ram_slot_quantity: memoryRamSlotQuantity,
							has_bluetooth: hasBluetooth,
							has_dvi: hasDVI,
							has_hdmi: hasHDMI,
							has_vga: hasVGA,
							has_wifi_adapter: hasWifiAdapter,
							battery_model: batteryModel,
							created_at: new Date(),
							updated_at: new Date()
						})
					),
					{ transaction }
				)
			}
			// Actualizar el modelo de equipos que tenian un modelo duplicado
			for (const update of updateModel) {
				const { modelId, serial } = update

				if (modelId && serial) {
					console.log(`Updating device with serial ${serial} to ID model ${modelId}`)
					await queryInterface.sequelize.query(
						`UPDATE \"${DEVICE_TABLE}\" 
						SET \"model_id\" = :modelId, \"updated_at\" = :now
						WHERE \"serial\" = :serial`,
						{
							replacements: { modelId, now: new Date(), serial },
							type: Sequelize.QueryTypes.UPDATE,
							transaction
						}
					)
				}
			}

			// Actualizar memory ram quantity del model m710s
			for (const update of updateModelParam) {
				const { id, memoryRamSlotQuantity } = update

				if (id && memoryRamSlotQuantity) {
					console.log(`Updating model with id ${id} to memory ram quantity ${memoryRamSlotQuantity}`)
					await queryInterface.sequelize.query(
						`UPDATE \"${MODEL_COMPUTER_TABLE}\"
						SET \"memory_ram_slot_quantity\" = :memoryRamSlotQuantity, \"updated_at\" = :now
						WHERE "model_series_id" = :id`,
						{
							replacements: { memoryRamSlotQuantity, now: new Date(), id },
							type: Sequelize.QueryTypes.UPDATE,
							transaction
						}
					)
				}
			}

			// Eliminamos model duplicado
			const idsToDelete = deleteDuplicateModel.map(item => item.id).filter(Boolean)
			if (idsToDelete.length > 0) {
				await queryInterface.bulkDelete(
					MODEL_TABLE,
					{ id: idsToDelete },
					{ transaction }
				)
			}
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			console.error(`Migration failed. Rolling back. Error:`, error)
			throw error
		}
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete(MODEL_COMPUTER_TABLE, null, {})
		await queryInterface.bulkDelete(MODEL_LAPTOP_TABLE, null, {})
		return queryInterface.bulkDelete(MODEL_TABLE, null, {})
	}
}
