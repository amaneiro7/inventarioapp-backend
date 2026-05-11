const { randomUUID } = require('node:crypto')
const { updateNivel4 } = require('./unindadActualNivel4')
const { capitalCadena } = require('./capitalCadena')
const now = new Date()

const level5Actual = [
	{
		id: '71c170b0-9ae5-4245-a390-77939f8e9020',
		name: capitalCadena('GERENCIA DE NEGOCIOS CAPITAL II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 1010200302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 10102003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6f3255a4-f925-448c-a0ae-ddfc7a57b7a6',
		name: capitalCadena('GERENCIA DE NEGOCIOS LOS ANDES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 1010200303,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 10102003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bbcc1cdd-c0d7-45cc-bf2c-54067ad86e4b',
		name: capitalCadena('GERENCIA DE NEGOCIOS ORIENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 1010200304,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 10102003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1bf51f14-5358-4e36-91f3-f6be16f05960',
		name: capitalCadena('GERENCIA DE NEGOCIOS OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 1010200305,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 10102003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '730dff63-31e2-434e-aaef-b76d8550c936',
		name: capitalCadena('GERENCIA CONTROL INSTITUCIONAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2041100101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20411001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8fe48567-98e7-4f05-a617-dc4698f59060',
		name: capitalCadena('GERENCIA ASUNTOS CORP Y CONFIRMACIONES BANCARIAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2041100102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20411001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9c50b89a-e42a-47a3-8956-a17ec2ab3f59',
		name: capitalCadena('COORDINACIÓN LIBERACIONES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2041200701,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20412007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c31536bb-5b8a-4de6-b06f-da88a94dfd1a',
		name: capitalCadena('COORDINACIÓN DOCUMENTACIÓN DE CRÉDITO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2041200702,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20412007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dbdcc26c-7a69-42e5-9c46-a5e541e4c07c',
		name: capitalCadena('GERENCIA DE NEGOCIOS FIDUCIARIOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051000201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20510002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '886fdc88-14af-489f-913c-f34daacb8ba6',
		name: capitalCadena('GERENCIA LEGAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051000202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20510002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2fc2b392-0c12-49f3-b6de-3bc57e300ac2',
		name: capitalCadena('GCIA DETERMINACIÓN Y DECLARACIÓN TRIBUTARIA E Y M'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c86aa5db-82ce-4001-92dd-a85f472e5675',
		name: capitalCadena('GCIA DETERMINACIÓN Y DECLARACIÓN TRIBUTARIA N Y P'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aab38559-7d4b-4171-a245-72dfa22b1c65',
		name: capitalCadena('GERENCIA CONTABILIDAD'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5acbc08e-ddd7-40b6-a741-6d58a35b82c2',
		name: capitalCadena('GERENCIA DE CONTROL DE ACTIVOS Y GASTOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6f710b95-1d00-4f84-b5dc-aefb1ad4869c',
		name: capitalCadena('GERENCIA CONTROL FINANCIERO Y SUCURSAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300401,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '212f7663-a773-43cc-8499-5ed4fe2e43e2',
		name: capitalCadena('GERENCIA INFORMACIÓN FINANCIERA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300402,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a9014082-c950-46c4-ba6c-972fdc3c26b6',
		name: capitalCadena('GERENCIA DE CANALES Y PROCESOS CONTABLES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300501,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '979a0476-8883-4606-b96e-bed11c6b5b6c',
		name: capitalCadena('GERENCIA DE CONTROL Y GESTIÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300502,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '36d37a7d-a3a7-4cbd-91bd-ee6b7f354a76',
		name: capitalCadena('COORDINACIÓN REVISORÍA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300603,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '38e3f7ff-8799-4dcb-973f-1b24bf28601e',
		name: capitalCadena('COORDINACIÓN VIÁTICOS Y TRIBUTOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300604,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b93b94d6-4d5c-4657-9ef2-114a7aa6afce',
		name: capitalCadena('COORDINACIÓN PAGO PROVEEDORES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2051300605,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20513006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '66e43011-fcf7-41b4-a673-94d4eb95722c',
		name: capitalCadena('GCIA. REG. OPERACION DE AGENCIAS ARAGUA LOS LLANOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9eff5667-79ca-4e38-924e-ce9c926fdbc3',
		name: capitalCadena('GERENCIA REGIONAL OPERACION DE AGENCIAS GUAYANA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f047dbe5-b3cc-4962-a0ff-f4dc1c21d6c7',
		name: capitalCadena('GERENCIA REGIONAL OPERACION DE AGENCIAS LOS ANDES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800104,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '94a2bdb3-2d29-406d-8aeb-e531aaf53eb3',
		name: capitalCadena('GERENCIA REGIONAL OPERACION DE AGENCIAS OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800106,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b3fcab9a-187c-4383-b261-607854e779da',
		name: capitalCadena('GERENCIA REGIONAL OPERACION DE AGENCIAS ORIENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800107,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '10c8e47c-91d5-4caa-8bdc-bc2a28d84805',
		name: capitalCadena('GERENCIA DE ÁREA AGENCIA MÓVIL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800110,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3cad8117-3238-40eb-b66a-91a81d932a98',
		name: capitalCadena('GERENCIA REGIONAL OPERACION DE AGENCIAS CAPITAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '670e918d-6f00-4a87-8756-487f69cb0d18',
		name: capitalCadena('GERENCIA REGIONAL OPERACION DE AGENCIAS CARABOBO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800204,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c55916fc-ed96-4f73-84a7-2fba0e249e63',
		name: capitalCadena('GERENCIA REGIONAL OPERACIÓN DE AGENCIAS CENTRO OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800207,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'de7b5af0-d5ac-4cd0-8360-be74f7e725bd',
		name: capitalCadena('COORD. REGISTRO DE CLIENTES REGIÓN CAPITAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800501,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '56fd5c56-eb01-4062-a028-62d94eb5af19',
		name: capitalCadena('COORD. REGISTRO DE CLIENTES REGIÓN CENTRAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800502,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6c9f55ab-0c77-4cab-bd0c-d12eac84e226',
		name: capitalCadena('COORD. REGISTRO DE CLIENTES REGIÓN OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800503,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7c37eb7b-c26d-4979-8bb7-4d0461a4be2a',
		name: capitalCadena('COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800601,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a3e55a3b-3be3-4eed-adb7-b3001dc06ba2',
		name: capitalCadena('COORD. DIGITALIZACIÓN Y CTROL DE ARCH OCCIDENTE I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800602,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '71382fc6-959b-43e4-9d09-d59f1eddce66',
		name: capitalCadena('COORD. DIGITALIZACIÓN Y CTROL DE ARCH OCCIDENTE II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800603,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8e315ef3-5961-40f5-b456-1168023af2ab',
		name: capitalCadena('COORD. DIGITALIZACIÓN Y CTROL DE ARCH ARAGUA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800604,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '28d81c04-df3a-430b-be07-e9aef200db14',
		name: capitalCadena('COORD. ATENCIÓN INTERNA CAI CAPITAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800605,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0bab0bc9-4633-4773-8a33-8e150e0d97dc',
		name: capitalCadena('COORD. ATENCIÓN INTERNA CAI OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800606,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b6d6dafc-0c7d-443c-b2f5-66595aa6cbdb',
		name: capitalCadena('COORD. CORRESPONDENCIA CAPITAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800607,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '22b63412-01bc-4656-9cc3-fda75c36aff6',
		name: capitalCadena('COORD. CORRESPONDENCIA OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800608,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b8abc60e-1ad2-4969-b509-58625e4394e0',
		name: capitalCadena('COORDINACIÓN CTROL, REGISTRO DE OP Y PAPEL VALOR'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800801,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918008)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '646634bb-7628-44a2-ae33-833796beef85',
		name: capitalCadena('COORDINACIÓN GESTIÓN OPERATIVA DE ZONAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091800802,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20918008)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3ceed9aa-fea1-4588-af6e-526e8cda99f8',
		name: capitalCadena('GERENCIA DE ZONA ZULIA I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091900106,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20919001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a29ea9b3-f90b-484a-8d8c-14cc41e6123c',
		name: capitalCadena('GERENCIA DE ZONA ZULIA II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091900107,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20919001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c3d8dfb0-e47e-46a1-830d-1b013a323d9b',
		name: capitalCadena('GERENCIA DE ZONA FALCÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091900108,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20919001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0bfce37e-99a0-48d3-b61b-94eb992be153',
		name: capitalCadena('GERENCIA DE ZONA ANDES I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091900201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20919002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7fac6cf2-75e3-4d96-9cac-c6263a6de99b',
		name: capitalCadena('GERENCIA DE ZONA ANDES II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2091900202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20919002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8ebfa391-72fb-4990-884b-5fe3a7516897',
		name: capitalCadena('GERENCIA DE ZONA CARABOBO I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092100101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20921001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'aee4b5af-4a3c-48a2-aa94-7c2a61ca7b09',
		name: capitalCadena('GERENCIA DE ZONA CARABOBO II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092100102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20921001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e941b32a-1528-4ab8-993d-de979de5faad',
		name: capitalCadena('GERENCIA ZONA CENTRO OCCIDENTE ZONA OCCIDENTE I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092100201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20921002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1b498d0b-af92-4ef8-83a0-383e101dd264',
		name: capitalCadena('GERENCIA DE ZONA INSULAR'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092200101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20922001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '26f1eacd-d8e3-4c88-a8ca-0bd2d385b787',
		name: capitalCadena('GERENCIA DE ZONA ORIENTE SUR'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092200201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20922002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd623441e-9c05-432e-899c-d2f2c2dc4217',
		name: capitalCadena('GERENCIA DE ZONA ORIENTE NORTE I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092200202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20922002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2ef7ed24-8d16-40b0-bee5-5ec6273c806e',
		name: capitalCadena('GERENCIA DE ZONA ORIENTE NORTE II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092200203,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20922002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '784d3b1c-2d61-47b8-9f49-e832afe06f97',
		name: capitalCadena('GERENCIA DE ZONA ORIENTE NORTE III'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2092200204,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 20922002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '390f613c-1e7f-48e6-9a7b-1bf330890036',
		name: capitalCadena('GERENCIA MONITOREO ATM'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2100700102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21007001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4279a8a3-8c8c-487b-87c2-9a6579f9cbd5',
		name: capitalCadena('GERENCIA TÉCNICA ATM'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2100700103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21007001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9bc5e77d-fc00-4eb1-ba42-4241275b6542',
		name: capitalCadena('GERENCIA SOPORTE POS-CAPITAL-CENTRO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2100700601,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21007006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '07bf1347-d8e6-4c7e-9064-38443da5d190',
		name: capitalCadena('GERENCIA SOPORTE POS OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2100700602,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21007006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7693ce52-edd4-4a37-9f33-3254089a2357',
		name: capitalCadena('GERENCIA REDES Y COMUNICACIÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101000501,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21010005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ee4a3d2d-d6d5-445e-9c9c-6e8634322a25',
		name: capitalCadena('GERENCIA TELEFONÍA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101000502,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21010005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '19c30d0a-f20b-4845-a04d-47331336c1c7',
		name: capitalCadena('GERENCIA DE PRODUCCIÓN CARACAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101000701,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21010007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '65f88c80-515b-4490-9f47-747875b22988',
		name: capitalCadena('COORDINACIÓN PRODUCCIÓN OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101000703,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21010007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7ad36f1d-d2dc-46c7-826c-7fc6eb3718d6',
		name: capitalCadena('GERENCIA ADMINISTRACIÓN BASES DE DATOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101000806,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21010008)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3eedcc22-cab8-460a-b034-89e7b97dabee',
		name: capitalCadena('GERENCIA PLATAFORMA MEDIA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101000905,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21010009)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '11bf88d2-2805-4283-92b0-db4fff253f3d',
		name: capitalCadena('GERENCIA DE SISTEMAS PRODUCTOS ACTIVOS-PASIVOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101600101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21016001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5a48f114-0538-49bf-9cbc-a8ac72205736',
		name: capitalCadena('GERENCIA DE SISTEMAS DE SUCURSALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101600102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21016001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fd328c60-7b1b-44e9-8de0-3650a51915de',
		name: capitalCadena('GERENCIA DE SISTEMAS POS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101600304,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21016003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '799b4216-11d5-4d26-8112-3324ed7828c9',
		name: capitalCadena('GERENCIA INTEGRACIÓN DE PLATAFORMAS DISTRIBUIDAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101600501,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21016005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2d799b85-9ea6-4e02-9f13-c5858c9ba823',
		name: capitalCadena('GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101600502,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21016005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2c33812e-089c-466c-af78-5a95da5b46ca',
		name: capitalCadena('GERENCIA PRUEBA DE SOFTWARE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101600801,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21016008)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '079cae78-ace1-4f7b-986e-a1cd5053a97e',
		name: capitalCadena('COORDINACIÓN PROYECTOS TÉCNICOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101700201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21017002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6351b80d-49c8-47c5-8019-4fa3e7eeb4be',
		name: capitalCadena('COORDINACIÓN ARQUITECTURA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101700202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21017002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bc33e660-a249-42e3-9be4-a68afd40a6ff',
		name: capitalCadena('GERENCIA ENERGÍA CARACAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101700601,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21017006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2f50cb47-16e5-49cd-bb27-f0677934e3b5',
		name: capitalCadena('GERENCIA ENERGÍA MARACAIBO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2101700602,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21017006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ba27854b-b0c5-4d52-b593-ab3f1116ec2f',
		name: capitalCadena('GERENCIA INTEGRACIÓN A TERCEROS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '191571e5-bb6f-4552-b00f-f6f5d63c2f08',
		name: capitalCadena('GERENCIA DOCUMENTACIÓN Y SOPORTE DE APLICACIONES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd85320b5-84c3-461b-a603-121a2df64a10',
		name: capitalCadena('GERENCIA OPEN BANKING'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '96abce9d-ebd9-43ef-b275-8ef4b30b6871',
		name: capitalCadena('GERENCIA BANCA EN LÍNEA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2f2b7fe7-72be-4a3a-b02b-309927cae82b',
		name: capitalCadena('GERENCIA DESARROLLO DE APLICACIONES INTERNAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200203,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ed7c8a2c-f1b7-4fce-92a2-b41fc70175b7',
		name: capitalCadena('GERENCIA DE DEPARTAMENTO SOPORTE REGULATORIO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b6a42b6c-439a-4f32-bf48-8720d86e315d',
		name: capitalCadena('GERENCIA DE INTELIGENCIA DE NEGOCIO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2102200302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21022003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '37a63bac-ad01-46a0-bf98-50048e592553',
		name: capitalCadena('COORD. FIANZAS, GARANTÍAS Y RESPALDO DE CRÉDITO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2140600501,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21406005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8d749cf7-244f-4af8-9862-e8a718aae012',
		name: capitalCadena('COORD. FIANZAS, GARANTÍAS INTERNACIONALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2140600502,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21406005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3b9adfea-645d-4e77-89d2-dc835d6c2006',
		name: capitalCadena('GERENCIA DE ADMIN DE CUENTAS TDC'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2160900201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21609002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '23d41be5-d541-4da1-a41b-5d60e7ddd77f',
		name: capitalCadena('GERENCIA DE PRODUCCIÓN TDC'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2160900203,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21609002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '92427d45-dde8-418f-93f7-b517e8f5740a',
		name: capitalCadena('GERENCIA EMISIÓN TDC'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2160900301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21609003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7f3be95e-fad4-4608-993f-1ebdfb5e0b6f',
		name: capitalCadena('GERENCIA DISTRIBUCIÓN TDC'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2160900302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21609003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f5ffdacd-192f-4c1d-b9c0-138b19a1a274',
		name: capitalCadena('GERENCIA OPERACIONES ESPECIALIZADAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161100102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21611001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '35475c3e-2c40-44c5-acb6-35af60a24d9d',
		name: capitalCadena('COORD RECAUDACIÓN SENIAT'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161100202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21611002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '94d1fdb9-39a5-40e0-bb35-a90bd0bb4791',
		name: capitalCadena('COORD RECAUDACIÓN GOBERNACIONES ALCALDIAS Y OTROS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161100203,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21611002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5a9421ec-c8c0-4652-bbab-78fe3f48d6d7',
		name: capitalCadena('GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161100301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21611003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5e04e3d0-8963-4d00-b5be-1930ed1e8e36',
		name: capitalCadena('GERENCIA OPERACIONES MONEDA NACIONAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161800101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21618001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fa618668-60ce-4d10-913a-c612f9ea88be',
		name: capitalCadena('GERENCIA OPERACIONES MONEDA EXTRANJERA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161800102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21618001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4d9fe9d4-d854-40ab-a0a0-32fe0cde55b6',
		name: capitalCadena('COORDINACIÓN CUSTODIA TÍTULOS VALORES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161800204,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21618002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e43ba2ee-c17a-425f-bb4e-2e8ee4c3c53d',
		name: capitalCadena('COORDINACIÓN CUSTODIA DOCUMENTAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161800205,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21618002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd5669883-d246-404f-8f9d-c82111214810',
		name: capitalCadena('COORDINACIÓN OPERACIONES DE CAMBIO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161800206,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21618002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '99019bad-3fa5-4a16-a9fa-cc502bc42e17',
		name: capitalCadena('COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '255eab4f-e2ef-472d-ba9c-d1c2792c617b',
		name: capitalCadena('COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '205f2a88-3ad5-4769-a5d3-680e2946d8e6',
		name: capitalCadena('COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '58c8da5f-226d-4c56-be50-6b2a60292972',
		name: capitalCadena('GERENCIA CENTRO DE ACOPIO MARACAY'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0647310e-0fbe-47d4-931c-7487500b7c3a',
		name: capitalCadena('GERENCIA CENTRO DE ACOPIO VALENCIA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900203,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c4b5a829-b402-4d06-a343-3773d856684a',
		name: capitalCadena('GERENCIA CENTRO DE ACOPIO MARACAIBO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900204,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b2c568fe-50ec-4726-ab11-c4694ed6b225',
		name: capitalCadena('COORDINACIÓN CONT OPERATIVO DE CENTROS DE ACOPIO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900206,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b72d6ffe-5687-451c-97bc-4a4fa66e1e9b',
		name: capitalCadena('COORDINACION DE REPORTERÍA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd74c48da-3a79-4245-be3b-6c91ccebe22e',
		name: capitalCadena('COORDINACIÓN DE PROCESOS ESPECIALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2161900302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21619003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '889a3f67-8fde-40be-b417-ae7f9657a781',
		name: capitalCadena('GERENCIA RECLAMOS DE CANALES ELECTRONICOS ZONA 1'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162000101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21620001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '25dbabbf-2805-4008-ba8d-625c7844f795',
		name: capitalCadena('GERENCIA RECLAMOS DE CANALES ELECTRONICOS ZONA 2'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162000102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21620001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '486b1706-31d9-4948-9a5a-bc2e54401cc9',
		name: capitalCadena('COORDINACIÓN DE CONTRATOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162100201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21621002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '31ff575c-76fd-408c-8790-c00b7e29ae42',
		name: capitalCadena('COORDINACIÓN DE PROVEEDORES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162100202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21621002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cbd38cbb-7243-4006-af07-12deaacc707b',
		name: capitalCadena('COORDINACIÓN DE SERVICIOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162100301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21621003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4004192a-0c2e-4ffe-b6b9-ed14ab5985e1',
		name: capitalCadena('COORDINACIÓN DE TRANSPORTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162100302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21621003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1bf7d9cb-59da-4cb2-8f1b-f7e133055251',
		name: capitalCadena('COORDINACIÓN DE COMPRAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162200101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21622001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0a5059cd-ace4-4e14-8f14-8d2109af66cc',
		name: capitalCadena('COORDINACIÓN DE SERVICIOS GENERALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162200102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21622001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '891cb0e5-65d2-4871-8b8d-ac4323d23a3d',
		name: capitalCadena('COORDINACIÓN ALMACÉN Y PROVEEDURÍA (CARACAS)'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162200201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21622002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '23be9931-28c8-41cf-a157-5e7bf2451d87',
		name: capitalCadena('COORDINACIÓN ALMACÉN Y PROVEEDURÍA (OCCIDENTE)'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162200202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21622002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3083727b-0ff7-4402-a437-10e8d1c9aa99',
		name: capitalCadena('GERENCIA DOCUMENTACIÓN DE ACTIVOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162300301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21623003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '47ca3038-143f-4f8e-968e-36ede2b990ef',
		name: capitalCadena('GERENCIA ACTIVO FIJO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162300302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21623003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c7ccc636-cd44-40d4-977e-d40a0f256c3e',
		name: capitalCadena('GCIA DE MANTENIMIENTO FISÍCO SEDES (OCCIDENTE)'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162400101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21624001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6012873f-1e9e-4334-9418-28637df518ba',
		name: capitalCadena('GCIA DE MANTENIMIENTO FISÍCO SEDES (CARACAS)'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2162400102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 21624001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '643ba250-af36-4013-815f-eb33246e1ab8',
		name: capitalCadena('COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280100103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22801001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5bf7cb2c-228a-4fe1-b824-fd0210cec646',
		name: capitalCadena('COORDINACIÓN DE PRODUCTOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280200301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22802003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bf5f8f9c-15a4-4377-8b6c-6ae1f71f5768',
		name: capitalCadena('COORDINACIÓN DE EMPRENDEDORES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280200302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22802003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0da4eb9a-10a4-4abd-9185-be7d7e8197da',
		name: capitalCadena('COORDINACIÓN DE ATENCIÓN POST VENTA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280200401,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22802004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '82874833-69f4-4596-b6f5-afda9b8267b1',
		name: capitalCadena('COORDINACIÓN DESARROLLO DE CANALES DIGITALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280200402,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22802004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5b8a2021-23cd-4145-aad8-a8706c10bcb9',
		name: capitalCadena('GERENCIA DE SERVICIOS POST VENTA JURÍDICO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280200403,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22802004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '58b6c5ff-ed33-4bc0-8478-45da2745f94c',
		name: capitalCadena('COORDINACIÓN ATENCIÓN ONBOARDING BNC'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280200404,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22802004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3b408a53-afa3-4dab-ae5d-c7d2f91014ab',
		name: capitalCadena('COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b381599e-dd1a-4dd6-8d8f-469a79bf18ce',
		name: capitalCadena('COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '78181945-6354-4e81-9291-154394d56b62',
		name: capitalCadena('COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ba881515-d750-46e2-8870-87691abbee8b',
		name: capitalCadena('COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400104,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b3d07ee2-8c77-4fa2-bc8b-ec47726f4434',
		name: capitalCadena('COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400105,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c282577b-5130-4e19-aec0-f0f8d8b39ccb',
		name: capitalCadena('COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400106,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3671f0e1-17de-4351-94d8-c7cbc01c8ffa',
		name: capitalCadena('COORD. SOLUCIONES INTEGRALES WHATSAPP'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400107,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '20ddf469-c5c2-4763-82d6-e259ce874062',
		name: capitalCadena('COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280400108,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22804001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2ba0bfca-e5be-453e-a66a-2be71467b004',
		name: capitalCadena('COORDINACIÓN COMUNICACIONES INTERNAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280500207,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22805)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9c6a531e-794c-4a6d-a34e-7d3437643ab9',
		name: capitalCadena('COORDINACIÓN MEDIOS DIGITALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280500209,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22805)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9a2d4faa-a942-4304-8c3b-7e04fc78157f',
		name: capitalCadena('COORDINACIÓN EVENTOS E IMAGEN CORPORATIVAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280500601,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22805006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '95f99792-18a0-4252-baae-755bfd5fd38d',
		name: capitalCadena('COORDINACIÓN MARCA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280500602,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22805006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bbcc7abe-cffa-44de-9c49-dcf5af97fab7',
		name: capitalCadena('COORDINACIÓN SERVICIOS DE AFILIACIÓN POS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280600101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22806001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '87cecb9f-d4e1-47fc-8fbb-f1c7b013b84c',
		name: capitalCadena('COORDINACIÓN DOMICILIACIÓN POS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280600102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22806001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a5e4d2ec-a1c9-4758-b887-61f19e9eeb92',
		name: capitalCadena('COORDINACIÓN SERVICIO AL CLIENTE POS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280600301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22806003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'af4b9de6-6409-42cf-9c8d-f9ed5e2b7b32',
		name: capitalCadena('COORDINACIÓN RECUPERACIONES POS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2280600302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 22806003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8cb66f6a-fd3a-4762-8189-2a57a7d848ea',
		name: capitalCadena('COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '196bc8e8-e24f-4fbe-877d-d4f556847882',
		name: capitalCadena('CORRD. SEGURIDAD FÍSICA REGIÓN CENTRAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '118699e6-7edb-4c79-a786-e7b46a38d902',
		name: capitalCadena('CORRD. SEGURIDAD FÍSICA REGIÓN OCCIDENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201204,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7bcc384e-53ad-454f-8295-87a34af5dae0',
		name: capitalCadena('CORRD. SEGURIDAD FÍSICA REGIÓN FALCÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201205,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6333bb13-65ad-40db-a927-2ce7b6d39783',
		name: capitalCadena('CORRD. SEGURIDAD FÍSICA REGIÓN ORIENTE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201206,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '240b45ea-71ee-491a-be8f-daf746ba0bd5',
		name: capitalCadena('CORRD. SEGURIDAD FÍSICA REGIÓN ANDES I'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201207,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '165a3483-e307-4edb-b275-7ac0dd0baa27',
		name: capitalCadena('CORRD. SEGURIDAD FÍSICA REGIÓN ANDES II'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310201208,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23102012)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bb4f2ec0-9a19-4bbb-bd1f-4b7ead359a82',
		name: capitalCadena('COORD. CONSOLA TORRE FINANCIERA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b8ebc692-f3ea-4f0b-abd7-f5182889eab1',
		name: capitalCadena('COORD. SEGURIDAD ALMACENES GUATIRE'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4931ebb9-c634-4cc9-b9b2-a259b6a9e1ba',
		name: capitalCadena('COORD. SEGURIDAD SAN BERNARDINO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'be9358f1-5396-4763-aa10-5e6aa4d27620',
		name: capitalCadena('COORD. (OCCIDENTE - ANDES)'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300104,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f1f0c4d1-d445-44a7-baff-b5ae2209faba',
		name: capitalCadena('COORD. (CENTRO - LOS LLANOS)'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300106,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ff29d664-04a4-4c6e-8bdf-43ac2bb81a60',
		name: capitalCadena('COORDINACIÓN DE PROYECTOS Y SOPORTE TÉCNICO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300401,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '091bf831-6b80-4044-b54a-ee548ddeb098',
		name: capitalCadena('COORDINACIÓN CUSTODIOS Y SISTEMAS DE SEGURIDAD'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310300402,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23103004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '94ac7e61-e71d-47ef-8b86-3d716c5f0226',
		name: capitalCadena('COORDINACIÓN INVESTIGACIONES CARACAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310400701,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23104007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7599c6bc-85eb-4768-a6db-164056e10991',
		name: capitalCadena('COORDINACIÓN INVESTIGACIONES MARACAIBO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310400702,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23104007)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0d256289-fc03-4d03-bba3-5a69d2b453f5',
		name: capitalCadena('GERENCIA DE POLÍTICAS, NORMA Y ESTÁNDARES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cabd6912-e6ff-42a9-8319-908570bf2a98',
		name: capitalCadena('GERENCIA DE RIESGO Y CULTURA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '21305273-f15e-43fc-b594-835ed067da5a',
		name: capitalCadena('GERENCIA DE GESTIÓN DE IDENTIDADES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f2c45d27-c264-4e24-a7ed-8a094f2c549d',
		name: capitalCadena('GERENCIA DE SEGURIDAD PERÍMETRAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a560c962-406f-42b8-a917-13935b6072e2',
		name: capitalCadena('GERENCIA DE CONTROL DE CAMBIOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600501,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '44cfcb0e-ad02-471f-8c0d-579604e28a27',
		name: capitalCadena('GERENCIA DE CERTIFICACIÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600502,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106005)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '88e43638-b543-457a-b7a1-fc2566c12be6',
		name: capitalCadena('GERENCIA DE DETECCIÓN DE AMENAZAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2310600602,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23106006)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b5b86335-ba4f-4eb2-81fd-1e674bc119b1',
		name: capitalCadena('GERENCIA DE SELECCIÓN DE PERSONAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '56746346-cc33-4e6b-b680-9fb3e2057be5',
		name: capitalCadena('COORDINACIÓN CULTURA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1c4a76a1-4ebc-44c6-ac87-5c3ee159f9fc',
		name: capitalCadena('COORDINACION DE FORMACION'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4997349d-cd45-401a-b961-0b57063a890a',
		name: capitalCadena('COORDINACION GESTION DE PERSONAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'de0988aa-a936-4856-a335-a31c005075b9',
		name: capitalCadena('GERENCIA DE GESTIÓN DE NOMINA'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '16a7d01b-07d2-4e2f-8d65-85c8294825b2',
		name: capitalCadena('GERENCIA DE COMPENSACIÓN SALARIAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100401,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '96e4daa3-71e6-44c4-9dd7-c7d05f65b886',
		name: capitalCadena('COORDINACIÓN DE BENEFICIOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100402,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401004)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd2b947dc-892a-4ad7-a8dd-33011e568a06',
		name: capitalCadena('GERENCIA DE SEGURIDAD Y SALUD LABORAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100901,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '16f030fc-7083-40e6-8215-aa54968b025b',
		name: capitalCadena('GERENCIA SALUD OCUPACIONAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340100902,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23401)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5b0eb575-edf0-4039-8ffa-e16b8874af32',
		name: capitalCadena('GERENCIA GESTIÓN DOCUMENTAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340200101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23402001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '162cc261-3c23-4fdd-9573-4231c770a2fd',
		name: capitalCadena('GERENCIA DE GESTIÓN DE PROCESOS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2340200102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23402001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '077200bf-b526-4ebe-af11-451fae8874dd',
		name: capitalCadena('GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200101,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6f25c664-6019-458a-9f3f-f5d7bc814646',
		name: capitalCadena('GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200102,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a1972894-332a-407b-8510-949a76745995',
		name: capitalCadena('GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200103,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602001)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd13c3035-cda9-42ab-b0bf-39330c49621b',
		name: capitalCadena('COORDINACIÓN INSPECCIÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200201,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8c6f0c28-a597-45c6-9957-044695c33bf0',
		name: capitalCadena('COORDINACIÓN CUMPLIMIENTO NORMATIVO'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200202,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602002)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '99f6c9ae-de9e-48ee-a461-bd774f654731',
		name: capitalCadena('GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200301,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a6dd81f5-b0bb-41e6-91c4-76276be243fd',
		name: capitalCadena('GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200302,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602003)?.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f57e6728-7b26-4d00-aa00-f173107461d3',
		name: capitalCadena('COORDINACIÓN CAPACITACIÓN'),
		level: 5,
		centro_de_costo: null,
		codigoInterno: 2360200303,
		isUnitActive: true,
		parent_id: updateNivel4.find(d => d.codigoInterno === 23602003)?.id,
		created_at: now,
		updated_at: now
	}
]

// 1. Actualizamos los elementos existentes en unionCoord que coinciden con vpActual
const updatedFromUnion = updateNivel4.map(unis => {
	const found = level5Actual.find(d => d.name.toLowerCase() === unis.name.toLowerCase())
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
const missingInUnion = level5Actual
	.filter(vp => !updateNivel4.some(u => u.name.toLowerCase() === vp.name.toLowerCase()))
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
const updateNivel5 = [...updatedFromUnion, ...missingInUnion]
// for (let index = 0; index < level5Actual.length; index++) {
// 	console.log(randomUUID())
// }
console.log('Level 5 Tiene:', level5Actual.length)

/**
 * Función para identificar qué unidades no lograron encontrar a su padre
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.parent_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} unidades de Nivel 5 sin parent_id:`)
		orphans.forEach(o => {
			console.log(`  - Nombre: "${o.name}" | Código: ${o.codigoInterno}`)
		})
	} else {
		console.log('\n✅ Todas las unidades de Nivel 5 tienen un parent_id asignado.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(level5Actual)
}

module.exports = { updateNivel5, level5Actual, checkOrphanUnits }
