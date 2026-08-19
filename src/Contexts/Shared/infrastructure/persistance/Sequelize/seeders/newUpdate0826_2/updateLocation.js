const { agenciasSite, agenciaName } = require('../location/locations')

const newLocationUpdate = [
	{
		serial: 'MXL31817Q3',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(103)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(103)'])[0].name
	},
	{
		serial: 'MXL051085B',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(124)'])[0].name
	},
	{
		serial: 'MXL1390T55',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0].name
	},
	{
		serial: 'MJ04CSNL',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(146)'])[0].name
	},
	{
		serial: 'MXL41801SF',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(151)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(151)'])[0].name
	},
	{
		serial: 'MXJ00503RW',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(164)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(164)'])[0].name
	},
	{
		serial: 'MXJ00609M0',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(171)'])[0].name
	},
	{
		serial: 'MJMLYFF',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(176)'])[0].name
	},
	{
		serial: 'MXL3200P49',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(181)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(181)'])[0].name
	},
	{
		serial: 'MJ00RZN5',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(197)'])[0].name
	},
	{
		serial: 'MXL31817JM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(231)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(231)'])[0].name
	},
	{
		serial: 'MXL3151VKX',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0].name
	},
	{
		serial: 'MJMLYTX',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0].name
	},
	{
		serial: 'MXL41804W4',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(233)'])[0].name
	},
	{
		serial: 'MXL41801BB',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(264)'])[0].name
	},
	{
		serial: 'MXL1390T4D',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].name
	},
	{
		serial: 'MXL3380ZZM',
		locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].id,
		locationName: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(542)'])[0].name
	}
]
module.exports = { newLocationUpdate }
