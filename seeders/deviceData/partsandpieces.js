const { almacenes: locations, almacenName } = require('../location/locations')
const { modelBAM } = require('../modelsSeries/modelBram')

const partsAndPieces = [
	{
		serial: '087D1006806',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0].id,
		brandId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '087D1006803',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0].id,
		brandId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta tapa del dispositivo'
	},
	{
		serial: '087D1006822',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0].id,
		brandId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '087D1006672',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0].id,
		brandId: modelBAM.filter(model => model.name === 'USB TL-WN821N')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '352015100140732',
		activo: '246474',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF180')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF180')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF180')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '352015100140807',
		activo: '246475',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF181')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF181')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF181')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador'
	},
	{
		serial: '861887032644450',
		activo: '246482',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '861887032631200',
		activo: '246485',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'No tiene cable'
	},
	{
		serial: '861887032654871',
		activo: '246486',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta convertidor'
	},
	{
		serial: '861887032643627',
		activo: '246501',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '861887032646356',
		activo: '246502',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '861887032643775',
		activo: '246505',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '861887032614651',
		activo: '246507',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '861887032641977',
		activo: '246529',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '861887032637157',
		activo: '246532',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007349069',
		activo: '246553',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '014828007349374',
		activo: '246554',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador, bateria abombada y cable roto'
	},
	{
		serial: '014828007347345',
		activo: '246555',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007340928',
		activo: '246556',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007348087',
		activo: '246557',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007341652',
		activo: '246558',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007349341',
		activo: '246562',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007343617',
		activo: '246563',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007343583',
		activo: '246564',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007342932',
		activo: '246565',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'No tiene cable'
	},
	{
		serial: '014828007341280',
		activo: '246567',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007340944',
		activo: '246568',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007346180',
		activo: '246569',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007341637',
		activo: '246570',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007350448',
		activo: '246571',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador'
	},
	{
		serial: '014828007341702',
		activo: '246572',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '014828007348681',
		activo: '246573',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007350265',
		activo: '246574',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '014828007342957',
		activo: '246575',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828007341140',
		activo: '246576',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador'
	},
	{
		serial: '014828007344177',
		activo: '246577',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'No tiene cable'
	},
	{
		serial: '014828007343377',
		activo: '246585',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828008969808',
		activo: '246809',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828008968313',
		activo: '246810',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828008969881',
		activo: '246811',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828008968933',
		activo: '246813',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'No tiene cable'
	},
	{
		serial: '014828008969329',
		activo: '246814',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '014828008967232',
		activo: '246815',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador'
	},
	{
		serial: '014828008969501',
		activo: '246817',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MW41NF')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MW41NF')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MW41NF')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '865461020128151',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF910')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF910')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF910')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '861376036886317',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920V ')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920V ')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920V ')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '911563801209466',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'JMR451')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'JMR451')[0].id,
		brandId: modelBAM.filter(model => model.name === 'JMR451')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '861887032640383',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF920VS')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF920VS')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF920VS')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374035748781',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374035765355',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374032912463',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374032906879',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374032906267',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374032906127',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '8666374035758665',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, bateria abombada'
	},
	{
		serial: '8666374035762972',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035745795',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374032910186',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374032900914',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035765033',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035743337',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035743535',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035748385',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035758657',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035759010',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035765371',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '8666374035760588',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo, sin bateria'
	},
	{
		serial: '86663740355753617',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador'
	},
	{
		serial: '8666374035745670',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador'
	},
	{
		serial: '8666374035738469',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador'
	},
	{
		serial: '8666374032892251',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador, bateria abombada'
	},
	{
		serial: '8666374035742297',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta adaptador, sin bateria'
	},
	{
		serial: '8666374032908958',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cable, bateria abombada'
	},
	{
		serial: '8666374035767906',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cable, bateria abombada'
	},
	{
		serial: '860279030082993',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'D32')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'D32')[0].id,
		brandId: modelBAM.filter(model => model.name === 'D32')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador completo'
	},
	{
		serial: null,
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'MF911')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'MF911')[0].id,
		brandId: modelBAM.filter(model => model.name === 'MF911')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador completo'
	},
	{
		serial: '866374035763541',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4 ')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4 ')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4 ')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador completo'
	},
	{
		serial: '8666374032909717',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4 ')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4 ')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4 ')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador completo'
	},
	{
		serial: '8666374035760240',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador completo, bateria abombada'
	},
	{
		serial: '8666374035763517',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Falta cargador completo, sin bateria'
	},
	{
		serial: '911563808510569',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'JMR451')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'JMR451')[0].id,
		brandId: modelBAM.filter(model => model.name === 'JMR451')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'No tiene cable'
	},
	{
		serial: '8666374032901136',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'sin bateria'
	},
	{
		serial: '8666374035760851',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin bateria '
	},
	{
		serial: '8666374035753385',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'sin bateria, con cargador'
	},
	{
		serial: '8666374035749730',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'R4')[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'R4')[0].id,
		brandId: modelBAM.filter(model => model.name === 'R4')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'sin bateria, sin adaptador'
	},
	{
		serial: '8CU94709DW',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Cable USB')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Cable USB')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Cable USB')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '8CU94706SB',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Cable USB')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Cable USB')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Cable USB')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '164455',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'SteadyShot DSC-W620'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'SteadyShot DSC-W620'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'SteadyShot DSC-W620'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañada'
	},
	{
		serial: '164599',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'SteadyShot DSC-W620'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'SteadyShot DSC-W620'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'SteadyShot DSC-W620'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cables'
	},
	{
		serial: 'WR7FB03726R',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'DMC-LS70')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'DMC-LS70')[0].id,
		brandId: modelBAM.filter(model => model.name === 'DMC-LS70')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '8094C9BC100073X',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'ST65')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'ST65')[0].id,
		brandId: modelBAM.filter(model => model.name === 'ST65')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '8094C9BC10006SM',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'ST65')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'ST65')[0].id,
		brandId: modelBAM.filter(model => model.name === 'ST65')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '8094C9BC10005RV',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'ST65')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'ST65')[0].id,
		brandId: modelBAM.filter(model => model.name === 'ST65')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '359248069830315',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 6 A1526')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 6 A1526')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 6 A1526')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Cable deteriorado'
	},
	{
		serial: '359248069830158',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Cable deteriorado, Tlf. Dañado'
	},
	{
		serial: '31913/61Q301635',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '356721054192043',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Asha 311')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Asha 311')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Asha 311')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: 'C6KD10R1N72Y',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 11')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 11')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 11')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: 'DNPCW6ZTN72Y',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 11')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 11')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 11')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: 'C6KD177LN72Y',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 11')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 11')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 11')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '31913/61Q300917',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '31913/61Q301677',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Completo'
	},
	{
		serial: '908614392507',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'USB Wireless 850'
		)[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'USB Wireless 850')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'USB Wireless 850')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'El conector se encuentra en la caja del mouse Microsft'
	},
	{
		serial: '31913/61Q206868',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Redmi Note 10 Onyx Gray'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Nuevo'
	},
	{
		serial: '359243069673906',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: 'R28H62JW4JM',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Samsung Galaxy J2'
		)[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'Samsung Galaxy J2')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Samsung Galaxy J2')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: '32D35527FAJ',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'V265')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'V265')[0].id,
		brandId: modelBAM.filter(model => model.name === 'V265')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: '356506040130417',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'WX306')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'WX306')[0].id,
		brandId: modelBAM.filter(model => model.name === 'WX306')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: '865371027220705',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Y220')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Y220')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Y220')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: '359320060122842',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 6 A1524')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: '359318060346700',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Iphone 6 A1525')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Iphone 6 A1525')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Iphone 6 A1525')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Sin cargador'
	},
	{
		serial: 'DV01GRT',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Convertidor de VGA - HDMI'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Convertidor de VGA - HDMI'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Convertidor de VGA - HDMI'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'DV01GSK',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Convertidor de VGA - HDMI'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Convertidor de VGA - HDMI'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Convertidor de VGA - HDMI'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'WP120QC00968',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'SP-i170')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'SP-i170')[0].id,
		brandId: modelBAM.filter(model => model.name === 'SP-i170')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'UP500G6T',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'DK1522')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'DK1522')[0].id,
		brandId: modelBAM.filter(model => model.name === 'DK1522')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Dañado'
	},
	{
		serial: 'THY02006MQ',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'HSA-Q001PR')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'HSA-Q001PR')[0].id,
		brandId: modelBAM.filter(model => model.name === 'HSA-Q001PR')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'UP602AYB',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'DK1522')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'DK1522')[0].id,
		brandId: modelBAM.filter(model => model.name === 'DK1522')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '5CG039WDVW',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'USB-C Dock G5')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'USB-C Dock G5')[0].id,
		brandId: modelBAM.filter(model => model.name === 'USB-C Dock G5')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '1CW8172430',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'HSA-Q001PR')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'HSA-Q001PR')[0].id,
		brandId: modelBAM.filter(model => model.name === 'HSA-Q001PR')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'F6QMW06GF4YH',
		activo: '243491',
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Air A1475')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Air A1475')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Air A1475')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Con su cargador'
	},
	{
		serial: null,
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Active Pen G2')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Active Pen G2')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Active Pen G2')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Cantidad 2'
	},
	{
		serial: null,
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Y1215P')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Y1215P')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Y1215P')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: '905901080114',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Wireless 900 Model 1737'
		)[0].categoryId,
		modelId: modelBAM.filter(
			model => model.name === 'Wireless 900 Model 1737'
		)[0].id,
		brandId: modelBAM.filter(
			model => model.name === 'Wireless 900 Model 1737'
		)[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Con su conector'
	},
	{
		serial: '9CP92505JW',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'Elite')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'Elite')[0].id,
		brandId: modelBAM.filter(model => model.name === 'Elite')[0].brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: 'Forro, Cable'
	},
	{
		serial: '384097900105',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'FaceCam 321')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'FaceCam 321')[0].id,
		brandId: modelBAM.filter(model => model.name === 'FaceCam 321')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'YB208C201937',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(model => model.name === 'FaceCam 1010')[0]
			.categoryId,
		modelId: modelBAM.filter(model => model.name === 'FaceCam 1010')[0].id,
		brandId: modelBAM.filter(model => model.name === 'FaceCam 1010')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'A1AP15G00125',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Tandberg TTC8-03'
		)[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'Tandberg TTC8-03')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Tandberg TTC8-03')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	},
	{
		serial: 'A1AP48F00259',
		activo: null,
		statusId: 2,
		categoryId: modelBAM.filter(
			model => model.name === 'Tandberg TTC8-03'
		)[0].categoryId,
		modelId: modelBAM.filter(model => model.name === 'Tandberg TTC8-03')[0]
			.id,
		brandId: modelBAM.filter(model => model.name === 'Tandberg TTC8-03')[0]
			.brandId,
		employeeId: null,
		locationId: locations.filter(
			location =>
				location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1
		)[0].id,
		observation: ''
	}
]

module.exports = { partsAndPieces }
