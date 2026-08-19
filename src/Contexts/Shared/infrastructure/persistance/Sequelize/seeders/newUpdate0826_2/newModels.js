const { memoryRamType, memoryRamTypeName } = require('../memoryRam/memoryRamType')
const { categoriesData, categoryNames } = require('../newDeviceData/allCategory')
const { brandOnlyName, brandsData } = require('../newDeviceData/brand')
for (let index = 0; index < 4; index++) {
	console.log(crypto.randomUUID())
}

const models = [
	{
		id: '5f37c47d-5103-43cc-a039-a2b81969e842',
		name: 'HP ProBook 460 16 inch G11 Notebook PC',
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR5L).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: 'N70706-005'
	},
	{
		id: '23901920-0a41-4fba-9238-6d81af9a9e97',
		name: 'HP ENVY Laptop 16-h1xxx',
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR5L).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: 'M48025-005 / M47636-2C1'
	}
]

module.exports = { models }
