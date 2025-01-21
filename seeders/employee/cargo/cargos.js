const cargoOnlyNames = {
	'ABOGADO JUNIOR': 'Abogado Junior',
	'ABOGADO SENIOR': 'Abogado Senior',
	'ANALISTA JUNIOR': 'Analista Junior',
	'ANALISTA SENIOR': 'Analista Senior',
	ASISTENTE: 'Asistente',
	'ASISTENTE EJECUTIVA': 'Asistente Ejecutiva',
	'AUDITOR INTERNO': 'Auditor Interno',
	'AUDITOR JUNIOR': 'Auditor Junior',
	'AUDITOR SEMI SENIOR': 'Auditor Semi Senior',
	'AUDITOR SENIOR': 'Auditor Senior',
	'ASISTENTE DE DIRECCION': 'Asistente De Direccion',
	'ASESOR DE NEGOCIOS': 'Asesor De Negocios',
	CHOFER: 'Chofer',
	'COORDINADOR(A)': 'Coordinador',
	CHEF: 'Chef',
	'DEFENSOR DEL CLIENTE': 'Defensor Del Cliente',
	'DELEGADO DE SEGURIDAD': 'Delegado De Seguridad',
	'EJECUTIVO DE NEGOCIOS COMERCIAL SR': 'Ejecutivo De Negocios Comercial Sr',
	'EJECUTIVO JUNIOR': 'Ejecutivo Junior',
	'EJECUTIVO SENIOR': 'Ejecutivo Senior',
	ENFERMERA: 'Enfermera',
	'ESPECIALISTA JUNIOR': 'Especialista Junior',
	'ESPECIALISTA SENIOR': 'Especialista Senior',
	'EJECUTIVO DE NEGOCIO JR': 'Ejecutivo De Negocio Jr',
	'EJECUTIVO DE NEGOCIO SR': 'Ejecutivo De Negocio Sr',
	'GERENTE DE AREA': 'Gerente De Area',
	'GERENTE DE AREA DE NEGOCIOS': 'Gerente De Area De Negocios',
	'GERENTE DE DEPARTAMENTO': 'Gerente De Departamento',
	'GERENTE DE NEGOCIOS': 'Gerente De Negocios',
	'GERENTE REGIONAL DE NEGOCIOS': 'Gerente Regional De Negocios',
	'GERENTE REGIONAL OPERATIVO': 'Gerente Regional Operativo',
	'GESTOR DE COBRANZAS': 'Gestor De Cobranzas',
	MEDICO: 'Medico',
	'MENSAJERO EXTERNO': 'Mensajero Externo',
	'MENSAJERO INTERNO': 'Mensajero Interno',
	MESONERO: 'Mesonero',
	OFICINISTA: 'Oficinista',
	OPERADOR: 'Operador',
	'OPERADOR DE CONSOLA': 'Operador De Consola',
	'OPERADOR DE ALMACEN': 'Operador De Almacen',
	TRADER: 'Trader',
	TESORERO: 'Tesorero',
	VICEPRESIDENTE: 'Vicepresidente',
	'VICEPRESIDENTE DE NEGOCIOS': 'Vicepresidente De Negocios',
	'VICEPRESIDENTE DE ZONA': 'Vicepresidente De Zona',
	'VICEPRESIDENTE REGIONAL': 'Vicepresidente Regional',
	'GERENTE DE ZONA': 'Gerente De Zona',
	'AUXILIAR DE MANTENIMIENTO': 'Auxiliar De Mantenimiento',
	'TECNICO ATM JUNIOR': 'Tecnico ATM Junior',
	'TECNICO POS JUNIOR': 'Tecnico POS Junior',
	'OPERADOR DE MONITOREO': 'Operador De Monitoreo',
	'OPERADOR TI II': 'Operador Ti II',
	ARQUITECTO: 'Arquitecto',
	'CAJERO DE BOVEDA': 'Cajero De Boveda',
	'TECNICO ATM SENIOR': 'Tecnico ATM Senior',
	AUXILIAR: 'Auxiliar',
	'COORDINADOR INTEGRAL OPERATIVO': 'Coordinador Integral Operativo',
	'EJECUTIVO DE NEGOCIOS COMERCIAL JR': 'Ejecutivo De Negocios Comercial Jr',
	'GERENTE DE AGENCIA': 'Gerente De Agencia',
	'GERENTE OPERATIVO Y SERVICIOS': 'Gerente Operativo Y Servicios',
	'PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE':
		'Promotor(a) Integral De Atencion Al Cliente'
}

