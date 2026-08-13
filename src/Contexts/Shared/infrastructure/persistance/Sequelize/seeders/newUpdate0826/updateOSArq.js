const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')

const newOSArqUpdate = [
	{
		serial: 'MJ04CSNS',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL3201W24',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLXYM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ55A35',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLXZM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL051085F',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL3181837',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLYHM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04HSXA',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSPX',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLXYK',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFHM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ03JPSA',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLYBK',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFFD',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSQ3',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLYGF',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLYMX',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	}
]
module.exports = { newOSArqUpdate }
