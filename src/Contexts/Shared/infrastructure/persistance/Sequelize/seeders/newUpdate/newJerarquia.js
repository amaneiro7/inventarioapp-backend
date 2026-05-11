const { capitalCadena } = require('./capitalCadena')

const now = new Date()
const rangeLevel = {
	DIRECTIVA: 1,
	VICEPRESIDENCIA_EJECUTIVA: 2,
	VICEPRESIDENCIA_CORPORATIVA: 3, // La V.P. "madre"
	VICEPRESIDENCIA_REGIONAL: 4, // La V.P. subordinada (ej. Zona Oriente)
	GERENCIA_SENIOR: 5, // Gerencia que reporta a V.P.
	GERENCIA_OPERATIVA: 6, // Gerencia que reporta a otra Gerencia
	COORDINACION: 7,
	OPERATIVO: 8
}
const newDirectiva = [
	//
	{
		id: 'cf42fdde-5b62-44d3-9eb9-424970e74101',
		name: capitalCadena('Junta Directiva'),
		level: rangeLevel.DIRECTIVA,
		centroDeCosto: null,
		codigoInterno: 1,
		isUnitActive: true,
		parent_id: null,
		created_at: now,
		updated_at: now
	},
	{
		id: '239584c6-a1ea-4c63-991e-8bcb2d1be9da',
		name: capitalCadena('Presidencia Ejecutiva'),
		level: rangeLevel.DIRECTIVA,
		centroDeCosto: null,
		codigoInterno: 2,
		isUnitActive: true,
		parent_id: null,
		created_at: now,
		updated_at: now
	}
]

const newVicepresidenciaEjecutiva = [
	{
		id: '61b8339f-2cc4-421f-bc07-568a5829317e',
		name: capitalCadena('Auditoria interna'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Junta Directiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '01790d76-a27e-43ee-a271-f341152e8ba3',
		name: capitalCadena('Defensoria del cliente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Junta Directiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '39863464-8569-45f4-b53b-8c8da75cb53b',
		name: capitalCadena('Presidencia'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Junta Directiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b68aab35-fbf2-4526-ad47-f30cafd9c94f',
		name: capitalCadena('Unidad admon integral de riesgos'),
		level: 3,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Junta Directiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '80deafb2-f0ec-450d-a5a7-3dbcbd6d6f7b',
		name: capitalCadena('Secretaria de la junta directiva'),
		level: 3,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '92add847-e8b1-4f85-a115-6de56744753a',
		name: capitalCadena('V.P. Seguridad de la informacion'),
		level: 3,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b0597a95-de80-43e5-82f7-2dfa6e838bda',
		name: capitalCadena('V.P.E. Cumplimiento'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Junta Directiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a2241c01-1c76-4384-882f-73b800c41b54',
		name: capitalCadena('V.P.E. Banca Corporativa Multinacional & Energía'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c4003d5d-50a4-4f80-84b4-fc085c3b3a1a',
		name: capitalCadena('V.P.E. Banca Corporativa Nacional'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e84885a8-3965-4bea-a746-932d75013574',
		name: capitalCadena('V.P.E. Banca especializada'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '44292d67-3071-420c-af1e-fdc7c318537c',
		name: capitalCadena('V.P.E. Desarrollo organizacional y transformación'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c4196e2b-8dbb-4b9b-8844-157c76309429',
		name: capitalCadena('V.P.E. Finanzas'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '74647030-f3cf-4bc3-8467-2ea16a75614b',
		name: capitalCadena('V.P.E. Gestión de la seguridad y prevención'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '622737ef-fe7c-49c7-bcba-4eb28fdfc21d',
		name: capitalCadena('V.P.E. Gestión del riesgo'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '87210d8c-7455-4c78-8d16-6f5e6577ac4e',
		name: capitalCadena('V.P.E. Ingenieria tecnológica'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9d609775-8531-45e8-afed-97526c4a7eee',
		name: capitalCadena('V.P.E. Operaciones y Administración'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a891947e-cafa-4a3c-84f9-b756e1021e59',
		name: capitalCadena('V.P.E. Seguridad Corporativa y Prevención del Frau'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '00d90044-6344-4b43-b4c8-7adbf03b347d',
		name: capitalCadena('V.P.E. Servicios jurídicos'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e984baae-c75c-4d0a-8389-0548bd729eb0',
		name: capitalCadena('V.P.E. Soluciones de clientes y serv. digitales'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '98e30247-5bcd-427f-ad75-639edf542a73',
		name: capitalCadena('V.P.E. de Banca Comercial'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0a3f3706-7a54-493f-9d28-9027c3083f0a',
		name: capitalCadena('V.P.E. de Operaciones y Administración'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	},
	{
		id: '06c8794c-5068-4b38-ab7f-aad7f48ee6b4',
		name: capitalCadena('V.P.E. de banca corporativa'),
		level: rangeLevel.VICEPRESIDENCIA_EJECUTIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: newDirectiva.find(d => d.name === 'Presidencia Ejecutiva').id,
		created_at: now,
		updated_at: now
	}
]

module.exports = { newDirectiva, newVicepresidenciaEjecutiva, rangeLevel }
