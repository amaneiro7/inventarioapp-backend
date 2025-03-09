const { directivaData, directivaOnlyNames } = require('./directiva')

const VPEOnlyNames = {
	'AUDITORIA INTERNA': 'Auditoria interna',
	'DEFENSORIA DEL CLIENTE': 'Defensoria del cliente',
	PRESIDENCIA: 'Presidencia',
	'SECRETARIA DE LA JUNTA DIRECTIVA': 'Secretaria de la junta directiva',
	'UNIDAD ADMON INTEGRAL DE RIESGOS': 'Unidad admon integral de riesgos',
	'V.P. SEGURIDAD DE LA INFORMACION': 'V.P. Seguridad de la informacion',
	'V.P.E FINANZAS': 'V.P.E. Finanzas',
	'V.P.E. BANCA ESPECIALIZADA': 'V.P.E. Banca especializada',
	'V.P.E. CUMPLIMIENTO': 'V.P.E. Cumplimiento',
	'V.P.E. DE BANCA COMERCIAL': 'V.P.E. de banca comercial',
	'V.P.E. DE BANCA CORPORATIVA': 'V.P.E. de banca corporativa',
	'V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN': 'V.P.E. Desarrollo organizacional y transformación',
	'V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN': 'V.P.E. Gestión de la seguridad y prevención',
	'V.P.E. GESTIÓN DEL RIESGO': 'V.P.E. Gestión del riesgo',
	'V.P.E. INGENIERIA TECNOLÓGICA': 'V.P.E. Ingenieria tecnológica',
	'V.P.E. OPERACIONES CENTRALIZADAS': 'V.P.E. Operaciones centralizadas',
	'V.P.E. SERVICIOS JURÍDICOS': 'V.P.E. Servicios jurídicos',
	'V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES': 'V.P.E. Soluciones de clientes y serv. digitales'
}

const VPEData = [
	{
		id: '61b8339f-2cc4-421f-bc07-568a5829317e',
		name: 'Auditoria interna',
		directivaId: directivaData.filter(directiva => directiva.name === directivaOnlyNames['JUNTA DIRECTIVA'])[0].id
	},
	{
		id: '01790d76-a27e-43ee-a271-f341152e8ba3',
		name: 'Defensoria del cliente',
		directivaId: directivaData.filter(directiva => directiva.name === directivaOnlyNames['JUNTA DIRECTIVA'])[0].id
	},
	{
		id: '39863464-8569-45f4-b53b-8c8da75cb53b',
		name: 'Presidencia',
		directivaId: directivaData.filter(directiva => directiva.name === directivaOnlyNames['JUNTA DIRECTIVA'])[0].id
	},
	{
		id: '80deafb2-f0ec-450d-a5a7-3dbcbd6d6f7b',
		name: 'Secretaria de la junta directiva',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: 'b68aab35-fbf2-4526-ad47-f30cafd9c94f',
		name: 'Unidad admon integral de riesgos',
		directivaId: directivaData.filter(directiva => directiva.name === directivaOnlyNames['JUNTA DIRECTIVA'])[0].id
	},
	{
		id: '92add847-e8b1-4f85-a115-6de56744753a',
		name: 'V.P. Seguridad de la informacion',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: 'c4196e2b-8dbb-4b9b-8844-157c76309429',
		name: 'V.P.E. Finanzas',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: 'e84885a8-3965-4bea-a746-932d75013574',
		name: 'V.P.E. Banca especializada',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: 'b0597a95-de80-43e5-82f7-2dfa6e838bda',
		name: 'V.P.E. Cumplimiento',
		directivaId: directivaData.filter(directiva => directiva.name === directivaOnlyNames['JUNTA DIRECTIVA'])[0].id
	},
	{
		id: '98e30247-5bcd-427f-ad75-639edf542a73',
		name: 'V.P.E. de banca comercial',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '06c8794c-5068-4b38-ab7f-aad7f48ee6b4',
		name: 'V.P.E. de banca corporativa',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '44292d67-3071-420c-af1e-fdc7c318537c',
		name: 'V.P.E. Desarrollo organizacional y transformación',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '74647030-f3cf-4bc3-8467-2ea16a75614b',
		name: 'V.P.E. Gestión de la seguridad y prevención',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '622737ef-fe7c-49c7-bcba-4eb28fdfc21d',
		name: 'V.P.E. Gestión del riesgo',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '87210d8c-7455-4c78-8d16-6f5e6577ac4e',
		name: 'V.P.E. Ingenieria tecnológica',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '9d609775-8531-45e8-afed-97526c4a7eee',
		name: 'V.P.E. Operaciones centralizadas',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: '00d90044-6344-4b43-b4c8-7adbf03b347d',
		name: 'V.P.E. Servicios jurídicos',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	},
	{
		id: 'e984baae-c75c-4d0a-8389-0548bd729eb0',
		name: 'V.P.E. Soluciones de clientes y serv. digitales',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	}
]

module.exports = { VPEData, VPEOnlyNames }
