const { randomUUID } = require('node:crypto')
const { hddCapacitiesName, hddCapacities } = require('../DiscoDuro/hddCapacities')
const { hddTypeName, hddTypes } = require('../DiscoDuro/hddType')
const { categoriesData, categoryNames } = require('../newDeviceData/allCategory')
const { brandOnlyName, brandsData } = require('../newDeviceData/brand')
const { modelComputer } = require('../newDeviceData/modelComputer')
const { operatingSystemArq, osArqName } = require('../newDeviceData/operatingSystemArq')
const { processors } = require('../newDeviceData/processors')
const { agenciaName, agenciasSite } = require('../location/locations')
const { osName, operatingSystem } = require('../operatingSystem/operatingSystem')

const newDeviceToAdd = [
	{
		serial: 'MJ072WKC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M710s')?.id,
		employeeId: 'eadames'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'BNCTECNO2-DBA2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 24,
		memoriaRamModules: transformarStringToArray(
			'8, 8, 4, 4',
			modelComputer.find(model => model.name === 'ThinkCentre M710s')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.215'
	},
	{
		serial: 'MJ08H4SM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: null,
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'BNC-SIMULAD15',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.240'
	},
	{
		serial: 'MJ03JPNQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'surbina'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'A095704CANTFRAU',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4,4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.210'
	},
	{
		serial: '5CG1404KXB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook 850 G8 Notebook PC')?.id,
		employeeId: 'hehernande'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095093VPBCORP',
		processorId: processors.find(process =>
			'11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 32,
		memoriaRamModules: transformarStringToArray(
			'16,16',
			modelComputer.find(model => model.name === 'HP EliteBook 850 G8 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.60'
	},
	{
		serial: 'MXL41804YB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'facosta'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095992ANALCRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4,4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.101'
	},
	{
		serial: '1HF5351THD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mirodriguez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098404LEGAL',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.106'
	},
	{
		serial: 'MJ08H527',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: null,
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SLARUNPISO7',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.122'
	},
	{
		serial: '1HF5351TN9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'marisanchez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B031346SEGYCONT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.132'
	},
	{
		serial: '1HF5351TK3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'iochoa'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098556SERJURID',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.133'
	},
	{
		serial: '1HF5351THC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'garroyo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'AJURIDICO01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.146'
	},
	{
		serial: '1HF5351TN1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'vpalencia'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'JURIDICO002',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.168'
	},
	{
		serial: 'MJ04CSQD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'gquintero'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098484UPLC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4,8',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.187'
	},
	{
		serial: '1HF5351THN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'dramirez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098281LEGAL',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.55'
	},
	{
		serial: '1HF5351TJK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'dleon'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098282VPREGCON',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.56'
	},
	{
		serial: '1HF5351THX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'kreyes'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095510ABOGA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.57'
	},
	{
		serial: '1HF5351TM4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'dpontes'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095026BNCPERSO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.59'
	},
	{
		serial: '1HF5351TJF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'abohorquez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095209JURIDICA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.60'
	},
	{
		serial: '1HF5351TJ9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'csalas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098308JURIDICO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.61'
	},
	{
		serial: '1HF5351THK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'cvillalobos'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098064LEGAL01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.62'
	},
	{
		serial: '1HF5351THT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mleon'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098283CONSULT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.63'
	},
	{
		serial: '1HF5351TGJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'amoreno'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095443CONJURID',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.64'
	},
	{
		serial: '1HF5351TH6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'maescalante'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095446JURIDICO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.65'
	},
	{
		serial: '1HF5351TH1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'casalazar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098072SISTCOM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.66'
	},
	{
		serial: '1HF5351TM8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jofonseca'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095301ATCLIENT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.67'
	},
	{
		serial: '1HF5351TL1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ecardona'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095817CONSULJU',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.68'
	},
	{
		serial: '1HF5351TLY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'armolinares'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095135ORGOFIC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.70'
	},
	{
		serial: 'MXL41801WH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'mamalave'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095532CREDITO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.74'
	},
	{
		serial: '1HF5351TN2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: null,
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098209PLANES1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.61'
	},
	{
		serial: 'MJ08H7YQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'juntasbnc'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SALA-TESOR12',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.60'
	},
	{
		serial: '1HF5351THM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jornogueroles'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'BNC-NOGUEROLES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.96'
	},
	{
		serial: '1HF5351TJX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jovillamizar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098427TARCRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.10'
	},
	{
		serial: '1HF5351TJD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'cyanez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A09585PRODTDC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.226'
	},
	{
		serial: '1HF5351TK8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'gpaz'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098612AMEXPR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.228'
	},
	{
		serial: '1HF5351TLW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'galvarez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'PROSERTARJETAS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.229'
	},
	{
		serial: '1HF5351TMY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'bramos'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'DESKTO-82ARBS3',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.230'
	},
	{
		serial: '1HF5351TMR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'yosrivas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098229AMEX',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.232'
	},
	{
		serial: '1HF5351TLV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'damelendez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098232MEDPAG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.233'
	},
	{
		serial: '1HF5351TN5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ibautista'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098474MEDPAG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.234'
	},
	{
		serial: '1HF5351TKY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'yegomez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098658AMEX1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.235'
	},
	{
		serial: 'MXL9032WV7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'yochoa'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095858TCRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8,8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1123H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.238'
	},
	{
		serial: '1HF5351TNK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'dlarene'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098504INTNEGO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.25'
	},
	{
		serial: '1HF5351TJR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'zmarron'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B951159PROVEED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.55'
	},
	{
		serial: '1HF5351TJQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jmeza'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098323PAGOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.3.229'
	},
	{
		serial: '1HF5351TJ5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'scollado'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B095578IMPUESTO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.55'
	},
	{
		serial: '1HF5351TL9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'nmora'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095893PETESO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.71'
	},
	{
		serial: '1HF5351TJT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'vrosales'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'CSALARAIAL01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.102'
	},
	{
		serial: 'MXL41801DN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: null,
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'PASBACK02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4,4,8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.207'
	},
	{
		serial: '1HF5351TM6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jemoreno'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B098308ABOGADO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.214'
	},
	{
		serial: 'MJ03JPPA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'jlinares'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098368SERG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.49'
	},
	{
		serial: '1HF5351THV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'angomez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'CTROLGEST001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.155'
	},
	{
		serial: '1HF5351TJY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'fagarcia'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ASISTJUNTA01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.194'
	},
	{
		serial: 'CND3384PSN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ENVY Laptop 16-h1xxx')?.id,
		employeeId: 'msierra'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095527CONTABI',
		processorId: processors.find(process =>
			'13th Gen Intel(R) Core(TM) i7-13700H'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 32,
		memoriaRamModules: transformarStringToArray(
			'16,16',
			modelComputer.find(model => model.name === 'HP ENVY Laptop 16-h1xxx')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['2000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.42'
	},
	{
		serial: '1H860106HJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProBook 460 16 inch G11 Notebook PC')?.id,
		employeeId: 'rmorantes'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPBANINTER',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) Ultra 7 155U'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP ProBook 460 16 inch G11 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.45'
	},
	{
		serial: '1HF5351TJB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ncaicedo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098241CORRINT1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.46'
	},
	{
		serial: '1HF5351TGP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'emarin'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A154112CURACAO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.47'
	},
	{
		serial: '1HF5351TGL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lbernot'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095717EFICOME1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.66'
	},
	{
		serial: '1HF5351TLH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'msoto'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ACPRSUPT098521',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.83'
	},
	{
		serial: '1HF5351TNJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'hevalladares'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098086NVSNEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.111'
	},
	{
		serial: '1HF5351TK6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ajimenez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'NVONEG001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.232'
	},
	{
		serial: '1H85310C75',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProBook 460 16 inch G11 Notebook PC')?.id,
		employeeId: 'jesugonzalez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPENVSNEGS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) Ultra 7 155U'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP ProBook 460 16 inch G11 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.233'
	},
	{
		serial: '1HF5351TN3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'magraz'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: 'SERVIGEN01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700T'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.63'
	},
	{
		serial: '1HF51602RR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'parvelo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A098037PROMOT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-14700'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.37'
	},
	{
		serial: 'MXJ71306M3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor')?.id,
		employeeId: null,
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: 'ESPSEGBNC',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) D 820 CPU @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1,1,1',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.58'
	},
	{
		serial: 'MJ03JPQ0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'crmartinez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: '021060VPRGARAG1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.71'
	},
	{
		serial: 'MXJ90607MS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'aflores'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: '02123PRMTORES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3.5,
		memoriaRamModules: transformarStringToArray(
			'0.5,1,1,1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.80'
	},
	{
		serial: 'MJ04HSVB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'yohernandez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(042)'])[0]?.id,
		observation: '',
		computerName: 'A04204SUBGT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.42.12'
	},
	{
		serial: 'MXJ906078C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'rmedina'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(042)'])[0]?.id,
		observation: '',
		computerName: '04215ENGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1,1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.42.19'
	},
	{
		serial: 'MXL05108D2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'yelopez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(044)'])[0]?.id,
		observation: '',
		computerName: '044018PAC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.44.12'
	},
	{
		serial: 'MJMMENV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'ycedeno'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(045)'])[0]?.id,
		observation: '',
		computerName: '04516SGTAVNC1',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.45.11'
	},
	{
		serial: 'MJMMCCD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'lucampos'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(071)'])[0]?.id,
		observation: '',
		computerName: '20004PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.71.20'
	},
	{
		serial: 'MJ03JPR1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'airiarte'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(074)'])[0]?.id,
		observation: '',
		computerName: '07413PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.74.11'
	},
	{
		serial: 'MXL41801T6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'egotopo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(097)'])[0]?.id,
		observation: '',
		computerName: '09703GOPERTVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.97.13'
	},
	{
		serial: 'MXJ94500PH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'dvelasquez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(097)'])[0]?.id,
		observation: '',
		computerName: '097048POSVTA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.97.16'
	},
	{
		serial: 'MXL0502DSC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'aleperez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(097)'])[0]?.id,
		observation: '',
		computerName: '097050PROMO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.97.14'
	},
	{
		serial: 'MJ03JPQM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'maracosta'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(099)'])[0]?.id,
		observation: '',
		computerName: '09902CORDNADOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.99.21'
	},
	{
		serial: 'MJ08H51D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'operador'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'MONITOP-15',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.218'
	},
	{
		serial: 'MJ08H4X6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'operador'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'MONITOP-16',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.219'
	},
	{
		serial: 'MXL9343QJK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'kmendible'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'TECNOWEB05',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8,8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.237'
	},
	{
		serial: 'MXL5260NLZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'marrojas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CALLCENTERB18',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.162'
	},
	{
		serial: 'MXL0430B1T',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'rorojas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'PSANTCORP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'2,2,2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.211'
	},
	{
		serial: '5CG12123M5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook 850 G7 Notebook PC')?.id,
		employeeId: 'jsifontes'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPTELECHIPOT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteBook 850 G7 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.90'
	},
	{
		serial: 'MXL3201W1K',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'marifernandez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098524ANCRE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.127'
	},
	{
		serial: 'MXL41804VN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'alarroyo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095289-CNTSEGUI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.83'
	},
	{
		serial: 'MJ00XUCQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z')?.id,
		employeeId: 'rramirez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098228MEDPAG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8,8',
			modelComputer.find(model => model.name === 'ThinkCentre M73z')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.231'
	},
	{
		serial: 'MXL3201W56',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'yegomez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SRVCLIYSOLITUD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4,4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.236'
	},
	{
		serial: 'PF26GSXE',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkPad X1 Carbon 7th')?.id,
		employeeId: 'efernandez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098237PROYSE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8565U CPU @ 1.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8,8',
			modelComputer.find(model => model.name === 'ThinkPad X1 Carbon 7th')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1020H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.239'
	},
	{
		serial: 'MJLKWF9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M70e')?.id,
		employeeId: 'maripalacios'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'INCEAGP04',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M70e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.171'
	},
	{
		serial: 'MJ08H52T',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'juntasbnc'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SALAROSAL-P5',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.82'
	},
	{
		serial: 'MXL41806ZP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'otous'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095778SUDEBAN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.112'
	},
	{
		serial: 'MXL3201W4Q',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'luperdomo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'BNC-CORRESPDC01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.7.16'
	},
	{
		serial: 'MJBPHDZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'projas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095004GCIAADM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.6'
	},
	{
		serial: 'MXJ945011G',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'frivera'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: 'A001004ANEGCS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.26'
	},
	{
		serial: 'MJMMCMB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mcalles'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: '001020ENEGCS',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.21'
	},
	{
		serial: 'MJ08H4RV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: null,
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: '00124CJERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1020H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.24'
	},
	{
		serial: 'MJMLYGA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'tzambrano'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: '001042ENGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.29'
	},
	{
		serial: 'MJMMFFX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'ayanez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: '00128ESPNEGC',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.14'
	},
	{
		serial: 'MXL41801FW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'daponte'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: '001016GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.12'
	},
	{
		serial: 'MXL051088Y',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'regonzalez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(018)'])[0]?.id,
		observation: '',
		computerName: '018028PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.18.30'
	},
	{
		serial: 'MJ39L68',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'azambrano'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(018)'])[0]?.id,
		observation: '',
		computerName: '018019GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.18.14'
	},
	{
		serial: 'MXL04228T2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'yomendez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(019)'])[0]?.id,
		observation: '',
		computerName: '27517GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.19.21'
	},
	{
		serial: 'MJMLYBM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'afereira'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: '21065DGTLZCN',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.66'
	},
	{
		serial: 'MXL0430B30',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'despinoza'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(043)'])[0]?.id,
		observation: '',
		computerName: '043041ENGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.43.30'
	},
	{
		serial: 'MJ00RZKD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z')?.id,
		employeeId: 'daldiaz'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(043)'])[0]?.id,
		observation: '',
		computerName: '043005GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4,4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.43.79'
	},
	{
		serial: 'MJ04CSQP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'guseche'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(047)'])[0]?.id,
		observation: '',
		computerName: '047007GTOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.47.12'
	},
	{
		serial: 'mjmmenf',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'ffermin'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(047)'])[0]?.id,
		observation: '',
		computerName: '047022CORDNDS',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.47.26'
	},
	{
		serial: 'MXL1390TBB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.id,
		employeeId: 'yediaz'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0]?.id,
		observation: '',
		computerName: 'A052021CDNDR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.52.16'
	},
	{
		serial: 'MJ08H7YX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'atavio'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: 'CJERO056001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101903'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.56.19'
	},
	{
		serial: 'MJMLYEV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'domoreno'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: '056034CORDND',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.56.10'
	},
	{
		serial: 'MXL11025W0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'vcoa'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: '056036PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Quad CPU    Q8400  @ 2.66GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.56.12'
	},
	{
		serial: 'MXL0260WS0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'yacedeno'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: '056039CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2,2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.56.11'
	},
	{
		serial: 'MJ03JPPR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'malopez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: '056028GRTESN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.56.18'
	},
	{
		serial: 'MXL4020TRF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF')?.id,
		employeeId: 'gerodriguez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: '056037ANCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.56.17'
	},
	{
		serial: 'MJMMFEF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'pjuarez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(073)'])[0]?.id,
		observation: '',
		computerName: '073025PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.73.11'
	},

]

