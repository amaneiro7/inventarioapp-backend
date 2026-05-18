const { unidadCompleteUpdate } = require('./unindadActualDuplicate')
const { cargosData, cargoOnlyNames } = require('../employee/cargo/cargos')

const updateEmployeeUnidad = [
	{
		cedula: 20630674,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 27374781,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 11278597,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 4461875,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 16049924,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 10485354,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 10480085,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 14990458,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 12043831,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 7683191,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 17370425,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 19894160,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 6376982,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 18510614,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 11860279,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200305)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 9738923,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200305)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 4815160,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 6057742,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MESONERO'])[0].id
	},
	{
		cedula: 5973879,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 13712392,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 10819299,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
	},
	{
		cedula: 17125397,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 28324137,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 11942350,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19417743,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 5228879,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 31477724,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 13285726,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHEF'])[0].id
	},
	{
		cedula: 18140290,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 14746065,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10401340,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR INTERNO'])[0].id
	},
	{
		cedula: 6113940,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10306)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 26956843,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10306)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		cedula: 28101063,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10306)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 9463983,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 16458318,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 24255190,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		cedula: 21165821,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		cedula: 10441987,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20283688,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		cedula: 27197958,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		cedula: 20050495,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 27713047,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 31785781,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		cedula: 31961229,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id
	},
	{
		cedula: 14130034,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13886574,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 6869767,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 22087762,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 16563149,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 21467197,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id
	},
	{
		cedula: 10634336,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 13304312,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 14774052,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 25409594,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id
	},
	{
		cedula: 10217370,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 13311444,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10580360,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 21134971,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 27475042,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 10995485,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 27034096,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13432536,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19372167,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10866055,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 11970324,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 21490220,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10608)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 5565496,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10609)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 21070163,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10609)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 4520912,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10610)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 24288663,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10610)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6862425,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10611)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 22017999,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10611)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12692060,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 5139486,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DEFENSOR DEL CLIENTE'])[0].id
	},
	{
		cedula: 25517132,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 24900493,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6401836,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 30692769,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27960607,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO JUNIOR'])[0].id
	},
	{
		cedula: 18466303,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 24311933,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 28350191,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 18942267,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 19087068,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 14034696,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10803)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 28671087,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10803002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20442877,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 11309069,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 19312143,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 26169176,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 25011861,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 11208846,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 26416366,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 10870646,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 31063296,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 17962482,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 25182285,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 24251660,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 25639723,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 14286171,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO EXTERNO'])[0].id
	},
	{
		cedula: 13526806,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 12417156,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 30063894,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 24731743,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 24727815,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 10796752,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 24592259,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 7238647,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6928650,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 13529411,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 11228369,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 11030046,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6340098,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 9415631,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 13944750,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 16342489,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 26252325,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 9682972,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 26747178,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		cedula: 13885878,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 10377748,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 20027918,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 18329167,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6563110,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 17691740,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 13400179,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15420414,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 12230986,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TESORERO'])[0].id
	},
	{
		cedula: 29741593,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0].id
	},
	{
		cedula: 26255659,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 13511051,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 27488919,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		cedula: 25771313,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 24998686,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0].id
	},
	{
		cedula: 20678782,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6699909,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 11899116,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 11506339,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 19220097,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 8858399,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 19999391,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 20051588,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13583618,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 30909760,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16331786,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 24272052,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 26410008,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15525785,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 24726506,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26175938,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27722661,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25296991,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 22484966,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25342286,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 30412187,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 15844923,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6830910,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10604811,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12695934,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25325453,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23280280,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 30934320,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13112781,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 11130823,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15516032,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27488807,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19693447,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 10533537,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17160539,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6323399,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6049772,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 25369653,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14214458,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 6920514,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20616068,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 16461656,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 31170299,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28052577,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17966388,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 11070807,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 24664189,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 9236516,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12501707,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15327620,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17868055,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13158049,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6044017,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6099103,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26477123,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 23391745,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11641044,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12502537,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300402001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 5881265,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 9412800,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6241774,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 11030769,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17148645,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16224494,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 5448125,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 16900469,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13300624,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 18823757,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27260471,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 8282497,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 19711375,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26528208,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6749692,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 11557818,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27374815,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14445995,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17671235,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 10498177,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29745240,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6816463,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 11859299,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17564957,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18121910,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10870022,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15987875,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6075206,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 208)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 6210910,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 14892805,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19734139,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 5580518,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 16671376,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807016)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 6860590,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807017)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 13458329,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807017)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 17599724,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807018)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 15215492,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807018)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 21357893,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807018)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 13245279,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807019)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 26977144,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807019)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 6844510,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 12391944,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 22502841,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 18388698,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 22492882,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 13087479,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 24210443,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 14199407,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 25303341,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 15548935,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 26466914,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 17440693,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 21413896,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 9485441,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 13886283,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 24724735,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 10629364,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 20994610,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 13287902,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 31346084,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 11228140,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 11413982,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 16952153,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 16343917,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 10446961,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 25501946,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 15532331,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 9889251,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 14726517,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 12633634,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 9765517,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 8698778,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800106001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 17150246,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800106002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id
	},
	{
		cedula: 8236655,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 18551668,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800107001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 15200394,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id
	},
	{
		cedula: 31160208,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 19084387,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 18329725,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 18492064,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 21535273,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 15377151,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 27309550,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 27796493,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 16217301,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12095956,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800201002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 17488639,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800201003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 20174202,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800201004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 11359596,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 19919337,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 11935424,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800204001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 11787572,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 4380986,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 20093754,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 26454193,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id
	},
	{
		cedula: 29661739,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 26574520,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id
	},
	{
		cedula: 23949177,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 26078552,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 30175522,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 27333456,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 19947192,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 19245673,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 20443378,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 27259251,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 20649079,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 13829673,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 12697273,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 13574774,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 24376022,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 28497634,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 15287539,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 15744335,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28470554,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 12410144,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 12763248,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 19821525,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 20593882,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 14495382,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 26386277,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6340095,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id
	},
	{
		cedula: 22047158,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19354134,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30513613,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13627464,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16015376,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 15889314,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 25719458,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 26456111,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 17232779,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 25988905,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27997765,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 12121490,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICINISTA'])[0].id
	},
	{
		cedula: 12810134,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19086350,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26210076,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26725074,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18714139,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 15586762,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19201227,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9702620,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 17088732,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 20662570,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17604295,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 18833716,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 23893955,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27089322,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14823281,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 26826740,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19464346,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800607)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30154349,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800607)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 31024925,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800607)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 25800608,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800608)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 24342056,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23617826,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28302551,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 30841954,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6322264,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24933750,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30227421,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17119396,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 7774837,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13244882,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23457065,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13757444,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 5059942,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9725884,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 5283076,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12834620,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 20880089,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10166263,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10913735,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 8782536,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12341706,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9675365,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10321624,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13473925,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 12078628,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 7063855,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO INTERNO'])[0].id
	},
	{
		cedula: 18637393,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10861386,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 12472814,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6568688,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16532504,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 7413159,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14633819,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20922)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 10296374,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20922)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 4627252,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20922001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 12377406,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 14099388,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 8340572,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 9278692,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 14859595,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 9411296,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 13290802,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 30907897,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 14851673,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 20712827,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 9880251,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 7683637,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id
	},
	{
		cedula: 25212568,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6203853,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19391230,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 20841788,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 9964060,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20926)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 13715715,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20926)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 9681406,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 15844493,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 13846539,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27730580,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28136731,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 7759533,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19459882,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19837443,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 11906535,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 16479928,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 20593306,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27279970,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 210)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 13802955,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 23636721,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21007001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13510146,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM SENIOR'])[0].id
	},
	{
		cedula: 21718326,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 26881499,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 30104045,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 23696021,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 28540503,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 29512201,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 24213716,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11552968,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 23617342,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 29920343,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id
	},
	{
		cedula: 15207373,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21007006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 24216043,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12111324,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 14061433,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 16600831,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10110301,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 25367898,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 25205596,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 26012539,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 20754695,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 15260220,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 13932976,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id
	},
	{
		cedula: 27911326,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19178432,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6092311,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 13127584,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 7926468,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13887297,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 10919627,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010009)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 22772445,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 5297489,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 9194609,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15466534,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16877769,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26053784,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 18427476,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23445522,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9741132,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17670882,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16150955,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14446822,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 18918300,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000703)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26639758,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000703)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15719543,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000703)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21751922,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000703)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 18092763,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26271536,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14728214,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 16796542,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20870087,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 17976861,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 26440921,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 21346493,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19023086,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 23630624,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21467133,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 18751590,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 24895478,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 21806608,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 28346601,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id
	},
	{
		cedula: 9766880,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000806)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11201566,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000806)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 13945277,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10275579,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15986224,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12099965,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23638350,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14427168,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9957498,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 18496241,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15759272,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24893597,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19907049,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20944878,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26170589,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14037516,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 26868223,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 4568285,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 7920230,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 12196555,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 5073560,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 4810546,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 4353997,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 5538972,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11041854,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 7305026,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 4681929,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13557634,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 24896528,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24900140,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16030308,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 5335023,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 5001046,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6265115,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 8752631,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 4585475,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6364032,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11671762,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 18986553,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17074529,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9419954,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 11393846,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 81090752,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11950950,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12098173,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 15386589,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12291802,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10598944,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6864506,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6225648,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 16904000,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19209242,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16648966,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6451508,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11354991,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14799155,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20630507,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18611989,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 5425292,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 7812532,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19679653,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18494849,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 18429407,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18647881,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27284907,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12693749,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6792685,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6508411,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 4018017,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 14525843,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 7833564,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 20656740,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25690041,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18005171,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 6248960,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12877274,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13930475,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20377156,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 8968102,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12695932,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17634246,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20947411,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13705555,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20985316,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 24736601,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14427931,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 21016826,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 5528485,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13208386,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10450687,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 17184722,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11313776,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23000760,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 21640027,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 18467596,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 25533330,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27038845,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12377018,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16113363,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 30071320,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16413780,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20220126,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 24757842,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27615745,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 22496232,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 14043861,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23925250,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11947573,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 14876302,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12870086,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10405259,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17232103,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15603719,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6505913,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25788354,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16458481,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 4173544,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 17974825,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 10798772,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17077672,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23628738,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6131701,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10349540,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11166806,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 27200045,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19932322,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6558514,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29698545,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 7956630,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11733546,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23662057,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19289199,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19999374,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 5601188,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 10194698,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11197505,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9785572,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407009)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15928984,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 14453031,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14646308,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14909643,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23943805,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19289173,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9956907,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 14300592,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 9489120,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 18894777,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id
	},
	{
		cedula: 6521734,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6130075,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 6214128,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GESTOR DE COBRANZAS'])[0].id
	},
	{
		cedula: 21116581,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 10800689,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 31425979,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 216)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 12765159,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21609)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 14934002,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21609002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13160432,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17977967,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19710598,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24435491,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17088741,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 13297237,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18201525,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11991020,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21609003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6205768,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27713265,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15021704,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12293423,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6948757,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 5528702,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 22783595,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9412903,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 9010700,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 15810628,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 22165912,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17567736,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 24952766,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 9410166,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13943073,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 30990510,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6512994,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 5607149,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6304026,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 21438227,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 5009761,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 23749161,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 23739285,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11196846,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12761468,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18111100,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21367209,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12358860,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6123866,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21618)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 9957257,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21618001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13545848,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12688610,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 11673141,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15725666,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 11166446,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6368285,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6289251,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13070792,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 26454843,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 15723738,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10812845,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14471627,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6895250,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 9528520,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9289079,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12500968,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21618002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6261933,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10526919,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10867908,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6901042,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 12174564,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10823828,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10542689,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13296956,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 10515140,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 16458254,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17736329,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23749322,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27435492,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17719021,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 18942670,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19204222,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11161174,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 9418338,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 14789737,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14050137,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6485524,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 7957107,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12573134,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 22285407,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 11986900,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 7084688,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 10234463,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19321908,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 28248756,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 15899710,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 13525690,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 23448153,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23450875,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 20579058,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30973818,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 21361021,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id
	},
	{
		cedula: 10488138,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26063838,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12055819,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id
	},
	{
		cedula: 14623354,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 18394952,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21357735,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27206638,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24733175,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26617498,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 25540980,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 13247615,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 16904954,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 16282251,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 20613051,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 24234338,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 24883411,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27756525,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27713090,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16113438,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29922432,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 31004874,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19844204,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 19938685,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 16731467,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27945918,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14415621,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26112567,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18134922,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 11197346,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27272178,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 5221311,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 6444518,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 22035452,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14680911,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29583410,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12802809,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 7890182,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13715337,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 13992455,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13244969,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17412167,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13006547,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15411589,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13406085,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 4215525,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 6168790,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 4685497,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 12112025,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 7943977,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 15834209,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id
	},
	{
		cedula: 6251081,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 11991937,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21471329,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24215242,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19734505,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 11928650,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21622)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 16027955,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21622001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 17962822,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18994738,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10754132,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13322283,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12761079,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 15440899,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21622002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 21013708,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 15373844,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		cedula: 17773111,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20211169,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		cedula: 18809646,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		cedula: 9415871,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6835855,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11945840,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		cedula: 14370751,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 21166240,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 24361918,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id
	},
	{
		cedula: 8238450,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 4166670,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27359312,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27713483,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 10808435,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13088070,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 5961089,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6271863,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6905254,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18818210,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25284911,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14917835,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 11029492,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23635651,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15821726,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 20825564,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11691090,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 14774279,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26970595,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 12683119,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 13969341,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 4818446,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21624)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 10801279,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21624001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20775859,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21624001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ARQUITECTO'])[0].id
	},
	{
		cedula: 11292459,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18284769,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id
	},
	{
		cedula: 20543608,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12832870,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 7954112,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id
	},
	{
		cedula: 17977367,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 31255813,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 228)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 11305331,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 11488897,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 10520287,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26956358,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12375959,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280100103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 21415772,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280100103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 30224862,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280100103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 10480193,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 23641754,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16878585,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 16525778,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13086051,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 15910025,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 27615679,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17706627,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15613672,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 13021106,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 8502035,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 20660275,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17414875,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 26775889,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19836703,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 8925166,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200403)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 25871181,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200403)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 15099160,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200404)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		cedula: 15698216,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200404)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 17719935,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 16554656,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 19465089,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19163151,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16554151,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16332768,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 27598606,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25870517,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15586167,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22804)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 16462200,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22804001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 26422135,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 25205032,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 28494649,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31341295,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30709242,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 19201478,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 33288289,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 21375352,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 30245430,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 29966955,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31309024,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31936278,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31092656,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 15701475,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 27006330,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29605900,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 29973314,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31793928,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 32011241,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31193589,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30908394,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31708141,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 23709418,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19453067,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 29596103,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 29919822,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 26268220,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30098306,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30030095,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 24698797,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 21535631,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27200036,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 25203341,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 31178314,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 18441255,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 25211635,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30328250,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 30166977,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 21014763,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 30552440,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 22031033,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27309293,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		cedula: 29875677,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id
	},
	{
		cedula: 6702830,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 25029486,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23944318,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27753201,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24774289,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27731944,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 29625016,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 23198743,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 29676455,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20593346,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 16562014,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 4440089,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 19581732,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 28413972,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 22764224,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 26915622,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27908046,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14096140,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 12046058,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 6389368,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21102682,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 24087579,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6175059,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15791050,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19988407,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15938292,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16572947,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10805032,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10413213,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 23943258,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11550830,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 5892970,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 14019108,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 20826321,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 9146969,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12640540,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23628739,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id
	},
	{
		cedula: 11970289,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 231)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 5422699,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 13007054,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 7943572,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 9414795,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20245904,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 3885308,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6349728,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
	},
	{
		cedula: 6017137,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 14130519,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12166393,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
	},
	{
		cedula: 14985700,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 12640829,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id
	},
	{
		cedula: 5541972,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 7607090,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 12379424,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 7996536,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 8556100,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 9335244,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 8098770,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201208)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 15671215,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201208)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13311426,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 10481043,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12687172,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 6962145,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29829807,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 13067653,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 13465577,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 15431923,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 11072088,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 11672678,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 13288701,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 2644343,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 9934486,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 21103661,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 18753218,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 14494255,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 4297048,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 10470993,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 12085704,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 11672951,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 19464223,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 17300995,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 25624711,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 17427031,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 14021527,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 12381033,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 12379847,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 14006681,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 30101952,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 18918197,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 12216609,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 17990741,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 10616550,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 11963412,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 10577918,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 12315936,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 6853445,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 11206291,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 24644360,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id
	},
	{
		cedula: 19018117,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6854201,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23943113,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 11733494,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18186674,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21239547,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15287212,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 25792078,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10354648,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6907530,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 21231366,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 24174459,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11740316,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 28327623,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14117514,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 15854112,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 29529567,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19767095,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 14136184,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18920806,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19936823,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20442265,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18663575,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20438208,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17180042,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16202145,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 6011841,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 21623060,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 21233179,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 26574627,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 23657217,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28481412,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 23943719,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 27879834,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30491056,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29828367,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29983274,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28512420,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28481223,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30111721,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29969767,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 26819676,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29536657,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30719326,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29595622,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28494194,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30308641,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29736647,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28288554,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id
	},
	{
		cedula: 30030655,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29738754,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27318805,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 18713219,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 4906375,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 20489896,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27606735,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17778173,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18530020,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16187315,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 9739779,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23554119,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 7947540,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 10781465,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 12382591,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17005700,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 18188454,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6196106,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 14658438,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20578424,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 21596638,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18904832,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 20155234,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 20147042,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16814936,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 8503980,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 11990037,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 17976743,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25947461,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25871236,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 9786430,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13564463,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 25561583,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18382302,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18538410,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 26281377,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6848875,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 31415719,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 234)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 15581058,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 6249163,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 18809624,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 22965134,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27107317,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30719895,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 16413045,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 11035484,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16083770,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20780531,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27006393,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 28006127,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 11607169,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 11862566,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29523871,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 20579116,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 6114519,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 20871421,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19998673,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 25873415,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18221531,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 21071353,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 28338098,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 22356103,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 17906311,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 26104460,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 3751847,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 13463523,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 13225432,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100901)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 11893817,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100901)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23198653,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100901)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 15931478,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id
	},
	{
		cedula: 6366599,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id
	},
	{
		cedula: 13223947,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 12804929,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id
	},
	{
		cedula: 26921703,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id
	},
	{
		cedula: 17303542,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id
	},
	{
		cedula: 10421914,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id
	},
	{
		cedula: 20427275,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id
	},
	{
		cedula: 16863921,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 13087567,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 5299117,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 13526637,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26217150,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 23695788,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 6915218,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 10116314,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 5580240,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 11550319,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 15368132,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11943295,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6747141,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 9689561,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 25774122,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 31000100,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 30112273,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id
	},
	{
		cedula: 19514223,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 11664582,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 13866852,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 9951892,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 27053193,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16434465,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 6060400,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20107835,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23405)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 23527218,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23405)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 28158829,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23405)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 8228726,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 12992157,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 19503006,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 19711833,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 23947634,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id
	},
	{
		cedula: 16333181,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 12382457,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 23107099,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 12172791,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 14755996,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 10380647,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 17489944,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 19733079,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 6971914,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id
	},
	{
		cedula: 12852499,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 18912552,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id
	},
	{
		cedula: 12909023,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id
	},
	{
		cedula: 31416231,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 236)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0].id
	},
	{
		cedula: 10508329,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 21281535,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 29661186,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 21718079,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id
	},
	{
		cedula: 13538258,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20872121,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 27254026,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 18528430,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24958164,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29832993,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 31848481,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id
	},
	{
		cedula: 18277502,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 28319013,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 29922232,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28461923,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29850967,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 23707757,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 28301903,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29619951,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27784720,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 27488221,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 24478091,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 21438190,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 19228650,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25444089,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 26908225,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 25306431,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27283774,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27805932,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 29784063,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	},
	{
		cedula: 12880124,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 18487795,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 26152949,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 25570514,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 82287809,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 24760895,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16370787,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 16224665,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id
	},
	{
		cedula: 20154439,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 20674711,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 25504564,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 27752049,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 19251530,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17907878,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id
	},
	{
		cedula: 26654564,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 18832297,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id
	},
	{
		cedula: 17589107,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id
	},
	{
		cedula: 29697578,
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id
	}
]

/**
 * Función para identificar qué empleados no lograron encontrar su unidad o cargo
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.unidad_id || !u.cargo_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} registros incompletos en updateEmployeeUnidad:`)
		units.forEach((o, index) => {
			if (!o.unidad_id || !o.cargo_id) {
				console.log(
					`  - Registro #${index + 1} (Cedula: ${o.cedula}): ${!o.unidad_id ? '[Unidad no encontrada]' : ''} ${!o.cargo_id ? '[Cargo no encontrado]' : ''}`
				)
			}
		})
	} else {
		console.log('\n✅ Todos los empleados tienen unidad_id y cargo_id asignados.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(updateEmployeeUnidad)
}

module.exports = { updateEmployeeUnidad }
