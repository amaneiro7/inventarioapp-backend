const { VPData, VPOnlyNames } = require('./area/vicepresidencia')
const { VPEData, VPEOnlyNames } = require('./area/vicepresidenciaEjecutiva')
const { departamentoData, departamentoOnlyNames } = require('./area/departamento')
const { cargoOnlyNames, cargosData } = require('./cargo/cargos')

function capitalCadena(cadena) {
	return cadena
		.toLowerCase()
		.split('. ')
		.map(text =>
			text
				.split(' ')
				.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
				.join(' ')
		)
		.join('. ')
}

const restoCuartaParte = [
	{
		userName: 'aperez'.toLowerCase(),
		name: capitalCadena('ASTRID JOPSANA'),
		lastName: capitalCadena('PEREZ BERMUDEZ'),
		type: 'regular',
		email: 'aperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12524,
		nationality: 'V'.toUpperCase(),
		cedula: 24311933,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrojas'.toLowerCase(),
		name: capitalCadena('YULEYVIC PASTORA'),
		lastName: capitalCadena('ROJAS VERA'),
		type: 'regular',
		email: 'yrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12532,
		nationality: 'V'.toUpperCase(),
		cedula: 31107438,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lelopez'.toLowerCase(),
		name: capitalCadena('LEXAHIRA COROMOTO'),
		lastName: capitalCadena('LOPEZ PEREZ'),
		type: 'regular',
		email: 'lelopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16290,
		nationality: 'V'.toUpperCase(),
		cedula: 15577684,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmarcano'.toLowerCase(),
		name: capitalCadena('MARIA JOSE'),
		lastName: capitalCadena('MARCANO REYES'),
		type: 'regular',
		email: 'mmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16345,
		nationality: 'V'.toUpperCase(),
		cedula: 29987460,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmata'.toLowerCase(),
		name: capitalCadena('CRISBEL ALEJANDRA'),
		lastName: capitalCadena('MATA LOPEZ'),
		type: 'regular',
		email: 'cmata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16361,
		nationality: 'V'.toUpperCase(),
		cedula: 28350191,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmoreno'.toLowerCase(),
		name: capitalCadena('CONSUELO DEL CARMEN'),
		lastName: capitalCadena('MORENO ROSALES'),
		type: 'regular',
		email: 'cmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 125,
		nationality: 'V'.toUpperCase(),
		cedula: 9236516,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pbovy'.toLowerCase(),
		name: capitalCadena('PETULA FRANCISCA'),
		lastName: capitalCadena('BOVY BOLL'),
		type: 'regular',
		email: 'pbovy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 283,
		nationality: 'V'.toUpperCase(),
		cedula: 11928650,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmagallanes'.toLowerCase(),
		name: capitalCadena('MILAGROS JOSEFINA'),
		lastName: capitalCadena('MAGALLANES VILLARREAL'),
		type: 'regular',
		email: 'mmagallanes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 328,
		nationality: 'V'.toUpperCase(),
		cedula: 8858399,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dquelle'.toLowerCase(),
		name: capitalCadena('DEISY KARINA'),
		lastName: capitalCadena('QUELLE HEREDIA'),
		type: 'regular',
		email: 'dquelle@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 496,
		nationality: 'V'.toUpperCase(),
		cedula: 13511051,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccolmenares'.toLowerCase(),
		name: capitalCadena('CARLOS RAMON'),
		lastName: capitalCadena('COLMENARES BARROETA'),
		type: 'regular',
		email: 'ccolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 533,
		nationality: 'V'.toUpperCase(),
		cedula: 12502537,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iguerra'.toLowerCase(),
		name: capitalCadena('ISABEL TERESA'),
		lastName: capitalCadena('GUERRA SERRANO'),
		type: 'regular',
		email: 'iguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 610,
		nationality: 'V'.toUpperCase(),
		cedula: 4246187,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'loliveros'.toLowerCase(),
		name: capitalCadena('LEIDA ROSALIA'),
		lastName: capitalCadena('OLIVEROS RONDON'),
		type: 'regular',
		email: 'loliveros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 680,
		nationality: 'V'.toUpperCase(),
		cedula: 5961089,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfernandez'.toLowerCase(),
		name: capitalCadena('MARIA DEL CARMEN'),
		lastName: capitalCadena('FERNANDEZ MENDEZ'),
		type: 'regular',
		email: 'mfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 706,
		nationality: 'V'.toUpperCase(),
		cedula: 10377748,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'izambrano'.toLowerCase(),
		name: capitalCadena('ILCE JOSEFINA'),
		lastName: capitalCadena('ZAMBRANO '),
		type: 'regular',
		email: 'izambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 798,
		nationality: 'V'.toUpperCase(),
		cedula: 5448125,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pchiesa'.toLowerCase(),
		name: capitalCadena('PEDRO ALBERTO'),
		lastName: capitalCadena('CHIESA VALLENILLA'),
		type: 'regular',
		email: 'pchiesa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 804,
		nationality: 'V'.toUpperCase(),
		cedula: 8282497,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmeza'.toLowerCase(),
		name: capitalCadena('JACQUELINE COROMOTO'),
		lastName: capitalCadena('MEZA JUSTINIANO'),
		type: 'regular',
		email: 'jmeza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 845,
		nationality: 'V'.toUpperCase(),
		cedula: 6251081,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpacheco'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('PACHECO SALAZAR'),
		type: 'regular',
		email: 'jpacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1028,
		nationality: 'V'.toUpperCase(),
		cedula: 4166670,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vtoledo'.toLowerCase(),
		name: capitalCadena('VILMA CECILIA'),
		lastName: capitalCadena('TOLEDO MONTIEL'),
		type: 'regular',
		email: 'vtoledo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1169,
		nationality: 'V'.toUpperCase(),
		cedula: 9412800,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'riramirez'.toLowerCase(),
		name: capitalCadena('RITA XIOMARA'),
		lastName: capitalCadena('RAMIREZ SEPULVEDA'),
		type: 'regular',
		email: 'riramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1427,
		nationality: 'V'.toUpperCase(),
		cedula: 6044017,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abarrios'.toLowerCase(),
		name: capitalCadena('ANA DINORAH'),
		lastName: capitalCadena('BARRIOS RANGEL'),
		type: 'regular',
		email: 'abarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1855,
		nationality: 'V'.toUpperCase(),
		cedula: 11991937,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmonsalve'.toLowerCase(),
		name: capitalCadena('LUZ YANEY'),
		lastName: capitalCadena('MONSALVE ROSALES'),
		type: 'regular',
		email: 'lmonsalve@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1867,
		nationality: 'V'.toUpperCase(),
		cedula: 11506339,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTABILIDAD FIDUCIARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gemendoza'.toLowerCase(),
		name: capitalCadena('GENESIS CAROLINA'),
		lastName: capitalCadena('MENDOZA GRATEROL'),
		type: 'regular',
		email: 'gemendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2467,
		nationality: 'V'.toUpperCase(),
		cedula: 19711375,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbrowh'.toLowerCase(),
		name: capitalCadena('JASMIN '),
		lastName: capitalCadena('BROWH CONTRERAS'),
		type: 'regular',
		email: 'jbrowh@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2470,
		nationality: 'V'.toUpperCase(),
		cedula: 16342489,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'macampos'.toLowerCase(),
		name: capitalCadena('MANUEL JOSE'),
		lastName: capitalCadena('CAMPOS MUJICA'),
		type: 'regular',
		email: 'macampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2479,
		nationality: 'V'.toUpperCase(),
		cedula: 21013708,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mifernandez'.toLowerCase(),
		name: capitalCadena('MILDRED NEREIDA'),
		lastName: capitalCadena('FERNANDEZ BELLO'),
		type: 'regular',
		email: 'mifernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2665,
		nationality: 'V'.toUpperCase(),
		cedula: 6271863,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hpineda'.toLowerCase(),
		name: capitalCadena('HENRY JESUS'),
		lastName: capitalCadena('PINEDA '),
		type: 'regular',
		email: 'hpineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2788,
		nationality: 'V'.toUpperCase(),
		cedula: 6905254,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlucena'.toLowerCase(),
		name: capitalCadena('JORMEYER IVAN'),
		lastName: capitalCadena('LUCENA RODRIGUEZ'),
		type: 'regular',
		email: 'jlucena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2974,
		nationality: 'V'.toUpperCase(),
		cedula: 17962822,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rhuerfano'.toLowerCase(),
		name: capitalCadena('ROMEL DAVID'),
		lastName: capitalCadena('HUERFANO DIAZ'),
		type: 'regular',
		email: 'rhuerfano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3999,
		nationality: 'V'.toUpperCase(),
		cedula: 11641044,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alonga'.toLowerCase(),
		name: capitalCadena('ANDERSON DAVID'),
		lastName: capitalCadena('LONGA HERNANDEZ'),
		type: 'regular',
		email: 'alonga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4424,
		nationality: 'V'.toUpperCase(),
		cedula: 15327620,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mavila'.toLowerCase(),
		name: capitalCadena('MARIANELA ISABEL'),
		lastName: capitalCadena('AVILA ALIOTTI'),
		type: 'regular',
		email: 'mavila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4690,
		nationality: 'V'.toUpperCase(),
		cedula: 6749692,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anjimenez'.toLowerCase(),
		name: capitalCadena('ANGY EMILI'),
		lastName: capitalCadena('JIMENEZ MARTINEZ'),
		type: 'regular',
		email: 'anjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6150,
		nationality: 'V'.toUpperCase(),
		cedula: 14445995,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cponce'.toLowerCase(),
		name: capitalCadena('CARLOS DAVID'),
		lastName: capitalCadena('PONCE '),
		type: 'regular',
		email: 'cponce@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6614,
		nationality: 'V'.toUpperCase(),
		cedula: 21471329,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jaramirez'.toLowerCase(),
		name: capitalCadena('JANE JOSIMAR'),
		lastName: capitalCadena('RAMIREZ FRANQUIZ'),
		type: 'regular',
		email: 'jaramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6992,
		nationality: 'V'.toUpperCase(),
		cedula: 20027918,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nbrito'.toLowerCase(),
		name: capitalCadena('NACELI JOSEFINA'),
		lastName: capitalCadena('BRITO BRITO'),
		type: 'regular',
		email: 'nbrito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7554,
		nationality: 'V'.toUpperCase(),
		cedula: 13583618,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dbelisario'.toLowerCase(),
		name: capitalCadena('DARWIN ALEXIS'),
		lastName: capitalCadena('BELISARIO ALVAREZ'),
		type: 'regular',
		email: 'dbelisario@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8398,
		nationality: 'V'.toUpperCase(),
		cedula: 19220097,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTABILIDAD FIDUCIARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ybriceno'.toLowerCase(),
		name: capitalCadena('YANELY ALEJANDRA'),
		lastName: capitalCadena('BRICEÑO HERNANDEZ'),
		type: 'regular',
		email: 'ybriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8788,
		nationality: 'V'.toUpperCase(),
		cedula: 25771313,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MERCADO MONETARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymarrero'.toLowerCase(),
		name: capitalCadena('YERARDIN ANDREINA'),
		lastName: capitalCadena('MARRERO CONTRERAS'),
		type: 'regular',
		email: 'ymarrero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8789,
		nationality: 'V'.toUpperCase(),
		cedula: 26528208,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tzorrilla'.toLowerCase(),
		name: capitalCadena('TOMAS '),
		lastName: capitalCadena('ZORRILLA VILLEGAS'),
		type: 'regular',
		email: 'tzorrilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9533,
		nationality: 'V'.toUpperCase(),
		cedula: 4215525,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hmunoz'.toLowerCase(),
		name: capitalCadena('HUGO HUMBERTO'),
		lastName: capitalCadena('MUÑOZ HERNANDEZ'),
		type: 'regular',
		email: 'hmunoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9734,
		nationality: 'V'.toUpperCase(),
		cedula: 6168790,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arivero'.toLowerCase(),
		name: capitalCadena('ALBANI ISABEL'),
		lastName: capitalCadena('RIVERO MURILLO'),
		type: 'regular',
		email: 'arivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9834,
		nationality: 'V'.toUpperCase(),
		cedula: 27359312,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fegonzalez'.toLowerCase(),
		name: capitalCadena('FERNANDA ISABEL'),
		lastName: capitalCadena('GONZALEZ LOVERA'),
		type: 'regular',
		email: 'fegonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10007,
		nationality: 'V'.toUpperCase(),
		cedula: 16224494,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmuro'.toLowerCase(),
		name: capitalCadena('KRISBEL DORIANNY'),
		lastName: capitalCadena('MURO SANCHEZ'),
		type: 'regular',
		email: 'kmuro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10126,
		nationality: 'V'.toUpperCase(),
		cedula: 29741593,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TRADER'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcordova'.toLowerCase(),
		name: capitalCadena('LUIS ALEXIS'),
		lastName: capitalCadena('CORDOVA RODRIGUEZ'),
		type: 'regular',
		email: 'lcordova@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10545,
		nationality: 'V'.toUpperCase(),
		cedula: 20616068,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nanchundia'.toLowerCase(),
		name: capitalCadena('NELLY MARIBEL'),
		lastName: capitalCadena('ANCHUNDIA ALONZO'),
		type: 'regular',
		email: 'nanchundia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10681,
		nationality: 'V'.toUpperCase(),
		cedula: 17966388,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lgil'.toLowerCase(),
		name: capitalCadena('LAURA VIVIANA'),
		lastName: capitalCadena('GIL '),
		type: 'regular',
		email: 'lgil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11396,
		nationality: 'V'.toUpperCase(),
		cedula: 19999391,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josehrodriguez'.toLowerCase(),
		name: capitalCadena('JOSE HUMBERTO'),
		lastName: capitalCadena('RODRIGUEZ RAMIREZ'),
		type: 'regular',
		email: 'josehrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11647,
		nationality: 'V'.toUpperCase(),
		cedula: 11070807,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmejias'.toLowerCase(),
		name: capitalCadena('RIZZY SINAY'),
		lastName: capitalCadena('MEJIAS DIAZ'),
		type: 'regular',
		email: 'rmejias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11653,
		nationality: 'V'.toUpperCase(),
		cedula: 17671235,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jflores'.toLowerCase(),
		name: capitalCadena('JULIO CESAR'),
		lastName: capitalCadena('FLORES ORTEGA'),
		type: 'regular',
		email: 'jflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11684,
		nationality: 'V'.toUpperCase(),
		cedula: 12761079,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kapena'.toLowerCase(),
		name: capitalCadena('KARYNS YORIMACK'),
		lastName: capitalCadena('PEÑA DE ORTIZ'),
		type: 'regular',
		email: 'kapena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11719,
		nationality: 'V'.toUpperCase(),
		cedula: 12501707,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epena'.toLowerCase(),
		name: capitalCadena('ELVIS JESUS'),
		lastName: capitalCadena('PEÑA RUJANO'),
		type: 'regular',
		email: 'epena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11837,
		nationality: 'V'.toUpperCase(),
		cedula: 24664189,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kquintero'.toLowerCase(),
		name: capitalCadena('KERRY YORLAY'),
		lastName: capitalCadena('QUINTERO CAICEDO'),
		type: 'regular',
		email: 'kquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11866,
		nationality: 'V'.toUpperCase(),
		cedula: 11557818,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adrivero'.toLowerCase(),
		name: capitalCadena('ADRIANA MARIA'),
		lastName: capitalCadena('RIVERO MORIAN'),
		type: 'regular',
		email: 'adrivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11926,
		nationality: 'V'.toUpperCase(),
		cedula: 17868055,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fagustin'.toLowerCase(),
		name: capitalCadena('FELIPE ANTONIO'),
		lastName: capitalCadena('AGUSTIN MEDINA'),
		type: 'regular',
		email: 'fagustin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12021,
		nationality: 'V'.toUpperCase(),
		cedula: 18809646,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lgarcia'.toLowerCase(),
		name: capitalCadena('LUCIA '),
		lastName: capitalCadena('GARCIA CRESPO'),
		type: 'regular',
		email: 'lgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12105,
		nationality: 'V'.toUpperCase(),
		cedula: 6563110,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hcalatayud'.toLowerCase(),
		name: capitalCadena('HECTOR ALI'),
		lastName: capitalCadena('CALATAYUD YANEZ'),
		type: 'regular',
		email: 'hcalatayud@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12217,
		nationality: 'V'.toUpperCase(),
		cedula: 27488919,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gflores'.toLowerCase(),
		name: capitalCadena('GEORGE STEEVEN'),
		lastName: capitalCadena('FLORES NARANJO'),
		type: 'regular',
		email: 'gflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12328,
		nationality: 'V'.toUpperCase(),
		cedula: 27374815,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cpena'.toLowerCase(),
		name: capitalCadena('CAROLIN YUSMELI'),
		lastName: capitalCadena('PEÑA ARANGUREN'),
		type: 'regular',
		email: 'cpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12364,
		nationality: 'V'.toUpperCase(),
		cedula: 17691740,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drosales'.toLowerCase(),
		name: capitalCadena('DARIANA MARIA'),
		lastName: capitalCadena('ROSALES GARCIA'),
		type: 'regular',
		email: 'drosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12504,
		nationality: 'V'.toUpperCase(),
		cedula: 20051588,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE FIDEICOMISO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lortuno'.toLowerCase(),
		name: capitalCadena('LIRIS CLARIVEL'),
		lastName: capitalCadena('ORTUÑO DANIEL'),
		type: 'regular',
		email: 'lortuno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12521,
		nationality: 'V'.toUpperCase(),
		cedula: 10498177,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anzambrano'.toLowerCase(),
		name: capitalCadena('ANYELYN JAZMIN'),
		lastName: capitalCadena('ZAMBRANO FUENTES'),
		type: 'regular',
		email: 'anzambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12525,
		nationality: 'V'.toUpperCase(),
		cedula: 28052577,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kcastro'.toLowerCase(),
		name: capitalCadena('KARLA VALENTINA'),
		lastName: capitalCadena('CASTRO CAMACHO'),
		type: 'regular',
		email: 'kcastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12530,
		nationality: 'V'.toUpperCase(),
		cedula: 29745240,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: ''.toLowerCase(),
		name: capitalCadena('JOSE RAFAEL'),
		lastName: capitalCadena('MARCANO '),
		type: 'regular',
		email: ''.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12632,
		nationality: 'V'.toUpperCase(),
		cedula: 4685497,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'torellana'.toLowerCase(),
		name: capitalCadena('TAMAIRA JOSEFINA'),
		lastName: capitalCadena('ORELLANA PALMA'),
		type: 'regular',
		email: 'torellana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12640,
		nationality: 'V'.toUpperCase(),
		cedula: 11130823,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yruggiero'.toLowerCase(),
		name: capitalCadena('YOLANDA '),
		lastName: capitalCadena('RUGGIERO PRATO'),
		type: 'regular',
		email: 'yruggiero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12641,
		nationality: 'V'.toUpperCase(),
		cedula: 10533537,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLANIFICACIÓN FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hdelgado'.toLowerCase(),
		name: capitalCadena('HIDRA DE LOS ANGELES'),
		lastName: capitalCadena('DELGADO DORCA'),
		type: 'regular',
		email: 'hdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12703,
		nationality: 'V'.toUpperCase(),
		cedula: 17160539,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLANIFICACIÓN FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcoronel'.toLowerCase(),
		name: capitalCadena('JHOANDER '),
		lastName: capitalCadena('CORONEL MIÑONIS'),
		type: 'regular',
		email: 'jcoronel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12769,
		nationality: 'V'.toUpperCase(),
		cedula: 27713483,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'grivas'.toLowerCase(),
		name: capitalCadena('GENESIS DEL CARMEN'),
		lastName: capitalCadena('RIVAS PEREIRA'),
		type: 'regular',
		email: 'grivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12796,
		nationality: 'V'.toUpperCase(),
		cedula: 24215242,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gagonzalez'.toLowerCase(),
		name: capitalCadena('GABRIELA JOSELIN'),
		lastName: capitalCadena('GONZALEZ RUDA'),
		type: 'regular',
		email: 'gagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12797,
		nationality: 'V'.toUpperCase(),
		cedula: 16461656,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aarguelles'.toLowerCase(),
		name: capitalCadena('AINARA '),
		lastName: capitalCadena('ARGUELLES MORILLO'),
		type: 'regular',
		email: 'aarguelles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12959,
		nationality: 'V'.toUpperCase(),
		cedula: 27488807,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anbrito'.toLowerCase(),
		name: capitalCadena('ANTONIO JOSE'),
		lastName: capitalCadena('BRITO FERNANDEZ'),
		type: 'regular',
		email: 'anbrito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13019,
		nationality: 'V'.toUpperCase(),
		cedula: 12112025,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CHOFER'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zestacio'.toLowerCase(),
		name: capitalCadena('ZULIMA DEL VALLE'),
		lastName: capitalCadena('ESTACIO SILVA'),
		type: 'regular',
		email: 'zestacio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13105,
		nationality: 'V'.toUpperCase(),
		cedula: 10801279,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arosales'.toLowerCase(),
		name: capitalCadena('ALBA ADELAIDA'),
		lastName: capitalCadena('ROSALES MARQUEZ'),
		type: 'regular',
		email: 'arosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13200,
		nationality: 'V'.toUpperCase(),
		cedula: 6099103,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marigutierrez'.toLowerCase(),
		name: capitalCadena('MARIA MINERVA'),
		lastName: capitalCadena('GUTIERREZ PINEDA'),
		type: 'regular',
		email: 'marigutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13201,
		nationality: 'V'.toUpperCase(),
		cedula: 6241774,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nmendoza'.toLowerCase(),
		name: capitalCadena('NORIS ALICIA'),
		lastName: capitalCadena('MENDOZA RODRIGUEZ'),
		type: 'regular',
		email: 'nmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13354,
		nationality: 'V'.toUpperCase(),
		cedula: 11029492,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DOCUMENTACIÓN DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acarrasquero'.toLowerCase(),
		name: capitalCadena('AMELIA ROSA'),
		lastName: capitalCadena('CARRASQUERO MARCANO'),
		type: 'regular',
		email: 'acarrasquero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13571,
		nationality: 'V'.toUpperCase(),
		cedula: 11030769,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvilla'.toLowerCase(),
		name: capitalCadena('MARISELA '),
		lastName: capitalCadena('VILLA MEJIA'),
		type: 'regular',
		email: 'mvilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13618,
		nationality: 'V'.toUpperCase(),
		cedula: 13158049,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nguerrero'.toLowerCase(),
		name: capitalCadena('NANCY LOURDES'),
		lastName: capitalCadena('GUERRERO URIBE'),
		type: 'regular',
		email: 'nguerrero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13757,
		nationality: 'V'.toUpperCase(),
		cedula: 10808435,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bbompart'.toLowerCase(),
		name: capitalCadena('BEATRIZ MIROSLAVA'),
		lastName: capitalCadena('BOMPART NIÑO'),
		type: 'regular',
		email: 'bbompart@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13815,
		nationality: 'V'.toUpperCase(),
		cedula: 11691090,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lalarcon'.toLowerCase(),
		name: capitalCadena('LUIS ALFREDO'),
		lastName: capitalCadena('ALARCON '),
		type: 'regular',
		email: 'lalarcon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13999,
		nationality: 'V'.toUpperCase(),
		cedula: 6049772,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clonga'.toLowerCase(),
		name: capitalCadena('CRISMELY CAROLINA'),
		lastName: capitalCadena('LONGA ROMERO'),
		type: 'regular',
		email: 'clonga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14274,
		nationality: 'V'.toUpperCase(),
		cedula: 23635651,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmujica'.toLowerCase(),
		name: capitalCadena('LUISANA DEL VALLE'),
		lastName: capitalCadena('MUJICA PEREZ'),
		type: 'regular',
		email: 'lmujica@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14316,
		nationality: 'V'.toUpperCase(),
		cedula: 13088070,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frguzman'.toLowerCase(),
		name: capitalCadena('FRANCIS ANDREINA'),
		lastName: capitalCadena('GUZMAN DE GUEDEZ'),
		type: 'regular',
		email: 'frguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14393,
		nationality: 'V'.toUpperCase(),
		cedula: 15440899,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvillalobos'.toLowerCase(),
		name: capitalCadena('YESIKA MARIA'),
		lastName: capitalCadena('VILLALOBOS BECERRA'),
		type: 'regular',
		email: 'yvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14394,
		nationality: 'V'.toUpperCase(),
		cedula: 16900469,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edelgado'.toLowerCase(),
		name: capitalCadena('ELIMAR LISSETH'),
		lastName: capitalCadena('DELGADO ALVAREZ'),
		type: 'regular',
		email: 'edelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14428,
		nationality: 'V'.toUpperCase(),
		cedula: 15821726,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DOCUMENTACIÓN DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mihenriquez'.toLowerCase(),
		name: capitalCadena('MIREYA INOCENCIA'),
		lastName: capitalCadena('HENRIQUEZ RIVERO'),
		type: 'regular',
		email: 'mihenriquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14429,
		nationality: 'V'.toUpperCase(),
		cedula: 9415871,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juarodriguez'.toLowerCase(),
		name: capitalCadena('JUAN BAUTISTA'),
		lastName: capitalCadena('RODRIGUEZ PEREZ'),
		type: 'regular',
		email: 'juarodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14430,
		nationality: 'V'.toUpperCase(),
		cedula: 6835855,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpino'.toLowerCase(),
		name: capitalCadena('JOSEPH ALFONSO'),
		lastName: capitalCadena('PINO FUENTES'),
		type: 'regular',
		email: 'jpino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14450,
		nationality: 'V'.toUpperCase(),
		cedula: 26255659,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tindriago'.toLowerCase(),
		name: capitalCadena('THAIRUMA TIBISAY'),
		lastName: capitalCadena('INDRIAGO MESONES'),
		type: 'regular',
		email: 'tindriago@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14497,
		nationality: 'V'.toUpperCase(),
		cedula: 19734505,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aktorres'.toLowerCase(),
		name: capitalCadena('AKALIA DEYALIZ'),
		lastName: capitalCadena('TORRES '),
		type: 'regular',
		email: 'aktorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14564,
		nationality: 'V'.toUpperCase(),
		cedula: 6444518,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asalazar'.toLowerCase(),
		name: capitalCadena('ALEJANDRO DAVID'),
		lastName: capitalCadena('SALAZAR CARABALLO'),
		type: 'regular',
		email: 'asalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14590,
		nationality: 'V'.toUpperCase(),
		cedula: 20825564,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsanz'.toLowerCase(),
		name: capitalCadena('JUSVELY JUNHELENY'),
		lastName: capitalCadena('SANZ PALACIOS'),
		type: 'regular',
		email: 'jsanz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14601,
		nationality: 'V'.toUpperCase(),
		cedula: 22035452,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lupena'.toLowerCase(),
		name: capitalCadena('LUIS ALFREDO'),
		lastName: capitalCadena('PEÑA ACEVEDO'),
		type: 'regular',
		email: 'lupena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14613,
		nationality: 'V'.toUpperCase(),
		cedula: 20678782,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['TESORERIA'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE RENTA FIJA'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jparada'.toLowerCase(),
		name: capitalCadena('JULIO ANTONIO'),
		lastName: capitalCadena('PARADA PAREDES'),
		type: 'regular',
		email: 'jparada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14615,
		nationality: 'V'.toUpperCase(),
		cedula: 18994738,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iromero'.toLowerCase(),
		name: capitalCadena('IXAMAR HAKZAWETH'),
		lastName: capitalCadena('ROMERO TORRES'),
		type: 'regular',
		email: 'iromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14622,
		nationality: 'V'.toUpperCase(),
		cedula: 14680911,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jovelasquez'.toLowerCase(),
		name: capitalCadena('JONABELT SORISBET'),
		lastName: capitalCadena('VELASQUEZ MATA'),
		type: 'regular',
		email: 'jovelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14633,
		nationality: 'V'.toUpperCase(),
		cedula: 13715337,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpabon'.toLowerCase(),
		name: capitalCadena('KELVIS ENRIQUE'),
		lastName: capitalCadena('PABON GIL'),
		type: 'regular',
		email: 'kpabon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14640,
		nationality: 'V'.toUpperCase(),
		cedula: 13406085,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'scortes'.toLowerCase(),
		name: capitalCadena('SONIA ANDREINA'),
		lastName: capitalCadena('CORTES BALLEN'),
		type: 'regular',
		email: 'scortes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14654,
		nationality: 'V'.toUpperCase(),
		cedula: 14917835,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fojeda'.toLowerCase(),
		name: capitalCadena('FRANCIS CAROLINA'),
		lastName: capitalCadena('OJEDA CRESPO'),
		type: 'regular',
		email: 'fojeda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14655,
		nationality: 'V'.toUpperCase(),
		cedula: 16027955,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmora'.toLowerCase(),
		name: capitalCadena('LUIS DIONISIO'),
		lastName: capitalCadena('MORA PLATA'),
		type: 'regular',
		email: 'lmora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14699,
		nationality: 'V'.toUpperCase(),
		cedula: 18818210,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE INMUEBLES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isusarret'.toLowerCase(),
		name: capitalCadena('ISABELLA DEL VALLE'),
		lastName: capitalCadena('SUSARRET PERNIA'),
		type: 'regular',
		email: 'isusarret@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14708,
		nationality: 'V'.toUpperCase(),
		cedula: 29583410,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fborges'.toLowerCase(),
		name: capitalCadena('FABIOLA DEL VALLE'),
		lastName: capitalCadena('BORGES TORREALBA'),
		type: 'regular',
		email: 'fborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14732,
		nationality: 'V'.toUpperCase(),
		cedula: 6323399,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PLANIFICACIÓN FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'phurtado'.toLowerCase(),
		name: capitalCadena('PEDRO PABLO'),
		lastName: capitalCadena('HURTADO BRITO'),
		type: 'regular',
		email: 'phurtado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14749,
		nationality: 'V'.toUpperCase(),
		cedula: 14774279,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lagomez'.toLowerCase(),
		name: capitalCadena('LARRY ALBERTO'),
		lastName: capitalCadena('GOMEZ TORRES'),
		type: 'regular',
		email: 'lagomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14880,
		nationality: 'V'.toUpperCase(),
		cedula: 11945840,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. PROCURA, ALMACÉN Y SERVICIOS GENERALES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jzamora'.toLowerCase(),
		name: capitalCadena('JUNIOR ALEXANDER'),
		lastName: capitalCadena('ZAMORA PALACIOS'),
		type: 'regular',
		email: 'jzamora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15334,
		nationality: 'V'.toUpperCase(),
		cedula: 26104588,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTRATOS Y PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncaicedo'.toLowerCase(),
		name: capitalCadena('NATHACHA YICEL'),
		lastName: capitalCadena('CAICEDO TOVAR'),
		type: 'regular',
		email: 'ncaicedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15549,
		nationality: 'V'.toUpperCase(),
		cedula: 26252325,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvvazquez'.toLowerCase(),
		name: capitalCadena('YVELISS DEL CARMEN'),
		lastName: capitalCadena('VAZQUEZ CORTEZ'),
		type: 'regular',
		email: 'yvvazquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15610,
		nationality: 'V'.toUpperCase(),
		cedula: 9682972,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rpuentes'.toLowerCase(),
		name: capitalCadena('ROGNY JOSE'),
		lastName: capitalCadena('PUENTES PUENTES'),
		type: 'regular',
		email: 'rpuentes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15921,
		nationality: 'V'.toUpperCase(),
		cedula: 25369653,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msanchez'.toLowerCase(),
		name: capitalCadena('MARCOS ENRIQUE'),
		lastName: capitalCadena('SANCHEZ RUMBOS'),
		type: 'regular',
		email: 'msanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16002,
		nationality: 'V'.toUpperCase(),
		cedula: 31170299,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mespana'.toLowerCase(),
		name: capitalCadena('MARIA GABRIELA'),
		lastName: capitalCadena('ESPAÑA DE RIVERO'),
		type: 'regular',
		email: 'mespana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16031,
		nationality: 'V'.toUpperCase(),
		cedula: 13992455,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmontserratt'.toLowerCase(),
		name: capitalCadena('LEONARDO ALFREDO'),
		lastName: capitalCadena('MONTSERRATT MIJARES'),
		type: 'regular',
		email: 'lmontserratt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16145,
		nationality: 'V'.toUpperCase(),
		cedula: 13969341,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTROL DE ACTIVOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jeperez'.toLowerCase(),
		name: capitalCadena('JEAN CARLOS'),
		lastName: capitalCadena('PEREZ BARRIOS'),
		type: 'regular',
		email: 'jeperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16170,
		nationality: 'V'.toUpperCase(),
		cedula: 23391745,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lejimenez'.toLowerCase(),
		name: capitalCadena('LEWIS LEON'),
		lastName: capitalCadena('JIMENEZ RODRIGUEZ'),
		type: 'regular',
		email: 'lejimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16243,
		nationality: 'V'.toUpperCase(),
		cedula: 16331786,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kdiaz'.toLowerCase(),
		name: capitalCadena('KIPSY YESSENIA'),
		lastName: capitalCadena('DIAZ BARRIGA'),
		type: 'regular',
		email: 'kdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16351,
		nationality: 'V'.toUpperCase(),
		cedula: 13400179,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE BANCA INTERNACIONAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gjaspe'.toLowerCase(),
		name: capitalCadena('GABRIEL ANTONIO'),
		lastName: capitalCadena('JASPE MACHADO'),
		type: 'regular',
		email: 'gjaspe@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16430,
		nationality: 'V'.toUpperCase(),
		cedula: 26477123,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcolmenares'.toLowerCase(),
		name: capitalCadena('DAYANA CAROLINA'),
		lastName: capitalCadena('COLMENARES SEGOVIA'),
		type: 'regular',
		email: 'dcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 169,
		nationality: 'V'.toUpperCase(),
		cedula: 12391944,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS SECTOR FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yavila'.toLowerCase(),
		name: capitalCadena('YEIBER JOSE'),
		lastName: capitalCadena('AVILA OROPEZA'),
		type: 'regular',
		email: 'yavila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5141,
		nationality: 'V'.toUpperCase(),
		cedula: 19391230,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lbermudez'.toLowerCase(),
		name: capitalCadena('LUZ MARINA'),
		lastName: capitalCadena('BERMUDEZ GUZMAN'),
		type: 'regular',
		email: 'lbermudez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1527,
		nationality: 'V'.toUpperCase(),
		cedula: 8228726,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nortiz'.toLowerCase(),
		name: capitalCadena('NORMA JOSEFINA'),
		lastName: capitalCadena('ORTIZ LEON'),
		type: 'regular',
		email: 'nortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1577,
		nationality: 'V'.toUpperCase(),
		cedula: 8747750,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcala'.toLowerCase(),
		name: capitalCadena('MARIA NEVADY'),
		lastName: capitalCadena('CALA DELGADO'),
		type: 'regular',
		email: 'mcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1698,
		nationality: 'V'.toUpperCase(),
		cedula: 12992157,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lchirinos'.toLowerCase(),
		name: capitalCadena('LILISBETH CAROLINA'),
		lastName: capitalCadena('CHIRINOS TORRES'),
		type: 'regular',
		email: 'lchirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1772,
		nationality: 'V'.toUpperCase(),
		cedula: 13087479,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'privera'.toLowerCase(),
		name: capitalCadena('PEGGY MAGALY'),
		lastName: capitalCadena('RIVERA NUÑEZ'),
		type: 'regular',
		email: 'privera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2194,
		nationality: 'V'.toUpperCase(),
		cedula: 14892805,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO (BEI)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iandrade'.toLowerCase(),
		name: capitalCadena('IRENE DAMARIS'),
		lastName: capitalCadena('ANDRADE JARA'),
		type: 'regular',
		email: 'iandrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2461,
		nationality: 'V'.toUpperCase(),
		cedula: 19734139,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO (BEI)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mgamarra'.toLowerCase(),
		name: capitalCadena('MIRIAM DEL VALLE'),
		lastName: capitalCadena('GAMARRA URBANEJA'),
		type: 'regular',
		email: 'mgamarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2547,
		nationality: 'V'.toUpperCase(),
		cedula: 14755996,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edggonzalez'.toLowerCase(),
		name: capitalCadena('EDGAR STANNY'),
		lastName: capitalCadena('GONZALEZ BARROYETA'),
		type: 'regular',
		email: 'edggonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2916,
		nationality: 'V'.toUpperCase(),
		cedula: 13252856,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS TELECOMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcarpio'.toLowerCase(),
		name: capitalCadena('LISBETH MIGDELYS'),
		lastName: capitalCadena('CARPIO BARRETO'),
		type: 'regular',
		email: 'lcarpio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4294,
		nationality: 'V'.toUpperCase(),
		cedula: 16671376,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msole'.toLowerCase(),
		name: capitalCadena('MILEIDY ANDREINA'),
		lastName: capitalCadena('SOLE BRICEÑO'),
		type: 'regular',
		email: 'msole@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11500,
		nationality: 'V'.toUpperCase(),
		cedula: 25212568,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vherrera'.toLowerCase(),
		name: capitalCadena('VIANNEY DEL VALLE'),
		lastName: capitalCadena('HERRERA MORENO'),
		type: 'regular',
		email: 'vherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6023,
		nationality: 'V'.toUpperCase(),
		cedula: 18388698,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mdegouveia'.toLowerCase(),
		name: capitalCadena('MANUEL LUIS'),
		lastName: capitalCadena('DE GOUVEIA FREITAS'),
		type: 'regular',
		email: 'mdegouveia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6674,
		nationality: 'V'.toUpperCase(),
		cedula: 12382457,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS TELECOMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yabriceno'.toLowerCase(),
		name: capitalCadena('YARA MIRELIS'),
		lastName: capitalCadena('BRICEÑO GIL'),
		type: 'regular',
		email: 'yabriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12629,
		nationality: 'V'.toUpperCase(),
		cedula: 25303341,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jepacheco'.toLowerCase(),
		name: capitalCadena('JENZER ANTONIO'),
		lastName: capitalCadena('PACHECO ABAD'),
		type: 'regular',
		email: 'jepacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9023,
		nationality: 'V'.toUpperCase(),
		cedula: 23107099,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS TELECOMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eserrano'.toLowerCase(),
		name: capitalCadena('EGLEINNYS CAROLINA'),
		lastName: capitalCadena('SERRANO GIL'),
		type: 'regular',
		email: 'eserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10041,
		nationality: 'V'.toUpperCase(),
		cedula: 20994610,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lbastardo'.toLowerCase(),
		name: capitalCadena('LENIXA REYNIE'),
		lastName: capitalCadena('BASTARDO TORO'),
		type: 'regular',
		email: 'lbastardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10506,
		nationality: 'V'.toUpperCase(),
		cedula: 15844493,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afarias'.toLowerCase(),
		name: capitalCadena('ANTONY BEIKERT'),
		lastName: capitalCadena('FARIAS FARFAN'),
		type: 'regular',
		email: 'afarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10539,
		nationality: 'V'.toUpperCase(),
		cedula: 22492882,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mavendano'.toLowerCase(),
		name: capitalCadena('MARY WENCE'),
		lastName: capitalCadena('AVENDAÑO GUEVARA'),
		type: 'regular',
		email: 'mavendano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10638,
		nationality: 'V'.toUpperCase(),
		cedula: 10380647,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eguevara'.toLowerCase(),
		name: capitalCadena('EDDUAR JESUS'),
		lastName: capitalCadena('GUEVARA MAGALLANES'),
		type: 'regular',
		email: 'eguevara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10969,
		nationality: 'V'.toUpperCase(),
		cedula: 18837932,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jgarrido'.toLowerCase(),
		name: capitalCadena('JENNIFER '),
		lastName: capitalCadena('GARRIDO SANZ'),
		type: 'regular',
		email: 'jgarrido@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11102,
		nationality: 'V'.toUpperCase(),
		cedula: 13886283,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ebravo'.toLowerCase(),
		name: capitalCadena('ERICK JAVIER'),
		lastName: capitalCadena('BRAVO CASTELLANO'),
		type: 'regular',
		email: 'ebravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11343,
		nationality: 'V'.toUpperCase(),
		cedula: 17489944,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfuenmayor'.toLowerCase(),
		name: capitalCadena('YOLEYVA JOSEFINA'),
		lastName: capitalCadena('FUENMAYOR MARQUEZ'),
		type: 'regular',
		email: 'yfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12847,
		nationality: 'V'.toUpperCase(),
		cedula: 6203853,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sgomez'.toLowerCase(),
		name: capitalCadena('STEPHANIE MICHEL'),
		lastName: capitalCadena('GOMEZ ACERO'),
		type: 'regular',
		email: 'sgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11508,
		nationality: 'V'.toUpperCase(),
		cedula: 24724735,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'evarela'.toLowerCase(),
		name: capitalCadena('ESTHER MARIA'),
		lastName: capitalCadena('VARELA VARGAS'),
		type: 'regular',
		email: 'evarela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11545,
		nationality: 'V'.toUpperCase(),
		cedula: 6860590,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ssalom'.toLowerCase(),
		name: capitalCadena('SLEYDEER LIONEL'),
		lastName: capitalCadena('SALOM MOLINA'),
		type: 'regular',
		email: 'ssalom@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11625,
		nationality: 'V'.toUpperCase(),
		cedula: 27730580,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL (BEI) II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zrojas'.toLowerCase(),
		name: capitalCadena('ZORAIDA EGLEE'),
		lastName: capitalCadena('ROJAS MOLINA'),
		type: 'regular',
		email: 'zrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12598,
		nationality: 'V'.toUpperCase(),
		cedula: 19733079,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dbetancourt'.toLowerCase(),
		name: capitalCadena('DAMARYS DANUBIS'),
		lastName: capitalCadena('BETANCOURT LANDAETA'),
		type: 'regular',
		email: 'dbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14161,
		nationality: 'V'.toUpperCase(),
		cedula: 15548935,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS I'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hbelfort'.toLowerCase(),
		name: capitalCadena('HELIANTA SOFIA'),
		lastName: capitalCadena('BELFORT URQUIOLA'),
		type: 'regular',
		email: 'hbelfort@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 820,
		nationality: 'V'.toUpperCase(),
		cedula: 13486833,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS II'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcastillo'.toLowerCase(),
		name: capitalCadena('DAHIANA COROMOTO'),
		lastName: capitalCadena('CASTILLO TARAZON'),
		type: 'regular',
		email: 'dcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12738,
		nationality: 'V'.toUpperCase(),
		cedula: 13287902,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcaprasio'.toLowerCase(),
		name: capitalCadena('MIRLA MARIA'),
		lastName: capitalCadena('CAPRASIO VILLAZMIL'),
		type: 'regular',
		email: 'mcaprasio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12802,
		nationality: 'V'.toUpperCase(),
		cedula: 19503006,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmejias'.toLowerCase(),
		name: capitalCadena('JOHANNA CAROLINA'),
		lastName: capitalCadena('MEJIAS ROMERO'),
		type: 'regular',
		email: 'jmejias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7337,
		nationality: 'V'.toUpperCase(),
		cedula: 18189005,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS II'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wbarat'.toLowerCase(),
		name: capitalCadena('WENDY SULBEY'),
		lastName: capitalCadena('BARAT BARRETO'),
		type: 'regular',
		email: 'wbarat@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12851,
		nationality: 'V'.toUpperCase(),
		cedula: 24210443,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR FINANCIERO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpalma'.toLowerCase(),
		name: capitalCadena('JOHANA ALEXANDRA'),
		lastName: capitalCadena('PALMA NUNES'),
		type: 'regular',
		email: 'jpalma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12711,
		nationality: 'V'.toUpperCase(),
		cedula: 20841788,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA DE RELACIÓN'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS II'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mtoro'.toLowerCase(),
		name: capitalCadena('MAYRA ALEJANDRA'),
		lastName: capitalCadena('TORO LOPEZ'),
		type: 'regular',
		email: 'mtoro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12917,
		nationality: 'V'.toUpperCase(),
		cedula: 28136731,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL (BEI) II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bbolivar'.toLowerCase(),
		name: capitalCadena('BARBARA YULEISY'),
		lastName: capitalCadena('BOLIVAR PIÑANGO'),
		type: 'regular',
		email: 'bbolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12989,
		nationality: 'V'.toUpperCase(),
		cedula: 23947634,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wjaimes'.toLowerCase(),
		name: capitalCadena('WILMER ALEXANDER'),
		lastName: capitalCadena('JAIMES '),
		type: 'regular',
		email: 'wjaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13344,
		nationality: 'V'.toUpperCase(),
		cedula: 14990458,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nolivares'.toLowerCase(),
		name: capitalCadena('NOHEMI DEL CARMEN'),
		lastName: capitalCadena('OLIVARES DE LINARES'),
		type: 'regular',
		email: 'nolivares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13391,
		nationality: 'V'.toUpperCase(),
		cedula: 12043831,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marcgutierrez'.toLowerCase(),
		name: capitalCadena('MARCELA ESTHER'),
		lastName: capitalCadena('GUTIERREZ ATENCIA'),
		type: 'regular',
		email: 'marcgutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13601,
		nationality: 'V'.toUpperCase(),
		cedula: 10485354,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rpoleo'.toLowerCase(),
		name: capitalCadena('RONNIE ENRIQUE'),
		lastName: capitalCadena('POLEO ORTIZ'),
		type: 'regular',
		email: 'rpoleo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13617,
		nationality: 'V'.toUpperCase(),
		cedula: 12172791,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sortiz'.toLowerCase(),
		name: capitalCadena('SERAFINA '),
		lastName: capitalCadena('ORTIZ LOPEZ'),
		type: 'regular',
		email: 'sortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13625,
		nationality: 'V'.toUpperCase(),
		cedula: 7683191,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apetit'.toLowerCase(),
		name: capitalCadena('ANDRES JOSE'),
		lastName: capitalCadena('PETIT QUINTERO'),
		type: 'regular',
		email: 'apetit@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13677,
		nationality: 'V'.toUpperCase(),
		cedula: 5580518,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO (BEI)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bgaldona'.toLowerCase(),
		name: capitalCadena('BARBARA WILESKY'),
		lastName: capitalCadena('GALDONA GUTIERREZ'),
		type: 'regular',
		email: 'bgaldona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14033,
		nationality: 'V'.toUpperCase(),
		cedula: 19711833,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvargas'.toLowerCase(),
		name: capitalCadena('LILIBETH JACQUELIN'),
		lastName: capitalCadena('VARGAS VEGA'),
		type: 'regular',
		email: 'lvargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14061,
		nationality: 'V'.toUpperCase(),
		cedula: 10480085,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR PÚBLICO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR PÚBLICO I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'digomez'.toLowerCase(),
		name: capitalCadena('DIANA PATRICIA'),
		lastName: capitalCadena('GOMEZ MARTINEZ'),
		type: 'regular',
		email: 'digomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12909,
		nationality: 'V'.toUpperCase(),
		cedula: 17440693,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS II'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yparucho'.toLowerCase(),
		name: capitalCadena('YOLGAMI ALEXANDRA'),
		lastName: capitalCadena('PARUCHO ROMERO'),
		type: 'regular',
		email: 'yparucho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14176,
		nationality: 'V'.toUpperCase(),
		cedula: 21413896,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gmotta'.toLowerCase(),
		name: capitalCadena('GIUSEPPA '),
		lastName: capitalCadena('EMANUELE MOTTA'),
		type: 'regular',
		email: 'gmotta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14187,
		nationality: 'V'.toUpperCase(),
		cedula: 11228140,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'stguerra'.toLowerCase(),
		name: capitalCadena('STEPHANIE JOSEFINA'),
		lastName: capitalCadena('GUERRA INFANTE'),
		type: 'regular',
		email: 'stguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14200,
		nationality: 'V'.toUpperCase(),
		cedula: 26466914,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS (BEI) III']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecarvajal'.toLowerCase(),
		name: capitalCadena('ELIDES PAULA'),
		lastName: capitalCadena('CARVAJAL CASTILLO'),
		type: 'regular',
		email: 'ecarvajal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15316,
		nationality: 'V'.toUpperCase(),
		cedula: 10629364,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'novera'.toLowerCase(),
		name: capitalCadena('NOHELI DEL VALLE'),
		lastName: capitalCadena('VERA RASQUIDES'),
		type: 'regular',
		email: 'novera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15570,
		nationality: 'V'.toUpperCase(),
		cedula: 13846539,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'glameda'.toLowerCase(),
		name: capitalCadena('GLEYDY YOSELING'),
		lastName: capitalCadena('LAMEDA ARTEAGA'),
		type: 'regular',
		email: 'glameda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15942,
		nationality: 'V'.toUpperCase(),
		cedula: 16333181,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ahurtado'.toLowerCase(),
		name: capitalCadena('ANGEL EDUARDO'),
		lastName: capitalCadena('HURTADO GONZÁLEZ'),
		type: 'regular',
		email: 'ahurtado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16205,
		nationality: 'V'.toUpperCase(),
		cedula: 13458329,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CORPORATIVA BEI SECTOR AGROPECUARIO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsifontes'.toLowerCase(),
		name: capitalCadena('JUAN ERNESTO'),
		lastName: capitalCadena('SIFONTES PAREDES'),
		type: 'regular',
		email: 'jsifontes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16332,
		nationality: 'V'.toUpperCase(),
		cedula: 9485441,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BANCA CORPORATIVA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CORPORATIVA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avega'.toLowerCase(),
		name: capitalCadena('AINEISY NATHALY'),
		lastName: capitalCadena('VEGA PEREZ'),
		type: 'regular',
		email: 'avega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12736,
		nationality: 'V'.toUpperCase(),
		cedula: 18277502,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nbetancourt'.toLowerCase(),
		name: capitalCadena('NEIRYMAR ADRIANIRA'),
		lastName: capitalCadena('BETANCOURT PESCOSO'),
		type: 'regular',
		email: 'nbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12811,
		nationality: 'V'.toUpperCase(),
		cedula: 16224665,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apachano'.toLowerCase(),
		name: capitalCadena('ANA KARINA'),
		lastName: capitalCadena('PACHANO FERNANDEZ'),
		type: 'regular',
		email: 'apachano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14583,
		nationality: 'V'.toUpperCase(),
		cedula: 20872121,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kigonzalez'.toLowerCase(),
		name: capitalCadena('KIMBERLYN ALEJANDRA'),
		lastName: capitalCadena('GONZALEZ PAMELA'),
		type: 'regular',
		email: 'kigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14600,
		nationality: 'V'.toUpperCase(),
		cedula: 27254026,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kjaimes'.toLowerCase(),
		name: capitalCadena('KAREN ANYELINA'),
		lastName: capitalCadena('JAIMES OROPEZA'),
		type: 'regular',
		email: 'kjaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14617,
		nationality: 'V'.toUpperCase(),
		cedula: 21438190,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jrizo'.toLowerCase(),
		name: capitalCadena('JOSMAR ALEXANDER'),
		lastName: capitalCadena('RIZO RODRIGUEZ'),
		type: 'regular',
		email: 'jrizo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15113,
		nationality: 'V'.toUpperCase(),
		cedula: 20154439,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sandrades'.toLowerCase(),
		name: capitalCadena('SANDRA PAOLA'),
		lastName: capitalCadena('ANDRADES MORENO'),
		type: 'regular',
		email: 'sandrades@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15121,
		nationality: 'V'.toUpperCase(),
		cedula: 19754742,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ctorres'.toLowerCase(),
		name: capitalCadena('CINDY ROSSANA'),
		lastName: capitalCadena('TORRES RODRIGUEZ'),
		type: 'regular',
		email: 'ctorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15131,
		nationality: 'V'.toUpperCase(),
		cedula: 19228650,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jealdana'.toLowerCase(),
		name: capitalCadena('JEAN CAROLINA'),
		lastName: capitalCadena('ALDANA PIÑA'),
		type: 'regular',
		email: 'jealdana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15163,
		nationality: 'V'.toUpperCase(),
		cedula: 25570514,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ffuentes'.toLowerCase(),
		name: capitalCadena('FLORANGEL DUBRASKA'),
		lastName: capitalCadena('FUENTES RODRIGUEZ'),
		type: 'regular',
		email: 'ffuentes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15359,
		nationality: 'V'.toUpperCase(),
		cedula: 13288393,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marlgarcia'.toLowerCase(),
		name: capitalCadena('MARLYN DEL VALLE'),
		lastName: capitalCadena('GARCIA SAAVEDRA'),
		type: 'regular',
		email: 'marlgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15386,
		nationality: 'V'.toUpperCase(),
		cedula: 15207958,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nromero'.toLowerCase(),
		name: capitalCadena('NATHALY VANESSA'),
		lastName: capitalCadena('ROMERO ORTA'),
		type: 'regular',
		email: 'nromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15395,
		nationality: 'V'.toUpperCase(),
		cedula: 19085139,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yimartinez'.toLowerCase(),
		name: capitalCadena('YISLEIDY DEL VALLE'),
		lastName: capitalCadena('MARTINEZ BORGES'),
		type: 'regular',
		email: 'yimartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15438,
		nationality: 'V'.toUpperCase(),
		cedula: 24982180,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anbriceno'.toLowerCase(),
		name: capitalCadena('ANALESKA JOSIVER'),
		lastName: capitalCadena('BRICEÑO BARRIENTOS'),
		type: 'regular',
		email: 'anbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15471,
		nationality: 'V'.toUpperCase(),
		cedula: 25444089,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wbermudez'.toLowerCase(),
		name: capitalCadena('WISNEIDIS YETZARI'),
		lastName: capitalCadena('BERMUDEZ MARTINEZ'),
		type: 'regular',
		email: 'wbermudez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15486,
		nationality: 'V'.toUpperCase(),
		cedula: 26908225,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'armachado'.toLowerCase(),
		name: capitalCadena('ARIAM ISMARELY'),
		lastName: capitalCadena('MACHADO ROJAS'),
		type: 'regular',
		email: 'armachado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15510,
		nationality: 'V'.toUpperCase(),
		cedula: 25306431,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lotero'.toLowerCase(),
		name: capitalCadena('LUIS ALBERTO'),
		lastName: capitalCadena('OTERO RAMOS'),
		type: 'regular',
		email: 'lotero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15511,
		nationality: 'V'.toUpperCase(),
		cedula: 18528430,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'overa'.toLowerCase(),
		name: capitalCadena('OYAIFRE YORKAEF'),
		lastName: capitalCadena('VERA RODRIGUEZ'),
		type: 'regular',
		email: 'overa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15512,
		nationality: 'V'.toUpperCase(),
		cedula: 28319013,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccaicedo'.toLowerCase(),
		name: capitalCadena('CAROLA JANETH'),
		lastName: capitalCadena('CAICEDO NAZARENO'),
		type: 'regular',
		email: 'ccaicedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15573,
		nationality: 'V'.toUpperCase(),
		cedula: 82287809,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'areyes'.toLowerCase(),
		name: capitalCadena('ANNIFRAN JOSE'),
		lastName: capitalCadena('REYES GUZMAN'),
		type: 'regular',
		email: 'areyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15654,
		nationality: 'V'.toUpperCase(),
		cedula: 19251530,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'manieves'.toLowerCase(),
		name: capitalCadena('MAYKER ALEJANDRO'),
		lastName: capitalCadena('NIEVES TOLEDO'),
		type: 'regular',
		email: 'manieves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15659,
		nationality: 'V'.toUpperCase(),
		cedula: 27531862,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mduarte'.toLowerCase(),
		name: capitalCadena('MANUEL ALEJANDRO'),
		lastName: capitalCadena('DUARTE ROSALES'),
		type: 'regular',
		email: 'mduarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15689,
		nationality: 'V'.toUpperCase(),
		cedula: 26573730,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ferbetancourt'.toLowerCase(),
		name: capitalCadena('FERNANDO JOSE'),
		lastName: capitalCadena('BETANCOURT MERECUANE'),
		type: 'regular',
		email: 'ferbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15698,
		nationality: 'V'.toUpperCase(),
		cedula: 27283774,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'brojas'.toLowerCase(),
		name: capitalCadena('BARBARA CAROLINA'),
		lastName: capitalCadena('ROJAS ESCOBAR'),
		type: 'regular',
		email: 'brojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15833,
		nationality: 'V'.toUpperCase(),
		cedula: 20870355,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncanales'.toLowerCase(),
		name: capitalCadena('NOREIDYS JOHANA'),
		lastName: capitalCadena('CANALES MENDEZ'),
		type: 'regular',
		email: 'ncanales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15839,
		nationality: 'V'.toUpperCase(),
		cedula: 17589107,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'valcala'.toLowerCase(),
		name: capitalCadena('VICTORIA DEL ALBA'),
		lastName: capitalCadena('ALCALA CARABALLO'),
		type: 'regular',
		email: 'valcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15919,
		nationality: 'V'.toUpperCase(),
		cedula: 29832993,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcordero'.toLowerCase(),
		name: capitalCadena('DANIELA YOBELEYMA'),
		lastName: capitalCadena('CORDERO HERNANDEZ'),
		type: 'regular',
		email: 'dcordero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15954,
		nationality: 'V'.toUpperCase(),
		cedula: 18487795,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cefernandez'.toLowerCase(),
		name: capitalCadena('CESAR EDUARDO'),
		lastName: capitalCadena('FERNANDEZ ALLANDE'),
		type: 'regular',
		email: 'cefernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15955,
		nationality: 'V'.toUpperCase(),
		cedula: 12880124,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmata'.toLowerCase(),
		name: capitalCadena('JHOIRY LAFFAYER'),
		lastName: capitalCadena('MATA PACHECO'),
		type: 'regular',
		email: 'jmata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16091,
		nationality: 'V'.toUpperCase(),
		cedula: 20674711,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asanchez'.toLowerCase(),
		name: capitalCadena('ANAIDA DEL CARMEN'),
		lastName: capitalCadena('SANCHEZ BRAZON'),
		type: 'regular',
		email: 'asanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16277,
		nationality: 'V'.toUpperCase(),
		cedula: 17907878,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rocastillo'.toLowerCase(),
		name: capitalCadena('ROCYMAR NAZARETH BETHANIA'),
		lastName: capitalCadena('CASTILLO MIJARES'),
		type: 'regular',
		email: 'rocastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16337,
		nationality: 'V'.toUpperCase(),
		cedula: 21437893,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jdewit'.toLowerCase(),
		name: capitalCadena('JOHAN PAUL'),
		lastName: capitalCadena('DE WIT CONTRERAS'),
		type: 'regular',
		email: 'jdewit@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16338,
		nationality: 'V'.toUpperCase(),
		cedula: 14587488,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yleal'.toLowerCase(),
		name: capitalCadena('YARUMI OROISIS'),
		lastName: capitalCadena('LEAL MENDOZA'),
		type: 'regular',
		email: 'yleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16348,
		nationality: 'V'.toUpperCase(),
		cedula: 25504564,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elsanchez'.toLowerCase(),
		name: capitalCadena('ELIZETH CAROLINA'),
		lastName: capitalCadena('SANCHEZ ESCALANTE'),
		type: 'regular',
		email: 'elsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16352,
		nationality: 'V'.toUpperCase(),
		cedula: 13992729,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avegas'.toLowerCase(),
		name: capitalCadena('ALAN WILLIAM'),
		lastName: capitalCadena('VEGAS HIDALGO'),
		type: 'regular',
		email: 'avegas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16396,
		nationality: 'V'.toUpperCase(),
		cedula: 28461923,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kguzman'.toLowerCase(),
		name: capitalCadena('KENIN JOSE'),
		lastName: capitalCadena('GUZMAN RODRIGUEZ'),
		type: 'regular',
		email: 'kguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16397,
		nationality: 'V'.toUpperCase(),
		cedula: 29850967,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysantiago'.toLowerCase(),
		name: capitalCadena('YENMARY RACHELL'),
		lastName: capitalCadena('SANTIAGO GUTIERREZ'),
		type: 'regular',
		email: 'ysantiago@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16398,
		nationality: 'V'.toUpperCase(),
		cedula: 29661186,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gchacon'.toLowerCase(),
		name: capitalCadena('GRAICE DUBRASKA'),
		lastName: capitalCadena('CHACON ALGARIN'),
		type: 'regular',
		email: 'gchacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16399,
		nationality: 'V'.toUpperCase(),
		cedula: 23707757,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jemarin'.toLowerCase(),
		name: capitalCadena('JESUS RAFAEL'),
		lastName: capitalCadena('MARIN MONTILVA'),
		type: 'regular',
		email: 'jemarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16402,
		nationality: 'V'.toUpperCase(),
		cedula: 28301903,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aasanchez'.toLowerCase(),
		name: capitalCadena('AARON NASAEL'),
		lastName: capitalCadena('SANCHEZ PEREZ'),
		type: 'regular',
		email: 'aasanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16413,
		nationality: 'V'.toUpperCase(),
		cedula: 28101214,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fpereira'.toLowerCase(),
		name: capitalCadena('FRANCI ALEXANDRA DE JESUS'),
		lastName: capitalCadena('PEREIRA AQUINO'),
		type: 'regular',
		email: 'fpereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16447,
		nationality: 'V'.toUpperCase(),
		cedula: 24297102,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jifernandez'.toLowerCase(),
		name: capitalCadena('JIRMARY FABIANA'),
		lastName: capitalCadena('FERNANDEZ MARQUEZ'),
		type: 'regular',
		email: 'jifernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16454,
		nationality: 'V'.toUpperCase(),
		cedula: 27805932,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ANÁLISIS Y SUPERVISIÓN DE OP FINA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'allopez'.toLowerCase(),
		name: capitalCadena('ALEX JHONATHAN'),
		lastName: capitalCadena('LOPEZ ARANGUREN'),
		type: 'regular',
		email: 'allopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16452,
		nationality: 'V'.toUpperCase(),
		cedula: 16343917,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS (ADM) I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amachado'.toLowerCase(),
		name: capitalCadena('ALFREDO '),
		lastName: capitalCadena('MACHADO CASTILLO'),
		type: 'regular',
		email: 'amachado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1019,
		nationality: 'V'.toUpperCase(),
		cedula: 6322264,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wmontilla'.toLowerCase(),
		name: capitalCadena('WILMER LEONEL'),
		lastName: capitalCadena('MONTILLA DURAN'),
		type: 'regular',
		email: 'wmontilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3642,
		nationality: 'V'.toUpperCase(),
		cedula: 12410144,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edcaraballo'.toLowerCase(),
		name: capitalCadena('EDWIN ALEXIS'),
		lastName: capitalCadena('CARABALLO URBINA'),
		type: 'regular',
		email: 'edcaraballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4638,
		nationality: 'V'.toUpperCase(),
		cedula: 16217301,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angrodriguez'.toLowerCase(),
		name: capitalCadena('ANGELA CAROLINA'),
		lastName: capitalCadena('RODRIGUEZ ABELLO'),
		type: 'regular',
		email: 'angrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4924,
		nationality: 'V'.toUpperCase(),
		cedula: 20174202,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asmoreno'.toLowerCase(),
		name: capitalCadena('ASTRID CAROLINA'),
		lastName: capitalCadena('MORENO SUAZA'),
		type: 'regular',
		email: 'asmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6199,
		nationality: 'V'.toUpperCase(),
		cedula: 24342056,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amendez'.toLowerCase(),
		name: capitalCadena('ANTONY OSWALDO'),
		lastName: capitalCadena('MENDEZ FUENTES'),
		type: 'regular',
		email: 'amendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7392,
		nationality: 'V'.toUpperCase(),
		cedula: 17488639,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymata'.toLowerCase(),
		name: capitalCadena('YHONERI JESUS'),
		lastName: capitalCadena('MATA PIÑATE'),
		type: 'regular',
		email: 'ymata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7544,
		nationality: 'V'.toUpperCase(),
		cedula: 24933750,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dadiaz'.toLowerCase(),
		name: capitalCadena('DANIELA '),
		lastName: capitalCadena('DIAZ MARCANO'),
		type: 'regular',
		email: 'dadiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7575,
		nationality: 'V'.toUpperCase(),
		cedula: 19086350,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vatienza'.toLowerCase(),
		name: capitalCadena('VICTOR GABRIEL'),
		lastName: capitalCadena('ATIENZA VELIZ'),
		type: 'regular',
		email: 'vatienza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7674,
		nationality: 'V'.toUpperCase(),
		cedula: 19464346,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvidal'.toLowerCase(),
		name: capitalCadena('YENIBER ROSE'),
		lastName: capitalCadena('VIDAL GARCIA'),
		type: 'regular',
		email: 'yvidal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8217,
		nationality: 'V'.toUpperCase(),
		cedula: 23617826,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wborges'.toLowerCase(),
		name: capitalCadena('WILLIAM JOSE'),
		lastName: capitalCadena('BORGES APONTE'),
		type: 'regular',
		email: 'wborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15130,
		nationality: 'V'.toUpperCase(),
		cedula: 30175522,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE (ADM)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlares'.toLowerCase(),
		name: capitalCadena('JANDREE JOSE'),
		lastName: capitalCadena('LARES HERRERA'),
		type: 'regular',
		email: 'jlares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10747,
		nationality: 'V'.toUpperCase(),
		cedula: 26210076,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aiarias'.toLowerCase(),
		name: capitalCadena('AISMAR IVANESKA'),
		lastName: capitalCadena('ARIAS VERAZA'),
		type: 'regular',
		email: 'aiarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9818,
		nationality: 'V'.toUpperCase(),
		cedula: 26454193,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmartinez'.toLowerCase(),
		name: capitalCadena('LISSETT IBETH'),
		lastName: capitalCadena('MARTINEZ REYES'),
		type: 'regular',
		email: 'lmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10910,
		nationality: 'V'.toUpperCase(),
		cedula: 18032757,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmartinez'.toLowerCase(),
		name: capitalCadena('MARILYN ANDREINA'),
		lastName: capitalCadena('MARTINEZ PINTO'),
		type: 'regular',
		email: 'mmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11819,
		nationality: 'V'.toUpperCase(),
		cedula: 26725074,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krperez'.toLowerCase(),
		name: capitalCadena('KRYSTIAN STIBEN'),
		lastName: capitalCadena('PEREZ ORTIZ'),
		type: 'regular',
		email: 'krperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11836,
		nationality: 'V'.toUpperCase(),
		cedula: 29661739,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvalles'.toLowerCase(),
		name: capitalCadena('LEODALYS CELINA'),
		lastName: capitalCadena('VALLES GUTIERREZ'),
		type: 'regular',
		email: 'lvalles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12120,
		nationality: 'V'.toUpperCase(),
		cedula: 26574520,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rhhernandez'.toLowerCase(),
		name: capitalCadena('RHAINY GUILLERMO'),
		lastName: capitalCadena('HERNANDEZ ALVARADO'),
		type: 'regular',
		email: 'rhhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12723,
		nationality: 'V'.toUpperCase(),
		cedula: 30227421,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmondragon'.toLowerCase(),
		name: capitalCadena('DANIEL HUMBERTO'),
		lastName: capitalCadena('MONDRAGON RANGEL'),
		type: 'regular',
		email: 'dmondragon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13000,
		nationality: 'V'.toUpperCase(),
		cedula: 15200394,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jhidalgo'.toLowerCase(),
		name: capitalCadena('JUAN DE DIOS'),
		lastName: capitalCadena('HIDALGO LIRA'),
		type: 'regular',
		email: 'jhidalgo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12761,
		nationality: 'V'.toUpperCase(),
		cedula: 23949177,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OFICINISTA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lbernot'.toLowerCase(),
		name: capitalCadena('LISBETH MERCEDES'),
		lastName: capitalCadena('BERNOT PEREZ'),
		type: 'regular',
		email: 'lbernot@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13288,
		nationality: 'V'.toUpperCase(),
		cedula: 10870022,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gvalles'.toLowerCase(),
		name: capitalCadena('GIOVANNI ARGENIS'),
		lastName: capitalCadena('VALLES SILGUERO'),
		type: 'regular',
		email: 'gvalles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13366,
		nationality: 'V'.toUpperCase(),
		cedula: 12095956,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmedina'.toLowerCase(),
		name: capitalCadena('DIOSNERY NAZARETH'),
		lastName: capitalCadena('MEDINA OROPEZA'),
		type: 'regular',
		email: 'dmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13083,
		nationality: 'V'.toUpperCase(),
		cedula: 26078552,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfagundez'.toLowerCase(),
		name: capitalCadena('LUIS EDUARDO'),
		lastName: capitalCadena('FAGUNDEZ FLORES'),
		type: 'regular',
		email: 'lfagundez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14370,
		nationality: 'V'.toUpperCase(),
		cedula: 12357821,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isantos'.toLowerCase(),
		name: capitalCadena('IDARMIS SINAID'),
		lastName: capitalCadena('SANTOS DIAZ'),
		type: 'regular',
		email: 'isantos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14463,
		nationality: 'V'.toUpperCase(),
		cedula: 6908904,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bbrazon'.toLowerCase(),
		name: capitalCadena('BETTY CATALINA'),
		lastName: capitalCadena('BRAZON SOTILLO'),
		type: 'regular',
		email: 'bbrazon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14565,
		nationality: 'V'.toUpperCase(),
		cedula: 18714139,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lchang'.toLowerCase(),
		name: capitalCadena('LEIDY ADIANEZ'),
		lastName: capitalCadena('CHANG CEREZO'),
		type: 'regular',
		email: 'lchang@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14582,
		nationality: 'V'.toUpperCase(),
		cedula: 15377151,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jepina'.toLowerCase(),
		name: capitalCadena('JENNIFER HAIMET'),
		lastName: capitalCadena('PIÑA SILVA'),
		type: 'regular',
		email: 'jepina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14673,
		nationality: 'V'.toUpperCase(),
		cedula: 15586762,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'projas'.toLowerCase(),
		name: capitalCadena('PIERINA GIOVANNA'),
		lastName: capitalCadena('ROJAS MIJARES'),
		type: 'regular',
		email: 'projas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14678,
		nationality: 'V'.toUpperCase(),
		cedula: 19201227,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jediaz'.toLowerCase(),
		name: capitalCadena('JESUS ERNESTO'),
		lastName: capitalCadena('DIAZ RENGIFO'),
		type: 'regular',
		email: 'jediaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14955,
		nationality: 'V'.toUpperCase(),
		cedula: 17119396,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cangarita'.toLowerCase(),
		name: capitalCadena('CARLOS DANIEL'),
		lastName: capitalCadena('ANGARITA DUQUE'),
		type: 'regular',
		email: 'cangarita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15697,
		nationality: 'V'.toUpperCase(),
		cedula: 30154349,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmanrrique'.toLowerCase(),
		name: capitalCadena('DEIYER JHOJANDRY'),
		lastName: capitalCadena('MANRRIQUE ZAMBRANO'),
		type: 'regular',
		email: 'dmanrrique@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15821,
		nationality: 'V'.toUpperCase(),
		cedula: 28302551,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yavelasquez'.toLowerCase(),
		name: capitalCadena('YAREMY BETINA'),
		lastName: capitalCadena('VELASQUEZ MENDOZA'),
		type: 'regular',
		email: 'yavelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15830,
		nationality: 'V'.toUpperCase(),
		cedula: 27333456,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ffernandez'.toLowerCase(),
		name: capitalCadena('FELIPE ALEXANDER'),
		lastName: capitalCadena('FERNANDEZ BLANDIN'),
		type: 'regular',
		email: 'ffernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15840,
		nationality: 'V'.toUpperCase(),
		cedula: 20093754,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amontilla'.toLowerCase(),
		name: capitalCadena('ANDRES SAMUEL'),
		lastName: capitalCadena('MONTILLA CEDEÑO'),
		type: 'regular',
		email: 'amontilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16254,
		nationality: 'V'.toUpperCase(),
		cedula: 30513613,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luperdomo'.toLowerCase(),
		name: capitalCadena('LUIS DAVID'),
		lastName: capitalCadena('PERDOMO BRAVO'),
		type: 'regular',
		email: 'luperdomo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16261,
		nationality: 'V'.toUpperCase(),
		cedula: 31024925,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MENSAJERO INTERNO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesgonzalez'.toLowerCase(),
		name: capitalCadena('JESUS ALBERTO'),
		lastName: capitalCadena('GONZALEZ VARGAS'),
		type: 'regular',
		email: 'jesgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16432,
		nationality: 'V'.toUpperCase(),
		cedula: 30841954,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTROL Y REGISTRO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecabrera'.toLowerCase(),
		name: capitalCadena('EVA ISABEL'),
		lastName: capitalCadena('CABRERA SALAZAR'),
		type: 'regular',
		email: 'ecabrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 376,
		nationality: 'V'.toUpperCase(),
		cedula: 6249163,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eguerrero'.toLowerCase(),
		name: capitalCadena('ALMERIS EGLEE'),
		lastName: capitalCadena('GUERRERO PEREZ'),
		type: 'regular',
		email: 'eguerrero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 454,
		nationality: 'V'.toUpperCase(),
		cedula: 6114519,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fdoveri'.toLowerCase(),
		name: capitalCadena('FRANCISCO '),
		lastName: capitalCadena('REMIGIO DOVERI'),
		type: 'regular',
		email: 'fdoveri@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2858,
		nationality: 'V'.toUpperCase(),
		cedula: 5299117,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'idominguez'.toLowerCase(),
		name: capitalCadena('IVETTE DE JESUS'),
		lastName: capitalCadena('DOMINGUEZ DE MORALES'),
		type: 'regular',
		email: 'idominguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6730,
		nationality: 'V'.toUpperCase(),
		cedula: 5580240,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afagundez'.toLowerCase(),
		name: capitalCadena('ANGELICA MARIA'),
		lastName: capitalCadena('FAGUNDEZ '),
		type: 'regular',
		email: 'afagundez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6976,
		nationality: 'V'.toUpperCase(),
		cedula: 15931478,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lzerpa'.toLowerCase(),
		name: capitalCadena('LEANDRO ANTONIO'),
		lastName: capitalCadena('ZERPA SALAZAR'),
		type: 'regular',
		email: 'lzerpa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8160,
		nationality: 'V'.toUpperCase(),
		cedula: 21071353,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'prodriguez'.toLowerCase(),
		name: capitalCadena('PRADO JOSE'),
		lastName: capitalCadena('RODRIGUEZ PIÑERUA'),
		type: 'regular',
		email: 'prodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8261,
		nationality: 'V'.toUpperCase(),
		cedula: 13526637,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jhsanchez'.toLowerCase(),
		name: capitalCadena('JHONNY RAFAEL'),
		lastName: capitalCadena('SANCHEZ DA CRUZ'),
		type: 'regular',
		email: 'jhsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8342,
		nationality: 'V'.toUpperCase(),
		cedula: 11550319,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josmlopez'.toLowerCase(),
		name: capitalCadena('JOSMAN JOSUE'),
		lastName: capitalCadena('LOPEZ GAITAN'),
		type: 'regular',
		email: 'josmlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10930,
		nationality: 'V'.toUpperCase(),
		cedula: 20871421,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ydaza'.toLowerCase(),
		name: capitalCadena('YOLANDA RAFAELA'),
		lastName: capitalCadena('DAZA MADERA'),
		type: 'regular',
		email: 'ydaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11170,
		nationality: 'V'.toUpperCase(),
		cedula: 3751847,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'snacad'.toLowerCase(),
		name: capitalCadena('SIMON ALEJANDRO'),
		lastName: capitalCadena('NACAD BITTAR'),
		type: 'regular',
		email: 'snacad@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11676,
		nationality: 'V'.toUpperCase(),
		cedula: 6366599,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tgonzalez'.toLowerCase(),
		name: capitalCadena('THAYRIS NAZARETH'),
		lastName: capitalCadena('GONZALEZ TOVAR'),
		type: 'regular',
		email: 'tgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12071,
		nationality: 'V'.toUpperCase(),
		cedula: 13225432,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymorales'.toLowerCase(),
		name: capitalCadena('YARIBEL DEL VALLE'),
		lastName: capitalCadena('MORALES ESPINOZA'),
		type: 'regular',
		email: 'ymorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12403,
		nationality: 'V'.toUpperCase(),
		cedula: 27006393,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'racastillo'.toLowerCase(),
		name: capitalCadena('RAYDELI DEL CARMEN'),
		lastName: capitalCadena('CASTILLO ANGULO'),
		type: 'regular',
		email: 'racastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14607,
		nationality: 'V'.toUpperCase(),
		cedula: 13223947,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesulopez'.toLowerCase(),
		name: capitalCadena('JESUS MANUEL'),
		lastName: capitalCadena('LOPEZ FIGUERA'),
		type: 'regular',
		email: 'jesulopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14625,
		nationality: 'V'.toUpperCase(),
		cedula: 30719895,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agarcia'.toLowerCase(),
		name: capitalCadena('ADRIANA PATRICIA'),
		lastName: capitalCadena('GARCIA TINEO'),
		type: 'regular',
		email: 'agarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14671,
		nationality: 'V'.toUpperCase(),
		cedula: 26217150,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoncada'.toLowerCase(),
		name: capitalCadena('JORGE ALEJANDRO'),
		lastName: capitalCadena('MONCADA DURAN'),
		type: 'regular',
		email: 'jmoncada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14684,
		nationality: 'V'.toUpperCase(),
		cedula: 27954777,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'madreyes'.toLowerCase(),
		name: capitalCadena('MADELEIND YULETTSY'),
		lastName: capitalCadena('REYES TERAN'),
		type: 'regular',
		email: 'madreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14731,
		nationality: 'V'.toUpperCase(),
		cedula: 20329590,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oleon'.toLowerCase(),
		name: capitalCadena('ORIANA ANDREINA'),
		lastName: capitalCadena('LEON ZURITA'),
		type: 'regular',
		email: 'oleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15011,
		nationality: 'V'.toUpperCase(),
		cedula: 28006127,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'raltuna'.toLowerCase(),
		name: capitalCadena('RUT EMPERATRIZ'),
		lastName: capitalCadena('ALTUNA BARRIOS'),
		type: 'regular',
		email: 'raltuna@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15012,
		nationality: 'V'.toUpperCase(),
		cedula: 26921703,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbarcenas'.toLowerCase(),
		name: capitalCadena('JOSMAR VICENTE'),
		lastName: capitalCadena('BARCENAS LAYA'),
		type: 'regular',
		email: 'jbarcenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15078,
		nationality: 'V'.toUpperCase(),
		cedula: 18221531,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eserpa'.toLowerCase(),
		name: capitalCadena('EDUARDO ALFONSO'),
		lastName: capitalCadena('SERPA JIMENEZ'),
		type: 'regular',
		email: 'eserpa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15106,
		nationality: 'V'.toUpperCase(),
		cedula: 19998673,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jalinares'.toLowerCase(),
		name: capitalCadena('JACKLYN DAMARIS'),
		lastName: capitalCadena('LINARES DELGADO'),
		type: 'regular',
		email: 'jalinares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15653,
		nationality: 'V'.toUpperCase(),
		cedula: 17906311,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gabgonzalez'.toLowerCase(),
		name: capitalCadena('GABRIELA KARINA'),
		lastName: capitalCadena('GONZALEZ LOPEZ'),
		type: 'regular',
		email: 'gabgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15658,
		nationality: 'V'.toUpperCase(),
		cedula: 18809624,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zfilgueira'.toLowerCase(),
		name: capitalCadena('ZORAIMA DEL VALLE'),
		lastName: capitalCadena('FILGUEIRA RODRIGUEZ'),
		type: 'regular',
		email: 'zfilgueira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15884,
		nationality: 'V'.toUpperCase(),
		cedula: 11035484,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfigueroa'.toLowerCase(),
		name: capitalCadena('MAYBER MARIANA DEL VALLE'),
		lastName: capitalCadena('FIGUEROA ROMERO'),
		type: 'regular',
		email: 'mfigueroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15903,
		nationality: 'V'.toUpperCase(),
		cedula: 23695788,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'flacruz'.toLowerCase(),
		name: capitalCadena('FRANCIS NATHALIE'),
		lastName: capitalCadena('LACRUZ DE MORONTA'),
		type: 'regular',
		email: 'flacruz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15952,
		nationality: 'V'.toUpperCase(),
		cedula: 16083770,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA FORMACION Y DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cprieto'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('PRIETO RODRIGUEZ'),
		type: 'regular',
		email: 'cprieto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15960,
		nationality: 'V'.toUpperCase(),
		cedula: 22965134,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'klozada'.toLowerCase(),
		name: capitalCadena('KAREN ADRIANA'),
		lastName: capitalCadena('LOZADA DE PEREZ'),
		type: 'regular',
		email: 'klozada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16046,
		nationality: 'V'.toUpperCase(),
		cedula: 16413045,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epineda'.toLowerCase(),
		name: capitalCadena('ELIOMARA DE JESUS'),
		lastName: capitalCadena('PINEDA FERNANDEZ'),
		type: 'regular',
		email: 'epineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16065,
		nationality: 'V'.toUpperCase(),
		cedula: 15368132,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jparra'.toLowerCase(),
		name: capitalCadena('JUAN JOSE'),
		lastName: capitalCadena('PARRA '),
		type: 'regular',
		email: 'jparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16066,
		nationality: 'V'.toUpperCase(),
		cedula: 20303280,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cquerales'.toLowerCase(),
		name: capitalCadena('CAROL JOSEFINA'),
		lastName: capitalCadena('QUERALES MELENDEZ'),
		type: 'regular',
		email: 'cquerales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16068,
		nationality: 'V'.toUpperCase(),
		cedula: 13087567,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gdugarte'.toLowerCase(),
		name: capitalCadena('GREIBYS PAOLA'),
		lastName: capitalCadena('DUGARTE PAREDES'),
		type: 'regular',
		email: 'gdugarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16076,
		nationality: 'V'.toUpperCase(),
		cedula: 25873415,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sroque'.toLowerCase(),
		name: capitalCadena('SHANNON SILEYNA'),
		lastName: capitalCadena('ROQUE MADRIZ'),
		type: 'regular',
		email: 'sroque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16105,
		nationality: 'V'.toUpperCase(),
		cedula: 26104460,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nsanchez'.toLowerCase(),
		name: capitalCadena('NESTOR JOSE'),
		lastName: capitalCadena('SANCHEZ AMAYA'),
		type: 'regular',
		email: 'nsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16114,
		nationality: 'V'.toUpperCase(),
		cedula: 6060400,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PMO PLANES ESTRATÉGICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marperez'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('PEREZ MONTALVAN'),
		type: 'regular',
		email: 'marperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16180,
		nationality: 'V'.toUpperCase(),
		cedula: 27107317,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aabreu'.toLowerCase(),
		name: capitalCadena('ANDREA REBECCA'),
		lastName: capitalCadena('ABREU CONTRERAS'),
		type: 'regular',
		email: 'aabreu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16181,
		nationality: 'V'.toUpperCase(),
		cedula: 28338098,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asalina'.toLowerCase(),
		name: capitalCadena('ADRIANA '),
		lastName: capitalCadena('SALINA GONZALEZ'),
		type: 'regular',
		email: 'asalina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16284,
		nationality: 'V'.toUpperCase(),
		cedula: 17303542,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE RECURSOS HUMANOS Y CULTURA ORGANIZACIONAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'faleal'.toLowerCase(),
		name: capitalCadena('FABIAN ISAAC'),
		lastName: capitalCadena('LEAL DIEZ CANSECO'),
		type: 'regular',
		email: 'faleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16288,
		nationality: 'V'.toUpperCase(),
		cedula: 27053193,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PMO PLANES ESTRATÉGICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iortiz'.toLowerCase(),
		name: capitalCadena('INGRID '),
		lastName: capitalCadena('ORTIZ ZAPARDIEL'),
		type: 'regular',
		email: 'iortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16291,
		nationality: 'V'.toUpperCase(),
		cedula: 11943295,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS NEGOCIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'orgonzalez'.toLowerCase(),
		name: capitalCadena('ORIANA ALEJANDRA'),
		lastName: capitalCadena('GONZALEZ CORRO'),
		type: 'regular',
		email: 'orgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16349,
		nationality: 'V'.toUpperCase(),
		cedula: 25774122,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CALIDAD DE SERVICIO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF. DE MODELOS DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llovera'.toLowerCase(),
		name: capitalCadena('LUDWING MOISES'),
		lastName: capitalCadena('LOVERA HEREDIA'),
		type: 'regular',
		email: 'llovera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16384,
		nationality: 'V'.toUpperCase(),
		cedula: 30112273,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CALIDAD DE SERVICIO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nyanez'.toLowerCase(),
		name: capitalCadena('NELSON JOSE'),
		lastName: capitalCadena('YAÑEZ VASQUEZ'),
		type: 'regular',
		email: 'nyanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10927,
		nationality: 'V'.toUpperCase(),
		cedula: 4297048,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmilano'.toLowerCase(),
		name: capitalCadena('CARLOS RODOLFO'),
		lastName: capitalCadena('MILANO PEREZ'),
		type: 'regular',
		email: 'cmilano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11367,
		nationality: 'V'.toUpperCase(),
		cedula: 10481043,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edhernandez'.toLowerCase(),
		name: capitalCadena('EDY DEL VALLE'),
		lastName: capitalCadena('HERNANDEZ SALDAÑA'),
		type: 'regular',
		email: 'edhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12338,
		nationality: 'V'.toUpperCase(),
		cedula: 10470993,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hcolmenares'.toLowerCase(),
		name: capitalCadena('HECTOR MANUEL'),
		lastName: capitalCadena('PIÑANGO COLMENARES'),
		type: 'regular',
		email: 'hcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12637,
		nationality: 'V'.toUpperCase(),
		cedula: 12085704,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rangulo'.toLowerCase(),
		name: capitalCadena('RAMON ALEXIS'),
		lastName: capitalCadena('ANGULO '),
		type: 'regular',
		email: 'rangulo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15036,
		nationality: 'V'.toUpperCase(),
		cedula: 11672951,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josemrodriguez'.toLowerCase(),
		name: capitalCadena('JOSE MIGUEL'),
		lastName: capitalCadena('RODRIGUEZ SOLORZANO'),
		type: 'regular',
		email: 'josemrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15038,
		nationality: 'V'.toUpperCase(),
		cedula: 19464223,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbetancourt'.toLowerCase(),
		name: capitalCadena('JORGE LUIS'),
		lastName: capitalCadena('BETANCOURT RODRIGUEZ'),
		type: 'regular',
		email: 'jbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15251,
		nationality: 'V'.toUpperCase(),
		cedula: 17300995,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'calvins'.toLowerCase(),
		name: capitalCadena('CRISANTO RAFAEL'),
		lastName: capitalCadena('ALVINS MARTINEZ'),
		type: 'regular',
		email: 'calvins@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15392,
		nationality: 'V'.toUpperCase(),
		cedula: 6962145,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gczulewyez'.toLowerCase(),
		name: capitalCadena('GENESIS SAYYI'),
		lastName: capitalCadena('CZULEWYEZ CABRERA'),
		type: 'regular',
		email: 'gczulewyez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15607,
		nationality: 'V'.toUpperCase(),
		cedula: 29829807,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isanoja'.toLowerCase(),
		name: capitalCadena('IVAN ABRAHAM'),
		lastName: capitalCadena('SANOJA '),
		type: 'regular',
		email: 'isanoja@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15609,
		nationality: 'V'.toUpperCase(),
		cedula: 13067653,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmoros'.toLowerCase(),
		name: capitalCadena('RODOLFO JOSE'),
		lastName: capitalCadena('MOROS PARADA'),
		type: 'regular',
		email: 'rmoros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15797,
		nationality: 'V'.toUpperCase(),
		cedula: 6017137,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gjusto'.toLowerCase(),
		name: capitalCadena('GUILLERMO JOSE'),
		lastName: capitalCadena('JUSTO MANZANO'),
		type: 'regular',
		email: 'gjusto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16078,
		nationality: 'V'.toUpperCase(),
		cedula: 12640829,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rquevedo'.toLowerCase(),
		name: capitalCadena('ROSA ABELINA'),
		lastName: capitalCadena('QUEVEDO GOMEZ'),
		type: 'regular',
		email: 'rquevedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16095,
		nationality: 'V'.toUpperCase(),
		cedula: 15431923,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rperez'.toLowerCase(),
		name: capitalCadena('REINALDO JOSE'),
		lastName: capitalCadena('PEREZ '),
		type: 'regular',
		email: 'rperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16106,
		nationality: 'V'.toUpperCase(),
		cedula: 11072088,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lsanchez'.toLowerCase(),
		name: capitalCadena('LARRY ALEXIS'),
		lastName: capitalCadena('SANCHEZ RIOS'),
		type: 'regular',
		email: 'lsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16415,
		nationality: 'V'.toUpperCase(),
		cedula: 11672678,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msosa'.toLowerCase(),
		name: capitalCadena('MAYERLING DEL CARMEN'),
		lastName: capitalCadena('SOSA DÍAZ'),
		type: 'regular',
		email: 'msosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16433,
		nationality: 'V'.toUpperCase(),
		cedula: 13288701,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emarquez'.toLowerCase(),
		name: capitalCadena('EGLYS STELLA'),
		lastName: capitalCadena('MARQUEZ MOROS'),
		type: 'regular',
		email: 'emarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 354,
		nationality: 'V'.toUpperCase(),
		cedula: 10194698,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mamorales'.toLowerCase(),
		name: capitalCadena('MARGLI YELIZA'),
		lastName: capitalCadena('MORALES VARON'),
		type: 'regular',
		email: 'mamorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 485,
		nationality: 'V'.toUpperCase(),
		cedula: 9956907,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bsanchez'.toLowerCase(),
		name: capitalCadena('BELKYS COROMOTO'),
		lastName: capitalCadena('SANCHEZ VARGAS'),
		type: 'regular',
		email: 'bsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 764,
		nationality: 'V'.toUpperCase(),
		cedula: 6131701,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CARTERA DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nlopez'.toLowerCase(),
		name: capitalCadena('NILDA TERESA'),
		lastName: capitalCadena('LOPEZ DE DE SOUSA'),
		type: 'regular',
		email: 'nlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 813,
		nationality: 'V'.toUpperCase(),
		cedula: 7956630,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycastillo'.toLowerCase(),
		name: capitalCadena('YANSON DANIEL'),
		lastName: capitalCadena('CASTILLO LUJANO'),
		type: 'regular',
		email: 'ycastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1564,
		nationality: 'V'.toUpperCase(),
		cedula: 17974825,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymarquez'.toLowerCase(),
		name: capitalCadena('YOLANDA '),
		lastName: capitalCadena('MARQUEZ DE CASTILLO'),
		type: 'regular',
		email: 'ymarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1893,
		nationality: 'V'.toUpperCase(),
		cedula: 6521734,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alarroyo'.toLowerCase(),
		name: capitalCadena('ALVARO ALFONSO'),
		lastName: capitalCadena('ARROYO GOMEZ'),
		type: 'regular',
		email: 'alarroyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2135,
		nationality: 'V'.toUpperCase(),
		cedula: 6558514,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vchitgian'.toLowerCase(),
		name: capitalCadena('VERONICA '),
		lastName: capitalCadena('CHITGIAN ACEVEDO'),
		type: 'regular',
		email: 'vchitgian@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2207,
		nationality: 'V'.toUpperCase(),
		cedula: 11733546,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arpena'.toLowerCase(),
		name: capitalCadena('ARGENIS EDUARDO'),
		lastName: capitalCadena('PEÑA SALAZAR'),
		type: 'regular',
		email: 'arpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2386,
		nationality: 'V'.toUpperCase(),
		cedula: 6130075,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lameza'.toLowerCase(),
		name: capitalCadena('LAURA ANDREINA'),
		lastName: capitalCadena('MEZA PEREZ'),
		type: 'regular',
		email: 'lameza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4125,
		nationality: 'V'.toUpperCase(),
		cedula: 15928984,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'flopez'.toLowerCase(),
		name: capitalCadena('FRANCIS ALEXANDRA'),
		lastName: capitalCadena('LOPEZ NIÑO'),
		type: 'regular',
		email: 'flopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4948,
		nationality: 'V'.toUpperCase(),
		cedula: 11166806,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eangel'.toLowerCase(),
		name: capitalCadena('ELIZABETH '),
		lastName: capitalCadena('ANGEL DE ARIAS'),
		type: 'regular',
		email: 'eangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6617,
		nationality: 'V'.toUpperCase(),
		cedula: 10349540,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CARTERA DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yumarcano'.toLowerCase(),
		name: capitalCadena('YURLIN GEORGET'),
		lastName: capitalCadena('MARCANO SANCHEZ'),
		type: 'regular',
		email: 'yumarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7010,
		nationality: 'V'.toUpperCase(),
		cedula: 10798772,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mamalave'.toLowerCase(),
		name: capitalCadena('MARIA EUGENIA'),
		lastName: capitalCadena('MALAVE GONZALEZ'),
		type: 'regular',
		email: 'mamalave@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8031,
		nationality: 'V'.toUpperCase(),
		cedula: 14909643,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jnieto'.toLowerCase(),
		name: capitalCadena('JESÚS HUMBERTO'),
		lastName: capitalCadena('NIETO PEREZ'),
		type: 'regular',
		email: 'jnieto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8511,
		nationality: 'V'.toUpperCase(),
		cedula: 17077672,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ridiaz'.toLowerCase(),
		name: capitalCadena('RICHARD ANTONIO'),
		lastName: capitalCadena('DIAZ RAMOS'),
		type: 'regular',
		email: 'ridiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9170,
		nationality: 'V'.toUpperCase(),
		cedula: 23628738,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'scastillo'.toLowerCase(),
		name: capitalCadena('SILVIA CAROLINA'),
		lastName: capitalCadena('CASTILLO GONZALEZ'),
		type: 'regular',
		email: 'scastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10170,
		nationality: 'V'.toUpperCase(),
		cedula: 6214128,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GESTOR DE COBRANZAS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pmolina'.toLowerCase(),
		name: capitalCadena('PATRICIA BEATRIZ'),
		lastName: capitalCadena('MOLINA '),
		type: 'regular',
		email: 'pmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11075,
		nationality: 'V'.toUpperCase(),
		cedula: 14300592,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eulopez'.toLowerCase(),
		name: capitalCadena('EUNICE STEFANIA'),
		lastName: capitalCadena('LOPEZ MONTILLA'),
		type: 'regular',
		email: 'eulopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11208,
		nationality: 'V'.toUpperCase(),
		cedula: 27200045,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'facosta'.toLowerCase(),
		name: capitalCadena('FELIX JOSE'),
		lastName: capitalCadena('ACOSTA RODRIGUEZ'),
		type: 'regular',
		email: 'facosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11210,
		nationality: 'V'.toUpperCase(),
		cedula: 23943805,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asdiaz'.toLowerCase(),
		name: capitalCadena('ASTRID CAROLINA'),
		lastName: capitalCadena('DIAZ PRADA'),
		type: 'regular',
		email: 'asdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12253,
		nationality: 'V'.toUpperCase(),
		cedula: 21116581,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'evserrano'.toLowerCase(),
		name: capitalCadena('EVELIN DEL VALLE'),
		lastName: capitalCadena('SERRANO MUÑOZ'),
		type: 'regular',
		email: 'evserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14277,
		nationality: 'V'.toUpperCase(),
		cedula: 10800689,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CREDITOS COMERCIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nfinol'.toLowerCase(),
		name: capitalCadena('NAIROBIS JOSEFINA'),
		lastName: capitalCadena('FINOL ROMERO'),
		type: 'regular',
		email: 'nfinol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15836,
		nationality: 'V'.toUpperCase(),
		cedula: 14453031,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fralopez'.toLowerCase(),
		name: capitalCadena('FRANCISCO RAFAEL'),
		lastName: capitalCadena('LOPEZ LEAL'),
		type: 'regular',
		email: 'fralopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15838,
		nationality: 'V'.toUpperCase(),
		cedula: 14646308,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kgalanton'.toLowerCase(),
		name: capitalCadena('KLEYBER DAVID'),
		lastName: capitalCadena('GALANTON SANCHEZ'),
		type: 'regular',
		email: 'kgalanton@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15912,
		nationality: 'V'.toUpperCase(),
		cedula: 27103556,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dwtorres'.toLowerCase(),
		name: capitalCadena('DWIGTH DAVID'),
		lastName: capitalCadena('TORRES TORRES'),
		type: 'regular',
		email: 'dwtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15959,
		nationality: 'V'.toUpperCase(),
		cedula: 23662057,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fgomez'.toLowerCase(),
		name: capitalCadena('FABIOLA ELISA'),
		lastName: capitalCadena('GOMEZ HUERFANO'),
		type: 'regular',
		email: 'fgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16028,
		nationality: 'V'.toUpperCase(),
		cedula: 19932322,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nramirez'.toLowerCase(),
		name: capitalCadena('NEIMAR '),
		lastName: capitalCadena('RAMIREZ TORREALBA'),
		type: 'regular',
		email: 'nramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16331,
		nationality: 'V'.toUpperCase(),
		cedula: 18894777,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DEL RIESGO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ANÁLISIS DE CRÉDITO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmartinez'.toLowerCase(),
		name: capitalCadena('KATIUSCA DEL VALLE'),
		lastName: capitalCadena('MARTINEZ TOVAR'),
		type: 'regular',
		email: 'kmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7853,
		nationality: 'V'.toUpperCase(),
		cedula: 18140290,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SOPORTE VIP']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lurbina'.toLowerCase(),
		name: capitalCadena('LUIS GILBERTO'),
		lastName: capitalCadena('URBINA BASTIDAS'),
		type: 'regular',
		email: 'lurbina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8720,
		nationality: 'V'.toUpperCase(),
		cedula: 6225648,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mguilarte'.toLowerCase(),
		name: capitalCadena('MAIKEL JAVIER'),
		lastName: capitalCadena('GUILARTE ESPAÑA'),
		type: 'regular',
		email: 'mguilarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10172,
		nationality: 'V'.toUpperCase(),
		cedula: 19209242,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cperez'.toLowerCase(),
		name: capitalCadena('CARLOS RAMON'),
		lastName: capitalCadena('PEREZ SULBARAN'),
		type: 'regular',
		email: 'cperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 181,
		nationality: 'V'.toUpperCase(),
		cedula: 6895250,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmedina'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('MEDINA '),
		type: 'regular',
		email: 'jmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 996,
		nationality: 'V'.toUpperCase(),
		cedula: 9528520,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgodoy'.toLowerCase(),
		name: capitalCadena('CARMEN YELEN'),
		lastName: capitalCadena('GODOY GRATEROL'),
		type: 'regular',
		email: 'cgodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1176,
		nationality: 'V'.toUpperCase(),
		cedula: 10867908,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yblanco'.toLowerCase(),
		name: capitalCadena('YISSI YUSBEL'),
		lastName: capitalCadena('BLANCO HERDE'),
		type: 'regular',
		email: 'yblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1429,
		nationality: 'V'.toUpperCase(),
		cedula: 11196846,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tbriceno'.toLowerCase(),
		name: capitalCadena('THAIS KATHERINE'),
		lastName: capitalCadena('BRICEÑO ACOSTA'),
		type: 'regular',
		email: 'tbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1672,
		nationality: 'V'.toUpperCase(),
		cedula: 11166446,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ricramirez'.toLowerCase(),
		name: capitalCadena('RICHARD ALEXANDER'),
		lastName: capitalCadena('RAMIREZ RIVERO'),
		type: 'regular',
		email: 'ricramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1993,
		nationality: 'V'.toUpperCase(),
		cedula: 10823828,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cablanco'.toLowerCase(),
		name: capitalCadena('CARMEN ELENA'),
		lastName: capitalCadena('BLANCO TORRES'),
		type: 'regular',
		email: 'cablanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2318,
		nationality: 'V'.toUpperCase(),
		cedula: 6901042,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncarrasquel'.toLowerCase(),
		name: capitalCadena('NAY YADALYS'),
		lastName: capitalCadena('CARRASQUEL MARTINEZ'),
		type: 'regular',
		email: 'ncarrasquel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2663,
		nationality: 'V'.toUpperCase(),
		cedula: 12688610,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edefreitas'.toLowerCase(),
		name: capitalCadena('ELIZABETH '),
		lastName: capitalCadena('DE FREITAS DE SOUSA'),
		type: 'regular',
		email: 'edefreitas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2861,
		nationality: 'V'.toUpperCase(),
		cedula: 12761468,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ychirinos'.toLowerCase(),
		name: capitalCadena('YURI KARINA'),
		lastName: capitalCadena('CHIRINOS CALDERON'),
		type: 'regular',
		email: 'ychirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4205,
		nationality: 'V'.toUpperCase(),
		cedula: 18111100,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pperez'.toLowerCase(),
		name: capitalCadena('PATRICIA IRAIS'),
		lastName: capitalCadena('PEREZ ARGUINZONES'),
		type: 'regular',
		email: 'pperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4256,
		nationality: 'V'.toUpperCase(),
		cedula: 9957257,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apapaterra'.toLowerCase(),
		name: capitalCadena('ADRYSSELYS COROMOTO'),
		lastName: capitalCadena('PAPATERRA MARQUEZ'),
		type: 'regular',
		email: 'apapaterra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4286,
		nationality: 'V'.toUpperCase(),
		cedula: 18809081,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jusilva'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('SILVA RAMIREZ'),
		type: 'regular',
		email: 'jusilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4670,
		nationality: 'V'.toUpperCase(),
		cedula: 11673141,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ksolis'.toLowerCase(),
		name: capitalCadena('KATIUSKA YUSMARY'),
		lastName: capitalCadena('SOLIS VALERA'),
		type: 'regular',
		email: 'ksolis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5211,
		nationality: 'V'.toUpperCase(),
		cedula: 15725666,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rbello'.toLowerCase(),
		name: capitalCadena('RAFAEL ENRIQUE'),
		lastName: capitalCadena('BELLO MADRIZ'),
		type: 'regular',
		email: 'rbello@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7756,
		nationality: 'V'.toUpperCase(),
		cedula: 11991020,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nmora'.toLowerCase(),
		name: capitalCadena('NINOSKA '),
		lastName: capitalCadena('MORA RANGEL'),
		type: 'regular',
		email: 'nmora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7835,
		nationality: 'V'.toUpperCase(),
		cedula: 17719021,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aleguisamo'.toLowerCase(),
		name: capitalCadena('ANGEL GABRIEL'),
		lastName: capitalCadena('LEGUISAMO GASCON'),
		type: 'regular',
		email: 'aleguisamo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8926,
		nationality: 'V'.toUpperCase(),
		cedula: 26454843,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'equevedo'.toLowerCase(),
		name: capitalCadena('EGLIS ALEXANDER'),
		lastName: capitalCadena('QUEVEDO '),
		type: 'regular',
		email: 'equevedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9111,
		nationality: 'V'.toUpperCase(),
		cedula: 21367209,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vjoseph'.toLowerCase(),
		name: capitalCadena('VICTOR ARMANDO'),
		lastName: capitalCadena('JOSEPH CARVALLO'),
		type: 'regular',
		email: 'vjoseph@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9627,
		nationality: 'V'.toUpperCase(),
		cedula: 12174564,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dgonzalez'.toLowerCase(),
		name: capitalCadena('DAYANA JOSEFINA'),
		lastName: capitalCadena('GONZALEZ CAVANIER'),
		type: 'regular',
		email: 'dgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10898,
		nationality: 'V'.toUpperCase(),
		cedula: 13070792,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrojas'.toLowerCase(),
		name: capitalCadena('LUIS EDUARDO'),
		lastName: capitalCadena('ROJAS PEÑA'),
		type: 'regular',
		email: 'lrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11140,
		nationality: 'V'.toUpperCase(),
		cedula: 18942670,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jumendoza'.toLowerCase(),
		name: capitalCadena('JUAN LUIS'),
		lastName: capitalCadena('MENDOZA VILLEGAS'),
		type: 'regular',
		email: 'jumendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11213,
		nationality: 'V'.toUpperCase(),
		cedula: 10515140,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbrinez'.toLowerCase(),
		name: capitalCadena('JONATHAN JOSE'),
		lastName: capitalCadena('BRIÑEZ ORTEGA'),
		type: 'regular',
		email: 'jbrinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11494,
		nationality: 'V'.toUpperCase(),
		cedula: 29533179,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'largonzalez'.toLowerCase(),
		name: capitalCadena('LARRY HASSAN'),
		lastName: capitalCadena('GONZALEZ PALMA'),
		type: 'regular',
		email: 'largonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11558,
		nationality: 'V'.toUpperCase(),
		cedula: 10542689,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dangarita'.toLowerCase(),
		name: capitalCadena('DANIELA CAROLINA'),
		lastName: capitalCadena('ANGARITA QUINTERO'),
		type: 'regular',
		email: 'dangarita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12132,
		nationality: 'V'.toUpperCase(),
		cedula: 25872312,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'milucena'.toLowerCase(),
		name: capitalCadena('MIGUEL ANGEL'),
		lastName: capitalCadena('LUCENA CASTELLANOS'),
		type: 'regular',
		email: 'milucena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12184,
		nationality: 'V'.toUpperCase(),
		cedula: 10488138,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jferrer'.toLowerCase(),
		name: capitalCadena('JEFFERSON OSCAR'),
		lastName: capitalCadena('FERRER MENDOZA'),
		type: 'regular',
		email: 'jferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12730,
		nationality: 'V'.toUpperCase(),
		cedula: 12500968,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jemejias'.toLowerCase(),
		name: capitalCadena('JESSICA '),
		lastName: capitalCadena('MEJIAS COLMENARES'),
		type: 'regular',
		email: 'jemejias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12731,
		nationality: 'V'.toUpperCase(),
		cedula: 15723738,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aescalante'.toLowerCase(),
		name: capitalCadena('ANGEL JONATHAN'),
		lastName: capitalCadena('ESCALANTE MARTINEZ'),
		type: 'regular',
		email: 'aescalante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12745,
		nationality: 'V'.toUpperCase(),
		cedula: 10812845,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'smerlo'.toLowerCase(),
		name: capitalCadena('SARA DANIELA'),
		lastName: capitalCadena('MERLO MOGOLLON'),
		type: 'regular',
		email: 'smerlo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12863,
		nationality: 'V'.toUpperCase(),
		cedula: 12358860,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pescobar'.toLowerCase(),
		name: capitalCadena('PETER JOSE'),
		lastName: capitalCadena('ESCOBAR LOPEZ'),
		type: 'regular',
		email: 'pescobar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13199,
		nationality: 'V'.toUpperCase(),
		cedula: 6368285,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dalcala'.toLowerCase(),
		name: capitalCadena('DAVID MANUEL'),
		lastName: capitalCadena('ALCALA LOPEZ'),
		type: 'regular',
		email: 'dalcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13263,
		nationality: 'V'.toUpperCase(),
		cedula: 9289079,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbustamante'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('BUSTAMANTE PERNIA'),
		type: 'regular',
		email: 'jbustamante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13295,
		nationality: 'V'.toUpperCase(),
		cedula: 9126936,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'grodriguez'.toLowerCase(),
		name: capitalCadena('GRACIELA MARGARITA'),
		lastName: capitalCadena('RODRIGUEZ OJEDA'),
		type: 'regular',
		email: 'grodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13300,
		nationality: 'V'.toUpperCase(),
		cedula: 12293423,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA EMISIÓN Y DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbeltran'.toLowerCase(),
		name: capitalCadena('JOSE ERNESTO'),
		lastName: capitalCadena('BELTRAN DELGADO'),
		type: 'regular',
		email: 'jbeltran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13307,
		nationality: 'V'.toUpperCase(),
		cedula: 6261933,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frey'.toLowerCase(),
		name: capitalCadena('FLORANGEL '),
		lastName: capitalCadena('REY SERRANO'),
		type: 'regular',
		email: 'frey@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13376,
		nationality: 'V'.toUpperCase(),
		cedula: 6289251,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daraque'.toLowerCase(),
		name: capitalCadena('DARWIN ANTONIO'),
		lastName: capitalCadena('ARAQUE RAMIREZ'),
		type: 'regular',
		email: 'daraque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13412,
		nationality: 'V'.toUpperCase(),
		cedula: 13545848,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'derodriguez'.toLowerCase(),
		name: capitalCadena('DELMA KIMBERLEY'),
		lastName: capitalCadena('RODRIGUEZ CAPACHO'),
		type: 'regular',
		email: 'derodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13484,
		nationality: 'V'.toUpperCase(),
		cedula: 14471627,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fviur'.toLowerCase(),
		name: capitalCadena('FRANK ANTONIO'),
		lastName: capitalCadena('VIUR DIAZ'),
		type: 'regular',
		email: 'fviur@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13660,
		nationality: 'V'.toUpperCase(),
		cedula: 10526919,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE TESORERÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE CUSTODIA Y OPERACIONES CAMBIARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epacheco'.toLowerCase(),
		name: capitalCadena('EDELFRY GUISETH'),
		lastName: capitalCadena('PACHECO MOURESUT'),
		type: 'regular',
		email: 'epacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14171,
		nationality: 'V'.toUpperCase(),
		cedula: 18134922,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anarroyo'.toLowerCase(),
		name: capitalCadena('ANA GRACIELA'),
		lastName: capitalCadena('ARROYO DE CLARO'),
		type: 'regular',
		email: 'anarroyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14280,
		nationality: 'V'.toUpperCase(),
		cedula: 11197346,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edreyes'.toLowerCase(),
		name: capitalCadena('EDUARDO RAFAEL'),
		lastName: capitalCadena('REYES TORRES'),
		type: 'regular',
		email: 'edreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16213,
		nationality: 'V'.toUpperCase(),
		cedula: 19204222,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvergara'.toLowerCase(),
		name: capitalCadena('YELISMAR DEL CARMEN'),
		lastName: capitalCadena('VERGARA SOTO'),
		type: 'regular',
		email: 'yvergara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16407,
		nationality: 'V'.toUpperCase(),
		cedula: 17692926,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'casalazar'.toLowerCase(),
		name: capitalCadena('CARMEN JOSEFINA'),
		lastName: capitalCadena('SALAZAR ROSAS'),
		type: 'regular',
		email: 'casalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12319,
		nationality: 'V'.toUpperCase(),
		cedula: 11208846,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kreyes'.toLowerCase(),
		name: capitalCadena('KATHERYNE TERESA'),
		lastName: capitalCadena('REYES DIAZ'),
		type: 'regular',
		email: 'kreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12368,
		nationality: 'V'.toUpperCase(),
		cedula: 11309069,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vpalencia'.toLowerCase(),
		name: capitalCadena('VIVIANA ALEJANDRA'),
		lastName: capitalCadena('PALENCIA PRATO'),
		type: 'regular',
		email: 'vpalencia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12447,
		nationality: 'V'.toUpperCase(),
		cedula: 24592259,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dpontes'.toLowerCase(),
		name: capitalCadena('DESIREE '),
		lastName: capitalCadena('PONTES TEIXEIRA'),
		type: 'regular',
		email: 'dpontes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12587,
		nationality: 'V'.toUpperCase(),
		cedula: 17962482,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amoreno'.toLowerCase(),
		name: capitalCadena('ANA ELISA'),
		lastName: capitalCadena('MORENO CHACON'),
		type: 'regular',
		email: 'amoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12734,
		nationality: 'V'.toUpperCase(),
		cedula: 11030046,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cvillalobos'.toLowerCase(),
		name: capitalCadena('CARLA FABIOLA'),
		lastName: capitalCadena('VILLALOBOS BALZAN'),
		type: 'regular',
		email: 'cvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12936,
		nationality: 'V'.toUpperCase(),
		cedula: 19312143,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'armolinares'.toLowerCase(),
		name: capitalCadena('ARNALDO PABLO'),
		lastName: capitalCadena('MOLINARES SANCHEZ'),
		type: 'regular',
		email: 'armolinares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13287,
		nationality: 'V'.toUpperCase(),
		cedula: 7238647,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecardona'.toLowerCase(),
		name: capitalCadena('EVYLA DENISSE'),
		lastName: capitalCadena('CARDONA ROMERO'),
		type: 'regular',
		email: 'ecardona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13410,
		nationality: 'V'.toUpperCase(),
		cedula: 6928650,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yerojas'.toLowerCase(),
		name: capitalCadena('YENNY COROMOTO'),
		lastName: capitalCadena('ROJAS GARCIA'),
		type: 'regular',
		email: 'yerojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13667,
		nationality: 'V'.toUpperCase(),
		cedula: 11033947,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mleon'.toLowerCase(),
		name: capitalCadena('MADELIN '),
		lastName: capitalCadena('LEON MATA'),
		type: 'regular',
		email: 'mleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14503,
		nationality: 'V'.toUpperCase(),
		cedula: 12417156,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marisanchez'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('SANCHEZ PULIDO'),
		type: 'regular',
		email: 'marisanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14890,
		nationality: 'V'.toUpperCase(),
		cedula: 10796752,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'csalas'.toLowerCase(),
		name: capitalCadena('CLAUDIA PATRICIA'),
		lastName: capitalCadena('SALAS BELLORIN'),
		type: 'regular',
		email: 'csalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15387,
		nationality: 'V'.toUpperCase(),
		cedula: 10870646,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maescalante'.toLowerCase(),
		name: capitalCadena('MAYBELENA DEL CARMEN'),
		lastName: capitalCadena('ESCALANTE GARCIA'),
		type: 'regular',
		email: 'maescalante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15524,
		nationality: 'V'.toUpperCase(),
		cedula: 6340098,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mirodriguez'.toLowerCase(),
		name: capitalCadena('MIRLE ZULAY'),
		lastName: capitalCadena('RODRIGUEZ PEREZ'),
		type: 'regular',
		email: 'mirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15539,
		nationality: 'V'.toUpperCase(),
		cedula: 9415631,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vramos'.toLowerCase(),
		name: capitalCadena('VALERIA CAROLINA'),
		lastName: capitalCadena('RAMOS RAMOS'),
		type: 'regular',
		email: 'vramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16110,
		nationality: 'V'.toUpperCase(),
		cedula: 26180340,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASEGURAMIENTO NORMATIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL DE CRÉDITOS, PRODUCTOS Y SERV.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wangulo'.toLowerCase(),
		name: capitalCadena('WILMAN JOSE'),
		lastName: capitalCadena('ANGULO MARTINEZ'),
		type: 'regular',
		email: 'wangulo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1103,
		nationality: 'V'.toUpperCase(),
		cedula: 11550830,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pyepez'.toLowerCase(),
		name: capitalCadena('PASTOR HIGINIO'),
		lastName: capitalCadena('YEPEZ DELIS'),
		type: 'regular',
		email: 'pyepez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1421,
		nationality: 'V'.toUpperCase(),
		cedula: 5892970,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cyanez'.toLowerCase(),
		name: capitalCadena('CARMEN ISABEL'),
		lastName: capitalCadena('YANEZ PARADAS'),
		type: 'regular',
		email: 'cyanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1621,
		nationality: 'V'.toUpperCase(),
		cedula: 11488897,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dlarene'.toLowerCase(),
		name: capitalCadena('DIRTA LARENE'),
		lastName: capitalCadena('LEDO '),
		type: 'regular',
		email: 'dlarene@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1712,
		nationality: 'V'.toUpperCase(),
		cedula: 12046058,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cvelandia'.toLowerCase(),
		name: capitalCadena('CARMEN TERESA'),
		lastName: capitalCadena('VELANDIA USECHE'),
		type: 'regular',
		email: 'cvelandia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1846,
		nationality: 'V'.toUpperCase(),
		cedula: 10480193,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mguere'.toLowerCase(),
		name: capitalCadena('MAIRA ALEJANDRA'),
		lastName: capitalCadena('GUERE UGA'),
		type: 'regular',
		email: 'mguere@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2035,
		nationality: 'V'.toUpperCase(),
		cedula: 14019108,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'egcontreras'.toLowerCase(),
		name: capitalCadena('EGLEE YAMILET'),
		lastName: capitalCadena('CONTRERAS ROSALES'),
		type: 'regular',
		email: 'egcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4426,
		nationality: 'V'.toUpperCase(),
		cedula: 15099160,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kcordero'.toLowerCase(),
		name: capitalCadena('KARY NAYBELI'),
		lastName: capitalCadena('CORDERO HERRERA'),
		type: 'regular',
		email: 'kcordero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4566,
		nationality: 'V'.toUpperCase(),
		cedula: 12375959,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zmarron'.toLowerCase(),
		name: capitalCadena('ZAIDA EMILIA'),
		lastName: capitalCadena('MARRON SIERRA'),
		type: 'regular',
		email: 'zmarron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4889,
		nationality: 'V'.toUpperCase(),
		cedula: 8925166,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmora'.toLowerCase(),
		name: capitalCadena('DAYLI CATHERINE'),
		lastName: capitalCadena('MORA MENDOZA'),
		type: 'regular',
		email: 'dmora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11115,
		nationality: 'V'.toUpperCase(),
		cedula: 26915622,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA MERCADEO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eterraza'.toLowerCase(),
		name: capitalCadena('ESTEFANIA DEL CARMEN'),
		lastName: capitalCadena('TERRAZA ZAMBRANO'),
		type: 'regular',
		email: 'eterraza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11370,
		nationality: 'V'.toUpperCase(),
		cedula: 20826321,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alperez'.toLowerCase(),
		name: capitalCadena('ALESNI YOJANDRI'),
		lastName: capitalCadena('PEREZ MEDINA'),
		type: 'regular',
		email: 'alperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11640,
		nationality: 'V'.toUpperCase(),
		cedula: 25871181,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oconde'.toLowerCase(),
		name: capitalCadena('ODACTSY SUSANA'),
		lastName: capitalCadena('CONDE BARRETO'),
		type: 'regular',
		email: 'oconde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12852,
		nationality: 'V'.toUpperCase(),
		cedula: 18492064,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cabrito'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('BRITO '),
		type: 'regular',
		email: 'cabrito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13195,
		nationality: 'V'.toUpperCase(),
		cedula: 6389368,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cagraz'.toLowerCase(),
		name: capitalCadena('CARMEN TERESA'),
		lastName: capitalCadena('AGRAZ DIAZ'),
		type: 'regular',
		email: 'cagraz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13355,
		nationality: 'V'.toUpperCase(),
		cedula: 6175059,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rramirez'.toLowerCase(),
		name: capitalCadena('RODOLFO '),
		lastName: capitalCadena('RAMIREZ BAUTISTA'),
		type: 'regular',
		email: 'rramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13380,
		nationality: 'V'.toUpperCase(),
		cedula: 10520287,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jobriceno'.toLowerCase(),
		name: capitalCadena('JOHANNA TERESA'),
		lastName: capitalCadena('BRICEÑO RODRIGUEZ'),
		type: 'regular',
		email: 'jobriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13689,
		nationality: 'V'.toUpperCase(),
		cedula: 15791050,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abonilla'.toLowerCase(),
		name: capitalCadena('ANGEL JESUS'),
		lastName: capitalCadena('BONILLA NUÑEZ'),
		type: 'regular',
		email: 'abonilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13748,
		nationality: 'V'.toUpperCase(),
		cedula: 9146969,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amendoza'.toLowerCase(),
		name: capitalCadena('ANTHONY EDUARDO'),
		lastName: capitalCadena('MENDOZA CASTILLO'),
		type: 'regular',
		email: 'amendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13977,
		nationality: 'V'.toUpperCase(),
		cedula: 23943258,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpaiva'.toLowerCase(),
		name: capitalCadena('KEVIN JOSE'),
		lastName: capitalCadena('PAIVA QUINTERO'),
		type: 'regular',
		email: 'kpaiva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13982,
		nationality: 'V'.toUpperCase(),
		cedula: 21535273,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kguillen'.toLowerCase(),
		name: capitalCadena('KATHERINE CAROLINA'),
		lastName: capitalCadena('GUILLEN CALDERA'),
		type: 'regular',
		email: 'kguillen@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14006,
		nationality: 'V'.toUpperCase(),
		cedula: 20630674,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yuzcategui'.toLowerCase(),
		name: capitalCadena('YERFISON JESUS'),
		lastName: capitalCadena('UZCATEGUI ZAMBRANO'),
		type: 'regular',
		email: 'yuzcategui@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14245,
		nationality: 'V'.toUpperCase(),
		cedula: 19465089,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joscastillo'.toLowerCase(),
		name: capitalCadena('JOSE ALBERTO'),
		lastName: capitalCadena('CASTILLO DIAZ'),
		type: 'regular',
		email: 'joscastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14317,
		nationality: 'V'.toUpperCase(),
		cedula: 27615679,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bramos'.toLowerCase(),
		name: capitalCadena('BARBARA AZTILEY'),
		lastName: capitalCadena('RAMOS ZAPATA'),
		type: 'regular',
		email: 'bramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14396,
		nationality: 'V'.toUpperCase(),
		cedula: 26956358,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dbarrios'.toLowerCase(),
		name: capitalCadena('DANIEL ARMANDO'),
		lastName: capitalCadena('BARRIOS RODRIGUEZ'),
		type: 'regular',
		email: 'dbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14415,
		nationality: 'V'.toUpperCase(),
		cedula: 12640540,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mamolina'.toLowerCase(),
		name: capitalCadena('MAX GREGORI'),
		lastName: capitalCadena('MOLINA MACHADO'),
		type: 'regular',
		email: 'mamolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14445,
		nationality: 'V'.toUpperCase(),
		cedula: 10805032,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvivas'.toLowerCase(),
		name: capitalCadena('MARIA EMILIA'),
		lastName: capitalCadena('VIVAS LIMAS'),
		type: 'regular',
		email: 'mvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14453,
		nationality: 'V'.toUpperCase(),
		cedula: 23641754,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcardenas'.toLowerCase(),
		name: capitalCadena('MABER FERNANDA'),
		lastName: capitalCadena('CARDENAS VILLARROEL'),
		type: 'regular',
		email: 'mcardenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14472,
		nationality: 'V'.toUpperCase(),
		cedula: 21102682,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yosrivas'.toLowerCase(),
		name: capitalCadena('YOSIMAR DANIELA'),
		lastName: capitalCadena('RIVAS BLANCO'),
		type: 'regular',
		email: 'yosrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14509,
		nationality: 'V'.toUpperCase(),
		cedula: 21415772,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wrico'.toLowerCase(),
		name: capitalCadena('WINDERLY OCTTAVIANI'),
		lastName: capitalCadena('RICO AGUILERA'),
		type: 'regular',
		email: 'wrico@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14653,
		nationality: 'V'.toUpperCase(),
		cedula: 27309550,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kagonzalez'.toLowerCase(),
		name: capitalCadena('KATHLEEN ALEXANDRA'),
		lastName: capitalCadena('GONZALEZ VISCAYA'),
		type: 'regular',
		email: 'kagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14729,
		nationality: 'V'.toUpperCase(),
		cedula: 25029486,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gbarreto'.toLowerCase(),
		name: capitalCadena('GLANDERLYS JOSEFINA'),
		lastName: capitalCadena('BARRETO SOTO'),
		type: 'regular',
		email: 'gbarreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14864,
		nationality: 'V'.toUpperCase(),
		cedula: 15698216,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kaochoa'.toLowerCase(),
		name: capitalCadena('KAROLAYN JOSE'),
		lastName: capitalCadena('OCHOA HERNANDEZ'),
		type: 'regular',
		email: 'kaochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15601,
		nationality: 'V'.toUpperCase(),
		cedula: 27753201,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anggutierrez'.toLowerCase(),
		name: capitalCadena('ANGELICA MERCEDES'),
		lastName: capitalCadena('GUTIERREZ QUERALES'),
		type: 'regular',
		email: 'anggutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15602,
		nationality: 'V'.toUpperCase(),
		cedula: 23944318,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gfagundez'.toLowerCase(),
		name: capitalCadena('GENESIS NATALI'),
		lastName: capitalCadena('FAGUNDEZ SERRANO'),
		type: 'regular',
		email: 'gfagundez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15775,
		nationality: 'V'.toUpperCase(),
		cedula: 24774289,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbravo'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('BRAVO RODRIGUEZ'),
		type: 'regular',
		email: 'jbravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15828,
		nationality: 'V'.toUpperCase(),
		cedula: 17719935,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'landrade'.toLowerCase(),
		name: capitalCadena('LEILA LISBETH'),
		lastName: capitalCadena('ANDRADE GUTIERREZ'),
		type: 'regular',
		email: 'landrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15832,
		nationality: 'V'.toUpperCase(),
		cedula: 15910025,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'snoriega'.toLowerCase(),
		name: capitalCadena('SAUL EDUARDO'),
		lastName: capitalCadena('NORIEGA LOBATO'),
		type: 'regular',
		email: 'snoriega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15951,
		nationality: 'V'.toUpperCase(),
		cedula: 16264611,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'btellechea'.toLowerCase(),
		name: capitalCadena('BARBARA JHOMSMERY'),
		lastName: capitalCadena('TELLECHEA VISCOSO'),
		type: 'regular',
		email: 'btellechea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16104,
		nationality: 'V'.toUpperCase(),
		cedula: 24087579,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lguerra'.toLowerCase(),
		name: capitalCadena('LAILING PATRICIA'),
		lastName: capitalCadena('GUERRA ROJAS'),
		type: 'regular',
		email: 'lguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16107,
		nationality: 'V'.toUpperCase(),
		cedula: 20960950,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ltapia'.toLowerCase(),
		name: capitalCadena('LUIS ALBERTO'),
		lastName: capitalCadena('TAPIA NUÑEZ'),
		type: 'regular',
		email: 'ltapia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16191,
		nationality: 'V'.toUpperCase(),
		cedula: 17706627,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gamarquez'.toLowerCase(),
		name: capitalCadena('GABRIEL ENRIQUE'),
		lastName: capitalCadena('MARQUEZ PRADO'),
		type: 'regular',
		email: 'gamarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16218,
		nationality: 'V'.toUpperCase(),
		cedula: 16332768,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'roperez'.toLowerCase(),
		name: capitalCadena('ROYNER JAVIER'),
		lastName: capitalCadena('PEREZ MADRIZ'),
		type: 'regular',
		email: 'roperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16256,
		nationality: 'V'.toUpperCase(),
		cedula: 19581732,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA MERCADEO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juflores'.toLowerCase(),
		name: capitalCadena('JUAN FRANCISCO'),
		lastName: capitalCadena('FLORES FONSECA'),
		type: 'regular',
		email: 'juflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16259,
		nationality: 'V'.toUpperCase(),
		cedula: 29583541,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'damelendez'.toLowerCase(),
		name: capitalCadena('DAINNY GABRIELA'),
		lastName: capitalCadena('MELENDEZ PACHECO'),
		type: 'regular',
		email: 'damelendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16262,
		nationality: 'V'.toUpperCase(),
		cedula: 30224862,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daugello'.toLowerCase(),
		name: capitalCadena('DENESIS REBECA'),
		lastName: capitalCadena('AUGELLO GARCIA'),
		type: 'regular',
		email: 'daugello@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16282,
		nationality: 'V'.toUpperCase(),
		cedula: 19163151,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sacastillo'.toLowerCase(),
		name: capitalCadena('SANDRI YULIETH'),
		lastName: capitalCadena('CASTILLO MENDEZ'),
		type: 'regular',
		email: 'sacastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16292,
		nationality: 'V'.toUpperCase(),
		cedula: 31308798,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dumbria'.toLowerCase(),
		name: capitalCadena('DIEGO ALEJANDRO'),
		lastName: capitalCadena('UMBRIA UBAN'),
		type: 'regular',
		email: 'dumbria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16308,
		nationality: 'V'.toUpperCase(),
		cedula: 23198743,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josfernandez'.toLowerCase(),
		name: capitalCadena('JOSE ANGEL'),
		lastName: capitalCadena('FERNANDEZ '),
		type: 'regular',
		email: 'josfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16347,
		nationality: 'V'.toUpperCase(),
		cedula: 27731944,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acarballo'.toLowerCase(),
		name: capitalCadena('ALEJANDRO EFRAIN'),
		lastName: capitalCadena('CARBALLO CAMACARO'),
		type: 'regular',
		email: 'acarballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16350,
		nationality: 'V'.toUpperCase(),
		cedula: 23628739,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'romayo'.toLowerCase(),
		name: capitalCadena('ROBINSON JOSE'),
		lastName: capitalCadena('MAYO MUÑOZ'),
		type: 'regular',
		email: 'romayo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16353,
		nationality: 'V'.toUpperCase(),
		cedula: 27661669,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alopez'.toLowerCase(),
		name: capitalCadena('ANDREA CAROLINA'),
		lastName: capitalCadena('LOPEZ GIMENEZ'),
		type: 'regular',
		email: 'alopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16354,
		nationality: 'V'.toUpperCase(),
		cedula: 29625016,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gduque'.toLowerCase(),
		name: capitalCadena('GABRIEL ARMANDO'),
		lastName: capitalCadena('DUQUE LEON'),
		type: 'regular',
		email: 'gduque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16382,
		nationality: 'V'.toUpperCase(),
		cedula: 29676455,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mlinan'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('LIÑAN GONZALEZ'),
		type: 'regular',
		email: 'mlinan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16383,
		nationality: 'V'.toUpperCase(),
		cedula: 14274443,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aurdaneta'.toLowerCase(),
		name: capitalCadena('ANGGELI ZARAITH'),
		lastName: capitalCadena('URDANETA MAUCO'),
		type: 'regular',
		email: 'aurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16394,
		nationality: 'V'.toUpperCase(),
		cedula: 28413972,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA MERCADEO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amtorres'.toLowerCase(),
		name: capitalCadena('AMOR MARIA'),
		lastName: capitalCadena('TORRES GONZALEZ'),
		type: 'regular',
		email: 'amtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16409,
		nationality: 'V'.toUpperCase(),
		cedula: 27908046,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA MERCADEO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bmolina'.toLowerCase(),
		name: capitalCadena('BARBARA MARIA GABRIELA'),
		lastName: capitalCadena('MOLINA CASTELLANOS'),
		type: 'regular',
		email: 'bmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16457,
		nationality: 'V'.toUpperCase(),
		cedula: 20802471,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lehernandez'.toLowerCase(),
		name: capitalCadena('LEONEL JESUS'),
		lastName: capitalCadena('HERNANDEZ GOURMEITTE'),
		type: 'regular',
		email: 'lehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16459,
		nationality: 'V'.toUpperCase(),
		cedula: 26838422,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	}
]
module.exports = { restoCuartaParte }
