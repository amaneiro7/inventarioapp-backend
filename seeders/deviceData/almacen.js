const { brandsData, brandOnlyName } = require('../brandData/brands')
const {
	categoryData,
	categoryOnlyNames
} = require('../categoryData/categoryData')
const {
	hddCapacities,
	hddCapacitiesName
} = require('../DiscoDuro/hddCapacities')
const { hddTypes, hddTypeName } = require('../DiscoDuro/hddType')
const employees = require('../employee/employee/torreEmployee')
const { almacenes, almacenName } = require('../location/locations')
const { modelComputer, modelName } = require('../modelsSeries/modelComputer')
const {
	operatingSystem,
	osName
} = require('../operatingSystem/operatingSystem')
const {
	operatingSystemArq,
	osArqName
} = require('../operatingSystem/operatingSystemArq')
const { processors, processorName } = require('../processor/processors')
const { statusData, statusName } = require('../statusData/statusData')

const almacen = [
	{
		serial: 'CS02299338',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CS02299926',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CS02236917',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CS02299345',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CS02236923',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CS02236922',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CS02299433',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.C260
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUAD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUDE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUDH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUTV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJXUCC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00RZKT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUC0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUBT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUDQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUD0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUDW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUAR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00XUDS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ00RZGP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M73Z
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL04309ZY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL051084Y',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWEBE8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ39M76',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWEBE1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDYL3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDYH1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHDHPB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDYH2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDYE8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJBPHEE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHDHYZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJBPHGZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJMMEMV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJERPNL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ04HSUC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M700
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ04HSWH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M700
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDXL2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M91P
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHCWKR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M81
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHCWEL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M81
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDXW2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M91P
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJMMBEZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJERNDR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWEBB9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M70E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ173AA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJXDHVB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHDHTV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.G620
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHDHMN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJXDHXA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ017ZB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ13K48',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJTYGTR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHERDV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJBPHDR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHERDY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ54Z85',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 0,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHERDR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHDHNM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJHERZC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M71E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJTYGRX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJ38WZW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MJWDYE7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.M72E
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0400G3K',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL1390T8Z',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL1390T3M',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL1390T3T',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL1370JGN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL333291J',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].brandId,
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
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL3332904',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].brandId,
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
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL333292Y',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].brandId,
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
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL333291W',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].brandId,
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
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL3201WHG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL3201WPB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL31817PQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL31600JG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL3201T0R',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00609H6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0430B68',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9460CFS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0430B0M',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0430B0K',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00501R1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL04309QQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ94500QX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL1390T44',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ94500VJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL04228TD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00609KM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0430B3C',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0430B4P',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9460CD5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0510865',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9460CBJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9470861',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ94709Y0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9460CFR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL04309XN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00501RQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL04228T6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00601K4',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0439WT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL119133N',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ94500WF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200B8B',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705ZM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
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
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83302V3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
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
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
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
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ83500CL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92004H5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
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
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009GB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92004G3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009KQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200456',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200B7J',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 1,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ92009HJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ82705Z1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ9200D7M',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL04309VJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL31817LG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00601MR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXL0430B12',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9WHCZ8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.E49
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.E49)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.E49)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33110M
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR1T9WZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I5M520
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2A9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2C5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2A7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K1T7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2B5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRGL095',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.T6670
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'RY5TNT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.X230
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.X230)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.X230)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53230M
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9VG3NN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.X230
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.X230)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.X230)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53210M
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3AVW4Y',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.SL400
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.SL400
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.SL400
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.T5670
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR2M4RK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I5M520
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[640]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRZKK10',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.T6670
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR4A1VW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.L412
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I5M520
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MB00307629',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.G480
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.G480)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.G480)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33120M
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9WHD3T',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.E49
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.E49)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.E49)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33110M
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRB9315',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.T61
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.T61)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.T61)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.T1700
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[120]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3MC027',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.T61
		)[0].categoryId,
		brandId: modelComputer.filter(model => model.name === modelName.T61)[0]
			.brandId,
		modelId: modelComputer.filter(model => model.name === modelName.T61)[0]
			.id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.T1700
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[120]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: '2CE2280KCH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP4440S
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP4440S
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4440S
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32370M
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'CNU3269M7V',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.HP8470P
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.HP8470P
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP8470P
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53210M
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3AVW3L',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENALMACEN
		)[0].id,
		categoryId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].categoryId,
		brandId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].brandId,
		modelId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].id,
		employeeId: null,
		locationId: almacenes.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: '',
		computerName: null,
		processorId: processors.filter(
			processor => processor.number_model === processorName.T6670
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	}
]

module.exports = { almacen }
