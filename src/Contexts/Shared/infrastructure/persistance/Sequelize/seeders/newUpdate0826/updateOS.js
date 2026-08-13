const { osName, operatingSystem } = require('../operatingSystem/operatingSystem')

const newOSUpdate = [
	{
		serial: 'MJBPHER',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJWDYP9',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPR2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41804YC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41806XW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3201WP0',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXYM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3181837',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXZP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYHM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYML',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSQJ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04HSXA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSPX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXYK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYTE',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYFM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPSA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYBK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFFD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ08H829',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1020H2)[0].id
	},
	{
		serial: 'MXL0260ZD9',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYGF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYMX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: '1HF51602PF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: '1HF51602PS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ00RZFR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: '1HF5351TKR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: '1HF51602Q0',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804YD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL5260NLW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801B3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801GQ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801D4',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801TW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MJ08H80P',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: '1HF51602QZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801DY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ08H4YK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MJ04CSP7',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04HSVY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSNS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL3201W24',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL4180700',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801DX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL9472SVL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801CN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806XL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801CM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL9511PPB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804TV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: '1HF51602PC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'PF26GV58',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSPH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSQ3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	}
]

console.log(newOSUpdate.length)
module.exports = { newOSUpdate }
