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
const { agenciaName, agenciasSite } = require('../location/locations')
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

const agencia = [
	{
		serial: 'MXL04228VM',
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
			employee => employee.userName === 'jalana'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '01509CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.27.12'
	},
	{
		serial: 'MXJ9200DBD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'prondon'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '01503COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.27.56'
	},
	{
		serial: 'MXJ91909DS',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'maricastillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '01504PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.27.64'
	},
	{
		serial: 'MXJ919094N',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'licastillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '01502SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.27.66'
	},
	{
		serial: 'MXJ00503SY',
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
			employee => employee.userName === 'lquintero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '01503PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5300
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
		ipAddress: '10.84.27.67'
	},
	{
		serial: 'MJ08H512',
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
		employeeId: employees.filter(
			employee => employee.userName === 'asarmiento'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '015005CJEROS',
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
		ipAddress: '10.84.27.31'
	},
	{
		serial: 'MXL4020TM7',
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
			employee => employee.userName === 'Yuacosta'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '015003PRMTOR',
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
		ipAddress: '10.84.27.34'
	},
	{
		serial: 'MXJ94500VZ',
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
			employee => employee.userName === 'jusalazar'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(015)']
		)[0].id,
		observation: '',
		computerName: '01505PROMTO',
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
		ipAddress: '10.84.27.33'
	},
	{
		serial: 'MJ04HSVE',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'bromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(030)']
		)[0].id,
		observation: '',
		computerName: '03002SUBGEREN',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.18.4'
	},
	{
		serial: 'MJ08H7Y3',
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
		employeeId: employees.filter(
			employee => employee.userName === 'npuentes'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(030)']
		)[0].id,
		observation: '',
		computerName: '030013CJROS',
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
		ipAddress: '192.168.18.16'
	},
	{
		serial: 'MXJ90703DR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'wmayor'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(030)']
		)[0].id,
		observation: '',
		computerName: 'FUNCIONARIO030',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '192.168.18.18'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jmoreno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(030)']
		)[0].id,
		observation: '',
		computerName: '17404PRMOTR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '192.168.18.6'
	},
	{
		serial: 'MJ08H7Z1',
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
		employeeId: employees.filter(
			employee => employee.userName === 'marmelean'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(030)']
		)[0].id,
		observation: '',
		computerName: '030018CJROS',
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
		ipAddress: '192.168.18.13'
	},
	{
		serial: 'MXJ00601G9',
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
			employee => employee.userName === 'olozada'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '03108CAJ',
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
		ipAddress: '10.84.4.11'
	},
	{
		serial: 'MXJ94500VG',
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
			employee => employee.userName === 'klopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '03106PROM',
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
		ipAddress: '10.84.4.17'
	},
	{
		serial: 'MXJ00503SZ',
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
			employee => employee.userName === 'macastillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '03104PROM',
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
		ipAddress: '10.84.4.19'
	},
	{
		serial: 'MXJ94500TH',
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
			employee => employee.userName === 'LVALERA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '03102SUB',
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
		ipAddress: '10.84.4.52'
	},
	{
		serial: 'MXL051085S',
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
			employee => employee.userName === 'yeslopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '03103COOR',
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
		ipAddress: '10.84.4.31'
	},
	{
		serial: 'MXJ00503SK',
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
			employee => employee.userName === 'jolopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '03101GTE',
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
		ipAddress: '10.84.4.55'
	},
	{
		serial: 'MJ08H815',
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
		employeeId: employees.filter(
			employee => employee.userName === 'echacin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(031)']
		)[0].id,
		observation: '',
		computerName: '031002CJROS',
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
		ipAddress: '10.84.4.20'
	},
	{
		serial: 'MJ08H52V',
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
		employeeId: employees.filter(
			employee => employee.userName === 'yeperozo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(032)']
		)[0].id,
		observation: '',
		computerName: '032016CJEROS',
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
		ipAddress: '192.168.61.107'
	},
	{
		serial: 'MJ04CSNR',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dicolmenares'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(032)']
		)[0].id,
		observation: '',
		computerName: '03209GERENTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.61.111'
	},
	{
		serial: 'MJ08H80W',
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
		employeeId: employees.filter(
			employee => employee.userName === 'dchacin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(032)']
		)[0].id,
		observation: '',
		computerName: '03201CJEROS',
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
		ipAddress: '192.168.61.98'
	},
	{
		serial: 'MJ04HSVU',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'dchacin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(032)']
		)[0].id,
		observation: '',
		computerName: '03204CORRD',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.61.100'
	},
	{
		serial: 'MJ04CSPT',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mtroconis'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(032)']
		)[0].id,
		observation: '',
		computerName: '03206SUBGTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.61.103'
	},
	{
		serial: 'MXJ90704C5',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rgonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(032)']
		)[0].id,
		observation: '',
		computerName: '03204PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '192.168.61.104'
	},
	{
		serial: 'MJ08H7Z8',
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
		employeeId: employees.filter(
			employee => employee.userName === 'jguerrero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '04004CJERO',
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
		ipAddress: '192.168.19.6'
	},
	{
		serial: 'MJ08H50B',
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
		employeeId: employees.filter(
			employee => employee.userName === 'jesalcedo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '04009CJERO',
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
		ipAddress: '192.168.19.43'
	},
	{
		serial: 'MJ018CF',
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
			employee => employee.userName === 'Oparaco'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '040029GTEOPERT',
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
		ipAddress: '192.168.19.34'
	},
	{
		serial: 'MXL0260WPC',
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
			model => model.name === modelName.HP8000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'margomez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '040002PRMTRES',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E8400
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
		ipAddress: '192.168.19.7'
	},
	{
		serial: 'MJMMEMK',
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
			employee => employee.userName === 'yquiroga'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '040035ESNEGC',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.19.18'
	},
	{
		serial: 'MJMMENP',
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
			employee => employee.userName === 'pcolmenares'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '04021GERNTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.19.25'
	},
	{
		serial: 'MXL41804XS',
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
			model => model.name === modelName.HP600G1
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'corozco'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: 'A040038VPLAN',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54570
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
		ipAddress: '192.168.19.28'
	},
	{
		serial: 'MXJ90607QD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ymontoya'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '040047PROMTR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '192.168.19.57'
	},
	{
		serial: 'MXJ90702HS',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hvilchez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '040016ENEGOCIOS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '192.168.19.26'
	},
	{
		serial: 'MJ08H520',
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
		employeeId: employees.filter(
			employee => employee.userName === 'sandes'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: 'UDVZLOSNDES',
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
		ipAddress: '192.168.19.32'
	},
	{
		serial: 'MJ08H81Z',
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
		employeeId: employees.filter(
			employee => employee.userName === 'nnavea'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '04010CJERO',
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
		ipAddress: '192.168.19.2'
	},
	{
		serial: 'MJ04CSQB',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'roramirez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: 'A040007GTEOP',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.19.44'
	},
	{
		serial: 'MXJ9470879',
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
			employee => employee.userName === 'yicontreras'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '287EARIAS',
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
		ipAddress: '192.168.19.56'
	},
	{
		serial: 'MXJ9200468',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'juseche'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '09307SEG',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.99.20'
	},
	{
		serial: 'MXJ90701H3',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'eguillen'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '09315GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.50.99.31'
	},
	{
		serial: 'MJMLYKP',
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
			employee => employee.userName === 'cicalderon'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '09311PROMOT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.50.99.27'
	},
	{
		serial: 'MJ08H4WL',
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
		employeeId: employees.filter(
			employee => employee.userName === 'llabrador'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '09302CJEROS',
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
		ipAddress: '10.50.99.21'
	},
	{
		serial: 'MJ08H82L',
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
		employeeId: employees.filter(
			employee => employee.userName === 'josperez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '09305CJEROS',
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
		ipAddress: '10.50.99.22'
	},
	{
		serial: 'MJMLYTD',
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
			employee => employee.userName === 'aarellano'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '09313PROMOT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.50.99.26'
	},
	{
		serial: 'MJMMCCP',
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
			employee => employee.userName === 'ycadenas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(093)']
		)[0].id,
		observation: '',
		computerName: '093003SUBOPRT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.50.99.23'
	},
	{
		serial: 'MJMMFCA',
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
			employee => employee.userName === 'encastellanos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(096)']
		)[0].id,
		observation: '',
		computerName: '096012PRMTORES',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.3.14'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'nolopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(096)']
		)[0].id,
		observation: '',
		computerName: '09618COORDN1',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '192.168.3.24'
	},
	{
		serial: 'MJMLYMF',
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
			employee => employee.userName === 'rsayago'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(096)']
		)[0].id,
		observation: '',
		computerName: '09620ENEGOCIOS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.3.29'
	},
	{
		serial: 'MJ03JPNN',
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
			employee => employee.userName === 'jtarazona'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(096)']
		)[0].id,
		observation: '',
		computerName: 'A096020GER',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
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
		ipAddress: '192.168.3.4'
	},
	{
		serial: 'MJ08H53B',
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
		employeeId: employees.filter(
			employee => employee.userName === 'yocastro'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10108CAJ',
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
		ipAddress: '10.100.101.18'
	},
	{
		serial: 'MXJ00501RD',
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
			employee => employee.userName === 'riparra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10104PROM',
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
		ipAddress: '10.100.101.14'
	},
	{
		serial: 'MJ08H4XE',
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
		employeeId: employees.filter(
			employee => employee.userName === 'wmolina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10109CAJ',
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
		ipAddress: '10.100.101.19'
	},
	{
		serial: 'MJHETCD',
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
			employee => employee.userName === 'mbravo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10102SUB',
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
		ipAddress: '10.100.101.12'
	},
	{
		serial: 'MJMMHKH',
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
			employee => employee.userName === 'ccastellanos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10106PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.100.101.16'
	},
	{
		serial: 'MJ03JPQE',
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
			employee => employee.userName === 'wmolina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10103COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
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
		ipAddress: '10.100.101.13'
	},
	{
		serial: 'MXL3151VLQ',
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
			employee => employee.userName === 'ecarreno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '1101GTE',
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
		ipAddress: '10.100.101.11'
	},
	{
		serial: 'MJMLYNL',
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
			employee => employee.userName === 'dconde'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10105PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.100.101.15'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'marigomez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '10201NEGOCIOS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '192.168.160.25'
	},
	{
		serial: 'MXJ83302WF',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lguanipa'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '10204PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
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
		ipAddress: '192.168.160.24'
	},
	{
		serial: 'MJ08H813',
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
		employeeId: employees.filter(
			employee => employee.userName === 'efonseca'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '122018CAJEROS',
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
		ipAddress: '192.168.160.5'
	},
	{
		serial: 'MJ03JPPU',
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
			employee => employee.userName === 'mmonte'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '12208COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
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
		ipAddress: '192.168.160.17'
	},
	{
		serial: 'MXL5260NL6',
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
			model => model.name === modelName.HP400G1
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'suhernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '102017CDINDOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
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
		ipAddress: '192.168.160.19'
	},
	{
		serial: 'MJMMFHB',
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
			employee => employee.userName === 'adcolina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '10206PRMTRES',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.160.21'
	},
	{
		serial: 'MJ08H824',
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
		employeeId: employees.filter(
			employee => employee.userName === 'rmarin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(102)']
		)[0].id,
		observation: '',
		computerName: '102012CJEROS',
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
		ipAddress: '192.168.160.11'
	},
	{
		serial: 'MJ08H839',
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
		employeeId: employees.filter(
			employee => employee.userName === 'eibarra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(112)']
		)[0].id,
		observation: '',
		computerName: '11205CJEROS',
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
		ipAddress: '192.168.75.38'
	},
	{
		serial: 'MJ08H4SP',
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
		employeeId: employees.filter(
			employee => employee.userName === 'eibarra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(112)']
		)[0].id,
		observation: '',
		computerName: '11207CJEROS',
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
		ipAddress: '192.168.75.47'
	},
	{
		serial: 'MJ03JPRY',
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
			employee => employee.userName === 'garaque'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(112)']
		)[0].id,
		observation: '',
		computerName: '112013CORDNAD',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
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
		ipAddress: '192.168.75.53'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emoreno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(112)']
		)[0].id,
		observation: '',
		computerName: '112010ENEGOCI',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '192.168.75.46'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'wfernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(117)']
		)[0].id,
		observation: '',
		computerName: '117004PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '192.168.76.5'
	},
	{
		serial: 'MJ08H51Q',
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
		employeeId: employees.filter(
			employee => employee.userName === 'brodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(117)']
		)[0].id,
		observation: '',
		computerName: '11711CJERO',
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
		ipAddress: '192.168.76.22'
	},
	{
		serial: 'MXJ92004HY',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yaguilar'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(117)']
		)[0].id,
		observation: '',
		computerName: '11705PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '192.168.76.25'
	},
	{
		serial: 'MXL0260ZH8',
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
			model => model.name === modelName.HP8000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rpolanco'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(119)']
		)[0].id,
		observation: '',
		computerName: '11902PRMTORA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E8400
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
		ipAddress: '192.168.76.139'
	},
	{
		serial: 'MXL02610PL',
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
			model => model.name === modelName.HP8000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ygomez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(119)']
		)[0].id,
		observation: '',
		computerName: '119011GRTES1',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E8400
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
		ipAddress: '192.168.76.141'
	},
	{
		serial: 'MJMMERH',
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
			employee => employee.userName === 'ogarcia'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(119)']
		)[0].id,
		observation: '',
		computerName: '11901SUBGTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '192.168.76.145'
	},
	{
		serial: 'MXJ90607PQ',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emolina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(119)']
		)[0].id,
		observation: '',
		computerName: '119019PROMCON',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '192.168.76.135'
	},
	{
		serial: 'MJ08H7YN',
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
		employeeId: employees.filter(
			employee => employee.userName === 'alugo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(119)']
		)[0].id,
		observation: '',
		computerName: '11914CJEROS',
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
		ipAddress: '192.168.76.150'
	},
	{
		serial: 'MXJ92009JM',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'oromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '12206CJEROS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
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
		ipAddress: '192.168.76.164'
	},
	{
		serial: 'MXJ9200B7L',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hguignan'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '12207CJEROS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '192.168.76.167'
	},
	{
		serial: 'MJMMELH',
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
			employee => employee.userName === 'jalvarez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '10202COORD',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.76.169'
	},
	{
		serial: 'MXJ92009FH',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ppartidas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '12201GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '192.168.76.174'
	},
	{
		serial: 'MJ04CSPG',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'rcastro'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: 'A12209ASNEG',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.76.173'
	},
	{
		serial: 'MXL02610FP',
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
			model => model.name === modelName.HP8000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'eandara'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '122003CORDND',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E8400
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
		ipAddress: '192.168.76.177'
	},
	{
		serial: 'MXJ92004D0',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ksanchez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '12208PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '192.168.76.166'
	},
	{
		serial: 'MJ08H52G',
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
		employeeId: employees.filter(
			employee => employee.userName === 'fhernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(122)']
		)[0].id,
		observation: '',
		computerName: '12210CJEROS',
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
		ipAddress: '192.168.76.165'
	},
	{
		serial: 'MXJ907035B',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'apazpirela'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(123)']
		)[0].id,
		observation: '',
		computerName: '12307CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.123.17'
	},
	{
		serial: 'MXJ83500BK',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gemedina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(123)']
		)[0].id,
		observation: '',
		computerName: '12301GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
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
		ipAddress: '10.100.123.11'
	},
	{
		serial: 'MXJ835007H',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'anfernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(123)']
		)[0].id,
		observation: '',
		computerName: '12303COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.123.13'
	},
	{
		serial: 'MXJ83500D6',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ariera'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(123)']
		)[0].id,
		observation: '',
		computerName: '12304PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.123.14'
	},
	{
		serial: 'MXJ827060H',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'elgonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(123)']
		)[0].id,
		observation: '',
		computerName: '12302SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.100.123.12'
	},
	{
		serial: 'MXJ83302Z7',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'MICOLINA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(123)']
		)[0].id,
		observation: '',
		computerName: '12305PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.123.15'
	},
	{
		serial: 'MJ08H524',
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
		employeeId: employees.filter(
			employee => employee.userName === 'yarraga'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '125009CJEROS',
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
		ipAddress: '10.84.125.14'
	},
	{
		serial: 'MJ08H838',
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
		employeeId: employees.filter(
			employee => employee.userName === 'yucolina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '125016CJEROS',
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
		ipAddress: '10.84.125.12'
	},
	{
		serial: 'MJ08H54G',
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
		employeeId: employees.filter(
			employee => employee.userName === 'jfernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '125017CJEROS',
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
		ipAddress: '10.84.125.13'
	},
	{
		serial: 'MXL0430B72',
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
			employee => employee.userName === 'adgarcia'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '12509PROM',
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
		ipAddress: '10.84.125.25'
	},
	{
		serial: 'MXJ9460CF4',
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
			employee => employee.userName === 'BMERCHAN'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '12511PRO',
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
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.84.125.26'
	},
	{
		serial: 'MXJ00609ZR',
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
			employee => employee.userName === 'IGONZALEZ'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '12510PROM',
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
		ipAddress: '10.84.125.28'
	},
	{
		serial: 'MXL31817Q5',
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
			employee => employee.userName === 'rbriceno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '12502SUB',
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
		ipAddress: '10.84.125.30'
	},
	{
		serial: 'MXL051088H',
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
			employee => employee.userName === 'vrodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '125PROMTAQINT',
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
		ipAddress: '10.84.125.32'
	},
	{
		serial: 'MXL318182H',
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
			employee => employee.userName === 'annlopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(125)']
		)[0].id,
		observation: '',
		computerName: '12501GTE',
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
		ipAddress: '10.84.125.31'
	},
	{
		serial: 'MXJ92004G7',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'otorres'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '12606CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.126.16'
	},
	{
		serial: 'MXJ92004G2',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'judrodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '12605PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.126.15'
	},
	{
		serial: 'MXJ9190B19',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'bcarrasco'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '12608PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.100.126.18'
	},
	{
		serial: 'MXJ90703CB',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'armartinez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '12613COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.100.126.13'
	},
	{
		serial: 'MJ08H4VE',
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
		employeeId: employees.filter(
			employee => employee.userName === 'ybarroso'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '126004CJEROS',
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
		ipAddress: '10.100.126.17'
	},
	{
		serial: 'MXJ83302YR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'asierra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '12602GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
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
		ipAddress: '10.100.126.11'
	},
	{
		serial: 'MXJ8340GRM',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'migutierrez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(126)']
		)[0].id,
		observation: '',
		computerName: '12604SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.126.14'
	},
	{
		serial: 'MJ04CSQE',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'mbermudez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15202SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '10.100.152.12'
	},
	{
		serial: 'MJMLYTM',
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
			employee => employee.userName === 'eleon'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15206PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.100.152.16'
	},
	{
		serial: 'MJMLYDG',
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
			employee => employee.userName === 'ppolanco'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15201GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.100.152.11'
	},
	{
		serial: 'MJ08H808',
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
		employeeId: employees.filter(
			employee => employee.userName === 'bobonaga'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15208CAJ',
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
		ipAddress: '10.100.152.18'
	},
	{
		serial: 'MJMLYDZ',
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
			employee => employee.userName === 'JOCANDO'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15203COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.100.152.13'
	},
	{
		serial: 'MXL0260WRC',
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
			model => model.name === modelName.HP8000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'avillasmil'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15204PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E8400
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
		ipAddress: '10.100.152.14'
	},
	{
		serial: 'MXL02610Q6',
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
			model => model.name === modelName.HP8000
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'augonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15205PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E8400
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
		ipAddress: '10.100.152.15'
	},
	{
		serial: 'MJ08H518',
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
		employeeId: employees.filter(
			employee => employee.userName === 'jchirinos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(152)']
		)[0].id,
		observation: '',
		computerName: '15207CAJ',
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
		ipAddress: '10.100.152.17'
	},
	{
		serial: 'MXJ9200414',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'falbornoz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16210PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.162.20'
	},
	{
		serial: 'MXJ92009J4',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emaita'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16207CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.162.17'
	},
	{
		serial: 'MXJ00503TX',
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
			employee => employee.userName === 'ABORJAS'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '162001CORDINC',
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
		ipAddress: '10.100.162.13'
	},
	{
		serial: 'MXJ92009GR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aorono'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16204PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.100.162.14'
	},
	{
		serial: 'MJ08H50J',
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
		employeeId: employees.filter(
			employee => employee.userName === 'ecardozo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16209CJERO',
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
		ipAddress: '10.100.162.19'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'omnava'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16202SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '10.100.162.12'
	},
	{
		serial: 'MXJ92009G5',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'maestrada'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16205PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.100.162.15'
	},
	{
		serial: 'MJ08H4ZT',
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
		employeeId: employees.filter(
			employee => employee.userName === 'fcastillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16213CJERO',
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
		ipAddress: '10.100.162.23'
	},
	{
		serial: 'MXL0430B67',
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
			employee => employee.userName === 'igutierrez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(162)']
		)[0].id,
		observation: '',
		computerName: '16201GTE',
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
		ipAddress: '10.100.162.11'
	},
	{
		serial: 'MJ08H4XX',
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
		employeeId: employees.filter(
			employee => employee.userName === 'yferrer'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19209CAJ',
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
		ipAddress: '10.100.192.19'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yachirinos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19204PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.100.192.14'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.H61MLV
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'vcolmenarez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19205PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.100.192.15'
	},
	{
		serial: 'MXL4020TMC',
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
			employee => employee.userName === 'hvillasmil'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19203COOR',
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
		ipAddress: '10.100.192.13'
	},
	{
		serial: 'MJ08H7YG',
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
		employeeId: employees.filter(
			employee => employee.userName === 'fortiz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19207CAJ',
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
		ipAddress: '10.100.192.17'
	},
	{
		serial: 'MJ08H4WF',
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
		employeeId: employees.filter(
			employee => employee.userName === 'ipuche'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19208CAJ',
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
		ipAddress: '10.100.192.18'
	},
	{
		serial: 'MJ03JPRJ',
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
			employee => employee.userName === 'mpuche'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(192)']
		)[0].id,
		observation: '',
		computerName: '19206PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I54590
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
		ipAddress: '10.100.192.16'
	},
	{
		serial: 'MJ04HSW9',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'yocando'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(210)']
		)[0].id,
		observation: '',
		computerName: '210008CAJERO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.131.104'
	},
	{
		serial: 'MJ04HSVL',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ynava'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(210)']
		)[0].id,
		observation: '',
		computerName: '210004ENEGOCIOS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.131.101'
	},
	{
		serial: 'MJ08H4X3',
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
		employeeId: employees.filter(
			employee => employee.userName === 'hsangronis'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(210)']
		)[0].id,
		observation: '',
		computerName: '21006CJEROS',
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
		ipAddress: '192.168.131.102'
	},
	{
		serial: 'MJ04HSWR',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'lnunez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(210)']
		)[0].id,
		observation: '',
		computerName: '210001GRENT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.131.98'
	},
	{
		serial: 'MJ04CSQ7',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'kacosta'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(210)']
		)[0].id,
		observation: '',
		computerName: '210003COORD',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.131.100'
	},
	{
		serial: 'MJ04HSX6',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'ylopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(210)']
		)[0].id,
		observation: '',
		computerName: '210005PROMOT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '192.168.131.105'
	},
	{
		serial: 'MXL05108BZ',
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
			employee => employee.userName === 'ACORONEL'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(262)']
		)[0].id,
		observation: '',
		computerName: '26206CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.36.9.14'
	},
	{
		serial: 'MXL0502DT4',
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
			employee => employee.userName === 'apuente'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(262)']
		)[0].id,
		observation: '',
		computerName: '26205PROM',
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
		ipAddress: '10.36.9.35'
	},
	{
		serial: 'MXJ90703DQ',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ADBRICENO'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(262)']
		)[0].id,
		observation: '',
		computerName: '26202SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.9.52'
	},
	{
		serial: 'MXL05108CW',
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
			employee => employee.userName === 'kasanchez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(262)']
		)[0].id,
		observation: '',
		computerName: '26201GTE',
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
		ipAddress: '10.36.9.53'
	},
	{
		serial: 'MJHDHTH',
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
			employee => employee.userName === 'mmadriz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26318CAJ',
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
			os => os.name === osArqName['32BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.36.1.24'
	},
	{
		serial: 'MXJ9200D90',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'Aqrodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26307PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.1.34'
	},
	{
		serial: 'MXJ92004FJ',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'nleon'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26311PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.1.37'
	},
	{
		serial: 'MXJ82705ZG',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'irobles'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26312ANA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.36.1.45'
	},
	{
		serial: 'MXJ9190B1D',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rmartinez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26314PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.1.53'
	},
	{
		serial: 'MXJ9200D4K',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'Jfrenellin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26309PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.1.35'
	},
	{
		serial: 'MJHCVHA',
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
			employee => employee.userName === 'ezea'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26317CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32120
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
		ipAddress: '10.36.1.11'
	},
	{
		serial: 'MXJ9200D7B',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jbazan'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26303COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.1.21'
	},
	{
		serial: 'MXL04309W8',
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
			employee => employee.userName === 'anpuente'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26302SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.36.1.52'
	},
	{
		serial: 'MXJ92004CX',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gbarreno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(263)']
		)[0].id,
		observation: '',
		computerName: '26301GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.36.1.54'
	},
	{
		serial: 'MXJ9190B03',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'juzcategui'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26906CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.11'
	},
	{
		serial: 'MXJ9200B4N',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ygarcia'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '269010CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.12'
	},
	{
		serial: 'MXJ9200469',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'iduran'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26902SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.13'
	},
	{
		serial: 'MXJ920046J',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'juzcategui'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26903COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.16'
	},
	{
		serial: 'MXJ91908K0',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'MVIELMA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26904PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.31'
	},
	{
		serial: 'MXJ92009JX',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mcarmona'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26909PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.35'
	},
	{
		serial: 'MXJ9200D3Y',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emonsalve'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26908GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.39'
	},
	{
		serial: 'MXJ9200D40',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gdavila'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26905PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.52'
	},
	{
		serial: 'MXJ91909VM',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ysaavedra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(269)']
		)[0].id,
		observation: '',
		computerName: '26907PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.48.4.57'
	},
	{
		serial: 'MXJ94500RL',
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
			employee => employee.userName === 'jteran'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(286)']
		)[0].id,
		observation: '',
		computerName: '28602SUB',
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
		ipAddress: '10.72.4.16'
	},
	{
		serial: 'MXJ00601MH',
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
			employee => employee.userName === 'mifarias'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(286)']
		)[0].id,
		observation: '',
		computerName: '28605CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
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
		ipAddress: '10.72.4.32'
	},
	{
		serial: 'MXJ9450147',
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
			employee => employee.userName === 'lenunez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(286)']
		)[0].id,
		observation: '',
		computerName: '28601GTE',
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
		ipAddress: '10.72.4.35'
	},
	{
		serial: 'MXJ9460CF9',
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
			employee => employee.userName === 'lochoa'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(286)']
		)[0].id,
		observation: '',
		computerName: '28603PROM',
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
		ipAddress: '10.72.4.36'
	},
	{
		serial: 'MXL0430B24',
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
			employee => employee.userName === 'kmoncada'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(286)']
		)[0].id,
		observation: '',
		computerName: '28605PROM',
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
		ipAddress: '10.72.4.46'
	},
	{
		serial: 'MXJ94709YN',
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
			employee => employee.userName === 'lvelasco'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(286)']
		)[0].id,
		observation: '',
		computerName: '28606COOR',
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
		ipAddress: '10.72.4.54'
	},
	{
		serial: 'MXJ91909W2',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mayflores'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28704PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.72.3.11'
	},
	{
		serial: 'MXJ9200DGX',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emendoza'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28706CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.72.3.13'
	},
	{
		serial: 'MXJ00503SB',
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
			employee => employee.userName === 'exruiz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '287002ASESOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.72.3.33'
	},
	{
		serial: 'MXJ91908L0',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jlobo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28705CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.72.3.36'
	},
	{
		serial: 'MXJ92004G5',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'anramirez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28701GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.72.3.51'
	},
	{
		serial: 'MXJ92004FB',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yescalante'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28702GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.72.3.52'
	},
	{
		serial: 'MXJ90704B6',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rmorales'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28703COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.72.3.53'
	},
	{
		serial: 'MXJ90703D2',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'wimendoza'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28702SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.72.3.54'
	},
	{
		serial: 'MJ39N31',
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
			employee => employee.userName === 'aballona'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(287)']
		)[0].id,
		observation: '',
		computerName: '28709GTEPU',
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
		ipAddress: '10.72.3.38'
	},
	{
		serial: 'MXJ91909D1',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ycabezas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(288)']
		)[0].id,
		observation: '',
		computerName: '28807CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.7.11'
	},
	{
		serial: 'MXJ92009DN',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'irrivas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(288)']
		)[0].id,
		observation: '',
		computerName: '28806CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.7.14'
	},
	{
		serial: 'MXJ91909D5',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mlozano'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(288)']
		)[0].id,
		observation: '',
		computerName: '28805PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.76.7.16'
	},
	{
		serial: 'MJHDHKN',
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
			employee => employee.userName === 'ajusto'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(288)']
		)[0].id,
		observation: '',
		computerName: '28803COOR',
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
		ipAddress: '10.76.7.31'
	},
	{
		serial: 'MXJ91908GG',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmejias'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(288)']
		)[0].id,
		observation: '',
		computerName: '28804PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.7.33'
	},
	{
		serial: 'MXJ9200B8L',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'kafernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(288)']
		)[0].id,
		observation: '',
		computerName: '28801GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.7.12'
	},
	{
		serial: 'MXJ9190BF6',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jeviloria'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(290)']
		)[0].id,
		observation: '',
		computerName: '29002COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.6.11'
	},
	{
		serial: 'MXJ9200DDL',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'naileon'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(290)']
		)[0].id,
		observation: '',
		computerName: '29008CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.76.6.12'
	},
	{
		serial: 'MXJ9190B3G',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'avielma'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(290)']
		)[0].id,
		observation: '',
		computerName: '29008PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.6.22'
	},
	{
		serial: 'MXJ920043Y',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jcastellanos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(290)']
		)[0].id,
		observation: '',
		computerName: '29001GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.6.53'
	},
	{
		serial: 'MXJ91909XV',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mjimenez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(290)']
		)[0].id,
		observation: '',
		computerName: '29002SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.6.51'
	},
	{
		serial: 'MXJ82705ZW',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'nbriceno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(291)']
		)[0].id,
		observation: '',
		computerName: '29107PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.5.30'
	},
	{
		serial: 'MXJ8340GQD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rugonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(291)']
		)[0].id,
		observation: '',
		computerName: '29106PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
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
		ipAddress: '10.76.5.32'
	},
	{
		serial: 'MXJ9200B49',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ateran'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(291)']
		)[0].id,
		observation: '',
		computerName: '29102SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.5.52'
	},
	{
		serial: 'MXJ83302YX',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'obriceno'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(291)']
		)[0].id,
		observation: '',
		computerName: '29103COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.76.5.54'
	},
	{
		serial: 'MXJ91909FH',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'arzambrano'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(291)']
		)[0].id,
		observation: '',
		computerName: '29108CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.5.27'
	},
	{
		serial: 'MXJ9200485',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'elitorres'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '29204PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.39.33'
	},
	{
		serial: 'MXJ82705ZB',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'antrodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '29206CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.39.14'
	},
	{
		serial: 'MXJ91908J1',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'macontreras'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '29207CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.39.16'
	},
	{
		serial: 'MXJ8450DJC',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'luhernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '29205PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.39.31'
	},
	{
		serial: 'MXJ90704HS',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'framos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '29203COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.39.53'
	},
	{
		serial: 'MXJ83302SX',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'amontilla'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '29202SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.39.17'
	},
	{
		serial: 'MXL3151VL8',
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
			employee => employee.userName === 'mruiz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(292)']
		)[0].id,
		observation: '',
		computerName: '292TECNICOPOS',
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
		ipAddress: '10.50.39.51'
	},
	{
		serial: 'MXJ92009JS',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'frramirez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(293)']
		)[0].id,
		observation: '',
		computerName: '293006CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.4.13'
	},
	{
		serial: 'MXJ91908JS',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ksuarez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(293)']
		)[0].id,
		observation: '',
		computerName: '29305PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.76.4.32'
	},
	{
		serial: 'MXJ83302T0',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'avolcan'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(293)']
		)[0].id,
		observation: '',
		computerName: '29304PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.4.52'
	},
	{
		serial: 'MXJ92004HT',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mtoussaint'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(293)']
		)[0].id,
		observation: '',
		computerName: '29301GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.76.4.53'
	},
	{
		serial: 'MXJ92009J6',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mirramirez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(293)']
		)[0].id,
		observation: '',
		computerName: '29303COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.4.30'
	},
	{
		serial: 'MXL051086B',
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
			employee => employee.userName === 'jhenriquez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(296)']
		)[0].id,
		observation: '',
		computerName: '29605PROM',
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
		ipAddress: '10.84.26.29'
	},
	{
		serial: 'MXL0430B66',
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
			employee => employee.userName === 'mariasanchez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(296)']
		)[0].id,
		observation: '',
		computerName: '29607CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
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
		ipAddress: '10.84.26.13'
	},
	{
		serial: 'MXJ00601MK',
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
			employee => employee.userName === 'jvargas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(296)']
		)[0].id,
		observation: '',
		computerName: '29604COOR',
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
		ipAddress: '10.84.26.14'
	},
	{
		serial: 'MXJ00609TW',
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
			employee => employee.userName === 'ELMARIN'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(296)']
		)[0].id,
		observation: '',
		computerName: '29601GTE',
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
		ipAddress: '10.84.26.16'
	},
	{
		serial: 'MXL05108C9',
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
			employee => employee.userName === 'MQUEVEDO'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(296)']
		)[0].id,
		observation: '',
		computerName: '29602SUB',
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
		ipAddress: '10.84.26.20'
	},
	{
		serial: 'MXL051084P',
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
			employee => employee.userName === 'ysalas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(296)']
		)[0].id,
		observation: '',
		computerName: '29604PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.26.33'
	},
	{
		serial: 'MXJ83501MH',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jlara'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29710CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.8.15'
	},
	{
		serial: 'MXJ92004HQ',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ngarcia'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29709CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.8.16'
	},
	{
		serial: 'MXJ92004GK',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lihernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29707PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.8.23'
	},
	{
		serial: 'MJHDHXH',
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
			employee => employee.userName === 'marcastillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29704PROM',
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
		ipAddress: '10.84.8.35'
	},
	{
		serial: 'MXJ848088Y',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yuromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29706PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.8.52'
	},
	{
		serial: 'MXJ90702TB',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'luromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29701GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.8.54'
	},
	{
		serial: 'MXJ9200D9C',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jcaraballo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29711VP',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.8.55'
	},
	{
		serial: 'MXJ94607YB',
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
			employee => employee.userName === 'mveliz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29703COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5300
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
		ipAddress: '10.84.8.58'
	},
	{
		serial: 'MXJ92004GB',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'dalbornoz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(297)']
		)[0].id,
		observation: '',
		computerName: '29702SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.8.56'
	},
	{
		serial: 'MJBPHLC',
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
			employee => employee.userName === 'aanez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(298)']
		)[0].id,
		observation: '',
		computerName: '29808CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 4,
		hardDriveCapacityId: hddCapacities.filter(
			hdd => hdd.name === hddCapacitiesName[80]
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
		ipAddress: '10.84.11.12'
	},
	{
		serial: 'MXJ83500CM',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'eroa'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(298)']
		)[0].id,
		observation: '',
		computerName: '29805PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.11.33'
	},
	{
		serial: 'MXJ92009M8',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'MEGONZALEZ'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(298)']
		)[0].id,
		observation: '',
		computerName: '29801GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.11.51'
	},
	{
		serial: 'MXJ83500JN',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yrhernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(298)']
		)[0].id,
		observation: '',
		computerName: '29803COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.11.55'
	},
	{
		serial: 'MXJ9200B3Q',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'scadenas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(299)']
		)[0].id,
		observation: '',
		computerName: '29902SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.32.32'
	},
	{
		serial: 'MXJ8350044',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'dcastellano'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(299)']
		)[0].id,
		observation: '',
		computerName: '29905PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.32.33'
	},
	{
		serial: 'MXJ9200D9G',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ALRIVERA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(299)']
		)[0].id,
		observation: '',
		computerName: '29903COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.32.21'
	},
	{
		serial: 'MXJ91909LN',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hmatute'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(299)']
		)[0].id,
		observation: '',
		computerName: '29907CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.32.11'
	},
	{
		serial: 'MXL3201WPC',
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
			employee => employee.userName === 'monrodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(300)']
		)[0].id,
		observation: '',
		computerName: '30004PROM',
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
		ipAddress: '10.84.30.33'
	},
	{
		serial: 'MXL318182L',
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
			employee => employee.userName === 'mihernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(300)']
		)[0].id,
		observation: '',
		computerName: '30002SUB',
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
		ipAddress: '10.84.30.35'
	},
	{
		serial: 'MXL318182D',
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
			employee => employee.userName === 'abellussi'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(300)']
		)[0].id,
		observation: '',
		computerName: '30003PROM',
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
		ipAddress: '10.84.30.38'
	},
	{
		serial: 'MXL3201WHF',
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
			employee => employee.userName === 'orojas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(300)']
		)[0].id,
		observation: '',
		computerName: '30006CAJ',
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
		ipAddress: '10.84.30.31'
	},
	{
		serial: 'MXL3201WNW',
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
			employee => employee.userName === 'mescalante'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(300)']
		)[0].id,
		observation: '',
		computerName: '30001SUB',
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
		ipAddress: '10.84.30.32'
	},
	{
		serial: 'MXJ9200D8J',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lybanez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(302)']
		)[0].id,
		observation: '',
		computerName: '30205CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.86.11'
	},
	{
		serial: 'MXJ91909T1',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gumendez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(302)']
		)[0].id,
		observation: '',
		computerName: '30204COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.86.17'
	},
	{
		serial: 'MXJ00700H1',
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
			employee => employee.userName === 'glmedina'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(302)']
		)[0].id,
		observation: '',
		computerName: '30204PROM',
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
		ipAddress: '10.84.86.31'
	},
	{
		serial: 'MXJ90702CN',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lisgonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(302)']
		)[0].id,
		observation: '',
		computerName: '30202SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.86.51'
	},
	{
		serial: 'MXJ91909XZ',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'alabarca'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(302)']
		)[0].id,
		observation: '',
		computerName: '30201GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.86.53'
	},
	{
		serial: 'MXJ92009KT',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mmorillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(303)']
		)[0].id,
		observation: '',
		computerName: '30307CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.50.4.11'
	},
	{
		serial: 'MXJ907046S',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'zbarrios'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(303)']
		)[0].id,
		observation: '',
		computerName: '303002SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.50.4.13'
	},
	{
		serial: 'MXJ83302WP',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gvillalobos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(303)']
		)[0].id,
		observation: '',
		computerName: '30308CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
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
		ipAddress: '10.50.4.15'
	},
	{
		serial: 'MXJ92009JG',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yvalle'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(303)']
		)[0].id,
		observation: '',
		computerName: '30306PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.50.4.34'
	},
	{
		serial: 'MXJ92004GT',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yaromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(303)']
		)[0].id,
		observation: '',
		computerName: '30304PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.50.4.56'
	},
	{
		serial: 'MJHCVXD',
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
			employee => employee.userName === 'ligutierrez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(303)']
		)[0].id,
		observation: '',
		computerName: '30301GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I52400
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
		ipAddress: '10.50.4.52'
	},
	{
		serial: 'MXL05108CG',
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
			employee => employee.userName === 'kecarrillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30402SUB',
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
		ipAddress: '10.50.43.18'
	},
	{
		serial: 'MXJ00609P3',
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
			employee => employee.userName === 'ibravo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30409CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
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
		ipAddress: '10.50.43.19'
	},
	{
		serial: 'MXL0502DSK',
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
			employee => employee.userName === 'momana'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30403COOR',
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
		ipAddress: '10.50.43.59'
	},
	{
		serial: 'MXL05108CY',
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
			employee => employee.userName === 'msantana'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30407CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
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
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.50.43.13'
	},
	{
		serial: 'MXL1390T99',
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
			employee => employee.userName === 'mmolero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30404PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I32100
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.50.43.31'
	},
	{
		serial: 'MXL1390T8H',
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
			employee => employee.userName === 'maigonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30405PRO',
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
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.50.43.35'
	},
	{
		serial: 'MXL1390RV3',
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
			employee => employee.userName === 'dcarrizo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(304)']
		)[0].id,
		observation: '',
		computerName: '30401GTE',
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
			os => os.name === osName.WINDOWS7
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.50.43.51'
	},
	{
		serial: 'MXJ90702J1',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'arueda'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(305)']
		)[0].id,
		observation: '',
		computerName: '30508CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.31.11'
	},
	{
		serial: 'MXJ90704N3',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'JURDANETA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(305)']
		)[0].id,
		observation: '',
		computerName: '30502SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.31.51'
	},
	{
		serial: 'MXJ90702JK',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'enegron'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(305)']
		)[0].id,
		observation: '',
		computerName: '30501GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.31.52'
	},
	{
		serial: 'MXJ90701HR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'edrodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(305)']
		)[0].id,
		observation: '',
		computerName: '30507CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.31.12'
	},
	{
		serial: 'MXJ90704B5',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'cvilchez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(305)']
		)[0].id,
		observation: '',
		computerName: '30506PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.31.31'
	},
	{
		serial: 'MXL0430B0P',
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
			employee => employee.userName === 'yalmaza'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(306)']
		)[0].id,
		observation: '',
		computerName: '30604CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.29.34'
	},
	{
		serial: 'MXL0510890',
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
			employee => employee.userName === 'jtorres'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(306)']
		)[0].id,
		observation: '',
		computerName: '30602SUB',
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
		ipAddress: '10.84.29.53'
	},
	{
		serial: 'MXJ947087K',
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
			employee => employee.userName === 'mportillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(306)']
		)[0].id,
		observation: '',
		computerName: '30601GTE',
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
		ipAddress: '10.84.29.52'
	},
	{
		serial: 'MXL0430B4M',
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
			employee => employee.userName === 'lrubio'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(306)']
		)[0].id,
		observation: '',
		computerName: '30603PROM',
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
		ipAddress: '10.84.29.31'
	},
	{
		serial: 'MXL0430B38',
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
			employee => employee.userName === 'dvillalobos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(308)']
		)[0].id,
		observation: '',
		computerName: '30801GTE',
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
		ipAddress: '10.103.8.11'
	},
	{
		serial: 'MXJ00609MT',
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
			employee => employee.userName === 'lfinol'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(308)']
		)[0].id,
		observation: '',
		computerName: '30802SUB',
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
		ipAddress: '10.103.8.12'
	},
	{
		serial: 'MXJ9460CDD',
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
			employee => employee.userName === 'eolivar'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(308)']
		)[0].id,
		observation: '',
		computerName: '30803COOR',
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
		ipAddress: '10.103.8.13'
	},
	{
		serial: 'MXL04309VZ',
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
			employee => employee.userName === 'lmontiel'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(308)']
		)[0].id,
		observation: '',
		computerName: '30804PRO',
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
		ipAddress: '10.103.8.14'
	},
	{
		serial: 'MXL0430B39',
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
			employee => employee.userName === 'laranguibel'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(308)']
		)[0].id,
		observation: '',
		computerName: '30805PROM',
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
		ipAddress: '10.103.8.15'
	},
	{
		serial: 'MXL0430B0B',
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
			employee => employee.userName === 'ctunon'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(308)']
		)[0].id,
		observation: '',
		computerName: '30806CAJ',
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
		ipAddress: '10.103.8.16'
	},
	{
		serial: 'MXJ90702H9',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gbaena'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(309)']
		)[0].id,
		observation: '',
		computerName: '30907CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.21.13'
	},
	{
		serial: 'MXJ907046W',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'juvillalobos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(309)']
		)[0].id,
		observation: '',
		computerName: '30906PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.21.34'
	},
	{
		serial: 'MXJ9200484',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gpalencia'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(309)']
		)[0].id,
		observation: '',
		computerName: '30902SUBGTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.21.39'
	},
	{
		serial: 'MXJ9460CBR',
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
			employee => employee.userName === 'nperez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(309)']
		)[0].id,
		observation: '',
		computerName: '30904PROM',
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
		ipAddress: '10.84.21.41'
	},
	{
		serial: 'MXJ90704KK',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gbaena'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(309)']
		)[0].id,
		observation: '',
		computerName: '30909COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.21.55'
	},
	{
		serial: 'MJ04CSPM',
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
		modelId: modelComputer.filter(model => model.name === modelName.M700)[0]
			.id,
		employeeId: employees.filter(
			employee => employee.userName === 'liprieto'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(309)']
		)[0].id,
		observation: '',
		computerName: '12508GERENTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I56400
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
		ipAddress: '10.84.21.40'
	},
	{
		serial: 'MXJ90704NG',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'llopez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31104PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.103.11.14'
	},
	{
		serial: 'MXJ907047S',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'gigonzalez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31102SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.103.11.12'
	},
	{
		serial: 'MXJ83302WD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'MTRUJILLO'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31105PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.11.15'
	},
	{
		serial: 'MXJ90704GH',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mpalma'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31106CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.103.11.16'
	},
	{
		serial: 'MXJ82705Z7',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'atorres'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31101GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.11.11'
	},
	{
		serial: 'MXJ90704M8',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ymontiel'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31107CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.11.17'
	},
	{
		serial: 'MXL0430B2R',
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
			employee => employee.userName === 'Rcontreras'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(312)']
		)[0].id,
		observation: '',
		computerName: '31206CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
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
		ipAddress: '10.84.25.11'
	},
	{
		serial: 'MXJ94706L5',
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
			employee => employee.userName === 'marhernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(312)']
		)[0].id,
		observation: '',
		computerName: '31203PRO',
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
		ipAddress: '10.84.25.31'
	},
	{
		serial: 'MXL0502DSN',
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
			employee => employee.userName === 'Rbarrios'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(312)']
		)[0].id,
		observation: '',
		computerName: '31204PRO',
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
		ipAddress: '10.84.25.32'
	},
	{
		serial: 'MXL0430B0Y',
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
			employee => employee.userName === 'mferrer'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(312)']
		)[0].id,
		observation: '',
		computerName: '312002COORD',
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
		ipAddress: '10.84.25.53'
	},
	{
		serial: 'MXJ90703D1',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'xreyes'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31303COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.103.13.13'
	},
	{
		serial: 'MXJ9070387',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'deromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31304PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.13.14'
	},
	{
		serial: 'MXJ90703D4',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'lifernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31307PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.13.17'
	},
	{
		serial: 'MXJ907031X',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aochoa'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31306PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.13.16'
	},
	{
		serial: 'MXJ9190B1X',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'niduran'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31309CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.13.19'
	},
	{
		serial: 'MJ173DM',
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
			employee => employee.userName === 'cportillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31301GTE',
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
		ipAddress: '10.103.13.11'
	},
	{
		serial: 'MXJ00601HM',
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
			employee => employee.userName === 'equintero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(314)']
		)[0].id,
		observation: '',
		computerName: '31406CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.7.17'
	},
	{
		serial: 'MXL0430B45',
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
			employee => employee.userName === 'caromartinez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(314)']
		)[0].id,
		observation: '',
		computerName: '31402SUB',
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
		ipAddress: '10.84.7.20'
	},
	{
		serial: 'MXL0430B09',
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
			employee => employee.userName === 'sosanchez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(314)']
		)[0].id,
		observation: '',
		computerName: '31404PROM',
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
		ipAddress: '10.84.7.31'
	},
	{
		serial: 'MXJ00609LW',
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
			employee => employee.userName === 'ltirado'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(314)']
		)[0].id,
		observation: '',
		computerName: '31401GTE',
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
		ipAddress: '10.84.7.51'
	},
	{
		serial: 'MXJ94709WM',
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
			employee => employee.userName === 'ambarrios'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(314)']
		)[0].id,
		observation: '',
		computerName: '31405PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.7.52'
	},
	{
		serial: 'MXJ94500QN',
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
			employee => employee.userName === 'jandara'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(314)']
		)[0].id,
		observation: '',
		computerName: '31403COOR',
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
		ipAddress: '10.84.7.53'
	},
	{
		serial: 'MXJ90704CB',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'efumero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31507CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.6.11'
	},
	{
		serial: 'MXJ907048T',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'dmorales'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31506PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.6.18'
	},
	{
		serial: 'MXJ907032Q',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ymarcano'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31506CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.6.31'
	},
	{
		serial: 'MXJ90702P9',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'llaguado'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31504PROMO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.6.34'
	},
	{
		serial: 'MXJ907033Y',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yudiaz'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31502SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.6.53'
	},
	{
		serial: 'MXJ9070485',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rfernandez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31501GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.6.54'
	},
	{
		serial: 'MXL04228SR',
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
			employee => employee.userName === 'jloaiza'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(315)']
		)[0].id,
		observation: '',
		computerName: '31502COOR',
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
		ipAddress: '10.84.6.37'
	},
	{
		serial: 'MXL0430B22',
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
			employee => employee.userName === 'mpalmar'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(316)']
		)[0].id,
		observation: '',
		computerName: '31608CAJ',
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
		ipAddress: '10.103.16.18'
	},
	{
		serial: 'MXJ9460CDL',
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
			employee => employee.userName === 'mroa'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(316)']
		)[0].id,
		observation: '',
		computerName: '31603COOR',
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
		ipAddress: '10.103.16.13'
	},
	{
		serial: 'MXJ94500ZZ',
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
			employee => employee.userName === 'lfaria'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(316)']
		)[0].id,
		observation: '',
		computerName: '31605PRO',
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
		ipAddress: '10.103.16.15'
	},
	{
		serial: 'MXL0430B3G',
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
			employee => employee.userName === 'JPINEDA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(316)']
		)[0].id,
		observation: '',
		computerName: '31607CAJ',
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
		ipAddress: '10.103.16.17'
	},
	{
		serial: 'MXJ94709Z2',
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
			employee => employee.userName === 'htoro'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(316)']
		)[0].id,
		observation: '',
		computerName: '31602SUB',
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
		ipAddress: '10.103.16.12'
	},
	{
		serial: 'MXJ94706LK',
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
			employee => employee.userName === 'arangel'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(316)']
		)[0].id,
		observation: '',
		computerName: '31601GTE',
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
		ipAddress: '10.103.16.11'
	},
	{
		serial: 'MXJ919094M',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yrbravo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31705PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.81.33'
	},
	{
		serial: 'MXJ92009FP',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'entorres'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31705CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.81.56'
	},
	{
		serial: 'MXJ9200457',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yoliveros'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31702SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.81.32'
	},
	{
		serial: 'MXJ920046M',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mfermin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31703COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.81.16'
	},
	{
		serial: 'MXJ9070393',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'yaperozo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31704PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.81.31'
	},
	{
		serial: 'MXJ91908KR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jovalles'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31706CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.81.53'
	},
	{
		serial: 'MJ13L65',
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
			employee => employee.userName === 'mesis'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(317)']
		)[0].id,
		observation: '',
		computerName: '31701GTE',
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
		ipAddress: '10.84.81.38'
	},
	{
		serial: 'MXJ90701QD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'kmorillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31807PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.103.18.17'
	},
	{
		serial: 'MXJ94500S2',
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
			employee => employee.userName === 'rerodriguez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31811CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
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
		ipAddress: '10.103.18.16'
	},
	{
		serial: 'MXJ92004J2',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'anperez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31808CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.18.14'
	},
	{
		serial: 'MXJ90704G6',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'schavez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31801GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.18.11'
	},
	{
		serial: 'MXJ83500G8',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'daromero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31805PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.103.18.15'
	},
	{
		serial: 'MXJ00503TT',
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
			employee => employee.userName === 'aparra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31809COOR',
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
		ipAddress: '10.103.18.13'
	},
	{
		serial: 'MXJ907049R',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'dpalmar'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(318)']
		)[0].id,
		observation: '',
		computerName: '31803SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.18.12'
	},
	{
		serial: 'MXJ91909D4',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mrivera'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(319)']
		)[0].id,
		observation: '',
		computerName: '31901GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.62.51'
	},
	{
		serial: 'MXJ9200DBW',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'devillalobos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(319)']
		)[0].id,
		observation: '',
		computerName: '31903COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.62.53'
	},
	{
		serial: 'MXJ90703D0',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jecordero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(319)']
		)[0].id,
		observation: '',
		computerName: '31904PRO',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.62.33'
	},
	{
		serial: 'MXJ90702HD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ibravo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(319)']
		)[0].id,
		observation: '',
		computerName: '31904CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.62.31'
	},
	{
		serial: 'MXJ9070340',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'somendoza'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32102SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.104.31'
	},
	{
		serial: 'MXJ83302TR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'luramos'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32103COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.104.16'
	},
	{
		serial: 'MXJ92009LD',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'aacurero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32106CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.104.34'
	},
	{
		serial: 'MJMLYVB',
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
			employee => employee.userName === 'amavarez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32102COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '10.84.104.13'
	},
	{
		serial: 'MXJ9200B0B',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mparra'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32104PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.104.33'
	},
	{
		serial: 'MXJ92004G0',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'coquendo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32105PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.104.32'
	},
	{
		serial: 'MXJ920041W',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jmendoza'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(322)']
		)[0].id,
		observation: '',
		computerName: '32201GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.103.22.11'
	},
	{
		serial: 'MXJ9200D2H',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rhaimacana'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(322)']
		)[0].id,
		observation: '',
		computerName: '32203COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.103.22.13'
	},
	{
		serial: 'MXJ91909Y7',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'hsalom'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(322)']
		)[0].id,
		observation: '',
		computerName: '32202SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.103.22.12'
	},
	{
		serial: 'MXJ9200B6L',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ymaterano'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(322)']
		)[0].id,
		observation: '',
		computerName: '32205PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.103.22.15'
	},
	{
		serial: 'MXJ91908S1',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ergarcia'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(322)']
		)[0].id,
		observation: '',
		computerName: '32206CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.22.16'
	},
	{
		serial: 'MXJ907032V',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'nsuarez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32304PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
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
		ipAddress: '10.84.92.31'
	},
	{
		serial: 'MXJ83500C6',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'kpeley'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32305PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7200
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
		ipAddress: '10.84.92.33'
	},
	{
		serial: 'MXL0510862',
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
			employee => employee.userName === 'bchacin'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32302SUB',
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
		ipAddress: '10.84.92.51'
	},
	{
		serial: 'MXJ92004B9',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'asemprun'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32303COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.84.92.53'
	},
	{
		serial: 'MXL0430B40',
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
			employee => employee.userName === 'alabarca'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32301GTE',
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
		ipAddress: '10.84.92.52'
	},
	{
		serial: 'MXJ9200DDP',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'jpalmar'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32307CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.92.11'
	},
	{
		serial: 'MXJ90702H8',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'emas'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(323)']
		)[0].id,
		observation: '',
		computerName: '32306CAJA',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.92.13'
	},
	{
		serial: 'MXL318183L',
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
			employee => employee.userName === 'malvarado'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(326)']
		)[0].id,
		observation: '',
		computerName: '32602SUB',
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
		ipAddress: '10.84.36.12'
	},
	{
		serial: 'MXL31817HR',
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
			employee => employee.userName === 'rcastillo'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(326)']
		)[0].id,
		observation: '',
		computerName: '32605CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.I33220
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.36.13'
	},
	{
		serial: 'MXL3180J2N',
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
			employee => employee.userName === 'NOMEDINA'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(326)']
		)[0].id,
		observation: '',
		computerName: '32604PROM',
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
		ipAddress: '10.84.36.32'
	},
	{
		serial: 'MXJ00609PN',
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
			employee => employee.userName === 'rfuenmayor'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(327)']
		)[0].id,
		observation: '',
		computerName: '32705CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7500
		)[0].id,
		memoryRamCapacity: 2,
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
		ipAddress: '10.84.52.12'
	},
	{
		serial: 'MXJ907037T',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'rimartinez'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(327)']
		)[0].id,
		observation: '',
		computerName: '32703PROM',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.52.13'
	},
	{
		serial: 'MJHDHYR',
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
			employee => employee.userName === 'jequintero'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(327)']
		)[0].id,
		observation: '',
		computerName: '32702COOR',
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
		ipAddress: '10.84.52.14'
	},
	{
		serial: 'MXJ9200B5N',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'adacosta'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(550)']
		)[0].id,
		observation: '',
		computerName: '55006COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.76.3.23'
	},
	{
		serial: 'MXJ83302YT',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'apena'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(550)']
		)[0].id,
		observation: '',
		computerName: '55005CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
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
		ipAddress: '10.76.3.12'
	},
	{
		serial: 'MXJ82705XQ',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'ychinchilla'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(550)']
		)[0].id,
		observation: '',
		computerName: '55009CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.76.3.11'
	},
	{
		serial: 'MXL9281JZX',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mgodoy'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(550)']
		)[0].id,
		observation: '',
		computerName: '55002SUB',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.76.3.20'
	},
	{
		serial: 'MXJ9200B3D',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: employees.filter(
			employee => employee.userName === 'mlinares'
		)[0].id,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(550)']
		)[0].id,
		observation: '',
		computerName: '55001GTE',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
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
		ipAddress: '10.76.3.30'
	},
	{
		serial: 'MJMLXXC',
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
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(030)']
		)[0].id,
		observation: '',
		computerName: '174011GERENT',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.18.3'
	},
	{
		serial: null,
		activo: null,
		statusId: statusData.filter(
			status => status.name === statusName.ENUSO
		)[0].id,
		categoryId: categoryData.filter(
			cat => cat.name === categoryOnlyNames.COMPUTADORAS
		)[0].id,
		brandId: brandsData.filter(
			brand => brand.name === brandOnlyName.BIOSTAR
		)[0].id,
		modelId: modelComputer.filter(
			model => model.name === modelName.G41D3C
		)[0].id,
		employeeId: null,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '04023ENEGOCIOS',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E5500
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
		ipAddress: '192.168.19.8'
	},
	{
		serial: 'MJMMFBY',
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
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '040011PRMTORES',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.19.10'
	},
	{
		serial: 'MJMMFKB',
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
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(040)']
		)[0].id,
		observation: '',
		computerName: '04018GTERGANDES',
		processorId: processors.filter(
			processor => processor.number_model === processorName.G630
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
		ipAddress: '192.168.19.22'
	},
	{
		serial: 'MJ08H52B',
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
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(101)']
		)[0].id,
		observation: '',
		computerName: '10107CAJ',
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
		ipAddress: '10.100.101.17'
	},
	{
		serial: 'MJ08H80N',
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
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(117)']
		)[0].id,
		observation: '',
		computerName: '11709CJERO',
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
		ipAddress: '192.168.76.18'
	},
	{
		serial: 'MXJ82705ZT',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(311)']
		)[0].id,
		observation: '',
		computerName: '31103COOR',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E2180
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.11.13'
	},
	{
		serial: 'MJHDHVB',
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
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(312)']
		)[0].id,
		observation: '',
		computerName: 'BNCSRV312',
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
			os => os.name === osName.WINDOWSSERVER2012
		)[0].id,
		operatingSystemArqId: operatingSystemArq.filter(
			os => os.name === osArqName['64BITS']
		)[0].id,
		macAddress: null,
		ipAddress: '10.84.25.9'
	},
	{
		serial: 'MXJ90703CR',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(313)']
		)[0].id,
		observation: '',
		computerName: '31308CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E4600
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.103.13.18'
	},
	{
		serial: 'MXJ9200D86',
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
			model => model.name === modelName.HP5800
		)[0].id,
		employeeId: null,
		locationId: agenciasSite.filter(
			location => location.name === agenciaName['AGENCIA(321)']
		)[0].id,
		observation: '',
		computerName: '32107CAJ',
		processorId: processors.filter(
			processor => processor.number_model === processorName.E7400
		)[0].id,
		memoryRamCapacity: 3,
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
		ipAddress: '10.84.104.11'
	}
]

module.exports = { agencia }
