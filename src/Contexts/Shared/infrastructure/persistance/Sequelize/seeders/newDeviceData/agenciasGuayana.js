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

const agenciaGuayana = [
	{
		serial: 'MJ08H4TW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mimarquez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(028)']).id,
		observation: '',
		computerName: '28001CJEROS',
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
		ipAddress: '192.168.69.3'
	},
	{
		serial: 'MJ08H531',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'frondon'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(028)']).id,
		observation: '',
		computerName: 'CJERO028006',
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
		ipAddress: '192.168.69.5'
	},
	{
		serial: 'MJMLYNG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'gsubero'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(028)']).id,
		observation: '',
		computerName: '28003PRMTORS',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.69.6'
	},
	{
		serial: 'MJ04HSWM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'cchacon'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(028)']).id,
		observation: '',
		computerName: 'A028007GERENT',
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
		ipAddress: '192.168.69.9'
	},
	{
		serial: 'MXJ71304KV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').id,
		employeeId: 'ymunoz'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(044)']).id,
		observation: '',
		computerName: '044015SUB',
		processorId: processors.find(process => 'Intel(R) Pentium(R) D 820 CPU 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5_1_0.5_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.124.14'
	},
	{
		serial: 'MJ08H509',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jobando'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(044)']).id,
		observation: '',
		computerName: '044018CJEROS',
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
		ipAddress: '10.50.124.15'
	},
	{
		serial: 'MXJ71304L4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').id,
		employeeId: 'dcedeno'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(044)']).id,
		observation: '',
		computerName: '044021PROM',
		processorId: processors.find(process => 'Intel(R) Pentium(R) D 820 CPU 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.124.33'
	},
	{
		serial: 'MXL41804XV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'mefuentes'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(044)']).id,
		observation: '',
		computerName: '0440GERENTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.50.124.51'
	},
	{
		serial: 'MXJ90702V6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'grobles'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(044)']).id,
		observation: '',
		computerName: '044020CORD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5_1_0.5_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.124.53'
	},
	{
		serial: 'MJ04CSPF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'ycedeno'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(045)']).id,
		observation: '',
		computerName: '04515SUBGTE',
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
		ipAddress: '10.100.45.4'
	},
	{
		serial: 'MJ08H549',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'abolivar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(045)']).id,
		observation: '',
		computerName: '04516CJEROS',
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
		ipAddress: '10.100.45.12'
	},
	{
		serial: 'MXL3390PCV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').id,
		employeeId: 'krgonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(045)']).id,
		observation: '',
		computerName: '045014PRMOTR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G640 @ 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.45.20'
	},
	{
		serial: 'MJ08H4VY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(045)']).id,
		observation: '',
		computerName: '045006CJEROS',
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
		ipAddress: '10.100.45.22'
	},
	{
		serial: 'MJ04HSV9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'leramos'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(045)']).id,
		observation: '',
		computerName: '045029GRNTE',
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
		ipAddress: '10.100.45.35'
	},
	{
		serial: 'MJ08H7Z4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'epalma'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '04713CJEROS',
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
		ipAddress: '192.168.86.228'
	},
	{
		serial: 'MJ08H53V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'omguzman'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '047008CJEROS',
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
		ipAddress: '192.168.86.242'
	},
	{
		serial: 'MXJ906079K',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'mmarquez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '047017CORDIND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_0.25_1_0.25',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.86.243'
	},
	{
		serial: 'MXL0260ZB6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'peurquiola'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '047019GRTSN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '192.168.86.246'
	},
	{
		serial: 'MJ04HSUK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'ffermin'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '11802COORDIN',
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
		ipAddress: '192.168.86.247'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'ntrinitario'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '04706PROMOTO',
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
		ipAddress: '192.168.86.226'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'lespinoza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '04704PROMTOR',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('4', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.86.230'
	},
	{
		serial: 'MXL4391LTX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP 200 G1 MT').id,
		employeeId: 'kfernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(047)']).id,
		observation: '',
		computerName: '047006ENGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Celeron(R) CPU  J1800  @ 2.41GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP 200 G1 MT').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.86.232'
	},
	{
		serial: 'MJ08H829',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'dmonasterios'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(074)']).id,
		observation: '',
		computerName: '074002CJEROS',
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
		ipAddress: '192.168.60.195'
	},
	{
		serial: 'MJMMFHT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'smavarez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(074)']).id,
		observation: '',
		computerName: '074009CORDIN',
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
		ipAddress: '192.168.60.197'
	},
	{
		serial: 'MXL02610KR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'ywong'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(074)']).id,
		observation: '',
		computerName: '07410SGRTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.60.198'
	},
	{
		serial: 'MXJ90607BV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(074)']).id,
		observation: '',
		computerName: '074016PRMTORES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.60.212'
	},
	{
		serial: 'MJ08H83E',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'josearodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '110031CAJERO',
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
		ipAddress: '192.168.73.46'
	},
	{
		serial: 'MJMMEMH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'kchacares'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '110032EJECTVO',
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
		ipAddress: '192.168.73.47'
	},
	{
		serial: 'MJ08H82D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'aperaza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '11005CJEROS',
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
		ipAddress: '192.168.73.15'
	},
	{
		serial: 'MJMMCRT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'lirojas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '045014ANALISTA',
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
		ipAddress: '192.168.73.19'
	},
	{
		serial: 'MXL5260NL9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id,
		employeeId: 'yrivas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '11021ACREDIT',
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
		ipAddress: '192.168.73.23'
	},
	{
		serial: 'MJ04HSVV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '110025COORDND',
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
		ipAddress: '192.168.73.31'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'ecastellanos'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '04405PROMOT',
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
		ipAddress: '192.168.73.32'
	},
	{
		serial: 'MJ04CSPK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'dmonrroy'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '110001GTEPORD',
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
		ipAddress: '192.168.73.4'
	},
	{
		serial: 'MJ04CSQM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'josearodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(110)']).id,
		observation: '',
		computerName: '11025COORDI',
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
		ipAddress: '192.168.73.5'
	},
	{
		serial: 'MJ08H7Y6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'apalma'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(129)']).id,
		observation: '',
		computerName: '12907CJERO',
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
		ipAddress: '192.168.78.144'
	},
	{
		serial: 'MJMLYBE',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'zalcala'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(129)']).id,
		observation: '',
		computerName: '12902SUBRTE',
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
		ipAddress: '192.168.78.130'
	},
	{
		serial: 'MJ08H83F',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'dpaul'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(129)']).id,
		observation: '',
		computerName: '12908CJERO',
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
		ipAddress: '192.168.78.136'
	},
	{
		serial: 'MXJ94709XX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(129)']).id,
		observation: '',
		computerName: '129003PROMTORCB',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.78.132'
	},
	{
		serial: 'MJ04HSV6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'marojas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(155)']).id,
		observation: '',
		computerName: '155002GERENT',
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
		ipAddress: '192.168.71.162'
	},
	{
		serial: 'MJ04CSQ1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'marojas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(155)']).id,
		observation: '',
		computerName: 'PTOORDAZGERENT',
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
		ipAddress: '192.168.71.163'
	},
	{
		serial: 'MJMMFGX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'ftapias'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(155)']).id,
		observation: '',
		computerName: '155003PRMTOR',
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
		ipAddress: '192.168.71.164'
	},
	{
		serial: 'MXL4391LVZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP 200 G1 MT').id,
		employeeId: 'psalas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(155)']).id,
		observation: '',
		computerName: '155007ENGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Celeron(R) CPU  J1800  @ 2.41GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP 200 G1 MT').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.71.165'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Foxconn']).id,
		modelId: modelComputer.find(model => model.name === 'OEM').id,
		employeeId: 'mmendez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(155)']).id,
		observation: '',
		computerName: '15506CAJERO',
		processorId: processors.find(process =>
			'Intel(R) Celeron(R) CPU          420  @ 1.60GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('1_1', modelComputer.find(model => model.name === 'OEM').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.71.172'
	},
	{
		serial: 'MJ04CSNH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'evmartinez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(209)']).id,
		observation: '',
		computerName: '209004PROMOT',
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
		ipAddress: '192.168.97.198'
	},
	{
		serial: 'MJ04HSUY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'ocanas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(209)']).id,
		observation: '',
		computerName: '209001GTE',
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
		ipAddress: '192.168.97.195'
	},
	{
		serial: 'MJ04HSWD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'ovaquero'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(209)']).id,
		observation: '',
		computerName: '209003PROMOT',
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
		ipAddress: '192.168.97.197'
	},
	{
		serial: 'MJ04CSNG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'lhipolito'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(209)']).id,
		observation: '',
		computerName: '209007CAJERO',
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
		ipAddress: '192.168.97.201'
	},
	{
		serial: 'MJ08H82J',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'wbarrera'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(209)']).id,
		observation: '',
		computerName: '20903CJEROS',
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
		ipAddress: '192.168.97.206'
	},
	{
		serial: 'MXJ9190B45',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'vsucre'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(242)']).id,
		observation: '',
		computerName: '242005CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.57.1.13'
	},
	{
		serial: 'MJ08H4T0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'dmillan'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(242)']).id,
		observation: '',
		computerName: '242011CJEROS',
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
		ipAddress: '10.57.1.32'
	},
	{
		serial: 'MJMMAXY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'ybolivar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(242)']).id,
		observation: '',
		computerName: '242006ASES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.57.1.36'
	},
	{
		serial: 'MXJ90701L4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'amrondon'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(242)']).id,
		observation: '',
		computerName: '242003-PROMOT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_0.5_0.25_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.57.1.53'
	}
]

function transformarStringToArray(input, targetSize) {
	const numbers = input.split('_').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

module.exports = { agenciaGuayana }
