const { unidadCompleteUpdate } = require('./unindadActualDuplicate')
const { cargosData, cargoOnlyNames } = require('../employee/cargo/cargos')
const updateEmployeeUnidadp1 = [
	{
		cedula: 5574675,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 11231379,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 11161843,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 17164034,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25858320,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17459662,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18693462,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13721975,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15739170,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9648229,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23786398,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23785724,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23785406,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17702798,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26369968,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7261770,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27692037,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25070681,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26570797,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7196464,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9664571,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15470052,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16762151,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10357225,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15555325,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16762117,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20068180,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11979337,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13625405,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19032938,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14577087,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13579145,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30555942,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19531634,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26734831,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6427663,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22953394,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17366355,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17985426,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9483240,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13667691,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16130162,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13953127,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12395503,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20694502,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20693038,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14509516,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26658515,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20722949,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22577242,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 8155212,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26714345,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9884489,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19221738,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21335530,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18804424,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21662651,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26299519,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18488080,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14628597,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14672583,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26299430,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23567139,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14238617,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18175644,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20066618,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26320745,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11982809,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18691451,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30645037,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12842992,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16074332,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15393610,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13483452,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25542554,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17471951,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12608879,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15130234,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27863821,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20651128,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15480701,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19600197,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25684089,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13120395,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29643955,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21340227,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12909197,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11511409,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13853637,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20013385,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14911994,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21083313,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17215781,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20299999,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19158282,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15908222,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28032055,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30681193,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21249398,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17337596,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27504638,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15636248,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22520892,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28356734,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12359070,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24559637,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11209406,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17999215,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 5643023,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11499778,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19776115,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19160753,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15174389,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16288485,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16655000,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24409790,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30890796,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25164454,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28296180,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24551895,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13050156,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12905026,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26208890,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13139811,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27601393,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9210258,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30604627,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25593377,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13119035,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20790328,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16276953,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28281588,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21364243,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12043329,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16267078,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24882102,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30974177,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7897875,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30975379,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23717678,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25489217,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26877513,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20400946,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7976163,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13402549,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24728629,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15945899,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12445815,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29842574,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23736303,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6832683,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18005268,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12443075,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9718053,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6803354,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29717553,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17098413,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14206374,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18831230,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13371268,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27180792,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16987101,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19099090,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25343798,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15974567,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20442080,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30310972,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30933567,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29749080,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29951345,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24509518,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30740029,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14832554,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15748208,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23268213,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21039945,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7639256,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27886853,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27257040,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19749925,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16833544,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24909543,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15282838,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25883035,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17178173,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25128175,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26266339,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18572144,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18382063,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17005312,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20085603,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13902231,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9796511,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30070262,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19442333,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9733659,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22457504,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17154442,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14227706,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24306100,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17841035,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28039409,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15556253,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15917648,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14796645,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28428360,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17834752,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14117881,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14748809,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29891604,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30940372,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28122673,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20862182,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18742997,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23765442,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12326565,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18397803,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20855010,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15017765,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10973465,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19747507,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17675057,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18482154,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15974880,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23757476,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15974119,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24438665,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24719318,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17847370,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12740314,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14841482,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20904036,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17419756,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27740538,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18401895,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18940352,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20324460,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16931706,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26243851,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11232487,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19584266,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26897794,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16546672,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19116471,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17653030,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11009688,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13092811,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15292748,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19716732,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11444827,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10219637,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17022240,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10879106,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13074450,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20807052,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26762896,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15050906,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9902275,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23900372,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20547492,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22574547,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17871488,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13766349,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11421881,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13766244,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24740211,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16485261,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16063933,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17786899,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26548716,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24948334,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11421692,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18126695,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19316101,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31196043,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14102337,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 8288968,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25387048,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22631617,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17487142,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20063893,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29651611,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30507735,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7908368,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24530007,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20793054,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9977639,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29992820,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19740843,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27796563,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11198325,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11932961,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30225895,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24177899,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7997634,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6235231,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28458361,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27343743,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27107761,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6472889,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20559980,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24182631,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6245397,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23693878,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16430183,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10503876,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27798635,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26327081,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20007591,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12113929,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13224303,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24224151,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 5973322,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16577408,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9026992,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13873595,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30519943,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30444943,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27770202,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6173322,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 5652457,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12784356,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19224951,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31593319,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28338435,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11338136,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17927955,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27600131,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17907823,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21289751,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12625367,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19242658,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19738613,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30507719,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30541591,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17402312,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 5962746,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16218500,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15932183,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24886553,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26921839,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15713306,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30719066,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30482003,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30142054,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27007274,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24221009,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17147106,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10275366,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6968522,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16599544,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 32088761,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30926191,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25579230,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28052760,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15160850,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21640034,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14559624,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29780337,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6811388,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20032081,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14972702,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20822730,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26631860,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18914650,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30165955,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11406007,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27770752,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12297629,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17587476,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19737855,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27686008,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27686190,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14991357,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20996020,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18002884,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27788569,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31785315,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19203660,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27007511,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29631412,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28448829,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31078378,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6088089,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24219216,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30520422,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24440164,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28331674,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26895423,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30991123,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16413310,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28312147,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20754895,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 6892869,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16218341,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16820350,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9527661,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26210163,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29965370,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30693432,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25704884,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23944801,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28326542,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30805168,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31179253,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31448532,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31024734,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28309242,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25029271,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24592817,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30210432,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16462014,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30430476,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25049986,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12773442,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18748108,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23435780,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27501908,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24014692,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28439932,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28054031,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16776103,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13235038,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14624324,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15257274,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25716519,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30647787,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30821702,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23411083,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20498547,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18436580,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29947099,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31489821,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18746421,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7147888,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14999803,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19524476,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26581760,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28529249,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18956348,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21484825,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22222983,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25335403,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7099396,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16217496,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29872056,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25340213,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27477790,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16993163,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11350183,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14069024,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31313828,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9448765,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 10739395,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20513815,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19108885,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16615794,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7174457,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14380667,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16828725,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 27754360,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19295728,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15657186,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18764569,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31747348,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30172384,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 8845204,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17066210,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 8836257,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18783490,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12109733,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14162739,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30657003,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17994635,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29603454,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 30197897,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22009000,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26540017,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28577138,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7447110,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9602182,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 12266671,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 11546603,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19053080,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19171021,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14540861,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14590100,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7367207,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14159233,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19164553,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 21461151,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 25390403,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 14663541,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7382003,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19827805,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17507423,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16110802,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24771802,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13500944,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15506074,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 31978385,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17767882,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 19551703,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20319087,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22315059,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 28381105,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 24159044,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 29847715,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16414594,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7302267,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17196712,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15599799,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 20188975,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 15731647,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 16277254,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 17348132,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 7462319,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18690389,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 9849241,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 26540152,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 22091765,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 13484620,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 18186879,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	},
	{
		cedula: 23579207,
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id
	}
]

module.exports = {
	updateEmployeeUnidadp1
}
