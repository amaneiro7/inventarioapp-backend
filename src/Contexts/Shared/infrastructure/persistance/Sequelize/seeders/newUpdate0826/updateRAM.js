const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')

const newRAMUpdate = [
	{
		serial: 'MJ00RZFR',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MXL41804YD',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJ03JPR2',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MXL41801B3',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 4, 4, 4],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801GQ',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL41801RR',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL41801TW',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41806XW',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL41804W2',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 4, 4, 4]
	},
	{
		serial: 'MXL3201WP0',
		memoryRamCapacity: 10,
		memoriaRamModules: [2, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXJ947086S',
		memoryRamCapacity: 12,
		memoriaRamModules: [2, 2, 4, 4],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MJ04HSVY',
		memoryRamCapacity: 16,
		memoriaRamModules: [16, 0],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MJ04CSNS',
		memoryRamCapacity: 16,
		memoriaRamModules: [16, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL41804VL',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 4, 0, 0]
	},
	{
		serial: 'MXL41806XB',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 4, 4, 0],
		memoriaRamModulesDB: [8, 4, 4, 4]
	},
	{
		serial: 'MXL41804SX',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 4, 4, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL3201W24',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804V7',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MJ55A35',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MJMLXZM',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [8, 0]
	},
	{
		serial: 'MXL4180700',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804WV',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 4, 4, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801DX',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801CN',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL41806XL',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL41801CM',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8, 0, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL41804TV',
		memoryRamCapacity: 14,
		memoriaRamModules: [4, 2, 4, 4],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801C6',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 4, 0, 0]
	},
	{
		serial: 'MXL051085F',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [2, 2, 2, 2]
	},
	{
		serial: 'MXL3181837',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MJ03JPNH',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [4, 2, 0, 0]
	},
	{
		serial: 'MJMLYHM',
		memoryRamCapacity: 6,
		memoriaRamModules: [2, 4],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYML',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLXYK',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYTE',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ90607WT',
		memoryRamCapacity: 2.5,
		memoriaRamModules: [1, 0.5, 1, 0],
		memoriaRamModulesDB: [1, 0.5, 1, 0]
	},
	{
		serial: 'MJMLYFM',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJ03JPSA',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJMMFFD',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJ04CSQ3',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJMLYGF',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [4, 2]
	},
	{
		serial: 'MJMLYMX',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [8, 0]
	},
	{
		serial: 'MXJ9200B3P',
		memoryRamCapacity: 3.5,
		memoriaRamModules: [1, 1, 0.5, 1],
		memoriaRamModulesDB: [1, 1, 0.5, 1]
	}
]

console.log(newRAMUpdate.length)
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
