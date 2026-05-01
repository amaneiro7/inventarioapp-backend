const { operatingSystemArq, osArqName } = require('../operatingSystem/operatingSystemArq')

const newRAMUpdate = [
	{
		serial: 'MXL41804V5',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 8, 0, 0]
	},
	{
		serial: 'MJ00RZH1',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MJ017EB',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL3201W16',
		memoryRamCapacity: 6,
		memoriaRamModules: [2, 2, 2, 0],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MXL5260NMB',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL3190L58',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL5260NMJ',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJ072WJA',
		memoryRamCapacity: 16,
		memoriaRamModules: [16, 0],
		memoriaRamModulesDB: [16, 16]
	},
	{
		serial: 'MJ03JPQ3',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL3151VKT',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL31817R3',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41806YT',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [4, 4, 4, 0]
	},
	{
		serial: 'MJXKCTR',
		memoryRamCapacity: 10,
		memoriaRamModules: [2, 8],
		memoriaRamModulesDB: [2, 2]
	},
	{
		serial: 'MXL41806YW',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804SX',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MXL41801BG',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL41801CJ',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJMMFEV',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL41801GN',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL41801BX',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXJ906079K',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 1],
		memoriaRamModulesDB: [1, 0.25, 1, 0.25]
	},
	{
		serial: 'MXL41804X1',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [8, 4, 4, 0]
	},
	{
		serial: 'MJHERAC',
		memoryRamCapacity: 2,
		memoriaRamModules: [2, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJ04CSP1',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8],
		memoriaRamModulesDB: [8, 4]
	},
	{
		serial: 'MJMMEMH',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ90607RB',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 1],
		memoriaRamModulesDB: [0.5, 0.5, 1, 1]
	},
	{
		serial: 'MJBPHBW',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [8, 8]
	},
	{
		serial: 'MJHDHGR',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJMLXXY',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMCWE',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ00501RY',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXL4020TN7',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [2, 2, 2, 0]
	},
	{
		serial: 'MJMMETP',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYTF',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL41804XG',
		memoryRamCapacity: 12,
		memoriaRamModules: [2, 8, 2, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL5501YRM',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MJMLYEH',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMEWG',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ00503SV',
		memoryRamCapacity: 6,
		memoriaRamModules: [4, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXJ94709ZS',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJHDHPD',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJMMEMX',
		memoryRamCapacity: 2,
		memoriaRamModules: [2, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJMLYHV',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMFKT',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL41801VQ',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 4, 0, 0]
	},
	{
		serial: 'MXL41804TP',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MXL31809V7',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL3180CS3',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL1390T9C',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXL41804XY',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 4, 8, 0],
		memoriaRamModulesDB: [4, 8, 8, 0]
	},
	{
		serial: 'MJ04CSP2',
		memoryRamCapacity: 16,
		memoriaRamModules: [16, 0],
		memoriaRamModulesDB: [4, 8]
	},
	{
		serial: 'MXL41806WV',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MJMMETA',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL333293Y',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [8, 8]
	},
	{
		serial: 'MJMLYEX',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJBPHEF',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL41801T0',
		memoryRamCapacity: 12,
		memoriaRamModules: [2, 2, 8, 0],
		memoriaRamModulesDB: [2, 8, 8, 0]
	},
	{
		serial: 'MJMLYKE',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL41801WL',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MJMMCML',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL31600JK',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 2, 0, 0]
	},
	{
		serial: 'MJMLXZB',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJTYGVV',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MXJ90607WT',
		memoryRamCapacity: 3,
		memoriaRamModules: [1, 0.5, 1, 0],
		memoriaRamModulesDB: [1, 0.5, 1, 0]
	},
	{
		serial: 'MJMLXXW',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYEV',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYRX',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJ13K17',
		memoryRamCapacity: 6,
		memoriaRamModules: [4, 2],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXJ9200B3P',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 0.5, 1],
		memoriaRamModulesDB: [1, 1, 0.5, 1]
	},
	{
		serial: 'MXL1390T9R',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXL4020TPS',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MJMLXXD',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMLYVZ',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMFCB',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ90704J9',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 0.5],
		memoriaRamModulesDB: [0.5, 1, 1, 0]
	},
	{
		serial: 'MJMMFFL',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ90607NV',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 0.5],
		memoriaRamModulesDB: [1, 1, 1, 0.5]
	},
	{
		serial: 'MJMMCBK',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL31600JD',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MJMLYDB',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL3201T0D',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [4, 8, 0, 0]
	},
	{
		serial: 'MJMMFET',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMCDV',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ92004HS',
		memoryRamCapacity: 3,
		memoriaRamModules: [1, 1, 1, 0],
		memoriaRamModulesDB: [1, 1, 0, 0]
	},
	{
		serial: 'MXJ92004DV',
		memoryRamCapacity: 3,
		memoriaRamModules: [1, 1, 1, 0],
		memoriaRamModulesDB: [1, 1, 0, 0]
	},
	{
		serial: 'MXL1370M2W',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXJ92004GM',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 1],
		memoriaRamModulesDB: [1, 1, 0, 0]
	},
	{
		serial: 'MXL41801GW',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXJ71306JS',
		memoryRamCapacity: 3,
		memoriaRamModules: [0.5, 1, 1, 0],
		memoriaRamModulesDB: [0.5, 1, 1, 0]
	},
	{
		serial: 'MXL3201WMZ',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 8, 0, 0]
	},
	{
		serial: 'MJMMFDB',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXL02610DP',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 2, 2, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801TQ',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	// checkpoint
	{
		serial: 'MXL0260ZHZ',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXJ00609JW',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 2, 2, 0]
	},
	{
		serial: 'MJXDLHE',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [8, 0]
	},
	{
		serial: 'MJMTGDN',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MXJ00601JQ',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MJHCVGV',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MJMMEVA',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMFKZ',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MJMMFBZ',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ00501RP',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 0, 0, 0]
	},
	{
		serial: 'MXJ94709Z5',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 2, 2, 2]
	},
	{
		serial: 'MXL31809W2',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL31600B8',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MXL41801SH',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJ03JPNV',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJHERZB',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [8, 4]
	},
	{
		serial: 'MXL41806W1',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801GR',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41806Y8',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MXL41801R9',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804TK',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804X0',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL3201WNZ',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MXL41804XM',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MXL41804XT',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804VT',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 4, 4, 4],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL3181837',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MJTYGVR',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL41801GS',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41806XQ',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 4, 4, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJTYGXA',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL41806Z6',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 4, 8, 0],
		memoriaRamModulesDB: [2, 4, 2, 4]
	},
	{
		serial: 'MJ04CSNZ',
		memoryRamCapacity: 24,
		memoriaRamModules: [8, 16],
		memoriaRamModulesDB: [8, 0]
	},
	{
		serial: 'MXJ90607SN',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 1],
		memoriaRamModulesDB: [1, 0.5, 0.5, 1]
	},
	{
		serial: 'MXL31600HT',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [2, 4, 2, 0]
	},
	{
		serial: 'MJMMFGG',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MJ04CSNU',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8],
		memoriaRamModulesDB: [4, 4]
	},
	{
		serial: 'MJ04HSWV',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4],
		memoriaRamModulesDB: [8, 8]
	},
	{
		serial: 'MXL41801TV',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 4, 0, 0]
	},
	{
		serial: 'MXL41806XY',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4, 0, 0],
		memoriaRamModulesDB: [4, 8, 4, 0]
	},
	{
		serial: 'MXL5260NLH',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8],
		memoriaRamModulesDB: [8, 4]
	},
	{
		serial: 'MXL41801R1',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 4, 4, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801FY',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 4, 4, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MJ08H4V8',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4],
		memoriaRamModulesDB: [8, 0]
	},
	{
		serial: 'MXL41806VL',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 4, 4, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41806ZX',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804WZ',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 4, 4, 4],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL41801FG',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8, 0, 0],
		memoriaRamModulesDB: [8, 8, 0, 0]
	},
	{
		serial: 'MJ04CSQL',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 8],
		memoriaRamModulesDB: [4, 0]
	},
	{
		serial: 'MXL41801B4',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL31817JM',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 2, 2, 2]
	},
	{
		serial: 'MXL41804W2',
		memoryRamCapacity: 20,
		memoriaRamModules: [8, 4, 4, 4],
		memoriaRamModulesDB: [8, 4, 4, 0]
	},
	{
		serial: 'MXL3181809',
		memoryRamCapacity: 8,
		memoriaRamModules: [2, 2, 4, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41804W3',
		memoryRamCapacity: 8,
		memoriaRamModules: [8, 0, 0, 0],
		memoriaRamModulesDB: [8, 4, 2, 2]
	},
	{
		serial: 'MXL41804YN',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [2, 8, 0, 0]
	},
	{
		serial: 'MXL41801BF',
		memoryRamCapacity: 8,
		memoriaRamModules: [4, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801S1',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4, 0, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MJ13M80',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0],
		memoriaRamModulesDB: [8, 0]
	},
	{
		serial: 'MXL41806XR',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 8, 4, 0],
		memoriaRamModulesDB: [4, 0, 0, 0]
	},
	{
		serial: 'MXL41801V2',
		memoryRamCapacity: 16,
		memoriaRamModules: [4, 8, 4, 0],
		memoriaRamModulesDB: [8, 4, 0, 0]
	},
	{
		serial: 'MXL9161ZV7',
		memoryRamCapacity: 12,
		memoriaRamModules: [8, 4],
		memoriaRamModulesDB: [16, 0]
	},
	{
		serial: 'MXL41801GG',
		memoryRamCapacity: 12,
		memoriaRamModules: [4, 4, 4, 0],
		memoriaRamModulesDB: [4, 4, 0, 0]
	},
	{
		serial: 'MXL41801DL',
		memoryRamCapacity: 16,
		memoriaRamModules: [8, 8, 0, 0],
		memoriaRamModulesDB: [8, 0, 0, 0]
	},
	{
		serial: 'MXL318182D',
		memoryRamCapacity: 6,
		memoriaRamModules: [2, 2, 2, 0],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MXJ83302YX',
		memoryRamCapacity: 2,
		memoriaRamModules: [1, 1, 0, 0],
		memoriaRamModulesDB: [2, 1, 0, 0]
	},
	{
		serial: 'MJ39N35',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2],
		memoriaRamModulesDB: [2, 0]
	},
	{
		serial: 'MXJ90703D2',
		memoryRamCapacity: 2,
		memoriaRamModules: [1, 1, 0, 0],
		memoriaRamModulesDB: [1, 1, 1, 0]
	},
	{
		serial: 'MXJ9200D7F',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 1],
		memoriaRamModulesDB: [1, 1, 1, 0]
	},
	{
		serial: 'MXJ90607PQ',
		memoryRamCapacity: 3,
		memoriaRamModules: [0.25, 2, 0.5, 0],
		memoriaRamModulesDB: [2, 0.5, 0.25, 0]
	},
	{
		serial: 'MXJ90701H3',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 1, 0.5],
		memoriaRamModulesDB: [1, 1, 1, 0.5]
	},
	{
		serial: 'MXJ90702HS',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 1, 0.5, 1],
		memoriaRamModulesDB: [1, 1, 0.5, 1]
	},
	{
		serial: 'MXL3201WH8',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [2, 2, 2, 0]
	},
	{
		serial: 'MXJ00503SG',
		memoryRamCapacity: 6,
		memoriaRamModules: [2, 2, 2, 0],
		memoriaRamModulesDB: [2, 2, 0, 0]
	},
	{
		serial: 'MXL3151VLT',
		memoryRamCapacity: 4,
		memoriaRamModules: [2, 2, 0, 0],
		memoriaRamModulesDB: [4, 2, 0, 0]
	},
	{
		serial: 'MXJ83302YR',
		memoryRamCapacity: 4,
		memoriaRamModules: [1, 0.5, 1, 1],
		memoriaRamModulesDB: [1, 1, 1, 0.5]
	},
	{
		serial: 'MXJ00601ML',
		memoryRamCapacity: 4,
		memoriaRamModules: [4, 0, 0, 0],
		memoriaRamModulesDB: [4, 2, 0, 0]
	}
]

// newRAMUpdate.forEach(item => {
// 	// verificar que el modulo nuevo y el viejo tenga la misma longitud
// 	if (item.memoriaRamModules.length !== item.memoriaRamModulesDB.length) {
// 		console.error(`Error: El módulo nuevo y el módulo de la base de datos para el serial ${item.serial} no tienen la misma longitud.`);
// 		return;
// 	}
// 	// Sumar los módulos de RAM del nuevo módulo y compararlo con memoryRamCapacity
// 	const totalNewRAM = item.memoriaRamModules.reduce((acc, val) => acc + val, 0);
// 	if (totalNewRAM !== item.memoryRamCapacity) {
// 		console.error(`Error: La suma de los módulos de RAM del nuevo módulo para el serial ${item.serial} no coincide con memoryRamCapacity.`);
// 		return;
// 	}
// })

module.exports = { newRAMUpdate }
