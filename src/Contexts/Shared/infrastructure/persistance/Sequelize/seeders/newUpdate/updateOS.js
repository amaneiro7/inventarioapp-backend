const { osName, operatingSystem } = require('../operatingSystem/operatingSystem')

const newOSUpdate = [
	{
		serial: 'MJ08H7Y6',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS101909)[0].id
	},
	{
		serial: 'MJ08H80V',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS101909)[0].id
	},
	{
		serial: 'MJ08H54B',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS101909)[0].id
	},
	{
		serial: 'MJ08H52G',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS101909)[0].id
	},
	{
		serial: 'MP1LQD9N',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1020H2)[0].id
	},
	{
		serial: 'MXL41804V5',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1020H2)[0].id
	},
	{
		serial: 'MJ08H4TW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1020H2)[0].id
	},
	{
		serial: 'MJ08H4XK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1020H2)[0].id
	},
	{
		serial: 'MJ08H83A',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1020H2)[0].id
	},
	{
		serial: 'MJ017EB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL5260NMB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3190L58',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL5260NMJ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPQ3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: '5CG950553S',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMELY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPQY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL31817R3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ072WRQ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXYD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41806YT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801TS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801BT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ08H52L',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJXKCTR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41806YW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801BG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801CJ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFEV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801BP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41801BX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYMP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04HSWM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMAXY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCDM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ906079K',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04HSUK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41804TD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41804X1',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHERAC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMEMH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ90607RB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJBPHBW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDHGR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXXY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL051088D',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHERAB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCWE',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00501RY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMETM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMETP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMTGCD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYTF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0502DST',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0510888',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3200P57',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ017YY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYTN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0430B0L',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYEH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMEWG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00503SV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJWEBD3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ94709ZS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ945011G',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPSM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPRM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDHPD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMEMX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJXKDMK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYHV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFKT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00609LG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMEPD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYNC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41804TP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL31809V7',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMEWL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL1390T9C',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL4020TNW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMETA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL333293Y',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYEX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00700LF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJBPHEF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSPD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHCVNG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYEK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYKE',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL4020SLS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL051088T',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL41804Y2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCML',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXZB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDHZC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJTYGWH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXXW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYEV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSNP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYRX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDHNH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ13K17',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL1390T9R',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL4020TPS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFFH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXXD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYVZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSP0',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ94500Y6',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFCB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPNK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL04309XF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL051089M',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ94500ZT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL31600BT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFFL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPPB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ13L01',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCBK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMHWZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04HSX5',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00609H5',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYDB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFET',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL3200P49',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04CSMW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ04HSUW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL4020SP4',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMCDV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDHGD',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPPV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL5260NMN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0260ZGS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFDB',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL4020SNT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL02610DP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL4020TQY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYFW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL04309W4',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ08H502',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL1390T3R',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL31817ZR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYRH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0260ZHZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHERDK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL1390T9D',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL10208MP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL31817JK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ13M58',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHDKBR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMTGDN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL02610FG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ00XUAV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00601JQ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL02610G6',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0430B1X',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00501RZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXZT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0502DSH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL10208M1',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJHCVGV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMEVA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL0260WNQ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL31817R8',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLXXN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00601M7',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFKZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJ03JPP3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMMFBZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJLKHR2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXL5260NML',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MXJ00501RP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: 'MJMLYEW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1022H2)[0].id
	},
	{
		serial: '5CG12123MC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1122H2)[0].id
	},
	{
		serial: '5CG12123MK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1122H2)[0].id
	},
	{
		serial: 'MJ08H4VH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1123H2)[0].id
	},
	{
		serial: 'MXL8512CZR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL31809W2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL31600B8',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: '5CG81264RP',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801SH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MJ03JPNV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41806W1',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801GR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41806Y8',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801R9',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801D4',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MJ00RZGN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804TK',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804X0',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801W2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL3201WNZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804XM',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804XT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804TG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41804VT',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL3181837',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MJTYGVR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801GS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41806XQ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'BG322S21010310',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MXL41801WC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1124H2)[0].id
	},
	{
		serial: 'MJTYGXA',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ00RZES',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL85215X1',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSPJ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806Z6',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSNZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSNU',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04HSWV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801FS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801TV',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806XY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL5260NLH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801R1',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801FY',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801DC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ08H4V8',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806VL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806ZX',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804WS',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804YC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804WZ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801FG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ04CSQL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801B4',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804WL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804W2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804VW',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL3181809',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804W3',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804YN',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801BF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801S1',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41804XF',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801TH',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL9242DX0',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: '1HF51602RC',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806XR',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801V2',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41806YJ',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL9161ZV7',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801GG',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MXL41801DL',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	},
	{
		serial: 'MJ08H547',
		operatingSystemId: operatingSystem.filter(os => os.name === osName.WINDOWS1125H2)[0].id
	}
]
module.exports = { newOSUpdate }
