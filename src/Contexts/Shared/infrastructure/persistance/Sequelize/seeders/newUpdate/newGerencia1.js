const { capitalCadena } = require('./capitalCadena')
const { rangeLevel } = require('./newJerarquia')
const { unidadDataWithDirectivaVPE } = require('./newVPJerarquia')

const now = new Date()

const newGerencia1 = [
	{
		id: '8c55dffa-d709-4fd7-b401-2546209f4599',
		name: capitalCadena('Gerencia De Area Asuntos Regulatorios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'Auditoria interna'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4be486c7-4278-44b6-b1b3-17013b065636',
		name: capitalCadena('Gerencia De Area Auditoria De Sistemas'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'Auditoria interna'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9edf81fc-7fe4-4e20-80a8-6d8618afe415',
		name: capitalCadena('Gerencia De Area Auditoria Financiera'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'Auditoria interna'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '63ed74c1-29af-4e7d-b376-fb0c51cc18f0',
		name: capitalCadena('Gerencia De Area De Auditoria De Agencias'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'Auditoria interna'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3c00d7c1-49f0-46a3-8154-d0c4a0fa6c0b',
		name: capitalCadena('Gerencia De Área Ctrl Y Seguimiento De Auditoría'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'Auditoria interna'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '48689b6e-cf5d-434a-bf0d-645c068cd0e8',
		name: capitalCadena('Gerencia Apoyo A Presidencia Ejecutiva'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'Presidencia'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5abb4d4f-fb6e-4fd3-8b08-d2f135ee01b1',
		name: capitalCadena('Gerencia De Metodología De Riesgo Financiero'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '57a41c7b-e7dc-4205-bc70-2c9e5f986025',
		name: capitalCadena('Gerencia De Monitoreo Y Seg. Sobre Cont. De Neg'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '45801a12-ec08-4bca-8713-0476f2248a41',
		name: capitalCadena('Gerencia De Riesgo De Credito'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '790ca8bc-215d-4f3c-aec8-a231788d0859',
		name: capitalCadena('Gerencia De Riesgo De Mercado Y Liquidez'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '56a7a35e-85d1-4c83-8b50-d31fd3ec3cff',
		name: capitalCadena('Gerencia De Riesgo Operacional Mid Y Back Office'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5b4bb7f9-506e-4bfc-a234-67416984f558',
		name: capitalCadena('Gerencia Estadística Sobre Metodología De Riesgo'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '17f66e1c-040d-42fd-87d1-f73cf2f7a5bd',
		name: capitalCadena('Gerencia Gestión De Información'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '46668196-e0bf-44df-8827-e138c2ea9d66',
		name: capitalCadena('Gerencia Riesgo Operacional Front Office'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Unidad admon integral de riesgos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f1d12210-d8f5-4189-865d-5333c45c71de',
		name: capitalCadena('Gerencia De Area Valores Y Accionistas'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Secretaria de la junta directiva'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fbe79f67-7121-4bf7-bcc0-30feabb9db57',
		name: capitalCadena('Gerencia De Gobierno Corporativo'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Secretaria de la junta directiva'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8565fd0f-46aa-4ee0-8aed-fce34edbe593',
		name: capitalCadena('Gerencia De Área Proyectos De Desarrollo Sostenible'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'Secretaria de la junta directiva'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '10d80e46-7bf4-400e-9a25-0954df41f552',
		name: capitalCadena('Gerencia De Area Administración De Usuarios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Seguridad de la informacion'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '38107fbd-c837-4b9c-a237-ab3de35b6490',
		name: capitalCadena('Gerencia De Area Calidad Y Cumplimiento'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Seguridad de la informacion'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '79aec376-44f1-4bef-9567-b6a55054fd47',
		name: capitalCadena('Gerencia De Area Seguridad Informatica'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Seguridad de la informacion'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bf890eb6-8ebb-439b-9e1d-8a4a691a5199',
		name: capitalCadena('Gerencia De Area Transformación'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P.E. Desarrollo organizacional y transformación'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a8dc634f-dfdf-4172-b951-1eb306c28669',
		name: capitalCadena('Gerencia De Investigaciones'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión de la seguridad y prevención'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '93b55310-419a-4078-8258-3dd13e380177',
		name: capitalCadena('Gerencia De Área De Cobranza Y Recuperaciones'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P.E. Gestión del riesgo'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a49cbb15-db1a-4b94-b6f7-06fc0c551cc0',
		name: capitalCadena('Gerencia De Area Proyectos Especiales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P.E. Ingenieria tecnológica'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0b83c7c0-09b8-4722-801f-683720dcc472',
		name: capitalCadena('V.P. De Zona II Administracion De Agencias II (adm)'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Administración De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6211bfea-995c-4242-b107-410cec53ad18',
		name: capitalCadena('V.P. De Zona I Administracion De Agencias (adm) I'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Administración De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '93178b7c-febd-4a01-8110-0343f615a0e8',
		name: capitalCadena('V.P. De Zona I Administracion De Agencias I'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Gestión Operativa De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '19acd60c-1e3b-4cd2-824b-ffd0770e1f35',
		name: capitalCadena('V.P. De Zona II Administracion De Agencias II'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Gestión Operativa De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1db0e8a8-73e1-4285-b622-481efdbb1a8c',
		name: capitalCadena('V.P. De Negocios Zona IA'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Región Capital I'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7e9d576d-72aa-4c3d-b704-0469b472faaf',
		name: capitalCadena('V.P. De Negocios Zona IIA'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Región Capital I'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b9536d34-54aa-4240-83d8-3d37e1b7baea',
		name: capitalCadena('V.P. De Negocios Zona III'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Región Capital I'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e9278213-4fca-447b-8b50-e083b338165e',
		name: capitalCadena('V.P. De Negocios Zona IIB'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Región Capital II'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9c28d6ed-a017-4af3-8a77-929d194ccae0',
		name: capitalCadena('V.P. De Negocios Zona IB'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Regional Región Capital II'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '42a198d8-778b-4acb-b41f-522f408661d1',
		name: capitalCadena('V.P. Zona Los Llanos'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Región Aragua - Los Llanos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9fa19305-d9d7-403b-9454-c82c5b87198a',
		name: capitalCadena('V.P. Zona Aragua'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Región Aragua - Los Llanos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a022e0d4-efd6-46c3-b498-a225228705bf',
		name: capitalCadena('V.P. Zona Carabobo'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Región Centro Occidente'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'df4823c9-879d-4ef8-a9b3-40c33db80007',
		name: capitalCadena('V.P. Zona Centro Occidente'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(
			d => d.name.toLowerCase() === 'V.P. Región Centro Occidente'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8147b9e6-0ea6-4f3c-8f1f-d8764c884edb',
		name: capitalCadena('V.P. Zona Zulia Falcón'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'V.P. Región Occidente'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e26fac58-95cf-436a-8ca6-2113b8571da2',
		name: capitalCadena('V.P. Zona Los Andes'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'V.P. Región Occidente'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dc177b74-948f-47c2-a786-2998fe278956',
		name: capitalCadena('V.P. Zona Insular'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'V.P. Región Oriente'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6b565809-92d6-4c94-a01c-5fafc228b102',
		name: capitalCadena('V.P. Zona Oriente'),
		level: rangeLevel.VICEPRESIDENCIA_REGIONAL,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unidadDataWithDirectivaVPE.find(d => d.name.toLowerCase() === 'V.P. Región Oriente'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	}
]

const unionVP = unidadDataWithDirectivaVPE.concat(newGerencia1)

module.exports = {
	newGerencia1,
	unionVP
}
