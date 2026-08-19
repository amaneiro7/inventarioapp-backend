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
		serial: 'MJMLYTK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'vapalma'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(104)'])[0]?.id,
		observation: '',
		computerName: '104CONTING',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.100.104.21'
	},
	{
		serial: 'MJMMFFM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'olugo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(104)'])[0]?.id,
		observation: '',
		computerName: '082004GTES',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.100.104.13'
	},
	{
		serial: 'MXJ90607SM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.id,
		employeeId: 'MHENRIQUEZ'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(109)'])[0]?.id,
		observation: '',
		computerName: '109005PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E4600  @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray(
			'0.5, 1, 0.5, 1',
			modelComputer.find(model => model.name === 'HP Compaq dc5800 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.109.20'
	},
	{
		serial: 'MXL41801TX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'pcastillo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(109)'])[0]?.id,
		observation: '',
		computerName: '10901GERTE',
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
		ipAddress: '10.100.109.25'
	},
	{
		serial: 'MXL41806VH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'ROPINERO'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(109)'])[0]?.id,
		observation: '',
		computerName: '10909SUBTE',
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
		ipAddress: '10.100.109.19'
	},
	{
		serial: '1HF51602RS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['HP'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Elite Mini 800 G9 Desktop PC')?.id,
		employeeId: 'dmonrroy'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0]?.id,
		observation: '',
		computerName: '110001GNGYNA',
		processorId: processors.find(process => 'Intel(R) Core(TM) i7-14700'.includes(process.number_model))?.id,
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
		ipAddress: '10.100.110.9'
	},
	{
		serial: 'MJMMHPX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'lirojas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0]?.id,
		observation: '',
		computerName: '11002ENEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.110.36'
	},
	{
		serial: 'MXJ9460CBD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'nliendo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0]?.id,
		observation: '',
		computerName: '124001GRTEZV',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.124.19'
	},
	{
		serial: 'MJMMHLK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'ivalera'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0]?.id,
		observation: '',
		computerName: '294018ENEGC',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.124.16'
	},
	{
		serial: 'MJMMELL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'amata'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0]?.id,
		observation: '',
		computerName: '124019CORDND',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.124.14'
	},
	{
		serial: 'MJ08H7XN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'lcabrera'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0]?.id,
		observation: '',
		computerName: '12408CJERO',
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
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.124.15'
	},
	{
		serial: 'MXJ00503RQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'ecarrasco'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127068PROMOTI',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.100.127.51'
	},
	{
		serial: 'MXJ94500NX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jganain'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: 'SEGCAMORUC02',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.100.127.220'
	},
	{
		serial: 'MJ04CSNT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'ysalmeron'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(129)'])[0]?.id,
		observation: '',
		computerName: '129013GOPRTVS',
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
		ipAddress: '10.100.129.12'
	},
	{
		serial: 'MJMLYHN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'Sin Asignar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(133)'])[0]?.id,
		observation: '',
		computerName: '13303-PRMTRC',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.100.133.14'
	},
	{
		serial: 'MJLKHR2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M70e')?.id,
		employeeId: 'Sin Asignar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142017ENEGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M70e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.142.15'
	},
	{
		serial: 'MJMTGDD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'jmartinez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142006PRMTR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
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
		serial: 'MJMMETV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'vacolmenarez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142010PROMTR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
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
		serial: 'MXL31600BT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'imoron'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142012CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.142.14'
	},
	{
		serial: 'MJHERZB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'ncrespo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142013GOPRTVO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.142.17'
	},
	{
		serial: 'MJMMFFL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'marmendoza'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142015EJENEG',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.142.16'
	},
	{
		serial: 'MXJ94500WM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'fcordova'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: '142011GRTESDC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.142.18'
	},
	{
		serial: 'MJ08H4Y1',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'andiaz'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0]?.id,
		observation: '',
		computerName: 'CJERO14215',
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
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.142.12'
	},
	{
		serial: 'MJ08H4SY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'jfigueredo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(144)'])[0]?.id,
		observation: '',
		computerName: '144010CJER',
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
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.144.14'
	},
	{
		serial: 'MJMLYFD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mapadron'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(144)'])[0]?.id,
		observation: '',
		computerName: '14411PRMT1',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.100.144.16'
	},
	{
		serial: 'MJ03JPQS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'marpinto'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(148)'])[0]?.id,
		observation: '',
		computerName: '148014GRTES',
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
		ipAddress: '10.100.148.15'
	},
	{
		serial: 'MJMLXWY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'hplaza'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(151)'])[0]?.id,
		observation: '',
		computerName: '151012CRDND',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.151.13'
	},
	{
		serial: 'MJMLXXL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mzamudio'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(156)'])[0]?.id,
		observation: '',
		computerName: '15609CORDIN',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.100.156.13'
	},
	{
		serial: 'MJ08H50L',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'Sin Asignar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(159)'])[0]?.id,
		observation: '',
		computerName: '15902CJERO',
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
		ipAddress: '10.100.159.11'
	},
	{
		serial: 'MXL41806Z0',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'yguayapero'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(172)'])[0]?.id,
		observation: '',
		computerName: '172002GERNTE',
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
		ipAddress: '10.100.172.25'
	},
	{
		serial: 'MJ03JPSL',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'VMARTINEZ'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0]?.id,
		observation: '',
		computerName: '10306COORDPC',
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
		ipAddress: '10.100.176.10'
	},
	{
		serial: 'MJ03JPSF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'romartinez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0]?.id,
		observation: '',
		computerName: '176005GOPRTV',
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
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.176.22'
	},
	{
		serial: 'MJ04CSPZ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M700')?.id,
		employeeId: 'raqrodriguez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(185)'])[0]?.id,
		observation: '',
		computerName: '18502COOR1',
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
		ipAddress: '10.100.185.13'
	},
	{
		serial: 'MJMMCLD',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mbracho'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(194)'])[0]?.id,
		observation: '',
		computerName: '194002CRDNDR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.194.13'
	},
	{
		serial: 'MJMMCLB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'dnieves'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(196)'])[0]?.id,
		observation: '',
		computerName: '19603CORDNDR',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.100.196.18'
	},
	{
		serial: 'MJHDHKT',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'oguzman'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0]?.id,
		observation: '',
		computerName: '197017ESPMEG',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.100.197.11'
	},
	{
		serial: 'MJMLYAK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'atona'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(202)'])[0]?.id,
		observation: '',
		computerName: '202004ENEGCS',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.202.16'
	},
	{
		serial: 'MXL5260NJW',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.id,
		employeeId: 'kjimenez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(206)'])[0]?.id,
		observation: '',
		computerName: '206002GOPERT',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP ProDesk 400 G1 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.206.15'
	},
	{
		serial: 'MJ08H4S2',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'Sin Asignar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(206)'])[0]?.id,
		observation: '',
		computerName: '20607CJROS',
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
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS101909'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.206.18'
	},
	{
		serial: 'MJ03JPS5',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'eipacheco'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(215)'])[0]?.id,
		observation: '',
		computerName: '215003CORDND1',
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
		ipAddress: '10.100.215.12'
	},
	{
		serial: 'MJ03JPRB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'irflores'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(215)'])[0]?.id,
		observation: '',
		computerName: '215004PRMTOR',
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
		ipAddress: '10.100.215.6'
	},
	{
		serial: 'MJ03JPPK',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'mtorrealba'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(215)'])[0]?.id,
		observation: '',
		computerName: '215007ENEGCIO',
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
		ipAddress: '10.100.215.9'
	},
	{
		serial: 'MJ03JPNG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M83')?.id,
		employeeId: 'jostos'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(215)'])[0]?.id,
		observation: '',
		computerName: '21502SUBGTE',
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
		ipAddress: '10.100.215.11'
	},
	{
		serial: 'MXL41806WG',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'aimendoza'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(218)'])[0]?.id,
		observation: '',
		computerName: '218001GRTE1',
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
		ipAddress: '10.100.218.19'
	},
	{
		serial: 'MXL41804WN',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'luparra'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(218)'])[0]?.id,
		observation: '',
		computerName: '218006CORDND',
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
		ipAddress: '10.100.218.23'
	},
	{
		serial: 'MXL41801DV',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'miaguiar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(218)'])[0]?.id,
		observation: '',
		computerName: '218007PRMTOR',
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
		ipAddress: '10.100.218.21'
	},
	{
		serial: 'MXL0430B59',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'yurodriguez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(218)'])[0]?.id,
		observation: '',
		computerName: '218020PROMO',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.218.17'
	},
	{
		serial: 'MXL41801TC',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP ProDesk 600 G1 SFF')?.id,
		employeeId: 'aavalo'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(220)'])[0]?.id,
		observation: '',
		computerName: '220002GTEAG',
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
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.220.12'
	},
	{
		serial: 'MJ08H81P',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'anrojas'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(220)'])[0]?.id,
		observation: '',
		computerName: '220012CAJAESP',
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
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1125H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.220.19'
	},
	{
		serial: 'MXL05108DB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'frmartinez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(230)'])[0]?.id,
		observation: '',
		computerName: '230007ANEGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.230.20'
	},
	{
		serial: 'MXL04309Y3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'yumarquez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0]?.id,
		observation: '',
		computerName: '233013ANGCIOS',
		processorId: processors.find(process =>
			'Pentium(R) Dual-Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.233.18'
	},
	{
		serial: 'MXL0502DS8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'makhras'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0]?.id,
		observation: '',
		computerName: '233010CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.233.10'
	},
	{
		serial: 'MXL0430B36',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'marirodriguez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(253)'])[0]?.id,
		observation: '',
		computerName: '253005PRMTRS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.253.18'
	},
	{
		serial: 'MJ08H4S3',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'Sin Asignar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0]?.id,
		observation: '',
		computerName: '261005CJEROS',
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
		ipAddress: '10.102.61.12'
	},
	{
		serial: 'MJMLYRH',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'Sin Asignar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0]?.id,
		observation: '',
		computerName: '261007PRMT',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M71e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.61.9'
	},
	{
		serial: 'MXL05108BQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'josrodriguez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0]?.id,
		observation: '',
		computerName: '264009CRDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.64.19'
	},
	{
		serial: 'MXJ00609MR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'raguilar'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0]?.id,
		observation: '',
		computerName: '264020NGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.64.15'
	},
	{
		serial: 'MXL02610DR',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.id,
		employeeId: 'jgil'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0]?.id,
		observation: '',
		computerName: '264007NGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E8400  @ 3.00GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 8000 Elite SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.64.16'
	},
	{
		serial: 'MXL0430B27',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'cmelendez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(265)'])[0]?.id,
		observation: '',
		computerName: '265008COORDIN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.102.65.20'
	},
	{
		serial: 'MXL0510861',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'jcastaneda'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(266)'])[0]?.id,
		observation: '',
		computerName: '266002GTOPRTV1',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
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
		ipAddress: '10.102.66.12'
	},
	{
		serial: 'MJ13K78',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M72e')?.id,
		employeeId: 'dalmartinez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(267)'])[0]?.id,
		observation: '',
		computerName: '267005PRMTOR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'ThinkCentre M72e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.67.19'
	},
	{
		serial: 'MJMLYGX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'mcarieles'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(267)'])[0]?.id,
		observation: '',
		computerName: '268008ANEGCIOS',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G630 @ 2.70GHz'.includes(process.number_model))
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
		ipAddress: '10.102.67.20'
	},
	{
		serial: 'MXJ00700KQ',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'daquintero'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0]?.id,
		observation: '',
		computerName: '27014ENEGC',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.70.24'
	},
	{
		serial: 'MXJ00501RF',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'difigueroa'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(275)'])[0]?.id,
		observation: '',
		computerName: '275014CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray(
			'2',
			modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.75.17'
	},
	{
		serial: 'MXJ00503RX',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'yerlopez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(284)'])[0]?.id,
		observation: '',
		computerName: '284004PRMTR',
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
		ipAddress: '10.102.84.14'
	},
	{
		serial: 'MXJ64503QS',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor')?.id,
		employeeId: 'mmoyega'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(285)'])[0]?.id,
		observation: '',
		computerName: '285014ESPNGC',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) D 945 CPU @ 3.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 1.5,
		memoriaRamModules: transformarStringToArray(
			'1, 0.5',
			modelComputer.find(model => model.name === 'HP Compaq dc5700 Small Form Factor')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.102.85.13'
	},
	{
		serial: 'MXJ94500TY',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6000 Pro SFF PC')?.id,
		employeeId: 'mapalacios'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(324)'])[0]?.id,
		observation: '',
		computerName: '324002GOPERTIVO',
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
		ipAddress: '10.201.150.40'
	},
	{
		serial: 'MXL3180CSM',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'iburgos'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(535)'])[0]?.id,
		observation: '',
		computerName: '535003CORDN',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['320'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.105.35.18'
	},
	{
		serial: 'MXL1390T4F',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.id,
		employeeId: 'difuentes'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(541)'])[0]?.id,
		observation: '',
		computerName: '451003COORD',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'HP Compaq 6200 Pro SFF PC')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.105.41.11'
	},
	{
		serial: 'MJ08H4V7',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M720q')?.id,
		employeeId: 'frhernandez'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(552)'])[0]?.id,
		observation: '',
		computerName: '552005CJEROS',
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
		ipAddress: '10.105.52.15'
	},
	{
		serial: 'MJERPRE',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'fblanco'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(552)'])[0]?.id,
		observation: '',
		computerName: '552008ANGCIOS',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2100 CPU @ 3.10GHz'.includes(process.number_model)
		)?.id,
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
		ipAddress: '10.105.52.11'
	},
	{
		serial: 'MXL3201T01',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['Hewlett-Packard'])?.id,
		modelId: modelComputer.find(model => model.name === 'HP Compaq Pro 6300 SFF')?.id,
		employeeId: 'everde'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(552)'])[0]?.id,
		observation: '',
		computerName: '552009CDNDR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.105.52.16'
	},
	{
		serial: 'MJHDKDB',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M71e')?.id,
		employeeId: 'adurand'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(552)'])[0]?.id,
		observation: '',
		computerName: '552003CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3-2120 CPU @ 3.30GHz'.includes(process.number_model)
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
		ipAddress: '10.105.52.13'
	},
	{
		serial: 'MJWDYL8',
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['LENOVO'])?.id,
		modelId: modelComputer.find(model => model.name === 'ThinkCentre M70e')?.id,
		employeeId: 'eramos'.trim().toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(552)'])[0]?.id,
		observation: '',
		computerName: '552012PRMTR',
		processorId: processors.find(process =>
			'Intel(R) Core(TM)2 Duo CPU     E7500  @ 2.93GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2, 2',
			modelComputer.find(model => model.name === 'ThinkCentre M70e')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.105.52.12'
	}
]

function transformarStringToArray(input, targetSize) {
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
