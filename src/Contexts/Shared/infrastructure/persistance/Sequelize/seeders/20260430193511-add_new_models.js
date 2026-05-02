'use strict'

const { categoryNames, categoriesData } = require('./newDeviceData/allCategory')
const { models } = require('./newUpdate/newModels')

const newMemRamType = [
	{
		id: '13',
		name: 'LPDDR5 Row of chips'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const modelComputer = models.filter(model => {
			const computer = categoriesData
				.find(category => category.name === categoryNames.Desktop)
				.id.includes(model.categoryId)
			const servidores = categoriesData
				.find(category => category.name === categoryNames.SERVIDORES)
				.id.includes(model.categoryId)
			const allInOne = categoriesData
				.find(category => category.name === categoryNames['All in One'])
				.id.includes(model.categoryId)
			return {
				computer,
				servidores,
				allInOne
			}
		})
		const modelLaptop = models.filter(model =>
			categoriesData.find(category => category.name === categoryNames.Laptop).id.includes(model.categoryId)
		)
		try {
			return await queryInterface.sequelize.transaction(async t => {
				await queryInterface.bulkInsert(
					'memory_ram_types',
					newMemRamType.map(({ id, name }) => ({ id, name })),
					{ transaction: t }
				)
				await queryInterface.bulkInsert(
					'models',
					models.map(({ id, name, categoryId, brandId }) => ({
						id,
						name,
						category_id: categoryId,
						brand_id: brandId,
						created_at: new Date(),
						updated_at: new Date()
					})),
					{ transaction: t }
				)
				await queryInterface.bulkInsert(
					'model_computers',
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
					{ transaction: t }
				)
				await queryInterface.bulkInsert(
					'model_laptops',
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
					{ transaction: t }
				)
			})
		} catch (error) {
			throw new Error(error)
		}
	},

	async down(queryInterface, Sequelize) {
		return queryInterface
			.bulkDelete('models', null, {})
			.then(() => queryInterface.bulkDelete('model_computers', null, {}))
			.then(() => queryInterface.bulkDelete('model_laptops', null, {}))
	}
}
