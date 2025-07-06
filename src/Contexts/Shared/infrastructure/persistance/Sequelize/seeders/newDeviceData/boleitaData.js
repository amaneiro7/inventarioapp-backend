const { randomUUID } = require('node:crypto')
const { hddCapacitiesName, hddCapacities } = require('../DiscoDuro/hddCapacities')
const { hddTypeName, hddTypes } = require('../DiscoDuro/hddType')
const { categoriesData, categoryNames } = require('./allCategory')
const { brandOnlyName, brandsData } = require('./brand')
const { modelComputer } = require('./modelComputer')
const { operatingSystem, osName } = require('./operatingSystem')
const { operatingSystemArq, osArqName } = require('./operatingSystemArq')
const { processors } = require('./processors')

const torreBoleita = [
	{
		serial: 'MXL41804XN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jjauregui'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIAPRODTEC10',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro N']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.197'
	},
	{
		serial: 'MJ00RZH1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'iyerena'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIPROTI004',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.199'
	},
	{
		serial: 'MXL9033SFF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'jomartinez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCW12',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.200'
	},
	{
		serial: 'MXL01128VT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').id, // falta
		employeeId: 'elinero'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCW9',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.201'
	},
	{
		serial: 'MXL0112HKD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').id, // falta
		employeeId: 'ggarrido'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCW06',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.202'
	},
	{
		serial: 'MXL0112N91',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCW07',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.203'
	},
	{
		serial: 'MXL0112JVS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').id, // falta
		employeeId: 'hgarcia'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCW-10',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.204'
	},
	{
		serial: 'MXL41806VP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'operador'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'OPERTEC20',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.205'
	},
	{
		serial: 'MXL4020TN7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').id, // falta
		employeeId: 'operador'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'OPTCNBOLEITA01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'2_2_2',
			modelComputer.find(model => model.name === 'HP Compaq Elite 8300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.206'
	},
	{
		serial: 'MXL5260NL3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'operador'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIAOPERTEC12',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro N']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.207'
	},
	{
		serial: 'MXL04920X7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8100 Elite CMT PC').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNOLOGIA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5 CPU         650  @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP Compaq 8100 Elite CMT PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.209'
	},
	{
		serial: 'MXL0112G4M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').id, // falta
		employeeId: 'henduran'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIPROTI006',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.214'
	},
	{
		serial: 'MJ04HSW8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id, // falta
		employeeId: 'luihernandez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095728ADMINAGEN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M700').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.136'
	},
	{
		serial: 'MXL41801C2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'mrada'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A098203EMIYDIST',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.137'
	},
	{
		serial: 'WB11218504WB03041101',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'Lenovo G480').id, // falta
		employeeId: 'dzarzalejo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'PROPLADIS01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3120M CPU @ 2.50GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'2_4',
			modelComputer.find(model => model.name === 'Lenovo G480').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro N']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.139'
	},
	{
		serial: 'MJ00RZLL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'abfigueroa'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCJCHATAING',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.140'
	},
	{
		serial: 'MXL41801BT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'imarquez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DGN082TECNOL',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.141'
	},
	{
		serial: 'MXJ00501RP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id, // falta
		employeeId: 'emgonzalez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'VP-INFRAOPETEC',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.142'
	},
	{
		serial: 'MJ00RZFR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'prizzo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCAEVPRESEGLO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.143'
	},
	{
		serial: 'MXL9153LHS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').id, // falta
		employeeId: 'jamarin'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIAPROCANDI02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.144'
	},
	{
		serial: '5CG950553S',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook x360 830 G6').id, // falta
		employeeId: 'rtarazon'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'L-PROCANDIGO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8665U CPU @ 1.90GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteBook x360 830 G6').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.145'
	},
	{
		serial: 'MXL9161ZVB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').id, // falta
		employeeId: 'farevalo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIAOFICDEAGI01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.146'
	},
	{
		serial: 'MXL41801BB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'ancastellanos'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095050PMO',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.147'
	},
	{
		serial: 'MXL9113QC6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'ycarrillo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ASISTVPTEC01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.148'
	},
	{
		serial: 'MXL9010TPM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'rmayo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095309VPINFRAES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.149'
	},
	{
		serial: 'MJ00XUBL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'VPGESTIONPRO01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.150'
	},
	{
		serial: 'MJ00XUAV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'yemata'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'VPGESIMPLTI02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.151'
	},
	{
		serial: 'MXL41804WX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'anhernandez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DGN097RECLAMOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.76'
	},
	{
		serial: 'MXL338100J',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').id, // falta
		employeeId: 'frtorres'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095478EMIDIST',
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
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.77'
	},
	{
		serial: 'MXL5260NLB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'hesilva'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095181EMIYDIST',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.78'
	},
	{
		serial: 'MXL85215NS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'mrondon'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095205-OPETDC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.79'
	},
	{
		serial: 'MXL41801C8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'xmoreno'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095247-EMISION',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.81'
	},
	{
		serial: 'MXL8512F8C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'jvieira'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095979-OPERCNEX',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.82'
	},
	{
		serial: 'MXL41801VX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'mariaadiaz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'D095083EMIYDIST',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.83'
	},
	{
		serial: 'CS02299339',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'Lenovo C260').id, // falta
		employeeId: 'aspalacios'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DGC160RECLATDC',
		processorId: processors.find(process =>
			'Intel(R) Celeron(R) CPU  J1800  @ 2.41GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'Lenovo C260').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.84'
	},
	{
		serial: 'MXL8521RCR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'ychina'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '-A095390INTCPB-',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.85'
	},
	{
		serial: 'MXL41806XV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jomendoza'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095203EMYDIST',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.86'
	},
	{
		serial: 'MXL41804W8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jomendoza'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095374OPERTDC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.87'
	},
	{
		serial: 'MXL41804VP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'hesilva'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A098201EMIYDIST',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.90'
	},
	{
		serial: 'MXL3201T0W',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id, // falta
		employeeId: 'amorales'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095818DISTRIB',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.91'
	},
	{
		serial: 'MXL5260NM8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'GRCASTILLO'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A098202DISTRIB',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.92'
	},
	{
		serial: 'MXL41801V0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'franblanco'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DGN107EMIYDIST',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.93'
	},
	{
		serial: 'MXL41801V7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'paguilar'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095954RECAUDA',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.7'
	},
	{
		serial: 'MXL8521T2M',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'fbriceno'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095112-BEMONI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.10'
	},
	{
		serial: 'MXL5260NLV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'garanguren'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A743014OPERESP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.11'
	},
	{
		serial: 'MXL41806VW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'AQHERNANDEZ'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095081BOVDA',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.12'
	},
	{
		serial: 'MXL41806ZF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'scollado'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095578IMPUESTO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.14'
	},
	{
		serial: 'MXL41801FP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jofernandez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095416RECLAMOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.15'
	},
	{
		serial: 'MJXKDFC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e').id, // falta
		employeeId: 'gherrera'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '743025-OPERS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2130 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M72e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.17'
	},
	{
		serial: 'MXL5260NM6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'lgonzalez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A743011OPERESP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.19'
	},
	{
		serial: 'MXL31817JN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id, // falta
		employeeId: 'nhrojas'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095003-RNEXTERN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.20'
	},
	{
		serial: 'MXL5260NKZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'jromero'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A900200RECAUDAC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.21'
	},
	{
		serial: 'MJMLXAK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id, // falta
		employeeId: 'jdematos'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095214OPERAC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-2400 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.22'
	},
	{
		serial: 'MXL93424XL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').id, // falta
		employeeId: 'rsotillo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A900030OPERAC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.23'
	},
	{
		serial: 'MXL9253MBX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'mtellez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A743033GTEOPES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.24'
	},
	{
		serial: 'MXL41806ZS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'cbenitez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095646BOVD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.27'
	},
	{
		serial: 'MXL41801V1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'irojas'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BOVEDASOT20',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.1.29'
	},
	{
		serial: 'MJ00RZPD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'MONGCIA01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro for Workstations'])
			.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.7'
	},
	{
		serial: 'MJ00RZJ7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'rochoa'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIAARQSEGTI05',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.8'
	},
	{
		serial: 'MJ00XUBK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'angmedina'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP122F1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.15'
	},
	{
		serial: 'MJ00XUCN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['All in One']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M73z').id, // falta
		employeeId: 'editorres'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'REDESCCS2',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4430S CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M73z').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.16'
	},
	{
		serial: 'MJ072WJ6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M710s').id, // falta
		employeeId: 'jperez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SOPTEC003',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M710s').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.72'
	},
	{
		serial: 'MJ072WJ4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M710s').id, // falta
		employeeId: 'dmolina'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SOPORTEC02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M710s').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 11 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.73'
	},
	{
		serial: 'MXL850305Q',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'hpena'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCW104652',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.78'
	},
	{
		serial: 'MJ04CSNV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id, // falta
		employeeId: 'wmalagon'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNC2-PC-INFRAES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M700').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.80'
	},
	{
		serial: '5CD9103SYT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Laptop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteBook x360 1030 G3').id, // falta
		employeeId: 'rcolina'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SOPTEC001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteBook x360 1030 G3').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.81'
	},
	{
		serial: 'MXL4201N2V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'mdominguez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SOPORTETECNICG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.82'
	},
	{
		serial: 'MJ072WHL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M710s').id, // falta
		employeeId: 'ricgonzalez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SOPTEC005',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M710s').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.84'
	},
	{
		serial: 'MXL8512CZR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'ljaimes'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SOPORTE0005',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.86'
	},
	{
		serial: 'MXL31817HS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id, // falta
		employeeId: 'gsuarez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ESPCORE04',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.135'
	},
	{
		serial: 'MXL31809TL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id, // falta
		employeeId: 'lvidal'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ESPCORE08',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.137'
	},
	{
		serial: 'MXL41804XM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNLGIACB',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.141'
	},
	{
		serial: 'MJXKCTL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e').id, // falta
		employeeId: 'zavariano'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ESPCOREIT07',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2130 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.142'
	},
	{
		serial: 'MJXDHTL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e').id, // falta
		employeeId: 'elobo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ESPCORE03',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.143'
	},
	{
		serial: 'MXL41801WF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'lrendon'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESAIT10TECNO1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.145'
	},
	{
		serial: 'MXL41801GQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jquintal'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095081OYP',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 20,
		memoriaRamModules: transformarStringToArray(
			'8_4_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.146'
	},
	{
		serial: 'MXL41801RM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'promero'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '900062TECNOLOGI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.154'
	},
	{
		serial: 'MXL41804TP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'omota'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESIT12',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.155'
	},
	{
		serial: 'MJMMKLH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id, // falta
		employeeId: 'nvillegas'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095297ESPCORE',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.158'
	},
	{
		serial: 'MXL9161ZXT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').id, // falta
		employeeId: 'tfranco'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ESPATM1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.159'
	},
	{
		serial: 'MXL8512DX4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'rcastaneda'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'VPEINGETEC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 11 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.190'
	},
	{
		serial: 'MXL9143BSG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNOWEB1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.197'
	},
	{
		serial: 'MXL4201N29',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'lchacon'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNC-TECNO2-6',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_4_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64-bit']).id,
		macAddress: null,
		ipAddress: '10.220.2.199'
	},
	{
		serial: 'MXL9161ZS2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').id, // falta
		employeeId: 'jesteves'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCTECNO2MNGR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 48,
		memoriaRamModules: transformarStringToArray(
			'8_8_16_16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 11 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64-bit']).id,
		macAddress: null,
		ipAddress: '10.220.2.201'
	},
	{
		serial: 'MXL9284J0V',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').id, // falta
		employeeId: 'ksolorzano'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNO2--OB-MGR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.202'
	},
	{
		serial: 'MXL4201N2T',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNC-TECNO2-GTE-',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 32,
		memoriaRamModules: transformarStringToArray(
			'8_8_8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 11 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.203'
	},
	{
		serial: 'MXL9161ZTL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').id, // falta
		employeeId: 'vobelmejias'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A098209ESPBD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'16',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.204'
	},
	{
		serial: 'MXL4201N27',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jobetancourt'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNCTECNO2-DBA1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.206'
	},
	{
		serial: 'MJWEBD3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M70e').id, // falta
		employeeId: 'liromero'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECPROD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M70e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.207'
	},
	{
		serial: 'MXL4201N2N',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BNC-TECNO2-21',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 32,
		memoriaRamModules: transformarStringToArray(
			'8_8_8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64-bit']).id,
		macAddress: null,
		ipAddress: '10.220.2.208'
	},
	{
		serial: 'MXL8503D7J',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'alrangel'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNO002',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.209'
	},
	{
		serial: 'MXL85134GP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').id, // falta
		employeeId: 'kazuaje'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP-M0GQ125',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 65W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.210'
	},
	{
		serial: 'MXL9341Z2D',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').id, // falta
		employeeId: 'wmaduro'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNOWEB3',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.211'
	},
	{
		serial: 'MXL4201N2G',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'sbarragan'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP-0K8HVCF',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64-bit']).id,
		macAddress: null,
		ipAddress: '10.220.2.212'
	},
	{
		serial: 'MXL85215X1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'jmanrique'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNO003',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.213'
	},
	{
		serial: 'MXL92855F1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').id, // falta
		employeeId: 'vjerez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP-A636E98',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64-bit']).id,
		macAddress: null,
		ipAddress: '10.220.2.215'
	},
	{
		serial: 'MXL41804XJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jpinto'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP-HG3SAHR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Enterprise']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.216'
	},
	{
		serial: 'MXL8521R41',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'szerpa'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNO001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 11 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.220'
	},
	{
		serial: 'MXL4201N2Q',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'vcastorani'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP-VUNGNDR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.221'
	},
	{
		serial: 'MXL85134SG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'rrodriguez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'RRODRIGUEZS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-8700T CPU @ 2.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.222'
	},
	{
		serial: 'MJMMKBV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'ESPECDIST01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M71e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro for Workstations'])
			.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.223'
	},
	{
		serial: 'MXL41801DD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'masterreport'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'TECNOLOGIABERA',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.226'
	},
	{
		serial: 'MXL4201N2L',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'cnunez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CNUNEZ',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.2.228'
	},
	{
		serial: 'MXL1450SPH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id, // falta
		employeeId: 'cmaza'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DESKTOP-96OLE4C',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-2400 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro N']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.73'
	},
	{
		serial: 'MXL41801SY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'wsanz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'AUDIOVISULA-001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.74'
	},
	{
		serial: 'MJ04HSVA',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700').id, // falta
		employeeId: 'soropeza'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095318SEGDAT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M700').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.75'
	},
	{
		serial: 'MJ03JPSQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id, // falta
		employeeId: 'mramos'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '95823SDATOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.81'
	},
	{
		serial: 'MXL41806YJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'cfernandez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'D095003SEGDATS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.82'
	},
	{
		serial: 'MJ03JPNM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id, // falta
		employeeId: 'arrosales'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SEGURIDADDATOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_4_4_4',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.83'
	},
	{
		serial: 'MJ03JPR2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id, // falta
		employeeId: 'jesuarez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SEGURIDDATOS4',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.85'
	},
	{
		serial: 'MJ03JPQZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id, // falta
		employeeId: 'aortiz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'SEGPERI001',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.86'
	},
	{
		serial: 'MXJ00601JQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC').id, // falta
		employeeId: 'oguerra'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '98264PUNTSVENTA',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.87'
	},
	{
		serial: 'MXL934252C',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').id, // falta
		employeeId: 'lpina'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095754BANELECT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G4 DM (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 11 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.88'
	},
	{
		serial: 'MXL41801RS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jnavarro'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095113BCAELETCE',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.89'
	},
	{
		serial: 'MXL41801S9',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'airondon'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095018-ATM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_2_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.90'
	},
	{
		serial: 'MXL41806WD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'eberrios'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095110BCAELEC',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.92'
	},
	{
		serial: 'MXL41801C3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'mepadilla'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095303POS',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.93'
	},
	{
		serial: 'MXL41801T8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'alameda'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095800CELECTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'2_2_2_2',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.94'
	},
	{
		serial: 'MXL9253F6B',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP']).id,
		modelId: modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').id, // falta
		employeeId: 'fcastro'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A095020MEDCANL',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-8500T CPU @ 2.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP EliteDesk 800 G4 DM 35W (TAA)').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['250']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDDM2']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.95'
	},
	{
		serial: 'MXL41801FM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'luruiz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095091CAUTOM',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.101'
	},
	{
		serial: 'MXL41801SD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'syanez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095822CJAUTM',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 12,
		memoriaRamModules: transformarStringToArray(
			'4_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.107'
	},
	{
		serial: 'MXL41801FB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'dbarcia'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'BCAELECTR01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.120'
	},
	{
		serial: 'MJ03JPQ3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id, // falta
		employeeId: 'llezama'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT00501',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.135'
	},
	{
		serial: 'MXL41801FL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'idiaz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT-05',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.137'
	},
	{
		serial: 'MXL5260NK1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CBCALLCENT-12',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.138'
	},
	{
		serial: 'MXL41801DR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'malvarez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT-03',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.142'
	},
	{
		serial: 'MXL3190L58',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'OPCALL0-5',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G640 @ 2.80GHz'.includes(process.number_model))
			.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 4300 SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.143'
	},
	{
		serial: 'MXL5260NMJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CBCALLCENT-30',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.144'
	},
	{
		serial: 'MXL41801CP',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'kcaraballo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT-02',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.146'
	},
	{
		serial: 'MXL41806VY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'rmaterano'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '899056SUPCALLC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.147'
	},
	{
		serial: 'MXL5260NMF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CBCOLLCENT-14',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.148'
	},
	{
		serial: 'MXL5260NK0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: ''.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CBCALLCENT-23',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.149'
	},
	{
		serial: 'MXL41801CK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'kcaraballo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT-04',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.152'
	},
	{
		serial: 'MXL5260NJR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'jvillafranca'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT-500',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.153'
	},
	{
		serial: 'MXL41804Y6',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'jguerra'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '898023SUPCALLC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_8_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.158'
	},
	{
		serial: 'MXL41804V8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'aaldana'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENTER0205',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.159'
	},
	{
		serial: 'MXL5260NKW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'mefernandez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'VPCALLCENTER01',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.160'
	},
	{
		serial: 'MXL41804TJ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'yrafezca'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'COORDCALLC02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 8,
		memoriaRamModules: transformarStringToArray(
			'8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.174'
	},
	{
		serial: 'MXL5260NKX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'scgonzalez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A089013CAELEC',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.198'
	},
	{
		serial: 'MXL31817R3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF').id, // falta
		employeeId: 'hcontreras'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CALLCENT-502',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.199'
	},
	{
		serial: 'MXL5260NLG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'vmendez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A899065CELECT',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.200'
	},
	{
		serial: 'MXL5260NKB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'idiaz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095619COLCENTER',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.201'
	},
	{
		serial: 'MXL5260NJV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'vmendez'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '899085-MONIT',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.202'
	},
	{
		serial: 'MXL41804VX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'wvielma'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095848-TELEMARK',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.203'
	},
	{
		serial: 'MJ03JPQY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83').id, // falta
		employeeId: 'emarin'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095616-TELEMARK',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'ThinkCentre M83').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.204'
	},
	{
		serial: 'MXL5260NK3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'doortiz'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CBCALLCENT18',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 6,
		memoriaRamModules: transformarStringToArray(
			'4_2',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.205'
	},
	{
		serial: 'MXL41804XK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'ymoreno'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095005CRDNDCC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.207'
	},
	{
		serial: 'MXL5260NLQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'surbina'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '095065CELECTRON',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.210'
	},
	{
		serial: 'MJTYPEN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO']).id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e').id, // falta
		employeeId: 'ydavila'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '899007ANTIFRAUD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'ThinkCentre M72e').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.212'
	},
	{
		serial: 'MXL5260NLW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'sagarcia'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'CBCALLCENT-07',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'8_8',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.213'
	},
	{
		serial: 'MXL02610KN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC').id, // falta
		employeeId: 'gpena'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '899056CORDNCC',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.214'
	},
	{
		serial: 'MXL41804WH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').id, // falta
		employeeId: 'mfrancia'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'DGN055BCAELEC1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4570 CPU @ 3.20GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 16,
		memoriaRamModules: transformarStringToArray(
			'4_4_4_4',
			modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['1000']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.218'
	},
	{
		serial: 'MXL5260NK4',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'dsalazar'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'GCIAMONANTI03',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.219'
	},
	{
		serial: 'MXL5260NL0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'mangarcia'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A899057CELECTR',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.220'
	},
	{
		serial: 'MXL5260NMB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF').id, // falta
		employeeId: 'gquintero'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: 'A899083CELECT',
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
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 7 Professional']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.223'
	},
	{
		serial: 'MXL1450SP0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop']).id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard']).id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').id, // falta
		employeeId: 'jsalguedo'.toLowerCase(),
		locationId: 'f42dfa7d-bf35-4aec-91ce-906f81166e27', // Boleita
		observation: '',
		computerName: '220020MONTREO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-2400 CPU @ 3.10GHz'.includes(process.number_model)
		).id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC').slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500']).id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD']).id,
		operatingSystemId: operatingSystem.find(os => os.name === osName['Microsoft Windows 10 Pro']).id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits']).id,
		macAddress: null,
		ipAddress: '10.220.3.230'
	}
]

function transformarStringToArray(input, targetSize) {
	const numbers = input.split('_').map(Number)

	while (numbers.length < targetSize) {
		numbers.push(0)
	}

	return numbers.slice(0, targetSize)
}

module.exports = { torreBoleita }
