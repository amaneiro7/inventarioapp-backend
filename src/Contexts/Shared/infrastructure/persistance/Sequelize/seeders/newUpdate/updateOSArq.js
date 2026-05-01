const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')

const newOSArqUpdate = [
	{
		serial: 'MJTYGXA',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL41806YT',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ03JPNV',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL41804TK',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSQL',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL41801BG',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL3201WNZ',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJTYGVR',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL41801BP',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL4020TM5',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ04HSWM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL41804X1',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMMEMH',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMELL',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJHDHGR',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL051088D',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMCWE',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMTGCD',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL0510888',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL3200P57',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLYTN',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL3201T0D',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL0430B0L',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL41801GW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXJ945011G',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL3201WMZ',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMMEMX',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJXKDMK',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLYHV',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFKT',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMEPD',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLYNC',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL1390T9C',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL333293Y',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXJ00609JW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJXDLHE',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXJ00700LF',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSPD',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJHCVNG',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL41804Y2',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMCML',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJTYGWH',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSNP',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJHDHNH',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ13K17',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL1390T9R',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL4020TPS',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFFH',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ04CSP0',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXJ94500Y6',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFCB',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ03JPNK',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL051089M',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJHERZB',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMMFFL',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLYLB',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ03JPPB',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ13L01',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ04HSX5',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXJ00609H5',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMFET',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL3200P49',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ04CSMW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJHDHGD',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJ03JPPV',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL5260NMN',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL02610DP',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMLYFW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMMFGG',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLYRH',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL10208MP',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL31817JK',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ13M58',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMTGDN',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL02610G6',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMEVW',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMLXZT',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL31817JM',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJHCVGV',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJMMEVA',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJERNFV',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXL0260WNQ',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL31817R8',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MXJ00601M7',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ13M80',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['32BITS'])[0].id
	},
	{
		serial: 'MJMMFKZ',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJ03JPP3',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MJLKHR2',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	},
	{
		serial: 'MXL5260NML',
		operatingSystemArqId: operatingSystemArq.filter(os => os.name === osArqName['64BITS'])[0].id
	}
]
module.exports = { newOSArqUpdate }
