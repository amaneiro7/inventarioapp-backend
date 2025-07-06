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

const agenciaInsular = [
	{
		serial: 'MJ08H4Z2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'alhernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(108)']).id,
		observation: '',
		computerName: '10805CJEROS',
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
		ipAddress: '10.100.108.12'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['System manufacturer']).id,
		modelId: modelComputer.find(model => model.name === 'System Product Name').id,
		employeeId: 'fmarin'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(108)']).id,
		observation: '',
		computerName: '10802CAJERO',
		processorId: processors.find(process =>
			'Intel(R) Celeron(R) CPU G1610 @ 2.60GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'System Product Name').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.108.14'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'jeortiz'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '146007PROMOT',
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
		ipAddress: '10.100.146.199'
	},
	{
		serial: 'MXL41806XD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'ccaraballo'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: 'PORLAMAR7',
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
		ipAddress: '10.100.146.10'
	},
	{
		serial: 'MXL41801TG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'yohgonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: 'PORLAMAR2',
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
		ipAddress: '10.100.146.11'
	},
	{
		serial: 'MJ08H7XH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'bmarcano'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '14609CJEROS',
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
		ipAddress: '10.100.146.12'
	},
	{
		serial: 'MJ08H52W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'zleon'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '14628CJEROS',
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
		ipAddress: '10.100.146.14'
	},
	{
		serial: 'MXL41806XT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'lnarvaez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: 'PORLAMAR6',
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
		ipAddress: '10.100.146.17'
	},
	{
		serial: 'MXL41801G8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'yvelasquez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: 'PORLAMAR4',
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
		ipAddress: '10.100.146.18'
	},
	{
		serial: 'MXL02610FL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '14601PROMOT',
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
		ipAddress: '10.100.146.19'
	},
	{
		serial: 'MJ04CSNN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id,
		employeeId: 'marivero'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '14610GERENT',
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
		ipAddress: '10.100.146.23'
	},
	{
		serial: 'MXL0260ZGT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'lcastelin'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '146036PROMOTOR',
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
		ipAddress: '10.100.146.25'
	},
	{
		serial: 'MJMMFGY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'mbolivar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '146027CAJERO',
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
		ipAddress: '10.100.146.26'
	},
	{
		serial: 'MXL02610PJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id,
		employeeId: 'ypino'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: '146007ENEGOCIO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.100.146.27'
	},
	{
		serial: 'MJ08H54C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'sinsular'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(146)']).id,
		observation: '',
		computerName: 'AUDVINSULAR',
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
		ipAddress: '10.100.146.31'
	},
	{
		serial: 'MJ08H7ZB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'kpestana'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(161)']).id,
		observation: '',
		computerName: 'CJERO16108',
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
		ipAddress: '10.101.161.10'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'isalazar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(161)']).id,
		observation: '',
		computerName: '16111PRMTR',
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
		ipAddress: '10.101.161.12'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group']).id,
		modelId: modelComputer.find(model => model.name === 'G41D3C').id,
		employeeId: 'dancedeno'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(161)']).id,
		observation: '',
		computerName: '161009PROMT',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C').slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.101.161.20'
	},
	{
		serial: 'MXL41804TT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id,
		employeeId: 'leperez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(161)']).id,
		observation: '',
		computerName: 'PORLAMAR1',
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
		ipAddress: '10.101.161.21'
	},
	{
		serial: 'MJMLXYZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id,
		employeeId: 'wrodriguez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(161)']).id,
		observation: '',
		computerName: '161004CORD',
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
		ipAddress: '10.101.161.22'
	},
	{
		serial: 'MJ08H4YB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jramirez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(161)']).id,
		observation: '',
		computerName: '161CAJEROS',
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
		ipAddress: '10.101.161.29'
	},
	{
		serial: 'MXL1390T55',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: 'algomez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(280)']).id,
		observation: '',
		computerName: 'A280001GTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.80.10'
	},
	{
		serial: 'MXL1390T40',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: 'marigarcia'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(280)']).id,
		observation: '',
		computerName: 'A280003PROM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.80.12'
	},
	{
		serial: 'MXJ9470876',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'argonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(280)']).id,
		observation: '',
		computerName: 'A280004CAJ2',
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
		ipAddress: '10.102.80.16'
	},
	{
		serial: 'MXL1390T31',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: 'fmalave'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(280)']).id,
		observation: '',
		computerName: 'A280004CAJ1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.80.17'
	},
	{
		serial: 'MXJ92009LF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'anserrano'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: 'A281007COORD1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.81.10'
	},
	{
		serial: 'MXJ92009LQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'ecotogno'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281004CAJ1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.81.11'
	},
	{
		serial: 'MXJ92004DV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'mariaegonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281005CAJ2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.81.12'
	},
	{
		serial: 'MXJ92004HS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'rgarcia'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281004PROMO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.81.15'
	},
	{
		serial: 'MXL1370M2W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: 'mguevara'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281007ASES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.81.17'
	},
	{
		serial: 'MXJ92004GM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'rvargas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281009GTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.81.18'
	},
	{
		serial: 'MXL1370M36',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: 'anavarro'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(282)']).id,
		observation: '',
		computerName: '282017COORD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.82.10'
	},
	{
		serial: 'MXJ7130880',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').id,
		employeeId: 'krsalazar'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(282)']).id,
		observation: '',
		computerName: '282008PROMO',
		processorId: processors.find(process => 'Intel(R) Pentium(R) D 820 CPU 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.82.12'
	},
	{
		serial: 'MXJ91909ZX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'ovillarroel'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(282)']).id,
		observation: '',
		computerName: '282006SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.82.17'
	},
	{
		serial: 'MJ08H53J',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'diugonzalez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(282)']).id,
		observation: '',
		computerName: '282012CJEROS',
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
		ipAddress: '10.102.82.18'
	},
	{
		serial: 'MXL1390T9L',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: ''.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(282)']).id,
		observation: '',
		computerName: '282016ASESNEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'2_4',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.102.82.20'
	},
	{
		serial: 'MXJ91909P0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'fanton'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(541)']).id,
		observation: '',
		computerName: '541003PROM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
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
		ipAddress: '10.105.41.10'
	},
	{
		serial: 'MXJ906079S',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'ROVELASQUEZ'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(541)']).id,
		observation: '',
		computerName: '54102CORD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'0.5_1_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional ']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.105.41.11'
	},
	{
		serial: 'MXL4391LV2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP 200 G1 MT').id,
		employeeId: 'evelasquez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(541)']).id,
		observation: '',
		computerName: 'A541015ASESOR',
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
		ipAddress: '10.105.41.12'
	},
	{
		serial: 'MJ08H82B',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jmoya'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(541)']).id,
		observation: '',
		computerName: '541004CJEROS',
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
		ipAddress: '10.105.41.15'
	},
	{
		serial: 'MXJ91908K2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor').id,
		employeeId: 'difuentes'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(541)']).id,
		observation: '',
		computerName: '541001SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7400  @ 2.80GHz'.includes(process.number_model)
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
		ipAddress: '10.105.41.19'
	},
	{
		serial: 'MXL1390T4D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id,
		employeeId: 'aigil'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281016GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.105.42.10'
	},
	{
		serial: 'MXL3380ZZM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').id,
		employeeId: 'luhernandez'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281017CORDND',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G640 @ 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.105.42.11'
	},
	{
		serial: 'MXL04309Z8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id,
		employeeId: 'josalas'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281018ANEGCIOS',
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
		ipAddress: '10.105.42.12'
	},
	{
		serial: 'MJ08H507',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q').id,
		employeeId: 'jfuentes'.toLowerCase(),
		locationId: agenciasSite.find(location => location.name === agenciaName['AGENCIA(281)']).id,
		observation: '',
		computerName: '281012CJEROS',
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
		ipAddress: '10.105.42.13'
	}
]

function transformarStringToArray(input, targetSize) {
	const numbers = input.split('_').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

module.exports = { agenciaInsular }
