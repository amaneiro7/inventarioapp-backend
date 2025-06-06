const { categoryOnlyNames, categoryData } = require('../categoryData/categoryData')
const { almacenes: locations, almacenName } = require('../location/locations')
const { modelMonitor, modelName } = require('../modelsSeries/modelMonitor')
const { statusData, statusName } = require('../statusData/statusData')
const monitores = [
	{
		serial: 'CEQBAHA047491',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.N936SW)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.N936SW)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.N936SW)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230QJ8',
		activo: 'AR001011134',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN402303RN',
		activo: 'AR001011525',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230R5P',
		activo: 'AR001011593',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230QHB',
		activo: 'AR001011198',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230QJG',
		activo: 'AR001011014',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN401809TB',
		activo: 'AR003001641',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230QL6',
		activo: 'AR001011035',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230R5G',
		activo: 'AR001011592',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CN40230QH8',
		activo: 'AR001011197',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S2021)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S2021)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S2021)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8172V65',
		activo: 'AR001009721',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ819565J',
		activo: '170995',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ819567M',
		activo: 'AR001005297',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ81956BR',
		activo: 'AR001005139',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ81956C5',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ81956C8',
		activo: 'AR001005133',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ81956CH',
		activo: 'AR001006224',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ81956YP',
		activo: 'AR001005760',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ819578M',
		activo: 'AR003001773',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ82605J3',
		activo: 'AR001010570',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8260665',
		activo: 'AR003001625',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261FZT',
		activo: 'AR001005697',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261G1W',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261G26',
		activo: 'AR003001516',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261G2L',
		activo: 'AR003001381',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261G5F',
		activo: 'AR001005517',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261G9T',
		activo: 'AR003001427',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261G9Y',
		activo: 'AR001005685',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261GB2',
		activo: 'AR001005614',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261GD1',
		activo: 'AR001005985',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261GD3',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261GHK',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261GH3',
		activo: 'AR001005519',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8261GHZ',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8270DVJ',
		activo: 'AR001009189',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ82718NX',
		activo: 'AR001010053',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ82718TG',
		activo: 'AR001011132',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ8271941',
		activo: 'AR001008560',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ83344C8',
		activo: '171981',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ83344CK',
		activo: '171920',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9010BMD',
		activo: 'AR001008102',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9010CCK',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9010CCQ',
		activo: 'AR001008223',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9010DST',
		activo: 'AR001007756',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9010CFD',
		activo: 'AR001007649',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9331CXZ',
		activo: 'AR001004733',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9331QDW',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9331QW3',
		activo: 'AR001009917',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3QC81956YN',
		activo: 'AR001005755',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC903PHJD',
		activo: 'AR001007936',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PCWH',
		activo: 'AR001005271',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PCWS',
		activo: 'AR001004736',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PCY8',
		activo: 'AR001004771',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PCYJ',
		activo: 'AR001005280',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PCYQ',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PD0C',
		activo: 'AR001005292',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC807PD0J',
		activo: 'AR001004759',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC811RG5N',
		activo: 'AR001005218',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC811RNB2',
		activo: 'AR001005232',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC811RNBD',
		activo: 'AR001005360',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826PD6W',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826PD77',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826PD78',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826PD87',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826PD8F',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY07',
		activo: 'AR001006718',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY08',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY0S',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY1G',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY22',
		activo: 'AR001008604',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY3K',
		activo: 'AR003001426',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY3L',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY48',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QY52',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QYMC',
		activo: 'AR001009718',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC826QYX2',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC829SWHT',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC829SX00',
		activo: 'AR001006873',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC829SX05',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P0GS',
		activo: 'AR001007041',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P0QY',
		activo: 'AR001006902',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P0RQ',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P0RS',
		activo: 'AR001006948',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P0RY',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P21G',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P21Y',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P221',
		activo: 'AR003001503',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P24X',
		activo: 'AR003001462',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC830P2CC',
		activo: 'AR003001412',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC834PV19',
		activo: 'AR001006956',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC834PV1C',
		activo: 'AR003001652',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC834PVDN',
		activo: 'AR001006942',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC836Q8XJ',
		activo: 'AR001007790',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC836Q9GP',
		activo: 'AR001007778',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PLCM',
		activo: 'AR003001554',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PM13',
		activo: 'AR001006756',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PM4C',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMHQ',
		activo: 'AR003001700',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMJ0',
		activo: 'AR001006612',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMJ6',
		activo: 'AR001006689',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMJ7',
		activo: 'AR001010691',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMJC',
		activo: 'AR001006728',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMLR',
		activo: 'AR001006633',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PMTV',
		activo: 'AR001006726',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC837PN4Y',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC902QKN9',
		activo: 'AR001008228',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC902QKQ0',
		activo: 'AR001010281',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC902QKYB',
		activo: 'AR001008377',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC903PHDP',
		activo: 'AR001009250',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC903PHFZ',
		activo: 'AR001010282',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC924NYZB',
		activo: 'AR001009228',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYF0',
		activo: 'AR001009826',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYF1',
		activo: 'AR001009231',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYF4',
		activo: 'AR001009224',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYG6',
		activo: 'AR001009227',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYGS',
		activo: 'AR001009241',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYGX',
		activo: 'AR001009736',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYGY',
		activo: 'AR001009234',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYH6',
		activo: 'AR001009229',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYH7',
		activo: 'AR001009808',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYH9',
		activo: 'AR001009221',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYHR',
		activo: 'AR001009232',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYHY',
		activo: 'AR001009236',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYJ3',
		activo: 'AR001009239',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYJ5',
		activo: 'AR001009242',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYJG',
		activo: 'AR001009220',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYJH',
		activo: 'AR001009240',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYJN',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYK0',
		activo: 'AR001009219',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYKH',
		activo: 'AR001009283',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYKK',
		activo: 'AR001009259',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYKP',
		activo: 'AR001009233',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NYZ7',
		activo: 'AR001009937',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ0S',
		activo: 'AR001009865',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ0V',
		activo: 'AR001009874',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ2G',
		activo: 'AR003001420',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ3W',
		activo: 'AR001009222',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ3X',
		activo: 'AR003001572',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ4H',
		activo: 'AR003001581',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942NZ4M',
		activo: 'AR001008561',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0SH',
		activo: 'AR001008057',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0SL',
		activo: 'AR001008530',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0SQ',
		activo: 'AR001008060',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0SX',
		activo: 'AR001009970',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0SY',
		activo: 'AR001008505',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0T2',
		activo: 'AR001008055',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0T6',
		activo: 'AR001008549',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0TG',
		activo: 'AR001008568',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0TX',
		activo: 'AR001009964',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0VV',
		activo: 'AR001009507',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0XB',
		activo: 'AR001008526',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0XC',
		activo: 'AR001008527',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P0Y4',
		activo: 'AR001008210',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P11W',
		activo: 'AR001008062',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P2MX',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P2P3',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P2QH',
		activo: 'AR003001419',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC942P2QS',
		activo: 'AR001009583',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND74608QM',
		activo: 'AR001005323',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND74617B5',
		activo: 'AR001004729',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND7512FZY',
		activo: '154227',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND810107R',
		activo: 'AR001009605',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND8121MQ0',
		activo: 'AR001006077',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND8121MZ5',
		activo: 'AR001006013',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND8121MZ6',
		activo: 'AR001004706',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND8121MZ8',
		activo: 'AR001006016',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND8121PXB',
		activo: 'AR001005854',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CND8121PXH',
		activo: 'AR001006084',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1710)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1710)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1710)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC048QY0J',
		activo: 'AR003001017',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC112NRT1',
		activo: 'AR003001062',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC112NS7V',
		activo: 'AR003001035',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC112NRP0',
		activo: 'AR003001161',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC112RNP2',
		activo: 'AR003001170',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC935R8TC',
		activo: 'AR001010922',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1851W)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S12S',
		activo: 'AR001009643',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ95214FR',
		activo: 'AR001010530',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S136',
		activo: 'AR003001636',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S1LM',
		activo: 'AR001010987',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC134QGX2',
		activo: '154231',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S1MN',
		activo: 'AR001010742',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC014R8DH',
		activo: 'AR003001242',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S1NJ',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S1MW',
		activo: 'AR001010753',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S2DY',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S102',
		activo: 'AR003001265',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC00S110J',
		activo: 'AR001011143',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S2G3',
		activo: 'AR001010956',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S1NQ',
		activo: 'AR003001387',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S2G2',
		activo: 'AR001010963',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ9510W58',
		activo: '4992',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC009RJB2',
		activo: '2649',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S17T',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CNC001S10B',
		activo: 'AR001010983',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.LE1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CMC107QP4V',
		activo: 'AR003001212',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S1933)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S1933)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S1933)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CMC212RP9B',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S1933)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S1933)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S1933)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3CQ4314FLP',
		activo: '244453',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.V193)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.V193)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.V193)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V249492',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName[9417])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName[9417])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName[9417])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V16R247',
		activo: '153013',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName[9227])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName[9227])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName[9227])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1Y7987',
		activo: '152935',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName[9227])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName[9227])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName[9227])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1MRL76',
		activo: '212701',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1ZDF62',
		activo: '214086',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V3B6472',
		activo: '24035722',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1MRL02',
		activo: '212715',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1XRV94',
		activo: '215927',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1XTY73',
		activo: '215905',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1MRK97',
		activo: '212671',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1MRK69',
		activo: '212698',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.D186WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'VNBA3AN',
		activo: '213742',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'VNBA3F1',
		activo: '213739',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'VNBA3F9',
		activo: '213741',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'VNBA10H',
		activo: '213738',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V366162',
		activo: '213248',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1ZGD45',
		activo: '206479',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1ZGD39',
		activo: '206527',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V366100',
		activo: '213261',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V3F5620',
		activo: '213225',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V302716',
		activo: '206545',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V3F5795',
		activo: '213223',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1ZGF06',
		activo: '207589',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V302412',
		activo: 'AR003001673',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V3F5786',
		activo: '213224',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V366107',
		activo: '213810',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V3F5756',
		activo: '213238',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V302705',
		activo: '206485',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V1ZGD36',
		activo: '206491',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L197WA)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '703UXBPV709',
		activo: '132993',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1711)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1711)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1711)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '801MXUN3C822',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1718S)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1718S)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1718S)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '801MXKD3C821',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.L1718S)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.L1718S)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.L1718S)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '104NDAYA1328',
		activo: '3018283',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.W1943)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.W1943)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.W1943)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CM19H9NS503635K',
		activo: '3014299',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName[933])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName[933])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName[933])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CM17H9FS132801D',
		activo: '3009417',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName['73NW'])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName['73NW'])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName['73NW'])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'CM17H9FS132833T',
		activo: '3009423',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName['73NW'])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName['73NW'])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName['73NW'])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'MJ19HCHY303895Z',
		activo: 'AR003001657',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName['910N'])[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName['910N'])[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName['910N'])[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'V893H9NZA08304X',
		activo: null,
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.SME1920N)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.SME1920N)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.SME1920N)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'ZT14H4LC203531E',
		activo: '212428',
		statusId: statusData.filter(status => status.name === statusName.ENALMACEN)[0].id,
		categoryId: modelMonitor.filter(model => model.name === modelName.S19A10N)[0].categoryId,
		brandId: modelMonitor.filter(model => model.name === modelName.S19A10N)[0].brandId,
		modelId: modelMonitor.filter(model => model.name === modelName.S19A10N)[0].id,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	}
]

module.exports = { monitores }
