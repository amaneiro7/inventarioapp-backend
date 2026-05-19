const { randomUUID } = require('node:crypto')
const { updateNivel3 } = require('./unindadActualNivel3')
const { capitalCadena, cleanText } = require('./capitalCadena')
const now = new Date()

const level4Actual = [
	{
		id: '16d477f6-d345-4a0b-b3e8-9485dd920610',
		name: capitalCadena('GERENCIA DE NEGOCIOS APOYO A LA PRESIDENCIA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10102002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '52c63897-c5d1-4ee2-b615-b3fa5b77937b',
		name: capitalCadena('GERENCIA DE ÁREA DE NEGOCIOS SECTOR PÚBLICO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10102003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '267f2a11-027b-41ef-adb2-685760e47032',
		name: capitalCadena('GCIA. DE ÁREA DE NEGOCIOS SECTOR  PÚBLICO CENTRO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10102004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 101)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '71021e39-2069-4fed-a671-472097071244',
		name: capitalCadena('COORDINACIÓN SOPORTE VIP'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10103001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 10103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '517f61bf-7441-4de6-bb85-316fa7558f45',
		name: capitalCadena('COORDINACIÓN ATENCIÓN AL ACCIONISTA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10801001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 10801)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ed27666d-1d0d-4cbc-bb15-395335485681',
		name: capitalCadena('COORDINACIÓN OPERACIONES ACCIONARIAS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10801002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 10801)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6924597b-e3ea-4bd1-b37d-aba1d85d7982',
		name: capitalCadena('COORDINACIÓN RESPONSABILIDAD SOCIAL CORPORATIVA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 10803002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 10803)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '60822d12-8e50-4372-9702-c16c4023f3f9',
		name: capitalCadena('GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20411001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20411)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cd2e0be3-8c83-4747-afef-124f77333afe',
		name: capitalCadena('GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20411002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20411)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0c3ab57d-e717-4e16-9350-6b025d44c403',
		name: capitalCadena('GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20412001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20412)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a502bfb5-aae7-4f5e-9563-4e4a67164af1',
		name: capitalCadena('GCIA DE ÁREA PRODUCTOS, CONTRATOS ESPECIALES Y CRÉ'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20412005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20412)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '640f8024-a67d-46d2-97f1-7d9ab15d65aa',
		name: capitalCadena('GERENCIA SEGUIMIENTO Y CONTROL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20412006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20412)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1ac3eb78-fb54-4611-b9d1-9474143ff7f5',
		name: capitalCadena('GERENCIA DE ÁREA LEGAL DE CRÉDITOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20412007,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20412)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4d7ae60f-3dd5-4e10-82f4-364ddff31207',
		name: capitalCadena('GERENCIA DE ÁREA CORRESPONSALIA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20503001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20503)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9fab8385-b5ed-428f-a356-a7a3fb7372da',
		name: capitalCadena('GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20503002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20503)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8ee6788f-9d5d-4925-a8bc-01e42d09960e',
		name: capitalCadena('GERENCIA DE MECANISMOS CAMBIARIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20504001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20504)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3971dcc0-4dab-4203-9fa4-18819ea29edb',
		name: capitalCadena('GERENCIA DE DISTRIBUCIÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20504002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20504)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dba18e79-f7ec-495f-be09-b62d57901b13',
		name: capitalCadena('GERENCIA DE MERCADO MONETARIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20504003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20504)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '28725ae7-af47-4b33-9368-a6c08b304440',
		name: capitalCadena('GERENCIA DE RENTA FIJA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20504006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20504)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bee4f8e3-ace0-469c-9750-1c2aa050c89e',
		name: capitalCadena('GERENCIA DE ÁREA CONTABILIDAD FIDUCIARIA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20510001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20510)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9a84ad5c-82e2-4041-bc7d-fc33831bb285',
		name: capitalCadena('GERENCIA DE ÁREA NEGOCIOS FIDUCIARIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20510002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20510)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8a207ea7-563c-45ab-8f49-010753153f3e',
		name: capitalCadena('GERENCIA DE ÁREA CONTROL FINANCIERO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20511001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20511)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0e0cf5ae-d6e2-4e23-8556-eb10f844223e',
		name: capitalCadena('GERENCIA DE AREA CONTROL DE GESTIÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20511002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20511)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '54db0617-78be-4cdf-a3df-203d4ca1bb91',
		name: capitalCadena('GERENCIA DE ÁREA CONTROL PRESUPUESTARIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20511003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20511)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '29590992-96a3-4267-860d-ac7039312cff',
		name: capitalCadena('GERENCIA DE ÁREA DE CONTRALORÍA DE DATOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20511004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20511)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c6fe1660-cb0e-459b-84b3-242d7e1aff01',
		name: capitalCadena('GERENCIA DE PRESUPUESTO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20512002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20512)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b665e231-f3b7-4c33-8b6a-d95a652c4811',
		name: capitalCadena('GERENCIA DE MOD. DE INF. FINAN. Y PRESUPUESTARIA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20512003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20512)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fb94ac24-9ecb-45c1-b7dd-a2b068b2343a',
		name: capitalCadena('GERENCIA INVESTIGACIÓN ECONÓMICA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20512004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20512)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '83e73472-41f3-418b-aa0e-630d6d4d4095',
		name: capitalCadena('GERENCIA DE ÁREA MODELO DE RENTABILIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20512006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20512)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f327f2ed-f8a0-4f5c-8151-f75fb4919108',
		name: capitalCadena('GERENCIA DE ÁREA CUMPLIMIENTO TRIBUTARIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20513001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20513)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '54a959a1-745a-4658-9508-7f0656d1b4e7',
		name: capitalCadena('GERENCIA DE ÁREA CONTABILIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20513003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20513)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a3c42f0c-ea66-4409-a78e-d363aea3dd43',
		name: capitalCadena('GERENCIA DE ÁREA CONTROL E INFORMACIÓN FINANCIERA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20513004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20513)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9b8ada00-d866-4084-942a-fc7bfa38e4c2',
		name: capitalCadena('GERENCIA DE ÁREA CANALES Y PROCESOS CONTABLES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20513005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20513)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '988d1d16-d673-430d-b6c4-a0f2cfb3d8ff',
		name: capitalCadena('GCIA DE ÁREA PAGO PROVEEDORES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20513006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20513)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5f1f84ac-fd8f-4a6e-a8a6-65450547709c',
		name: capitalCadena('GERENCIA CONTROL Y GESTIÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20514001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20514)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'acc1754f-a627-4f69-b7cb-c050525c9b71',
		name: capitalCadena('GERENCIA EFICIENCIA COMERCIAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20514002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20514)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ffa367ce-f4a2-43f9-8839-e217e6f35b8a',
		name: capitalCadena('GERENCIA CONTROL Y SEGUIMIENTO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20807001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20807)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fb20f050-9c6c-4def-841b-edd5683e5505',
		name: capitalCadena('GERENCIA DE NEGOCIOS SECTOR AGROPECUARIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20807016,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20807)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'eeec633a-f4bb-49c8-b97f-14fbe1071e9b',
		name: capitalCadena('GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CAPITAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20807017,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20807)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fcf077f2-9350-4bc4-92f8-ec22a55f3646',
		name: capitalCadena('GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CENT. OCCI'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20807018,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20807)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dfccc9bd-71d1-49d4-ad4b-9235607806ca',
		name: capitalCadena('GCIA. DE NEGOCIOS SECT AGROPEC RG. ARAGUA-CARABOBO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20807019,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20807)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e7a90463-b013-4fb3-9ace-621fdc5bab1e',
		name: capitalCadena('GERENCIA DE ÁREA SECTOR FINANCIERO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20816001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20816)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7bdb885e-aaaf-432f-9f67-6e53b58081a3',
		name: capitalCadena('GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20816003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20816)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f715d370-468d-43a3-8394-5e51bcf77da8',
		name: capitalCadena('GERENCIA DE NEGOCIOS SECTOR SEGUROS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20816004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20816)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '03bb6ab1-c9a4-48ad-958f-f8bf2265871a',
		name: capitalCadena('GERENCIA DE NEGOCIOS SERVICIOS I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20819001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20819)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '304e5eb5-b242-498e-bcb2-61a3fb1dc249',
		name: capitalCadena('GERENCIA DE NEGOCIOS SERVICIOS II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20819002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20819)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f7207d10-1257-435a-b692-b4cf6c5502d4',
		name: capitalCadena('GERENCIA DE NEGOCIOS SERVICIOS III'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20819003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20819)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '221ec205-6b4d-48f3-adeb-325e527d1201',
		name: capitalCadena('GERENCIA DE NEGOCIOS MANUFACTURA Y CONSUMO I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20824001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20824)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '85658591-dab0-40f4-8285-d4c854024f1d',
		name: capitalCadena('GERENCIA DE NEGOCIOS MANUFACTURA Y CONSUMO II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20824002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20824)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ef101fae-ce36-413f-b06f-f04ba3859eaa',
		name: capitalCadena('GERENCIA DE NEGOCIOS MANUFACTURA Y CONSUMO III'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20824003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20824)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dc272155-5b3b-4feb-b438-c8a5edce7b7a',
		name: capitalCadena('V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20918001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20918)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '57fe3443-6ca5-4617-8afc-9dfbe785fd33',
		name: capitalCadena('V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20918002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20918)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '092fd5d7-d544-46fa-8e16-5957339b8c8e',
		name: capitalCadena('GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20918005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20918)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd7fc871a-2502-404c-bdb5-0b26a5896ca9',
		name: capitalCadena('GCIA DE ÁREA DE DIGITALIZAC, CTROL ARCHI. Y CORRES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20918006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20918)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'da9ec231-4ddb-4db9-9c22-3d93dbec02a7',
		name: capitalCadena('GCIA. DE ÁREA GESTIÓN ADM Y CTROL OP. DE AGENCIAS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20918008,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20918)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7ae72c2c-f9ff-4354-9c02-eba53aad2ce5',
		name: capitalCadena('V.P. ZONA ZULIA FALCÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20919001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20919)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '597bb68b-c14a-45cf-ae7f-b780d4b8537c',
		name: capitalCadena('V.P. ZONA LOS ANDES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20919002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20919)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '85a6f128-ba68-4f8b-9545-07cee355d2b2',
		name: capitalCadena('V.P. ZONA LOS LLANOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20920002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20920)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '32fc3081-58f1-4da3-b359-5d88142f8488',
		name: capitalCadena('V.P. DE ZONA ARAGUA I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20920003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20920)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '18a25eb0-4b76-49b0-b3ea-6e63357645bc',
		name: capitalCadena('V.P. DE ZONA ARAGUA II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20920004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20920)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '98c631c7-809a-4efd-a2bb-0e89888d469c',
		name: capitalCadena('V.P. ZONA CARABOBO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20921001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20921)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aa2be27a-e762-4d11-9fb3-49f76fc211ad',
		name: capitalCadena('V.P. ZONA CENTRO OCCIDENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20921002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20921)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6b33fac3-7953-4090-8d2e-ed46a553083e',
		name: capitalCadena('V.P. ZONA INSULAR'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20922001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20922)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '32a36dd5-149a-4a70-9c69-ce2c910836f3',
		name: capitalCadena('V.P. ZONA ORIENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20922002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20922)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '88c424b9-1f7f-449a-84e5-a618351c11cf',
		name: capitalCadena('V.P. DE NEGOCIOS ZONA I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20923001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20923)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '873c6e08-4ca7-453a-a538-7aea4c273588',
		name: capitalCadena('V.P. DE NEGOCIOS ZONA III'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20923003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20923)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5ae92aae-4eea-4e8e-aa9d-5a9450dae948',
		name: capitalCadena('V.P. DE NEGOCIOS ZONA I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20924001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20924)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '52d6a991-6751-4953-81da-ba0104898fb0',
		name: capitalCadena('V.P. DE NEGOCIOS ZONA II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20924002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20924)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3feb1150-342b-4ed6-8de1-6953651af0e6',
		name: capitalCadena('GERENCIA DE NEGOCIOS I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20925001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20925)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a0d31e60-760d-4b7d-a1dc-4b8e012fbe9f',
		name: capitalCadena('GERENCIA DE NEGOCIOS II'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20925002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20925)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '509d3231-6d26-4ed1-860a-02ce8af85e02',
		name: capitalCadena('GERENCIA DE NEGOCIOS CAPITAL I'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20927001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20927)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '426b56d8-e656-437d-b664-a2ca59841a17',
		name: capitalCadena('GERENCIA DE NEGOCIOS CAPITAL III'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 20927005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 20927)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7c7eb227-c06b-4c15-879d-10a5c86ddc3e',
		name: capitalCadena('GERENCIA DE ÁREA SOPORTE DE ATMS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21007001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aa8f3965-8b49-45cf-a42a-3de9bc68becb',
		name: capitalCadena('GERENCIA DE AREA DE SOPORTE POS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21007006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c9446227-9602-4561-b9a8-bfbaa9ef40e3',
		name: capitalCadena('GERENCIA DE AREA DE COMUNICACIONES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21010005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21010)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '672186c2-51fa-403f-b007-113cee7bf63f',
		name: capitalCadena('GERENCIA DE AREA PRODUCCIÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21010007,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21010)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7e6947bd-3757-4afb-918f-55545946ea76',
		name: capitalCadena('GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21010008,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21010)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ba6221f8-e748-418a-a190-edfd3796b26a',
		name: capitalCadena('GERENCIA DE AREA PLATAFORMA ESPECIALIZADA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21010009,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21010)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6177511b-1a4a-4bb6-a092-f2e37a7d11e0',
		name: capitalCadena('GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21010011,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21010)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f36975eb-020d-4dfe-8d66-99b843360818',
		name: capitalCadena('GERENCIA GESTIÓN DE PRESUPUESTO TI'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21010012,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21010)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '592b20b4-7657-4b08-90ca-6ca62ad593a4',
		name: capitalCadena('GERENCIA DE ÁREA CORE BANCARIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21016001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21016)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '77ebd6ac-289b-41f9-bc04-6addb1ae5e01',
		name: capitalCadena('GERENCIA DE ÁREA SISTEMA DE MEDIOS DE PAGO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21016003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21016)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a7e9f5d1-2470-4d67-98c8-dbe1f21b1fb7',
		name: capitalCadena('GERENCIA DE ÁREA INTEGRACIÓN DE PLATAFORMA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21016005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21016)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '61fa6fab-1c95-4ccc-82d8-3b8ebe5b1116',
		name: capitalCadena('GERENCIA DE ÁREA ASEGURAMIENTO DE SOFTWARE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21016008,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21016)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '992cb769-579c-4e28-80ac-f85915fdc813',
		name: capitalCadena('GERENCIA DE ÁREA ARQUITECTURA TI'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21017002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21017)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7a7a01d8-39a2-403d-9ff5-b2e9d9781378',
		name: capitalCadena('GERENCIA DE SOPORTE TÉCNICO CARACAS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21017003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21017)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2d43b296-c53b-4438-aa09-68a69bdafc77',
		name: capitalCadena('GERENCIA DE SOPORTE TÉCNICO OCCIDENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21017004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21017)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c78b416b-14fe-476a-84f6-a065a9061431',
		name: capitalCadena('GERENCIA DE ÁREA ENERGÍA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21017006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21017)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9a0a93e7-429e-4148-8c51-c395cb8318ac',
		name: capitalCadena('GERENCIA DE ÁREA OFICINA DE PROYECTOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c3d6c1d8-300c-4534-89f3-7a5257513a72',
		name: capitalCadena('GERENCIA DE ÁREA PROYECTOS INTEGRACI DE PLATAFORMA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9f6982b3-ae97-4e9b-84da-b844823ff96d',
		name: capitalCadena('GERENCIA DE ÁREA PROYECTOS CANALES DIGITALES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9881f612-76e4-43e0-84c7-9d6db02014e1',
		name: capitalCadena('GERENCIA DE ÁREA PROYECTOS POS Y ATM'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '70fd499c-aee3-4a2d-8c8e-c7bdbb2f2f13',
		name: capitalCadena('GERENCIA DE ÁREA PROYECTOS CORE BANCARIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'db30b56e-07a6-4445-be82-16350075e9ec',
		name: capitalCadena('GERENCIA DE ÁREA PROYECTOS BI Y REGULATORIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3b7365f2-8be1-4611-91ca-a3fd0618dd6d',
		name: capitalCadena('GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21021008,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21021)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '86b1fe67-58a8-4c9a-96dd-f705a0191de1',
		name: capitalCadena('GERENCIA DE ÁREA INTEGRACIÓN Y SOPORTE DE SOL DIGI'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21022001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21022)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3ffa3f74-7b53-43b7-8cb2-d7874cad0572',
		name: capitalCadena('GERENCIA DE ÁREA DESARROLLO DE SOLUCIONES DIGITALE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21022002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21022)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '475ac20b-ef4d-487d-b6ab-7d40779d4a0f',
		name: capitalCadena('GERENCIA DE ÁREA INGENIERÍA DE DATOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21022003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21022)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9fc76aaa-ab89-4a7d-9b5a-665d2e6b4608',
		name: capitalCadena('GERENCIA DE ARCHIVO CENTRAL DE CRÉDITO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21406003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21406)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f8a22c9f-4e67-40f0-8cd0-125f5651498a',
		name: capitalCadena('GERENCIA DE CONTROL DE CARTERA DE CREDITO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21406004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21406)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '547c2602-4d42-495c-9f4d-338af589e1eb',
		name: capitalCadena('GERENCIA DE FIANZAS, GARANTIAS Y CARTAS CRÉDITO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21406005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21406)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2fc8dc9d-36e4-4438-bc09-d9e0182ef75d',
		name: capitalCadena('GERENCIA DE VALIDACION Y CRÉDITO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21406006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21406)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8e1327c2-72de-44c4-8dd8-6373d6176a5a',
		name: capitalCadena('COORD. SEGUIMIENTO Y CONTROL DE CRÉDITO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21406007,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21406)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '41a1e343-ae36-4ff7-a9df-9ec2b549a7f4',
		name: capitalCadena('GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21407006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21407)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '55934665-7df2-4e69-b5c8-d716b8c3c933',
		name: capitalCadena('GCIA. DE ANALISIS DE CREDITO REGIÓN OCCIDENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21407009,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21407)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9964cc85-f0c6-4187-8131-ecdebeac6a54',
		name: capitalCadena('GCIA ANÁLISIS DE CRÉD BANCA COMERCIAL (P-N)'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21407010,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21407)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'be83fb83-6f13-4348-9080-b6b073649156',
		name: capitalCadena('GCIA ANÁLISIS DE CRÉD BANCA COMERCIAL (P-C-E)'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21407011,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21407)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9155d8e2-37f7-4d76-927a-0f8d68f59c3e',
		name: capitalCadena('GCIA ANÁLISIS DE CRÉD BANCA CORPORATIVA MULTINAC'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21407012,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21407)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c896e987-c1ac-4bcc-9fa5-727499079887',
		name: capitalCadena('COORD. COBRANZA DE CREDITOS AL CONSUMO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21412002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21412)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e4633768-d804-4b12-9256-8949e4d54a5f',
		name: capitalCadena('GERENCIA DE ÁREA ADMIN DE CUENTAS Y PRODUCCIÓN TDC'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21609002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21609)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd2713dd4-8f03-470f-87fd-5a8c158226a0',
		name: capitalCadena('GERENCIA DE ÁREA EMISIÓN Y DISTRIBUCIÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21609003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21609)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '67b86322-09c4-4215-93cc-28702d65afd6',
		name: capitalCadena('GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21611001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21611)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '60e72e6e-27bc-4080-be00-7c47c61bbe7d',
		name: capitalCadena('GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21611002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21611)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6859f33f-841b-4750-9ad5-3e9978bbb65a',
		name: capitalCadena('GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21611003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21611)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cc2a3483-b61d-4e7a-9c77-f290b70e213d',
		name: capitalCadena('GERENCIA DE ÁREA PLAN MAYOR'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21611011,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21611)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bb0b9ba8-8a59-4fc5-bf2f-7964206e2736',
		name: capitalCadena('GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21618001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21618)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4675a1c7-15f8-469a-b3ae-36fc41273201',
		name: capitalCadena('GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21618002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21618)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9eee2e3e-c3e6-4a82-a0be-5f60f388e1f3',
		name: capitalCadena('GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21619001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21619)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd85e6c88-d575-42c9-9232-bae45921ad51',
		name: capitalCadena('GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21619002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21619)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '61745a9e-3263-41e4-8bfc-cb0689801e71',
		name: capitalCadena('GERENCIA DE ÁREA PROCESOS ESPECIALES Y  REPORTERÍA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21619003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21619)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e26b2d25-08aa-4880-8ce4-52b86bfe8eb8',
		name: capitalCadena('GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21620001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21620)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '84cde706-86b6-496a-9d58-0a9e12803f94',
		name: capitalCadena('COORDINACIÓN ATENCIÓN AL CLIENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21620002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21620)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6abcbb24-9516-48f7-9f15-5814385e7782',
		name: capitalCadena('GERENCIA DE ÁREA CONTRATOS Y PROVEEDORES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21621002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21621)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '67e70efe-2cca-47a2-91bc-d192c8d4fe5d',
		name: capitalCadena('GCIA DE ÁREA GESTIÓN SERVICIOS ADMINISTRATIVOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21621003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21621)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd391bf8d-93c3-45fb-81e0-30e0b4976c60',
		name: capitalCadena('GERENCIA DE ÁREA PAGOS DE SERVICIOS PÚBLICOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21621004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21621)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd5672931-7f02-44a4-a2d4-bac9c0ff309c',
		name: capitalCadena('GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENEREALES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21622001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21622)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '08a10562-3096-4e2b-9eba-c48d0b1c5997',
		name: capitalCadena('GERENCIA DE ÁREA ALMACÉN Y PROVEEDURÍA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21622002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21622)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ec06fae4-9410-470d-b21a-080369cbb0ce',
		name: capitalCadena('GERENCIA DE ÁREA CONTROL DE INMUEBLES PROPIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21623001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21623)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7053a65b-9fbf-4504-a1ec-2271354be047',
		name: capitalCadena('GERENCIA DE ÁREA CONTROL DE INMUEBLES ARRENDADOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21623002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21623)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e1adf0c8-037b-4b91-a750-2690c1666547',
		name: capitalCadena('GCIA DE ÁREA CONTROL DE ACTIVOS MUEBLES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21623003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21623)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f27f056c-947e-4139-998e-97d144099cf2',
		name: capitalCadena('GCIA DE ÁREA INFRAESTRUCTURA Y MANTENIMIENTO FISÍCO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 21624001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 21624)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '66afba11-9428-40eb-92ae-c6d6870b58a2',
		name: capitalCadena('GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22801001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22801)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '618b7fdd-345c-4a78-bd4e-d2a9cb7171c1',
		name: capitalCadena('GERENCIA DE ÁREA PRODUCTOS Y SERV TDD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22801007,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22801)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5e4acd7f-11aa-45de-94ca-6d7481ded871',
		name: capitalCadena('GERENCIA DE ÁREA INNOVACIÓN Y PRODUCTOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22802003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22802)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '216be9c8-f25c-4ac5-a08a-4c03eaae944e',
		name: capitalCadena('GERENCIA DE ÁREA DESARROLLO DE CANALES DIGITALES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22802004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22802)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fc932747-b071-4196-b79f-adb4ad3c5a9a',
		name: capitalCadena('GERENCIA DE ÁREA EXPERIENCIA DIGITAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22802006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22802)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '09a3469a-a354-4bcb-a1ad-faacfd81c496',
		name: capitalCadena('COORDINACIÓN INTELIGENCIA DE NEGOCIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22803003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22803)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8d8ea198-8e8f-4eb2-abb3-34381efd6402',
		name: capitalCadena('GERENCIA ANALÍTICA DIGITAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22803004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22803)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ddef2662-5d91-43f2-8def-514f3c224048',
		name: capitalCadena('GERENCIA DE AREA CONTACT CENTER'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22804001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22804)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a705fdf2-3216-42f5-af90-3acc8c95f913',
		name: capitalCadena('COORDINACIÓN DISEÑO GRÁFICO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22805005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22805)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '37084bd2-8698-4421-8e6a-4e8f3058edfa',
		name: capitalCadena('GERENCIA DE ÁREA MERCADEO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22805006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22805)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1c46aa54-8397-439e-9591-a03529f07175',
		name: capitalCadena('GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22806001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22806)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f31756ff-57ca-4f6e-875d-20fa2907e091',
		name: capitalCadena('GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22806002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22806)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aae009ef-dd94-458d-be98-1048e6dd27cd',
		name: capitalCadena('GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 22806003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 22806)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0f57f302-2cc8-4112-8795-c87b8b462e4d',
		name: capitalCadena('GERENCIA DE ÁREA SEGURIDAD INDUSTRIAL Y CONTINGENC'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23102001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c4189be8-ad4e-4121-b7ff-21e8627f6e38',
		name: capitalCadena('GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23102012,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23102)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8f8b2369-fda0-4cc3-8996-ad5c2e073523',
		name: capitalCadena('GERENCIA NACIONAL DE CONSOLA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23103001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '376abc4a-7ee8-487f-bb75-1c81c3efe402',
		name: capitalCadena('GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23103003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '57680740-1d2c-48f3-922b-53600b6ee840',
		name: capitalCadena('GERENCIA DE PROYECTOS Y SOPORTE TÉCNICO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23103004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23103)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2f62c364-e8b4-4a65-b73a-0b8cd2384daa',
		name: capitalCadena('GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23104003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23104)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bd7332cc-5271-4dda-99b8-4e876d1916b3',
		name: capitalCadena('GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23104005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23104)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f032c9a7-2748-4fe5-becd-765dbf1cd698',
		name: capitalCadena('GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23104006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23104)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2753d02f-b59d-4c73-8c27-b4314c6562f0',
		name: capitalCadena('GERENCIA DE INVESTIGACIONES'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23104007,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23104)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '77beb751-fdab-42f5-9f3c-ae9aa5f8251d',
		name: capitalCadena('GERENCIA DE AREA ESTRATEGIA Y RIESGO DE CIBERSEGURIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fcff5676-7f78-41a3-b617-13c88eacd153',
		name: capitalCadena('GERENCIA DE AREA SEGURIDAD EN INFRAESTRUCTURA Y PERÍMETRO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9e48ebf4-a8fb-46b8-afff-9b46096ff006',
		name: capitalCadena('GERENCIA DE AREA SEGURIDAD EN APLICACIONES Y DATOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '96f57a1d-cd97-4d53-8b92-814c2ff3e7d3',
		name: capitalCadena('GERENCIA DE AREA ARQUITECTURA Y PROYECTOS DE SEGURIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '895397b3-6f3b-415a-bd96-7772879930f4',
		name: capitalCadena('GERENCIA DE AREA CONTROL DE CAMBIOS Y CERTIFIFACIÓN'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106005,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2e0189ee-93bf-4fed-8058-6a99e84d953c',
		name: capitalCadena('GERENCIA DE AREA OPERACIONES DE SEGURIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '98cdd4b7-86b9-4f73-8d72-1e6c68fd9a1f',
		name: capitalCadena('GRERNCIA DE AREA SEGURIDAD INFORMÁTICA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23106007,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23106)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f14ef1aa-7a06-48ae-ad1e-25167285a2bf',
		name: capitalCadena('GERENCIA DE ÁREA PERSONAS Y CULTURA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23401001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f75a2b4a-0543-4e0a-852a-40ef986d7bfc',
		name: capitalCadena('GERENCIA DE AREA FORMACION Y DESARROLLO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23401002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '396a0843-32c4-4afc-9123-677d4048b02f',
		name: capitalCadena('GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23401003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7fcc413a-a44c-4d43-b9b3-e04584b56d05',
		name: capitalCadena('GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23401004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9394dd53-62ee-4ff5-abb8-39cd35ae4cf7',
		name: capitalCadena('GERENCIA DE CAJA DE AHORROS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23401006,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dbea3395-2b3c-4803-98fb-161aa0868bbe',
		name: capitalCadena('GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23402001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23402)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3714b9e0-4c9d-45f4-bbd9-c1e6ea9e6669',
		name: capitalCadena('GCIA DE ÁREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23402002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23402)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a5bf3b09-125a-4f3c-b56b-c880ffb54c5c',
		name: capitalCadena('GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS DE NEGOCIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23402004,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23402)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e61366a6-904a-421f-87b2-10fc30fc85db',
		name: capitalCadena('GERENCIA DE AREA DEF. DE MODELOS DE CALIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23403001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23403)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3c30316a-c70e-496c-96aa-be38ca031f83',
		name: capitalCadena('GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23403002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23403)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2aefcc44-281d-4790-90ba-56d978701aca',
		name: capitalCadena('GERENCIA DE AREA MEJORA CONTINUA DEL SERVICIO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23403003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23403)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '06ce58fc-44a5-4eb7-9748-b59f440bf54b',
		name: capitalCadena('GCIA. DE ÁREA PLANIFICACIÓN ESTRATÉGICA Y CONTROL'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23404001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23404)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '36c6958e-8721-49e7-b70f-4953f9e99d5d',
		name: capitalCadena('GCIA. DE ÁREA GESTIÓN DE PROYECTOS ESTRATÉGICOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23404002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23404)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e4187b91-0a56-47a4-b838-0cfb3419fa06',
		name: capitalCadena('GERENCIA DE NEGOCIOS CONSUMO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23501001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9b8813b2-bc43-404b-bc40-f4f8c2ccac5a',
		name: capitalCadena('GERENCIA DE NEGOCIOS MANUFACTURA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23501002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23501)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1fe5d1f2-9e3e-4366-b16b-061003631977',
		name: capitalCadena('GERENCIA DE NEGOCIOS GAS Y PETRÓLEO'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23503001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23503)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '60426280-cc7a-4868-961a-f807bd4c0ed8',
		name: capitalCadena('GERENCIA DE NEGOCIOS RECURSOS'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23503002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23503)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ed5d18d7-dfe8-4f72-b1ac-0b3f21e88c9f',
		name: capitalCadena('GERENCIA DE NEGOCIOS ARAGUA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23504001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23504)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a6f1b78c-59fa-4fb6-a15b-8d681a7723fe',
		name: capitalCadena('GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23602001,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23602)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3d754a52-baec-4b13-a348-bfe308ef99b4',
		name: capitalCadena('GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23602002,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23602)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd9a1fa79-f0c9-4d58-af88-05be0916c5c5',
		name: capitalCadena('GCIA DE ÁREA ESTADISTICAS, ANÁLISIS ESTR Y CAPACIT'),
		level: 4,
		centro_de_costo: null,
		codigoInterno: 23602003,
		isUnitActive: true,
		parent_id: updateNivel3.find(d => d.codigoInterno === 23602)?.id,
		created_at: now,
		updated_at: now
	}
]

// 1. Actualizamos los elementos existentes en unionCoord que coinciden con vpActual
const updatedFromUnion = updateNivel3.map(unis => {
	const found = level4Actual.find(d => cleanText(d.name) === cleanText(unis.name))
	if (found) {
		return {
			...unis,
			level: found.level,
			codigoInterno: found.codigoInterno,
			isUnitActive: found.isUnitActive,
			parent_id: found.parent_id,
			updated_at: found.updated_at
		}
	}
	return unis
})

// 2. Identificamos los elementos en vpActual que NO están en unionCoord para agregarlos
const missingInUnion = level4Actual
	.filter(vp => !updateNivel3.some(u => cleanText(u.name) === cleanText(vp.name)))
	.map(vp => ({
		id: vp.id || randomUUID(),
		name: vp.name,
		level: vp.level,
		codigoInterno: vp.codigoInterno,
		isUnitActive: vp.isUnitActive,
		parent_id: vp.parent_id,
		created_at: now,
		updated_at: now
	}))

// 3. Combinamos ambos resultados para obtener la lista final
const updateNivel4 = [...updatedFromUnion, ...missingInUnion]

// for (let index = 0; index < level4Actual.length; index++) {
// 	console.log(randomUUID())
// }
console.log('Level 4 Tiene:', level4Actual.length)
/**
 * Función para identificar qué unidades no lograron encontrar a su padre
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.parent_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} unidades de Nivel 4 sin parent_id:`)
		orphans.forEach(o => {
			console.log(`  - Nombre: "${o.name}" | Código: ${o.codigoInterno}`)
		})
	} else {
		console.log('\n✅ Todas las unidades de Nivel 4 tienen un parent_id asignado.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(level4Actual)
}

module.exports = { updateNivel4, level4Actual }
