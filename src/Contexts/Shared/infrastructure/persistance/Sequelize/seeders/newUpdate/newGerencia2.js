const { capitalCadena } = require('./capitalCadena')
const { unionVP } = require('./newGerencia1')
const { rangeLevel } = require('./newJerarquia')

const now = new Date()

const newGerencia2 = [
	{
		id: '8c4998ab-5a50-47c9-9a3f-2d70066e7a38',
		name: capitalCadena('Gerencia De Creación De Usuarios'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Area Administración De Usuarios'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ea74ce28-13c5-42e3-82e6-fcee25c441f6',
		name: capitalCadena('Gerencia De Administración Plataforma Media'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Area Administración De Usuarios'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '282ff0fd-acf8-4a25-b3c7-4fd003e0fa1c',
		name: capitalCadena('Gerencia De Administración Acceso Identidad'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'Gerencia De Area Administración De Usuarios'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3844135e-7bd2-4d03-82c5-996ae23a2cc4',
		name: capitalCadena('Gerencia De Control De Calidad'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Gerencia De Area Calidad Y Cumplimiento'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '10674989-42cd-4908-9767-4860a5659b24',
		name: capitalCadena('Gerencia De Cumplimiento'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Gerencia De Area Calidad Y Cumplimiento'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd8643089-42b7-4bcc-9187-8691dddb73cd',
		name: capitalCadena('Gerencia De Seguridad Perimetral'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Gerencia De Area Seguridad Informatica'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cf907904-41b5-4065-970a-935994480ae2',
		name: capitalCadena('Gerencia De Seguridad AS-400'),
		level: rangeLevel.GERENCIA_OPERATIVA,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Gerencia De Area Seguridad Informatica'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b7f01960-828c-41f9-a0eb-47cd9745190b',
		name: capitalCadena('Gerencia de Monitoreo y Verificación de Op. Inusual'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Cumplimiento Y Control De Gestión'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '85f81e0d-2d9e-4ad0-a3a8-902629a6126a',
		name: capitalCadena('Gerencia de Atención de Organismos Oficiales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Prevención y Control LCFTFPADM'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b7cc918a-106a-4481-b84d-11d4eebf897a',
		name: capitalCadena('Gerencia Estadística y Mantenimiento de Registros'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. UPCLCFTFPADM'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '36e00d2a-261c-4c5c-b17d-de677e598587',
		name: capitalCadena('Gerencia De Área Análisis Y Supervisión De Op Fina'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. UPCLCFTFPADM'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cd77f7c0-45a4-4e4b-9808-39ff13affc4d',
		name: capitalCadena('Gerencia De Área Estadist Y Análisis Estratégico'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. UPCLCFTFPADM'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '78a02301-a94e-4978-878e-9a1d2f44e89c',
		name: capitalCadena('Gerencia De Área Prev Y Control De Lc-ft-fpadm'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. UPCLCFTFPADM'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '221ddd0c-7491-4edb-ac92-75b8a13bfd47',
		name: capitalCadena('Gerencia De Negocios Capital I'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI I'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1a0a7f37-ce02-485a-ae52-94ba353d06c4',
		name: capitalCadena('Gerencia De Negocios Capital (BEI) II'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI I'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'de20be93-b50b-40c5-9ad1-6f79c7cccfdb',
		name: capitalCadena('Gerencia De Negocios Occidente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI I'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '07c66938-4c8c-4af4-94b5-efbdaeea7822',
		name: capitalCadena('Gerencia De Negocios Oriente (BEI)'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI I'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b9692964-7d50-4d38-b7ff-c97f9e825130',
		name: capitalCadena('Gerencia De Negocios Capital III'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI I'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5012098b-ece5-4f05-9f9c-e939ab72648e',
		name: capitalCadena('Gerencia De Negocios (BEI) I'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI II'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4af87601-bcb1-4e0a-a273-d8d1d8c640b7',
		name: capitalCadena('Gerencia De Negocios (BEI) II'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI II'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b2aa4796-4602-4e26-ba54-c196731ad5ef',
		name: capitalCadena('Gerencia De Negocios (BEI) III'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI II'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '03948e79-c9ff-4626-b758-c44e37b95466',
		name: capitalCadena('Gerencia De Negocios Aragua'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI IV'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ef89d4d8-36ef-4db3-bd65-acbda8f92747',
		name: capitalCadena('Gerencia De Negocios Carabobo I'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. BEI IV'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '21a8dece-5f88-4067-8416-9f7c30c9eacc',
		name: capitalCadena('Gerencia De Area De Negocios Telecomunicaciones'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca Corporativa'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ed9576db-f6b0-4c50-9906-c8f154fb014c',
		name: capitalCadena('Gerencia De Area De Negocios Corporativa II'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca Corporativa'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'eb919280-ffb4-4a13-bd29-19892c504b02',
		name: capitalCadena('Gerencia De Area De Negocios Corporativa Centro'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca Corporativa'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1e37c77a-5fad-45cc-82e9-01dde81bb3af',
		name: capitalCadena('Gerencia De Area De Negocios Corporativa I'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca Corporativa'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a7ebc895-735e-4c02-ab38-2e771f996c36',
		name: capitalCadena('Gerencia Control Y Seguimiento'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca Corporativa'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '81384a14-33d3-4016-9bea-6ae40a1690b5',
		name: capitalCadena('Gerencia De Negocios I'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca De Relación'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd92d1279-5925-44ad-bd6c-89ac67524c8d',
		name: capitalCadena('Gerencia De Negocios II'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Banca De Relación'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b67efe0d-1390-4ad0-836a-18a25d3491f8',
		name: capitalCadena('Gerencia Regional De Negocios Sector Agropecuario'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Agropecuario'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f1a804a5-690e-44c5-97cb-82f226c71ea9',
		name: capitalCadena('Gerencia Control Y Seguimiento (BEI)'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Agropecuario'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9edfc5e3-d33f-498b-8afe-d4fb57e0b67a',
		name: capitalCadena('Gerencia De Area De Negocios Sector Financiero'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Financiero'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f2721076-6b5d-4d81-b2e3-615c9637810b',
		name: capitalCadena('Gerencia De Negocios Sector Seguros'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Financiero'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '741664f7-3675-4666-9245-1b2e26ae3e98',
		name: capitalCadena('Gerencia De Negocios Sector Casa De Bolsa'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Financiero'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ab3961ff-4421-4dfa-902a-6f479cf7b0fd',
		name: capitalCadena('Gerencia De Negocios Capital II'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Público'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '54fcc440-2e8a-45b4-891a-05bf6af0cbfc',
		name: capitalCadena('Gerencia Regional De Negocios Sector Público I'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Público'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e06c20d8-201a-445d-bc62-e79c02fcccb5',
		name: capitalCadena('Gerencia De Negocios Oriente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Público'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '85a50a6b-9122-4372-9c41-97c178c368f4',
		name: capitalCadena('Gerencia De Negocios Los Andes'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Público'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8cd65d23-eb07-4b3e-82aa-ab6e4ba4a3df',
		name: capitalCadena('Gcia. Regional De Negocios Sector Público Centro'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Corporativa Bei Sector Público'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b5e5dafc-c139-4009-a34e-32b37d7c90cb',
		name: capitalCadena('Gerencia De Area Def. De Modelos De Calidad'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Calidad De Servicio'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fdfa901e-23f5-418e-b20c-b6bded9d93af',
		name: capitalCadena('Gerencia De Area Eval. De Indicadores De Calidad'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Calidad De Servicio'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a0740dce-1935-46de-8c26-6d37e8c257dc',
		name: capitalCadena('Gerencia De Caja De Ahorros'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cc3c9aef-a56d-4016-adb3-7e72b64727f9',
		name: capitalCadena('Gerencia De Seguridad Y Salud Laboral'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ed501994-4ecc-413a-8a3c-f76ed1b3ad95',
		name: capitalCadena('Gerencia De Area Seleccion De Talento'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '46f0ce1d-13d7-4079-8295-f7f4530c39fe',
		name: capitalCadena('Gerencia De Area Gestion De Servicios Al Personal'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4238c895-07b1-4f89-9a89-ea0d916e1730',
		name: capitalCadena('Gerencia Salud Ocupacional'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2c0fb079-03f5-4539-adbf-2275b60f0fad',
		name: capitalCadena('Gerencia De Area Compensación Y Beneficios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '49a792d5-b566-4733-b19c-65aa42baaef7',
		name: capitalCadena('Gerencia De Area Formacion Y Desarrollo'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Recursos Humanos Y Cultura Organizacional'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b8451967-43cf-4aef-bcb4-bd5f1eca8c58',
		name: capitalCadena('Gerencia Gestión Documental'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión Organizacional Y Procesos'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '48e36517-b653-45fd-bb4a-9fe0d19d7480',
		name: capitalCadena('Gerencia De Área Arquitectura De Procesos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión Organizacional Y Procesos'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6acbbd34-f51f-41e1-a58f-d62b349e5970',
		name: capitalCadena('Gerencia De Área Gestión De Estructuras Negocio'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión Organizacional Y Procesos'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '93b241db-19f1-4b8c-8917-b3730f7f2c35',
		name: capitalCadena('Gcia De Area Gestión De Estructuras Direcc Central'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión Organizacional Y Procesos'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cd0e74d0-3835-40d7-a0f0-5c13a1ebb31e',
		name: capitalCadena('Gcia. De Área De Proyectos De Transformación'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Planificación Estratégica y PMO'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4c0b6935-8e29-45ec-9080-087e527e8db9',
		name: capitalCadena('Gcia. de Área Planificación Estratégica y Control'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Planificación Estratégica y PMO'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '56e2d966-176f-4228-bbeb-95a240caa22b',
		name: capitalCadena('Gerencia De Mecanismos Cambiarios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Tesoreria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7999bf31-3c35-49d5-9421-76ac5481d6ec',
		name: capitalCadena('Gerencia De Mercado Monetario'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Tesoreria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4899b5fd-a28b-457b-8e65-878796fa78bd',
		name: capitalCadena('Gerencia De Distribución'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Tesoreria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f6cb3b9e-ce7e-4b4a-90a5-d49e9d53d969',
		name: capitalCadena('Gerencia De Renta Fija'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'Tesoreria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e61f164b-3356-4017-b745-fc7189cd1a5e',
		name: capitalCadena('Gerencia De Area Contratos Y Proveedores'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Contratos Y Servicios'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '83826c49-c062-4144-ae08-2d656c86d353',
		name: capitalCadena('Gerencia De Area Servicios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Contratos Y Servicios'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b03fdafa-295b-4a54-8416-39bb3beed668',
		name: capitalCadena('Gerencia De Activos Fijos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Control De Activos'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '540970b7-3330-4d11-ae86-50dd422228a2',
		name: capitalCadena('Gerencia De Área Analisis De Gestión'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Control De Activos'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '651eaec0-40fb-4595-a251-4cbe1b425a9f',
		name: capitalCadena('Gerencia De Documentación De Activos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Control De Activos'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f4130ab0-306f-4566-bde4-5897a7e6c220',
		name: capitalCadena('Gerencia De Area Admin. De Inmuebles Propios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Control De Inmuebles'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '428b2554-bcd4-4b98-b240-24646cb0a40b',
		name: capitalCadena('Gerencia De Area Control De Inmuebles Arrendados'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Control De Inmuebles'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f3934dda-b40e-4951-a998-6c61e406c67c',
		name: capitalCadena('Gerencia De Área De Negocios Internacionales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Banca Internacional'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd75cfc66-2744-4314-b253-13c2e57741d5',
		name: capitalCadena('Gerencia De Area Corresponsalia'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Banca Internacional'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9a6ad8b8-7622-42e7-aaaa-8e655d5b827b',
		name: capitalCadena('Gerencia De Ara De Contraloría De Datos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Contraloría'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e442892b-4c8a-4272-b1ad-35965b456408',
		name: capitalCadena('Gerencia Proyecto Especial Control Y Gestión'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Contraloría'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a083cac2-8f6a-4cb0-a1eb-82eedd46a7e0',
		name: capitalCadena('Gerencia De Area Control De Gestión'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Contraloría'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '5827241b-c45d-4e6a-a26e-3e3764889a28',
		name: capitalCadena('Gerencia De Area Control Financiero'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Contraloría'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd94ebafb-3afe-464f-b51d-a743e2ef9d81',
		name: capitalCadena('Gerencia De Control Presupuestario'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Contraloría'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '30f10052-cb40-4c86-a9b0-2f2e3dcbc457',
		name: capitalCadena('Gerencia De Area Negocios Fiduciarios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Fideicomiso'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dc3554aa-1831-424c-a64e-eccb3ee2201c',
		name: capitalCadena('Gerencia Legal'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Fideicomiso'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3028e2a8-510d-4a3b-a0ff-b2c0ce99d2e2',
		name: capitalCadena('Gerencia De Area Contabilidad Fiduciaria'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Fideicomiso'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '96fdf818-b8bb-4f1e-8c54-d49af730c52d',
		name: capitalCadena('Gerencia De Area Tributos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestion De Contabilidad Pagos Y Tributos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cc6eb036-e877-4b1b-a383-b7c047794f42',
		name: capitalCadena('Gerencia De Area CTRL Contable Y Gestión De Gasto'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestion De Contabilidad Pagos Y Tributos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6ae613d9-8cd7-4526-8e32-a8de3f93722f',
		name: capitalCadena('Gerencia De Area De Contabilidad'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestion De Contabilidad Pagos Y Tributos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6f2a99ad-9688-417b-9c50-f2b738d9421b',
		name: capitalCadena('Gerencia De Area Pago A Proveedores'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestion De Contabilidad Pagos Y Tributos'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7540f950-12db-4466-9484-fda75197ac05',
		name: capitalCadena('Gerencia De Área De Infraestructura Y Mantenimient'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Infraestructura Y Mantenimiento Fisico'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '51df20d9-57be-4319-8a1e-2ed3897fdd03',
		name: capitalCadena('Gerencia De Área Planificación Financiera'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Planificación Financiera Y Presupuesto'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2ae42d29-a81d-4bf5-872c-6fa158a04d8a',
		name: capitalCadena('Gerencia De Presupuesto'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Planificación Financiera Y Presupuesto'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4be72974-b23c-44a2-b3ff-fb8e095caabd',
		name: capitalCadena('Gerencia De Área Compras Y Servicios Generales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Procura, Almacén Y Servicios Generales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c6c97618-90de-4e15-aa3f-9e8a28d128f5',
		name: capitalCadena('Gerencia De Área Almacen Y Proveeduría'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Procura, Almacén Y Servicios Generales'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '48dab536-7fd7-4f96-90da-03c77bcc2dcd',
		name: capitalCadena('Gerencia De Proyectos Y Soporte Tecnico'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Seguridad Bancaria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fe42f5ec-ae4b-4cf7-8038-a5c6af13cff5',
		name: capitalCadena('Gerencia Nacional De Consola'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Seguridad Bancaria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e708dde8-5ab9-4d28-923b-dea645784266',
		name: capitalCadena('Gerencia De Area Admin. De Seguridad Bancaria'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Seguridad Bancaria'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '10bebd23-f411-4b51-88ec-60094db8b50a',
		name: capitalCadena('Gerencia Soporte Inv. Tecno. De Seguridad Bancaria'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Prevención Y Control Del Fraude'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '17219ac2-9e02-48db-8b2a-6d3210bc59c3',
		name: capitalCadena('Gerencia Monitoreo Y Anti Fraude Capital'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Prevención Y Control Del Fraude'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '08f15f61-b14f-4d65-afec-ef1994f87c21',
		name: capitalCadena('Gerencia Monitoreo Y Anti Fraude Occidente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Prevención Y Control Del Fraude'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '07f66633-66ea-43d6-aeeb-6ab4b5c81157',
		name: capitalCadena('Gerencia De Área Seguridad Preventiva Y Prot. Física'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Seguridad Preventiva Y Protección Física'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd6139e9a-6641-40b7-92c0-4d961b703b7e',
		name: capitalCadena('Gerencia De Area Seguridad Industrial Y Contingenc'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Seguridad Preventiva Y Protección Física'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4bdd9041-b9ea-40d8-9842-57394a3f55c0',
		name: capitalCadena('Gcia. de Análisis de Credito Región Occidente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Análisis De Crédito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '433c778d-e1be-4a3d-8b04-b312132adc84',
		name: capitalCadena('Gcia. De Analisis De Credito Banca Comercial'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Análisis De Crédito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '244e832d-0898-4f2f-b8b0-a8d74b23ea9c',
		name: capitalCadena('Gcia. De Analisis De Credito Banca Corporativa'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Análisis De Crédito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '88da5ebf-d525-4949-8585-b51c27fb3460',
		name: capitalCadena('Gcia. De Credito Banca Especializada'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Análisis De Crédito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1ebb783d-fc30-403f-9e93-a28099a03e2e',
		name: capitalCadena('Gcia. De Control Estadistico E Informe Especiales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Análisis De Crédito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '793e8980-76ef-41a0-82c3-20c2141efae1',
		name: capitalCadena('Gerencia De Archivo Central De Credito'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Seguimiento Y Control De Credito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fdfa661d-d30d-4024-b0fb-1c9339407a64',
		name: capitalCadena('Gerencia De Fianzas Y Garantias'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Seguimiento Y Control De Credito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd0cc71f3-1dcf-4214-82aa-30253994f23a',
		name: capitalCadena('Gerencia De Validacion'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Seguimiento Y Control De Credito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f5053476-b9dc-4ec9-86a2-fe453d6bb200',
		name: capitalCadena('Gerencia De Control De Cartera De Credito'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Seguimiento Y Control De Credito'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3a61b15e-881d-4567-88ec-d8b511c4ebd9',
		name: capitalCadena('Gerencia De Area Core Bancario'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '51477917-b627-49ee-980c-f43fd67ba076',
		name: capitalCadena('Gerencia De Area Integración De Plataforma'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c4d3603c-5d52-44c7-a890-97217a045af5',
		name: capitalCadena('Gerencia De Area Bi Y Sistemas Regulatorios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '44a61220-c739-4fb9-a1e9-61c7bb75d57f',
		name: capitalCadena('Gerencia Sistemas De Sucursales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '253c3f49-a76f-42ed-8e0c-8194771a52d1',
		name: capitalCadena('Gerencia De Area Sistema Distribuido'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '63699b98-4ad1-47fc-9c0e-959e6c1c602b',
		name: capitalCadena('Gerencia de Desarrollo de Sistemas Internos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9ba69eb9-9c11-48dc-8c4b-d4f2804c85b4',
		name: capitalCadena('Gerencia De Area Sistema De Medios De Pago'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarrollo De Sotware'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '69685089-09c4-44f9-baab-989d17b37cec',
		name: capitalCadena('Gerencia De Area Bi Y Regulatorios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9d452cac-29d2-4700-87af-43ff09770e34',
		name: capitalCadena('Gerencia De Area Proyectos Pos Atms'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd4328b57-95da-4027-8956-4821e74195ae',
		name: capitalCadena('Gerencia De Area Gestión De Certificación'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd87b4edf-2485-4352-8c11-9c90e2ddd4d7',
		name: capitalCadena('Gerencia De Area Oficina De Proyectos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fb66a351-fbe8-40e7-b3b4-96afc004ff45',
		name: capitalCadena('Gerencia De Area Proyectos Canales Digitales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '0253a9e5-c57e-46f2-8217-97e6487cc625',
		name: capitalCadena('Gerencia De Area Proyect De Integrac De Plataforma'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'fa79417b-6483-47a3-b08e-8b89802d777e',
		name: capitalCadena('Gerencia De Area Proyectos Core Bancario'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f9aafc3c-e94f-4e3a-b497-f464f025d6e4',
		name: capitalCadena('Gerencia De Area Proyectos De Seguridad Ti'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Gestión De Proyectos TI'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'dc30014b-0d61-4904-b2c5-eca4b9d83c4a',
		name: capitalCadena('Gerencia De Soporte Tecnico Occidente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestión De Soporte Técnico Y Arquitectura TI'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '071fb58c-bd7f-4cec-bde9-2c50f6008cec',
		name: capitalCadena('Gerencia De Soporte Tecnico Caracas'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestión De Soporte Técnico Y Arquitectura TI'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '379052c3-0587-412d-89f9-2ae61e320809',
		name: capitalCadena('Gerencia De Proyectos Ti'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Gestión De Soporte Técnico Y Arquitectura TI'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '07eed8b2-33fe-41d6-999f-d4f326d49c7c',
		name: capitalCadena('Gerencia De Area De Soporte Pos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Soporte A Canales Electrónicos'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e96385cb-00d1-40dc-8b9f-913653a0f306',
		name: capitalCadena('Gerencia De Area De Soporte De Atms'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Soporte A Canales Electrónicos'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '7fae03b2-0b74-46f9-93b3-d2e1d0e19571',
		name: capitalCadena('Gerencia De Area Administración De Bases De Datos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '8481029e-b3d7-4acc-bd38-493f9d39c843',
		name: capitalCadena('Gerencia De Area Producción'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '51465c83-294f-4203-8491-5f542c731645',
		name: capitalCadena('Gerencia De Area Energía'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '31544433-0389-4960-a70f-5ebf27429450',
		name: capitalCadena('Gerencia De Area De Comunicaciones'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'cbfbcbce-337d-400b-97f6-b92b19289229',
		name: capitalCadena('Gerencia De Monitoreo Telco E Infraestructura'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '21c6d636-f06c-44bc-a885-ecef7af40f5a',
		name: capitalCadena('Gerencia De Area Plataforma Especializada'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Tecnología'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9ebc553a-c446-46d4-838e-b9c6e87f10cd',
		name: capitalCadena('Gerencia De Área Reclamos De Canales Electronicos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Atención Al Cliente'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '35280857-0c75-4ab6-b7b8-679447c4b1bd',
		name: capitalCadena('Gerencia De Procesos Especiales Y Reportería'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Gestión Operativa Interna Y Proyectos Espe'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'be8d76b8-4bc5-4c88-976e-a1f9ee0829dc',
		name: capitalCadena('Gerencia De Área Gestión Y Control Operativo'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Gestión Operativa Interna Y Proyectos Espe'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a05c15e8-8b4c-45b2-9ee6-6cc297d1d660',
		name: capitalCadena('Gerencia De Área De Liquidaciones Y Aplic De Cobro'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Liquidaciones Y Servicios'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e44541ad-9c1b-4c47-9a1a-3ed813c020df',
		name: capitalCadena('Gerencia De Area Plan Mayor'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Liquidaciones Y Servicios'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '67d0cb30-55aa-4782-ab6a-b82edab0beac',
		name: capitalCadena('Gerencia De Área Recauda De Impuestos Y Otros Serv'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Liquidaciones Y Servicios'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '4c59d246-0fb1-4bf2-9e01-82dbd74bbae4',
		name: capitalCadena('Gerencia De Área Operaciones Especializadas'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Liquidaciones Y Servicios'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'a14db896-e51d-443b-a4b0-9943364abb61',
		name: capitalCadena('Gerencia De Área Emisión Y Distribución'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Emisión Y Distribución'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6f0f02fc-e992-490b-b350-1a283821de7e',
		name: capitalCadena('Gerencia De Área Admin De Cuentas Y Estadísticas'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Emisión Y Distribución'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2037cdfd-31da-4874-ba31-763fc2115a13',
		name: capitalCadena('Gerencia De Área Logística De Efectivo'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Operaciones De Efectivo'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1671fb99-7406-42c7-8f27-0d5a7dbb960d',
		name: capitalCadena('Gerencia De Área De Transporte De Valores Y Centros De Acopio'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Operaciones De Efectivo'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'b1d6bfb8-4b33-4076-8d35-61f0a53c3c9c',
		name: capitalCadena('Gerencia De Área Operaciones De Tesorería'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Operaciones De Tesorería'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'bc0ae83d-5f5e-4f5a-ac4a-738ee1c68122',
		name: capitalCadena('Gerencia De Área De Custodia Y Operaciones Cambiarias'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Operaciones De Tesorería'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '78fee5e0-4917-4187-85d7-4e6a234387cb',
		name: capitalCadena('Gerencia De Área Legal De Créditos, Productos Y Serv.'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Aseguramiento Normativo'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2454974a-e82c-4a44-a56d-a8df9883f8ae',
		name: capitalCadena('Gerencia De Área Asuntos Técnicos Regulatorios'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Aseguramiento Normativo'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '296e9347-451e-4a2f-9f68-e3533cdef8c8',
		name: capitalCadena('Gerencia Control Institucional'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Aseguramiento Normativo'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1cf8e8c8-a8bb-4e9c-b0fb-43cc1d8a5ba9',
		name: capitalCadena('Gerencia Asuntos Corp. y Confirmaciones Bancarias'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Asuntos Legales'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd73564dc-8464-45b2-84e6-eb433a39e48b',
		name: capitalCadena('Gerencia De Área Legal Y Organismos Oficiales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Asuntos Legales'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '9d6e4ad6-dafe-44d8-a989-0522e843dd29',
		name: capitalCadena('Gerencia De Área Ctrol Institucional Y Asuntos Corp.'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Asuntos Legales'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'e4eeca95-5bdd-4ccf-9f8d-65d04688e11d',
		name: capitalCadena('Gerencia De Área Mercadeo'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Mercadeo Y Comunicaciones Corporativas'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '2a42e72b-8b41-4fcf-9ac8-52f30694d5d5',
		name: capitalCadena('Gerencia De Área De Comunicaciones Corporativas'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. De Mercadeo Y Comunicaciones Corporativas'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'c31fbead-c9e9-4f97-9527-d9b3235da13b',
		name: capitalCadena('Gerencia De Área Productos Y Serv Tdd Y Sol Emerg'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Productos Y Servicios De Tarjetas'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'ae8bcfb9-f44e-4c5a-8c2e-638f503d6622',
		name: capitalCadena('Gerencia De Área Productos Y Servicios Tdc'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. De Productos Y Servicios De Tarjetas'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1e01740f-4a1b-4915-86b1-fe89ca347401',
		name: capitalCadena('Gerencia De Innovación Y Productos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarollo De Negocios E Innovación'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '737d45aa-850d-479e-8050-920eaa17011a',
		name: capitalCadena('Gerencia Oficina Digital'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarollo De Negocios E Innovación'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '3194db12-cb61-4178-8734-2dff9c7059b6',
		name: capitalCadena('Gerencia De Desarrollo De Canales Digitales'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Desarollo De Negocios E Innovación'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '932b2d87-4fef-4faa-be74-e8a6f3d54be4',
		name: capitalCadena('Gerencia Analítica Digital'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Inteligencia De Negocios Y Analítica Digital'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'defc8346-4275-4f00-8ad1-9f4ab60f9a47',
		name: capitalCadena('Gerencia De Area Contact Center'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Servicios Al Cliente'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '254b3ea9-43ba-4ab9-ba81-da116b7a28d0',
		name: capitalCadena('Gerencia Servicios Post Venta Jurídicos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Soluciones Electrónicas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f0ef1045-f5c5-4a6c-a1a8-069acee519a9',
		name: capitalCadena('Gerencia Afiliación Al Servicio Pos Metropolitana'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Soluciones Electrónicas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'd80f5a12-8289-4534-ae5b-6e3963fb7d8d',
		name: capitalCadena('Gerencia Afiliación Al Servicio Pos Interior'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Soluciones Electrónicas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'f1862200-0abd-4224-9956-a0d1ad02d8f4',
		name: capitalCadena('Gerencia Servicio Al Cliente Y Recuperaciones Pos'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Soluciones Electrónicas'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: 'eefe86cc-d258-4fce-912f-561c6fccecd9',
		name: capitalCadena('Gerencia De Control Y Gestión'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Eficiencia Comercial'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '405ff16f-fbe8-4b7c-8979-9a1e927f9173',
		name: capitalCadena('Gerencia De Eficiencia Comercial'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Eficiencia Comercial'.toLowerCase()).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '1fb66b7b-7f8a-45d5-9e85-7fe934b347dc',
		name: capitalCadena('Gerencia De Área Back Office Registro De Cliente (adm)'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(d => d.name.toLowerCase() === 'V.P. Regional Administración De Agencias'.toLowerCase())
			.id,
		created_at: now,
		updated_at: now
	},
	{
		id: '82ee4431-3f78-4620-ba6d-832f9cdf731d',
		name: capitalCadena('Gerencia De Área Back Office Registro De Cliente'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Regional Gestión Operativa De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	},
	{
		id: '6f0442ae-ee95-422a-9c13-2ec76dd64f02',
		name: capitalCadena('Gerencia Digitalización, Ctrol Archiv. Y Correspondencia'),
		level: rangeLevel.GERENCIA_SENIOR,
		centroDeCosto: null,
		codigoInterno: null,
		isUnitActive: false,
		parent_id: unionVP.find(
			d => d.name.toLowerCase() === 'V.P. Regional Gestión Operativa De Agencias'.toLowerCase()
		).id,
		created_at: now,
		updated_at: now
	}
]

const unionGerenciaVP = unionVP.concat(newGerencia2)

module.exports = { unionGerenciaVP, newGerencia2 }
