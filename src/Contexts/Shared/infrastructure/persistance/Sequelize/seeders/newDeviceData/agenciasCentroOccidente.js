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

const agenciaCentroOccidente = [
	{
		serial: 'MJ08H7YY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'dsuarez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: '06913CJEROS',
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
		ipAddress: '192.168.12.11'
	},
	{
		serial: 'MXL41801CV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'dcaracuzzi'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: 'A060015VPREG',
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
		ipAddress: '192.168.12.14'
	},
	{
		serial: 'MJ04HSW7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'egalindez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: '060037GERENTE1',
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
		ipAddress: '192.168.12.16'
	},
	{
		serial: 'MXL02610F7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'mmorales'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: 'A060034PRMTOR1',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.12.39'
	},
	{
		serial: 'MJHERDN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'lfarias'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: '060035ASTNT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
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
		ipAddress: '192.168.12.53'
	},
	{
		serial: 'MJ08H4X9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'eespinoza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: '06052CJEROS',
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
		ipAddress: '192.168.12.63'
	},
	{
		serial: 'MJMMCHP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'lrodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: '06052ENGOCIS',
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
		ipAddress: '192.168.12.64'
	},
	{
		serial: 'MXL41801DS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'acordero'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: '20212GRTES',
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
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.12.74'
	},
	{
		serial: 'MXL5260NK2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id,
		employeeId: 'mafernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(060)']).id,
		observation: '',
		computerName: 'A060061GTENEG',
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
		ipAddress: '192.168.12.76'
	},
	{
		serial: 'MXL41804TS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'angutierrez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '06319CORDND',
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
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.10'
	},
	{
		serial: 'MJMMCMK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: 'A063017GTE',
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
		ipAddress: '10.100.63.11'
	},
	{
		serial: 'MXL41806XH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'jceballos'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '06322GOPETV',
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
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.12'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'sperez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '06322SUBGTE',
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
		ipAddress: '10.100.63.13'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'echirema'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: 'A063008PROMTR',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('4', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.15'
	},
	{
		serial: 'MXJ94500VW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'adgonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063027ASNGCIOS',
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
		ipAddress: '10.100.63.16'
	},
	{
		serial: 'MXJ947086K',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'ncardenas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063030ASNGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.17'
	},
	{
		serial: 'MJ04CSN0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'dpinero'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063013PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M700').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.18'
	},
	{
		serial: 'MJ08H80D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mvalera'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063006CAJROS',
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
		ipAddress: '10.100.63.20'
	},
	{
		serial: 'MJ08H82T',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'ftorres'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063024CJERO',
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
		ipAddress: '10.100.63.21'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.']).id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').id,
		employeeId: 'erchirinos'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '06309GTEAGROP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3240 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.22'
	},
	{
		serial: 'MXJ90607MN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'jceballos'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063012PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.28'
	},
	{
		serial: 'MXL04309ZG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'yomedina'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(063)']).id,
		observation: '',
		computerName: '063002PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.63.55'
	},
	{
		serial: 'MJ08H4SR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mlopez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(069)']).id,
		observation: '',
		computerName: '069023CJEROS',
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
		ipAddress: '192.168.32.19'
	},
	{
		serial: 'MJMMFEB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'mcamacaro'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(069)']).id,
		observation: '',
		computerName: '069022PRMTOR',
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
		ipAddress: '192.168.32.24'
	},
	{
		serial: 'MJMMERV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'anescalona'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(069)']).id,
		observation: '',
		computerName: '069008SUBGTES',
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
		ipAddress: '192.168.32.25'
	},
	{
		serial: 'MJMLXYN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(069)']).id,
		observation: '',
		computerName: '069021SUBGTES',
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
		ipAddress: '192.168.32.30'
	},
	{
		serial: 'MJ55FZ8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e').id,
		employeeId: 'sescalona'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '073001SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.73.10'
	},
	{
		serial: 'MXL4020TRD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').id,
		employeeId: 'yearojas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '073025PRMTORS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.73.12'
	},
	{
		serial: 'MJ08H7YD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'rudvargas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '07326CJEROS',
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
		ipAddress: '10.100.73.15'
	},
	{
		serial: 'MJ08H547',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jperaza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '073022CJAS',
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
		ipAddress: '10.100.73.16'
	},
	{
		serial: 'MJMLYVZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'jperaza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '073012CORDND',
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
		ipAddress: '10.100.73.18'
	},
	{
		serial: 'MJMMFFD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'hlopez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '07306GRTES',
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
		ipAddress: '10.100.73.20'
	},
	{
		serial: 'MXJ90702VB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'mgarcia'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(073)']).id,
		observation: '',
		computerName: '073015-ANEGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_0.5_1_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.73.22'
	},
	{
		serial: 'MXJ00601KR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'mvanegas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(156)']).id,
		observation: '',
		computerName: '241003ANEGCIOS',
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
		ipAddress: '192.168.20.196'
	},
	{
		serial: 'MJ08H4T7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mdasilva'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(156)']).id,
		observation: '',
		computerName: '156011CJEROS',
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
		ipAddress: '192.168.20.206'
	},
	{
		serial: 'MJMMFDY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'dtorres'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(156)']).id,
		observation: '',
		computerName: 'A156003-SUBTE',
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
		ipAddress: '192.168.20.207'
	},
	{
		serial: 'MXL31600C8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'zalconini'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(156)']).id,
		observation: '',
		computerName: '156008GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.20.208'
	},
	{
		serial: 'MJ04HSUR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'murdaneta'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(194)']).id,
		observation: '',
		computerName: '19401GERENTE',
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
		ipAddress: '10.100.2.2'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.']).id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').id,
		employeeId: 'yarellano'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(194)']).id,
		observation: '',
		computerName: '19405PROMOT',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G620 @ 2.60GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.2.4'
	},
	{
		serial: 'MJ08H7Y9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'mbracho'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(194)']).id,
		observation: '',
		computerName: '194015CJERO',
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
		ipAddress: '10.100.2.6'
	},
	{
		serial: 'MJMLYTP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'carlopez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(194)']).id,
		observation: '',
		computerName: '19403COORD',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
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
		ipAddress: '10.100.2.7'
	},
	{
		serial: 'MJMMCDV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'ytorres'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(194)']).id,
		observation: '',
		computerName: '194015CAJERO',
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
		ipAddress: '10.100.2.9'
	},
	{
		serial: 'MJMMEWB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'marondon'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '196016GERENTE',
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
		ipAddress: '192.168.153.125'
	},
	{
		serial: 'MJMLXZG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'zalconini'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '19601GERENT',
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
		ipAddress: '192.168.153.115'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To be filled by O.E.M.']).id,
		modelId: modelComputer.find(model => model.name === 'To be filled by O.E.M.').id,
		employeeId: 'marondon'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '19612ENEGOC',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G620 @ 2.60GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'To be filled by O.E.M.').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.153.76'
	},
	{
		serial: 'MJMLYCT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'ycazano'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '19611CAJERO',
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
		ipAddress: '192.168.153.77'
	},
	{
		serial: 'MJ04CSN2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'yfernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '15601GERENTE',
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
		ipAddress: '192.168.153.78'
	},
	{
		serial: 'MXL04228VN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'mamaya'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '24002GTEOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.153.80'
	},
	{
		serial: 'MJMLYNT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'mameza'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '19606CAJERO',
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
		ipAddress: '192.168.153.66'
	},
	{
		serial: 'MJ08H4WJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '196004CJERO',
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
		ipAddress: '192.168.153.68'
	},
	{
		serial: 'MJ08H83C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'ceperez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(196)']).id,
		observation: '',
		computerName: '196008CJERO',
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
		ipAddress: '192.168.153.69'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.']).id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').id,
		employeeId: 'mrivas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(202)']).id,
		observation: '',
		computerName: '20203CORDINC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3240 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.93.95'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'jeigonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(202)']).id,
		observation: '',
		computerName: '202011PROTRES',
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
		ipAddress: '192.168.93.97'
	},
	{
		serial: 'MXL4020TQJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').id,
		employeeId: 'bgaray'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(202)']).id,
		observation: '',
		computerName: 'A20206-PRMTO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.93.98'
	},
	{
		serial: 'MJ08H80C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'zparedes'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(202)']).id,
		observation: '',
		computerName: '20214CJEROS',
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
		ipAddress: '192.168.93.102'
	},
	{
		serial: 'MJ04CSPS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'jdorante'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(202)']).id,
		observation: '',
		computerName: '20202SUBGTE',
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
		ipAddress: '192.168.93.108'
	},
	{
		serial: 'MXL5260NML',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id,
		employeeId: 'cchavez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(165)']).id,
		observation: '',
		computerName: '165035GTRTE',
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
		ipAddress: '192.168.222.198'
	},
	{
		serial: 'MJ08H4RN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'ilatini'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(165)']).id,
		observation: '',
		computerName: '16511CJEROS',
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
		ipAddress: '192.168.222.201'
	},
	{
		serial: 'MJMLYBN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'jbecerra'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(165)']).id,
		observation: '',
		computerName: '165014CORDNDR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.222.202'
	},
	{
		serial: 'MJ08H7YR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jeescalona'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(165)']).id,
		observation: '',
		computerName: '16518CJEROS',
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
		ipAddress: '192.168.222.205'
	},
	{
		serial: 'MXJ90607FM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'cahernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(165)']).id,
		observation: '',
		computerName: '165013PRMTORES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5_0.5_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '192.168.222.206'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(165)']).id,
		observation: '',
		computerName: '16505CAJERO',
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
		ipAddress: '192.168.222.207'
	},
	{
		serial: 'MJ04HSWP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'carteaga'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: '207001GTECABUD',
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
		ipAddress: '192.168.97.3'
	},
	{
		serial: 'MJ04CSPE',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'igimenez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: 'A207004ESPECIAL',
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
		ipAddress: '192.168.97.6'
	},
	{
		serial: 'MJ08H51X',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: '207009CAJROS',
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
		ipAddress: '192.168.97.8'
	},
	{
		serial: 'MJ04HSUA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'ifernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: '207006PROMO',
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
		ipAddress: '192.168.97.9'
	},
	{
		serial: 'MJ08H7Z6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'kduarte'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: '207013CAJROS',
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
		ipAddress: '192.168.97.12'
	},
	{
		serial: 'MJ04HSWF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'santequera'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: '127011CAJCABUD',
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
		ipAddress: '192.168.97.13'
	},
	{
		serial: 'MJ04HSVK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'ancastro'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(207)']).id,
		observation: '',
		computerName: '207012CAJECABUD',
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
		ipAddress: '192.168.97.14'
	},
	{
		serial: 'MXL4020SLP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').id,
		employeeId: 'mariagomez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(219)']).id,
		observation: '',
		computerName: '219001GOPRTIVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.219.11'
	},
	{
		serial: 'MXL4020SP4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').id,
		employeeId: 'jaranguren'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(219)']).id,
		observation: '',
		computerName: '19202CORDNDOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.219.12'
	},
	{
		serial: 'MXL4020TPS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').id,
		employeeId: 'tsoto'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(219)']).id,
		observation: '',
		computerName: '21903ANGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.219.13'
	},
	{
		serial: 'MJ08H4YJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jaserrano'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(219)']).id,
		observation: '',
		computerName: '219004CJEROS',
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
		ipAddress: '10.100.219.14'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.']).id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').id,
		employeeId: 'clatorre'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(219)']).id,
		observation: '',
		computerName: '063002GRTES',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.219.15'
	},
	{
		serial: 'MXL0260ZHZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'anarvaez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(264)']).id,
		observation: '',
		computerName: '264012PRMOTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.64.10'
	},
	{
		serial: 'MJ08H7ZV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jlinarez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(264)']).id,
		observation: '',
		computerName: '264005CJEROS',
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
		ipAddress: '10.102.64.11'
	},
	{
		serial: 'MJ08H7YJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'acolmenarez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(264)']).id,
		observation: '',
		computerName: '264004CJEROS',
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
		ipAddress: '10.102.64.12'
	},
	{
		serial: 'MXJ00609KW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'raguilar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(264)']).id,
		observation: '',
		computerName: '264003ENCG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.64.15'
	},
	{
		serial: 'MXL3151VKX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'fbustos'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(264)']).id,
		observation: '',
		computerName: '264001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.64.17'
	},
	{
		serial: 'MXJ00503RW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'japostol'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(264)']).id,
		observation: '',
		computerName: '264002GTEOPER',
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
		ipAddress: '10.102.64.20'
	},
	{
		serial: 'MJ08H4VZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'josehernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(265)']).id,
		observation: '',
		computerName: '265004CJEROS',
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
		ipAddress: '10.44.10.15'
	},
	{
		serial: 'MXJ83302V8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'glhernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(265)']).id,
		observation: '',
		computerName: '265002GO',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_0.5_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.44.10.16'
	},
	{
		serial: 'MXJ00503SV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'cgranda'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(265)']).id,
		observation: '',
		computerName: '265003PRMTOR',
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
		ipAddress: '10.44.10.34'
	},
	{
		serial: 'MXL3201SZY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'kgutierrez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(265)']).id,
		observation: '',
		computerName: '265001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.44.10.51'
	},
	{
		serial: 'MJ08H4RS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'yjimenez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(267)']).id,
		observation: '',
		computerName: '267004CJEROS',
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
		ipAddress: '10.50.104.12'
	},
	{
		serial: 'MXJ82705Y5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'Maflores'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(267)']).id,
		observation: '',
		computerName: '26707PROM',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) Dual  CPU  E2180  @ 2.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.104.37'
	},
	{
		serial: 'MXJ71306JS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').id,
		employeeId: 'laygomez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(267)']).id,
		observation: '',
		computerName: 'A267001-QUIBOR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) D CPU 820 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.104.51'
	},
	{
		serial: 'MXL3201W0W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'laurodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(267)']).id,
		observation: '',
		computerName: '267008COORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.104.53'
	},
	{
		serial: 'MJ08H81Q',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'ecortez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(268)']).id,
		observation: '',
		computerName: '268004CJEROS',
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
		ipAddress: '10.50.103.15'
	},
	{
		serial: 'MXL02610NJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'yriera'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(268)']).id,
		observation: '',
		computerName: '268007PRMOTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.103.31'
	},
	{
		serial: 'MXJ00609MM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'Kpernalete'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(268)']).id,
		observation: '',
		computerName: '268003PRMOTOR',
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
		ipAddress: '10.50.103.33'
	},
	{
		serial: 'MXL3151VKR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'agallardo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(268)']).id,
		observation: '',
		computerName: '268006SUBGTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.103.52'
	},
	{
		serial: 'MXL3332932',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').id,
		employeeId: 'daarroyo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(268)']).id,
		observation: '',
		computerName: '268002CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.103.53'
	},
	{
		serial: 'MJ08H53H',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'anagarcia'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(284)']).id,
		observation: '',
		computerName: '284005CJEROS',
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
		ipAddress: '10.50.96.12'
	},
	{
		serial: 'MJLKHC7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M70e').id,
		employeeId: 'smartinez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(284)']).id,
		observation: '',
		computerName: '284004PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M70e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.96.16'
	},
	{
		serial: 'MXJ94500R1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'yerlopez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(284)']).id,
		observation: '',
		computerName: '284006CORDNDR',
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
		ipAddress: '10.50.96.18'
	},
	{
		serial: 'MXJ94500TL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'amatute'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(284)']).id,
		observation: '',
		computerName: '284002GOPRTVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.96.33'
	},
	{
		serial: 'MXJ94500WC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'yladino'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(284)']).id,
		observation: '',
		computerName: '284001GRETES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.96.57'
	},
	{
		serial: 'MXL05108C7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'hgalvis'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(284)']).id,
		observation: '',
		computerName: '284003ASENEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.96.58'
	},
	{
		serial: 'MJ08H53T',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'ycorrea'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(266)']).id,
		observation: '',
		computerName: '266005CJEROS',
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
		ipAddress: '10.44.2.14'
	},
	{
		serial: 'MXL0430B23',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'mmontilla'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(266)']).id,
		observation: '',
		computerName: '266001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.44.2.37'
	},
	{
		serial: 'MXL04309ZB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'miecheverria'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(266)']).id,
		observation: '',
		computerName: '266007EJUNIOR',
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
		ipAddress: '10.44.2.40'
	},
	{
		serial: 'MXL051089V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'mereu'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(266)']).id,
		observation: '',
		computerName: '266006PROM',
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
		ipAddress: '10.44.2.55'
	},
	{
		serial: 'MXL02610PT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'jcastaneda'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(266)']).id,
		observation: '',
		computerName: '266004CRDNDOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.44.2.254'
	},
	{
		serial: 'MXJ94500PG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'alcolmenares'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(283)']).id,
		observation: '',
		computerName: '283008PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.41.15'
	},
	{
		serial: 'MXJ94500TB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'mybarra'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(283)']).id,
		observation: '',
		computerName: '283004PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.41.16'
	},
	{
		serial: 'MXJ9060774',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'llobo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(283)']).id,
		observation: '',
		computerName: '283007CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_1_0.5_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.41.18'
	},
	{
		serial: 'MJ08H4XF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'llobo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(283)']).id,
		observation: '',
		computerName: '283005CJEROS',
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
		ipAddress: '10.50.41.29'
	},
	{
		serial: 'MXL3201WHC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id,
		employeeId: 'pangulo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(283)']).id,
		observation: '',
		computerName: '283001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.50.41.32'
	},
	{
		serial: 'MJ08H7Z2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'nmontilla'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(283)']).id,
		observation: '',
		computerName: '283004CJEROS',
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
		ipAddress: '10.50.41.35'
	}
]

function transformarStringToArray(input, targetSize) {
	const numbers = input.split('_').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

module.exports = { agenciaCentroOccidente }
