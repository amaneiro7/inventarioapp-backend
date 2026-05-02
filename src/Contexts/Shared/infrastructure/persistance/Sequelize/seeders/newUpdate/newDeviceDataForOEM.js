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

const newOEMDeviceToAdd = [
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'gloreto'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(042)'])[0]?.id,
		observation: '',
		computerName: '042001PRMTRS',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['80'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.42.20'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'lfuenmayor'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0]?.id,
		observation: '',
		computerName: '04808CAJERO',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.176.16'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'vjimenez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0]?.id,
		observation: '',
		computerName: '10805GERENT',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.146.37'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'H61MLV')?.id,
		employeeId: 'lmiranda'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(109)'])[0]?.id,
		observation: '',
		computerName: '109003COORBEJUM',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'H61MLV')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.109.22'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'joherrera'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127000GTEOPER',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.61'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'emoreno'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(112)'])[0]?.id,
		observation: '',
		computerName: '112010PROM',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.112.15'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'clabrador'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: 'CONTNGZA',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.35'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'esgomez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0]?.id,
		observation: '',
		computerName: 'DIGITALIZARAG01',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 2,
		memoriaRamModules: transformarStringToArray('2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.21.55'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'hemendoza'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127033ACOPIO',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('2_2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.183'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'agomez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127064BOVEDVAL',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('2_2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.182'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'eroldan'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127079BOVCAMO',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('2_2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.180'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['BIOSTAR Group'])?.id,
		modelId: modelComputer.find(model => model.name === 'G41D3C')?.id,
		employeeId: 'wcastillo'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0]?.id,
		observation: '',
		computerName: '127099GERENTEOP',
		processorId: processors.find(process =>
			'Pentium(R) Dual Core  CPU      E5500  @ 2.80GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray('2_2', modelComputer.find(model => model.name === 'G41D3C')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.127.55'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['OEM'])?.id,
		modelId: modelComputer.find(model => model.name === 'OEM')?.id,
		employeeId: 'mfarias'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0]?.id,
		observation: '',
		computerName: '14602SUBGTE',
		processorId: processors.find(process =>
			'Intel(R) Pentium(R) Dual  CPU  E2220  @ 2.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 3,
		memoriaRamModules: transformarStringToArray('2_1', modelComputer.find(model => model.name === 'OEM')?.slots),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['160'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS7'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.146.7'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.'])?.id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.')?.id,
		employeeId: 'dortiz'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(107)'])[0]?.id,
		observation: '',
		computerName: '107009GRTES',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3240 CPU @ 3.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'4',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['64 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.107.20'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.'])?.id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.')?.id,
		employeeId: 'pjuarez'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(073)'])[0]?.id,
		observation: '',
		computerName: '073010CONTING',
		processorId: processors.find(process => 'Intel(R) Pentium(R) CPU G620 @ 2.60GHz'.includes(process.number_model))
			?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['SDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.73.11'
	},
	{
		serial: null,
		activo: null,
		statusId: '1', // En Uso
		categoryId: categoriesData.find(cat => cat.name === categoryNames['Desktop'])?.id,
		brandId: brandsData.find(brand => brand.name === brandOnlyName['To Be Filled By O.E.M.'])?.id,
		modelId: modelComputer.find(model => model.name === 'To Be Filled By O.E.M.')?.id,
		employeeId: 'gegarcia'.toLowerCase(),
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(018)'])[0]?.id,
		observation: '',
		computerName: '018025CORDND',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 3240 CPU @ 3.40GHz'.includes(process.number_model)
		)?.id,
		memoryRamCapacity: 4,
		memoriaRamModules: transformarStringToArray(
			'2_2',
			modelComputer.find(model => model.name === 'To Be Filled By O.E.M.')?.slots
		),
		hardDriveCapacityId: hddCapacities.find(hdd => hdd.name === hddCapacitiesName['500'])?.id,
		hardDriveTypeId: hddTypes.find(hdd => hdd.name === hddTypeName['HDD'])?.id,
		operatingSystemId: operatingSystem.filter(os => os.name === osName['WINDOWS1022H2'])[0]?.id,
		operatingSystemArqId: operatingSystemArq.find(os => os.name === osArqName['32 bits'])?.id,
		macAddress: null,
		ipAddress: '10.100.18.10'
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

		// if (!device.serial) errors.push('Serial faltante')
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
	const errors = validateNewDevices(newOEMDeviceToAdd)
	if (errors.length === 0) {
		console.log('✅ ¡Todo perfecto! No se encontraron errores.')
	} else {
		console.error(`❌ Se encontraron ${errors.length} errores:`)
		errors.forEach(err => console.log(err))
	}
}

module.exports = { newOEMDeviceToAdd }
