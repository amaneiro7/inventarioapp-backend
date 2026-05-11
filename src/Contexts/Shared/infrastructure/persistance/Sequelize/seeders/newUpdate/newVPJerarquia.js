const { capitalCadena } = require('./capitalCadena')
const { newVicepresidenciaEjecutiva, newDirectiva, rangeLevel } = require('./newJerarquia')
const now = new Date()

const newVicepresidencia = [
	{
		id: 'c5695dcd-2549-42d5-b640-9d0d936ad24e',
		name: capitalCadena('V.P. Apoyo A La Presidencia'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'Presidencia'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd66d1dda-2e99-4914-836c-5e6627d67780',
		name: capitalCadena('V.P. Cumplimiento Y Control De Gestión'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Cumplimiento'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5ed2ef2e-a147-4700-96ef-28e0c8f01e61',
		name: capitalCadena('V.P. Cumplimiento y Control'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Cumplimiento'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0f55eee2-5dd4-4570-9e1b-f8800378bf36',
		name: capitalCadena('V.P. Prevención y Control LCFTFPADM'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Cumplimiento'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3b038040-5508-41a3-a24f-8d509cd81d49',
		name: capitalCadena('V.P. UPCLCFTFPADM'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Cumplimiento'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '23c1e674-c1c5-4a78-b967-69ab2c25ea6a',
		name: capitalCadena('V.P. BEI I'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '11b818d0-7a1d-47e0-87e4-a7c52ffe3ed6',
		name: capitalCadena('V.P. BEI II'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '39764533-c5af-48f3-9237-7d97c361521a',
		name: capitalCadena('V.P. BEI III'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ea43ed81-f92b-487c-b59b-8e73d470ed73',
		name: capitalCadena('V.P. BEI IV'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7c835fac-aa42-496e-b90d-7a2a7954a4e6',
		name: capitalCadena('V.P. Banca Corporativa'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0971e8f6-9cd9-40d2-94dd-0311363eb970',
		name: capitalCadena('V.P. Banca De Relación'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '842272f7-3f71-4676-9122-ea8f7bbd3e9e',
		name: capitalCadena('V.P. Corporativa Bei Sector Agropecuario'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b89d9ed8-dead-41dd-980b-3446b5f2f847',
		name: capitalCadena('V.P. Corporativa Bei Sector Financiero'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '67c83ec4-135f-4112-a0f6-cf750321e433',
		name: capitalCadena('V.P. Corporativa Bei Sector Público'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b948fd0a-9261-4234-afa7-cf775227452d',
		name: capitalCadena('V.P. Emprendimientos'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Banca Corporativa Multinacional & Energía'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6babbcc6-418b-4dfb-a64e-20d3b2b1dbd0',
		name: capitalCadena('V.P. Calidad De Servicio'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Desarrollo organizacional y transformación'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6eae5610-40d6-44c6-8080-657566d5fdc0',
		name: capitalCadena('V.P. De Recursos Humanos Y Cultura Organizacional'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Desarrollo organizacional y transformación'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '437488ec-4eb4-48e4-a31c-9e2b754a0f72',
		name: capitalCadena('V.P. Gestión Organizacional Y Procesos'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Desarrollo organizacional y transformación'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd928571d-ac60-4ec6-93f0-a25e9b2d04f3',
		name: capitalCadena('V.P. Planificación Estratégica y PMO'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Desarrollo organizacional y transformación'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5a0a84f4-25e2-4890-b2b9-c2b75a61e984',
		name: capitalCadena('V.P. Contratos Y Servicios'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6d6167dc-ccc7-407e-9218-45ee3b95768a',
		name: capitalCadena('V.P. Control De Activos'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '88da36e8-70bc-4233-b994-63e1753f87f8',
		name: capitalCadena('V.P. Control De Inmuebles'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c0e9d33c-6729-44ab-9c78-152069b1832d',
		name: capitalCadena('V.P. De Banca Internacional'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '90dceec7-d97d-4871-bbcd-fe8d2dbe006d',
		name: capitalCadena('V.P. De Contraloría'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '069e3026-9ca8-4e32-be22-73a2b3a123ae',
		name: capitalCadena('V.P. De Fideicomiso'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '938f090d-e9ba-4706-89ba-19efa9585424',
		name: capitalCadena('V.P. Gestion De Contabilidad Pagos Y Tributos'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5e2da0c0-1a63-4016-86f9-0384dd977842',
		name: capitalCadena('V.P. Infraestructura Y Mantenimiento Fisico'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '07d786f3-a317-4d2c-ab7f-c4840452ca6f',
		name: capitalCadena('V.P. Planificación Financiera Y Presupuesto'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '919fbd6d-1b3f-406e-85c6-3cfa0ed080aa',
		name: capitalCadena('V.P. Procura, Almacén Y Servicios Generales'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5641f88a-47d7-4431-b082-8b8941b754a9',
		name: capitalCadena('V.P. Gestión De Seguridad Bancaria'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión de la seguridad y prevención'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4ace7df1-f85a-43e3-a6b5-22b12e496616',
		name: capitalCadena('V.P. Prevención Y Control Del Fraude'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión de la seguridad y prevención'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fda6de0b-c7d1-4b1e-a0ec-f586b531cacb',
		name: capitalCadena('V.P. Seguridad Preventiva Y Protección Física'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión de la seguridad y prevención'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '58a503c7-1703-4b21-a706-2ae2ccd9e12c',
		name: capitalCadena('V.P. Análisis De Crédito'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión del riesgo'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aef1d8e9-fb2f-47b5-bced-9684fa6638e8',
		name: capitalCadena('V.P. Seguimiento Y Control De Credito'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión del riesgo'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c4bb47f8-9f4b-48df-8101-abd0fa4a608e',
		name: capitalCadena('V.P. Desarrollo De Sotware'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Ingenieria tecnológica'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8aaa89c4-63c3-4dc6-849c-8568ddbeed2c',
		name: capitalCadena('V.P. Gestión De Proyectos TI'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Ingenieria tecnológica'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b1d0ddaa-d855-451f-94c8-341a44f4eb5a',
		name: capitalCadena('V.P. Gestión De Soporte Técnico Y Arquitectura TI'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Ingenieria tecnológica'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '575b1ba1-c560-4b48-b5f0-3273be9b7ef3',
		name: capitalCadena('V.P. Soporte A Canales Electrónicos'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Ingenieria tecnológica'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e20bc67f-54a2-4215-b500-8dec991ebb4a',
		name: capitalCadena('V.P. Tecnología'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Ingenieria tecnológica'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '966967d1-5d8e-499f-9265-317beaa96023',
		name: capitalCadena('V.P. Atención Al Cliente'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Operaciones y Administración'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6c617337-dc74-443d-ab62-cec323082c59',
		name: capitalCadena('V.P. De Gestión Operativa Interna Y Proyectos Espe'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Operaciones y Administración'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3589c293-2ddc-4a61-a97f-cd42251c32a1',
		name: capitalCadena('V.P. De Liquidaciones Y Servicios'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Operaciones y Administración'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '59a045c8-16a6-4ef9-9e4b-83bb623674d8',
		name: capitalCadena('V.P. Emisión Y Distribución'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Operaciones y Administración'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fd65ee48-db0f-4b7c-8279-8e91abc0e516',
		name: capitalCadena('V.P. Operaciones De Efectivo'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Operaciones y Administración'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '33c92fe0-0ed6-4a00-bbc6-77395c6774af',
		name: capitalCadena('V.P. Operaciones De Tesorería'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Operaciones y Administración'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '01be4a1a-99cb-40fb-b53a-991ce204f016',
		name: capitalCadena('V.P. Aseguramiento Normativo'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Servicios jurídicos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3207c00f-56f4-4d39-ac07-a65d853ca720',
		name: capitalCadena('V.P. Asuntos Legales'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Servicios jurídicos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5e4da987-03b1-4366-928b-3e23ad851fd9',
		name: capitalCadena('V.P. De Mercadeo Y Comunicaciones Corporativas'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Soluciones de clientes y serv. digitales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e8bf34db-478b-484f-a1e5-45493f748a25',
		name: capitalCadena('V.P. De Productos Y Servicios De Tarjetas'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Soluciones de clientes y serv. digitales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fa2f4ec6-f6a6-465f-891a-01273931229e',
		name: capitalCadena('V.P. Desarollo De Negocios E Innovación'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Soluciones de clientes y serv. digitales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ea48feba-29b3-41d7-91af-eeac411f9c79',
		name: capitalCadena('V.P. Inteligencia De Negocios Y Analítica Digital'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Soluciones de clientes y serv. digitales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0d3a2ac5-ae7c-4ecb-a76a-801bd4bb997d',
		name: capitalCadena('V.P. Servicios Al Cliente'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Soluciones de clientes y serv. digitales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c5eb34e0-2221-4106-81cf-cf0cc229c261',
		name: capitalCadena('V.P. Soluciones Electrónicas'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. Soluciones de clientes y serv. digitales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8a200483-b93d-4017-ae74-ea80017cbbd5',
		name: capitalCadena('V.P. Eficiencia Comercial'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '17d3cd50-e9c3-40b2-b2b8-4aa136158550',
		name: capitalCadena('V.P. Gestión De Negocios'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8788719a-f0d2-4f5e-b3a7-379b22d1c9f1',
		name: capitalCadena('V.P. Regional Administración De Agencias'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '140e4554-09dd-4183-a625-92a1d912dd78',
		name: capitalCadena('V.P. Regional Gestión Operativa De Agencias'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cea270f3-e9af-45e6-818a-ae450df73b5d',
		name: capitalCadena('V.P. Regional Región Capital I'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '18be753f-fb12-43ba-9de8-e3779eabff5b',
		name: capitalCadena('V.P. Regional Región Capital II'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '570187bc-d77d-4648-a7d2-cb0dfc3c4976',
		name: capitalCadena('V.P. Región Aragua - Los Llanos'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0f56d307-73d8-4bcb-86ff-0f5e9285b109',
		name: capitalCadena('V.P. Región Centro Occidente'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '69a884f6-bc8a-4958-ae18-5df08e9ab6c1',
		name: capitalCadena('V.P. Región Occidente'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8d266515-cff6-4b1f-892d-21e1e8d3bb37',
		name: capitalCadena('V.P. Región Oriente'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(
			d => d.name.toLowerCase() === 'V.P.E. de Banca Comercial'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4bd51cdb-bb21-4cbb-898e-f45d0ae33c0f',
		name: capitalCadena('Tesoreria'),
		level: rangeLevel.VICEPRESIDENCIA_CORPORATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newVicepresidenciaEjecutiva.find(d => d.name.toLowerCase() === 'V.P.E. Finanzas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	}
]

const unidadDataWithDirectivaVPE = newVicepresidencia.concat(newVicepresidenciaEjecutiva, newDirectiva)

module.exports = { newVicepresidencia, unidadDataWithDirectivaVPE }
