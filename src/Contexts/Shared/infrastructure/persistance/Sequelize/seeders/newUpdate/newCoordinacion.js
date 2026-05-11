const { capitalCadena } = require('./capitalCadena')
const { unionGerenciaVP } = require('./newGerencia2')
const { rangeLevel } = require('./newJerarquia')

const now = new Date()

const newCoordinacion = [
	{
		id: '2f6aec31-15b2-46af-8b19-f85682e7b565',
		name: capitalCadena('Coordinación Capacitación'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. Cumplimiento Y Control De Gestión'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7f2130af-5f90-43fd-95d6-11fb4bc5593f',
		name: capitalCadena('Coordinación Cumplimiento Normativo'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. Cumplimiento Y Control De Gestión'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f880384e-a5dc-4894-ac4f-32987470c50e',
		name: capitalCadena('Coordinación Inspección'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'V.P. Cumplimiento y Control'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dc2dd18e-87a3-490d-bc58-ee12c1e4afce',
		name: capitalCadena('Coordinacion Operaciones Accionarias'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Area Valores Y Accionistas'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6269eb53-a62c-4d30-ba02-386f7818d091',
		name: capitalCadena('Coordinación Atención Al Accionista'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Area Valores Y Accionistas'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7757216e-b714-4138-abd0-61145218a8bc',
		name: capitalCadena('Coordinación de Formación'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '04f40df1-0b8f-4dd0-9420-50541914f5b8',
		name: capitalCadena('Coordinación Investigaciones Maracaibo'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'Gerencia De Investigaciones'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c2f8d6d0-bade-4f83-8d8d-fde749f40dc4',
		name: capitalCadena('Coordinación Investigaciones Caracas'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'Gerencia De Investigaciones'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0b61db0a-5b24-4790-b890-f5b4543ad67b',
		name: capitalCadena('Coord. Cobranza De Creditos Al Consumo'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Área De Cobranza Y Recuperaciones'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '32b90cd4-28f4-47f5-8fdd-9eddd45c55a8',
		name: capitalCadena('Coord. Creditos Comerciales'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Área De Cobranza Y Recuperaciones'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '43a307b3-c932-4216-a243-181acdb988e9',
		name: capitalCadena('Coordinación Monitoreo POS Caracas'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. Soporte A Canales Electrónicos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '93f1522f-f370-40cc-a3d5-0914e6e13d07',
		name: capitalCadena('Coordinación Soporte Vip'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8912966f-c6cd-482d-bf72-bc7cc7853851',
		name: capitalCadena('Coordinación Atención Al Cliente'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'V.P. Atención Al Cliente'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '91e43bcb-c07a-441f-80e7-3af723451472',
		name: capitalCadena('Coordinación Cont. Operativo de Centros de Acopio'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'V.P. Operaciones De Efectivo'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '45125c42-9e0f-40e4-b500-dbec20669bf4',
		name: capitalCadena('Coordinación Liberaciones'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(d => d.name.toLowerCase() === 'V.P. Asuntos Legales'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fabde7d1-3083-4c5b-8853-97903a3390f7',
		name: capitalCadena('Coordinación Diseño Gráfico'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. De Mercadeo Y Comunicaciones Corporativas'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e45dbd8e-68dd-412e-9657-cb0798b39c06',
		name: capitalCadena('Coordinación de Emprendedores'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. Desarollo De Negocios E Innovación'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '01673c53-f909-438d-a3dd-38242aa3e421',
		name: capitalCadena('Coordinación Inteligencia De Negocios'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. Inteligencia De Negocios Y Analítica Digital'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a4e3d335-a346-4104-9edc-a0c7134e2769',
		name: capitalCadena('Coordinacion Control Y Registro De Operaciones'),
		level: rangeLevel.COORDINACION,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionGerenciaVP.find(
			d => d.name.toLowerCase() === 'V.P. Regional Gestión Operativa De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	}
]

const unionCoord = unionGerenciaVP.concat(newCoordinacion)

module.exports = { unionCoord, newCoordinacion }

//
