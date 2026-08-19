const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')

const newOSArqUpdate = [
	{
		serial: 'MXL051085B',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL5260NMH',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSPV',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFFW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXJ00503RW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ00RZN5',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJERNRM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL31817JM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLYTX',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	}
]
module.exports = { newOSArqUpdate }
