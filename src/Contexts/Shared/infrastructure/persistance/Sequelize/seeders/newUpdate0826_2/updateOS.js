const { osName, operatingSystem } = require('../operatingSystem/operatingSystem')

const newOSUpdate = [
	{
		serial: 'MJ04CSQM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL5260NL9',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXXH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL051085B',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3201WNM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL5260NMH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHERDH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ08H7XH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS101909)[0].id
	},
	{
		serial: 'MJ08H812',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMERT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMENT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCFP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801RT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSPV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFFW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00503RW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00609M0',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMENH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYFF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCWA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYFC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ00RZN5',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0260WSN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJERNRM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3151VKX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSQA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3201WNH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3200PPJ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYMT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDHZM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41806ZF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804W4',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801BB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	}
]

console.log(newOSUpdate.length)
module.exports = { newOSUpdate }
