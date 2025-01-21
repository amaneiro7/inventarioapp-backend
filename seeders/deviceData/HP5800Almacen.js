const { brandsData, brandOnlyName } = require('../BrandData/brands')
const {
	categoryData,
	categoryOnlyNames
} = require('../categoryData/categoryData')
const { almacenes: locations, almacenName } = require('../location/locations')
const { modelComputer, modelName } = require('../modelsSeries/modelComputer')
const { statusData, statusName } = require('../statusData/statusData')
const HP5800 = [
	{
		serial: 'MXJ907034S',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ906072H',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ91909X4',
		activo: 'AR001010366',
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90701VK',
		activo: 'AR003001241',
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ907036J',
		activo: 'AR003001451',
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90701H7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704NS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.PORDESINCORPORAR
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702QH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin Fuente',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3.5,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702NS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 1,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704G5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9070367',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702J6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702JS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704K6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704GK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704LT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702HT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90703C1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704HQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704KD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200B2M',
		activo: 'AR001001169',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702G8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702N0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9070324',
		activo: 'AR001006909',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90703BG',
		activo: 'AR001006741',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ907036D',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702KH',
		activo: 'AR003001817',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90701GN',
		activo: 'AR001006781',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704J8',
		activo: 'AR001006864',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9070316',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ907035W',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ907033W',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9070352',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704L1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704CP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9070334',
		activo: 'AR001006955',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702PP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704GR',
		activo: 'AR001006927',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704KY',
		activo: 'AR003001262',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704G9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704HH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 1.5,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90702HS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 1,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ907031V',
		activo: 'AR001006977',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 2.5,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ835007W',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500CR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500DSE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500D5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500F1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200BKL',
		activo: 'AR0100108405',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ835004C',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ907049W',
		activo: 'AR001006771',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500HX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500HG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 4,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ8340GRV',
		activo: 'AR001006615',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 4,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ91908G9',
		activo: 'AR001008714',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009H5',
		activo: 'AR001010444',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ91909XS',
		activo: 'AR001007610',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MX920040H',
		activo: 'AR001008038',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009HN',
		activo: 'AR001007620',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ91909ZS',
		activo: 'AR001007986',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ91908G1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200DFC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ920041N',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 4,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302Z5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302W0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705Y2',
		activo: 'AR001005584',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302V6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302WR',
		activo: 'AR001005680',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705Z0',
		activo: '171523',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302SY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302T5',
		activo: 'AR001005704',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302VC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302WX',
		activo: 'AR001005534',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302V5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705YQ',
		activo: 'AR001005829',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83308SV',
		activo: 'AR001005532',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3.5,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302YP',
		activo: 'AR001007752',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 4,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9070359',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704G2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ90704NC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7917eafc-83ff-4866-be19-7072adfea1ee',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500CL',
		activo: 'AR001006729',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: '7df16a14-b113-4786-8623-7e8a2d544d2f',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705ZM',
		activo: 'AR001005901',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302XG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302V3',
		activo: 'AR003001728',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705Z1',
		activo: 'AR001006066',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'f17b4901-346a-4099-889b-4e46b804755a',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200B8B',
		activo: 'AR001009513',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92004H5',
		activo: 'AR001007810',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009GB',
		activo: 'AR001008416',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92004G3',
		activo: 'AR001009098',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009KQ',
		activo: 'AR001008025',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200456',
		activo: 'AR001008398',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200B7J',
		activo: 'AR001008286',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 2,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009HJ',
		activo: 'AR001008412',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200D7M',
		activo: 'AR001008404',
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HPCOMPAQDC5800SMALLFORMFACTOR
		)[0].id,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: 'e67e42ee-1c7e-479a-92f1-331ad352aedc',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	}
]

module.exports = { HP5800 }
