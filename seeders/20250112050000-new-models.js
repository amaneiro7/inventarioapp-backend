'use strict'

const { categoryData, categoryOnlyNames } = require('./categoryData/categoryData')
const { memoryRamType, memoryRamTypeName } = require('./memoryRam/memoryRamType')
const { brandsData, brandOnlyName } = require('./newDeviceData/brand')

const models = [
	{
		id: '4ea66d3d-6117-4587-9507-6e87fef0a339',
		name: 'HP All-in-One 24-df0xxx',
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.HP).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4L).id,
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
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.HP).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4).id,
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
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.HP).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR2).id,
		memoryRamSlotQuantity: 4,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: '3cecf14a-2d50-4733-84a1-fdc0659ea477',
		name: 'HP Compaq 8100 Elite CMT PC',
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.HP).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR3).id,
		memoryRamSlotQuantity: 4,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: '1637067b-ffca-4ea3-963b-98d86e99e59e',
		name: 'HP Compaq dx2300 Microtower',
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR2).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: '230b3f27-edb6-4e62-8935-b5354de7bfa8',
		name: 'ThinkCentre M57e',
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.LENOVO).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR2).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: 'c1516b46-fe43-4b97-8ae3-e4395ef6284a',
		name: 'ThinkCentre M710s',
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.COMPUTADORAS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.LENOVO).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: true,
		hasHDMI: false,
		hasVGA: true
	},
	{
		id: '8b0befb9-5d83-4cfe-8f4b-717adae0e6b0',
		name: 'HP EliteBook 840 G8 Notebook PC',
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.LAPTOPS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.HP).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4L).id,
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
		categoryId: categoryData.find(category => category.name === categoryOnlyNames.LAPTOPS).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName.HP).id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4L).id,
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
				.find(category => category.name === categoryOnlyNames.COMPUTADORAS)
				.id.includes(model.categoryId)
			const servidores = categoryData
				.find(category => category.name === categoryOnlyNames.SERVIDORES)
				.id.includes(model.categoryId)
			const allInOne = categoryData
				.find(category => category.name === categoryOnlyNames.ALLINONE)
				.id.includes(model.categoryId)
			return {
				computer,
				servidores,
				allInOne
			}
		})
		const modelLaptop = models.filter(model =>
			categoryData
				.find(category => category.name === categoryOnlyNames.LAPTOPS)
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
