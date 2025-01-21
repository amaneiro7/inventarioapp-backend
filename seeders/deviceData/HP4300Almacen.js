const { brandsData, brandOnlyName } = require('../brandData/brands')
const {
	categoryData,
	categoryOnlyNames
} = require('../categoryData/categoryData')
const { almacenes, almacenName } = require('../location/locations')
const { modelComputer, modelName } = require('../modelsSeries/modelComputer')
const { statusData, statusName } = require('../statusData/statusData')

const HP4300_8000_Proliant = [
	{
		serial: 'MXL333291J',
		activo: '224708',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			category => category.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '0a787f22-2325-49a5-b7c6-8446a3abdab0',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL3332904',
		activo: '224704',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			category => category.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '0a787f22-2325-49a5-b7c6-8446a3abdab0',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL333292Y',
		activo: '224702',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			category => category.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '0a787f22-2325-49a5-b7c6-8446a3abdab0',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL333291W',
		activo: '224697',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			category => category.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '0a787f22-2325-49a5-b7c6-8446a3abdab0',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL02610LC',
		activo: 'BNC03020004',
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			category => category.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: '78e6fc44-7d45-47e6-9d78-aecc66ed74d4',
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: 'f099dba9-06d2-4b1c-89f1-1795a945df9e',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MX26410086',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			category => category.name === categoryOnlyNames.SERVIDORES
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPML110GEN9
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Era el servido de caja de ahorro',
		computerName: null,
		processorId: '3fbc8e5c-27fa-4f82-a0d6-c80055545cf2',
		memoryRamCapacity: 32,
		hardDriveCapacityId: 10,
		hardDriveTypeId: 1,
		operatingSystemVersionId: 12,
		operatingSystemArqId: 2,
		macAddress: null,
		ipAddress: null
	}
]

module.exports = { HP4300_8000_Proliant }
