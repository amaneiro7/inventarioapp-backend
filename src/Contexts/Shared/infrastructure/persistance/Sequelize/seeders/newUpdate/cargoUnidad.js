const { cargosData, cargoOnlyNames } = require('../employee/cargo/cargos')
const { unidadCompleteUpdate } = require('./unindadActualDuplicate')

const cargoUnidadData = [
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10102004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200305)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 1010200305)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MESONERO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHEF'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10103001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR INTERNO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10306)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10306)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10306)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10307)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10308)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10309)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10310)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10608)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10609)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10609)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10610)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10610)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10611)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10611)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DEFENSOR DEL CLIENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10801002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10803)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 10803002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20411002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO EXTERNO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20412007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2041200702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TESORERO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20504006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20510002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051000202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20511004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20512006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300101003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300301002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300402001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20513006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2051300605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20514002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 208)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807016)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807017)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807017)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807018)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807018)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807019)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20807019)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20816004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20819003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20824003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20922)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20922)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20926)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20926)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20918008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20919002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20920004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20921002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20922001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20925002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20927005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICINISTA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800603)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800604)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800605)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800606)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800607)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800607)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800607)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO INTERNO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800608)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2092200204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800106001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800106002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800107001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800110002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800201002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800201003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800201004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2091800204001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 210)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21007001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21007006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700601002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2100700602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010009)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000501003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000703)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000703)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000701003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000806)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101000905)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21010012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600304)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21016008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101600801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21017006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2101700602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21021008)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21022003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2102200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2140600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21406007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407009)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407010)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21407012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GESTOR DE COBRANZAS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21412002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 216)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21609)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21609002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21609003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2160900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100102003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21611011)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21618)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21618001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21618002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161800206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900203)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21619003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2161900302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000101002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162000102002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21620002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21621004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21622)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21622001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21622002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21623003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162300302002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21624)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21624001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 21624001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ARQUITECTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2162400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 228)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280100103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280100103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22801007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200403)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200403)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200404)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280200404)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22802006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22803004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22804)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22804001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400105)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400107)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280400108)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500209)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22805006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280500602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 22806003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2280600302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 231)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23102012)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201204)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201205)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201206)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201207)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201208)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310201208)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23103004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310300402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23104007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400701)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310400702)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106005)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2310600602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23106007)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 234)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100401)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23401006)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100901)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100901)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100901)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340100902)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2340200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23402004)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23403003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23404002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23405)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23405)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23501002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23502)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23503002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23504001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 236)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23601)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200101)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200102)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200103)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200201)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200202)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 23602003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200301)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200302)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 2360200303)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0]?.id
	},
	//
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20923003)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924001)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.codigoInterno === 20924002)?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0]?.id
	},
	//
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR'])[0]?.id
	},
	{
		unidad_id: unidadCompleteUpdate.find(d => d.name.toLowerCase() === 'V.P.E. DE BANCA COMERCIAL'.toLowerCase())
			?.id,
		cargo_id: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0]?.id
	}
]

/**
 * Función para identificar qué mapeos no lograron encontrar su ID de unidad o cargo
 */
function checkOrphanUnits(units) {
	const orphans = units.filter(u => !u.unidad_id || !u.cargo_id)
	if (orphans.length > 0) {
		console.error(`\n❌ Se encontraron ${orphans.length} mapeos incompletos en cargoUnidadData:`)
		units.forEach((o, index) => {
			if (!o.unidad_id || !o.cargo_id) {
				console.log(
					`  - Registro #${index + 1}: ${!o.unidad_id ? '[Unidad no encontrada]' : ''} ${!o.cargo_id ? '[Cargo no encontrado]' : ''}`
				)
			}
		})
	} else {
		console.log('\n✅ Todos los mapeos de Cargo-Unidad tienen IDs asignados correctamente.')
	}
	return orphans
}

// Ejecutar validación al cargar el módulo
if (require.main === module || process.env.NODE_ENV === 'development') {
	checkOrphanUnits(cargoUnidadData)
}

module.exports = { cargoUnidadData }
