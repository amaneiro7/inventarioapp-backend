'use strict'

const { categoryData, categoryOnlyNames } = require('./categoryData/categoryData')
const { memoryRamType, memoryRamTypeName } = require('./memoryRam/memoryRamType')
const { brandsData, brandOnlyName } = require('./newDeviceData/brand')

const models = [
	{
		id: '4ea66d3d-6117-4587-9507-6e87fef0a339',
		name: 'HP All-in-One 24-df0xxx',
		categoryId: categoryData.filter(category => category.name === categoryOnlyNames.COMPUTADORAS)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
		memoryRamTypeId: memoryRamType.filter(memory => memory.name === memoryRamTypeName.DDR4L)[0].id,
		memoryRamSlotQuantity: 1,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false
	},
	{
		id: '2f4993bc-d1b5-4c53-9e92-a3c38dd75040',
		name: 'HP EliteDesk 800 G4 DM 35W',
		categoryId: categoryData.filter(category => category.name === categoryOnlyNames.COMPUTADORAS)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
		memoryRamTypeId: memoryRamType.filter(memory => memory.name === memoryRamTypeName.DDR4)[0].id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: 'bf983eed-1209-4c4e-a691-70e5bf61e076',
		name: 'HP Compaq dc7800p Small Form Factor',
		categoryId: categoryData.filter(category => category.name === categoryOnlyNames.COMPUTADORAS)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
		memoryRamTypeId: memoryRamType.filter(memory => memory.name === memoryRamTypeName.DDR2)[0].id,
		memoryRamSlotQuantity: 4,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: '8b0befb9-5d83-4cfe-8f4b-717adae0e6b0',
		name: 'HP EliteBook 840 G8 Notebook PC',
		categoryId: categoryData.filter(category => category.name === categoryOnlyNames.LAPTOPS)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
		memoryRamTypeId: memoryRamType.filter(memory => memory.name === memoryRamTypeName.DDR4L)[0].id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: 'HP-CC03XL-840G8'
	},
	{
		id: 'ba04c276-164a-4fe2-9f80-5909b1560c08',
		name: 'HP Pavilion Laptop 15t-eg000',
		categoryId: categoryData.filter(category => category.name === categoryOnlyNames.LAPTOPS)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0].id,
		memoryRamTypeId: memoryRamType.filter(memory => memory.name === memoryRamTypeName.DDR4L)[0].id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: 'L97300-005 '
	},
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const modelComputer = models.filter(model => {
			const computer = categoryData
				.filter(category => category.name === categoryOnlyNames.COMPUTADORAS)[0]
				.id.includes(model.categoryId)
			const servidores = categoryData
				.filter(category => category.name === categoryOnlyNames.SERVIDORES)[0]
				.id.includes(model.categoryId)
			const allInOne = categoryData
				.filter(category => category.name === categoryOnlyNames.ALLINONE)[0]
				.id.includes(model.categoryId)
			return {
				computer,
				servidores,
				allInOne
			}
		})
		const modelLaptop = models.filter(model =>
			categoryData
				.filter(category => category.name === categoryOnlyNames.LAPTOPS)[0]
				.id.includes(model.categoryId)
		)
		try {
			return await queryInterface.sequelize.transaction(async t => {
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

	async down (queryInterface, Sequelize) {
		return queryInterface
			.bulkDelete('models', null, {})
			.then(() => queryInterface.bulkDelete('model_computers', null, {}))
			.then(() => queryInterface.bulkDelete('model_laptops', null, {}))
	}
}
