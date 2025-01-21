const {
	almacenes: locations,
	almacenName,
	siteMCBOlocation,
	siteName
} = require('../location/locations')
const { siteOnlyNames } = require('../location/sites')
const lenovoLaptops = [
	{
		serial: 'R9WHD3T',
		activo: '223051',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '763223a6-bf6e-48bc-a5c7-4773cf7bdc2c',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '9ad9a6a8-9906-415b-bfe6-e5231d8fbe8b',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9WHCZ8',
		activo: '223052',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '763223a6-bf6e-48bc-a5c7-4773cf7bdc2c',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '9ad9a6a8-9906-415b-bfe6-e5231d8fbe8b',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: 2,
		operatingSystemArqId: 2,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9WHD38',
		activo: '223046',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '763223a6-bf6e-48bc-a5c7-4773cf7bdc2c',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '9ad9a6a8-9906-415b-bfe6-e5231d8fbe8b',
		memoryRamCapacity: 6,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MB00307629',
		activo: '243741',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '6f20dc8d-da9d-4a71-860b-a2049314c0df',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bisagra Dañada',
		processorId: 'ea6d8d8e-7cee-42fb-82be-6ffbad0379af',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MB00408268',
		activo: '231864',
		statusId: 3,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '6f20dc8d-da9d-4a71-860b-a2049314c0df',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Dañada',
		processorId: 'ea6d8d8e-7cee-42fb-82be-6ffbad0379af',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MB00307421',
		activo: null,
		statusId: 3,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '6f20dc8d-da9d-4a71-860b-a2049314c0df',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Dañada',
		processorId: 'ea6d8d8e-7cee-42fb-82be-6ffbad0379af',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'YB05725840',
		activo: '244198',
		statusId: 1,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '8e7394ee-c130-4417-a398-a6c597c2e6e1',
		employeeId: null,
		locationId: siteMCBOlocation.filter(
			location => location.name === siteName.TORREBNC5DEJULIOPISO3
		)[0].id,
		computerName: 'SALON-BELLOSO',
		observation: 'Teclado defectuoso',
		processorId: '7bd1fe16-44ac-4fe9-86ae-59348026174e',
		memoryRamCapacity: 6,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: '5',
		operatingSystemArqId: 2,
		macAddress: null,
		ipAddress: '10.0.13.66'
	},
	{
		serial: 'LR7K2A7',
		activo: '205859',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '8778d460-5f17-4adb-904d-1124585f3e44',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2A9',
		activo: '205869',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '8778d460-5f17-4adb-904d-1124585f3e44',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2C5',
		activo: null,
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '8778d460-5f17-4adb-904d-1124585f3e44',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K2B5',
		activo: '205864',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '8778d460-5f17-4adb-904d-1124585f3e44',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR7K1T7',
		activo: '205865',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '8778d460-5f17-4adb-904d-1124585f3e44',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR1T9WZ',
		activo: '210002',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '7605513c-7398-4ef9-a8de-97cb162a6745',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR4A1VW',
		activo: '213942',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: '7605513c-7398-4ef9-a8de-97cb162a6745',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR2M4RK',
		activo: '213938',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: '7605513c-7398-4ef9-a8de-97cb162a6745',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 8,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LR1T9VY',
		activo: '211589',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '67e1f755-1611-4f84-9478-08fd9bc35af3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada / TrackPad Dañado',
		processorId: '7605513c-7398-4ef9-a8de-97cb162a6745',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3AVW3L',
		activo: '178877',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '69d91018-3cd0-48d4-b33d-e8a0638cf693',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '6912f593-a87b-466c-aa42-ee5374648599',
		memoryRamCapacity: 3,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3AVM3T',
		activo: null,
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '69d91018-3cd0-48d4-b33d-e8a0638cf693',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '6912f593-a87b-466c-aa42-ee5374648599',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3AVW4Y',
		activo: '178867',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '69d91018-3cd0-48d4-b33d-e8a0638cf693',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '6912f593-a87b-466c-aa42-ee5374648599',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 5,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRGL095',
		activo: '180715',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		memoryRamCapacity: 6,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRZKK10',
		activo: '189710',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRGL112',
		activo: '180716',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRZKM28',
		activo: null,
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada / Disco Dañado',
		processorId: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 6,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRGL135',
		activo: '180726',
		statusId: 3,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Dañado',
		processorId: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRGL118',
		activo: '180703',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'c558ac7b-0e11-4d4a-a0c7-1d39c630afd3',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Dañado',
		processorId: 'ed64272a-a523-4ddc-bc27-67414abde56e',
		memoryRamCapacity: 0,
		hardDriveCapacityId: null,
		hardDriveTypeId: null,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'LRB9315',
		activo: 'AR001004205',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '8279679f-afda-4102-bcd3-b34422ef3772',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: '71982363-de6c-48e4-957e-7609eefe05b9',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3MC027',
		activo: '163388',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '8279679f-afda-4102-bcd3-b34422ef3772',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: '71982363-de6c-48e4-957e-7609eefe05b9',
		memoryRamCapacity: 2,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'L3B9548',
		activo: 'AR001004196',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '8279679f-afda-4102-bcd3-b34422ef3772',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Sin Bateria',
		processorId: '71982363-de6c-48e4-957e-7609eefe05b9',
		memoryRamCapacity: 3,
		hardDriveCapacityId: 4,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MP1LQKX0',
		activo: '237876',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '5f3103cb-bcba-4aeb-978c-50a2ad12c38b',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: 'c4e89235-6849-478e-8148-1e7b49fe5673',
		memoryRamCapacity: 20,
		hardDriveCapacityId: 9,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'MP1LREZF',
		activo: '237885',
		statusId: 3,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '5f3103cb-bcba-4aeb-978c-50a2ad12c38b',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Dañada',
		processorId: 'c4e89235-6849-478e-8148-1e7b49fe5673',
		memoryRamCapacity: 20,
		hardDriveCapacityId: 9,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'PF26GS9G',
		activo: '246303',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: 'd983ef90-3a17-4dce-a0d1-6ba7c19d729e',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '7e2de7e3-82e5-48a8-8f73-8a3e68f5bc32',
		memoryRamCapacity: 16,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 3,
		operatingSystemVersionId: 2,
		operatingSystemArqId: 2,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9Y5TNT',
		activo: '222807',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '208c2653-294a-4ed5-bf79-848dc312aac6',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: '19aa5315-38d6-4a16-a755-eb7bd9f91593',
		memoryRamCapacity: 4,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'R9VG3MN',
		activo: '222826',
		statusId: 2,
		categoryId: 3,
		brandId: '412c0a12-1642-4ce7-a95e-e038cd1e6ed6',
		modelId: '208c2653-294a-4ed5-bf79-848dc312aac6',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: 'Bateria Dañada',
		processorId: '8ebe5645-8c29-4498-9f2e-ad1c8034e8ce',
		memoryRamCapacity: 8,
		hardDriveCapacityId: 7,
		hardDriveTypeId: 1,
		operatingSystemVersionId: null,
		operatingSystemArqId: null,
		macAddress: null,
		ipAddress: null
	},
	{
		serial: 'C02Q2365FVH3',
		activo: '244828',
		statusId: 2,
		categoryId: 3,
		brandId: '5d669522-ef76-4a78-a6ce-7fa4237f4c6e',
		modelId: 'eaf80960-440d-462b-8276-fac5227ba608',
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		computerName: null,
		observation: '',
		processorId: '8ebe5645-8c29-4498-9f2e-ad1c8034e8ce',
		memoryRamCapacity: 8,
		hardDriveCapacityId: 3,
		hardDriveTypeId: 2,
		operatingSystemVersionId: 17,
		operatingSystemArqId: 2,
		macAddress: null,
		ipAddress: null
	}
]

module.exports = { lenovoLaptops }
