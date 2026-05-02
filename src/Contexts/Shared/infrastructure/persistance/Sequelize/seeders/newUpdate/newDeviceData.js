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
		serial: 'MJ03JPR4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'jsalguedo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'A220004MONFRAU',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.235'
	},
	{
		serial: '1HF5351TH8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lugonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'BNC-TECNO-DEV01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.98'
	},
	{
		serial: '1HF5351TGX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jnoguera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'BNC-TECNO2-DEV0',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.219'
	},
	{
		serial: 'MXL934249F',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'hespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.9'
	},
	{
		serial: 'MXL91144WF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'hespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT03',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.17'
	},
	{
		serial: 'MXL9032X76',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'hespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT04',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.12'
	},
	{
		serial: '8CC835020X',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W')?.id,
		employeeId: 'hespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT07',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.10'
	},
	{
		serial: 'MXL9032FC5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'hespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT08',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.16'
	},
	{
		serial: 'MXL93443GB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'HESPINOZA'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT10',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.15'
	},
	{
		serial: 'MXL85217WD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'hespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'CURSOPRACT14',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8700T CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.8'
	},
	{
		serial: '5CD4150G0M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Laptop 15-fd0xxx')?.id,
		employeeId: 'ioliveira'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'GTEAPRYPOSATM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 1355U CPU @ 1.7GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP Laptop 15-fd0xxx')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.136'
	},
	{
		serial: 'LD004960072500007405',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Compaq'])?.id,
		modelId: modelComputer.find(model => model.name === 'QL15R3BM8256')?.id,
		employeeId: 'OBELTECH-20\Obeltech'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'OBELTECH-20',
		processorId: processors.find(process =>
			'AMD Ryzen 3 3200U with Radeon Vega Mobile Gfx  '.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'QL15R3BM8256')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1123H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.101'
	},
	{
		serial: 'MXL41801T5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jquintal'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'PROYECTOB-01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
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
		ipAddress: '10.220.3.100'
	},
	{
		serial: '1HF5351THL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ricgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SOPORTECB03',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.90'
	},
	{
		serial: '1HF5351TKG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'svidal'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'TECNOWEB9',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.105'
	},
	{
		serial: 'MXL41806Z8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '090TECNOLOGIA01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.136'
	},
	{
		serial: 'MXL5260NM3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '095249CALCBLITA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.220.3.145'
	},
	{
		serial: 'MXL0112F58',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)')?.id,
		employeeId: 'yescobar'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '095691-GTPOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8700 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.108'
	},
	{
		serial: '1HF5351THP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ydavila'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'VPANTIFRAUD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.221'
	},
	{
		serial: '1HF5351TKR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'hrico'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '001-SEGDATOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.8'
	},
	{
		serial: 'SCN0CX02W43850D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['ASUSTeK COMPUTER INC.'])?.id,
		modelId: modelComputer.find(model => model.name === 'Vivobook_ASUSLaptop X1404VA_X1404VA')?.id,
		employeeId: 'OBELTECH\Enrique'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'OBELTECH',
		processorId: processors.find(process => '13th Gen Intel(R) Core(TM) i5 1334U'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 24,
		memoriaRamModules: transformarStringToArray(
			'8_16',
			modelComputer.find(model => model.name === 'Vivobook_ASUSLaptop X1404VA_X1404VA')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.81'
	},
	{
		serial: '1HF5351TKK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'soropeza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SEGDATOS-006',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.21'
	},
	{
		serial: '1HF5351TND',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mquintero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'VPINFRAYENERG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.137'
	},
	{
		serial: '1HF5351TJ8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SEGDATOS-007',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.12'
	},
	{
		serial: '1HF5351TK7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'almartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '002-SEGDATOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.13'
	},
	{
		serial: '1HF5351TLL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'negonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'TECNOWEB8',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.74'
	},
	{
		serial: '1HF5351TKD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'smorin'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'BNC-TECNO2-DIS0',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.218'
	},
	{
		serial: '1HF5351TJ6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'cfernandez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'GCIACREADUS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.80'
	},
	{
		serial: '8FKYV64',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Dell Inc.'])?.id,
		modelId: modelComputer.find(model => model.name === 'Inspiron 14 5441')?.id,
		employeeId: 'obeltech20\Obeltech'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'OBELTECH20',
		processorId: processors.find(process =>
			'Snapdragon(R) X Plus X1P64100 Qualcomm(R) Oryon(TM) CPU'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'Inspiron 14 5441')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.82'
	},
	{
		serial: 'MXL8520YXH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'ggarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '900027TEC-1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8700T CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.146'
	},
	{
		serial: '1HF5351TKN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'arrosales'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SEGDATOS-005',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.22'
	},
	{
		serial: '1HF5351TJC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'cmaza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SEGDATOS-008',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.9'
	},
	{
		serial: '1HF5351TGR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jgomes'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'BNC-TECNO02-GEN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.227'
	},
	{
		serial: '1HF5351TH4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'TECNOWEB7',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.3.86'
	},
	{
		serial: 'MXL8521YDD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'liromero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'TEC-PROD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8700T CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.172'
	},
	{
		serial: 'MXL41801SF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'mcarrasco'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: '151015GRTESM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.97'
	},
	{
		serial: '1HF5351TM3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jperez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SOPORTECB02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.95'
	},
	{
		serial: '1HF51602Q9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'omota'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'DESIT12P1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.155'
	},
	{
		serial: '1HF51602Q0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'jquintal'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'GTEAGESTCERT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.2.140'
	},
	{
		serial: '1HF5351THB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mramos'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0]?.id,
		observation: '',
		computerName: 'SEGDATOS-009',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.220.1.81'
	},
	{
		serial: 'MXL41801T9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'abohorquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095209JURIDICAC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.60'
	},
	{
		serial: 'MXL8502P13',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'jalarcon'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095215-CTRYCART',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.94'
	},
	{
		serial: 'MXL41806XC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jofonseca'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095301ATCLIENT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.67'
	},
	{
		serial: 'MXL9123SW1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)')?.id,
		employeeId: 'yogonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095336-JDSECRET',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1123H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.75'
	},
	{
		serial: '5CG2139XLC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook 850 G8 Notebook PC')?.id,
		employeeId: 'rasandoval'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095409VPUAIR',
		processorId: processors.find(process =>
			'11th Gen Intel(R) Core(TM) i7 1185G7 @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 32,
		memoriaRamModules: transformarStringToArray(
			'16_16',
			modelComputer.find(model => model.name === 'HP EliteBook 850 G8 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.45'
	},
	{
		serial: 'MXL1370M2B',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.id,
		employeeId: 'ocolina'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095413PREVEN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'2_8_2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.13'
	},
	{
		serial: 'MXL051085F',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'maescalante'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095446-CJRIDCA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_2_2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.65'
	},
	{
		serial: 'MXL9092Q8X',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'emarquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095870-ACRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.85'
	},
	{
		serial: 'MXL41806W9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098029CALIDSERV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.225'
	},
	{
		serial: 'MJ00RZJH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z')?.id,
		employeeId: 'jemarin'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098093PREVEN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4430S CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M73z')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.160'
	},
	{
		serial: '1HF51602PK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'jealdana'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098125UPCLC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.181'
	},
	{
		serial: '5CG2219SRP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook 840 G8 Notebook PC')?.id,
		employeeId: 'lpulido'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098136OFCPRE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 1145G7 CPU @ 2.60GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteBook 840 G8 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.37'
	},
	{
		serial: 'MXL9161ZRW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF')?.id,
		employeeId: 'hcalatayud'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098145TESOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8700 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101903'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.56'
	},
	{
		serial: 'MXL41801F3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jgarrido'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098166ASISTEJEC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1020H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.13'
	},
	{
		serial: 'MXL41806Z1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jealdana'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098337PREVEN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_4_2',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.145'
	},
	{
		serial: 'MXL4020TQ5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF')?.id,
		employeeId: 'fagarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098351RECEPPRES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 3470 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.43'
	},
	{
		serial: 'MJMMHPZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'dcardenas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098419MNITPRV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.129'
	},
	{
		serial: 'MXL41801FT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'dasulbaran'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095085-BOVDA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.14'
	},
	{
		serial: 'MXL41801GP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'fagustin'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095713INMUE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.3.165'
	},
	{
		serial: 'MXL5260NKM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'josbhernandez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095808RECLAMOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.53'
	},
	{
		serial: 'MXL41801GL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'mcaprasio'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098019BANCMUL',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.20'
	},
	{
		serial: 'MXL3201T0F',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'yabriceno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098050BCAINS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 10,
		memoriaRamModules: transformarStringToArray(
			'2_8',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.63'
	},
	{
		serial: 'MXL41801S0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'rvivenes'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098120UPCLCFT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
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
		ipAddress: '10.225.107.119'
	},
	{
		serial: '1HF5351TLB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'bncmcafee'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098134-AUDITO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.91'
	},
	{
		serial: 'MXL318182B',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'vvarani'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098148UPCLCFT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.32'
	},
	{
		serial: '1HF5351TH0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'nyepez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098396AUDIT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.230'
	},
	{
		serial: '1HF5351TMM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'vijimenez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098594AUDINT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.105'
	},
	{
		serial: '1HF5351TL7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mcarrillo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098601-VPMULT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.163'
	},
	{
		serial: 'MJ04CSN1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'sfernandez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ASISTVPCORP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.115'
	},
	{
		serial: 'MXL852138X',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'vsuarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ASISTVPPISO03',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8700T CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.198'
	},
	{
		serial: 'MXL41806XS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'cmilano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'CECOM001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.1.59'
	},
	{
		serial: 'MXL9142T00',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'mamorales'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'DGN143-CREDIT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.75'
	},
	{
		serial: 'MJ00XUDN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z')?.id,
		employeeId: 'lpalazzi'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'EFICIENCIAP11',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4430S CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.100'
	},
	{
		serial: 'MXL41801FX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'dbasanta'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'GCIAINFOFINA1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.150'
	},
	{
		serial: 'MJ04HSVX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'apaolini'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'GTEAMERCADEO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.242'
	},
	{
		serial: 'MXL4020SQD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF')?.id,
		employeeId: 'jpepper'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHHAPRNDZ01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 3470 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_2_2',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.60'
	},
	{
		serial: '5CG12123MH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook 850 G7 Notebook PC')?.id,
		employeeId: 'druiz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SECJUNTDIRET',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 10510U CPU @ 1.80GHz'.includes(process.number_model)
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
		ipAddress: '10.225.112.95'
	},
	{
		serial: 'MXL9341ZK0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.id,
		employeeId: 'juntasbnc'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SALAP9',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.88'
	},
	{
		serial: 'MXL02610L8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'UNIDADPCLC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_2_2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.147'
	},
	{
		serial: '1HF5351TLF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mapino'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A220004BANCACOM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.110'
	},
	{
		serial: '5CG950552T',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook x360 830 G6')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'GTE-NEGEINNOVAC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 8665U CPU @ 1.90GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteBook x360 830 G6')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.230'
	},
	{
		serial: '1HF5351TL0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'orgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'DOYTCALIDAD1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.72'
	},
	{
		serial: 'MXL41806X9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'afagundez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SERVMEDI1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
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
		ipAddress: '10.225.5.24'
	},
	{
		serial: 'MXL3201WH7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'cvelandia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095211-SDCATO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_4_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.206'
	},
	{
		serial: 'MXL4201N26',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'gcolmenares'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '010048INVSTIG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 4770 CPU @ 3.40GHz'.includes(process.number_model)
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
		ipAddress: '10.225.6.58'
	},
	{
		serial: '1HF5351TJ0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jbrowh'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098CORRESPONS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.50'
	},
	{
		serial: 'MJ04CSPQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'jsouquett'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '00122-ZONAI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.35'
	},
	{
		serial: 'MXL5260NLC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'darcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095011-BOVDA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4_8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.16'
	},
	{
		serial: 'MXL41801B2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'dpontes'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095026BNCPERSO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.99'
	},
	{
		serial: 'MXL41804WK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'pmolina'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095063ANALCRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.76'
	},
	{
		serial: '1HF5351THR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'edcaraballo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095064ADMAG1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.62'
	},
	{
		serial: 'MXL41801D0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'casalazar'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098072SISTCOM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.99'
	},
	{
		serial: 'MJ03JPNH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'lchang'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095082CAISOPRT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'4_2',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.8'
	},
	{
		serial: 'MXL41801RQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'cpena'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095487CURAZAO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.52'
	},
	{
		serial: 'MXL90110PJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.id,
		employeeId: 'rigutierrez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'UAIR072025',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.170'
	},
	{
		serial: '1HF5351TJG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'johrodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098375-AUDITO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.26'
	},
	{
		serial: '1HF5351TL8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'nbrito'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'FIDEI095186A',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.72'
	},
	{
		serial: '1HF5351TN0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'sroque'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095247-COMP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.98'
	},
	{
		serial: '1HF5351TKB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ymorales'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095247RRHH',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.35'
	},
	{
		serial: '1HF5351TMK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'anarodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SEGURO-001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.14'
	},
	{
		serial: '1HF5351TGY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jnieto'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095441ARCANT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.89'
	},
	{
		serial: 'MXL41804WQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'bsanchez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095466CTRSEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.95'
	},
	{
		serial: '1HF5351TKH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'fdoveri'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095514OYPROCES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.110'
	},
	{
		serial: '1HF51602SG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'tgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'R095533RRHH',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.23'
	},
	{
		serial: '1HF51602QF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'aperez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095674-ACCIONI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.21'
	},
	{
		serial: 'MXL41801D6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'bbolivar'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095703CAGROPC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.12'
	},
	{
		serial: '1HF5351TJJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'naaponte'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098310ACCI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.23'
	},
	{
		serial: 'MXL41804YK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'cazambrano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095756PLANIFCA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.99'
	},
	{
		serial: 'MXL41801TD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'ecardona'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095817CONSULJUR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_4_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.68'
	},
	{
		serial: 'MJ51X69',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'yavelasquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095024BACKOFFI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.19'
	},
	{
		serial: '1HF5351TM5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jmarquina'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095991AUDIT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.27'
	},
	{
		serial: '1HF51602RP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'pbovy'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095998-SEVADMIN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.3.168'
	},
	{
		serial: '1HF5351TML',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'marpalacios'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098056AUDITOR2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.88'
	},
	{
		serial: 'MXL41804WP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jferrer'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098071OPTESOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.69'
	},
	{
		serial: '1HF5351THY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'marperez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098081RRHH',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.135'
	},
	{
		serial: '1HF5351TNH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'dcorona'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095601AUINT1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.89'
	},
	{
		serial: '1HF51602QS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'nbetancourt'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095219VPCGTN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.51'
	},
	{
		serial: '1HF51602RV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'bcanelon'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098164VPREGNEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.51'
	},
	{
		serial: 'MXL41801G6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'nfinol'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098512CONDECR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 10,
		memoriaRamModules: transformarStringToArray(
			'2_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.77'
	},
	{
		serial: '1HF5351TN6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jesulopez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098250RRHHA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.34'
	},
	{
		serial: 'MJHEVTX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'romarquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(053)'])[0]?.id,
		observation: '',
		computerName: '053016GRTESSR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.53.16'
	},
	{
		serial: 'MXL41804Y9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'iochoa'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098556SERJURID',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.133'
	},
	{
		serial: '1HF5351TK5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'aavendano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VP-RRHHCULTORGA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.124'
	},
	{
		serial: '1HF5351TKZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'irestrepo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'CORRESPONSALIA1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.44'
	},
	{
		serial: '1HF5351TMW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'vlopez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098182GTEPRDSR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.106'
	},
	{
		serial: 'MJ00XUBZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z')?.id,
		employeeId: 'amtorres'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A98246MRCDEO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4430S CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.73'
	},
	{
		serial: '1HF5351TKS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lvalor'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A048349TRNS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.21'
	},
	{
		serial: '1HF5351TM2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'llovera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095009PROCSOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.105'
	},
	{
		serial: 'MXL41804TC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jepina'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095012GCIAADM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'8_2_2',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.99'
	},
	{
		serial: '1HF5351TGF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ydaza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095016CHRR1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.132'
	},
	{
		serial: '1HF5351TMP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'prodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095116ORGPRO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.106'
	},
	{
		serial: '1HF5351TG7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mfigueroa'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095192ORGYPRO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.109'
	},
	{
		serial: 'MXL41801BY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'ycastillo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095225ARCRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 10,
		memoriaRamModules: transformarStringToArray(
			'2_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.86'
	},
	{
		serial: '1HF5351TKT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'josmlopez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RHNOM095315',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.93'
	},
	{
		serial: '1HF5351TGQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'anaortiz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095355UAIR01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.41'
	},
	{
		serial: '1HF5351TNC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'yuvarela'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095506CARCRED1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.93'
	},
	{
		serial: '1HF5351TGG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'oleon'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095627FORMA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.22'
	},
	{
		serial: 'MJ04CSP3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'dmanrrique'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '095922AGEN2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.9.31'
	},
	{
		serial: '1HF5351TMQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lsobrado'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095040-BNCAUT2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.175'
	},
	{
		serial: '1HF5351TLP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mareyes'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095999AUDITOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.24'
	},
	{
		serial: 'MJMLYGC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'cbarrios'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098048PROM3',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.68'
	},
	{
		serial: '1HF5351TJP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'gamarquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098066INTNEG01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.30'
	},
	{
		serial: '1HF5351TLZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'aabreu'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098072-RRHH',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.133'
	},
	{
		serial: 'MJ08H51R',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'aprado'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(230)'])[0]?.id,
		observation: '',
		computerName: '23005CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.230.15'
	},
	{
		serial: 'MXL5260NJJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'egcontreras'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098089PROYSER',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.104'
	},
	{
		serial: '1HF5351TGD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'iflores'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098136AUDI1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.87'
	},
	{
		serial: '1HF5351TMT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jcordero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098383FINANPRE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.111'
	},
	{
		serial: '1HF5351TL4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lalarcon'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098171PLANPR1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.81'
	},
	{
		serial: 'MJ04CSP6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'kguillen'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098191-PROYSER',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.112'
	},
	{
		serial: '1HF5351TGC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'landrade'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPDESSAROLLO01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.120'
	},
	{
		serial: '1HF5351TH9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'yuzcategui'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098195PROYSE1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.110'
	},
	{
		serial: 'MXL41801VW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'jobriceno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098038POSTMERC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
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
		ipAddress: '10.225.2.117'
	},
	{
		serial: '1HF5351TJH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lramos'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098223-MEDPAG1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.149'
	},
	{
		serial: '1HF5351TKJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098245AUDIINTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.25'
	},
	{
		serial: '1HF51602R6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'daraque'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098249OPRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.117'
	},
	{
		serial: '1HF51602PT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'Ialbarracin'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098301VPCGTION',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.36'
	},
	{
		serial: '1HF5351TJ7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'epineda'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098336PROYSRV1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.113'
	},
	{
		serial: '1HF5351TLX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'erserrano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098337CC1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.17'
	},
	{
		serial: '1HF5351TKQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'vcastro'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098340AUDIT0R',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.218'
	},
	{
		serial: '1HF5351TGK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jhsanchez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098360ORGYPRO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.125'
	},
	{
		serial: '1HF5351TLK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'gfernandez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098403INTELNEG1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.42'
	},
	{
		serial: '1HF5351TJ4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098406SEG01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.3.62'
	},
	{
		serial: '1HF5351TNL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'klozada'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098423RRHH',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.20'
	},
	{
		serial: '1HF5351TNG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'faleal'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'D98435ORGPRO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.62'
	},
	{
		serial: '1HF5351TGV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jmoncada'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098502ORGPROS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.104'
	},
	{
		serial: '1HF5351TN4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'agarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '085514OYPROCESS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.108'
	},
	{
		serial: '1HF5351TJM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jalinares'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098540-RRHH',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.139'
	},
	{
		serial: '1HF5351TH5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'gcontreras'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098546-AUDITOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.169'
	},
	{
		serial: '1HF5351TKF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jgandica'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098547AUDITO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.6.168'
	},
	{
		serial: '1HF5351TMD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jegraterol'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '09B552ORGPRO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.142'
	},
	{
		serial: '1HF5351TK2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lejimenez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098688-FIDUCI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.123'
	},
	{
		serial: '1HF5351TGZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lbermudez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'B154023BCMGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.10.80'
	},
	{
		serial: '1HF5351TN8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'C220022RECLAMOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.126'
	},
	{
		serial: 'MXL41801CL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'drondon'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ADMDEINMU01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.99'
	},
	{
		serial: '1HF5351TLQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'abaptista'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ASISTDORGTRANS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.54'
	},
	{
		serial: '1HF5351TLJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'yalvarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098223CH-RRHH1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.131'
	},
	{
		serial: '1HF5351TK9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'kotamendis'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'GTEORGYPRO01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.33'
	},
	{
		serial: 'MXL41801F4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'lrojas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'D095047-ADMIN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.72'
	},
	{
		serial: '1HF5351TKM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lameza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095056ANCRE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.78'
	},
	{
		serial: '1HF5351TMG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'bdeandrade'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'DESORGYTRAN1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.84'
	},
	{
		serial: '1HF5351TLR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'jopacheco'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'AGN058FIDEICOM1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.76'
	},
	{
		serial: '1HF5351TMN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'eagreda'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'INDCALIDAD001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.130'
	},
	{
		serial: '1HF5351TJ1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'anagonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'BINMUEBLE003',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.3.60'
	},
	{
		serial: '1HF5351TGM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lsantiago'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'DESKTOP-82ARBS3',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.3.73'
	},
	{
		serial: '1HF5351TJV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'daugello'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098554-MEDDIG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.2.220'
	},
	{
		serial: '1HF51602R2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'mguilarte'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SOPORTE003',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.151'
	},
	{
		serial: '1HF5351THF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'ctovar'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ASISTENTEPRESID',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.112.28'
	},
	{
		serial: '1HF5351TLC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'eguerrero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHHASISTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.12'
	},
	{
		serial: '1HF5351THS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'garteaga'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHH-SEGS01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.96'
	},
	{
		serial: '1HF5351TG9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'eserpa'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'GESTPERSO001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.18'
	},
	{
		serial: '1HF5351TGS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mvalladares'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098601GESPROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.90'
	},
	{
		serial: '1HF5351TM0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'saure'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPEDESORGYTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.86'
	},
	{
		serial: '1HF5351TL2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'lmoreno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPORGTRANS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.156'
	},
	{
		serial: '1HF51602QX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'jcardenas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098419UPCLC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.100'
	},
	{
		serial: '1HF5351TMH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'dnavarro'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'BANINTER001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.140'
	},
	{
		serial: '1HF5351TL3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'vchitgian'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A095452-CREDITO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.107.84'
	},
	{
		serial: 'MXL41804VK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'yecastro'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: '098584ACRED',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_2_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.99'
	},
	{
		serial: '1HF5351TKV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'kdiaz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098286NEGINTER',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.45'
	},
	{
		serial: '1HF5351TGB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'rpuentes'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A098286-CTRLPRF',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.82'
	},
	{
		serial: '1HF5351TL6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'gdugarte'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHH098252A',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.38'
	},
	{
		serial: '1HF5351THW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'flacruz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHHP5DESKTOP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.109'
	},
	{
		serial: '1HF5351TM1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'mfernandez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'A154005CURAZAO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.8.43'
	},
	{
		serial: '1HF5351TH7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'aspalacios'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'DGC160RECLATDC1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.4.51'
	},
	{
		serial: '1HF5351THQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'gabgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHH-COORDSELEC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.15'
	},
	{
		serial: '1HF5351TK1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'raleman'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'ARRHHFORM003',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.141'
	},
	{
		serial: '1HF5351TJW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'cprieto'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'RRHH-SELECTALEN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.210'
	},
	{
		serial: 'MXL41801DQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'snacad'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'SERVMEDICOS1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.5.205'
	},
	{
		serial: '1HF5351TKX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.id,
		employeeId: 'anmarin'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		observation: '',
		computerName: 'VPEDOYTGERE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700T CPU @ 1.3GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Pro Mini 400 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.225.108.50'
	},
	{
		serial: 'MJMMCMB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'respanol'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: '001020ENEGCS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		serial: 'MJMMENR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'borellana'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(255)'])[0]?.id,
		observation: '',
		computerName: '010003PROMTE',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.255.18'
	},
	{
		serial: 'MJ08H53M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'tmarquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0]?.id,
		observation: '',
		computerName: '011015CJERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.11.20'
	},
	{
		serial: 'MJMMFGB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mebastidas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0]?.id,
		observation: '',
		computerName: '012023PROMOT',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.12.21'
	},
	{
		serial: 'MXJ00700LR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jocarmona'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(013)'])[0]?.id,
		observation: '',
		computerName: '013008CDNDR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.13.19'
	},
	{
		serial: 'MJ04CSQJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'iblanco'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0]?.id,
		observation: '',
		computerName: '014008COORD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.14.17'
	},
	{
		serial: 'MJMLYHM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0]?.id,
		observation: '',
		computerName: '014011ENEGOCIO',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.14.12'
	},
	{
		serial: 'MJ04HSXA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'AGUTIERREZ'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0]?.id,
		observation: '',
		computerName: '01404SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.14.10'
	},
	{
		serial: 'MJMLYML',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'adgraterol'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0]?.id,
		observation: '',
		computerName: '01412PROMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.14.15'
	},
	{
		serial: 'MXJ90702TS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'naular'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(029)'])[0]?.id,
		observation: '',
		computerName: '029007CDINA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5_1_0.5_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.29.19'
	},
	{
		serial: 'MJMMFKD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'pgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(029)'])[0]?.id,
		observation: '',
		computerName: '02905PRMTORES',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.29.15'
	},
	{
		serial: 'MXL0430B1M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jeaponte'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(035)'])[0]?.id,
		observation: '',
		computerName: '035018GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.35.52'
	},
	{
		serial: 'MJ08H4TQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'darias'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(042)'])[0]?.id,
		observation: '',
		computerName: '042006CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.42.25'
	},
	{
		serial: 'MXJ00601MN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'kgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(045)'])[0]?.id,
		observation: '',
		computerName: '045034ANGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.45.10'
	},
	{
		serial: 'MXJ90704MF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'krgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(047)'])[0]?.id,
		observation: '',
		computerName: '047004PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.47.18'
	},
	{
		serial: 'MJMMCAV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'lurojas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0]?.id,
		observation: '',
		computerName: '052025GOPRTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.52.13'
	},
	{
		serial: 'MJ08G783',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'girangel'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(059)'])[0]?.id,
		observation: '',
		computerName: '05904CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.59.17'
	},
	{
		serial: 'MJMLYRK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'angutierrez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(063)'])[0]?.id,
		observation: '',
		computerName: '063011GOPRTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'2_4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.63.10'
	},
	{
		serial: 'MJ08H81H',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'jaserrano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(063)'])[0]?.id,
		observation: '',
		computerName: '06313CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.63.19'
	},
	{
		serial: 'MJMLYKY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'vlaguna'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(057)'])[0]?.id,
		observation: '',
		computerName: '057007ANGCIOS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'2_4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.57.25'
	},
	{
		serial: 'MXL41806ZQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'llanda'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(071)'])[0]?.id,
		observation: '',
		computerName: '07106GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.71.11'
	},
	{
		serial: 'MJ08H51B',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'andromero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(071)'])[0]?.id,
		observation: '',
		computerName: '07109CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.71.16'
	},
	{
		serial: 'MJ04CSQ6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'npena'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(076)'])[0]?.id,
		observation: '',
		computerName: '07602SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.76.13'
	},
	{
		serial: 'MXJ00601KG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'suherrera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(080)'])[0]?.id,
		observation: '',
		computerName: '0800066CORDNDS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.80.7'
	},
	{
		serial: 'MJ08G787',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'yostos'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(088)'])[0]?.id,
		observation: '',
		computerName: '088003CJERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.88.17'
	},
	{
		serial: 'MJ08H4T2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'fasuaje'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(088)'])[0]?.id,
		observation: '',
		computerName: '088012CJERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.88.16'
	},
	{
		serial: 'MXL11025SW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'gsanchez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(246)'])[0]?.id,
		observation: '',
		computerName: '246001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Quad Q8400 CPU @ 2.66GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.246.19'
	},
	{
		serial: '1HF51602R0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'cguevara'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: '098029AGNEGOCI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.31'
	},
	{
		serial: 'MJMMFDF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'magomez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(099)'])[0]?.id,
		observation: '',
		computerName: '09906SUBGTE',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.99.19'
	},
	{
		serial: 'MJ08H7YK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'josalvarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(104)'])[0]?.id,
		observation: '',
		computerName: '104009CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.104.9'
	},
	{
		serial: 'MJMLYBP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(107)'])[0]?.id,
		observation: '',
		computerName: '107015ENGCIOS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.107.30'
	},
	{
		serial: 'MXL3201W3R',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'cvarela'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(109)'])[0]?.id,
		observation: '',
		computerName: '109002ENGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.109.26'
	},
	{
		serial: 'MXJ00503ST',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'mfrontado'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(109)'])[0]?.id,
		observation: '',
		computerName: '109004PROMO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.109.18'
	},
	{
		serial: '1HF51602PH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'drico'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0]?.id,
		observation: '',
		computerName: '110024GTZGY',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.110.31'
	},
	{
		serial: 'MJMMCZV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'ydelpino'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0]?.id,
		observation: '',
		computerName: '110027GOPRTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.110.35'
	},
	{
		serial: 'MXL051086V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'baraque'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127072ESPNEGOC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.79'
	},
	{
		serial: 'MXL02610FQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'rvera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(074)'])[0]?.id,
		observation: '',
		computerName: '129006ENEGOC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.74.18'
	},
	{
		serial: 'MJMMETV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'vacolmenarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142010PROMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.142.20'
	},
	{
		serial: 'MJ08H50Z',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'ancolmenarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(144)'])[0]?.id,
		observation: '',
		computerName: '144008CJAERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.144.12'
	},
	{
		serial: 'MJMLYEP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'glugo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(144)'])[0]?.id,
		observation: '',
		computerName: '144009PRMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.144.15'
	},
	{
		serial: 'MJMLXZZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'earay'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(151)'])[0]?.id,
		observation: '',
		computerName: '151014ENGCIOS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.151.15'
	},
	{
		serial: 'MXL3201W3W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'abeltran'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0]?.id,
		observation: '',
		computerName: '153003GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.153.20'
	},
	{
		serial: 'MXL41801RT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'sgonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(163)'])[0]?.id,
		observation: '',
		computerName: '16302SUBGTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
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
		ipAddress: '10.100.163.16'
	},
	{
		serial: 'MJ08H809',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'bflores'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(168)'])[0]?.id,
		observation: '',
		computerName: '16806CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.168.17'
	},
	{
		serial: 'MJMMELZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'jmerchan'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(181)'])[0]?.id,
		observation: '',
		computerName: '181025PRMT',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.181.20'
	},
	{
		serial: 'MJMMFEH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mrivas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(202)'])[0]?.id,
		observation: '',
		computerName: '202003CORDND',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.202.11'
	},
	{
		serial: 'MXL5260NK8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'lumorales'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(206)'])[0]?.id,
		observation: '',
		computerName: '206006CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.206.21'
	},
	{
		serial: 'MJ04HSVH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(209)'])[0]?.id,
		observation: '',
		computerName: '209004PROMOT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
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
		ipAddress: '192.168.97.198'
	},
	{
		serial: 'MJMMHDR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'wbarrera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(209)'])[0]?.id,
		observation: '',
		computerName: '209006GTOPRTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '192.168.97.199'
	},
	{
		serial: 'MJ04CSN3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'ovaquero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(209)'])[0]?.id,
		observation: '',
		computerName: '20905CAJERO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
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
		ipAddress: '192.168.97.204'
	},
	{
		serial: 'MXL0260WQC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'djimenez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(213)'])[0]?.id,
		observation: '',
		computerName: '21305PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.213.13'
	},
	{
		serial: 'MXJ94500XH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'davila'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(214)'])[0]?.id,
		observation: '',
		computerName: '214009ENGCS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.214.18'
	},
	{
		serial: 'MXL5260NKQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'mmonterrey'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(203)'])[0]?.id,
		observation: '',
		computerName: '203002SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.203.15'
	},
	{
		serial: 'MXJ00601J8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'earcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127110ESPNEGOC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.83'
	},
	{
		serial: 'MJ03JPNZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'ecaldera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(220)'])[0]?.id,
		observation: '',
		computerName: '220031VPZ3',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.220.10'
	},
	{
		serial: 'MXJ906075W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'didelgado'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(129)'])[0]?.id,
		observation: '',
		computerName: '129006PMOT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_0.5_1_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.129.20'
	},
	{
		serial: 'MXJ947086C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'gorta'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(129)'])[0]?.id,
		observation: '',
		computerName: '129019CRDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.129.13'
	},
	{
		serial: 'MXL41806YS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'ccalanche'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(133)'])[0]?.id,
		observation: '',
		computerName: '133001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.133.15'
	},
	{
		serial: 'MJMMFFR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'kasalazar'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(165)'])[0]?.id,
		observation: '',
		computerName: '165019ENEGCS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.165.16'
	},
	{
		serial: 'MXJ94500Q6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'ycazano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(156)'])[0]?.id,
		observation: '',
		computerName: '241007CORDNAD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.100.156.16'
	},
	{
		serial: 'MXL0260ZDX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'ysuescuns'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(196)'])[0]?.id,
		observation: '',
		computerName: '241009PRMTO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.196.28'
	},
	{
		serial: 'MXL0510896',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'nocastillo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(148)'])[0]?.id,
		observation: '',
		computerName: '243008ANGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.100.148.24'
	},
	{
		serial: 'MXJ94500W4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jortega'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(244)'])[0]?.id,
		observation: '',
		computerName: '244007COORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.244.13'
	},
	{
		serial: 'MJMMERW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'maular'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(253)'])[0]?.id,
		observation: '',
		computerName: '253013ENEGG',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.253.19'
	},
	{
		serial: 'MXL318182V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'dalvarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(254)'])[0]?.id,
		observation: '',
		computerName: '254001GRTESAVU',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.54.22'
	},
	{
		serial: 'MJMMEVX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'yugarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(254)'])[0]?.id,
		observation: '',
		computerName: '254013PRMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.54.20'
	},
	{
		serial: 'MJ08H51S',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'yugarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(254)'])[0]?.id,
		observation: '',
		computerName: '254015CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.102.54.13'
	},
	{
		serial: 'MXL31817MT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'fabriceno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(254)'])[0]?.id,
		observation: '',
		computerName: '254018GTOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.54.10'
	},
	{
		serial: 'MXL051087P',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jpoleo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(255)'])[0]?.id,
		observation: '',
		computerName: '255008CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.255.13'
	},
	{
		serial: 'MJMMCLA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'cgallardo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(257)'])[0]?.id,
		observation: '',
		computerName: '257013GRNTES',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.102.57.11'
	},
	{
		serial: 'MXJ9470878',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jgil'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0]?.id,
		observation: '',
		computerName: '264007ASNEGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.64.16'
	},
	{
		serial: 'MXL3201WNH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'josrodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0]?.id,
		observation: '',
		computerName: '264009CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.64.14'
	},
	{
		serial: 'MXJ00700KS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'glhernandez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(265)'])[0]?.id,
		observation: '',
		computerName: '265002GOPERAT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.65.19'
	},
	{
		serial: 'MXL02610G5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'fleal'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(265)'])[0]?.id,
		observation: '',
		computerName: '265007ANGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.65.14'
	},
	{
		serial: 'MJ08H54J',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'bmendoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(267)'])[0]?.id,
		observation: '',
		computerName: '267006CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.102.67.13'
	},
	{
		serial: 'MXL3201WNJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'tgomez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(268)'])[0]?.id,
		observation: '',
		computerName: '268001GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.68.26'
	},
	{
		serial: 'MXL04309ZF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'mariagonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(272)'])[0]?.id,
		observation: '',
		computerName: '272003GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.72.26'
	},
	{
		serial: 'MJBPHFN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'aavilan'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(272)'])[0]?.id,
		observation: '',
		computerName: '272010ENGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz'.includes(process.number_model)
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
		ipAddress: '10.102.72.25'
	},
	{
		serial: 'MJMMEXT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'yguanda'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(273)'])[0]?.id,
		observation: '',
		computerName: '273007ENGCOS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.102.73.15'
	},
	{
		serial: 'MJMLXXF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'lmendoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(257)'])[0]?.id,
		observation: '',
		computerName: '275011ENGCIOS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.57.18'
	},
	{
		serial: 'MXL0430B5P',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'dparica'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(019)'])[0]?.id,
		observation: '',
		computerName: '275019ENGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.19.24'
	},
	{
		serial: 'MJ62331',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M58e')?.id,
		employeeId: 'leperez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(282)'])[0]?.id,
		observation: '',
		computerName: '282013GTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7400 CPU @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'1_2',
			modelComputer.find(model => model.name === 'ThinkCentre M58e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.82.11'
	},
	{
		serial: 'MXL31817Q8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'raranguren'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(283)'])[0]?.id,
		observation: '',
		computerName: '283007GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.83.26'
	},
	{
		serial: 'MXJ94709XG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'smartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(284)'])[0]?.id,
		observation: '',
		computerName: '284007PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.102.84.18'
	},
	{
		serial: 'MJMTGBZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mmalave'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(285)'])[0]?.id,
		observation: '',
		computerName: '285002GERTES',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.102.85.10'
	},
	{
		serial: 'MJ39M02',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'marrodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(534)'])[0]?.id,
		observation: '',
		computerName: '534009GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.105.34.10'
	},
	{
		serial: 'MJTYPFB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'yacedeno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(552)'])[0]?.id,
		observation: '',
		computerName: '552002GOPRTVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.105.52.10'
	},
	{
		serial: 'MJ08H80R',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'micontreras'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: '98015CJRO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.98.15'
	},
	{
		serial: '1HF51602QV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'bmendez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A001050GOPRTVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.60'
	},
	{
		serial: 'MXJ00609N1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'midiaz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0]?.id,
		observation: '',
		computerName: '166018PROMTRES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.166.11'
	},
	{
		serial: '1HF51602RJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'yrodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A098005ENEGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.24'
	},
	{
		serial: '1HF51602S2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'dsequera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A098024PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.30'
	},
	{
		serial: 'MXL0502DSM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'aalfonzo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(130)'])[0]?.id,
		observation: '',
		computerName: 'A130002SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.130.12'
	},
	{
		serial: 'MXL1390T81',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.id,
		employeeId: 'evelasquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0]?.id,
		observation: '',
		computerName: 'A280007ASESORNE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.146.64'
	},
	{
		serial: 'MJ04CSNL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'dcova'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0]?.id,
		observation: '',
		computerName: 'A281001GTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.105.42.18'
	},
	{
		serial: 'MJ08H7ZA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'hepereira'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(324)'])[0]?.id,
		observation: '',
		computerName: 'A325007CAJ',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.201.150.11'
	},
	{
		serial: '1HF51602RT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'ccarrasquel'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'AGROSALEJE2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.33'
	},
	{
		serial: '1HF51602PN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'saguilarte'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'AGROSALPRO08',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.17'
	},
	{
		serial: 'MJ04HSUP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'jnocente'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(088)'])[0]?.id,
		observation: '',
		computerName: 'CGA08GTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.88.21'
	},
	{
		serial: '5CD147191H',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Laptop 15t-dy200')?.id,
		employeeId: 'diruiz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: 'VPNEGO-CARAB',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 1165G7 CPU @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP Laptop 15t-dy200')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1123H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.158'
	},
	{
		serial: 'MJ08H4ZY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'dgarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0]?.id,
		observation: '',
		computerName: 'CJERO01210',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.12.12'
	},
	{
		serial: 'MJ08H4VP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'yosuarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0]?.id,
		observation: '',
		computerName: 'CJERO05207',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.52.14'
	},
	{
		serial: 'MJ08H4VW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'josearodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0]?.id,
		observation: '',
		computerName: 'CJERO11007',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '192.168.73.16'
	},
	{
		serial: 'MJ08H7Y4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'jjari'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(151)'])[0]?.id,
		observation: '',
		computerName: 'CJERO15116C',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1021H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.151.30'
	},
	{
		serial: 'MJ08H814',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'diugonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(282)'])[0]?.id,
		observation: '',
		computerName: 'CJERO28212',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.82.25'
	},
	{
		serial: 'MJ08H81F',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'gcardenas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(035)'])[0]?.id,
		observation: '',
		computerName: 'CJERO35021',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.35.25'
	},
	{
		serial: 'MJ08H53L',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'anmoya'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
		observation: '',
		computerName: 'CJRO001013',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.1.30'
	},
	{
		serial: 'MJBPHCN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'tcedeno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0]?.id,
		observation: '',
		computerName: '011004GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.11.16'
	},
	{
		serial: 'MXL31600B7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'ealbornoz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(013)'])[0]?.id,
		observation: '',
		computerName: '013023GOPRTVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.13.10'
	},
	{
		serial: 'MXJ94500WN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jananguren'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0]?.id,
		observation: '',
		computerName: '171020ANEGCS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.171.20'
	},
	{
		serial: '5CD1421BQ8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProBook 450 G8 Notebook PC')?.id,
		employeeId: 'laranguren'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: 'A021012VPARGUA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 1165G7 CPU @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 32,
		memoriaRamModules: transformarStringToArray(
			'16_16',
			modelComputer.find(model => model.name === 'HP ProBook 450 G8 Notebook PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.72'
	},
	{
		serial: '1HF51602S9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'vgraterol'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: '021062VPZARGUAI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.73'
	},
	{
		serial: 'MJMMFKV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(042)'])[0]?.id,
		observation: '',
		computerName: '042008GRNTS',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.42.11'
	},
	{
		serial: 'MJMLXWK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'rorozco'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(043)'])[0]?.id,
		observation: '',
		computerName: '043022PRMTOR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.43.10'
	},
	{
		serial: 'MJ39M34',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'dgalindez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(043)'])[0]?.id,
		observation: '',
		computerName: '043018GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.43.12'
	},
	{
		serial: 'MXL41801FN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'ymendez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(165)'])[0]?.id,
		observation: '',
		computerName: '13701GERENT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.165.14'
	},
	{
		serial: 'MJMLYCZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'yumartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)T'])[0]?.id,
		observation: '',
		computerName: '050017PRMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.4.16'
	},
	{
		serial: 'MXJ94709W2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'OVALDERREY'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(235)'])[0]?.id,
		observation: '',
		computerName: '235003PROM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.235.14'
	},
	{
		serial: 'MJMMHNP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'clacruz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(051)'])[0]?.id,
		observation: '',
		computerName: '051019GOPERTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.51.11'
	},
	{
		serial: 'MJ03JPRE',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'dparedes'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0]?.id,
		observation: '',
		computerName: '052008VPZ3',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.52.11'
	},
	{
		serial: 'MXL04309Y6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'ezarate'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0]?.id,
		observation: '',
		computerName: 'A052009-PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.100.52.10'
	},
	{
		serial: 'MXL0430B53',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'mpupo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(055)'])[0]?.id,
		observation: '',
		computerName: '055014ESPNEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_2_2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.55.14'
	},
	{
		serial: 'MJHERCH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'angimartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(055)'])[0]?.id,
		observation: '',
		computerName: '055042PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.55.25'
	},
	{
		serial: 'MXL0260WS0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'adurand'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(056)'])[0]?.id,
		observation: '',
		computerName: '056039CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
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
		serial: 'MXL1390TBR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.id,
		employeeId: 'damendoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(059)'])[0]?.id,
		observation: '',
		computerName: '059018CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.59.11'
	},
	{
		serial: 'MJ017ZV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'fortega'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(059)'])[0]?.id,
		observation: '',
		computerName: '059016GOPERTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.59.12'
	},
	{
		serial: 'MJXKDCD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'fpoleo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0]?.id,
		observation: '',
		computerName: '153005ENEGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2130 CPU @ 3.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.153.16'
	},
	{
		serial: 'MXJ7130596',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor')?.id,
		employeeId: 'frmartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(230)'])[0]?.id,
		observation: '',
		computerName: 'A230007ASNEG',
		processorId: processors.find(process => 'Intel(R) Pentium(R) D CPU 945 3.40GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'1_0.5_0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.230.20'
	},
	{
		serial: 'MJ04CSMU',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'gcumare'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(071)'])[0]?.id,
		observation: '',
		computerName: '071008ASESNEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.71.18'
	},
	{
		serial: 'MJMLYVH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mavelasquez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(103)'])[0]?.id,
		observation: '',
		computerName: '103001GOPRTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.103.10'
	},
	{
		serial: 'MJMLYFA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'sdurand'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127013NEGOCIO1',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.150'
	},
	{
		serial: 'MJMLYFX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'iespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127092AGENP2',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.71'
	},
	{
		serial: 'MXL051084V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'ejimenez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127016ASESO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.58'
	},
	{
		serial: 'MXL051089R',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'ylabrador'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127065BANCORP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.82'
	},
	{
		serial: 'MXL13702N7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.id,
		employeeId: 'rrojas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127027ENEGREG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.70'
	},
	{
		serial: 'MJ03JPSS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'lramirez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '12714GTENEG1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.154'
	},
	{
		serial: 'MXJ906076S',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'zliscano'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127042BACOFF',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.74'
	},
	{
		serial: 'MJ03JPP4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'lcastro'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(013)'])[0]?.id,
		observation: '',
		computerName: '013005GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'4_2',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.13.15'
	},
	{
		serial: 'MJMTGDD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'jmartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142006PRMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.142.10'
	},
	{
		serial: 'MJ04CSQH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'joespinoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0]?.id,
		observation: '',
		computerName: '146011CRDOPRT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.146.22'
	},
	{
		serial: 'MJHDHTZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'lesuarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0]?.id,
		observation: '',
		computerName: '153022CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.153.14'
	},
	{
		serial: 'MJ03JPP2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'ggudino'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(185)'])[0]?.id,
		observation: '',
		computerName: '127083GRETES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.185.26'
	},
	{
		serial: 'MXL05108B3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'acroce'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0]?.id,
		observation: '',
		computerName: '171018CRDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.171.10'
	},
	{
		serial: '1HF51602RL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'lmattey'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0]?.id,
		observation: '',
		computerName: '17602GZORT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.176.25'
	},
	{
		serial: 'MXL41806X8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'rvargas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0]?.id,
		observation: '',
		computerName: '176013GRTLCHR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz'.includes(process.number_model)
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
		ipAddress: '10.100.176.18'
	},
	{
		serial: '1HF51602Q5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'acanache'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0]?.id,
		observation: '',
		computerName: '176001GNGCL',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.176.27'
	},
	{
		serial: 'MJHETCC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(181)'])[0]?.id,
		observation: '',
		computerName: '181024CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.181.16'
	},
	{
		serial: 'MJXKDTW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'kigutierrez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(181)'])[0]?.id,
		observation: '',
		computerName: '181006GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2130 CPU @ 3.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.181.15'
	},
	{
		serial: 'MXL0260ZC7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(214)'])[0]?.id,
		observation: '',
		computerName: '214011GOPERTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.214.12'
	},
	{
		serial: 'MXL0260WMZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'jmillan'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(214)'])[0]?.id,
		observation: '',
		computerName: '214006PRMTRES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.214.16'
	},
	{
		serial: 'MJMMFBK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'yabreu'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(216)'])[0]?.id,
		observation: '',
		computerName: '216001CRDND',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.216.12'
	},
	{
		serial: 'MXL31817J7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'tsoto'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(219)'])[0]?.id,
		observation: '',
		computerName: '219007PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.219.13'
	},
	{
		serial: 'MJMTGBY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'jgelves'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(256)'])[0]?.id,
		observation: '',
		computerName: '256006PROMOT',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.102.56.20'
	},
	{
		serial: 'MXL31809W4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'rurodriguez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(257)'])[0]?.id,
		observation: '',
		computerName: '057014GOPERTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.57.19'
	},
	{
		serial: 'MXL3201W42',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'efgarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0]?.id,
		observation: '',
		computerName: '261009GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.61.18'
	},
	{
		serial: 'MXL31817QF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'argodoy'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0]?.id,
		observation: '',
		computerName: '261010ANEGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.61.13'
	},
	{
		serial: 'MJ13H97',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(271)'])[0]?.id,
		observation: '',
		computerName: '271003ASNEGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.50.57.32'
	},
	{
		serial: 'MXJ00700HX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'cbracamonte'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(272)'])[0]?.id,
		observation: '',
		computerName: '272004PRMTC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.102.72.21'
	},
	{
		serial: 'MXL3201W26',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'carmartinez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(273)'])[0]?.id,
		observation: '',
		computerName: '273013GOPRTV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.73.21'
	},
	{
		serial: 'MJMMERG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'cfarache'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(279)'])[0]?.id,
		observation: '',
		computerName: '279002GOPRTV',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.79.22'
	},
	{
		serial: 'MJ08H83D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'ecotogno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(281)'])[0]?.id,
		observation: '',
		computerName: '281004JCJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.102.81.11'
	},
	{
		serial: 'MJMMEWF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'adviazzo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(285)'])[0]?.id,
		observation: '',
		computerName: '285015PRMTOR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.102.85.17'
	},
	{
		serial: 'MJ08H519',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'ezrivas'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(285)'])[0]?.id,
		observation: '',
		computerName: '285012CAJROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.85.15'
	},
	{
		serial: 'MJHDKAG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'anramos'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(081)'])[0]?.id,
		observation: '',
		computerName: '081020CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.81.23'
	},
	{
		serial: 'MJMMETD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mcivira'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0]?.id,
		observation: '',
		computerName: '011026PRMTT',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.11.12'
	},
	{
		serial: 'MJMLYPA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'jzamor'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(043)'])[0]?.id,
		observation: '',
		computerName: '043007PRMTT',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
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
		ipAddress: '10.100.43.21'
	},
	{
		serial: 'MXL3201W50',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'adegarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(257)'])[0]?.id,
		observation: '',
		computerName: '05710CORDN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.57.13'
	},
	{
		serial: 'MXJ00501QK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'gquintana'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(275)'])[0]?.id,
		observation: '',
		computerName: '275018PRMTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.75.11'
	},
	{
		serial: 'MXJ90607RF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'hrosales'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: 'SERVGENECAM1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'1_1_1_1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.72'
	},
	{
		serial: 'MJ03JPS2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'domendez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: 'CMRUCOTELEF01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M83')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.42'
	},
	{
		serial: 'MJ04HSVR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'ycastro'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127013VPNEGOCIO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M700')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.151'
	},
	{
		serial: 'MJ08H4SS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'jmaturel'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(194)'])[0]?.id,
		observation: '',
		computerName: '19408CJROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.2.13'
	},
	{
		serial: '1HF51602SF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'ecalderin'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A098026PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.35'
	},
	{
		serial: 'MJ08H54M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'ydguzman'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(044)'])[0]?.id,
		observation: '',
		computerName: '044002CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
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
		ipAddress: '10.100.44.20'
	},
	{
		serial: 'MJ173AC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: '0'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(135)'])[0]?.id,
		observation: '',
		computerName: '135007GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.135.20'
	},
	{
		serial: 'MXL0260ZBX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'legonzalez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(213)'])[0]?.id,
		observation: '',
		computerName: '21301SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.213.12'
	},
	{
		serial: '1HF51602QR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'acabello'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A098036ANEGOCIO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.32'
	},
	{
		serial: '1HF51602RD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'yrivero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'AGROSALBOB01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.19'
	},
	{
		serial: 'MJMLYLA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'npinero'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(013)'])[0]?.id,
		observation: '',
		computerName: '013021PRMTR',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.13.11'
	},
	{
		serial: '1HF51602QC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'alupi'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0]?.id,
		observation: '',
		computerName: 'A098021ENGCIS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7 14700 CPU @ 1.5GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1124H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.98.13'
	},
	{
		serial: 'MJ08H4TX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'yuguzman'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(235)'])[0]?.id,
		observation: '',
		computerName: '235019CJEROS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M720q')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.235.12'
	}
]

function transformarStringToArray(input, targetSize) {
	if (!targetSize) return []
	const numbers = input.split('_').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

/**
 * Función de validación de integridad de datos.
 * Revisa que todos los campos obtenidos por búsqueda existan y que la RAM sea consistente.
 */
function validateNewDevices(data) {
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
