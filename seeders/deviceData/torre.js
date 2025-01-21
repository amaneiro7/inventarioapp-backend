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
const { siteMCBOlocation, siteName } = require('../location/locations')
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

const torre = [
	{
		serial: 'LR3P43H',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.EDGE)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'elhernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOBOVEDA
		)[0].id,
		observation: '',
		computerName: 'ELHERNANDEZ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.10.23'
	},
	{
		serial: 'MXL04309X7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cbermudez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOBOVEDA
		)[0].id,
		observation: '',
		computerName: 'OPERESP05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.10.27'
	},
	{
		serial: 'MXL3201W5F',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'recepcion2'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOLOBBY
		)[0].id,
		observation: '',
		computerName: 'RECEP5DEJ1',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.10.17'
	},
	{
		serial: 'MXL3201WFW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'vmorales'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'TECNOPOS04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.19'
	},
	{
		serial: 'MXL3201SZS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'recepcion2'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOLOBBY
		)[0].id,
		observation: '',
		computerName: 'RECEP5DEJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.25'
	},
	{
		serial: 'MXJ94500Q5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ngonzalez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRFINANCIERO04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.36'
	},
	{
		serial: 'MJBPHCG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mcastillo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTABILIDAD07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.71'
	},
	{
		serial: 'MJ13K05',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'nnava'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTPROV02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.43'
	},
	{
		serial: 'MXJ947086Z',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cabarrios'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'PROVEDURIA04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.60'
	},
	{
		serial: 'MXJ00503TS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rvilchez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: '12505COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.160'
	},
	{
		serial: 'MXJ00609N2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rvilchez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: '125TAQINTCAJ2',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.20'
	},
	{
		serial: 'MXJ00503SG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'kkilso'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: '125COORTAQINT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.22'
	},
	{
		serial: 'MJXDKGA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jarrioja'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTABILIDAD04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.23'
	},
	{
		serial: 'MXL318182G',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rcamarillo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'FISCAL03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.26'
	},
	{
		serial: 'MJ25BD9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jaortiz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESACANALES02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.27'
	},
	{
		serial: 'MXL31600BS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'anamoreno'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SERVICIOS07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.30'
	},
	{
		serial: 'MXL3201WGL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'egarcia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTPROV03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.32'
	},
	{
		serial: 'MXJ94709Z1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'varodriguez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: '125TAQINTCAJ1',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.47'
	},
	{
		serial: 'MXL3201WN6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yafuenmayor'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'PROVEDURIA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.49'
	},
	{
		serial: 'MXL31817PZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gfuenmayor'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRGESTION06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.51'
	},
	{
		serial: 'MJ017ED',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'egutierrez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'FIDEICOMISO01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.53'
	},
	{
		serial: 'MXL3201WNF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cdelgado'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTABILIDAD08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.61'
	},
	{
		serial: 'MXJ94500T9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'zcastellanos'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'FISCAL02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.63'
	},
	{
		serial: 'MXL0430B69',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'DSOTO'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'TECNOPOS02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.65'
	},
	{
		serial: 'MJHETGV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'kalmarza'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESACANALES03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.66'
	},
	{
		serial: 'MJHDGTC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dmorillo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTABILIDAD01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.73'
	},
	{
		serial: 'MXJ00501R2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'alemendoza'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'INCECONTAB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.74'
	},
	{
		serial: 'MXL3201WMT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mrico'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'FISCAL01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.75'
	},
	{
		serial: 'MXL3201WP8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'maguero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRGESTION07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.92'
	},
	{
		serial: 'MXJ94500WL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jfuenmayor'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: '192052AGROP',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.95'
	},
	{
		serial: 'MJ52A53',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'brflores'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESAGES02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.83'
	},
	{
		serial: 'MJ00XUBG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'bgonzalez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'BGONZALEZ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.84'
	},
	{
		serial: 'MJ00XUB3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jgutierrez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'JPGUTIERREZ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.94'
	},
	{
		serial: 'MXL3201T0L',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'miperez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'MANINFRA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.39'
	},
	{
		serial: 'MXL05108BL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rlopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'TECNOPOS03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.41'
	},
	{
		serial: 'MJ13K82',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'raltamirano'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESACANALES04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.55'
	},
	{
		serial: 'MXL3180J1M',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yettiene'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESACANALES06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.79'
	},
	{
		serial: 'MXL31600JK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aalbornoz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'PROVEDURIA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.101'
	},
	{
		serial: '5CG95055GC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName['HP360-830G6']
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lprieto'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'L-CONTRALORIA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78665U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.102'
	},
	{
		serial: 'BWYW303',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.DELL
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.LATITUDE5300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'almendoza'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTRALORIAP8',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I58365U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.34'
	},
	{
		serial: 'MJWDXM7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'macolina'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'MANINFRA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.46'
	},
	{
		serial: 'PF26GSY5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ivillalobos'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'L-CTRGESTION01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.56'
	},
	{
		serial: 'MJWDXL1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'azurita'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'MANINFRA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.78'
	},
	{
		serial: 'MJHDHZX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'sherrison'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SERVICIOS04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.29'
	},
	{
		serial: 'MJ52B42',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'gsilva'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTRALORIA04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.50'
	},
	{
		serial: 'MJTYGVB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'haurdaneta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTRALORIA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.58'
	},
	{
		serial: 'MJ00XUBE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'aramirez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'ARQUITECTO01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.40'
	},
	{
		serial: 'MXL3201WGB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'erquintero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRGESTION03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.52'
	},
	{
		serial: 'MXL051084W',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'nuzcategui'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SHARPOFICINA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.69'
	},
	{
		serial: 'MJXLAWG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M82)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jvelasquez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTRALORIA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.90'
	},
	{
		serial: 'MJERPBA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jorodriguez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRGESTION02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.16'
	},
	{
		serial: 'MJXLATM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M82)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'YPALMAR'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTRALORIA05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.48'
	},
	{
		serial: 'MXL31817H8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lroso'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESACANALES05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.67'
	},
	{
		serial: 'MXL3201WNB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'girodriguez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SMEDICO02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.55'
	},
	{
		serial: 'MJ00XUE8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'gsparacino'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CORREO02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I34150
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.42'
	},
	{
		serial: 'MJ00XUAH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'yloaiza'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'PROVEDURIA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.17'
	},
	{
		serial: 'MJ00RZFM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ofernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CONTRALORIA06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.24'
	},
	{
		serial: 'CS02299330',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jpardo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SERVICIOS08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.81'
	},
	{
		serial: 'LR7K2Z8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.L412)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'elohernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'TECNOPOS01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I3M380
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.59'
	},
	{
		serial: 'PF26GP5Z',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'begomez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'DESACANALES01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.87'
	},
	{
		serial: 'PF26GP8G',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aroo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'L-CONTRALORIA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.54'
	},
	{
		serial: 'MJHDHYV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'gvarela'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SERVICIOS06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.139'
	},
	{
		serial: 'MXL31809W3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'edghernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRFINANCIERO02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.45'
	},
	{
		serial: 'MJHDHRV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jamaya'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'CTRFINANCIERO05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.57'
	},
	{
		serial: 'MXL3151VLR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'larriaz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'SMEDICO1',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.80'
	},
	{
		serial: '5CD9103SYX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName['HP360-1030G3']
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'zdaza'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO11
		)[0].id,
		observation: '',
		computerName: 'L-VPGSSYC',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78650U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.21.21'
	},
	{
		serial: '5CD147193N',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP15TDY200
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'calbornoz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO11
		)[0].id,
		observation: '',
		computerName: 'VPZOCCIDENTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I71165G7
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS11
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.21.17'
	},
	{
		serial: 'MJ00XUCD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'acolmenares'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO11
		)[0].id,
		observation: '',
		computerName: 'VPZONAOCCIDENT2',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.21.19'
	},
	{
		serial: 'MJ00XUB7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'raparicio'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO11
		)[0].id,
		observation: '',
		computerName: 'REGIONOCCID02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.21.24'
	},
	{
		serial: 'MJ00RZMY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'rvillalobos'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO11
		)[0].id,
		observation: '',
		computerName: 'REGIONOCCID01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.21.25'
	},
	{
		serial: 'MJ00XUEN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jnogueroles'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO12
		)[0].id,
		observation: '',
		computerName: 'PRESIDENCIA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.70.143'
	},
	{
		serial: 'MJ00XUCE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'princon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ARCONDIS06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.134'
	},
	{
		serial: '5CG95055HX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName['HP360-830G6']
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'josgonzalez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'L-EPSL01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78665U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.133'
	},
	{
		serial: 'MP1LQD9N',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.V33014IKB
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mcepeda'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'L-ARCONDIS01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78550U
		)[0].id,
		memoryRamCapacity: 20,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.123'
	},
	{
		serial: 'MP1LQD8Q',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.V33014IKB
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'princon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'L-PRESTprincon',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78550U
		)[0].id,
		memoryRamCapacity: 20,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.70.170'
	},
	{
		serial: 'MP1LQ9A0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.V33014IKB
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ppaz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMONAI01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78550U
		)[0].id,
		memoryRamCapacity: 20,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.52.150'
	},
	{
		serial: 'MXL051087Y',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lsulbaran'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GCIANISER02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.97'
	},
	{
		serial: 'MJHCVHT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jcolina'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'EPSL03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.176'
	},
	{
		serial: 'MJ00XUBC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'yortiz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'INFRA07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.147'
	},
	{
		serial: 'MJ00XUAM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'msalas'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'INFRA04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.62'
	},
	{
		serial: 'MJ00XUDZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'fmauro'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMONBD01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.82'
	},
	{
		serial: 'MJ00XUEB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'soporteoccidente'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.96'
	},
	{
		serial: 'MJTYGVX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'acabria'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GESTAMB05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.153'
	},
	{
		serial: 'MJ00XUBB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'pmaltese'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'VPADMCCOM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.166'
	},
	{
		serial: 'MJ00RZGV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'marmendez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SISINFO02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54460
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.171'
	},
	{
		serial: 'MJ00XUBF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'csilva'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location =>
				location.name === siteName.TORREBNC5DEJULIOPISO2MONITOREO
		)[0].id,
		observation: '',
		computerName: 'PRODUCSERVTI06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.41.144'
	},
	{
		serial: 'MJ00XUBU',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ncubillan'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMONAI04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.52.108'
	},
	{
		serial: 'MJ00XUBQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'yhmendez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMONAI03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.159'
	},
	{
		serial: 'MJ00XUE9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'enava'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMONAI02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.52.190'
	},
	{
		serial: 'MJ00XUCP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'luferrer'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.78'
	},
	{
		serial: 'MJ00XUC6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'apatino'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.83'
	},
	{
		serial: 'MJHDHMM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'feramirez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'DESAATMPOS03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.192'
	},
	{
		serial: 'MJHDHZZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'cperdomo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'DESAATMPOS07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.201'
	},
	{
		serial: 'MJ00XUD4',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ccaceres'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'PRODUCSERVTI03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.107'
	},
	{
		serial: 'MJ00XUBR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'krincon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.118'
	},
	{
		serial: 'MJ00XUCT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'darodriguez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SISINFO07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.175'
	},
	{
		serial: 'MJ00XUCW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'lbrinez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.224'
	},
	{
		serial: 'MJ00XUDJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'nereyes'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GESTAMB04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.61'
	},
	{
		serial: 'MJ00XUBV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'maromero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'DESAATMPOS02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.95'
	},
	{
		serial: 'MJ00XUCV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'fbarrios'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'EPSL02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.52.14'
	},
	{
		serial: 'MXL04309QT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'recepcion2'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'RECEP5DEJ2',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.139'
	},
	{
		serial: 'MJHDHTX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'vegraterol'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SISINFO04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.182'
	},
	{
		serial: 'MJ55A69',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jprieto'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'PRODBATCH03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.146'
	},
	{
		serial: 'MJ00XUBM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'wrnava'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'INFRA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.131'
	},
	{
		serial: 'MJ00XUDM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'RDGraterol'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'INFRA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.164'
	},
	{
		serial: 'MJ00XUAA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mcaballero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SISINFO03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.210'
	},
	{
		serial: 'MJ00XUD9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'OPERACIONES'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'PRODBATCH04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.75'
	},
	{
		serial: 'MJ00XUD7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dangarcia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location =>
				location.name === siteName.TORREBNC5DEJULIOPISO2MONITOREO
		)[0].id,
		observation: '',
		computerName: 'PRODUCSERVT07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.41.143'
	},
	{
		serial: 'MJ00XUAQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'imontiel'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'PLANPRO01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.109'
	},
	{
		serial: 'MJ00XUBY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'cagarcia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ARCONDIS04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.135'
	},
	{
		serial: 'MJ00XUED',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dprieto'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ARCONDIS02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.143'
	},
	{
		serial: 'MJ00XUBD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mavillalobos'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GESTAMB03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.183'
	},
	{
		serial: 'MJ00XUB4',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jaigarcia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GCIANISER03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.194'
	},
	{
		serial: 'MJ00XUDR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jpaez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GESTAMB02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.59'
	},
	{
		serial: 'MJ00XUAK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'MONITOREOTI'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location =>
				location.name === siteName.TORREBNC5DEJULIOPISO2MONITOREO
		)[0].id,
		observation: '',
		computerName: 'PRODUCSERVTI05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.41.146'
	},
	{
		serial: 'MJ00XUBA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'amaneiro'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.169'
	},
	{
		serial: 'CS02236924',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'Mamendez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'DESAATMPOS05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.196'
	},
	{
		serial: 'PF26GP7Y',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'anleal'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'L-SISINFO01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.168'
	},
	{
		serial: 'PF26GT80',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ipalencia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'L-GCIANISER01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.173'
	},
	{
		serial: 'PF26GM8G',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lcarquez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'INFRA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.70.224'
	},
	{
		serial: 'PF26GP9H',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cortega'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'PRODUCSERVITI01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.52'
	},
	{
		serial: 'PF26P876',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hboscan'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GESTAMB01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.70.162'
	},
	{
		serial: 'MP1LREFC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.V33014IKB
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'calopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'PROYECTO04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78550U
		)[0].id,
		memoryRamCapacity: 20,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.52'
	},
	{
		serial: '5CG9505539',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName['HP360-830G6']
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mbohorquez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'L-PROYCANALES01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78665U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.86'
	},
	{
		serial: 'MXL1390T4K',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'vbellomo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA09',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.17'
	},
	{
		serial: 'MJBPHHK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'aitorres'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.60'
	},
	{
		serial: 'MJWEBE2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'avillalobos'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.67'
	},
	{
		serial: 'MXJ00609YB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yumorales'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.35'
	},
	{
		serial: 'MXL1390RRH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cleon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.53'
	},
	{
		serial: 'MJ00XUEK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'margutierrez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'REDESCOM03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.233'
	},
	{
		serial: 'MJ00XUBS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'atales'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'REDESCOM04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.239'
	},
	{
		serial: 'MJ00RZG2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'aalonzo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'REDESCOM08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.70.194'
	},
	{
		serial: 'MJHDKAL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'CCI2'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.25'
	},
	{
		serial: 'MJHDHZV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'nadelgado'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.51'
	},
	{
		serial: 'MXL3201WP7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'fmiranda'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'CERTIFICACION01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.27'
	},
	{
		serial: 'MJ00XUEQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'cchirino'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'REDESCOM07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.234'
	},
	{
		serial: 'MJ00XUAU',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'kstewart'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'CERTIFICACION05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.46'
	},
	{
		serial: 'MJ00RZHJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'loferrer'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'PROYPOS04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.65'
	},
	{
		serial: 'MJBPHHN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'einciarte'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA-BK',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.150'
	},
	{
		serial: 'MXL1390T57',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jerincon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'TECNOSEG',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.23'
	},
	{
		serial: 'MJBPHGF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jyanez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA14',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.26'
	},
	{
		serial: 'MXJ00609W7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'narambulo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA11',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.28'
	},
	{
		serial: 'MJHCWFZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mutrera'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'CERTIFICACION10',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.42'
	},
	{
		serial: 'MXJ00609MJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'einciarte'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA13',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.43'
	},
	{
		serial: 'MJBPHHP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'rarrieta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.48'
	},
	{
		serial: 'MXL04228SP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jocolina'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA10',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.57'
	},
	{
		serial: 'MXL1390RTH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aarrieta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.63'
	},
	{
		serial: 'MJ00RZLH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'hurdaneta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'TELEFONIA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.235'
	},
	{
		serial: 'MJ00XUCB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'danez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'REDESCOM10',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.237'
	},
	{
		serial: 'MJ00XUCR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'eulacio'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'REDESCOM06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.243'
	},
	{
		serial: 'MJ00XUB9',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'friera'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'PROYPOS02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.24'
	},
	{
		serial: 'MJ00XUDG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'purdaneta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'PROYCANALES03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.50'
	},
	{
		serial: 'MJ00XUCU',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'efreites'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3TELCO
		)[0].id,
		observation: '',
		computerName: 'REDESCOM09',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.0.244'
	},
	{
		serial: 'MXJ00609ZJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ncamacho'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.37'
	},
	{
		serial: 'MJ173DC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'nchirinos'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'CERTIFICACION07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.62'
	},
	{
		serial: 'MJXDKYN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'abfigueroa'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'CERTIFICACION04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.95'
	},
	{
		serial: 'CS02299444',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.C260)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'maacosta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'PROYPOS05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.J1800
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.31'
	},
	{
		serial: 'MJBPHHX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'APIMENTEL'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA12',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.49'
	},
	{
		serial: 'R9WHD4D',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.E49)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'cfuenmayor'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'L-MODELCALD01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33110M
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.36'
	},
	{
		serial: 'MJ52B45',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ghernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.22'
	},
	{
		serial: 'MJTYGTF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'camartinez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA18',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.38'
	},
	{
		serial: 'MJ00XUAY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mecheverria'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.47'
	},
	{
		serial: 'MXJ947086T',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rmoreno'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'INSPCAPCUMNOR02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.16'
	},
	{
		serial: 'MJBPHFE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ebarazarte'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'REQENTESEXT03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.18'
	},
	{
		serial: 'MJBPHEB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'maicastillo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'REQENTESEXT02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.20'
	},
	{
		serial: 'MXL3151VLJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jchavez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'MANTENIMIENTO02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.21'
	},
	{
		serial: 'MJHDHWZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'marbracho'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'INSPCAPCUMNOR01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.37'
	},
	{
		serial: 'MJTYGVA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'vreyes'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'ANASUPOPEFIN01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.39'
	},
	{
		serial: 'MXL3201WH3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'Avillarreal'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.27'
	},
	{
		serial: 'MXL3201WN0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmadueno'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA15',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.25'
	},
	{
		serial: 'MXL3201WG0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lpalma'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA13',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.29'
	},
	{
		serial: 'MJHDHZF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmercado'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.32'
	},
	{
		serial: 'MXL04309XH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mebarrios'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA16',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.33'
	},
	{
		serial: 'MJXKDTN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'heurdaneta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'ANASUPOPEFIN02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.17'
	},
	{
		serial: 'MJBPHFG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'rreyes'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA11',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.35'
	},
	{
		serial: 'MJBPHCD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ggouveia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'GGOUVEIA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.46'
	},
	{
		serial: 'MJ00RZJA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'aaraujo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'PROYECTOS02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.26'
	},
	{
		serial: 'MJ00XUD5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mprieto'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'PROYECTOS03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.30'
	},
	{
		serial: 'MJ00XUE1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jgarcia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'PROYECTOS04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.34'
	},
	{
		serial: 'MJ00RZGY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'anleon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'REQENTESEXT01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.24'
	},
	{
		serial: 'MJHDHYB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'RESSER'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'SEGBANCARIA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.39'
	},
	{
		serial: 'MXL3201WGQ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hesanchez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'BACKOFFICE04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.30'
	},
	{
		serial: 'MXJ9460CFD',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lromero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'COMINCOORP02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.31'
	},
	{
		serial: 'MXL051085M',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'oplata'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'PROCESCRED06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.51'
	},
	{
		serial: 'R9WHD38',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.E49)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'welopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-L-WELOPEZ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33110M
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.43'
	},
	{
		serial: 'MJ00XUDB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mirangel'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-MIRANGEL',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.34'
	},
	{
		serial: 'MJ00XUDP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dchourio'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-DCHOURIO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.36'
	},
	{
		serial: 'MJ00XUAT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jesalazar'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-JESALAZAR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.37'
	},
	{
		serial: 'MJ00XUD1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jjimenez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-JJIMENEZ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.44'
	},
	{
		serial: 'MJWEBC8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'GSCC'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'BODOFICINAS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.28'
	},
	{
		serial: 'MXL31817M0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jorlopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'MANPROLIN',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.40'
	},
	{
		serial: 'MJ00XUB8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jhuerta'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-JHUERTA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.38'
	},
	{
		serial: 'MJ00XUEM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ymarcelo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-YMARCELO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.52'
	},
	{
		serial: 'MJXKCZM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mgil'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'PROCESCRED04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.24'
	},
	{
		serial: 'MJHERBW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'igarcia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'BACKOFFICE02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.45'
	},
	{
		serial: 'MJ00XUE0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'aleal'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-ALEAL',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.32'
	},
	{
		serial: 'MJ00XUC1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jrincon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-JRINCON',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.48'
	},
	{
		serial: 'MXJ00501QM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yquintero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.41'
	},
	{
		serial: 'MJ00RZLU',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jorlopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'BACKOFFICE01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.29'
	},
	{
		serial: 'MJXKDDA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'alarreal'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ARCHIDIGICAI08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.18'
	},
	{
		serial: 'MXJ00601ML',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ychacin'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'INFCARTERA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.21'
	},
	{
		serial: 'MJWDYP2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'achacin'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ARCHIDIGCAI04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.22'
	},
	{
		serial: 'MJXKDHT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'rsandrea'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ARCHIDIGCAI06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.23'
	},
	{
		serial: 'MJ00XUD2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'csandrea'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'SERVICIOS05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.25'
	},
	{
		serial: 'MJ00XUER',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ncolman'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-NCOLMAN',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.33'
	},
	{
		serial: 'MJ00XUC3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jomedina'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ARCHIDIGCAI02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.54'
	},
	{
		serial: 'MJ00XUDL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'znunez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ZNUNEZ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.16'
	},
	{
		serial: 'MJ00XUB5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'kferrebu'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'SEGCONSERV02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.42'
	},
	{
		serial: 'MJ00XUAZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'kpicon'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'SEGCONSERV03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.55'
	},
	{
		serial: 'MJ00XUAJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jatencio'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'CAI-JATENCIO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.49'
	},
	{
		serial: 'MJHCWEX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ycontreras'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ARCHIDIGICAI05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.26'
	},
	{
		serial: 'MXL3201WH0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emontoya'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO5
		)[0].id,
		observation: '',
		computerName: 'ARCHIDIGCAI03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.15.27'
	},
	{
		serial: 'WB11218551',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.G480)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ebriceno'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'NOMINA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33120M
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.19'
	},
	{
		serial: 'MXL3201WFY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mamelean'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.17'
	},
	{
		serial: 'MJ51X89',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmerchan'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'INFCARTERA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.20'
	},
	{
		serial: 'MXL3151VL3',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hteran'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.21'
	},
	{
		serial: 'MJTYGTB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'vmorante'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA12',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.50'
	},
	{
		serial: 'MXL0430B11',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'maricgonzalez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.54'
	},
	{
		serial: 'MXL3201WH8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'niparra'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA15',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.56'
	},
	{
		serial: 'MJHCVFF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'elromero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'RHNOMINA05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.25'
	},
	{
		serial: 'MJXDKCK',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'eferrer'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA14',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.55'
	},
	{
		serial: 'MXL3201WGG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'Maydiaz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.23'
	},
	{
		serial: 'MJXDLHM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dbravo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'RHNOMINA07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.18'
	},
	{
		serial: 'MXL3201WGP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmoreno'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA11',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.46'
	},
	{
		serial: 'MJTYGWB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'adfernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA10',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.53'
	},
	{
		serial: 'MJ00XUDC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'carloslopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'RHSEGSALUD02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.16'
	},
	{
		serial: 'MJ52A81',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'hmoreno'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.36'
	},
	{
		serial: 'MJTYGTL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mcubillan'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.39'
	},
	{
		serial: 'MJTYGXC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'anmavarez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'CONSULTORIA09',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.44'
	},
	{
		serial: 'MJ00XUAN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'marilsanchez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'RHFORMA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.22'
	},
	{
		serial: 'PF0S7BJN',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X15TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ereyes'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO6
		)[0].id,
		observation: '',
		computerName: 'L-NOMINA01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I77600U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.16.61'
	},
	{
		serial: '5CG950553Z',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName['HP360-830G6']
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ivillasmil'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'L-VPNEGBE01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78665U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.25'
	},
	{
		serial: 'MJXDKXX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jguillen'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOSBE09',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.20'
	},
	{
		serial: 'MJ51X64',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mbaptista'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOBE02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.16'
	},
	{
		serial: 'MXL31809V6',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jvazquez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'RIESGO01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.22'
	},
	{
		serial: 'MJ52A57',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jantunez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'BANCCORP02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.23'
	},
	{
		serial: 'MXL1370JGM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'TGOUVEIA'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'BANCCORP01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.24'
	},
	{
		serial: 'MJERGYX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'rbracho'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOBE13',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.27'
	},
	{
		serial: 'MXL3201WGH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'msegovia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'NEGOCIOSBE01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.21'
	},
	{
		serial: 'MJXKCZL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmaldonado'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOSBE12',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.41'
	},
	{
		serial: 'MJERKKH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'angperez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOSBE13',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.36'
	},
	{
		serial: 'MJHDHYG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'helopez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'RECCANELEC01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.118'
	},
	{
		serial: 'MXL0430B6D',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'Dgutierrez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'RECCANELEC04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.120'
	},
	{
		serial: 'MXL0430B3H',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mariacgonzalez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'RECCANELEC06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.30'
	},
	{
		serial: 'MJHDHMA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'yvazquez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPEREFEC02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.27'
	},
	{
		serial: 'MXL333292H',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'arivera'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'ECCANELEC05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.121'
	},
	{
		serial: 'MJHCVFB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'gchourio'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'LIQUIDACION04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.128'
	},
	{
		serial: 'MXL0430B34',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'eferrini'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'EFERRINI',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.17'
	},
	{
		serial: 'MXL051087F',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aprimera'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'EMIDIST03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.23'
	},
	{
		serial: 'MXJ00601JR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'RCHIRINO'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'EMIDIST04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.31'
	},
	{
		serial: 'MXL3151VM0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ecastellano'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPERESP08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.32'
	},
	{
		serial: 'MXL31817Q1',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'FJIMENEZ'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'EMIDIST02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.34'
	},
	{
		serial: 'MJTYGVY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ygonzalez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP09',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.35'
	},
	{
		serial: 'MXL333293Q',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP4300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'Emavares'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.28'
	},
	{
		serial: 'MJ00XUEF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'edmunoz'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP10',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.33'
	},
	{
		serial: 'MJXKDKF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jbrizuela'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'LIQUIDACION02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.125'
	},
	{
		serial: 'MJHCWEF',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M81)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'nehernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'EMIDIST01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.139'
	},
	{
		serial: 'MXJ00503SX',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'dsulbaran'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'LIQUIDACION03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.29'
	},
	{
		serial: 'MJHDHNB',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'aortega'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPERESP07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.123'
	},
	{
		serial: 'MJHDHXW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'wparedes'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROYECTOS05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.26'
	},
	{
		serial: 'MXL3151VLT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'elcastellano'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'ELCASTELLANO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.37'
	},
	{
		serial: 'MXJ945010W',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ymendoza'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP08',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.46'
	},
	{
		serial: 'MXL318182F',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmiquilena'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'RECLAMOS07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.38'
	},
	{
		serial: 'MJ00XUCM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dpenzo'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPERESP01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.148'
	},
	{
		serial: 'MXL31817J2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mperez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPERESP02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.20'
	},
	{
		serial: 'MXJ945011J',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'esilva'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'LIQUIDACION01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.25'
	},
	{
		serial: 'MJ00XUD8',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'marsanchez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.106'
	},
	{
		serial: 'MJ00XUCS',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'zfernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.108'
	},
	{
		serial: 'MJHCVTR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'varomero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPERESP04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.36'
	},
	{
		serial: 'MJ54Z84',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'kmejia'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP04',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.79'
	},
	{
		serial: 'MJHDKBL',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mhernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'OPERESP03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.24'
	},
	{
		serial: 'PF26GV4P',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.X17TH
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cbaena'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'VPOPERCENT01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I78565U
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(
			hdd => hdd.name === hddTypeName.SDDM2
		)[0].id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.104'
	},
	{
		serial: 'MJHCVFA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jcubillan'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'EMIDIST05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.136'
	},
	{
		serial: 'MXL3201WGV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jepineda'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'JEPINEDA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.19'
	},
	{
		serial: 'MB00307640',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.G480)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'crodriguez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: 'L-GTEREG01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33120M
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.40'
	},
	{
		serial: 'MXJ94500ZJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rrivera'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: '12518PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.19'
	},
	{
		serial: 'MJ03JPQV',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M83)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mcastro'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: 'GTEOPER03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.22'
	},
	{
		serial: 'MJBPHDH',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'jovillegas'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: '19261GERENTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.35'
	},
	{
		serial: 'MXL4020TNT',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP8300
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rsalazar'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: '192085PROMOT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.24'
	},
	{
		serial: 'MJWEBF0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'Ruhernandez'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: '19233GTEZOCC',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.41'
	},
	{
		serial: 'MJ55A37',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'emromero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: 'BANCACOMERCIAL1',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.15'
	},
	{
		serial: 'MJTYGRY',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'marrivero'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: 'GTEOPER02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.17'
	},
	{
		serial: 'MJ00XUAG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'eprimera'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: 'BANCACOMERCIAL5',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.16'
	},
	{
		serial: 'MJBPHFZ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'soccidentep11'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location =>
				location.name === siteName.TORREBNC5DEJULIOSALASDECONFERENCIA
		)[0].id,
		observation: '',
		computerName: 'SALAPISO11',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.105.50'
	},
	{
		serial: 'LRMFC15',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'soccidentep9'
		)[0].id,
		locationId: siteMCBOlocation.filter(
			location =>
				location.name === siteName.TORREBNC5DEJULIOSALASDECONFERENCIA
		)[0].id,
		observation: '',
		computerName: 'SALAPISO9',
		processorId: processors.filter(
			processor => processor.number_model === processorName.T6670
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.105.30'
	},
	{
		serial: 'MJ00XUB2',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO1
		)[0].id,
		observation: '',
		computerName: 'AFIPOSOCC01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.11.93'
	},
	{
		serial: 'MJTYGVM',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO11
		)[0].id,
		observation: '',
		computerName: 'PRESIDENCIA3',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I53470
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.21.16'
	},
	{
		serial: 'MJXDKBP',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'EPSL05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.52.13'
	},
	{
		serial: 'MXJ94500VC',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOBE03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[250]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.119'
	},
	{
		serial: 'MJMMKFW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M71E)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOSBE07',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.50'
	},
	{
		serial: 'MXL1390T39',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMINFISAMB01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.2'
	},
	{
		serial: 'MJWDYF0',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M70E)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ARCONDIS05',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.149'
	},
	{
		serial: 'MJWDXL7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M91P)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'ADMFISAMB02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.165'
	},
	{
		serial: 'MXL31817JG',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'PRODBATCH02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.148'
	},
	{
		serial: 'MJ00XUEJ',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEOCC02',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.43'
	},
	{
		serial: 'MJ645EE',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.TS430
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SRVSOPORTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E31230V2
		)[0].id,
		memoryRamCapacity: 16,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWSSERVER2012
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.106'
	},
	{
		serial: 'MXL05108C5',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'SOPORTEIMAGEN',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 6,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWSSERVER2012
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.12.77'
	},
	{
		serial: 'LRGL100',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.LAPTOPS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.SL410
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO2
		)[0].id,
		observation: '',
		computerName: 'L-GUARDIAADMONAI',
		processorId: processors.filter(
			processor => processor.number_model === processorName.T6670
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MXJ00609H7',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6000
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		observation: '',
		computerName: 'SEGURIDAD01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.13.44'
	},
	{
		serial: 'MXL3201WGR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6300
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO4
		)[0].id,
		observation: '',
		computerName: 'AUDITORIA06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[320]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.14.19'
	},
	{
		serial: 'MJXKDCW',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M72E)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO7
		)[0].id,
		observation: '',
		computerName: 'GTENEGOCIOSBE01',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32130
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.17.33'
	},
	{
		serial: 'MJ00XUDA',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.ALLINONE
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(model => model.name === modelName.M73Z)[0]
			.id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO8
		)[0].id,
		observation: '',
		computerName: 'PROESPREP06',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54430S
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[1000]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS81
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.18.91'
	},
	{
		serial: 'MXL1390T34',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(brand => brand.name === brandOnlyName.HP)[0]
			.id,
		modelId: modelComputer.filter(
			model => model.name === modelName.HP6200
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO9
		)[0].id,
		observation: '',
		computerName: 'BANCACOMER03',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[160]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.19.18'
	},
	{
		serial: 'MJ08H4TR',
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.LENOVO
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.M720Q
		)[0].id,
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location =>
				location.name === siteName.TORREBNC5DEJULIOSALASDECONFERENCIA
		)[0].id,
		observation: '',
		computerName: 'SALAPISO13',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I58400T
		)[0].id,
		memoryRamCapacity: 8,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[500]
		)[0].id,
		hardDriveTypeId: hddTypes.filter(hdd => hdd.name === hddTypeName.HDD)[0]
			.id,
		operatingSystemId: operatingSystem.filter(
			os => os.name === osName.WINDOWS10
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.0.105.20'
	}
]

module.exports = { torre }
