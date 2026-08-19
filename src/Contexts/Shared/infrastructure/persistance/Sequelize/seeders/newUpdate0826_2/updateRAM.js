const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')

const newRAMUpdate = [
	{
		serial: 'MJMLXXH',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMERT',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMENT',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMCFP',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMFFW',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ00503RW',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MJMMENH',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMCWA',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYFC',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL41804W4',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801BB',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJHDHZM',
		memoryRamCapacity: 6,
		memoriaRamModules: [4, 2],
		memoriaRamModulesDB: [4, 0]
	}
]

newRAMUpdate.forEach(item => {
	// verificar que el modulo nuevo y el viejo tenga la misma longitud
	if (item.memoriaRamModules.length !== item.memoriaRamModulesDB.length) {
		console.error(
			`Error: El módulo nuevo y el módulo de la base de datos para el serial ${item.serial} no tienen la misma longitud.`
		)
		return
	}
	// Sumar los módulos de RAM del nuevo módulo y compararlo con memoryRamCapacity
	const totalNewRAM = item.memoriaRamModules.reduce((acc, val) => acc + val, 0)
	if (totalNewRAM !== item.memoryRamCapacity) {
		console.error(
			`Error: La suma de los módulos de RAM del nuevo módulo para el serial ${item.serial} no coincide con memoryRamCapacity.`
		)
		return
	}
})

module.exports = { newRAMUpdate }
