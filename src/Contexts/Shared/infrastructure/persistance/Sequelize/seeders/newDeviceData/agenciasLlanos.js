const { randomUUID } = require('node:crypto')
const { hddCapacitiesName, hddCapacities } = require('../DiscoDuro/hddCapacities')
const { hddTypeName, hddTypes } = require('../DiscoDuro/hddType')
const { categoriesData, categoryNames } = require('./allCategory')
const { brandOnlyName, brandsData } = require('./brand')
const { modelComputer } = require('./modelComputer')
const { operatingSystem, osName } = require('./operatingSystem')
const { operatingSystemArq, osArqName } = require('./operatingSystemArq')
const { processors } = require('./processors')
const { agenciasSite, agenciaName } = require('../location/locations')

const agenciaLlanos = [
	{
		serial: 'MJ08H81V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'dblanco'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(025)']).id,
		observation: '',
		computerName: '02509CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.243'
	},
	{
		serial: 'MJ03JPRK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id,
		employeeId: 'gibarra'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(025)']).id,
		observation: '',
		computerName: '025002SUBGSANJ',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.244'
	},
	{
		serial: 'MJ08H4S1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'kramirez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(025)']).id,
		observation: '',
		computerName: '02503CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.249'
	},
	{
		serial: 'MXJ90607WT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'czambrano'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(025)']).id,
		observation: '',
		computerName: '02511CORDIN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_0.5_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.235'
	},
	{
		serial: 'MJ03JPS3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id,
		employeeId: 'risturiz'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(025)']).id,
		observation: '',
		computerName: '02516GTEOPSJUAN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.237'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'drivero'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(025)']).id,
		observation: '',
		computerName: '025013PMOTOR',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.228'
	},
	{
		serial: 'MJ08H7ZC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jevelasquez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(029)']).id,
		observation: '',
		computerName: '029012CJROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.77'
	},
	{
		serial: 'MJMMFKM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'djoa'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(042)']).id,
		observation: '',
		computerName: '042007PROM',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.45.8'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'acatanho'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(042)']).id,
		observation: '',
		computerName: '042010COORD',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.45.13'
	},
	{
		serial: 'MJ08H4SA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'darias'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(042)']).id,
		observation: '',
		computerName: 'CJERO04211',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.45.14'
	},
	{
		serial: 'MXJ94709WV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'dcarruido'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(079)']).id,
		observation: '',
		computerName: '079003PRMTORES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.50.3'
	},
	{
		serial: 'MJ03JPNW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id,
		employeeId: 'asidrian'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(079)']).id,
		observation: '',
		computerName: '079004SUBGTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.50.4'
	},
	{
		serial: 'MJ03JPQC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id,
		employeeId: 'angyrodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(079)']).id,
		observation: '',
		computerName: '079005GTESANSEB',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.50.5'
	},
	{
		serial: 'MJHERLH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'kadarme'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(079)']).id,
		observation: '',
		computerName: '079011PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.50.11'
	},
	{
		serial: 'MJ03JPRC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(079)']).id,
		observation: '',
		computerName: '079012CODNDRES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.50.15'
	},
	{
		serial: 'MXJ00503V3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'gcastillo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(079)']).id,
		observation: '',
		computerName: '079014-PRMTRI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.50.17'
	},
	{
		serial: 'MXL3201WP4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'aoropeza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(099)']).id,
		observation: '',
		computerName: '09911ESPNEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.133'
	},
	{
		serial: 'MJ08H50W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mariadsanchez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(099)']).id,
		observation: '',
		computerName: 'CJERO099005',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.134'
	},
	{
		serial: 'MJWEBG1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M70e').id,
		employeeId: 'yamador'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(099)']).id,
		observation: '',
		computerName: '099017GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M70e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.138'
	},
	{
		serial: 'MJMMFAE',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'naparicio'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(099)']).id,
		observation: '',
		computerName: '099013PRMTORES',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.70.148'
	},
	{
		serial: 'MJ08H804',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jobolivar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(164)']).id,
		observation: '',
		computerName: '164013CAJERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.222.130'
	},
	{
		serial: 'MJMLYET',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'jovasquez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(164)']).id,
		observation: '',
		computerName: '16406COORDSOMB',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.222.132'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'rnieves'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(164)']).id,
		observation: '',
		computerName: '164008ENEGCIOS',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.222.137'
	},
	{
		serial: 'MJMLYDV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'dvivas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(164)']).id,
		observation: '',
		computerName: '165405PRMTOR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.222.140'
	},
	{
		serial: 'MXL5260NJL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id,
		employeeId: 'errojas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(206)']).id,
		observation: '',
		computerName: '206005PROMAPURE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.75.231'
	},
	{
		serial: 'MJ08H52M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'lumorales'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(206)']).id,
		observation: '',
		computerName: '206008CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.75.234'
	},
	{
		serial: 'MJ08H4SQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(206)']).id,
		observation: '',
		computerName: 'CJERO20612',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.75.235'
	},
	{
		serial: 'MXL5260NM4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id,
		employeeId: 'adelgado'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(206)']).id,
		observation: '',
		computerName: '206011PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.75.236'
	},
	{
		serial: 'MXL5260NK5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id,
		employeeId: 'legonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(206)']).id,
		observation: '',
		computerName: '206001GRENTESS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.75.238'
	},
	{
		serial: 'MJ08H52D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mriera'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: 'A091001CAJA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.226'
	},
	{
		serial: 'MJ08H4XK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'palmeida'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: '091002CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.227'
	},
	{
		serial: 'MXJ90607B4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: '091003PRMTRES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5_0.5_0.5_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.228'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'asaldeno'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: '09105PRMTORES',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('2_2', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.229'
	},
	{
		serial: 'MJ04CSQN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'crojas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: '091004COORD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M700').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.231'
	},
	{
		serial: 'MJMLXZL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'glrodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: '091012GRENTE',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.235'
	},
	{
		serial: 'MJMLYGG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'anruiz'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(091)']).id,
		observation: '',
		computerName: '09115CORDND',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.61.242'
	}
]

function transformarStringToArray(input, targetSize) {
	const numbers = input.split('_').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

module.exports = { agenciaLlanos }