const cargosData = [
	{
		id: '50a71ec6-64d6-46ce-a63e-ab3a754efb3d',
		name: 'Abogado Junior'
	},
	{
		id: '336dff98-58a8-4618-95a7-c5eb880e8f56',
		name: 'Abogado Senior'
	},
	{
		id: '85a8d487-1d41-41c9-bebb-a7006a985f61',
		name: 'Analista Junior'
	},
	{
		id: 'e32d0e85-bc85-47e9-8a60-a288458a16db',
		name: 'Analista Senior'
	},
	{
		id: 'db9f6bf0-8978-4d2e-94c8-2b09844dbc59',
		name: 'Asistente'
	},
	{
		id: 'af7f18c5-b1a6-4564-87f4-38d258d2b9c4',
		name: 'Asistente Ejecutiva'
	},
	{
		id: '6ceea2eb-4564-40fb-b25a-55f1fb6bbefa',
		name: 'Auditor Interno'
	},
	{
		id: '5be4510c-a7f6-4731-b399-a09ce8498bb3',
		name: 'Auditor Junior'
	},
	{
		id: 'beb89993-6ab4-418e-8471-31da5e85ae05',
		name: 'Auditor Semi Senior'
	},
	{
		id: '3f08903d-c35a-4c54-962c-3fb242285a34',
		name: 'Auditor Senior'
	},
	{
		id: '741d0fa6-b680-4945-8b23-ef5051034319',
		name: 'Asistente De Direccion'
	},
	{
		id: '2b3ce344-0a31-4a3f-81ad-abcbc837b6a2',
		name: 'Asesor De Negocios'
	},
	{
		id: '55cf0a01-9020-4157-b108-224e3ae6604e',
		name: 'Chofer'
	},
	{
		id: 'cd0257de-2317-4f4e-9491-3411ee8f4391',
		name: 'Coordinador'
	},
	{
		id: '4a549101-6638-43af-bd23-ce538757d2aa',
		name: 'Chef'
	},
	{
		id: '60fc3cd5-dae0-4fea-abe0-96760342ace6',
		name: 'Defensor Del Cliente'
	},
	{
		id: 'ba134176-f46d-414b-bf6d-de34e2c7ca12',
		name: 'Delegado De Seguridad'
	},
	{
		id: '1360706c-b4ed-485b-b0ce-2cd2189f11dd',
		name: 'Ejecutivo De Negocios Comercial Sr'
	},
	{
		id: '0e827953-f1a7-42e8-8e3e-6a85c5a3a532',
		name: 'Ejecutivo Junior'
	},
	{
		id: 'aefd7853-50d1-4b39-9f09-eebf8c48a10d',
		name: 'Ejecutivo Senior'
	},
	{
		id: 'f55c65f0-834f-4444-af63-0560e93af2ac',
		name: 'Enfermera'
	},
	{
		id: 'db89de14-51d7-472b-acf2-35aa8c16e629',
		name: 'Especialista Junior'
	},
	{
		id: '9ba44f07-aa23-4eb4-9739-65e6792283df',
		name: 'Especialista Senior'
	},
	{
		id: 'ecbbe0d9-cce1-4c7e-9d3e-5134bd46e7d0',
		name: 'Ejecutivo De Negocio Jr'
	},
	{
		id: 'f525299a-f36d-41f3-b91a-162ffe9b060c',
		name: 'Ejecutivo De Negocio Sr'
	},
	{
		id: 'b0da15ee-4cd3-46f7-99b9-f0607076b5bd',
		name: 'Gerente De Area'
	},
	{
		id: '12fc21b4-a498-4c20-ac99-1770fc734e73',
		name: 'Gerente De Area De Negocios'
	},
	{
		id: '222da765-8941-40a5-8924-3ebe56c22a7f',
		name: 'Gerente De Departamento'
	},
	{
		id: '5019cf9e-7826-491b-97aa-865bde537b9b',
		name: 'Gerente De Negocios'
	},
	{
		id: '81eaad87-ed62-41c6-bb3b-cf7a3ad81faa',
		name: 'Gerente Regional De Negocios'
	},
	{
		id: '7fb64ed9-08f2-4003-a57e-c5b340f46f27',
		name: 'Gerente Regional Operativo'
	},
	{
		id: '2cc1420c-7227-4efa-b24d-1b16b4e144c4',
		name: 'Gestor De Cobranzas'
	},
	{
		id: '1b7b6039-3216-490d-a305-8721b7c776ca',
		name: 'Medico'
	},
	{
		id: '82718873-31de-4366-94f2-442fbfbc5c01',
		name: 'Mensajero Externo'
	},
	{
		id: '1b582675-5ac0-4b97-9c7f-661448ac759e',
		name: 'Mensajero Interno'
	},
	{
		id: '7c0bb73b-4976-4172-b158-43f8c5d88f52',
		name: 'Mesonero'
	},
	{
		id: '94364498-3986-44fd-a540-3c076a6571f3',
		name: 'Oficinista'
	},
	{
		id: '1a760b6f-9031-4b6c-b19c-066401a2fdb3',
		name: 'Operador'
	},
	{
		id: '7f75a01b-5633-4f29-836b-0d02e50cf6cf',
		name: 'Operador De Consola'
	},
	{
		id: 'f018b180-fca0-4e9f-96d8-701b223792cd',
		name: 'Operador De Almacen'
	},
	{
		id: 'a8b379e8-6553-4658-bf60-3702c706cb34',
		name: 'Trader'
	},
	{
		id: '90b95a8d-b3ca-4df0-9cad-441345b75221',
		name: 'Tesorero'
	},
	{
		id: '252ad109-8803-4c4a-8df8-9a9e547a2e0c',
		name: 'Vicepresidente'
	},
	{
		id: '57eec0e1-e8f8-4c35-abca-afcffb0e45cc',
		name: 'Vicepresidente De Negocios'
	},
	{
		id: 'bc520eb8-1ee5-4b07-9b06-e58d13a878eb',
		name: 'Vicepresidente De Zona'
	},
	{
		id: 'd86ce42f-c406-47b4-a1b2-ed5180fe0697',
		name: 'Vicepresidente Regional'
	},
	{
		id: '3a9ed812-ae6f-422a-81c5-62d03e885a9f',
		name: 'Gerente De Zona'
	},
	{
		id: '2e9ceef5-075a-49ee-8f69-485f7bc9829f',
		name: 'Auxiliar De Mantenimiento'
	},
	{
		id: '0dd95ec2-6adf-47ca-9a76-39dc033b5011',
		name: 'Tecnico ATM Junior'
	},
	{
		id: '7598f3d3-4921-42bc-96e0-5e03aaa053a8',
		name: 'Tecnico POS Junior'
	},
	{
		id: '7e177cdd-0c5e-4acd-afeb-15578f1cb6c3',
		name: 'Operador De Monitoreo'
	},
	{
		id: '6e178d03-6ff9-4379-ad53-7a07be9bcb15',
		name: 'Operador Ti II'
	},
	{
		id: 'd7e7776c-6ea9-4b1f-868a-295e24f245aa',
		name: 'Arquitecto'
	},
	{
		id: 'e0fcf591-42b6-4e89-92ac-0ac32e9c33e6',
		name: 'Cajero De Boveda'
	},
	{
		id: '5f0d51d0-f7af-4403-9c96-c102759f9b81',
		name: 'Tecnico ATM Senior'
	},
	{
		id: '8a7a7ce7-25bd-4526-9c83-a06632de68ab',
		name: 'Auxiliar'
	},
	{
		id: '5fa51fef-3606-40c7-9114-64eabae4805e',
		name: 'Coordinador Integral Operativo'
	},
	{
		id: '89cd7a3c-dae4-4dd7-b0e2-54a23479ed30',
		name: 'Ejecutivo De Negocios Comercial Jr'
	},
	{
		id: '666f5c42-73e8-465d-ae44-9f47fbda7cc6',
		name: 'Gerente De Agencia'
	},
	{
		id: '4f18a409-d417-4702-84f2-ce200889eba9',
		name: 'Gerente Operativo Y Servicios'
	},
	{
		id: '81113218-e27e-4c99-be42-83cde8b7f1ca',
		name: 'Promotor(a) Integral De Atencion Al Cliente'
	}
]

module.exports = { cargoOnlyNames, cargosData }
