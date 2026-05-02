const { agenciasSite, agenciaName } = require('../location/locations')

const newLocationUpdate = [
	{
		serial: 'MXJ945011G',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0].name
	},
	{
		serial: 'MJMLYMP',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0].name
	},
	{
		serial: 'MJHDHPD',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0].name
	},
	{
		serial: 'MJBPHCZ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].name
	},
	{
		serial: 'MJ017EB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].name
	},
	{
		serial: 'MJMMEMX',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(011)'])[0].name
	},
	{
		serial: 'MJXKDMK',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0].name
	},
	{
		serial: 'MJMMFHY',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0].name
	},
	{
		serial: 'MXL31817JN',
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].name
	},
	{
		serial: 'MJ00XUAV',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(012)'])[0].name
	},
	{
		serial: 'MJMMELY',
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].name
	},
	{
		serial: 'MXJ00609LG',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0].name
	},
	{
		serial: 'MJHDHGD',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(014)'])[0].name
	},
	{
		serial: 'MJMMEPD',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(019)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(019)'])[0].name
	},
	{
		serial: 'MJMLYNC',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(019)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(019)'])[0].name
	},
	{
		serial: 'MJMMFKZ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(021)'])[0].name
	},
	{
		serial: 'MXL41804TP',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(025)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(025)'])[0].name
	},
	{
		serial: 'MJMMAXY',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(028)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(028)'])[0].name
	},
	{
		serial: 'MXL31809V7',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(035)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(035)'])[0].name
	},
	{
		serial: 'MXL4020TN7',
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].name
	},
	{
		serial: 'MXL333293Y',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(044)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(044)'])[0].name
	},
	{
		serial: 'MJMMCDM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(045)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(045)'])[0].name
	},
	{
		serial: 'MXJ00700LF',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)'])[0].name
	},
	{
		serial: 'MJBPHEF',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)'])[0].name
	},
	{
		serial: 'MJXDLHE',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(050)'])[0].name
	},
	{
		serial: 'MJMLXZT',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(052)'])[0].name
	},
	{
		serial: 'MJHDHZC',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(055)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(055)'])[0].name
	},
	{
		serial: 'MJ13K17',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(059)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(059)'])[0].name
	},
	{
		serial: 'MJMMFFH',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(071)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(071)'])[0].name
	},
	{
		serial: 'MXJ94709Z5',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(080)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(080)'])[0].name
	},
	{
		serial: 'MXJ90607QY',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(097)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(097)'])[0].name
	},
	{
		serial: 'MXL41804X1',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(098)'])[0].name
	},
	{
		serial: 'MJHERAC',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(110)'])[0].name
	},
	{
		serial: 'MJMMELL',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0].name
	},
	{
		serial: 'MJBPHBW',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0].name
	},
	{
		serial: 'MXL04309XF',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0].name
	},
	{
		serial: 'MXL051088T',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(053)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(053)'])[0].name
	},
	{
		serial: 'MJHDHNH',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(057)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(057)'])[0].name
	},
	{
		serial: 'MJMLYBH',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(057)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(057)'])[0].name
	},
	{
		serial: 'MXL3201WNM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(127)'])[0].name
	},
	{
		serial: 'MXJ94500ZT',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(130)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(130)'])[0].name
	},
	{
		serial: 'MXL4020SQ9',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(068)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(068)'])[0].name
	},
	{
		serial: 'MJLKHR2',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0].name
	},
	{
		serial: 'MJHERZB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(142)'])[0].name
	},
	{
		serial: 'MJHDHGR',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(144)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(144)'])[0].name
	},
	{
		serial: 'MJMLXXD',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(073)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(073)'])[0].name
	},
	{
		serial: 'MXL1390T40',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0].name
	},
	{
		serial: 'MXL051088D',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0].name
	},
	{
		serial: 'MJMLYLB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)'])[0].name
	},
	{
		serial: 'MJERNFV',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)T'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(153)T'])[0].name
	},
	{
		serial: 'MJ08H51A',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(155)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(155)'])[0].name
	},
	{
		serial: 'MXJ71306GB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(159)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(159)'])[0].name
	},
	{
		serial: 'MJ13L01',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0].name
	},
	{
		serial: 'MXL0260WNQ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0].name
	},
	{
		serial: 'MJHERAB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(168)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(168)'])[0].name
	},
	{
		serial: 'MJMMHWZ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].name
	},
	{
		serial: 'MXJ00609H5',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].name
	},
	{
		serial: 'MJMLYDB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].name
	},
	{
		serial: 'MJMMETM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(196)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(196)'])[0].name
	},
	{
		serial: 'MJMLXZX',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0].name
	},
	{
		serial: 'MJMMCWA',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0].name
	},
	{
		serial: 'MJ03JPP5',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(166)'])[0].name
	},
	{
		serial: 'MJMMETP',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(202)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(202)'])[0].name
	},
	{
		serial: 'MJMTGCD',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(208)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(208)'])[0].name
	},
	{
		serial: 'MXL1390T4N',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(214)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(214)'])[0].name
	},
	{
		serial: 'MJMLYTF',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(220)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(220)'])[0].name
	},
	{
		serial: 'MJMLYFW',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(221)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(221)'])[0].name
	},
	{
		serial: 'MXL0510888',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(248)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(248)'])[0].name
	},
	{
		serial: 'MJMLYTN',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(255)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(255)'])[0].name
	},
	{
		serial: 'MXL31600JD',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(255)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(255)'])[0].name
	},
	{
		serial: 'MXL0430B0L',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(256)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(256)'])[0].name
	},
	{
		serial: 'MXL3201T0D',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(256)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(256)'])[0].name
	},
	{
		serial: 'MJMLYEH',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(257)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(257)'])[0].name
	},
	{
		serial: 'MJMLXXN',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(259)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(259)'])[0].name
	},
	{
		serial: 'MXJ00601M7',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(259)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(259)'])[0].name
	},
	{
		serial: 'MJMMFGG',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(259)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(259)'])[0].name
	},
	{
		serial: 'MJMLYRH',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0].name
	},
	{
		serial: 'MXL3201W4V',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0].name
	},
	{
		serial: 'MJ13M80',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(261)'])[0].name
	},
	{
		serial: 'MXL41804XM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].name
	},
	{
		serial: 'MJTYGXA',
		locationId: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['BOLEITA'])[0].name
	},
	{
		serial: 'MJWEBD3',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0].name
	},
	{
		serial: 'MJ08H4V8',
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].name
	},
	{
		serial: 'MXL10208MP',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0].name
	},
	{
		serial: 'MJHERDK',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(270)'])[0].name
	},
	{
		serial: 'MXL31817JK',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(271)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(271)'])[0].name
	},
	{
		serial: 'MJ13M58',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(271)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(271)'])[0].name
	},
	{
		serial: 'MXL02610FG',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(273)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(273)'])[0].name
	},
	{
		serial: 'MJMTGDN',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(273)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(273)'])[0].name
	},
	{
		serial: 'MXJ00601JQ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(275)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(275)'])[0].name
	},
	{
		serial: 'MXL04309W4',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(231)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(231)'])[0].name
	},
	{
		serial: 'MXL41806YJ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0].name
	},
	{
		serial: 'MJMLXXB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(275)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(275)'])[0].name
	},
	{
		serial: 'MXJ94709ZS',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(276)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(276)'])[0].name
	},
	{
		serial: 'MXL02610G6',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(276)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(276)'])[0].name
	},
	{
		serial: 'MXJ00501RZ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(276)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(276)'])[0].name
	},
	{
		serial: 'MXJ00601J0',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(279)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(279)'])[0].name
	},
	{
		serial: 'MJMMEVW',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(279)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(279)'])[0].name
	},
	{
		serial: 'MJ08H502',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(235)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(235)'])[0].name
	},
	{
		serial: 'MXL31817JM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(324)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(324)'])[0].name
	},
	{
		serial: 'MXL3201WMZ',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(258)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(258)'])[0].name
	},
	{
		serial: 'MXL31600HT',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(258)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(258)'])[0].name
	},
	{
		serial: 'MXL31817R8',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(258)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(258)'])[0].name
	},
	{
		serial: 'MJ08H507',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].name
	},
	{
		serial: 'MXL04309Z8',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].name
	},
	{
		serial: 'MXJ00501RP',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(106)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(106)'])[0].name
	}
]
module.exports = { newLocationUpdate }