function transformarStringToArray (input, targetSize) {
	if (!targetSize) return []
	const numbers = input.split(',').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

/**
 * Función de validación de integridad de datos.
 * Revisa que todos los campos obtenidos por búsqueda existan y que la RAM sea consistente.
 */
function validateNewDevices (data) {
	const report = []
	data.forEach((device, index) => {
		const label = `[Registro #${index + 1}] - Serial:${device.serial || 'N/A'}`
		const errors = []

		if (!device.serial) errors.push('Serial faltante')
		if (!device.categoryId) errors.push('Categoría no encontrada')
		if (!device.brandId) errors.push('Marca no encontrada')
		if (!device.modelId) errors.push('Modelo no encontrado')
		if (!device.processorId) errors.push('Procesador no encontrado')
		if (!device.locationId) errors.push('Ubicación no encontrada')
		if (!device.hardDriveCapacityId) errors.push('Capacidad HDD no encontrada')
		if (!device.hardDriveTypeId) errors.push('Tipo HDD no encontrado')
		if (!device.operatingSystemId) errors.push('Sistema Operativo no encontrado')
		if (!device.operatingSystemArqId) errors.push('Arquitectura del Sistema Operativo no encontrado')

		const ramSum = device.memoriaRamModules?.reduce((a, b) => a + b, 0) || 0
		if (ramSum !== device.memoryRamCapacity) {
			errors.push(`RAM Inconsistente: Módulos suman ${ramSum} pero capacidad dice ${device.memoryRamCapacity}`)
		}

		if (errors.length > 0) {
			report.push(`${label}: ${errors.join(', ')}`)
		}
	})
	return report
}

// Ejecutar validación si se corre el archivo directamente con node
if (require.main === module) {
	console.log('--- INICIANDO VALIDACIÓN DE DATOS ---')
	const errors = validateNewDevices(newDeviceToAdd)
	if (errors.length === 0) {
		console.log('✅ ¡Todo perfecto! No se encontraron errores.')
	} else {
		console.error(`❌ Se encontraron ${errors.length} errores:`)
		errors.forEach(err => console.log(err))
	}
}

module.exports = { newDeviceToAdd }
