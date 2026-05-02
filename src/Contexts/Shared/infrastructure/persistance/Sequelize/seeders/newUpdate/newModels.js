const { memoryRamType, memoryRamTypeName } = require('../memoryRam/memoryRamType')
const { categoriesData, categoryNames } = require('../newDeviceData/allCategory')
const { brandOnlyName, brandsData } = require('../newDeviceData/brand')

const models = [
	{
		id: 'cabda7e3-6381-4f9a-9f45-4067d6496e4e',
		name: 'QL15R3BM8256',
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Compaq'])?.id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4L).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: ''
	},
	{
		id: 'a813fa80-4074-4b2b-8c66-b77ee5a3aae3',
		name: 'Vivobook_ASUSLaptop X1404VA_X1404VA',
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['ASUS'])?.id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR4L).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: ''
	},
	{
		id: 'db16f029-0502-44f3-9953-8e62e5c16772',
		name: 'Inspiron 14 5441',
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['DELL'])?.id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.LPDDR5).id,
		memoryRamSlotQuantity: 1,
		hasBluetooth: true,
		hasWifiAdapter: true,
		hasDVI: false,
		hasHDMI: true,
		hasVGA: false,
		batteryModel: ''
	},
	{
		id: 'cf9bfd9d-a6aa-472f-95cc-380f31e81f0e',
		name: 'ThinkCentre M58e',
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		memoryRamTypeId: memoryRamType.find(memory => memory.name === memoryRamTypeName.DDR2).id,
		memoryRamSlotQuantity: 2,
		hasBluetooth: false,
		hasWifiAdapter: false,
		hasDVI: false,
		hasHDMI: false,
		hasVGA: true
	}
]

module.exports = { models }
