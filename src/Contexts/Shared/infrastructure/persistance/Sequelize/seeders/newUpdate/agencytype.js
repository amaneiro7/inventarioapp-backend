const { agenciaName, agenciasSite } = require('../location/locations')

const agencyClass = [
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(016)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(016)'])[0].name,
		agencyClassification: 'C'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(030)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(030)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(031)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(031)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(032)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(032)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(101)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(101)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(102)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(102)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(119)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(119)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(122)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(122)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(123)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(123)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(125)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(125)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(126)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(126)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(162)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(162)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(169)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(169)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(210)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(210)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(262)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(262)'])[0].name,
		agencyClassification: 'C'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(263)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(263)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(296)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(296)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(297)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(297)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(299)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(299)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(301)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(301)'])[0].name,
		agencyClassification: 'C'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(302)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(302)'])[0].name,
		agencyClassification: 'C'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(303)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(303)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(308)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(308)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(309)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(309)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(311)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(311)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(313)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(313)'])[0].name,
		agencyClassification: 'A'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(314)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(314)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(315)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(315)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(316)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(316)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(317)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(317)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(318)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(318)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(321)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(321)'])[0].name,
		agencyClassification: 'C'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(323)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(323)'])[0].name,
		agencyClassification: 'B'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(326)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(326)'])[0].name,
		agencyClassification: 'C'
	},
	{
		id: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(327)'])[0].id,
		name: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(327)'])[0].name,
		agencyClassification: 'C'
	}
]

module.exports = {
	agencyClass
}
