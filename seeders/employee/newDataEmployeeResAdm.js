const {
	departamentoOnlyNames,
	departamentoData
} = require('./area/departamento')
const { cargoOnlyNames, cargosData } = require('./cargo/cargos')

function capitalCadena(cadena) {
	return cadena
		.toLowerCase()
		.split('. ')
		.map(text =>
			text
				.split(' ')
				.map(
					palabra =>
						palabra.charAt(0).toUpperCase() + palabra.slice(1)
				)
				.join(' ')
		)
		.join('. ')
}

const updateEmployees_Res_ADM = [
	{
		userName: 'VRAMOS'.trim().toLowerCase(),
		name: capitalCadena(' VALERIA CAROLINA'.trim()),
		lastName: capitalCadena('RAMOS RAMOS'.trim()),
		type: 'regular',
		email: 'VRAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16110,
		nationality: 'V'.toUpperCase(),
		cedula: 26180340,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arocha'.trim().toLowerCase(),
		name: capitalCadena(' AMANDA ISABEL'.trim()),
		lastName: capitalCadena('ROCHA BLANCO'.trim()),
		type: 'regular',
		email: 'arocha@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15540,
		nationality: 'V'.toUpperCase(),
		cedula: 21411438,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CVILLALOBOS'.trim().toLowerCase(),
		name: capitalCadena(' CARLA FABIOLA'.trim()),
		lastName: capitalCadena('VILLALOBOS BALZAN'.trim()),
		type: 'regular',
		email: 'CVILLALOBOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12936,
		nationality: 'V'.toUpperCase(),
		cedula: 19312143,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CONTROL INSTITUCIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMORENO'.trim().toLowerCase(),
		name: capitalCadena(' ANA ELISA'.trim()),
		lastName: capitalCadena('MORENO CHACON'.trim()),
		type: 'regular',
		email: 'AMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12734,
		nationality: 'V'.toUpperCase(),
		cedula: 11030046,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YEROJAS'.trim().toLowerCase(),
		name: capitalCadena(' YENNY COROMOTO'.trim()),
		lastName: capitalCadena('ROJAS GARCIA'.trim()),
		type: 'regular',
		email: 'YEROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13667,
		nationality: 'V'.toUpperCase(),
		cedula: 11033947,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maescalante'.trim().toLowerCase(),
		name: capitalCadena(' MAYBELENA DEL CARMEN'.trim()),
		lastName: capitalCadena('ESCALANTE GARCIA'.trim()),
		type: 'regular',
		email: 'maescalante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15524,
		nationality: 'V'.toUpperCase(),
		cedula: 6340098,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mirodriguez'.trim().toLowerCase(),
		name: capitalCadena(' MIRLE ZULAY'.trim()),
		lastName: capitalCadena('RODRIGUEZ PEREZ'.trim()),
		type: 'regular',
		email: 'mirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15539,
		nationality: 'V'.toUpperCase(),
		cedula: 9415631,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KIGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' KIMBERLYN ALEJANDRA'.trim()),
		lastName: capitalCadena('GONZALEZ PAMELA'.trim()),
		type: 'regular',
		email: 'KIGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14600,
		nationality: 'V'.toUpperCase(),
		cedula: 27254026,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YROJAS'.trim().toLowerCase(),
		name: capitalCadena(' YULEYVIC PASTORA'.trim()),
		lastName: capitalCadena('ROJAS VERA'.trim()),
		type: 'regular',
		email: 'YROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12532,
		nationality: 'V'.toUpperCase(),
		cedula: 31107438,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA JOSE'.trim()),
		lastName: capitalCadena('MARCANO REYES'.trim()),
		type: 'regular',
		email: 'MMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16345,
		nationality: 'V'.toUpperCase(),
		cedula: 29987460,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marigutierrez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA MINERVA'.trim()),
		lastName: capitalCadena('GUTIERREZ PINEDA'.trim()),
		type: 'regular',
		email: 'marigutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13201,
		nationality: 'V'.toUpperCase(),
		cedula: 6241774,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTABILIDAD TDC AMEX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvilla'.trim().toLowerCase(),
		name: capitalCadena(' MARISELA '.trim()),
		lastName: capitalCadena('VILLA MEJIA'.trim()),
		type: 'regular',
		email: 'mvilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13618,
		nationality: 'V'.toUpperCase(),
		cedula: 13158049,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvillalobos'.trim().toLowerCase(),
		name: capitalCadena(' YESIKA MARIA'.trim()),
		lastName: capitalCadena('VILLALOBOS BECERRA'.trim()),
		type: 'regular',
		email: 'yvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14394,
		nationality: 'V'.toUpperCase(),
		cedula: 16900469,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD TDC']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GFLORES'.trim().toLowerCase(),
		name: capitalCadena(' GEORGE STEEVEN'.trim()),
		lastName: capitalCadena('FLORES NARANJO'.trim()),
		type: 'regular',
		email: 'GFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12328,
		nationality: 'V'.toUpperCase(),
		cedula: 27374815,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARCOS ENRIQUE'.trim()),
		lastName: capitalCadena('SANCHEZ RUMBOS'.trim()),
		type: 'regular',
		email: 'MSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16002,
		nationality: 'V'.toUpperCase(),
		cedula: 31170299,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS DEL CARMEN'.trim()),
		lastName: capitalCadena('RIVAS PEREIRA'.trim()),
		type: 'regular',
		email: 'GRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12796,
		nationality: 'V'.toUpperCase(),
		cedula: 24215242,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' KARLA VALENTINA'.trim()),
		lastName: capitalCadena('CASTRO CAMACHO'.trim()),
		type: 'regular',
		email: 'KCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12530,
		nationality: 'V'.toUpperCase(),
		cedula: 29745240,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tindriago'.trim().toLowerCase(),
		name: capitalCadena(' THAIRUMA TIBISAY'.trim()),
		lastName: capitalCadena('INDRIAGO MESONES'.trim()),
		type: 'regular',
		email: 'tindriago@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14497,
		nationality: 'V'.toUpperCase(),
		cedula: 19734505,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'stguerra'.trim().toLowerCase(),
		name: capitalCadena(' STEPHANIE JOSEFINA'.trim()),
		lastName: capitalCadena('GUERRA INFANTE'.trim()),
		type: 'regular',
		email: 'stguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14200,
		nationality: 'V'.toUpperCase(),
		cedula: 26466914,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CANGARITA'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS DANIEL'.trim()),
		lastName: capitalCadena('ANGARITA DUQUE'.trim()),
		type: 'regular',
		email: 'CANGARITA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15697,
		nationality: 'V'.toUpperCase(),
		cedula: 30154349,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CORRESPONDENCIA CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AIARIAS'.trim().toLowerCase(),
		name: capitalCadena(' AISMAR IVANESKA'.trim()),
		lastName: capitalCadena('ARIAS VERAZA'.trim()),
		type: 'regular',
		email: 'AIARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9818,
		nationality: 'V'.toUpperCase(),
		cedula: 26454193,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LVALLES'.trim().toLowerCase(),
		name: capitalCadena(' LEODALYS CELINA'.trim()),
		lastName: capitalCadena('VALLES GUTIERREZ'.trim()),
		type: 'regular',
		email: 'LVALLES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12120,
		nationality: 'V'.toUpperCase(),
		cedula: 26574520,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wborges'.trim().toLowerCase(),
		name: capitalCadena(' WILLIAM JOSE'.trim()),
		lastName: capitalCadena('BORGES APONTE'.trim()),
		type: 'regular',
		email: 'wborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15130,
		nationality: 'V'.toUpperCase(),
		cedula: 30175522,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RHHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' RHAINY GUILLERMO'.trim()),
		lastName: capitalCadena('HERNANDEZ ALVARADO'.trim()),
		type: 'regular',
		email: 'RHHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12723,
		nationality: 'V'.toUpperCase(),
		cedula: 30227421,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACION CONTROL Y REGISTRO DE OPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmanrrique'.trim().toLowerCase(),
		name: capitalCadena(' DEIYER JHOJANDRY'.trim()),
		lastName: capitalCadena('MANRRIQUE ZAMBRANO'.trim()),
		type: 'regular',
		email: 'dmanrrique@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15821,
		nationality: 'V'.toUpperCase(),
		cedula: 28302551,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACION CONTROL Y REGISTRO DE OPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JESULOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' JESUS MANUEL'.trim()),
		lastName: capitalCadena('LOPEZ FIGUERA'.trim()),
		type: 'regular',
		email: 'JESULOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14625,
		nationality: 'V'.toUpperCase(),
		cedula: 30719895,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EGUERRERO'.trim().toLowerCase(),
		name: capitalCadena(' ALMERIS EGLEE'.trim()),
		lastName: capitalCadena('GUERRERO PEREZ'.trim()),
		type: 'regular',
		email: 'EGUERRERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 454,
		nationality: 'V'.toUpperCase(),
		cedula: 6114519,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DWTORRES'.trim().toLowerCase(),
		name: capitalCadena(' DWIGTH DAVID'.trim()),
		lastName: capitalCadena('TORRES TORRES'.trim()),
		type: 'regular',
		email: 'DWTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15959,
		nationality: 'V'.toUpperCase(),
		cedula: 23662057,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' GRACIELA MARGARITA'.trim()),
		lastName: capitalCadena('RODRIGUEZ OJEDA'.trim()),
		type: 'regular',
		email: 'GRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13300,
		nationality: 'V'.toUpperCase(),
		cedula: 12293423,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'armolinares'.trim().toLowerCase(),
		name: capitalCadena(' ARNALDO PABLO'.trim()),
		lastName: capitalCadena('MOLINARES SANCHEZ'.trim()),
		type: 'regular',
		email: 'armolinares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13287,
		nationality: 'V'.toUpperCase(),
		cedula: 7238647,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ADRIVERO'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA MARIA'.trim()),
		lastName: capitalCadena('RIVERO MORIAN'.trim()),
		type: 'regular',
		email: 'ADRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11926,
		nationality: 'V'.toUpperCase(),
		cedula: 17868055,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL CONTABLE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAVILA'.trim().toLowerCase(),
		name: capitalCadena(' MARIANELA ISABEL'.trim()),
		lastName: capitalCadena('AVILA ALIOTTI'.trim()),
		type: 'regular',
		email: 'MAVILA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4690,
		nationality: 'V'.toUpperCase(),
		cedula: 6749692,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMEJIAS'.trim().toLowerCase(),
		name: capitalCadena(' RIZZY SINAY'.trim()),
		lastName: capitalCadena('MEJIAS DIAZ'.trim()),
		type: 'regular',
		email: 'RMEJIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11653,
		nationality: 'V'.toUpperCase(),
		cedula: 17671235,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DEPARTAMENTO GESTIÓN DEL GASTO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JALINARES'.trim().toLowerCase(),
		name: capitalCadena(' JACKLYN DAMARIS'.trim()),
		lastName: capitalCadena('LINARES DELGADO'.trim()),
		type: 'regular',
		email: 'JALINARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15653,
		nationality: 'V'.toUpperCase(),
		cedula: 17906311,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN DE BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' YANSON DANIEL'.trim()),
		lastName: capitalCadena('CASTILLO LUJANO'.trim()),
		type: 'regular',
		email: 'YCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1564,
		nationality: 'V'.toUpperCase(),
		cedula: 17974825,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RIDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ANTONIO'.trim()),
		lastName: capitalCadena('DIAZ RAMOS'.trim()),
		type: 'regular',
		email: 'RIDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9170,
		nationality: 'V'.toUpperCase(),
		cedula: 23628738,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LURBINA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS GILBERTO'.trim()),
		lastName: capitalCadena('URBINA BASTIDAS'.trim()),
		type: 'regular',
		email: 'LURBINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8720,
		nationality: 'V'.toUpperCase(),
		cedula: 6225648,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MGUILARTE'.trim().toLowerCase(),
		name: capitalCadena(' MAIKEL JAVIER'.trim()),
		lastName: capitalCadena('GUILARTE ESPAÑA'.trim()),
		type: 'regular',
		email: 'MGUILARTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10172,
		nationality: 'V'.toUpperCase(),
		cedula: 19209242,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APAPATERRA'.trim().toLowerCase(),
		name: capitalCadena(' ADRYSSELYS COROMOTO'.trim()),
		lastName: capitalCadena('PAPATERRA MARQUEZ'.trim()),
		type: 'regular',
		email: 'APAPATERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4286,
		nationality: 'V'.toUpperCase(),
		cedula: 18809081,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DANGARITA'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA CAROLINA'.trim()),
		lastName: capitalCadena('ANGARITA QUINTERO'.trim()),
		type: 'regular',
		email: 'DANGARITA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12132,
		nationality: 'V'.toUpperCase(),
		cedula: 25872312,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUSTODIA TÍTULOS VALORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALEGUISAMO'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL GABRIEL'.trim()),
		lastName: capitalCadena('LEGUISAMO GASCON'.trim()),
		type: 'regular',
		email: 'ALEGUISAMO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8926,
		nationality: 'V'.toUpperCase(),
		cedula: 26454843,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' YOHENNY ALEJANDRA'.trim()),
		lastName: capitalCadena('GONZALEZ VILLAPAREDES'.trim()),
		type: 'regular',
		email: 'YOGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1020,
		nationality: 'V'.toUpperCase(),
		cedula: 13712392,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BMIJARES'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA DEL CARMEN'.trim()),
		lastName: capitalCadena('MIJARES CARTAGENA'.trim()),
		type: 'regular',
		email: 'BMIJARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12688,
		nationality: 'V'.toUpperCase(),
		cedula: 28324137,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FAGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' FABRINA JOSE'.trim()),
		lastName: capitalCadena('GARCIA ROMERO'.trim()),
		type: 'regular',
		email: 'FAGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14843,
		nationality: 'V'.toUpperCase(),
		cedula: 31477724,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TCAMACHO'.trim().toLowerCase(),
		name: capitalCadena(' TRINIDAD ISABEL'.trim()),
		lastName: capitalCadena('CAMACHO FLORES'.trim()),
		type: 'regular',
		email: 'TCAMACHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13302,
		nationality: 'V'.toUpperCase(),
		cedula: 4440089,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VSUAREZ'.trim().toLowerCase(),
		name: capitalCadena(' VICTCHELLY DEL VALLE'.trim()),
		lastName: capitalCadena('SUAREZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'VSUAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15941,
		nationality: 'V'.toUpperCase(),
		cedula: 13944750,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P.E FINANZAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IAGRO'.trim().toLowerCase(),
		name: capitalCadena(' INGRID COROMOTO'.trim()),
		lastName: capitalCadena('AGRO LARA'.trim()),
		type: 'regular',
		email: 'IAGRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1236,
		nationality: 'V'.toUpperCase(),
		cedula: 11413982,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P.E. DE BANCA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARTGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARTHA '.trim()),
		lastName: capitalCadena('GONZALEZ MARIN'.trim()),
		type: 'regular',
		email: 'MARTGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6083,
		nationality: 'V'.toUpperCase(),
		cedula: 6075206,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P.E. DE BANCA CORPORATIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABAPTISTA'.trim().toLowerCase(),
		name: capitalCadena(' ANDREA ALEJANDRA'.trim()),
		lastName: capitalCadena('BAPTISTA PEÑA'.trim()),
		type: 'regular',
		email: 'ABAPTISTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14836,
		nationality: 'V'.toUpperCase(),
		cedula: 31415719,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P.E. DESARROLLO ORGANIZACIONAL Y TRANSFORMACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' DELVALLE VIDALIA'.trim()),
		lastName: capitalCadena('LOPEZ DE MEDINA'.trim()),
		type: 'regular',
		email: 'DLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15743,
		nationality: 'V'.toUpperCase(),
		cedula: 11970289,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mzamora'.trim().toLowerCase(),
		name: capitalCadena(' MAIBE DEL CARMEN'.trim()),
		lastName: capitalCadena('ZAMORA '.trim()),
		type: 'regular',
		email: 'mzamora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13245,
		nationality: 'V'.toUpperCase(),
		cedula: 10110959,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEAHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JEANKERLIS DANIELA'.trim()),
		lastName: capitalCadena('HERNANDEZ PEÑA'.trim()),
		type: 'regular',
		email: 'JEAHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14845,
		nationality: 'V'.toUpperCase(),
		cedula: 31255813,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE EJECUTIVA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KDELVILLAR'.trim().toLowerCase(),
		name: capitalCadena(' KATIUSKA LUCILA'.trim()),
		lastName: capitalCadena('DEL VILLAR ARAUJO'.trim()),
		type: 'regular',
		email: 'KDELVILLAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11255,
		nationality: 'V'.toUpperCase(),
		cedula: 10401340,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AUDITORIA INTERNA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR INTERNO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAREYES'.trim().toLowerCase(),
		name: capitalCadena(' MARILIN MICHELLE'.trim()),
		lastName: capitalCadena('REYES ANGEL'.trim()),
		type: 'regular',
		email: 'MAREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12240,
		nationality: 'V'.toUpperCase(),
		cedula: 31785781,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCORONA'.trim().toLowerCase(),
		name: capitalCadena(' DORAILYN DARIANY'.trim()),
		lastName: capitalCadena('CORONA BELISARIO'.trim()),
		type: 'regular',
		email: 'DCORONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14526,
		nationality: 'V'.toUpperCase(),
		cedula: 26956843,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jemarcano'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ARMANDO'.trim()),
		lastName: capitalCadena('MARCANO VARGAS'.trim()),
		type: 'regular',
		email: 'jemarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14781,
		nationality: 'V'.toUpperCase(),
		cedula: 20954366,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOHRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOHAN MANUEL'.trim()),
		lastName: capitalCadena('RODRIGUEZ PERALES'.trim()),
		type: 'regular',
		email: 'JOHRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16111,
		nationality: 'V'.toUpperCase(),
		cedula: 21467197,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RRANGEL'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ALEXANDER'.trim()),
		lastName: capitalCadena('RANGEL BAUTISTA'.trim()),
		type: 'regular',
		email: 'RRANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16182,
		nationality: 'V'.toUpperCase(),
		cedula: 13066904,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NOSALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' NOHELIA MERCEDES'.trim()),
		lastName: capitalCadena('SALAZAR MEDINA'.trim()),
		type: 'regular',
		email: 'NOSALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16083,
		nationality: 'V'.toUpperCase(),
		cedula: 11166701,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marpalacios'.trim().toLowerCase(),
		name: capitalCadena(' MARIADELA '.trim()),
		lastName: capitalCadena('PALACIOS MORENO'.trim()),
		type: 'regular',
		email: 'marpalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14544,
		nationality: 'V'.toUpperCase(),
		cedula: 16563149,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCONTRERAS'.trim().toLowerCase(),
		name: capitalCadena(' GUSTAVO HIPOLITO'.trim()),
		lastName: capitalCadena('CONTRERAS GUTIERREZ'.trim()),
		type: 'regular',
		email: 'GCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16147,
		nationality: 'V'.toUpperCase(),
		cedula: 10634336,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGANDICA'.trim().toLowerCase(),
		name: capitalCadena(' JUAN CARLOS'.trim()),
		lastName: capitalCadena('GANDICA CASTILLO'.trim()),
		type: 'regular',
		email: 'JGANDICA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16148,
		nationality: 'V'.toUpperCase(),
		cedula: 13304312,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCARABALI'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS EYLIN'.trim()),
		lastName: capitalCadena('CARABALI RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'GCARABALI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14837,
		nationality: 'V'.toUpperCase(),
		cedula: 30291600,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SECRETARIA DE LA JUNTA DIRECTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE DE DIRECCION']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' CLARIBEL DEL VALLE'.trim()),
		lastName: capitalCadena('BLANCO FREITES'.trim()),
		type: 'regular',
		email: 'CBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12246,
		nationality: 'V'.toUpperCase(),
		cedula: 20712827,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCANDA'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS JOSE'.trim()),
		lastName: capitalCadena('CANDA PALACIOS'.trim()),
		type: 'regular',
		email: 'CCANDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 412,
		nationality: 'V'.toUpperCase(),
		cedula: 4815160,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RCARMONA'.trim().toLowerCase(),
		name: capitalCadena(' ESTEBAN RENE'.trim()),
		lastName: capitalCadena('CARMONA SALAZAR'.trim()),
		type: 'regular',
		email: 'RCARMONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1015,
		nationality: 'V'.toUpperCase(),
		cedula: 5973879,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eliassotillet'.trim().toLowerCase(),
		name: capitalCadena(' ELIAS RAFAEL'.trim()),
		lastName: capitalCadena('SOTILLET BARRETO'.trim()),
		type: 'regular',
		email: 'eliassotillet@gmail.com'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6820,
		nationality: 'V'.toUpperCase(),
		cedula: 14994771,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALLOVERA'.trim().toLowerCase(),
		name: capitalCadena(' AMADO JOSE'.trim()),
		lastName: capitalCadena('LLOVERA CASTELLANO'.trim()),
		type: 'regular',
		email: 'ALLOVERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14229,
		nationality: 'V'.toUpperCase(),
		cedula: 5228879,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TZORRILLA'.trim().toLowerCase(),
		name: capitalCadena(' TOMAS '.trim()),
		lastName: capitalCadena('ZORRILLA VILLEGAS'.trim()),
		type: 'regular',
		email: 'TZORRILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9533,
		nationality: 'V'.toUpperCase(),
		cedula: 4215525,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANBRITO'.trim().toLowerCase(),
		name: capitalCadena(' ANTONIO JOSE'.trim()),
		lastName: capitalCadena('BRITO FERNANDEZ'.trim()),
		type: 'regular',
		email: 'ANBRITO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13019,
		nationality: 'V'.toUpperCase(),
		cedula: 12112025,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LLINARES'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EDUARDO'.trim()),
		lastName: capitalCadena('LINAREZ GAMEZ'.trim()),
		type: 'regular',
		email: 'LLINARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2296,
		nationality: 'V'.toUpperCase(),
		cedula: 12692060,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JLOPEZCARMONA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('LOPEZ CARMONA'.trim()),
		type: 'regular',
		email: 'JLOPEZCARMONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8510,
		nationality: 'V'.toUpperCase(),
		cedula: 5565496,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RIGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ALEXANDER'.trim()),
		lastName: capitalCadena('GUTIERREZ SUAREZ'.trim()),
		type: 'regular',
		email: 'RIGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12739,
		nationality: 'V'.toUpperCase(),
		cedula: 10866055,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANAORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' ANA ISABEL'.trim()),
		lastName: capitalCadena('ORTIZ MOTA'.trim()),
		type: 'regular',
		email: 'ANAORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12528,
		nationality: 'V'.toUpperCase(),
		cedula: 13311444,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE RIESGO DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARLGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' MARLYN DEL VALLE'.trim()),
		lastName: capitalCadena('GARCIA SAAVEDRA'.trim()),
		type: 'regular',
		email: 'MARLGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15386,
		nationality: 'V'.toUpperCase(),
		cedula: 15207958,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUMPLIMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FARREAZA'.trim().toLowerCase(),
		name: capitalCadena(' FABIANNE DEL CARMEN'.trim()),
		lastName: capitalCadena('ARREAZA GUTIERREZ'.trim()),
		type: 'regular',
		email: 'FARREAZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12900,
		nationality: 'V'.toUpperCase(),
		cedula: 20229304,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KJAIMES'.trim().toLowerCase(),
		name: capitalCadena(' KAREN ANYELINA'.trim()),
		lastName: capitalCadena('JAIMES OROPEZA'.trim()),
		type: 'regular',
		email: 'KJAIMES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14617,
		nationality: 'V'.toUpperCase(),
		cedula: 21438190,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APACHANO'.trim().toLowerCase(),
		name: capitalCadena(' ANA KARINA'.trim()),
		lastName: capitalCadena('PACHANO FERNANDEZ'.trim()),
		type: 'regular',
		email: 'APACHANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14583,
		nationality: 'V'.toUpperCase(),
		cedula: 20872121,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AVEGA'.trim().toLowerCase(),
		name: capitalCadena(' AINEISY NATHALY'.trim()),
		lastName: capitalCadena('VEGA PEREZ'.trim()),
		type: 'regular',
		email: 'AVEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12736,
		nationality: 'V'.toUpperCase(),
		cedula: 18277502,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ffuentes'.trim().toLowerCase(),
		name: capitalCadena(' FLORANGEL DUBRASKA'.trim()),
		lastName: capitalCadena('FUENTES RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'ffuentes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15359,
		nationality: 'V'.toUpperCase(),
		cedula: 13288393,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APEREZ'.trim().toLowerCase(),
		name: capitalCadena(' ASTRID JOPSANA'.trim()),
		lastName: capitalCadena('PEREZ BERMUDEZ'.trim()),
		type: 'regular',
		email: 'APEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12524,
		nationality: 'V'.toUpperCase(),
		cedula: 24311933,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ATENCIÓN AL ACCIONISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LELOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' LEXAHIRA COROMOTO'.trim()),
		lastName: capitalCadena('LOPEZ PEREZ'.trim()),
		type: 'regular',
		email: 'LELOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16290,
		nationality: 'V'.toUpperCase(),
		cedula: 15577684,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIHENRIQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MIREYA INOCENCIA'.trim()),
		lastName: capitalCadena('HENRIQUEZ RIVERO'.trim()),
		type: 'regular',
		email: 'MIHENRIQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14429,
		nationality: 'V'.toUpperCase(),
		cedula: 9415871,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jparada'.trim().toLowerCase(),
		name: capitalCadena(' JULIO ANTONIO'.trim()),
		lastName: capitalCadena('PARADA PAREDES'.trim()),
		type: 'regular',
		email: 'jparada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14615,
		nationality: 'V'.toUpperCase(),
		cedula: 18994738,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COMPRAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'phurtado'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO PABLO'.trim()),
		lastName: capitalCadena('HURTADO BRITO'.trim()),
		type: 'regular',
		email: 'phurtado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14749,
		nationality: 'V'.toUpperCase(),
		cedula: 14774279,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. GESTIÓN Y TRASLADO DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FEGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' FERNANDA ISABEL'.trim()),
		lastName: capitalCadena('GONZALEZ LOVERA'.trim()),
		type: 'regular',
		email: 'FEGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10007,
		nationality: 'V'.toUpperCase(),
		cedula: 16224494,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CARTERA DE INVERSIONES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acarrasquero'.trim().toLowerCase(),
		name: capitalCadena(' AMELIA ROSA'.trim()),
		lastName: capitalCadena('CARRASQUERO MARCANO'.trim()),
		type: 'regular',
		email: 'acarrasquero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13571,
		nationality: 'V'.toUpperCase(),
		cedula: 11030769,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTABILIDAD TDC AMEX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iromero'.trim().toLowerCase(),
		name: capitalCadena(' IXAMAR HAKZAWETH'.trim()),
		lastName: capitalCadena('ROMERO TORRES'.trim()),
		type: 'regular',
		email: 'iromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14622,
		nationality: 'V'.toUpperCase(),
		cedula: 14680911,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTRATOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS RAMON'.trim()),
		lastName: capitalCadena('COLMENARES BARROETA'.trim()),
		type: 'regular',
		email: 'CCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 533,
		nationality: 'V'.toUpperCase(),
		cedula: 12502537,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL CONTABLE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALONGA'.trim().toLowerCase(),
		name: capitalCadena(' ANDERSON DAVID'.trim()),
		lastName: capitalCadena('LONGA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'ALONGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4424,
		nationality: 'V'.toUpperCase(),
		cedula: 15327620,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IZAMBRANO'.trim().toLowerCase(),
		name: capitalCadena(' ILCE JOSEFINA'.trim()),
		lastName: capitalCadena('ZAMBRANO '.trim()),
		type: 'regular',
		email: 'IZAMBRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 798,
		nationality: 'V'.toUpperCase(),
		cedula: 5448125,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD TDC']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KQUINTERO'.trim().toLowerCase(),
		name: capitalCadena(' KERRY YORLAY'.trim()),
		lastName: capitalCadena('QUINTERO CAICEDO'.trim()),
		type: 'regular',
		email: 'KQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11866,
		nationality: 'V'.toUpperCase(),
		cedula: 11557818,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GAGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA JOSELIN'.trim()),
		lastName: capitalCadena('GONZALEZ RUDA'.trim()),
		type: 'regular',
		email: 'GAGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12797,
		nationality: 'V'.toUpperCase(),
		cedula: 16461656,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NANCHUNDIA'.trim().toLowerCase(),
		name: capitalCadena(' NELLY MARIBEL'.trim()),
		lastName: capitalCadena('ANCHUNDIA ALONZO'.trim()),
		type: 'regular',
		email: 'NANCHUNDIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10681,
		nationality: 'V'.toUpperCase(),
		cedula: 17966388,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN IMPUESTOS NACIONALES Y ESTADALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DEL CARMEN'.trim()),
		lastName: capitalCadena('FERNANDEZ MENDEZ'.trim()),
		type: 'regular',
		email: 'MFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 706,
		nationality: 'V'.toUpperCase(),
		cedula: 10377748,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION NEGOCIOS INTERNACIONALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jovelasquez'.trim().toLowerCase(),
		name: capitalCadena(' JONABELT SORISBET'.trim()),
		lastName: capitalCadena('VELASQUEZ MATA'.trim()),
		type: 'regular',
		email: 'jovelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14633,
		nationality: 'V'.toUpperCase(),
		cedula: 13715337,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CPONCE'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS DAVID'.trim()),
		lastName: capitalCadena('PONCE '.trim()),
		type: 'regular',
		email: 'CPONCE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6614,
		nationality: 'V'.toUpperCase(),
		cedula: 21471329,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpabon'.trim().toLowerCase(),
		name: capitalCadena(' KELVIS ENRIQUE'.trim()),
		lastName: capitalCadena('PABON GIL'.trim()),
		type: 'regular',
		email: 'kpabon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14640,
		nationality: 'V'.toUpperCase(),
		cedula: 13406085,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABARRIOS'.trim().toLowerCase(),
		name: capitalCadena(' ANA DINORAH'.trim()),
		lastName: capitalCadena('BARRIOS RANGEL'.trim()),
		type: 'regular',
		email: 'ABARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1855,
		nationality: 'V'.toUpperCase(),
		cedula: 11991937,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HMUNOZ'.trim().toLowerCase(),
		name: capitalCadena(' HUGO HUMBERTO'.trim()),
		lastName: capitalCadena('MUÑOZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'HMUNOZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9734,
		nationality: 'V'.toUpperCase(),
		cedula: 6168790,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPACHECO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('PACHECO SALAZAR'.trim()),
		type: 'regular',
		email: 'JPACHECO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1028,
		nationality: 'V'.toUpperCase(),
		cedula: 4166670,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DBELISARIO'.trim().toLowerCase(),
		name: capitalCadena(' DARWIN ALEXIS'.trim()),
		lastName: capitalCadena('BELISARIO ALVAREZ'.trim()),
		type: 'regular',
		email: 'DBELISARIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8398,
		nationality: 'V'.toUpperCase(),
		cedula: 19220097,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTABILIDAD FIDUCIARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMADRIZ'.trim().toLowerCase(),
		name: capitalCadena(' LETICIA ANTONIETA'.trim()),
		lastName: capitalCadena('MADRIZ VERDU'.trim()),
		type: 'regular',
		email: 'LMADRIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16103,
		nationality: 'V'.toUpperCase(),
		cedula: 11569446,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NBRITO'.trim().toLowerCase(),
		name: capitalCadena(' NACELI JOSEFINA'.trim()),
		lastName: capitalCadena('BRITO BRITO'.trim()),
		type: 'regular',
		email: 'NBRITO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7554,
		nationality: 'V'.toUpperCase(),
		cedula: 13583618,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JFLORES'.trim().toLowerCase(),
		name: capitalCadena(' JULIO CESAR'.trim()),
		lastName: capitalCadena('FLORES ORTEGA'.trim()),
		type: 'regular',
		email: 'JFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11684,
		nationality: 'V'.toUpperCase(),
		cedula: 12761079,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CARLLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS MANUEL'.trim()),
		lastName: capitalCadena('LOPEZ OSIO'.trim()),
		type: 'regular',
		email: 'CARLLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13729,
		nationality: 'V'.toUpperCase(),
		cedula: 11899116,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE FIDEICOMISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EQUEVEDO'.trim().toLowerCase(),
		name: capitalCadena(' EGLIS ALEXANDER'.trim()),
		lastName: capitalCadena('QUEVEDO '.trim()),
		type: 'regular',
		email: 'EQUEVEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9111,
		nationality: 'V'.toUpperCase(),
		cedula: 21367209,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ISANTOS'.trim().toLowerCase(),
		name: capitalCadena(' IDARMIS SINAID'.trim()),
		lastName: capitalCadena('SANTOS DIAZ'.trim()),
		type: 'regular',
		email: 'ISANTOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14463,
		nationality: 'V'.toUpperCase(),
		cedula: 6908904,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vatienza'.trim().toLowerCase(),
		name: capitalCadena(' VICTOR GABRIEL'.trim()),
		lastName: capitalCadena('ATIENZA VELIZ'.trim()),
		type: 'regular',
		email: 'vatienza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7674,
		nationality: 'V'.toUpperCase(),
		cedula: 19464346,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CORRESPONDENCIA CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' LISSETT IBETH'.trim()),
		lastName: capitalCadena('MARTINEZ REYES'.trim()),
		type: 'regular',
		email: 'LMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10910,
		nationality: 'V'.toUpperCase(),
		cedula: 18032757,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YVIDAL'.trim().toLowerCase(),
		name: capitalCadena(' YENIBER ROSE'.trim()),
		lastName: capitalCadena('VIDAL GARCIA'.trim()),
		type: 'regular',
		email: 'YVIDAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8217,
		nationality: 'V'.toUpperCase(),
		cedula: 23617826,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACION CONTROL Y REGISTRO DE OPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GVALLES'.trim().toLowerCase(),
		name: capitalCadena(' GIOVANNI ARGENIS'.trim()),
		lastName: capitalCadena('VALLES SILGUERO'.trim()),
		type: 'regular',
		email: 'GVALLES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13366,
		nationality: 'V'.toUpperCase(),
		cedula: 12095956,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ZONA CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANTONY OSWALDO'.trim()),
		lastName: capitalCadena('MENDEZ FUENTES'.trim()),
		type: 'regular',
		email: 'AMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7392,
		nationality: 'V'.toUpperCase(),
		cedula: 17488639,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ZONA CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANGRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGELA CAROLINA'.trim()),
		lastName: capitalCadena('RODRIGUEZ ABELLO'.trim()),
		type: 'regular',
		email: 'ANGRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4924,
		nationality: 'V'.toUpperCase(),
		cedula: 20174202,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ZONA CAPITAL III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KLOZADA'.trim().toLowerCase(),
		name: capitalCadena(' KAREN ADRIANA'.trim()),
		lastName: capitalCadena('LOZADA DE PEREZ'.trim()),
		type: 'regular',
		email: 'KLOZADA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16046,
		nationality: 'V'.toUpperCase(),
		cedula: 16413045,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN DE BENEFICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LZERPA'.trim().toLowerCase(),
		name: capitalCadena(' LEANDRO ANTONIO'.trim()),
		lastName: capitalCadena('ZERPA SALAZAR'.trim()),
		type: 'regular',
		email: 'LZERPA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8160,
		nationality: 'V'.toUpperCase(),
		cedula: 21071353,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION DE COMPENSACION SALARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FLACRUZ'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS NATHALIE'.trim()),
		lastName: capitalCadena('LACRUZ DE MORONTA'.trim()),
		type: 'regular',
		email: 'FLACRUZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15952,
		nationality: 'V'.toUpperCase(),
		cedula: 16083770,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACION DE DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMORALES'.trim().toLowerCase(),
		name: capitalCadena(' YARIBEL DEL VALLE'.trim()),
		lastName: capitalCadena('MORALES ESPINOZA'.trim()),
		type: 'regular',
		email: 'YMORALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12403,
		nationality: 'V'.toUpperCase(),
		cedula: 27006393,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACION DE FORMACION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ESERPA'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO ALFONSO'.trim()),
		lastName: capitalCadena('SERPA JIMENEZ'.trim()),
		type: 'regular',
		email: 'ESERPA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15106,
		nationality: 'V'.toUpperCase(),
		cedula: 19998673,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GABGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA KARINA'.trim()),
		lastName: capitalCadena('GONZALEZ LOPEZ'.trim()),
		type: 'regular',
		email: 'GABGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15658,
		nationality: 'V'.toUpperCase(),
		cedula: 18809624,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'calvins'.trim().toLowerCase(),
		name: capitalCadena(' CRISANTO RAFAEL'.trim()),
		lastName: capitalCadena('ALVINS MARTINEZ'.trim()),
		type: 'regular',
		email: 'calvins@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15392,
		nationality: 'V'.toUpperCase(),
		cedula: 6962145,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMOROS'.trim().toLowerCase(),
		name: capitalCadena(' RODOLFO JOSE'.trim()),
		lastName: capitalCadena('MOROS PARADA'.trim()),
		type: 'regular',
		email: 'RMOROS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15797,
		nationality: 'V'.toUpperCase(),
		cedula: 6017137,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'evserrano'.trim().toLowerCase(),
		name: capitalCadena(' EVELIN DEL VALLE'.trim()),
		lastName: capitalCadena('SERRANO MUÑOZ'.trim()),
		type: 'regular',
		email: 'evserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14277,
		nationality: 'V'.toUpperCase(),
		cedula: 10800689,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CREDITOS COMERCIALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAMALAVE'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EUGENIA'.trim()),
		lastName: capitalCadena('MALAVE GONZALEZ'.trim()),
		type: 'regular',
		email: 'MAMALAVE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8031,
		nationality: 'V'.toUpperCase(),
		cedula: 14909643,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PMOLINA'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA BEATRIZ'.trim()),
		lastName: capitalCadena('MOLINA '.trim()),
		type: 'regular',
		email: 'PMOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11075,
		nationality: 'V'.toUpperCase(),
		cedula: 14300592,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FACOSTA'.trim().toLowerCase(),
		name: capitalCadena(' FELIX JOSE'.trim()),
		lastName: capitalCadena('ACOSTA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'FACOSTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11210,
		nationality: 'V'.toUpperCase(),
		cedula: 23943805,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JNIETO'.trim().toLowerCase(),
		name: capitalCadena(' JESÚS HUMBERTO'.trim()),
		lastName: capitalCadena('NIETO PEREZ'.trim()),
		type: 'regular',
		email: 'JNIETO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8511,
		nationality: 'V'.toUpperCase(),
		cedula: 17077672,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' BELKYS COROMOTO'.trim()),
		lastName: capitalCadena('SANCHEZ VARGAS'.trim()),
		type: 'regular',
		email: 'BSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 764,
		nationality: 'V'.toUpperCase(),
		cedula: 6131701,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE CONTROL DE CARTERA DE CREDITO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALARROYO'.trim().toLowerCase(),
		name: capitalCadena(' ALVARO ALFONSO'.trim()),
		lastName: capitalCadena('ARROYO GOMEZ'.trim()),
		type: 'regular',
		email: 'ALARROYO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2135,
		nationality: 'V'.toUpperCase(),
		cedula: 6558514,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EULOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' EUNICE STEFANIA'.trim()),
		lastName: capitalCadena('LOPEZ MONTILLA'.trim()),
		type: 'regular',
		email: 'EULOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11208,
		nationality: 'V'.toUpperCase(),
		cedula: 27200045,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VCHITGIAN'.trim().toLowerCase(),
		name: capitalCadena(' VERONICA '.trim()),
		lastName: capitalCadena('CHITGIAN ACEVEDO'.trim()),
		type: 'regular',
		email: 'VCHITGIAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2207,
		nationality: 'V'.toUpperCase(),
		cedula: 11733546,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUVARELA'.trim().toLowerCase(),
		name: capitalCadena(' YUSMAR MARLEY'.trim()),
		lastName: capitalCadena('VARELA SANCHEZ'.trim()),
		type: 'regular',
		email: 'YUVARELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7826,
		nationality: 'V'.toUpperCase(),
		cedula: 19289199,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' KATIUSCA DEL VALLE'.trim()),
		lastName: capitalCadena('MARTINEZ TOVAR'.trim()),
		type: 'regular',
		email: 'KMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7853,
		nationality: 'V'.toUpperCase(),
		cedula: 18140290,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN SOPORTE VIP']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anarroyo'.trim().toLowerCase(),
		name: capitalCadena(' ANA GRACIELA'.trim()),
		lastName: capitalCadena('ARROYO DE CLARO'.trim()),
		type: 'regular',
		email: 'anarroyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14280,
		nationality: 'V'.toUpperCase(),
		cedula: 11197346,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORD. ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NCARRASQUEL'.trim().toLowerCase(),
		name: capitalCadena(' NAY YADALYS'.trim()),
		lastName: capitalCadena('CARRASQUEL MARTINEZ'.trim()),
		type: 'regular',
		email: 'NCARRASQUEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2663,
		nationality: 'V'.toUpperCase(),
		cedula: 12688610,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CONTROL CONTABLE Y FACTURACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MILUCENA'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANGEL'.trim()),
		lastName: capitalCadena('LUCENA CASTELLANOS'.trim()),
		type: 'regular',
		email: 'MILUCENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12184,
		nationality: 'V'.toUpperCase(),
		cedula: 10488138,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL OPERATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS RAMON'.trim()),
		lastName: capitalCadena('PEREZ SULBARAN'.trim()),
		type: 'regular',
		email: 'CPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 181,
		nationality: 'V'.toUpperCase(),
		cedula: 6895250,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CGODOY'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN YELEN'.trim()),
		lastName: capitalCadena('GODOY GRATEROL'.trim()),
		type: 'regular',
		email: 'CGODOY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1176,
		nationality: 'V'.toUpperCase(),
		cedula: 10867908,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUSTODIA DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBELTRAN'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ERNESTO'.trim()),
		lastName: capitalCadena('BELTRAN DELGADO'.trim()),
		type: 'regular',
		email: 'JBELTRAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13307,
		nationality: 'V'.toUpperCase(),
		cedula: 6261933,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUSTODIA TÍTULOS VALORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEMEJIAS'.trim().toLowerCase(),
		name: capitalCadena(' JESSICA '.trim()),
		lastName: capitalCadena('MEJIAS COLMENARES'.trim()),
		type: 'regular',
		email: 'JEMEJIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12731,
		nationality: 'V'.toUpperCase(),
		cedula: 15723738,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RICRAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ALEXANDER'.trim()),
		lastName: capitalCadena('RAMIREZ RIVERO'.trim()),
		type: 'regular',
		email: 'RICRAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1993,
		nationality: 'V'.toUpperCase(),
		cedula: 10823828,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN OPERACIONES DE CAMBIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NMORA'.trim().toLowerCase(),
		name: capitalCadena(' NINOSKA '.trim()),
		lastName: capitalCadena('MORA RANGEL'.trim()),
		type: 'regular',
		email: 'NMORA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7835,
		nationality: 'V'.toUpperCase(),
		cedula: 17719021,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CASALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN JOSEFINA'.trim()),
		lastName: capitalCadena('SALAZAR ROSAS'.trim()),
		type: 'regular',
		email: 'CASALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12319,
		nationality: 'V'.toUpperCase(),
		cedula: 11208846,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yosrivas'.trim().toLowerCase(),
		name: capitalCadena(' YOSIMAR DANIELA'.trim()),
		lastName: capitalCadena('RIVAS BLANCO'.trim()),
		type: 'regular',
		email: 'yosrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14509,
		nationality: 'V'.toUpperCase(),
		cedula: 21415772,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SNORIEGA'.trim().toLowerCase(),
		name: capitalCadena(' SAUL EDUARDO'.trim()),
		lastName: capitalCadena('NORIEGA LOBATO'.trim()),
		type: 'regular',
		email: 'SNORIEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15951,
		nationality: 'V'.toUpperCase(),
		cedula: 16264611,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN COMUNICACIONES EXTERNAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kagonzalez'.trim().toLowerCase(),
		name: capitalCadena(' KATHLEEN ALEXANDRA'.trim()),
		lastName: capitalCadena('GONZALEZ VISCAYA'.trim()),
		type: 'regular',
		email: 'kagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14729,
		nationality: 'V'.toUpperCase(),
		cedula: 25029486,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN COMUNICACIONES INTERNAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'landrade'.trim().toLowerCase(),
		name: capitalCadena(' LEILA LISBETH'.trim()),
		lastName: capitalCadena('ANDRADE GUTIERREZ'.trim()),
		type: 'regular',
		email: 'landrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15832,
		nationality: 'V'.toUpperCase(),
		cedula: 15910025,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE EMPRENDEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALBERTO'.trim()),
		lastName: capitalCadena('CASTILLO DIAZ'.trim()),
		type: 'regular',
		email: 'JOSCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14317,
		nationality: 'V'.toUpperCase(),
		cedula: 27615679,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN DE PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JTOLEDO'.trim().toLowerCase(),
		name: capitalCadena(' JORGE LUIS'.trim()),
		lastName: capitalCadena('TOLEDO ESCORCHA'.trim()),
		type: 'regular',
		email: 'JTOLEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14787,
		nationality: 'V'.toUpperCase(),
		cedula: 16713901,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN DESARROLLO DE CANALES DIGITALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbravo'.trim().toLowerCase(),
		name: capitalCadena(' JUAN CARLOS'.trim()),
		lastName: capitalCadena('BRAVO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'jbravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15828,
		nationality: 'V'.toUpperCase(),
		cedula: 17719935,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yuzcategui'.trim().toLowerCase(),
		name: capitalCadena(' YERFISON JESUS'.trim()),
		lastName: capitalCadena('UZCATEGUI ZAMBRANO'.trim()),
		type: 'regular',
		email: 'yuzcategui@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14245,
		nationality: 'V'.toUpperCase(),
		cedula: 19465089,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wrico'.trim().toLowerCase(),
		name: capitalCadena(' WINDERLY OCTTAVIANI'.trim()),
		lastName: capitalCadena('RICO AGUILERA'.trim()),
		type: 'regular',
		email: 'wrico@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14653,
		nationality: 'V'.toUpperCase(),
		cedula: 27309550,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA MÓVIL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gbarreto'.trim().toLowerCase(),
		name: capitalCadena(' GLANDERLYS JOSEFINA'.trim()),
		lastName: capitalCadena('BARRETO SOTO'.trim()),
		type: 'regular',
		email: 'gbarreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14864,
		nationality: 'V'.toUpperCase(),
		cedula: 15698216,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN OFICINA VIRTUAL BNC']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOBRICENO'.trim().toLowerCase(),
		name: capitalCadena(' JOHANNA TERESA'.trim()),
		lastName: capitalCadena('BRICEÑO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'JOBRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13689,
		nationality: 'V'.toUpperCase(),
		cedula: 15791050,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN POS - MERCHANT']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dbarrios'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ARMANDO'.trim()),
		lastName: capitalCadena('BARRIOS RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'dbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14415,
		nationality: 'V'.toUpperCase(),
		cedula: 12640540,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PYEPEZ'.trim().toLowerCase(),
		name: capitalCadena(' PASTOR HIGINIO'.trim()),
		lastName: capitalCadena('YEPEZ DELIS'.trim()),
		type: 'regular',
		email: 'PYEPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1421,
		nationality: 'V'.toUpperCase(),
		cedula: 5892970,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN SERVICIO AL CLIENTE POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcardenas'.trim().toLowerCase(),
		name: capitalCadena(' MABER FERNANDA'.trim()),
		lastName: capitalCadena('CARDENAS VILLARROEL'.trim()),
		type: 'regular',
		email: 'mcardenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14472,
		nationality: 'V'.toUpperCase(),
		cedula: 21102682,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN SERVICIOS DE AFILIACIÓN POS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMORA'.trim().toLowerCase(),
		name: capitalCadena(' DAYLI CATHERINE'.trim()),
		lastName: capitalCadena('MORA MENDOZA'.trim()),
		type: 'regular',
		email: 'DMORA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11115,
		nationality: 'V'.toUpperCase(),
		cedula: 26915622,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MARCA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GFAGUNDEZ'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS NATALI'.trim()),
		lastName: capitalCadena('FAGUNDEZ SERRANO'.trim()),
		type: 'regular',
		email: 'GFAGUNDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15775,
		nationality: 'V'.toUpperCase(),
		cedula: 24774289,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MABUITRAGO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ELENA'.trim()),
		lastName: capitalCadena('BUITRAGO CARRIAZO'.trim()),
		type: 'regular',
		email: 'MABUITRAGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3987,
		nationality: 'V'.toUpperCase(),
		cedula: 5139486,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['DEFENSOR DEL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FNUNEZ'.trim().toLowerCase(),
		name: capitalCadena(' FELIX ALEXANDER'.trim()),
		lastName: capitalCadena('NUÑEZ MARRON'.trim()),
		type: 'regular',
		email: 'FNUNEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2926,
		nationality: 'V'.toUpperCase(),
		cedula: 10819299,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GJUSTO'.trim().toLowerCase(),
		name: capitalCadena(' GUILLERMO JOSE'.trim()),
		lastName: capitalCadena('JUSTO MANZANO'.trim()),
		type: 'regular',
		email: 'GJUSTO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16078,
		nationality: 'V'.toUpperCase(),
		cedula: 12640829,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OCORDOVA'.trim().toLowerCase(),
		name: capitalCadena(' ONEIDA VALERIA'.trim()),
		lastName: capitalCadena('CORDOVA FIGUEREDO'.trim()),
		type: 'regular',
		email: 'OCORDOVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4463,
		nationality: 'V'.toUpperCase(),
		cedula: 13290802,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NCAICEDO'.trim().toLowerCase(),
		name: capitalCadena(' NATHACHA YICEL'.trim()),
		lastName: capitalCadena('CAICEDO TOVAR'.trim()),
		type: 'regular',
		email: 'NCAICEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15549,
		nationality: 'V'.toUpperCase(),
		cedula: 26252325,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HCALATAYUD'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR ALI'.trim()),
		lastName: capitalCadena('CALATAYUD YANEZ'.trim()),
		type: 'regular',
		email: 'HCALATAYUD@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12217,
		nationality: 'V'.toUpperCase(),
		cedula: 27488919,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EGCONTRERAS'.trim().toLowerCase(),
		name: capitalCadena(' EGLEE YAMILET'.trim()),
		lastName: capitalCadena('CONTRERAS ROSALES'.trim()),
		type: 'regular',
		email: 'EGCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4426,
		nationality: 'V'.toUpperCase(),
		cedula: 15099160,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN OFICINA VIRTUAL BNC']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MLINAN'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('LIÑAN GONZALEZ'.trim()),
		type: 'regular',
		email: 'MLINAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16383,
		nationality: 'V'.toUpperCase(),
		cedula: 14274443,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN OFICINA VIRTUAL BNC']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARPENA'.trim().toLowerCase(),
		name: capitalCadena(' ARGENIS EDUARDO'.trim()),
		lastName: capitalCadena('PEÑA SALAZAR'.trim()),
		type: 'regular',
		email: 'ARPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2386,
		nationality: 'V'.toUpperCase(),
		cedula: 6130075,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KCORDERO'.trim().toLowerCase(),
		name: capitalCadena(' KARY NAYBELI'.trim()),
		lastName: capitalCadena('CORDERO HERRERA'.trim()),
		type: 'regular',
		email: 'KCORDERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4566,
		nationality: 'V'.toUpperCase(),
		cedula: 12375959,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DAMELENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' DAINNY GABRIELA'.trim()),
		lastName: capitalCadena('MELENDEZ PACHECO'.trim()),
		type: 'regular',
		email: 'DAMELENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16262,
		nationality: 'V'.toUpperCase(),
		cedula: 30224862,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD SERV AL CLT Y PROCESAMIENTO DE SOLICITUDES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ETERRAZA'.trim().toLowerCase(),
		name: capitalCadena(' ESTEFANIA DEL CARMEN'.trim()),
		lastName: capitalCadena('TERRAZA ZAMBRANO'.trim()),
		type: 'regular',
		email: 'ETERRAZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11370,
		nationality: 'V'.toUpperCase(),
		cedula: 20826321,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WANGULO'.trim().toLowerCase(),
		name: capitalCadena(' WILMAN JOSE'.trim()),
		lastName: capitalCadena('ANGULO MARTINEZ'.trim()),
		type: 'regular',
		email: 'WANGULO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1103,
		nationality: 'V'.toUpperCase(),
		cedula: 11550830,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN SERVICIO AL CLIENTE POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MGUERE'.trim().toLowerCase(),
		name: capitalCadena(' MAIRA ALEJANDRA'.trim()),
		lastName: capitalCadena('GUERE UGA'.trim()),
		type: 'regular',
		email: 'MGUERE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2035,
		nationality: 'V'.toUpperCase(),
		cedula: 14019108,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN SERVICIO AL CLIENTE POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AFAGUNDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA MARIA'.trim()),
		lastName: capitalCadena('FAGUNDEZ '.trim()),
		type: 'regular',
		email: 'AFAGUNDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6976,
		nationality: 'V'.toUpperCase(),
		cedula: 15931478,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ENFERMERA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RALTUNA'.trim().toLowerCase(),
		name: capitalCadena(' RUT EMPERATRIZ'.trim()),
		lastName: capitalCadena('ALTUNA BARRIOS'.trim()),
		type: 'regular',
		email: 'RALTUNA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15012,
		nationality: 'V'.toUpperCase(),
		cedula: 26921703,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ENFERMERA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASALINA'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA '.trim()),
		lastName: capitalCadena('SALINA GONZALEZ'.trim()),
		type: 'regular',
		email: 'ASALINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16284,
		nationality: 'V'.toUpperCase(),
		cedula: 17303542,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ENFERMERA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SCIOFFI'.trim().toLowerCase(),
		name: capitalCadena(' SARAHI BETZABETH'.trim()),
		lastName: capitalCadena('CIOFFI NOGALES'.trim()),
		type: 'regular',
		email: 'SCIOFFI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9571,
		nationality: 'V'.toUpperCase(),
		cedula: 25517132,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AADELGADO'.trim().toLowerCase(),
		name: capitalCadena(' AARON RUBEN'.trim()),
		lastName: capitalCadena('DELGADO DELGADO'.trim()),
		type: 'regular',
		email: 'AADELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16343,
		nationality: 'V'.toUpperCase(),
		cedula: 29887061,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA GESTIÓN DE INFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIADMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('MENDOZA CALDERON'.trim()),
		type: 'regular',
		email: 'MARIADMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9981,
		nationality: 'V'.toUpperCase(),
		cedula: 27034096,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anbriceno'.trim().toLowerCase(),
		name: capitalCadena(' ANALESKA JOSIVER'.trim()),
		lastName: capitalCadena('BRICEÑO BARRIENTOS'.trim()),
		type: 'regular',
		email: 'anbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15471,
		nationality: 'V'.toUpperCase(),
		cedula: 25444089,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FERBETANCOURT'.trim().toLowerCase(),
		name: capitalCadena(' FERNANDO JOSE'.trim()),
		lastName: capitalCadena('BETANCOURT MERECUANE'.trim()),
		type: 'regular',
		email: 'FERBETANCOURT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15698,
		nationality: 'V'.toUpperCase(),
		cedula: 27283774,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lotero'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALBERTO'.trim()),
		lastName: capitalCadena('OTERO RAMOS'.trim()),
		type: 'regular',
		email: 'lotero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15511,
		nationality: 'V'.toUpperCase(),
		cedula: 18528430,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FZAPATA'.trim().toLowerCase(),
		name: capitalCadena(' FREDERICK NOMAR'.trim()),
		lastName: capitalCadena('ZAPATA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'FZAPATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12548,
		nationality: 'V'.toUpperCase(),
		cedula: 29686458,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCORREA'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL ALEJANDRO'.trim()),
		lastName: capitalCadena('CORREA JIMENEZ'.trim()),
		type: 'regular',
		email: 'GCORREA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15123,
		nationality: 'V'.toUpperCase(),
		cedula: 24220940,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wbermudez'.trim().toLowerCase(),
		name: capitalCadena(' WISNEIDIS YETZARI'.trim()),
		lastName: capitalCadena('BERMUDEZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'wbermudez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15486,
		nationality: 'V'.toUpperCase(),
		cedula: 26908225,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCARDENAS'.trim().toLowerCase(),
		name: capitalCadena(' JUAN DAVID'.trim()),
		lastName: capitalCadena('CARDENAS DUQUE'.trim()),
		type: 'regular',
		email: 'JCARDENAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16098,
		nationality: 'V'.toUpperCase(),
		cedula: 29922232,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GMUJICA'.trim().toLowerCase(),
		name: capitalCadena(' GUILLERMO JOSE'.trim()),
		lastName: capitalCadena('MUJICA RONDON'.trim()),
		type: 'regular',
		email: 'GMUJICA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16166,
		nationality: 'V'.toUpperCase(),
		cedula: 21281535,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMATA'.trim().toLowerCase(),
		name: capitalCadena(' CRISBEL ALEJANDRA'.trim()),
		lastName: capitalCadena('MATA LOPEZ'.trim()),
		type: 'regular',
		email: 'CMATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16361,
		nationality: 'V'.toUpperCase(),
		cedula: 28350191,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION OPERACIONES ACCIONARIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MACAMPOS'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL JOSE'.trim()),
		lastName: capitalCadena('CAMPOS MUJICA'.trim()),
		type: 'regular',
		email: 'MACAMPOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2479,
		nationality: 'V'.toUpperCase(),
		cedula: 21013708,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bbompart'.trim().toLowerCase(),
		name: capitalCadena(' BEATRIZ MIROSLAVA'.trim()),
		lastName: capitalCadena('BOMPART NIÑO'.trim()),
		type: 'regular',
		email: 'bbompart@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13815,
		nationality: 'V'.toUpperCase(),
		cedula: 11691090,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. GESTIÓN Y TRASLADO DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGIL'.trim().toLowerCase(),
		name: capitalCadena(' LAURA VIVIANA'.trim()),
		lastName: capitalCadena('GIL '.trim()),
		type: 'regular',
		email: 'LGIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11396,
		nationality: 'V'.toUpperCase(),
		cedula: 19999391,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACION ATENCIÓN AL CLIENTE Y OPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DROSALES'.trim().toLowerCase(),
		name: capitalCadena(' DARIANA MARIA'.trim()),
		lastName: capitalCadena('ROSALES GARCIA'.trim()),
		type: 'regular',
		email: 'DROSALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12504,
		nationality: 'V'.toUpperCase(),
		cedula: 20051588,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACION ATENCIÓN AL CLIENTE Y OPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMARRERO'.trim().toLowerCase(),
		name: capitalCadena(' YERARDIN ANDREINA'.trim()),
		lastName: capitalCadena('MARRERO CONTRERAS'.trim()),
		type: 'regular',
		email: 'YMARRERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8789,
		nationality: 'V'.toUpperCase(),
		cedula: 26528208,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN FACTURACIÓN Y VIÁTICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EPENA'.trim().toLowerCase(),
		name: capitalCadena(' ELVIS JESUS'.trim()),
		lastName: capitalCadena('PEÑA RUJANO'.trim()),
		type: 'regular',
		email: 'EPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11837,
		nationality: 'V'.toUpperCase(),
		cedula: 24664189,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN IMPUESTOS MUNICIPALES GRAN CCS Y OCCI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jzamora'.trim().toLowerCase(),
		name: capitalCadena(' JUNIOR ALEXANDER'.trim()),
		lastName: capitalCadena('ZAMORA PALACIOS'.trim()),
		type: 'regular',
		email: 'jzamora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15334,
		nationality: 'V'.toUpperCase(),
		cedula: 26104588,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LORTUNO'.trim().toLowerCase(),
		name: capitalCadena(' LIRIS CLARIVEL'.trim()),
		lastName: capitalCadena('ORTUÑO DANIEL'.trim()),
		type: 'regular',
		email: 'LORTUNO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12521,
		nationality: 'V'.toUpperCase(),
		cedula: 10498177,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARIVERO'.trim().toLowerCase(),
		name: capitalCadena(' ALBANI ISABEL'.trim()),
		lastName: capitalCadena('RIVERO MURILLO'.trim()),
		type: 'regular',
		email: 'ARIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9834,
		nationality: 'V'.toUpperCase(),
		cedula: 27359312,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCORONEL'.trim().toLowerCase(),
		name: capitalCadena(' JHOANDER '.trim()),
		lastName: capitalCadena('CORONEL MIÑONIS'.trim()),
		type: 'regular',
		email: 'JCORONEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12769,
		nationality: 'V'.toUpperCase(),
		cedula: 27713483,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmujica'.trim().toLowerCase(),
		name: capitalCadena(' LUISANA DEL VALLE'.trim()),
		lastName: capitalCadena('MUJICA PEREZ'.trim()),
		type: 'regular',
		email: 'lmujica@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14316,
		nationality: 'V'.toUpperCase(),
		cedula: 13088070,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AARGUELLES'.trim().toLowerCase(),
		name: capitalCadena(' AINARA '.trim()),
		lastName: capitalCadena('ARGUELLES MORILLO'.trim()),
		type: 'regular',
		email: 'AARGUELLES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12959,
		nationality: 'V'.toUpperCase(),
		cedula: 27488807,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DADIAZ'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA '.trim()),
		lastName: capitalCadena('DIAZ MARCANO'.trim()),
		type: 'regular',
		email: 'DADIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7575,
		nationality: 'V'.toUpperCase(),
		cedula: 19086350,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARILYN ANDREINA'.trim()),
		lastName: capitalCadena('MARTINEZ PINTO'.trim()),
		type: 'regular',
		email: 'MMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11819,
		nationality: 'V'.toUpperCase(),
		cedula: 26725074,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JLARES'.trim().toLowerCase(),
		name: capitalCadena(' JANDREE JOSE'.trim()),
		lastName: capitalCadena('LARES HERRERA'.trim()),
		type: 'regular',
		email: 'JLARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10747,
		nationality: 'V'.toUpperCase(),
		cedula: 26210076,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TPINANGO'.trim().toLowerCase(),
		name: capitalCadena(' TONY DAMIAN'.trim()),
		lastName: capitalCadena('PIÑANGO FAJARDO'.trim()),
		type: 'regular',
		email: 'TPINANGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9985,
		nationality: 'V'.toUpperCase(),
		cedula: 26894179,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' KRYSTIAN STIBEN'.trim()),
		lastName: capitalCadena('PEREZ ORTIZ'.trim()),
		type: 'regular',
		email: 'KRPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11836,
		nationality: 'V'.toUpperCase(),
		cedula: 29661739,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' DIOSNERY NAZARETH'.trim()),
		lastName: capitalCadena('MEDINA OROPEZA'.trim()),
		type: 'regular',
		email: 'DMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13083,
		nationality: 'V'.toUpperCase(),
		cedula: 26078552,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yavelasquez'.trim().toLowerCase(),
		name: capitalCadena(' YAREMY BETINA'.trim()),
		lastName: capitalCadena('VELASQUEZ MENDOZA'.trim()),
		type: 'regular',
		email: 'yavelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15830,
		nationality: 'V'.toUpperCase(),
		cedula: 27333456,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SROQUE'.trim().toLowerCase(),
		name: capitalCadena(' SHANNON SILEYNA'.trim()),
		lastName: capitalCadena('ROQUE MADRIZ'.trim()),
		type: 'regular',
		email: 'SROQUE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16105,
		nationality: 'V'.toUpperCase(),
		cedula: 26104460,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION DE COMPENSACION SALARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AABREU'.trim().toLowerCase(),
		name: capitalCadena(' ANDREA REBECCA'.trim()),
		lastName: capitalCadena('ABREU CONTRERAS'.trim()),
		type: 'regular',
		email: 'AABREU@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16181,
		nationality: 'V'.toUpperCase(),
		cedula: 28338098,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION DE COMPENSACION SALARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OLEON'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA ANDREINA'.trim()),
		lastName: capitalCadena('LEON ZURITA'.trim()),
		type: 'regular',
		email: 'OLEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15011,
		nationality: 'V'.toUpperCase(),
		cedula: 28006127,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACION DE FORMACION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josmlopez'.trim().toLowerCase(),
		name: capitalCadena(' JOSMAN JOSUE'.trim()),
		lastName: capitalCadena('LOPEZ GAITAN'.trim()),
		type: 'regular',
		email: 'josmlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10930,
		nationality: 'V'.toUpperCase(),
		cedula: 20871421,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GDUGARTE'.trim().toLowerCase(),
		name: capitalCadena(' GREIBYS PAOLA'.trim()),
		lastName: capitalCadena('DUGARTE PAREDES'.trim()),
		type: 'regular',
		email: 'GDUGARTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16076,
		nationality: 'V'.toUpperCase(),
		cedula: 25873415,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION GESTION NOMINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CPRIETO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS EDUARDO'.trim()),
		lastName: capitalCadena('PRIETO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'CPRIETO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15960,
		nationality: 'V'.toUpperCase(),
		cedula: 22965134,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('PEREZ MONTALVAN'.trim()),
		type: 'regular',
		email: 'MARPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16180,
		nationality: 'V'.toUpperCase(),
		cedula: 27107317,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FALEAL'.trim().toLowerCase(),
		name: capitalCadena(' FABIAN ISAAC'.trim()),
		lastName: capitalCadena('LEAL DIEZ CANSECO'.trim()),
		type: 'regular',
		email: 'FALEAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16288,
		nationality: 'V'.toUpperCase(),
		cedula: 27053193,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' ASTRID CAROLINA'.trim()),
		lastName: capitalCadena('DIAZ PRADA'.trim()),
		type: 'regular',
		email: 'ASDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12253,
		nationality: 'V'.toUpperCase(),
		cedula: 21116581,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KGALANTON'.trim().toLowerCase(),
		name: capitalCadena(' KLEYBER DAVID'.trim()),
		lastName: capitalCadena('GALANTON SANCHEZ'.trim()),
		type: 'regular',
		email: 'KGALANTON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15912,
		nationality: 'V'.toUpperCase(),
		cedula: 27103556,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CPEROZA'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ROSA'.trim()),
		lastName: capitalCadena('PEROZA DE MOLINA'.trim()),
		type: 'regular',
		email: 'CPEROZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15935,
		nationality: 'V'.toUpperCase(),
		cedula: 16082423,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EPACHECO'.trim().toLowerCase(),
		name: capitalCadena(' EDELFRY GUISETH'.trim()),
		lastName: capitalCadena('PACHECO MOURESUT'.trim()),
		type: 'regular',
		email: 'EPACHECO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14171,
		nationality: 'V'.toUpperCase(),
		cedula: 18134922,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORD. ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KSOLIS'.trim().toLowerCase(),
		name: capitalCadena(' KATIUSKA YUSMARY'.trim()),
		lastName: capitalCadena('SOLIS VALERA'.trim()),
		type: 'regular',
		email: 'KSOLIS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5211,
		nationality: 'V'.toUpperCase(),
		cedula: 15725666,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CONTROL CONTABLE Y FACTURACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CABLANCO'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ELENA'.trim()),
		lastName: capitalCadena('BLANCO TORRES'.trim()),
		type: 'regular',
		email: 'CABLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2318,
		nationality: 'V'.toUpperCase(),
		cedula: 6901042,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUSTODIA DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AESCALANTE'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL JONATHAN'.trim()),
		lastName: capitalCadena('ESCALANTE MARTINEZ'.trim()),
		type: 'regular',
		email: 'AESCALANTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12745,
		nationality: 'V'.toUpperCase(),
		cedula: 10812845,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LARGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' LARRY HASSAN'.trim()),
		lastName: capitalCadena('GONZALEZ PALMA'.trim()),
		type: 'regular',
		email: 'LARGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11558,
		nationality: 'V'.toUpperCase(),
		cedula: 10542689,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN OPERACIONES DE CAMBIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANGGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA MERCEDES'.trim()),
		lastName: capitalCadena('GUTIERREZ QUERALES'.trim()),
		type: 'regular',
		email: 'ANGGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15602,
		nationality: 'V'.toUpperCase(),
		cedula: 23944318,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN COMUNICACIONES INTERNAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DAUGELLO'.trim().toLowerCase(),
		name: capitalCadena(' DENESIS REBECA'.trim()),
		lastName: capitalCadena('AUGELLO GARCIA'.trim()),
		type: 'regular',
		email: 'DAUGELLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16282,
		nationality: 'V'.toUpperCase(),
		cedula: 19163151,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OCONDE'.trim().toLowerCase(),
		name: capitalCadena(' ODACTSY SUSANA'.trim()),
		lastName: capitalCadena('CONDE BARRETO'.trim()),
		type: 'regular',
		email: 'OCONDE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12852,
		nationality: 'V'.toUpperCase(),
		cedula: 18492064,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA MÓVIL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpaiva'.trim().toLowerCase(),
		name: capitalCadena(' KEVIN JOSE'.trim()),
		lastName: capitalCadena('PAIVA QUINTERO'.trim()),
		type: 'regular',
		email: 'kpaiva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13982,
		nationality: 'V'.toUpperCase(),
		cedula: 21535273,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN OFICINA MÓVIL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUFLORES'.trim().toLowerCase(),
		name: capitalCadena(' JUAN FRANCISCO'.trim()),
		lastName: capitalCadena('FLORES FONSECA'.trim()),
		type: 'regular',
		email: 'JUFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16259,
		nationality: 'V'.toUpperCase(),
		cedula: 29583541,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSIFONTES'.trim().toLowerCase(),
		name: capitalCadena(' MARIA GABRIELA'.trim()),
		lastName: capitalCadena('SIFONTES PEINADO'.trim()),
		type: 'regular',
		email: 'MSIFONTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16162,
		nationality: 'V'.toUpperCase(),
		cedula: 23923018,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE EVENTOS E IMAGEN CORPORATIVAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMONTILLA'.trim().toLowerCase(),
		name: capitalCadena(' YAGNELLY CRISTINA'.trim()),
		lastName: capitalCadena('MONTILLA ROJO'.trim()),
		type: 'regular',
		email: 'YMONTILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16227,
		nationality: 'V'.toUpperCase(),
		cedula: 28246001,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MARCA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANDREA CAROLINA'.trim()),
		lastName: capitalCadena('LOPEZ GIMENEZ'.trim()),
		type: 'regular',
		email: 'ALOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16354,
		nationality: 'V'.toUpperCase(),
		cedula: 29625016,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' ALESNI YOJANDRI'.trim()),
		lastName: capitalCadena('PEREZ MEDINA'.trim()),
		type: 'regular',
		email: 'ALPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11640,
		nationality: 'V'.toUpperCase(),
		cedula: 25871181,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CAMORENO'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN CECILIA'.trim()),
		lastName: capitalCadena('MORENO ARTEAGA'.trim()),
		type: 'regular',
		email: 'CAMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16335,
		nationality: 'V'.toUpperCase(),
		cedula: 24900493,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DEFENSORIA DEL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARNIEVES'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('NIEVES RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'MARNIEVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16113,
		nationality: 'V'.toUpperCase(),
		cedula: 16497742,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ypena'.trim().toLowerCase(),
		name: capitalCadena(' YUSMELY JOSEFA'.trim()),
		lastName: capitalCadena('PEÑA BRITO'.trim()),
		type: 'regular',
		email: 'ypena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15434,
		nationality: 'V'.toUpperCase(),
		cedula: 13432536,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MBENCOMO'.trim().toLowerCase(),
		name: capitalCadena(' MARITZA DEL CARMEN'.trim()),
		lastName: capitalCadena('BENCOMO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'MBENCOMO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16085,
		nationality: 'V'.toUpperCase(),
		cedula: 15377166,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NDELGADO'.trim().toLowerCase(),
		name: capitalCadena(' NANCHESKA DAYARI'.trim()),
		lastName: capitalCadena('DELGADO DE SAYA'.trim()),
		type: 'regular',
		email: 'NDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16209,
		nationality: 'V'.toUpperCase(),
		cedula: 22017999,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA RIESGO OPERACIONAL FRONT OFFICE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AREYES'.trim().toLowerCase(),
		name: capitalCadena(' ANNIFRAN JOSE'.trim()),
		lastName: capitalCadena('REYES GUZMAN'.trim()),
		type: 'regular',
		email: 'AREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15654,
		nationality: 'V'.toUpperCase(),
		cedula: 19251530,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUMPLIMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MDUARTE'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL ALEJANDRO'.trim()),
		lastName: capitalCadena('DUARTE ROSALES'.trim()),
		type: 'regular',
		email: 'MDUARTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15689,
		nationality: 'V'.toUpperCase(),
		cedula: 26573730,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUMPLIMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nromero'.trim().toLowerCase(),
		name: capitalCadena(' NATHALY VANESSA'.trim()),
		lastName: capitalCadena('ROMERO ORTA'.trim()),
		type: 'regular',
		email: 'nromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15395,
		nationality: 'V'.toUpperCase(),
		cedula: 19085139,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MANIEVES'.trim().toLowerCase(),
		name: capitalCadena(' MAYKER ALEJANDRO'.trim()),
		lastName: capitalCadena('NIEVES TOLEDO'.trim()),
		type: 'regular',
		email: 'MANIEVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15659,
		nationality: 'V'.toUpperCase(),
		cedula: 27531862,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncanales'.trim().toLowerCase(),
		name: capitalCadena(' NOREIDYS JOHANA'.trim()),
		lastName: capitalCadena('CANALES MENDEZ'.trim()),
		type: 'regular',
		email: 'ncanales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15839,
		nationality: 'V'.toUpperCase(),
		cedula: 17589107,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ELSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' ELIZETH CAROLINA'.trim()),
		lastName: capitalCadena('SANCHEZ ESCALANTE'.trim()),
		type: 'regular',
		email: 'ELSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16352,
		nationality: 'V'.toUpperCase(),
		cedula: 13992729,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEALDANA'.trim().toLowerCase(),
		name: capitalCadena(' JEAN CAROLINA'.trim()),
		lastName: capitalCadena('ALDANA PIÑA'.trim()),
		type: 'regular',
		email: 'JEALDANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15163,
		nationality: 'V'.toUpperCase(),
		cedula: 25570514,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yimartinez'.trim().toLowerCase(),
		name: capitalCadena(' YISLEIDY DEL VALLE'.trim()),
		lastName: capitalCadena('MARTINEZ BORGES'.trim()),
		type: 'regular',
		email: 'yimartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15438,
		nationality: 'V'.toUpperCase(),
		cedula: 24982180,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCORDERO'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA YOBELEYMA'.trim()),
		lastName: capitalCadena('CORDERO HERNANDEZ'.trim()),
		type: 'regular',
		email: 'DCORDERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15954,
		nationality: 'V'.toUpperCase(),
		cedula: 18487795,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CTORRES'.trim().toLowerCase(),
		name: capitalCadena(' CINDY ROSSANA'.trim()),
		lastName: capitalCadena('TORRES RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'CTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15131,
		nationality: 'V'.toUpperCase(),
		cedula: 19228650,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'brojas'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA CAROLINA'.trim()),
		lastName: capitalCadena('ROJAS ESCOBAR'.trim()),
		type: 'regular',
		email: 'brojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15833,
		nationality: 'V'.toUpperCase(),
		cedula: 20870355,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VALCALA'.trim().toLowerCase(),
		name: capitalCadena(' VICTORIA DEL ALBA'.trim()),
		lastName: capitalCadena('ALCALA CARABALLO'.trim()),
		type: 'regular',
		email: 'VALCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15919,
		nationality: 'V'.toUpperCase(),
		cedula: 29832993,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' ROCYMAR NAZARETH BETHANIA'.trim()),
		lastName: capitalCadena('CASTILLO MIJARES'.trim()),
		type: 'regular',
		email: 'ROCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16337,
		nationality: 'V'.toUpperCase(),
		cedula: 21437893,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sandrades'.trim().toLowerCase(),
		name: capitalCadena(' SANDRA PAOLA'.trim()),
		lastName: capitalCadena('ANDRADES MORENO'.trim()),
		type: 'regular',
		email: 'sandrades@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15121,
		nationality: 'V'.toUpperCase(),
		cedula: 19754742,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'armachado'.trim().toLowerCase(),
		name: capitalCadena(' ARIAM ISMARELY'.trim()),
		lastName: capitalCadena('MACHADO ROJAS'.trim()),
		type: 'regular',
		email: 'armachado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15510,
		nationality: 'V'.toUpperCase(),
		cedula: 25306431,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccaicedo'.trim().toLowerCase(),
		name: capitalCadena(' CAROLA JANETH'.trim()),
		lastName: capitalCadena('CAICEDO NAZARENO'.trim()),
		type: 'regular',
		email: 'ccaicedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15573,
		nationality: 'E'.toUpperCase(),
		cedula: 82287809,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMATA'.trim().toLowerCase(),
		name: capitalCadena(' JHOIRY LAFFAYER'.trim()),
		lastName: capitalCadena('MATA PACHECO'.trim()),
		type: 'regular',
		email: 'JMATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16091,
		nationality: 'V'.toUpperCase(),
		cedula: 20674711,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YLEAL'.trim().toLowerCase(),
		name: capitalCadena(' YARUMI OROISIS'.trim()),
		lastName: capitalCadena('LEAL MENDOZA'.trim()),
		type: 'regular',
		email: 'YLEAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16348,
		nationality: 'V'.toUpperCase(),
		cedula: 25504564,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUARODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JUAN BAUTISTA'.trim()),
		lastName: capitalCadena('RODRIGUEZ PEREZ'.trim()),
		type: 'regular',
		email: 'JUARODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14430,
		nationality: 'V'.toUpperCase(),
		cedula: 6835855,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JLUCENA'.trim().toLowerCase(),
		name: capitalCadena(' JORMEYER IVAN'.trim()),
		lastName: capitalCadena('LUCENA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'JLUCENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2974,
		nationality: 'V'.toUpperCase(),
		cedula: 17962822,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. COMPRAS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMONTSERRATT'.trim().toLowerCase(),
		name: capitalCadena(' LEONARDO ALFREDO'.trim()),
		lastName: capitalCadena('MONTSERRATT MIJARES'.trim()),
		type: 'regular',
		email: 'LMONTSERRATT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16145,
		nationality: 'V'.toUpperCase(),
		cedula: 13969341,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONTROL DE INVENTARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' NORIS ALICIA'.trim()),
		lastName: capitalCadena('MENDOZA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'NMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13354,
		nationality: 'V'.toUpperCase(),
		cedula: 11029492,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. DOCUMENTACIÓN DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' JEAN CARLOS'.trim()),
		lastName: capitalCadena('PEREZ BARRIOS'.trim()),
		type: 'regular',
		email: 'JEPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16170,
		nationality: 'V'.toUpperCase(),
		cedula: 23391745,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CARTERA DE INVERSIONES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsanz'.trim().toLowerCase(),
		name: capitalCadena(' JUSVELY JUNHELENY'.trim()),
		lastName: capitalCadena('SANZ PALACIOS'.trim()),
		type: 'regular',
		email: 'jsanz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14601,
		nationality: 'V'.toUpperCase(),
		cedula: 22035452,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTRATOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isusarret'.trim().toLowerCase(),
		name: capitalCadena(' ISABELLA DEL VALLE'.trim()),
		lastName: capitalCadena('SUSARRET PERNIA'.trim()),
		type: 'regular',
		email: 'isusarret@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14708,
		nationality: 'V'.toUpperCase(),
		cedula: 29583410,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION CONTRATOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arosales'.trim().toLowerCase(),
		name: capitalCadena(' ALBA ADELAIDA'.trim()),
		lastName: capitalCadena('ROSALES MARQUEZ'.trim()),
		type: 'regular',
		email: 'arosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13200,
		nationality: 'V'.toUpperCase(),
		cedula: 6099103,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANZAMBRANO'.trim().toLowerCase(),
		name: capitalCadena(' ANYELYN JAZMIN'.trim()),
		lastName: capitalCadena('ZAMBRANO FUENTES'.trim()),
		type: 'regular',
		email: 'ANZAMBRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12525,
		nationality: 'V'.toUpperCase(),
		cedula: 28052577,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN IMPUESTOS NACIONALES Y ESTADALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANJIMENEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGY EMILI'.trim()),
		lastName: capitalCadena('JIMENEZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'ANJIMENEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6150,
		nationality: 'V'.toUpperCase(),
		cedula: 14445995,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMORA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS DIONISIO'.trim()),
		lastName: capitalCadena('MORA PLATA'.trim()),
		type: 'regular',
		email: 'LMORA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14699,
		nationality: 'V'.toUpperCase(),
		cedula: 18818210,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CLONGA'.trim().toLowerCase(),
		name: capitalCadena(' CRISMELY CAROLINA'.trim()),
		lastName: capitalCadena('LONGA ROMERO'.trim()),
		type: 'regular',
		email: 'CLONGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14274,
		nationality: 'V'.toUpperCase(),
		cedula: 23635651,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MILDRED NEREIDA'.trim()),
		lastName: capitalCadena('FERNANDEZ BELLO'.trim()),
		type: 'regular',
		email: 'MIFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2665,
		nationality: 'V'.toUpperCase(),
		cedula: 6271863,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HPINEDA'.trim().toLowerCase(),
		name: capitalCadena(' HENRY JESUS'.trim()),
		lastName: capitalCadena('PINEDA '.trim()),
		type: 'regular',
		email: 'HPINEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2788,
		nationality: 'V'.toUpperCase(),
		cedula: 6905254,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmontilla'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA CAROLINA'.trim()),
		lastName: capitalCadena('MONTILLA AZUAJE'.trim()),
		type: 'regular',
		email: 'dmontilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15605,
		nationality: 'V'.toUpperCase(),
		cedula: 27474388,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LEJIMENEZ'.trim().toLowerCase(),
		name: capitalCadena(' LEWIS LEON'.trim()),
		lastName: capitalCadena('JIMENEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'LEJIMENEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16243,
		nationality: 'V'.toUpperCase(),
		cedula: 16331786,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' KIPSY YESSENIA'.trim()),
		lastName: capitalCadena('DIAZ BARRIGA'.trim()),
		type: 'regular',
		email: 'KDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16351,
		nationality: 'V'.toUpperCase(),
		cedula: 13400179,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drivas'.trim().toLowerCase(),
		name: capitalCadena(' DAVID RAFAEL'.trim()),
		lastName: capitalCadena('RIVAS QUINTERO'.trim()),
		type: 'regular',
		email: 'drivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15856,
		nationality: 'V'.toUpperCase(),
		cedula: 18965871,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RPUENTES'.trim().toLowerCase(),
		name: capitalCadena(' ROGNY JOSE'.trim()),
		lastName: capitalCadena('PUENTES PUENTES'.trim()),
		type: 'regular',
		email: 'RPUENTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15921,
		nationality: 'V'.toUpperCase(),
		cedula: 25369653,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HDELGADO'.trim().toLowerCase(),
		name: capitalCadena(' HIDRA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('DELGADO DORCA'.trim()),
		type: 'regular',
		email: 'HDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12703,
		nationality: 'V'.toUpperCase(),
		cedula: 17160539,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE INVESTIGACIÓN ECONOMICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fborges'.trim().toLowerCase(),
		name: capitalCadena(' FABIOLA DEL VALLE'.trim()),
		lastName: capitalCadena('BORGES TORREALBA'.trim()),
		type: 'regular',
		email: 'fborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14732,
		nationality: 'V'.toUpperCase(),
		cedula: 6323399,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE INVESTIGACIÓN ECONOMICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bbrazon'.trim().toLowerCase(),
		name: capitalCadena(' BETTY CATALINA'.trim()),
		lastName: capitalCadena('BRAZON SOTILLO'.trim()),
		type: 'regular',
		email: 'bbrazon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14565,
		nationality: 'V'.toUpperCase(),
		cedula: 18714139,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lchang'.trim().toLowerCase(),
		name: capitalCadena(' LEIDY ADIANEZ'.trim()),
		lastName: capitalCadena('CHANG CEREZO'.trim()),
		type: 'regular',
		email: 'lchang@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14582,
		nationality: 'V'.toUpperCase(),
		cedula: 15377151,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'projas'.trim().toLowerCase(),
		name: capitalCadena(' PIERINA GIOVANNA'.trim()),
		lastName: capitalCadena('ROJAS MIJARES'.trim()),
		type: 'regular',
		email: 'projas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14678,
		nationality: 'V'.toUpperCase(),
		cedula: 19201227,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymata'.trim().toLowerCase(),
		name: capitalCadena(' YHONERI JESUS'.trim()),
		lastName: capitalCadena('MATA PIÑATE'.trim()),
		type: 'regular',
		email: 'ymata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7544,
		nationality: 'V'.toUpperCase(),
		cedula: 24933750,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfagundez'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EDUARDO'.trim()),
		lastName: capitalCadena('FAGUNDEZ FLORES'.trim()),
		type: 'regular',
		email: 'lfagundez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14370,
		nationality: 'V'.toUpperCase(),
		cedula: 12357821,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jepina'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER HAIMET'.trim()),
		lastName: capitalCadena('PIÑA SILVA'.trim()),
		type: 'regular',
		email: 'jepina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14673,
		nationality: 'V'.toUpperCase(),
		cedula: 15586762,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMACHADO'.trim().toLowerCase(),
		name: capitalCadena(' ALFREDO '.trim()),
		lastName: capitalCadena('MACHADO CASTILLO'.trim()),
		type: 'regular',
		email: 'AMACHADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1019,
		nationality: 'V'.toUpperCase(),
		cedula: 6322264,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACION CONTROL Y REGISTRO DE OPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ERNESTO'.trim()),
		lastName: capitalCadena('DIAZ RENGIFO'.trim()),
		type: 'regular',
		email: 'JEDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14955,
		nationality: 'V'.toUpperCase(),
		cedula: 17119396,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DEPARTAMENTO GESTIÓN OPERATIVA ZONA II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZFILGUEIRA'.trim().toLowerCase(),
		name: capitalCadena(' ZORAIMA DEL VALLE'.trim()),
		lastName: capitalCadena('FILGUEIRA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'ZFILGUEIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15884,
		nationality: 'V'.toUpperCase(),
		cedula: 11035484,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACION DE DESARROLLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JHSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' JHONNY RAFAEL'.trim()),
		lastName: capitalCadena('SANCHEZ DA CRUZ'.trim()),
		type: 'regular',
		email: 'JHSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8342,
		nationality: 'V'.toUpperCase(),
		cedula: 11550319,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EPINEDA'.trim().toLowerCase(),
		name: capitalCadena(' ELIOMARA DE JESUS'.trim()),
		lastName: capitalCadena('PINEDA FERNANDEZ'.trim()),
		type: 'regular',
		email: 'EPINEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16065,
		nationality: 'V'.toUpperCase(),
		cedula: 15368132,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoncada'.trim().toLowerCase(),
		name: capitalCadena(' JORGE ALEJANDRO'.trim()),
		lastName: capitalCadena('MONCADA DURAN'.trim()),
		type: 'regular',
		email: 'jmoncada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14684,
		nationality: 'V'.toUpperCase(),
		cedula: 27954777,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MFIGUEROA'.trim().toLowerCase(),
		name: capitalCadena(' MAYBER MARIANA DEL VALLE'.trim()),
		lastName: capitalCadena('FIGUEROA ROMERO'.trim()),
		type: 'regular',
		email: 'MFIGUEROA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15903,
		nationality: 'V'.toUpperCase(),
		cedula: 23695788,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPARRA'.trim().toLowerCase(),
		name: capitalCadena(' JUAN JOSE'.trim()),
		lastName: capitalCadena('PARRA '.trim()),
		type: 'regular',
		email: 'JPARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16066,
		nationality: 'V'.toUpperCase(),
		cedula: 20303280,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ORGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA ALEJANDRA'.trim()),
		lastName: capitalCadena('GONZALEZ CORRO'.trim()),
		type: 'regular',
		email: 'ORGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16349,
		nationality: 'V'.toUpperCase(),
		cedula: 25774122,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DEF.  DE MODELOS DE CALIDAD'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'madreyes'.trim().toLowerCase(),
		name: capitalCadena(' MADELEIND YULETTSY'.trim()),
		lastName: capitalCadena('REYES TERAN'.trim()),
		type: 'regular',
		email: 'madreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14731,
		nationality: 'V'.toUpperCase(),
		cedula: 20329590,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JAVENDANO'.trim().toLowerCase(),
		name: capitalCadena(' JENIRE MARIA'.trim()),
		lastName: capitalCadena('AVENDAÑO DELGADO'.trim()),
		type: 'regular',
		email: 'JAVENDANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16220,
		nationality: 'V'.toUpperCase(),
		cedula: 22916450,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' PRADO JOSE'.trim()),
		lastName: capitalCadena('RODRIGUEZ PIÑERUA'.trim()),
		type: 'regular',
		email: 'PRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8261,
		nationality: 'V'.toUpperCase(),
		cedula: 13526637,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA PATRICIA'.trim()),
		lastName: capitalCadena('GARCIA TINEO'.trim()),
		type: 'regular',
		email: 'AGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14671,
		nationality: 'V'.toUpperCase(),
		cedula: 26217150,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMARQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' YOLANDA '.trim()),
		lastName: capitalCadena('MARQUEZ DE CASTILLO'.trim()),
		type: 'regular',
		email: 'YMARQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1893,
		nationality: 'V'.toUpperCase(),
		cedula: 6521734,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fralopez'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO RAFAEL'.trim()),
		lastName: capitalCadena('LOPEZ LEAL'.trim()),
		type: 'regular',
		email: 'fralopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15838,
		nationality: 'V'.toUpperCase(),
		cedula: 14646308,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nfinol'.trim().toLowerCase(),
		name: capitalCadena(' NAIROBIS JOSEFINA'.trim()),
		lastName: capitalCadena('FINOL ROMERO'.trim()),
		type: 'regular',
		email: 'nfinol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15836,
		nationality: 'V'.toUpperCase(),
		cedula: 14453031,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NRAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' NEIMAR '.trim()),
		lastName: capitalCadena('RAMIREZ TORREALBA'.trim()),
		type: 'regular',
		email: 'NRAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16331,
		nationality: 'V'.toUpperCase(),
		cedula: 18894777,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' FABIOLA ELISA'.trim()),
		lastName: capitalCadena('GOMEZ HUERFANO'.trim()),
		type: 'regular',
		email: 'FGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16028,
		nationality: 'V'.toUpperCase(),
		cedula: 19932322,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GCIA. DE CREDITO BANCA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('MEDINA '.trim()),
		type: 'regular',
		email: 'JMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 996,
		nationality: 'V'.toUpperCase(),
		cedula: 9528520,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dalcala'.trim().toLowerCase(),
		name: capitalCadena(' DAVID MANUEL'.trim()),
		lastName: capitalCadena('ALCALA LOPEZ'.trim()),
		type: 'regular',
		email: 'dalcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13263,
		nationality: 'V'.toUpperCase(),
		cedula: 9289079,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VJOSEPH'.trim().toLowerCase(),
		name: capitalCadena(' VICTOR ARMANDO'.trim()),
		lastName: capitalCadena('JOSEPH CARVALLO'.trim()),
		type: 'regular',
		email: 'VJOSEPH@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9627,
		nationality: 'V'.toUpperCase(),
		cedula: 12174564,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUSTODIA DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fviur'.trim().toLowerCase(),
		name: capitalCadena(' FRANK ANTONIO'.trim()),
		lastName: capitalCadena('VIUR DIAZ'.trim()),
		type: 'regular',
		email: 'fviur@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13660,
		nationality: 'V'.toUpperCase(),
		cedula: 10526919,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CUSTODIA TÍTULOS VALORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'derodriguez'.trim().toLowerCase(),
		name: capitalCadena(' DELMA KIMBERLEY'.trim()),
		lastName: capitalCadena('RODRIGUEZ CAPACHO'.trim()),
		type: 'regular',
		email: 'derodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13484,
		nationality: 'V'.toUpperCase(),
		cedula: 14471627,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LROJAS'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EDUARDO'.trim()),
		lastName: capitalCadena('ROJAS PEÑA'.trim()),
		type: 'regular',
		email: 'LROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11140,
		nationality: 'V'.toUpperCase(),
		cedula: 18942670,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBRINEZ'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN JOSE'.trim()),
		lastName: capitalCadena('BRIÑEZ ORTEGA'.trim()),
		type: 'regular',
		email: 'JBRINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11494,
		nationality: 'V'.toUpperCase(),
		cedula: 29533179,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDREYES'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO RAFAEL'.trim()),
		lastName: capitalCadena('REYES TORRES'.trim()),
		type: 'regular',
		email: 'EDREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16213,
		nationality: 'V'.toUpperCase(),
		cedula: 19204222,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓNDE LOGÍSTICA MONEDA EXTRANJERA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TBRICENO'.trim().toLowerCase(),
		name: capitalCadena(' THAIS KATHERINE'.trim()),
		lastName: capitalCadena('BRICEÑO ACOSTA'.trim()),
		type: 'regular',
		email: 'TBRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1672,
		nationality: 'V'.toUpperCase(),
		cedula: 11166446,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUSILVA'.trim().toLowerCase(),
		name: capitalCadena(' JUAN CARLOS'.trim()),
		lastName: capitalCadena('SILVA RAMIREZ'.trim()),
		type: 'regular',
		email: 'JUSILVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4670,
		nationality: 'V'.toUpperCase(),
		cedula: 11673141,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PESCOBAR'.trim().toLowerCase(),
		name: capitalCadena(' PETER JOSE'.trim()),
		lastName: capitalCadena('ESCOBAR LOPEZ'.trim()),
		type: 'regular',
		email: 'PESCOBAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13199,
		nationality: 'V'.toUpperCase(),
		cedula: 6368285,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FREY'.trim().toLowerCase(),
		name: capitalCadena(' FLORANGEL '.trim()),
		lastName: capitalCadena('REY SERRANO'.trim()),
		type: 'regular',
		email: 'FREY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13376,
		nationality: 'V'.toUpperCase(),
		cedula: 6289251,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DAROJAS'.trim().toLowerCase(),
		name: capitalCadena(' DAYLIN CELESTE'.trim()),
		lastName: capitalCadena('ROJAS OTERO'.trim()),
		type: 'regular',
		email: 'DAROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16026,
		nationality: 'V'.toUpperCase(),
		cedula: 26058438,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN COMUNICACIONES EXTERNAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LTAPIA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALBERTO'.trim()),
		lastName: capitalCadena('TAPIA NUÑEZ'.trim()),
		type: 'regular',
		email: 'LTAPIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16191,
		nationality: 'V'.toUpperCase(),
		cedula: 17706627,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN DE PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DUMBRIA'.trim().toLowerCase(),
		name: capitalCadena(' DIEGO ALEJANDRO'.trim()),
		lastName: capitalCadena('UMBRIA UBAN'.trim()),
		type: 'regular',
		email: 'DUMBRIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16308,
		nationality: 'V'.toUpperCase(),
		cedula: 23198743,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GDUQUE'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL ARMANDO'.trim()),
		lastName: capitalCadena('DUQUE LEON'.trim()),
		type: 'regular',
		email: 'GDUQUE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16382,
		nationality: 'V'.toUpperCase(),
		cedula: 29676455,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DISEÑO GRÁFICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cagraz'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN TERESA'.trim()),
		lastName: capitalCadena('AGRAZ DIAZ'.trim()),
		type: 'regular',
		email: 'cagraz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13355,
		nationality: 'V'.toUpperCase(),
		cedula: 6175059,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DOMICILIACIÓN POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGUERRA'.trim().toLowerCase(),
		name: capitalCadena(' LAILING PATRICIA'.trim()),
		lastName: capitalCadena('GUERRA ROJAS'.trim()),
		type: 'regular',
		email: 'LGUERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16107,
		nationality: 'V'.toUpperCase(),
		cedula: 20960950,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INTELIGENCIA DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abonilla'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL JESUS'.trim()),
		lastName: capitalCadena('BONILLA NUÑEZ'.trim()),
		type: 'regular',
		email: 'abonilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13748,
		nationality: 'V'.toUpperCase(),
		cedula: 9146969,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN RECUPERACIONES POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CABRITO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS EDUARDO'.trim()),
		lastName: capitalCadena('BRITO '.trim()),
		type: 'regular',
		email: 'CABRITO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13195,
		nationality: 'V'.toUpperCase(),
		cedula: 6389368,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN SERVICIOS DE AFILIACIÓN POS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BTELLECHEA'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA JHOMSMERY'.trim()),
		lastName: capitalCadena('TELLECHEA VISCOSO'.trim()),
		type: 'regular',
		email: 'BTELLECHEA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16104,
		nationality: 'V'.toUpperCase(),
		cedula: 24087579,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN SERVICIOS DE AFILIACIÓN POS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mamolina'.trim().toLowerCase(),
		name: capitalCadena(' MAX GREGORI'.trim()),
		lastName: capitalCadena('MOLINA MACHADO'.trim()),
		type: 'regular',
		email: 'mamolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14445,
		nationality: 'V'.toUpperCase(),
		cedula: 10805032,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvivas'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EMILIA'.trim()),
		lastName: capitalCadena('VIVAS LIMAS'.trim()),
		type: 'regular',
		email: 'mvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14453,
		nationality: 'V'.toUpperCase(),
		cedula: 23641754,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACARBALLO'.trim().toLowerCase(),
		name: capitalCadena(' ALEJANDRO EFRAIN'.trim()),
		lastName: capitalCadena('CARBALLO CAMACARO'.trim()),
		type: 'regular',
		email: 'ACARBALLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16350,
		nationality: 'V'.toUpperCase(),
		cedula: 23628739,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rramirez'.trim().toLowerCase(),
		name: capitalCadena(' RODOLFO '.trim()),
		lastName: capitalCadena('RAMIREZ BAUTISTA'.trim()),
		type: 'regular',
		email: 'rramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13380,
		nationality: 'V'.toUpperCase(),
		cedula: 10520287,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bramos'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA AZTILEY'.trim()),
		lastName: capitalCadena('RAMOS ZAPATA'.trim()),
		type: 'regular',
		email: 'bramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14396,
		nationality: 'V'.toUpperCase(),
		cedula: 26956358,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' ROYNER JAVIER'.trim()),
		lastName: capitalCadena('PEREZ MADRIZ'.trim()),
		type: 'regular',
		email: 'ROPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16256,
		nationality: 'V'.toUpperCase(),
		cedula: 19581732,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE EVENTOS E IMAGEN CORPORATIVAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kaochoa'.trim().toLowerCase(),
		name: capitalCadena(' KAROLAYN JOSE'.trim()),
		lastName: capitalCadena('OCHOA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'kaochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15601,
		nationality: 'V'.toUpperCase(),
		cedula: 27753201,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MJARDON'.trim().toLowerCase(),
		name: capitalCadena(' MARIA KARINA'.trim()),
		lastName: capitalCadena('JARDON DIAZ'.trim()),
		type: 'regular',
		email: 'MJARDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15704,
		nationality: 'V'.toUpperCase(),
		cedula: 27624887,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANGEL'.trim()),
		lastName: capitalCadena('FERNANDEZ '.trim()),
		type: 'regular',
		email: 'JOSFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16347,
		nationality: 'V'.toUpperCase(),
		cedula: 27731944,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROMAYO'.trim().toLowerCase(),
		name: capitalCadena(' ROBINSON JOSE'.trim()),
		lastName: capitalCadena('MAYO MUÑOZ'.trim()),
		type: 'regular',
		email: 'ROMAYO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16353,
		nationality: 'V'.toUpperCase(),
		cedula: 27661669,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MEDIOS DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NNOGUERA'.trim().toLowerCase(),
		name: capitalCadena(' NATTALY JOSEFINA'.trim()),
		lastName: capitalCadena('NOGUERA PEREZ'.trim()),
		type: 'regular',
		email: 'NNOGUERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10388,
		nationality: 'V'.toUpperCase(),
		cedula: 17125397,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VHUICE'.trim().toLowerCase(),
		name: capitalCadena(' VILMA LUSANA'.trim()),
		lastName: capitalCadena('HUICE MONZON'.trim()),
		type: 'regular',
		email: 'VHUICE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12817,
		nationality: 'V'.toUpperCase(),
		cedula: 12910074,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apetit'.trim().toLowerCase(),
		name: capitalCadena(' ANDRES JOSE'.trim()),
		lastName: capitalCadena('PETIT QUINTERO'.trim()),
		type: 'regular',
		email: 'apetit@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13677,
		nationality: 'V'.toUpperCase(),
		cedula: 5580518,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' STEPHANIE MICHEL'.trim()),
		lastName: capitalCadena('GOMEZ ACERO'.trim()),
		type: 'regular',
		email: 'SGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11508,
		nationality: 'V'.toUpperCase(),
		cedula: 24724735,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BBOLIVAR'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA YULEISY'.trim()),
		lastName: capitalCadena('BOLIVAR PIÑANGO'.trim()),
		type: 'regular',
		email: 'BBOLIVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12989,
		nationality: 'V'.toUpperCase(),
		cedula: 23947634,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bgaldona'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA WILESKY'.trim()),
		lastName: capitalCadena('GALDONA GUTIERREZ'.trim()),
		type: 'regular',
		email: 'bgaldona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14033,
		nationality: 'V'.toUpperCase(),
		cedula: 19711833,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS CONTROL Y SEGUIMIENTO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGARRIDO'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER '.trim()),
		lastName: capitalCadena('GARRIDO SANZ'.trim()),
		type: 'regular',
		email: 'JGARRIDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11102,
		nationality: 'V'.toUpperCase(),
		cedula: 13886283,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WBARAT'.trim().toLowerCase(),
		name: capitalCadena(' WENDY SULBEY'.trim()),
		lastName: capitalCadena('BARAT BARRETO'.trim()),
		type: 'regular',
		email: 'WBARAT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12851,
		nationality: 'V'.toUpperCase(),
		cedula: 24210443,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDEFREITAS'.trim().toLowerCase(),
		name: capitalCadena(' ELIZABETH '.trim()),
		lastName: capitalCadena('DE FREITAS DE SOUSA'.trim()),
		type: 'regular',
		email: 'EDEFREITAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2861,
		nationality: 'V'.toUpperCase(),
		cedula: 12761468,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCHIRINOS'.trim().toLowerCase(),
		name: capitalCadena(' YURI KARINA'.trim()),
		lastName: capitalCadena('CHIRINOS CALDERON'.trim()),
		type: 'regular',
		email: 'YCHIRINOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4205,
		nationality: 'V'.toUpperCase(),
		cedula: 18111100,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SMERLO'.trim().toLowerCase(),
		name: capitalCadena(' SARA DANIELA'.trim()),
		lastName: capitalCadena('MERLO MOGOLLON'.trim()),
		type: 'regular',
		email: 'SMERLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12863,
		nationality: 'V'.toUpperCase(),
		cedula: 12358860,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LBASTARDO'.trim().toLowerCase(),
		name: capitalCadena(' LENIXA REYNIE'.trim()),
		lastName: capitalCadena('BASTARDO TORO'.trim()),
		type: 'regular',
		email: 'LBASTARDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10506,
		nationality: 'V'.toUpperCase(),
		cedula: 15844493,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTORO'.trim().toLowerCase(),
		name: capitalCadena(' MAYRA ALEJANDRA'.trim()),
		lastName: capitalCadena('TORO LOPEZ'.trim()),
		type: 'regular',
		email: 'MTORO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12917,
		nationality: 'V'.toUpperCase(),
		cedula: 28136731,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yparucho'.trim().toLowerCase(),
		name: capitalCadena(' YOLGAMI ALEXANDRA'.trim()),
		lastName: capitalCadena('PARUCHO ROMERO'.trim()),
		type: 'regular',
		email: 'yparucho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14176,
		nationality: 'V'.toUpperCase(),
		cedula: 21413896,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DIGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' DIANA PATRICIA'.trim()),
		lastName: capitalCadena('GOMEZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'DIGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12909,
		nationality: 'V'.toUpperCase(),
		cedula: 17440693,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSOLE'.trim().toLowerCase(),
		name: capitalCadena(' MILEIDY ANDREINA'.trim()),
		lastName: capitalCadena('SOLE BRICEÑO'.trim()),
		type: 'regular',
		email: 'MSOLE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11500,
		nationality: 'V'.toUpperCase(),
		cedula: 25212568,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DBETANCOURT'.trim().toLowerCase(),
		name: capitalCadena(' DAMARYS DANUBIS'.trim()),
		lastName: capitalCadena('BETANCOURT LANDAETA'.trim()),
		type: 'regular',
		email: 'DBETANCOURT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14161,
		nationality: 'V'.toUpperCase(),
		cedula: 15548935,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YAVILA'.trim().toLowerCase(),
		name: capitalCadena(' YEIBER JOSE'.trim()),
		lastName: capitalCadena('AVILA OROPEZA'.trim()),
		type: 'regular',
		email: 'YAVILA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5141,
		nationality: 'V'.toUpperCase(),
		cedula: 19391230,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EGUEVARA'.trim().toLowerCase(),
		name: capitalCadena(' EDDUAR JESUS'.trim()),
		lastName: capitalCadena('GUEVARA MAGALLANES'.trim()),
		type: 'regular',
		email: 'EGUEVARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10969,
		nationality: 'V'.toUpperCase(),
		cedula: 18837932,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESAS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPALMA'.trim().toLowerCase(),
		name: capitalCadena(' JOHANA ALEXANDRA'.trim()),
		lastName: capitalCadena('PALMA NUNES'.trim()),
		type: 'regular',
		email: 'JPALMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12711,
		nationality: 'V'.toUpperCase(),
		cedula: 20841788,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA PRIVADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EVARELA'.trim().toLowerCase(),
		name: capitalCadena(' ESTHER MARIA'.trim()),
		lastName: capitalCadena('VARELA VARGAS'.trim()),
		type: 'regular',
		email: 'EVARELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11545,
		nationality: 'V'.toUpperCase(),
		cedula: 6860590,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IANDRADE'.trim().toLowerCase(),
		name: capitalCadena(' IRENE DAMARIS'.trim()),
		lastName: capitalCadena('ANDRADE JARA'.trim()),
		type: 'regular',
		email: 'IANDRADE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2461,
		nationality: 'V'.toUpperCase(),
		cedula: 19734139,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZROJAS'.trim().toLowerCase(),
		name: capitalCadena(' ZORAIDA EGLEE'.trim()),
		lastName: capitalCadena('ROJAS MOLINA'.trim()),
		type: 'regular',
		email: 'ZROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12598,
		nationality: 'V'.toUpperCase(),
		cedula: 19733079,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARCGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' MARCELA ESTHER'.trim()),
		lastName: capitalCadena('GUTIERREZ ATENCIA'.trim()),
		type: 'regular',
		email: 'MARCGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13601,
		nationality: 'V'.toUpperCase(),
		cedula: 10485354,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wjaimes'.trim().toLowerCase(),
		name: capitalCadena(' WILMER ALEXANDER'.trim()),
		lastName: capitalCadena('JAIMES '.trim()),
		type: 'regular',
		email: 'wjaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13344,
		nationality: 'V'.toUpperCase(),
		cedula: 14990458,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nolivares'.trim().toLowerCase(),
		name: capitalCadena(' NOHEMI DEL CARMEN'.trim()),
		lastName: capitalCadena('OLIVARES DE LINARES'.trim()),
		type: 'regular',
		email: 'nolivares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13391,
		nationality: 'V'.toUpperCase(),
		cedula: 12043831,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EBRAVO'.trim().toLowerCase(),
		name: capitalCadena(' ERICK JAVIER'.trim()),
		lastName: capitalCadena('BRAVO CASTELLANO'.trim()),
		type: 'regular',
		email: 'EBRAVO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11343,
		nationality: 'V'.toUpperCase(),
		cedula: 17489944,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS GAS Y PETRÓLEO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eserrano'.trim().toLowerCase(),
		name: capitalCadena(' EGLEINNYS CAROLINA'.trim()),
		lastName: capitalCadena('SERRANO GIL'.trim()),
		type: 'regular',
		email: 'eserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10041,
		nationality: 'V'.toUpperCase(),
		cedula: 20994610,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS MEDIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCAPRASIO'.trim().toLowerCase(),
		name: capitalCadena(' MIRLA MARIA'.trim()),
		lastName: capitalCadena('CAPRASIO VILLAZMIL'.trim()),
		type: 'regular',
		email: 'MCAPRASIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12802,
		nationality: 'V'.toUpperCase(),
		cedula: 19503006,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mavendano'.trim().toLowerCase(),
		name: capitalCadena(' MARY WENCE'.trim()),
		lastName: capitalCadena('AVENDAÑO GUEVARA'.trim()),
		type: 'regular',
		email: 'mavendano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10638,
		nationality: 'V'.toUpperCase(),
		cedula: 10380647,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AFARIAS'.trim().toLowerCase(),
		name: capitalCadena(' ANTONY BEIKERT'.trim()),
		lastName: capitalCadena('FARIAS FARFAN'.trim()),
		type: 'regular',
		email: 'AFARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10539,
		nationality: 'V'.toUpperCase(),
		cedula: 22492882,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA EDIMAR'.trim()),
		lastName: capitalCadena('GOMEZ TORRES'.trim()),
		type: 'regular',
		email: 'OGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8786,
		nationality: 'V'.toUpperCase(),
		cedula: 26838304,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDGGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' EDGAR STANNY'.trim()),
		lastName: capitalCadena('GONZALEZ BARROYETA'.trim()),
		type: 'regular',
		email: 'EDGGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2916,
		nationality: 'V'.toUpperCase(),
		cedula: 13252856,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. CORPORATIVA SECTOR TELECOMUNICACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEPACHECO'.trim().toLowerCase(),
		name: capitalCadena(' JENZER ANTONIO'.trim()),
		lastName: capitalCadena('PACHECO ABAD'.trim()),
		type: 'regular',
		email: 'JEPACHECO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9023,
		nationality: 'V'.toUpperCase(),
		cedula: 23107099,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. CORPORATIVA SECTOR TELECOMUNICACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YREBETE'.trim().toLowerCase(),
		name: capitalCadena(' YAMILETH CAROLINA'.trim()),
		lastName: capitalCadena('REBETE DELGADO'.trim()),
		type: 'regular',
		email: 'YREBETE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16064,
		nationality: 'V'.toUpperCase(),
		cedula: 14130034,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA ASUNTOS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RBETANCOURT'.trim().toLowerCase(),
		name: capitalCadena(' ROMULO JOSE'.trim()),
		lastName: capitalCadena('BETANCOURT ZERPA'.trim()),
		type: 'regular',
		email: 'RBETANCOURT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12296,
		nationality: 'V'.toUpperCase(),
		cedula: 6113940,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA CTRL Y SEGUIMIENTO DE AUDITORÍA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HAPEREIRA'.trim().toLowerCase(),
		name: capitalCadena(' HARLEN JOSE'.trim()),
		lastName: capitalCadena('PEREIRA VASQUEZ'.trim()),
		type: 'regular',
		email: 'HAPEREIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11323,
		nationality: 'V'.toUpperCase(),
		cedula: 6869767,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE AUDITORIA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NBETANCOURT'.trim().toLowerCase(),
		name: capitalCadena(' NEIRYMAR ADRIANIRA'.trim()),
		lastName: capitalCadena('BETANCOURT PESCOSO'.trim()),
		type: 'regular',
		email: 'NBETANCOURT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12811,
		nationality: 'V'.toUpperCase(),
		cedula: 16224665,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ESTADIST Y ANÁLISIS ESTRATÉGICO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CEFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' CESAR EDUARDO'.trim()),
		lastName: capitalCadena('FERNANDEZ ALLANDE'.trim()),
		type: 'regular',
		email: 'CEFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15955,
		nationality: 'V'.toUpperCase(),
		cedula: 12880124,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nguerrero'.trim().toLowerCase(),
		name: capitalCadena(' NANCY LOURDES'.trim()),
		lastName: capitalCadena('GUERRERO URIBE'.trim()),
		type: 'regular',
		email: 'nguerrero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13757,
		nationality: 'V'.toUpperCase(),
		cedula: 10808435,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE INMUEBLES PROPIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frguzman'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS ANDREINA'.trim()),
		lastName: capitalCadena('GUZMAN DE GUEDEZ'.trim()),
		type: 'regular',
		email: 'frguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14393,
		nationality: 'V'.toUpperCase(),
		cedula: 15440899,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA ALMACEN Y PROVEEDURÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'scortes'.trim().toLowerCase(),
		name: capitalCadena(' SONIA ANDREINA'.trim()),
		lastName: capitalCadena('CORTES BALLEN'.trim()),
		type: 'regular',
		email: 'scortes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14654,
		nationality: 'V'.toUpperCase(),
		cedula: 14917835,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA ANALISIS DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PBOVY'.trim().toLowerCase(),
		name: capitalCadena(' PETULA FRANCISCA'.trim()),
		lastName: capitalCadena('BOVY BOLL'.trim()),
		type: 'regular',
		email: 'PBOVY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 283,
		nationality: 'V'.toUpperCase(),
		cedula: 11928650,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA COMPRAS Y SERVICIOS GENERALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMONSALVE'.trim().toLowerCase(),
		name: capitalCadena(' LUZ YANEY'.trim()),
		lastName: capitalCadena('MONSALVE ROSALES'.trim()),
		type: 'regular',
		email: 'LMONSALVE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1867,
		nationality: 'V'.toUpperCase(),
		cedula: 11506339,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTABILIDAD FIDUCIARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aktorres'.trim().toLowerCase(),
		name: capitalCadena(' AKALIA DEYALIZ'.trim()),
		lastName: capitalCadena('TORRES '.trim()),
		type: 'regular',
		email: 'aktorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14564,
		nationality: 'V'.toUpperCase(),
		cedula: 6444518,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTRATOS Y PROVEEDORES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LOLIVEROS'.trim().toLowerCase(),
		name: capitalCadena(' LEIDA ROSALIA'.trim()),
		lastName: capitalCadena('OLIVEROS RONDON'.trim()),
		type: 'regular',
		email: 'LOLIVEROS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 680,
		nationality: 'V'.toUpperCase(),
		cedula: 5961089,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CONTROL DE INMUEBLES ARRENDADOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YVVAZQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' YVELISS DEL CARMEN'.trim()),
		lastName: capitalCadena('VAZQUEZ CORTEZ'.trim()),
		type: 'regular',
		email: 'YVVAZQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15610,
		nationality: 'V'.toUpperCase(),
		cedula: 9682972,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA CORRESPONSALIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IGUERRA'.trim().toLowerCase(),
		name: capitalCadena(' ISABEL TERESA'.trim()),
		lastName: capitalCadena('GUERRA SERRANO'.trim()),
		type: 'regular',
		email: 'IGUERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 610,
		nationality: 'V'.toUpperCase(),
		cedula: 4246187,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA CTRL CONTABLE Y GESTIÓN DE GASTO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMORENO'.trim().toLowerCase(),
		name: capitalCadena(' CONSUELO DEL CARMEN'.trim()),
		lastName: capitalCadena('MORENO ROSALES'.trim()),
		type: 'regular',
		email: 'CMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 125,
		nationality: 'V'.toUpperCase(),
		cedula: 9236516,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZESTACIO'.trim().toLowerCase(),
		name: capitalCadena(' ZULIMA DEL VALLE'.trim()),
		lastName: capitalCadena('ESTACIO SILVA'.trim()),
		type: 'regular',
		email: 'ZESTACIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13105,
		nationality: 'V'.toUpperCase(),
		cedula: 10801279,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMEZA'.trim().toLowerCase(),
		name: capitalCadena(' JACQUELINE COROMOTO'.trim()),
		lastName: capitalCadena('MEZA JUSTINIANO'.trim()),
		type: 'regular',
		email: 'JMEZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 845,
		nationality: 'V'.toUpperCase(),
		cedula: 6251081,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA PAGO A PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MESPANA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA GABRIELA'.trim()),
		lastName: capitalCadena('ESPAÑA DE RIVERO'.trim()),
		type: 'regular',
		email: 'MESPANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16031,
		nationality: 'V'.toUpperCase(),
		cedula: 13992455,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSEHRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE HUMBERTO'.trim()),
		lastName: capitalCadena('RODRIGUEZ RAMIREZ'.trim()),
		type: 'regular',
		email: 'JOSEHRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11647,
		nationality: 'V'.toUpperCase(),
		cedula: 11070807,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE AREA TRIBUTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lalarcon'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALFREDO'.trim()),
		lastName: capitalCadena('ALARCON '.trim()),
		type: 'regular',
		email: 'lalarcon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13999,
		nationality: 'V'.toUpperCase(),
		cedula: 6049772,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CONTROL PRESUPUESTARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' YISSI YUSBEL'.trim()),
		lastName: capitalCadena('BLANCO HERDE'.trim()),
		type: 'regular',
		email: 'YBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1429,
		nationality: 'V'.toUpperCase(),
		cedula: 11196846,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA PLAN MAYOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' FELIPE ALEXANDER'.trim()),
		lastName: capitalCadena('FERNANDEZ BLANDIN'.trim()),
		type: 'regular',
		email: 'FFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15840,
		nationality: 'V'.toUpperCase(),
		cedula: 20093754,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IDOMINGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' IVETTE DE JESUS'.trim()),
		lastName: capitalCadena('DOMINGUEZ DE MORALES'.trim()),
		type: 'regular',
		email: 'IDOMINGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6730,
		nationality: 'V'.toUpperCase(),
		cedula: 5580240,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA DE AREA GESTIÓN DE ESTRUCTURAS DIRECC CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' NESTOR JOSE'.trim()),
		lastName: capitalCadena('SANCHEZ AMAYA'.trim()),
		type: 'regular',
		email: 'NSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16114,
		nationality: 'V'.toUpperCase(),
		cedula: 6060400,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ÁREA DE PROYECTOS DE TRANSFORMACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CQUERALES'.trim().toLowerCase(),
		name: capitalCadena(' CAROL JOSEFINA'.trim()),
		lastName: capitalCadena('QUERALES MELENDEZ'.trim()),
		type: 'regular',
		email: 'CQUERALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16068,
		nationality: 'V'.toUpperCase(),
		cedula: 13087567,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ARQUITECTURA DE PROCESOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBARCENAS'.trim().toLowerCase(),
		name: capitalCadena(' JOSMAR VICENTE'.trim()),
		lastName: capitalCadena('BARCENAS LAYA'.trim()),
		type: 'regular',
		email: 'JBARCENAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15078,
		nationality: 'V'.toUpperCase(),
		cedula: 18221531,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA COMPENSACIÓN Y BENEFICIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' INGRID '.trim()),
		lastName: capitalCadena('ORTIZ ZAPARDIEL'.trim()),
		type: 'regular',
		email: 'IORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16291,
		nationality: 'V'.toUpperCase(),
		cedula: 11943295,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA GESTIÓN DE ESTRUCTURAS NEGOCIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ECABRERA'.trim().toLowerCase(),
		name: capitalCadena(' EVA ISABEL'.trim()),
		lastName: capitalCadena('CABRERA SALAZAR'.trim()),
		type: 'regular',
		email: 'ECABRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 376,
		nationality: 'V'.toUpperCase(),
		cedula: 6249163,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA SELECCION DE TALENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMONTES'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO ANDRES'.trim()),
		lastName: capitalCadena('MONTES DE OCA PEREZ'.trim()),
		type: 'regular',
		email: 'EMONTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16294,
		nationality: 'V'.toUpperCase(),
		cedula: 20107835,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA TRANSFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSESPINOZA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE DAVID'.trim()),
		lastName: capitalCadena('ESPINOZA ZEA'.trim()),
		type: 'regular',
		email: 'JOSESPINOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8647,
		nationality: 'V'.toUpperCase(),
		cedula: 9489120,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE COBRANZA Y RECUPERACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RBELLO'.trim().toLowerCase(),
		name: capitalCadena(' RAFAEL ENRIQUE'.trim()),
		lastName: capitalCadena('BELLO MADRIZ'.trim()),
		type: 'regular',
		email: 'RBELLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7756,
		nationality: 'V'.toUpperCase(),
		cedula: 11991020,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA GESTIÓN Y CONTROL OPERATIVO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' JUAN LUIS'.trim()),
		lastName: capitalCadena('MENDOZA VILLEGAS'.trim()),
		type: 'regular',
		email: 'JUMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11213,
		nationality: 'V'.toUpperCase(),
		cedula: 10515140,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA LOGÍSTICA DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA IRAIS'.trim()),
		lastName: capitalCadena('PEREZ ARGUINZONES'.trim()),
		type: 'regular',
		email: 'PPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4256,
		nationality: 'V'.toUpperCase(),
		cedula: 9957257,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA OPERACIONES DE TESORERÍA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MLEON'.trim().toLowerCase(),
		name: capitalCadena(' MADELIN '.trim()),
		lastName: capitalCadena('LEON MATA'.trim()),
		type: 'regular',
		email: 'MLEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14503,
		nationality: 'V'.toUpperCase(),
		cedula: 12417156,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ASUNTOS TÉCNICOS REGULATORIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KREYES'.trim().toLowerCase(),
		name: capitalCadena(' KATHERYNE TERESA'.trim()),
		lastName: capitalCadena('REYES DIAZ'.trim()),
		type: 'regular',
		email: 'KREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12368,
		nationality: 'V'.toUpperCase(),
		cedula: 11309069,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA CTROL INSTITUCIONAL Y ASUNTOS CORP.'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DPONTES'.trim().toLowerCase(),
		name: capitalCadena(' DESIREE '.trim()),
		lastName: capitalCadena('PONTES TEIXEIRA'.trim()),
		type: 'regular',
		email: 'DPONTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12587,
		nationality: 'V'.toUpperCase(),
		cedula: 17962482,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DEGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' DEBORAH '.trim()),
		lastName: capitalCadena('GOMEZ SAAB'.trim()),
		type: 'regular',
		email: 'DEGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4680,
		nationality: 'V'.toUpperCase(),
		cedula: 14034696,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE COMUNICACIONES CORPORATIVAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AACOSTA'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDER RAFAEL'.trim()),
		lastName: capitalCadena('ACOSTA GOMEZ'.trim()),
		type: 'regular',
		email: 'AACOSTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14550,
		nationality: 'V'.toUpperCase(),
		cedula: 14216698,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ÁREA EXPERIENCIA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pmartinez'.trim().toLowerCase(),
		name: capitalCadena(' PELAYO EUGENIO'.trim()),
		lastName: capitalCadena('MARTINEZ DEL CERRO'.trim()),
		type: 'regular',
		email: 'pmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14645,
		nationality: 'V'.toUpperCase(),
		cedula: 11231223,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CYANEZ'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ISABEL'.trim()),
		lastName: capitalCadena('YANEZ PARADAS'.trim()),
		type: 'regular',
		email: 'CYANEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1621,
		nationality: 'V'.toUpperCase(),
		cedula: 11488897,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERVICIOS TDC'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'INAMIAS'.trim().toLowerCase(),
		name: capitalCadena(' INDIRA COROMOTO'.trim()),
		lastName: capitalCadena('NAMIAS VERA'.trim()),
		type: 'regular',
		email: 'INAMIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14715,
		nationality: 'V'.toUpperCase(),
		cedula: 11164732,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE INNOVACIÓN Y PRODUCTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSOAREZ'.trim().toLowerCase(),
		name: capitalCadena(' MARGARITA DE FATIMA'.trim()),
		lastName: capitalCadena('SOAREZ DOMINGUEZ'.trim()),
		type: 'regular',
		email: 'MSOAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2020,
		nationality: 'V'.toUpperCase(),
		cedula: 6401836,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA VALORES Y ACCIONISTAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' LUCIA '.trim()),
		lastName: capitalCadena('GARCIA CRESPO'.trim()),
		type: 'regular',
		email: 'LGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12105,
		nationality: 'V'.toUpperCase(),
		cedula: 6563110,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE NEGOCIOS INTERNACIONALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMAGALLANES'.trim().toLowerCase(),
		name: capitalCadena(' MILAGROS JOSEFINA'.trim()),
		lastName: capitalCadena('MAGALLANES VILLARREAL'.trim()),
		type: 'regular',
		email: 'MMAGALLANES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 328,
		nationality: 'V'.toUpperCase(),
		cedula: 8858399,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA NEGOCIOS FIDUCIARIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LBERMUDEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUZ MARINA'.trim()),
		lastName: capitalCadena('BERMUDEZ GUZMAN'.trim()),
		type: 'regular',
		email: 'LBERMUDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1527,
		nationality: 'V'.toUpperCase(),
		cedula: 8228726,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE NEGOCIOS MULTINACIONAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA CAROLINA'.trim()),
		lastName: capitalCadena('COLMENARES SEGOVIA'.trim()),
		type: 'regular',
		email: 'DCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 169,
		nationality: 'V'.toUpperCase(),
		cedula: 12391944,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE NEGOCIOS SECTOR FINANCIERO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSIFONTES'.trim().toLowerCase(),
		name: capitalCadena(' JUAN ERNESTO'.trim()),
		lastName: capitalCadena('SIFONTES PAREDES'.trim()),
		type: 'regular',
		email: 'JSIFONTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16332,
		nationality: 'V'.toUpperCase(),
		cedula: 9485441,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA DE NEGOCIOS SECTOR NACIONAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MDEGOUVEIA'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL LUIS'.trim()),
		lastName: capitalCadena('DE GOUVEIA FREITAS'.trim()),
		type: 'regular',
		email: 'MDEGOUVEIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6674,
		nationality: 'V'.toUpperCase(),
		cedula: 12382457,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. CORPORATIVA SECTOR TELECOMUNICACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CTOVAR'.trim().toLowerCase(),
		name: capitalCadena(' CLARETH DEL CARMEN'.trim()),
		lastName: capitalCadena('TOVAR DE PACHECO'.trim()),
		type: 'regular',
		email: 'CTOVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13012,
		nationality: 'V'.toUpperCase(),
		cedula: 11942350,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asagodino'.trim().toLowerCase(),
		name: capitalCadena(' ALICIA BEATRIZ'.trim()),
		lastName: capitalCadena('SA GODIÑO DA SILVA'.trim()),
		type: 'regular',
		email: 'asagodino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14677,
		nationality: 'V'.toUpperCase(),
		cedula: 21070163,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE METODOLOGÍA DE RIESGO FINANCIERO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YFARIAS'.trim().toLowerCase(),
		name: capitalCadena(' YLAYALY MARIA'.trim()),
		lastName: capitalCadena('FARIAS UGAS'.trim()),
		type: 'regular',
		email: 'YFARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12740,
		nationality: 'V'.toUpperCase(),
		cedula: 11970324,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y SEG. SOBRE CONT. DE NEG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPALACIO'.trim().toLowerCase(),
		name: capitalCadena(' MARIBEL DEL SOCORRO'.trim()),
		lastName: capitalCadena('PALACIO DE D ANGELO'.trim()),
		type: 'regular',
		email: 'MPALACIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16067,
		nationality: 'V'.toUpperCase(),
		cedula: 18599678,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE RIESGO DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DTRIVINO'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA DEL CARMEN'.trim()),
		lastName: capitalCadena('TRIVIÑO VASQUEZ'.trim()),
		type: 'regular',
		email: 'DTRIVINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12455,
		nationality: 'V'.toUpperCase(),
		cedula: 21134971,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE RIESGO DE MERCADO Y LIQUIDEZ'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGENER'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ENRIQUE'.trim()),
		lastName: capitalCadena('GENER CASTRO'.trim()),
		type: 'regular',
		email: 'LGENER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7494,
		nationality: 'V'.toUpperCase(),
		cedula: 10995485,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE RIESGO OPERACIONAL MID Y BACK OFFICE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YGUZMAN'.trim().toLowerCase(),
		name: capitalCadena(' YLDEMARO ANTONIO'.trim()),
		lastName: capitalCadena('GUZMAN YSTURDE'.trim()),
		type: 'regular',
		email: 'YGUZMAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14611,
		nationality: 'V'.toUpperCase(),
		cedula: 6862425,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA RIESGO OPERACIONAL FRONT OFFICE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANAIDA DEL CARMEN'.trim()),
		lastName: capitalCadena('SANCHEZ BRAZON'.trim()),
		type: 'regular',
		email: 'ASANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16277,
		nationality: 'V'.toUpperCase(),
		cedula: 17907878,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ANÁLISIS ESTRATÉGICO Y DETECCIÓN DE TIPOL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JDEWIT'.trim().toLowerCase(),
		name: capitalCadena(' JOHAN PAUL'.trim()),
		lastName: capitalCadena('DE WIT CONTRERAS'.trim()),
		type: 'regular',
		email: 'JDEWIT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16338,
		nationality: 'V'.toUpperCase(),
		cedula: 14587488,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'overa'.trim().toLowerCase(),
		name: capitalCadena(' OYAIFRE YORKAEF'.trim()),
		lastName: capitalCadena('VERA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'overa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15512,
		nationality: 'V'.toUpperCase(),
		cedula: 28319013,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO Y VERIFICACIÓN DE OP INUSUAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jrizo'.trim().toLowerCase(),
		name: capitalCadena(' JOSMAR ALEXANDER'.trim()),
		lastName: capitalCadena('RIZO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'jrizo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15113,
		nationality: 'V'.toUpperCase(),
		cedula: 20154439,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ESTADÍSTICA Y MANTENIMIENTO DE REGISTROS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JENIRE ZAIR'.trim()),
		lastName: capitalCadena('HERNANDEZ NUÑEZ'.trim()),
		type: 'regular',
		email: 'JEHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11865,
		nationality: 'V'.toUpperCase(),
		cedula: 19087068,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE GOBIERNO CORPORATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asalazar'.trim().toLowerCase(),
		name: capitalCadena(' ALEJANDRO DAVID'.trim()),
		lastName: capitalCadena('SALAZAR CARABALLO'.trim()),
		type: 'regular',
		email: 'asalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14590,
		nationality: 'V'.toUpperCase(),
		cedula: 20825564,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE ACTIVOS FIJOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FOJEDA'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS CAROLINA'.trim()),
		lastName: capitalCadena('OJEDA CRESPO'.trim()),
		type: 'regular',
		email: 'FOJEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14655,
		nationality: 'V'.toUpperCase(),
		cedula: 16027955,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE COMPRAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KAPENA'.trim().toLowerCase(),
		name: capitalCadena(' KARYNS YORIMACK'.trim()),
		lastName: capitalCadena('PEÑA DE ORTIZ'.trim()),
		type: 'regular',
		email: 'KAPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11719,
		nationality: 'V'.toUpperCase(),
		cedula: 12501707,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE CONTABILIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VTOLEDO'.trim().toLowerCase(),
		name: capitalCadena(' VILMA CECILIA'.trim()),
		lastName: capitalCadena('TOLEDO MONTIEL'.trim()),
		type: 'regular',
		email: 'VTOLEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1169,
		nationality: 'V'.toUpperCase(),
		cedula: 9412800,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CONTROL CONTABLE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RIRAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' RITA XIOMARA'.trim()),
		lastName: capitalCadena('RAMIREZ SEPULVEDA'.trim()),
		type: 'regular',
		email: 'RIRAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1427,
		nationality: 'V'.toUpperCase(),
		cedula: 6044017,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DEPARTAMENTO GESTIÓN DEL GASTO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DQUELLE'.trim().toLowerCase(),
		name: capitalCadena(' DEISY KARINA'.trim()),
		lastName: capitalCadena('QUELLE HEREDIA'.trim()),
		type: 'regular',
		email: 'DQUELLE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 496,
		nationality: 'V'.toUpperCase(),
		cedula: 13511051,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edelgado'.trim().toLowerCase(),
		name: capitalCadena(' ELIMAR LISSETH'.trim()),
		lastName: capitalCadena('DELGADO ALVAREZ'.trim()),
		type: 'regular',
		email: 'edelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14428,
		nationality: 'V'.toUpperCase(),
		cedula: 15821726,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE DOCUMENTACIÓN DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RHUERFANO'.trim().toLowerCase(),
		name: capitalCadena(' ROMEL DAVID'.trim()),
		lastName: capitalCadena('HUERFANO DIAZ'.trim()),
		type: 'regular',
		email: 'RHUERFANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3999,
		nationality: 'V'.toUpperCase(),
		cedula: 11641044,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE INFORMACIÓN FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRUGGIERO'.trim().toLowerCase(),
		name: capitalCadena(' YOLANDA '.trim()),
		lastName: capitalCadena('RUGGIERO PRATO'.trim()),
		type: 'regular',
		email: 'YRUGGIERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12641,
		nationality: 'V'.toUpperCase(),
		cedula: 10533537,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE INVESTIGACIÓN ECONOMICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPINO'.trim().toLowerCase(),
		name: capitalCadena(' JOSEPH ALFONSO'.trim()),
		lastName: capitalCadena('PINO FUENTES'.trim()),
		type: 'regular',
		email: 'JPINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14450,
		nationality: 'V'.toUpperCase(),
		cedula: 26255659,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YBRICENO'.trim().toLowerCase(),
		name: capitalCadena(' YANELY ALEJANDRA'.trim()),
		lastName: capitalCadena('BRICEÑO HERNANDEZ'.trim()),
		type: 'regular',
		email: 'YBRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8788,
		nationality: 'V'.toUpperCase(),
		cedula: 25771313,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MERCADO MONETARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PCHIESA'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO ALBERTO'.trim()),
		lastName: capitalCadena('CHIESA VALLENILLA'.trim()),
		type: 'regular',
		email: 'PCHIESA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 804,
		nationality: 'V'.toUpperCase(),
		cedula: 8282497,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PAGOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TORELLANA'.trim().toLowerCase(),
		name: capitalCadena(' TAMAIRA JOSEFINA'.trim()),
		lastName: capitalCadena('ORELLANA PALMA'.trim()),
		type: 'regular',
		email: 'TORELLANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12640,
		nationality: 'V'.toUpperCase(),
		cedula: 11130823,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRESUPUESTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lupena'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALFREDO'.trim()),
		lastName: capitalCadena('PEÑA ACEVEDO'.trim()),
		type: 'regular',
		email: 'lupena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14613,
		nationality: 'V'.toUpperCase(),
		cedula: 20678782,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE RENTA FIJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GEMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS CAROLINA'.trim()),
		lastName: capitalCadena('MENDOZA GRATEROL'.trim()),
		type: 'regular',
		email: 'GEMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2467,
		nationality: 'V'.toUpperCase(),
		cedula: 19711375,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE VIÁTICOS CONTROL Y REVISORÍA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCORDOVA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALEXIS'.trim()),
		lastName: capitalCadena('CORDOVA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'LCORDOVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10545,
		nationality: 'V'.toUpperCase(),
		cedula: 20616068,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABLANCO1'.trim().toLowerCase(),
		name: capitalCadena(' ANDRES ELOY'.trim()),
		lastName: capitalCadena('BLANCO PEREZ'.trim()),
		type: 'regular',
		email: 'ABLANCO1@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 360,
		nationality: 'V'.toUpperCase(),
		cedula: 13586355,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA LEGAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMONDRAGON'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL HUMBERTO'.trim()),
		lastName: capitalCadena('MONDRAGON RANGEL'.trim()),
		type: 'regular',
		email: 'DMONDRAGON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13000,
		nationality: 'V'.toUpperCase(),
		cedula: 15200394,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DEPARTAMENTO GESTIÓN OPERATIVA ZONA II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lbernot'.trim().toLowerCase(),
		name: capitalCadena(' LISBETH MERCEDES'.trim()),
		lastName: capitalCadena('BERNOT PEREZ'.trim()),
		type: 'regular',
		email: 'lbernot@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13288,
		nationality: 'V'.toUpperCase(),
		cedula: 10870022,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WMONTILLA'.trim().toLowerCase(),
		name: capitalCadena(' WILMER LEONEL'.trim()),
		lastName: capitalCadena('MONTILLA DURAN'.trim()),
		type: 'regular',
		email: 'WMONTILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3642,
		nationality: 'V'.toUpperCase(),
		cedula: 12410144,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DIGITALIZACIÓN, CTROL ARCHIV. Y CORRESPONDENCIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASMORENO'.trim().toLowerCase(),
		name: capitalCadena(' ASTRID CAROLINA'.trim()),
		lastName: capitalCadena('MORENO SUAZA'.trim()),
		type: 'regular',
		email: 'ASMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6199,
		nationality: 'V'.toUpperCase(),
		cedula: 24342056,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA GESTIÓN OPERATIVA ZONA I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PRIVERA'.trim().toLowerCase(),
		name: capitalCadena(' PEGGY MAGALY'.trim()),
		lastName: capitalCadena('RIVERA NUÑEZ'.trim()),
		type: 'regular',
		email: 'PRIVERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2194,
		nationality: 'V'.toUpperCase(),
		cedula: 14892805,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CONTROL Y SEGUIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YDAZA'.trim().toLowerCase(),
		name: capitalCadena(' YOLANDA RAFAELA'.trim()),
		lastName: capitalCadena('DAZA MADERA'.trim()),
		type: 'regular',
		email: 'YDAZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11170,
		nationality: 'V'.toUpperCase(),
		cedula: 3751847,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CAJA DE AHORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' THAYRIS NAZARETH'.trim()),
		lastName: capitalCadena('GONZALEZ TOVAR'.trim()),
		type: 'regular',
		email: 'TGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12071,
		nationality: 'V'.toUpperCase(),
		cedula: 13225432,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FDOVERI'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO '.trim()),
		lastName: capitalCadena('REMIGIO DOVERI'.trim()),
		type: 'regular',
		email: 'FDOVERI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2858,
		nationality: 'V'.toUpperCase(),
		cedula: 5299117,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA GESTIÓN DOCUMENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'racastillo'.trim().toLowerCase(),
		name: capitalCadena(' RAYDELI DEL CARMEN'.trim()),
		lastName: capitalCadena('CASTILLO ANGULO'.trim()),
		type: 'regular',
		email: 'racastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14607,
		nationality: 'V'.toUpperCase(),
		cedula: 13223947,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAMORALES'.trim().toLowerCase(),
		name: capitalCadena(' MARGLI YELIZA'.trim()),
		lastName: capitalCadena('MORALES VARON'.trim()),
		type: 'regular',
		email: 'MAMORALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 485,
		nationality: 'V'.toUpperCase(),
		cedula: 9956907,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA COMERCIAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LAMEZA'.trim().toLowerCase(),
		name: capitalCadena(' LAURA ANDREINA'.trim()),
		lastName: capitalCadena('MEZA PEREZ'.trim()),
		type: 'regular',
		email: 'LAMEZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4125,
		nationality: 'V'.toUpperCase(),
		cedula: 15928984,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE ANALISIS DE CREDITO BANCA CORPORATIVA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMARQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' EGLYS STELLA'.trim()),
		lastName: capitalCadena('MARQUEZ MOROS'.trim()),
		type: 'regular',
		email: 'EMARQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 354,
		nationality: 'V'.toUpperCase(),
		cedula: 10194698,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE CONTROL ESTADISTICO E INFORME ESPECIALES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' YURLIN GEORGET'.trim()),
		lastName: capitalCadena('MARCANO SANCHEZ'.trim()),
		type: 'regular',
		email: 'YUMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7010,
		nationality: 'V'.toUpperCase(),
		cedula: 10798772,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ARCHIVO CENTRAL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EANGEL'.trim().toLowerCase(),
		name: capitalCadena(' ELIZABETH '.trim()),
		lastName: capitalCadena('ANGEL DE ARIAS'.trim()),
		type: 'regular',
		email: 'EANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6617,
		nationality: 'V'.toUpperCase(),
		cedula: 10349540,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE CONTROL DE CARTERA DE CREDITO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS ALEXANDRA'.trim()),
		lastName: capitalCadena('LOPEZ NIÑO'.trim()),
		type: 'regular',
		email: 'FLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4948,
		nationality: 'V'.toUpperCase(),
		cedula: 11166806,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE FIANZAS Y GARANTIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' NILDA TERESA'.trim()),
		lastName: capitalCadena('LOPEZ DE DE SOUSA'.trim()),
		type: 'regular',
		email: 'NLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 813,
		nationality: 'V'.toUpperCase(),
		cedula: 7956630,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE VALIDACION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbustamante'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANTONIO'.trim()),
		lastName: capitalCadena('BUSTAMANTE PERNIA'.trim()),
		type: 'regular',
		email: 'jbustamante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13295,
		nationality: 'V'.toUpperCase(),
		cedula: 9126936,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE COMERCIO EXTERIOR Y ATENCIÓN AL EXPORT'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JFERRER'.trim().toLowerCase(),
		name: capitalCadena(' JEFFERSON OSCAR'.trim()),
		lastName: capitalCadena('FERRER MENDOZA'.trim()),
		type: 'regular',
		email: 'JFERRER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12730,
		nationality: 'V'.toUpperCase(),
		cedula: 12500968,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUSTODIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA JOSEFINA'.trim()),
		lastName: capitalCadena('GONZALEZ CAVANIER'.trim()),
		type: 'regular',
		email: 'DGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10898,
		nationality: 'V'.toUpperCase(),
		cedula: 13070792,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA EXTRANJERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daraque'.trim().toLowerCase(),
		name: capitalCadena(' DARWIN ANTONIO'.trim()),
		lastName: capitalCadena('ARAQUE RAMIREZ'.trim()),
		type: 'regular',
		email: 'daraque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13412,
		nationality: 'V'.toUpperCase(),
		cedula: 13545848,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA OPERACIONES MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'csalas'.trim().toLowerCase(),
		name: capitalCadena(' CLAUDIA PATRICIA'.trim()),
		lastName: capitalCadena('SALAS BELLORIN'.trim()),
		type: 'regular',
		email: 'csalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15387,
		nationality: 'V'.toUpperCase(),
		cedula: 10870646,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VPALENCIA'.trim().toLowerCase(),
		name: capitalCadena(' VIVIANA ALEJANDRA'.trim()),
		lastName: capitalCadena('PALENCIA PRATO'.trim()),
		type: 'regular',
		email: 'VPALENCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12447,
		nationality: 'V'.toUpperCase(),
		cedula: 24592259,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA LEGAL DE CRÉDITOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecardona'.trim().toLowerCase(),
		name: capitalCadena(' EVYLA DENISSE'.trim()),
		lastName: capitalCadena('CARDONA ROMERO'.trim()),
		type: 'regular',
		email: 'ecardona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13410,
		nationality: 'V'.toUpperCase(),
		cedula: 6928650,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marisanchez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('SANCHEZ PULIDO'.trim()),
		type: 'regular',
		email: 'marisanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14890,
		nationality: 'V'.toUpperCase(),
		cedula: 10796752,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SEGUIMIENTO Y CONTROL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DLARENE'.trim().toLowerCase(),
		name: capitalCadena(' DIRTA LARENE'.trim()),
		lastName: capitalCadena('LEDO '.trim()),
		type: 'regular',
		email: 'DLARENE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1712,
		nationality: 'V'.toUpperCase(),
		cedula: 12046058,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA AFILIACIÓN AL SERVICIO POS METROPOLITANA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GAMARQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL ENRIQUE'.trim()),
		lastName: capitalCadena('MARQUEZ PRADO'.trim()),
		type: 'regular',
		email: 'GAMARQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16218,
		nationality: 'V'.toUpperCase(),
		cedula: 16332768,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA ANALÍTICA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kguillen'.trim().toLowerCase(),
		name: capitalCadena(' KATHERINE CAROLINA'.trim()),
		lastName: capitalCadena('GUILLEN CALDERA'.trim()),
		type: 'regular',
		email: 'kguillen@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14006,
		nationality: 'V'.toUpperCase(),
		cedula: 20630674,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA OFICINA DIGITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amendoza'.trim().toLowerCase(),
		name: capitalCadena(' ANTHONY EDUARDO'.trim()),
		lastName: capitalCadena('MENDOZA CASTILLO'.trim()),
		type: 'regular',
		email: 'amendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13977,
		nationality: 'V'.toUpperCase(),
		cedula: 23943258,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA SERVICIO AL CLIENTE Y RECUPERACIONES POS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZMARRON'.trim().toLowerCase(),
		name: capitalCadena(' ZAIDA EMILIA'.trim()),
		lastName: capitalCadena('MARRON SIERRA'.trim()),
		type: 'regular',
		email: 'ZMARRON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4889,
		nationality: 'V'.toUpperCase(),
		cedula: 8925166,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SERVICIOS POST VENTA JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBROWH'.trim().toLowerCase(),
		name: capitalCadena(' JASMIN '.trim()),
		lastName: capitalCadena('BROWH CONTRERAS'.trim()),
		type: 'regular',
		email: 'JBROWH@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2470,
		nationality: 'V'.toUpperCase(),
		cedula: 16342489,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA NEGOCIOS INTERNACIONALES I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JARAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' JANE JOSIMAR'.trim()),
		lastName: capitalCadena('RAMIREZ FRANQUIZ'.trim()),
		type: 'regular',
		email: 'JARAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6992,
		nationality: 'V'.toUpperCase(),
		cedula: 20027918,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA NEGOCIOS INTERNACIONALES II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CPENA'.trim().toLowerCase(),
		name: capitalCadena(' CAROLIN YUSMELI'.trim()),
		lastName: capitalCadena('PEÑA ARANGUREN'.trim()),
		type: 'regular',
		email: 'CPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12364,
		nationality: 'V'.toUpperCase(),
		cedula: 17691740,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA NEGOCIOS INTERNACIONALES III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'novera'.trim().toLowerCase(),
		name: capitalCadena(' NOHELI DEL VALLE'.trim()),
		lastName: capitalCadena('VERA RASQUIDES'.trim()),
		type: 'regular',
		email: 'novera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15570,
		nationality: 'V'.toUpperCase(),
		cedula: 13846539,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SSALOM'.trim().toLowerCase(),
		name: capitalCadena(' SLEYDEER LIONEL'.trim()),
		lastName: capitalCadena('SALOM MOLINA'.trim()),
		type: 'regular',
		email: 'SSALOM@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11625,
		nationality: 'V'.toUpperCase(),
		cedula: 27730580,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCARPIO'.trim().toLowerCase(),
		name: capitalCadena(' LISBETH MIGDELYS'.trim()),
		lastName: capitalCadena('CARPIO BARRETO'.trim()),
		type: 'regular',
		email: 'LCARPIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4294,
		nationality: 'V'.toUpperCase(),
		cedula: 16671376,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA EMPRESA III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YABRICENO'.trim().toLowerCase(),
		name: capitalCadena(' YARA MIRELIS'.trim()),
		lastName: capitalCadena('BRICEÑO GIL'.trim()),
		type: 'regular',
		email: 'YABRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12629,
		nationality: 'V'.toUpperCase(),
		cedula: 25303341,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMEJIAS'.trim().toLowerCase(),
		name: capitalCadena(' JOHANNA CAROLINA'.trim()),
		lastName: capitalCadena('MEJIAS ROMERO'.trim()),
		type: 'regular',
		email: 'JMEJIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7337,
		nationality: 'V'.toUpperCase(),
		cedula: 18189005,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS BANCA INSTITUCIONAL PRIV III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YFUENMAYOR'.trim().toLowerCase(),
		name: capitalCadena(' YOLEYVA JOSEFINA'.trim()),
		lastName: capitalCadena('FUENMAYOR MARQUEZ'.trim()),
		type: 'regular',
		email: 'YFUENMAYOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12847,
		nationality: 'V'.toUpperCase(),
		cedula: 6203853,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HBELFORT'.trim().toLowerCase(),
		name: capitalCadena(' HELIANTA SOFIA'.trim()),
		lastName: capitalCadena('BELFORT URQUIOLA'.trim()),
		type: 'regular',
		email: 'HBELFORT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 820,
		nationality: 'V'.toUpperCase(),
		cedula: 13486833,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS BANCA PRIVADA III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GLAMEDA'.trim().toLowerCase(),
		name: capitalCadena(' GLEYDY YOSELING'.trim()),
		lastName: capitalCadena('LAMEDA ARTEAGA'.trim()),
		type: 'regular',
		email: 'GLAMEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15942,
		nationality: 'V'.toUpperCase(),
		cedula: 16333181,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AHURTADO'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL EDUARDO'.trim()),
		lastName: capitalCadena('HURTADO GONZÁLEZ'.trim()),
		type: 'regular',
		email: 'AHURTADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16205,
		nationality: 'V'.toUpperCase(),
		cedula: 13458329,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvargas'.trim().toLowerCase(),
		name: capitalCadena(' LILIBETH JACQUELIN'.trim()),
		lastName: capitalCadena('VARGAS VEGA'.trim()),
		type: 'regular',
		email: 'lvargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14061,
		nationality: 'V'.toUpperCase(),
		cedula: 10480085,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sortiz'.trim().toLowerCase(),
		name: capitalCadena(' SERAFINA '.trim()),
		lastName: capitalCadena('ORTIZ LOPEZ'.trim()),
		type: 'regular',
		email: 'sortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13625,
		nationality: 'V'.toUpperCase(),
		cedula: 7683191,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ECARVAJAL'.trim().toLowerCase(),
		name: capitalCadena(' ELIDES PAULA'.trim()),
		lastName: capitalCadena('CARVAJAL CASTILLO'.trim()),
		type: 'regular',
		email: 'ECARVAJAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15316,
		nationality: 'V'.toUpperCase(),
		cedula: 10629364,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MGAMARRA'.trim().toLowerCase(),
		name: capitalCadena(' MIRIAM DEL VALLE'.trim()),
		lastName: capitalCadena('GAMARRA URBANEJA'.trim()),
		type: 'regular',
		email: 'MGAMARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2547,
		nationality: 'V'.toUpperCase(),
		cedula: 14755996,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS GAS Y PETRÓLEO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' DAHIANA COROMOTO'.trim()),
		lastName: capitalCadena('CASTILLO TARAZON'.trim()),
		type: 'regular',
		email: 'DCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12738,
		nationality: 'V'.toUpperCase(),
		cedula: 13287902,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS MEDIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCALA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA NEVADY'.trim()),
		lastName: capitalCadena('CALA DELGADO'.trim()),
		type: 'regular',
		email: 'MCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1698,
		nationality: 'V'.toUpperCase(),
		cedula: 12992157,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gmotta'.trim().toLowerCase(),
		name: capitalCadena(' GIUSEPPA '.trim()),
		lastName: capitalCadena('EMANUELE MOTTA'.trim()),
		type: 'regular',
		email: 'gmotta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14187,
		nationality: 'V'.toUpperCase(),
		cedula: 11228140,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS MULTINACIONAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' VIANNEY DEL VALLE'.trim()),
		lastName: capitalCadena('HERRERA MORENO'.trim()),
		type: 'regular',
		email: 'VHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6023,
		nationality: 'V'.toUpperCase(),
		cedula: 18388698,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE NEGOCIOS SECTOR CASA DE BOLSA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCHIRINOS'.trim().toLowerCase(),
		name: capitalCadena(' LILISBETH CAROLINA'.trim()),
		lastName: capitalCadena('CHIRINOS TORRES'.trim()),
		type: 'regular',
		email: 'LCHIRINOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1772,
		nationality: 'V'.toUpperCase(),
		cedula: 13087479,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS SECTOR SEGUROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rpoleo'.trim().toLowerCase(),
		name: capitalCadena(' RONNIE ENRIQUE'.trim()),
		lastName: capitalCadena('POLEO ORTIZ'.trim()),
		type: 'regular',
		email: 'rpoleo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13617,
		nationality: 'V'.toUpperCase(),
		cedula: 12172791,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bcanelon'.trim().toLowerCase(),
		name: capitalCadena(' BARTOLOME '.trim()),
		lastName: capitalCadena('CANELON ROJAS'.trim()),
		type: 'regular',
		email: 'bcanelon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13642,
		nationality: 'V'.toUpperCase(),
		cedula: 11278597,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' NORMA JOSEFINA'.trim()),
		lastName: capitalCadena('ORTIZ LEON'.trim()),
		type: 'regular',
		email: 'NORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1577,
		nationality: 'V'.toUpperCase(),
		cedula: 8747750,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL DE NEGOCIOS SECTOR AGROPECUARIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDCARABALLO'.trim().toLowerCase(),
		name: capitalCadena(' EDWIN ALEXIS'.trim()),
		lastName: capitalCadena('CARABALLO URBINA'.trim()),
		type: 'regular',
		email: 'EDCARABALLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4638,
		nationality: 'V'.toUpperCase(),
		cedula: 16217301,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' SILVIA CAROLINA'.trim()),
		lastName: capitalCadena('CASTILLO GONZALEZ'.trim()),
		type: 'regular',
		email: 'SCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10170,
		nationality: 'V'.toUpperCase(),
		cedula: 6214128,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. COBRANZA DE CREDITOS AL CONSUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GESTOR DE COBRANZAS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SNACAD'.trim().toLowerCase(),
		name: capitalCadena(' SIMON ALEJANDRO'.trim()),
		lastName: capitalCadena('NACAD BITTAR'.trim()),
		type: 'regular',
		email: 'SNACAD@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11676,
		nationality: 'V'.toUpperCase(),
		cedula: 6366599,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['MEDICO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JERSONGONZALESP'.trim().toLowerCase(),
		name: capitalCadena(' JERSON JOSE'.trim()),
		lastName: capitalCadena('GONZALEZ PEREZ'.trim()),
		type: 'regular',
		email: 'JERSONGONZALESP@HOTMAIL.COM'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10837,
		nationality: 'V'.toUpperCase(),
		cedula: 14286171,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P.E. SERVICIOS JURÍDICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['MENSAJERO EXTERNO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUPERDOMO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS DAVID'.trim()),
		lastName: capitalCadena('PERDOMO BRAVO'.trim()),
		type: 'regular',
		email: 'LUPERDOMO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16261,
		nationality: 'V'.toUpperCase(),
		cedula: 31024925,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CORRESPONDENCIA CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['MENSAJERO INTERNO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'virgilir28'.trim().toLowerCase(),
		name: capitalCadena(' VIRGILIO '.trim()),
		lastName: capitalCadena('RINCON JAIMES'.trim()),
		type: 'regular',
		email: 'virgilir28@gmail.com'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 603,
		nationality: 'V'.toUpperCase(),
		cedula: 6057742,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['MESONERO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JHIDALGO'.trim().toLowerCase(),
		name: capitalCadena(' JUAN DE DIOS'.trim()),
		lastName: capitalCadena('HIDALGO LIRA'.trim()),
		type: 'regular',
		email: 'JHIDALGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12761,
		nationality: 'V'.toUpperCase(),
		cedula: 23949177,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OFICINISTA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMONTILLA'.trim().toLowerCase(),
		name: capitalCadena(' ANDRES SAMUEL'.trim()),
		lastName: capitalCadena('MONTILLA CEDEÑO'.trim()),
		type: 'regular',
		email: 'AMONTILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16254,
		nationality: 'V'.toUpperCase(),
		cedula: 30513613,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LLOVERA'.trim().toLowerCase(),
		name: capitalCadena(' LUDWING MOISES'.trim()),
		lastName: capitalCadena('LOVERA HEREDIA'.trim()),
		type: 'regular',
		email: 'LLOVERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16384,
		nationality: 'V'.toUpperCase(),
		cedula: 30112273,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AUCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' AURA MARINA'.trim()),
		lastName: capitalCadena('CASTRO ROSALES'.trim()),
		type: 'regular',
		email: 'AUCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16228,
		nationality: 'V'.toUpperCase(),
		cedula: 26396765,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gczulewyez'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS SAYYI'.trim()),
		lastName: capitalCadena('CZULEWYEZ CABRERA'.trim()),
		type: 'regular',
		email: 'gczulewyez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15607,
		nationality: 'V'.toUpperCase(),
		cedula: 29829807,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isanoja'.trim().toLowerCase(),
		name: capitalCadena(' IVAN ABRAHAM'.trim()),
		lastName: capitalCadena('SANOJA '.trim()),
		type: 'regular',
		email: 'isanoja@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15609,
		nationality: 'V'.toUpperCase(),
		cedula: 13067653,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RQUEVEDO'.trim().toLowerCase(),
		name: capitalCadena(' ROSA ABELINA'.trim()),
		lastName: capitalCadena('QUEVEDO GOMEZ'.trim()),
		type: 'regular',
		email: 'RQUEVEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16095,
		nationality: 'V'.toUpperCase(),
		cedula: 15431923,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' REINALDO JOSE'.trim()),
		lastName: capitalCadena('PEREZ '.trim()),
		type: 'regular',
		email: 'RPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16106,
		nationality: 'V'.toUpperCase(),
		cedula: 11072088,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FESCALANTE'.trim().toLowerCase(),
		name: capitalCadena(' FRANKLIN '.trim()),
		lastName: capitalCadena('ESCALANTE PEREZ'.trim()),
		type: 'regular',
		email: 'FESCALANTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14993,
		nationality: 'V'.toUpperCase(),
		cedula: 15842507,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josemrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MIGUEL'.trim()),
		lastName: capitalCadena('RODRIGUEZ SOLORZANO'.trim()),
		type: 'regular',
		email: 'josemrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15038,
		nationality: 'V'.toUpperCase(),
		cedula: 19464223,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FAGUSTIN'.trim().toLowerCase(),
		name: capitalCadena(' FELIPE ANTONIO'.trim()),
		lastName: capitalCadena('AGUSTIN MEDINA'.trim()),
		type: 'regular',
		email: 'FAGUSTIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12021,
		nationality: 'V'.toUpperCase(),
		cedula: 18809646,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lagomez'.trim().toLowerCase(),
		name: capitalCadena(' LARRY ALBERTO'.trim()),
		lastName: capitalCadena('GOMEZ TORRES'.trim()),
		type: 'regular',
		email: 'lagomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14880,
		nationality: 'V'.toUpperCase(),
		cedula: 11945840,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KMURO'.trim().toLowerCase(),
		name: capitalCadena(' KRISBEL DORIANNY'.trim()),
		lastName: capitalCadena('MURO SANCHEZ'.trim()),
		type: 'regular',
		email: 'KMURO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10126,
		nationality: 'V'.toUpperCase(),
		cedula: 29741593,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE MECANISMOS CAMBIARIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TRADER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOSORIO'.trim().toLowerCase(),
		name: capitalCadena(' YULLY YUDERKY'.trim()),
		lastName: capitalCadena('OSORIO GALVIS'.trim()),
		type: 'regular',
		email: 'YOSORIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 300,
		nationality: 'V'.toUpperCase(),
		cedula: 12230986,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TESORERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TESORERO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RASANDOVAL'.trim().toLowerCase(),
		name: capitalCadena(' RAFAEL ENRIQUE'.trim()),
		lastName: capitalCadena('SANDOVAL MOYA'.trim()),
		type: 'regular',
		email: 'RASANDOVAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10994,
		nationality: 'V'.toUpperCase(),
		cedula: 10217370,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['UNIDAD ADMON INTEGRAL DE RIESGOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmorales'.trim().toLowerCase(),
		name: capitalCadena(' JANETTE SUSANA'.trim()),
		lastName: capitalCadena('MORALES HERNANDEZ'.trim()),
		type: 'regular',
		email: 'jmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14551,
		nationality: 'V'.toUpperCase(),
		cedula: 10508329,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. CUMPLIMIENTO Y CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABCANACHE'.trim().toLowerCase(),
		name: capitalCadena(' ABRAHAM JOSE'.trim()),
		lastName: capitalCadena('CANACHE FARIÑAS'.trim()),
		type: 'regular',
		email: 'ABCANACHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12783,
		nationality: 'V'.toUpperCase(),
		cedula: 21718079,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. UPCLCFTFPADM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'itirado'.trim().toLowerCase(),
		name: capitalCadena(' ILEANA '.trim()),
		lastName: capitalCadena('TIRADO CASTRO'.trim()),
		type: 'regular',
		email: 'itirado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14534,
		nationality: 'V'.toUpperCase(),
		cedula: 5221311,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. CONTRATOS Y SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MZERPA'.trim().toLowerCase(),
		name: capitalCadena(' MAIGUALIDA '.trim()),
		lastName: capitalCadena('ZERPA GUZMAN'.trim()),
		type: 'regular',
		email: 'MZERPA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1892,
		nationality: 'V'.toUpperCase(),
		cedula: 8238450,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. CONTROL DE INMUEBLES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TROLDAN'.trim().toLowerCase(),
		name: capitalCadena(' TOMAS FRANCISCO'.trim()),
		lastName: capitalCadena('ROLDAN BARRIOS'.trim()),
		type: 'regular',
		email: 'TROLDAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 369,
		nationality: 'V'.toUpperCase(),
		cedula: 6699909,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE FIDEICOMISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSIERRA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ADELAIDA'.trim()),
		lastName: capitalCadena('SIERRA GOMEZ'.trim()),
		type: 'regular',
		email: 'MSIERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 337,
		nationality: 'V'.toUpperCase(),
		cedula: 14214458,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. GESTION DE CONTABILIDAD PAGOS Y TRIBUTOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CNORIEGA'.trim().toLowerCase(),
		name: capitalCadena(' CARLOTA YOLANDA'.trim()),
		lastName: capitalCadena('NORIEGA GUERRERO'.trim()),
		type: 'regular',
		email: 'CNORIEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 636,
		nationality: 'V'.toUpperCase(),
		cedula: 4818446,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hiscurpi'.trim().toLowerCase(),
		name: capitalCadena(' HUMBERTO JOSE'.trim()),
		lastName: capitalCadena('ISCURPI '.trim()),
		type: 'regular',
		email: 'hiscurpi@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14620,
		nationality: 'V'.toUpperCase(),
		cedula: 13112781,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. PLANIFICACIÓN FINANCIERA Y PRESUPUESTO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rundreiner'.trim().toLowerCase(),
		name: capitalCadena(' RENE LUCIEN'.trim()),
		lastName: capitalCadena('UNDREINER MANDRY'.trim()),
		type: 'regular',
		email: 'rundreiner@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13976,
		nationality: 'V'.toUpperCase(),
		cedula: 6816463,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FVILLALOBOS'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS CORALINA'.trim()),
		lastName: capitalCadena('VILLALOBOS SUAREZ'.trim()),
		type: 'regular',
		email: 'FVILLALOBOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14425,
		nationality: 'V'.toUpperCase(),
		cedula: 16863921,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. GESTIÓN ORGANIZACIONAL Y PROCESOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASANTAELLA'.trim().toLowerCase(),
		name: capitalCadena(' ALEJANDRO ALBERTO'.trim()),
		lastName: capitalCadena('SANTAELLA LEON'.trim()),
		type: 'regular',
		email: 'ASANTAELLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16206,
		nationality: 'V'.toUpperCase(),
		cedula: 11736933,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. PMO PLANES ESTRATÉGICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HSCHWARTZ'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR AQUILES'.trim()),
		lastName: capitalCadena('SCHWARTZ PIMENTEL'.trim()),
		type: 'regular',
		email: 'HSCHWARTZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4584,
		nationality: 'V'.toUpperCase(),
		cedula: 5601188,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. ANÁLISIS DE CRÉDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JALARCON'.trim().toLowerCase(),
		name: capitalCadena(' JORGE HUMBERTO'.trim()),
		lastName: capitalCadena('ALARCON VARGAS'.trim()),
		type: 'regular',
		email: 'JALARCON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1123,
		nationality: 'V'.toUpperCase(),
		cedula: 4173544,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. SEGUIMIENTO Y CONTROL DE CREDITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALBERTO'.trim()),
		lastName: capitalCadena('HERNANDEZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'JOSHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14150,
		nationality: 'V'.toUpperCase(),
		cedula: 13247615,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. ATENCIÓN AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmarquez'.trim().toLowerCase(),
		name: capitalCadena(' JUNIOR FRUCTUOSO'.trim()),
		lastName: capitalCadena('MARQUEZ RAMIREZ'.trim()),
		type: 'regular',
		email: 'jmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13281,
		nationality: 'V'.toUpperCase(),
		cedula: 3794602,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE GESTIÓN OPERATIVA INTERNA Y PROYECTOS ESPE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIA EDUVIGES'.trim()),
		lastName: capitalCadena('PEREZ PEREZ'.trim()),
		type: 'regular',
		email: 'FRPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3979,
		nationality: 'V'.toUpperCase(),
		cedula: 6123866,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. OPERACIONES DE TESORERÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dleon'.trim().toLowerCase(),
		name: capitalCadena(' DIANA BRIGITTE'.trim()),
		lastName: capitalCadena('LEON DE RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'dleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14285,
		nationality: 'V'.toUpperCase(),
		cedula: 13526806,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. ASEGURAMIENTO NORMATIVO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PTORREALBA'.trim().toLowerCase(),
		name: capitalCadena(' PAULA MARIELA'.trim()),
		lastName: capitalCadena('TORREALBA ARCIA'.trim()),
		type: 'regular',
		email: 'PTORREALBA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 359,
		nationality: 'V'.toUpperCase(),
		cedula: 10115664,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE MERCADEO Y COMUNICACIONES CORPORATIVAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'efernandez'.trim().toLowerCase(),
		name: capitalCadena(' ELENA '.trim()),
		lastName: capitalCadena('FERNANDEZ HERRERA'.trim()),
		type: 'regular',
		email: 'efernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14652,
		nationality: 'V'.toUpperCase(),
		cedula: 11305331,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE PRODUCTOS Y SERVICIOS DE TARJETAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JONPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN ALEJANDRO'.trim()),
		lastName: capitalCadena('PEREZ BRACAMONTE'.trim()),
		type: 'regular',
		email: 'JONPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16084,
		nationality: 'V'.toUpperCase(),
		cedula: 13086051,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DESAROLLO DE NEGOCIOS E INNOVACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vlopez'.trim().toLowerCase(),
		name: capitalCadena(' VICTOR JULIO'.trim()),
		lastName: capitalCadena('LOPEZ RIVERO'.trim()),
		type: 'regular',
		email: 'vlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14321,
		nationality: 'V'.toUpperCase(),
		cedula: 16554656,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. INTELIGENCIA DE NEGOCIOS Y ANALÍTICA DIGITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MEFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MERLING DEL VALLE'.trim()),
		lastName: capitalCadena('FERNANDEZ BRITO'.trim()),
		type: 'regular',
		email: 'MEFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11411,
		nationality: 'V'.toUpperCase(),
		cedula: 15586167,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. SERVICIOS AL CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlopez'.trim().toLowerCase(),
		name: capitalCadena(' JULIO CESAR'.trim()),
		lastName: capitalCadena('LOPEZ ROJAS'.trim()),
		type: 'regular',
		email: 'jlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14686,
		nationality: 'V'.toUpperCase(),
		cedula: 14096140,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. SOLUCIONES ELECTRÓNICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' PEGGI YANET'.trim()),
		lastName: capitalCadena('DIAZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'PDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 108,
		nationality: 'V'.toUpperCase(),
		cedula: 9681406,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESAS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HEHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' HEIDI HAISLEN'.trim()),
		lastName: capitalCadena('HERNANDEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'HEHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 831,
		nationality: 'V'.toUpperCase(),
		cedula: 14199407,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA INSTITUCIONAL PRIVADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMELCHIORRE'.trim().toLowerCase(),
		name: capitalCadena(' EMILIA MIRIAM'.trim()),
		lastName: capitalCadena('MELCHIORRE PISTILLI'.trim()),
		type: 'regular',
		email: 'MMELCHIORRE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 332,
		nationality: 'V'.toUpperCase(),
		cedula: 7683637,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE BANCA PRIVADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' HEIDY GISELA'.trim()),
		lastName: capitalCadena('GONZALEZ LOPEZ'.trim()),
		type: 'regular',
		email: 'HGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15905,
		nationality: 'V'.toUpperCase(),
		cedula: 9880251,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE CUENTAS CLAVES Y NUEVOS NEGOCIOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OCECCHINI'.trim().toLowerCase(),
		name: capitalCadena(' ORNELLA MARIA'.trim()),
		lastName: capitalCadena('CECCHINI COMMISSO'.trim()),
		type: 'regular',
		email: 'OCECCHINI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3457,
		nationality: 'V'.toUpperCase(),
		cedula: 9964060,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABRICENO'.trim().toLowerCase(),
		name: capitalCadena(' ANA ISABELLA'.trim()),
		lastName: capitalCadena('BRICEÑO HURTADO'.trim()),
		type: 'regular',
		email: 'ABRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3136,
		nationality: 'V'.toUpperCase(),
		cedula: 13337182,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. CORPORATIVA GRANDES EMPRESAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PRAICES'.trim().toLowerCase(),
		name: capitalCadena(' PILAR '.trim()),
		lastName: capitalCadena('RAICES LOPEZ'.trim()),
		type: 'regular',
		email: 'PRAICES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15002,
		nationality: 'V'.toUpperCase(),
		cedula: 6210910,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. CORPORATIVA SECTOR AGROPECUARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VRUBINO'.trim().toLowerCase(),
		name: capitalCadena(' VICENTE AUGUSTO'.trim()),
		lastName: capitalCadena('RUBINO ARRIAGA'.trim()),
		type: 'regular',
		email: 'VRUBINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 487,
		nationality: 'V'.toUpperCase(),
		cedula: 6844510,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. CORPORATIVA SECTOR FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LFERRARIS'.trim().toLowerCase(),
		name: capitalCadena(' LAURA MARGARITA'.trim()),
		lastName: capitalCadena('FERRARIS BERTORELLI'.trim()),
		type: 'regular',
		email: 'LFERRARIS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1450,
		nationality: 'V'.toUpperCase(),
		cedula: 5217696,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. CORPORATIVA SECTOR TELECOMUNICACIONES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GAALVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL ELIAS'.trim()),
		lastName: capitalCadena('ALVAREZ SOLORZANO'.trim()),
		type: 'regular',
		email: 'GAALVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 961,
		nationality: 'V'.toUpperCase(),
		cedula: 16952153,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IBOTELLO'.trim().toLowerCase(),
		name: capitalCadena(' IGNACIO ANTONIO'.trim()),
		lastName: capitalCadena('BOTELLO ARAUJO'.trim()),
		type: 'regular',
		email: 'IBOTELLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4697,
		nationality: 'V'.toUpperCase(),
		cedula: 4087735,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jgaldon'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER '.trim()),
		lastName: capitalCadena('GALDON BRACHO'.trim()),
		type: 'regular',
		email: 'jgaldon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14636,
		nationality: 'V'.toUpperCase(),
		cedula: 12375433,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' JULY MAITE'.trim()),
		lastName: capitalCadena('BLANCO RAMIREZ'.trim()),
		type: 'regular',
		email: 'JBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4461,
		nationality: 'V'.toUpperCase(),
		cedula: 16264930,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGION CAPITAL III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACAMERO'.trim().toLowerCase(),
		name: capitalCadena(' ANDRIK RAFAEL'.trim()),
		lastName: capitalCadena('CAMERO RAUSEO'.trim()),
		type: 'regular',
		email: 'ACAMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 113,
		nationality: 'V'.toUpperCase(),
		cedula: 9411296,
		centroTrabajoId: '95_1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOESPINOZA'.trim().toLowerCase(),
		name: capitalCadena(' JOCELINA NAZARET'.trim()),
		lastName: capitalCadena('ESPINOZA FIGUEROA'.trim()),
		type: 'regular',
		email: 'JOESPINOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6671,
		nationality: 'V'.toUpperCase(),
		cedula: 18551668,
		centroTrabajoId: '95_10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN ZONA INSULAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIVERO'.trim().toLowerCase(),
		name: capitalCadena(' MAYERLIN '.trim()),
		lastName: capitalCadena('RIVEROS CACERES'.trim()),
		type: 'regular',
		email: 'MARIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6777,
		nationality: 'V'.toUpperCase(),
		cedula: 12377406,
		centroTrabajoId: '95_10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE ZONA INSULAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RURIBE'.trim().toLowerCase(),
		name: capitalCadena(' RAQUEL '.trim()),
		lastName: capitalCadena('URIBE MARTINEZ'.trim()),
		type: 'regular',
		email: 'RURIBE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4042,
		nationality: 'V'.toUpperCase(),
		cedula: 4627252,
		centroTrabajoId: '95_10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P ZONA INSULAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMONTOYA'.trim().toLowerCase(),
		name: capitalCadena(' YOSMARVY ANDREINA'.trim()),
		lastName: capitalCadena('MONTOYA GANDICA'.trim()),
		type: 'regular',
		email: 'YMONTOYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15554,
		nationality: 'V'.toUpperCase(),
		cedula: 20880089,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juseche'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RAMON'.trim()),
		lastName: capitalCadena('USECHE '.trim()),
		type: 'regular',
		email: 'juseche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14232,
		nationality: 'V'.toUpperCase(),
		cedula: 9335244,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN ANDES I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YESCALANTE'.trim().toLowerCase(),
		name: capitalCadena(' YVAN ANTONIO'.trim()),
		lastName: capitalCadena('ESCALANTE GARCIA'.trim()),
		type: 'regular',
		email: 'YESCALANTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15911,
		nationality: 'V'.toUpperCase(),
		cedula: 8098770,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN ANDES II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysaavedra'.trim().toLowerCase(),
		name: capitalCadena(' YINEYDI COROMOTO'.trim()),
		lastName: capitalCadena('SAAVEDRA '.trim()),
		type: 'regular',
		email: 'ysaavedra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15851,
		nationality: 'V'.toUpperCase(),
		cedula: 19894160,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aballona'.trim().toLowerCase(),
		name: capitalCadena(' ADRIAN JOSE'.trim()),
		lastName: capitalCadena('BALLONA LABRADOR'.trim()),
		type: 'regular',
		email: 'aballona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14529,
		nationality: 'V'.toUpperCase(),
		cedula: 17370425,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RORAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' ROSA ERIKA'.trim()),
		lastName: capitalCadena('RAMIREZ PEÑALOZA'.trim()),
		type: 'regular',
		email: 'RORAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1309,
		nationality: 'V'.toUpperCase(),
		cedula: 12633634,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL OPERACION DE AGENCIAS LOS ANDES'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO LUIS'.trim()),
		lastName: capitalCadena('COLMENARES ROMERO'.trim()),
		type: 'regular',
		email: 'PCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6639,
		nationality: 'V'.toUpperCase(),
		cedula: 10166263,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE ZONA ANDES I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YABLANCO'.trim().toLowerCase(),
		name: capitalCadena(' YASMIN DEL VALLE'.trim()),
		lastName: capitalCadena('BLANCO LOZADA'.trim()),
		type: 'regular',
		email: 'YABLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7705,
		nationality: 'V'.toUpperCase(),
		cedula: 10913735,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE ZONA ANDES II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' NELSON JAVIER'.trim()),
		lastName: capitalCadena('CASTRO VIVAS'.trim()),
		type: 'regular',
		email: 'NCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12499,
		nationality: 'V'.toUpperCase(),
		cedula: 12834620,
		centroTrabajoId: '95_11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS ANDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RISTURIZ'.trim().toLowerCase(),
		name: capitalCadena(' RAFAEL JOSE'.trim()),
		lastName: capitalCadena('ISTURIZ MARCANO'.trim()),
		type: 'regular',
		email: 'RISTURIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2851,
		nationality: 'V'.toUpperCase(),
		cedula: 9889251,
		centroTrabajoId: '95_12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN ZONA LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mardiaz'.trim().toLowerCase(),
		name: capitalCadena(' MARCO ANTONIO'.trim()),
		lastName: capitalCadena('DIAZ SOTELDO'.trim()),
		type: 'regular',
		email: 'mardiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13755,
		nationality: 'V'.toUpperCase(),
		cedula: 7996536,
		centroTrabajoId: '95_13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lguanipa'.trim().toLowerCase(),
		name: capitalCadena(' LILIANA DEL CARMEN'.trim()),
		lastName: capitalCadena('GUANIPA MIRANDA'.trim()),
		type: 'regular',
		email: 'lguanipa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14395,
		nationality: 'V'.toUpperCase(),
		cedula: 11473456,
		centroTrabajoId: '95_13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AFAJARDO'.trim().toLowerCase(),
		name: capitalCadena(' ANGELMIRO '.trim()),
		lastName: capitalCadena('FAJARDO BUITRAGO'.trim()),
		type: 'regular',
		email: 'AFAJARDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6743,
		nationality: 'V'.toUpperCase(),
		cedula: 5283076,
		centroTrabajoId: '95_13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN V']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NOMARIN'.trim().toLowerCase(),
		name: capitalCadena(' NOEMI MARGARITA'.trim()),
		lastName: capitalCadena('MARIN FLORES'.trim()),
		type: 'regular',
		email: 'NOMARIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12165,
		nationality: 'V'.toUpperCase(),
		cedula: 10296374,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO ALBERTO'.trim()),
		lastName: capitalCadena('RODRIGUEZ REQUENA'.trim()),
		type: 'regular',
		email: 'frrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14856,
		nationality: 'V'.toUpperCase(),
		cedula: 8556100,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yhernandez'.trim().toLowerCase(),
		name: capitalCadena(' YENNIFFER DEL VALLE'.trim()),
		lastName: capitalCadena('HERNANDEZ VILLARROEL'.trim()),
		type: 'regular',
		email: 'yhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15516,
		nationality: 'V'.toUpperCase(),
		cedula: 16479928,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P.BANCA EMPRESAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'andperez'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA DEL VALLE'.trim()),
		lastName: capitalCadena('PEREZ SANCHEZ'.trim()),
		type: 'regular',
		email: 'andperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13880,
		nationality: 'V'.toUpperCase(),
		cedula: 18510614,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jconde'.trim().toLowerCase(),
		name: capitalCadena(' JHOANNA THAYS'.trim()),
		lastName: capitalCadena('CONDE MARCANO'.trim()),
		type: 'regular',
		email: 'jconde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14672,
		nationality: 'V'.toUpperCase(),
		cedula: 11906535,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P.BANCA EMPRESAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erojas'.trim().toLowerCase(),
		name: capitalCadena(' EDGAR ARTURO'.trim()),
		lastName: capitalCadena('ROJAS FIGUEROA'.trim()),
		type: 'regular',
		email: 'erojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13583,
		nationality: 'V'.toUpperCase(),
		cedula: 6376982,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE NEGOCIOS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMATTEY'.trim().toLowerCase(),
		name: capitalCadena(' LUISA TRINIDAD'.trim()),
		lastName: capitalCadena('MATTEY NEGRON'.trim()),
		type: 'regular',
		email: 'LMATTEY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 543,
		nationality: 'V'.toUpperCase(),
		cedula: 8236655,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL OPERACION DE AGENCIAS ORIENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACANACHE'.trim().toLowerCase(),
		name: capitalCadena(' AURA LISBETH'.trim()),
		lastName: capitalCadena('CANACHE '.trim()),
		type: 'regular',
		email: 'ACANACHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 870,
		nationality: 'V'.toUpperCase(),
		cedula: 8340572,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA ORIENTE NORTE I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMALAVE'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ESTHER'.trim()),
		lastName: capitalCadena('MALAVE QUINTERO'.trim()),
		type: 'regular',
		email: 'MMALAVE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7435,
		nationality: 'V'.toUpperCase(),
		cedula: 9278692,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA ORIENTE NORTE II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCARRASCO'.trim().toLowerCase(),
		name: capitalCadena(' MARIBEL DEL VALLE'.trim()),
		lastName: capitalCadena('CARRASCO RONDON'.trim()),
		type: 'regular',
		email: 'MCARRASCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5304,
		nationality: 'V'.toUpperCase(),
		cedula: 14859595,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA ORIENTE NORTE III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elsuarez'.trim().toLowerCase(),
		name: capitalCadena(' ELENA ROMINA'.trim()),
		lastName: capitalCadena('SUAREZ LAYA'.trim()),
		type: 'regular',
		email: 'elsuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13979,
		nationality: 'V'.toUpperCase(),
		cedula: 14077581,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P.BANCA EMPRESAS ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PRINCONES'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA CONCEPCION'.trim()),
		lastName: capitalCadena('RINCONES ACOSTA'.trim()),
		type: 'regular',
		email: 'PRINCONES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8132,
		nationality: 'V'.toUpperCase(),
		cedula: 14633819,
		centroTrabajoId: '95_14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. REGIÓN ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ydelpino'.trim().toLowerCase(),
		name: capitalCadena(' YEBETZI DEL CARMEN'.trim()),
		lastName: capitalCadena('DELPINO SALAZAR'.trim()),
		type: 'regular',
		email: 'ydelpino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14067,
		nationality: 'V'.toUpperCase(),
		cedula: 14726517,
		centroTrabajoId: '95_15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL OPERACION DE AGENCIAS GUAYANA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DRICO'.trim().toLowerCase(),
		name: capitalCadena(' DENNY '.trim()),
		lastName: capitalCadena('RICO RANGEL'.trim()),
		type: 'regular',
		email: 'DRICO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4596,
		nationality: 'V'.toUpperCase(),
		cedula: 14099388,
		centroTrabajoId: '95_15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA ORIENTE SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ebonalde'.trim().toLowerCase(),
		name: capitalCadena(' ESNEIDA MARGARITA'.trim()),
		lastName: capitalCadena('BONALDE DE DE BERARDINIS'.trim()),
		type: 'regular',
		email: 'ebonalde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14124,
		nationality: 'V'.toUpperCase(),
		cedula: 9909258,
		centroTrabajoId: '95_15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P ZONA ORIENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OUSECHE'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO '.trim()),
		lastName: capitalCadena('USECHE RAMIREZ'.trim()),
		type: 'regular',
		email: 'OUSECHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2142,
		nationality: 'V'.toUpperCase(),
		cedula: 6907530,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CUSTODIOS Y SISTEMAS DE SEGURIDAD'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' EMILY '.trim()),
		lastName: capitalCadena('GONZALEZ DELGADO'.trim()),
		type: 'regular',
		email: 'EMGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15900,
		nationality: 'V'.toUpperCase(),
		cedula: 26868223,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JROMERO'.trim().toLowerCase(),
		name: capitalCadena(' JOHANGELY ALEXANDRA'.trim()),
		lastName: capitalCadena('ROMERO FRANCO'.trim()),
		type: 'regular',
		email: 'JROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9146,
		nationality: 'V'.toUpperCase(),
		cedula: 26465566,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORD RECAUDACIÓN SENIAT']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ESALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' EDIMAR ALEJANDRA'.trim()),
		lastName: capitalCadena('SALAZAR MÁRQUEZ'.trim()),
		type: 'regular',
		email: 'ESALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11961,
		nationality: 'V'.toUpperCase(),
		cedula: 27107095,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sagarcia'.trim().toLowerCase(),
		name: capitalCadena(' SANTY YOSUETH'.trim()),
		lastName: capitalCadena('GARCIA VERA'.trim()),
		type: 'regular',
		email: 'sagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15846,
		nationality: 'V'.toUpperCase(),
		cedula: 29875677,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SOLUCIONES INTEGRALES WHATSAPP']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ljaimes'.trim().toLowerCase(),
		name: capitalCadena(' LUIS MIGUEL'.trim()),
		lastName: capitalCadena('JAIMES HERRERA'.trim()),
		type: 'regular',
		email: 'ljaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9561,
		nationality: 'V'.toUpperCase(),
		cedula: 16904000,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMOLINA'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL JOSE'.trim()),
		lastName: capitalCadena('MOLINA LUGO'.trim()),
		type: 'regular',
		email: 'DMOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13098,
		nationality: 'V'.toUpperCase(),
		cedula: 16648966,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCALLEJA'.trim().toLowerCase(),
		name: capitalCadena(' JESUS GREGORIO'.trim()),
		lastName: capitalCadena('CALLEJA ATACHO'.trim()),
		type: 'regular',
		email: 'JCALLEJA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5425,
		nationality: 'V'.toUpperCase(),
		cedula: 5297489,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' GUSTAVO EDUARDO'.trim()),
		lastName: capitalCadena('HERRERA '.trim()),
		type: 'regular',
		email: 'GHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4894,
		nationality: 'V'.toUpperCase(),
		cedula: 6448342,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hmarquina'.trim().toLowerCase(),
		name: capitalCadena(' HERNAN '.trim()),
		lastName: capitalCadena('MARQUINA SANCHEZ'.trim()),
		type: 'regular',
		email: 'hmarquina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14556,
		nationality: 'V'.toUpperCase(),
		cedula: 7954112,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hiriza'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR ENRIQUE'.trim()),
		lastName: capitalCadena('IRIZA ESCALONA'.trim()),
		type: 'regular',
		email: 'hiriza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13150,
		nationality: 'V'.toUpperCase(),
		cedula: 14388606,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jelopez'.trim().toLowerCase(),
		name: capitalCadena(' JESUS HUMBERTO'.trim()),
		lastName: capitalCadena('LOPEZ VELAZCO'.trim()),
		type: 'regular',
		email: 'jelopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15119,
		nationality: 'V'.toUpperCase(),
		cedula: 7943977,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION TRANSPORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' ALBANIS YAHILINE'.trim()),
		lastName: capitalCadena('MARTINEZ SEQUERA'.trim()),
		type: 'regular',
		email: 'ALMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7619,
		nationality: 'V'.toUpperCase(),
		cedula: 25947461,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WSANZ'.trim().toLowerCase(),
		name: capitalCadena(' WILLIEMAY '.trim()),
		lastName: capitalCadena('SANZ BRACHO'.trim()),
		type: 'regular',
		email: 'WSANZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5228,
		nationality: 'V'.toUpperCase(),
		cedula: 20155234,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION DE PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FAQUINO'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO JOSUE'.trim()),
		lastName: capitalCadena('AQUINO PIÑATE'.trim()),
		type: 'regular',
		email: 'FAQUINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12592,
		nationality: 'V'.toUpperCase(),
		cedula: 26281377,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION SEGURIDAD PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCARRANZA'.trim().toLowerCase(),
		name: capitalCadena(' LISETH DAMARIS'.trim()),
		lastName: capitalCadena('CARRANZA CHIVICO'.trim()),
		type: 'regular',
		email: 'LCARRANZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12855,
		nationality: 'V'.toUpperCase(),
		cedula: 21231366,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CUSTODIOS Y SISTEMAS DE SEGURIDAD'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PZACARIAS'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO MIGUEL'.trim()),
		lastName: capitalCadena('ZACARIAS BASTARDO'.trim()),
		type: 'regular',
		email: 'PZACARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13447,
		nationality: 'V'.toUpperCase(),
		cedula: 4906375,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marigonzalez'.trim().toLowerCase(),
		name: capitalCadena(' MARILIAN ANDREINA'.trim()),
		lastName: capitalCadena('GONZALEZ LLAMOZAS'.trim()),
		type: 'regular',
		email: 'marigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11189,
		nationality: 'V'.toUpperCase(),
		cedula: 19018117,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DBARCIA'.trim().toLowerCase(),
		name: capitalCadena(' DANNY MARISOL'.trim()),
		lastName: capitalCadena('BARCIA FLORES'.trim()),
		type: 'regular',
		email: 'DBARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6870,
		nationality: 'V'.toUpperCase(),
		cedula: 21718326,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MEPADILLA'.trim().toLowerCase(),
		name: capitalCadena(' MELVA DAYANA'.trim()),
		lastName: capitalCadena('PADILLA CASANOVA'.trim()),
		type: 'regular',
		email: 'MEPADILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8392,
		nationality: 'V'.toUpperCase(),
		cedula: 16600831,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONITOREO POS CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SYANEZ'.trim().toLowerCase(),
		name: capitalCadena(' SAYBER ALBERTO'.trim()),
		lastName: capitalCadena('YANEZ RIVERO'.trim()),
		type: 'regular',
		email: 'SYANEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7605,
		nationality: 'V'.toUpperCase(),
		cedula: 24213716,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN TÉCNICA ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvidal'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ANGEL'.trim()),
		lastName: capitalCadena('VIDAL GONZALEZ'.trim()),
		type: 'regular',
		email: 'lvidal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14485,
		nationality: 'V'.toUpperCase(),
		cedula: 8752631,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OMOTA'.trim().toLowerCase(),
		name: capitalCadena(' OSWALDO ENRIQUE'.trim()),
		lastName: capitalCadena('MOTA RUIZ'.trim()),
		type: 'regular',
		email: 'OMOTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 351,
		nationality: 'V'.toUpperCase(),
		cedula: 5073560,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RCOLINA'.trim().toLowerCase(),
		name: capitalCadena(' RENE ANTONIO'.trim()),
		lastName: capitalCadena('COLINA CRUZ'.trim()),
		type: 'regular',
		email: 'RCOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14330,
		nationality: 'V'.toUpperCase(),
		cedula: 5425292,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZAHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ZAIDA ELENA'.trim()),
		lastName: capitalCadena('HERNANDEZ NIETO'.trim()),
		type: 'regular',
		email: 'ZAHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 901,
		nationality: 'V'.toUpperCase(),
		cedula: 5607149,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORD RECAUDACIÓN SENIAT']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANYELO JAVIER'.trim()),
		lastName: capitalCadena('HERNANDEZ '.trim()),
		type: 'regular',
		email: 'ANHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7604,
		nationality: 'V'.toUpperCase(),
		cedula: 21369425,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCARRILLO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ALBERTO'.trim()),
		lastName: capitalCadena('CARRILLO RINCON'.trim()),
		type: 'regular',
		email: 'CCARRILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11285,
		nationality: 'V'.toUpperCase(),
		cedula: 16113438,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD RECLAMOS DE CANALES ELETRÓNICOS TDC ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PAGUILAR'.trim().toLowerCase(),
		name: capitalCadena(' PEGGY YOLANDA'.trim()),
		lastName: capitalCadena('AGUILAR BLANCO'.trim()),
		type: 'regular',
		email: 'PAGUILAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1665,
		nationality: 'V'.toUpperCase(),
		cedula: 6304026,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DARCIA'.trim().toLowerCase(),
		name: capitalCadena(' DIMAS RAMON'.trim()),
		lastName: capitalCadena('ARCIA MONASTERIO'.trim()),
		type: 'regular',
		email: 'DARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12248,
		nationality: 'V'.toUpperCase(),
		cedula: 9418338,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GARANGUREN'.trim().toLowerCase(),
		name: capitalCadena(' GLENDY YELITZA'.trim()),
		lastName: capitalCadena('ARANGUREN GUTIEREZ'.trim()),
		type: 'regular',
		email: 'GARANGUREN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3643,
		nationality: 'V'.toUpperCase(),
		cedula: 13943073,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGUERRA'.trim().toLowerCase(),
		name: capitalCadena(' JENIFER DEL CARMEN'.trim()),
		lastName: capitalCadena('GUERRA GRANADOS'.trim()),
		type: 'regular',
		email: 'JGUERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6847,
		nationality: 'V'.toUpperCase(),
		cedula: 26422135,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' KEVIN JHOAN'.trim()),
		lastName: capitalCadena('RUIZ PORTO'.trim()),
		type: 'regular',
		email: 'KRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11911,
		nationality: 'V'.toUpperCase(),
		cedula: 21375352,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRAFEZCA'.trim().toLowerCase(),
		name: capitalCadena(' YARIMAR YEISLING'.trim()),
		lastName: capitalCadena('RAFEZCA TERAN'.trim()),
		type: 'regular',
		email: 'YRAFEZCA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8557,
		nationality: 'V'.toUpperCase(),
		cedula: 21535631,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EBARRETO'.trim().toLowerCase(),
		name: capitalCadena(' ENYERBERT YEROHAN'.trim()),
		lastName: capitalCadena('BARRETO MORENO'.trim()),
		type: 'regular',
		email: 'EBARRETO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6722,
		nationality: 'V'.toUpperCase(),
		cedula: 18441255,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMATERANO'.trim().toLowerCase(),
		name: capitalCadena(' ROSMELITH AMTHEIRINES'.trim()),
		lastName: capitalCadena('MATERANO REINA'.trim()),
		type: 'regular',
		email: 'RMATERANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11938,
		nationality: 'V'.toUpperCase(),
		cedula: 27006330,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOBARRIOS'.trim().toLowerCase(),
		name: capitalCadena(' JOSBERT GABRIEL'.trim()),
		lastName: capitalCadena('BARRIOS COLMENARES'.trim()),
		type: 'regular',
		email: 'JOBARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7861,
		nationality: 'V'.toUpperCase(),
		cedula: 23709418,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HCONTRERAS'.trim().toLowerCase(),
		name: capitalCadena(' HERLYM DAMALYS'.trim()),
		lastName: capitalCadena('CONTRERAS GUERRERO'.trim()),
		type: 'regular',
		email: 'HCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7930,
		nationality: 'V'.toUpperCase(),
		cedula: 22031033,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMORENO'.trim().toLowerCase(),
		name: capitalCadena(' YSCAR DEL VALLE'.trim()),
		lastName: capitalCadena('MORENO DE VALERO'.trim()),
		type: 'regular',
		email: 'YMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12457,
		nationality: 'V'.toUpperCase(),
		cedula: 21014763,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SOLUCIONES INTEGRALES WHATSAPP']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ECARIPE'.trim().toLowerCase(),
		name: capitalCadena(' EUCLIDES RAFAEL'.trim()),
		lastName: capitalCadena('CARIPE '.trim()),
		type: 'regular',
		email: 'ECARIPE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15255,
		nationality: 'V'.toUpperCase(),
		cedula: 6349728,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCARIAS'.trim().toLowerCase(),
		name: capitalCadena(' DOUGLAS RAMON'.trim()),
		lastName: capitalCadena('CARIAS RAMOS'.trim()),
		type: 'regular',
		email: 'DCARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15881,
		nationality: 'V'.toUpperCase(),
		cedula: 12166393,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['DELEGADO DE SEGURIDAD']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMARIN'.trim().toLowerCase(),
		name: capitalCadena(' ERIKA ZORAIMY'.trim()),
		lastName: capitalCadena('MARIN MORENO'.trim()),
		type: 'regular',
		email: 'EMARIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7413,
		nationality: 'V'.toUpperCase(),
		cedula: 18329167,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gpena'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA CARIBAY'.trim()),
		lastName: capitalCadena('PEÑA AVENDAÑO'.trim()),
		type: 'regular',
		email: 'gpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10517,
		nationality: 'V'.toUpperCase(),
		cedula: 27309293,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DOORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' DORLEY MAYERLIN'.trim()),
		lastName: capitalCadena('ORTIZ SIERRA'.trim()),
		type: 'regular',
		email: 'DOORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11784,
		nationality: 'V'.toUpperCase(),
		cedula: 26711424,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO Y SOPORTE AL CLIENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARROSALES'.trim().toLowerCase(),
		name: capitalCadena(' ARMANDO JOSE'.trim()),
		lastName: capitalCadena('ROSALES GARCIA'.trim()),
		type: 'regular',
		email: 'ARROSALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10148,
		nationality: 'V'.toUpperCase(),
		cedula: 25871236,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SZERPA'.trim().toLowerCase(),
		name: capitalCadena(' SAMUEL ALEJANDRO'.trim()),
		lastName: capitalCadena('ZERPA PARRA'.trim()),
		type: 'regular',
		email: 'SZERPA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12436,
		nationality: 'V'.toUpperCase(),
		cedula: 27647883,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA BANCA EN LINEA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALRANGEL'.trim().toLowerCase(),
		name: capitalCadena(' ALBERT SLEYTHER'.trim()),
		lastName: capitalCadena('RANGEL PERNIA'.trim()),
		type: 'regular',
		email: 'ALRANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13007,
		nationality: 'V'.toUpperCase(),
		cedula: 24757842,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA BANCA EN LINEA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VCASTORANI'.trim().toLowerCase(),
		name: capitalCadena(' VICTOR DANIEL'.trim()),
		lastName: capitalCadena('CASTORANI BETANCOURT'.trim()),
		type: 'regular',
		email: 'VCASTORANI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16281,
		nationality: 'V'.toUpperCase(),
		cedula: 29596795,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA BANCA EN LINEA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EFIGUEREDO'.trim().toLowerCase(),
		name: capitalCadena(' ERICK ALEXANDER'.trim()),
		lastName: capitalCadena('FIGUEREDO GONZALEZ'.trim()),
		type: 'regular',
		email: 'EFIGUEREDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16185,
		nationality: 'V'.toUpperCase(),
		cedula: 29784697,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GARGUINZONES'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA PAOLA'.trim()),
		lastName: capitalCadena('ARGUINZONES INDRIAGO'.trim()),
		type: 'regular',
		email: 'GARGUINZONES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16225,
		nationality: 'V'.toUpperCase(),
		cedula: 27879660,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE OPEN BANKING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RFRANCO'.trim().toLowerCase(),
		name: capitalCadena(' RAUL ALEJANDRO'.trim()),
		lastName: capitalCadena('FRANCO AÑEZ'.trim()),
		type: 'regular',
		email: 'RFRANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16226,
		nationality: 'V'.toUpperCase(),
		cedula: 27225871,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE OPEN BANKING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AJAIME'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL ORLANDO'.trim()),
		lastName: capitalCadena('JAIME SANCHEZ'.trim()),
		type: 'regular',
		email: 'AJAIME@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12965,
		nationality: 'V'.toUpperCase(),
		cedula: 16030308,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS PASIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LIROMERO'.trim().toLowerCase(),
		name: capitalCadena(' LILESKA MARIANY'.trim()),
		lastName: capitalCadena('ROMERO '.trim()),
		type: 'regular',
		email: 'LIROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12309,
		nationality: 'V'.toUpperCase(),
		cedula: 24900140,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE SISTEMAS POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WMADURO'.trim().toLowerCase(),
		name: capitalCadena(' WILMARY JOSELYN'.trim()),
		lastName: capitalCadena('MADURO CALZADILLA'.trim()),
		type: 'regular',
		email: 'WMADURO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15657,
		nationality: 'V'.toUpperCase(),
		cedula: 18467596,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DESARROLLO DE SISTEMAS DE INTEGRACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA '.trim()),
		lastName: capitalCadena('RIVAS MARIN'.trim()),
		type: 'regular',
		email: 'BRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8212,
		nationality: 'V'.toUpperCase(),
		cedula: 20613051,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSBHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSBELYS VIRGINIA'.trim()),
		lastName: capitalCadena('HERNANDEZ CABRERA'.trim()),
		type: 'regular',
		email: 'JOSBHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8830,
		nationality: 'V'.toUpperCase(),
		cedula: 24234338,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' JELINEK ODALIS'.trim()),
		lastName: capitalCadena('RUIZ OCHOA'.trim()),
		type: 'regular',
		email: 'JRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11186,
		nationality: 'V'.toUpperCase(),
		cedula: 24883411,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LEONARDO'.trim()),
		lastName: capitalCadena('FERNANDEZ AVILAN'.trim()),
		type: 'regular',
		email: 'JOFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9813,
		nationality: 'V'.toUpperCase(),
		cedula: 27713090,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD RECLAMOS DE CANALES ELETRÓNICOS TDC ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AQHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' AQUILES VICENTE'.trim()),
		lastName: capitalCadena('HERNANDEZ MORENO'.trim()),
		type: 'regular',
		email: 'AQHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12437,
		nationality: 'V'.toUpperCase(),
		cedula: 14789737,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DASULBARAN'.trim().toLowerCase(),
		name: capitalCadena(' DARWING JOSE'.trim()),
		lastName: capitalCadena('SULBARAN CONTRERAS'.trim()),
		type: 'regular',
		email: 'DASULBARAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15537,
		nationality: 'V'.toUpperCase(),
		cedula: 14050137,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' LILA JOSEFINA'.trim()),
		lastName: capitalCadena('GONZALEZ GOMEZ'.trim()),
		type: 'regular',
		email: 'LGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1458,
		nationality: 'V'.toUpperCase(),
		cedula: 9410166,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN OPERACIONES BACK OFFICE Y SEGURO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HRICO'.trim().toLowerCase(),
		name: capitalCadena(' HEVER ADRIAN'.trim()),
		lastName: capitalCadena('RICO CASTRO'.trim()),
		type: 'regular',
		email: 'HRICO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3073,
		nationality: 'V'.toUpperCase(),
		cedula: 17976743,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SOROPEZA'.trim().toLowerCase(),
		name: capitalCadena(' STARLYN YOJAN'.trim()),
		lastName: capitalCadena('OROPEZA OVALLES'.trim()),
		type: 'regular',
		email: 'SOROPEZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9001,
		nationality: 'V'.toUpperCase(),
		cedula: 25561583,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANAGONZALE'.trim().toLowerCase(),
		name: capitalCadena(' ANA KARINA'.trim()),
		lastName: capitalCadena('GONZALEZ MONTILLA'.trim()),
		type: 'regular',
		email: 'ANAGONZALE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14120,
		nationality: 'V'.toUpperCase(),
		cedula: 20543608,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LSANTIAGO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALBERTO'.trim()),
		lastName: capitalCadena('SANTIAGO GALBIS'.trim()),
		type: 'regular',
		email: 'LSANTIAGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14414,
		nationality: 'V'.toUpperCase(),
		cedula: 12832870,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MESPINOZA'.trim().toLowerCase(),
		name: capitalCadena(' MARCOS TULIO'.trim()),
		lastName: capitalCadena('ESPINOZA JIMENEZ'.trim()),
		type: 'regular',
		email: 'MESPINOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14587,
		nationality: 'V'.toUpperCase(),
		cedula: 17977367,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. MANTENIMIENTO FISICO SEDES CENTRALES Y AG.'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmujica'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RUBEN'.trim()),
		lastName: capitalCadena('MUJICA MOLINA'.trim()),
		type: 'regular',
		email: 'jmujica@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15855,
		nationality: 'V'.toUpperCase(),
		cedula: 14130519,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ETQUINTERO'.trim().toLowerCase(),
		name: capitalCadena(' ETY ERMELINDA'.trim()),
		lastName: capitalCadena('QUINTERO TORRES'.trim()),
		type: 'regular',
		email: 'ETQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16077,
		nationality: 'V'.toUpperCase(),
		cedula: 14985700,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD FÍSICA REGIÓN CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' WINGER JOSE'.trim()),
		lastName: capitalCadena('SANCHEZ MEDRANO'.trim()),
		type: 'regular',
		email: 'WSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15740,
		nationality: 'V'.toUpperCase(),
		cedula: 25792078,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN DE PROYECTOS Y SOPORTE TECNICO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YIMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' YILSON GABRIEL'.trim()),
		lastName: capitalCadena('MARCANO CORDERO'.trim()),
		type: 'regular',
		email: 'YIMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15742,
		nationality: 'V'.toUpperCase(),
		cedula: 24530473,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN DE PROYECTOS Y SOPORTE TECNICO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mabreu'.trim().toLowerCase(),
		name: capitalCadena(' MARCCELIN DANIUSKA'.trim()),
		lastName: capitalCadena('ABREU REQUENA'.trim()),
		type: 'regular',
		email: 'mabreu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14217,
		nationality: 'V'.toUpperCase(),
		cedula: 18441709,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGUEDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JULIA MARÍA'.trim()),
		lastName: capitalCadena('GUEDEZ ALVARADO'.trim()),
		type: 'regular',
		email: 'JGUEDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15741,
		nationality: 'V'.toUpperCase(),
		cedula: 20489896,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CHRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' CHERDAN ALEXIS'.trim()),
		lastName: capitalCadena('RODRÍGUEZ PULIDO'.trim()),
		type: 'regular',
		email: 'CHRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15744,
		nationality: 'V'.toUpperCase(),
		cedula: 27606735,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RICASTRO'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ANTONIO'.trim()),
		lastName: capitalCadena('CASTRO ROJAS'.trim()),
		type: 'regular',
		email: 'RICASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15922,
		nationality: 'V'.toUpperCase(),
		cedula: 17778173,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' GERMAN EDUARDO'.trim()),
		lastName: capitalCadena('COLMENARES ALONZO'.trim()),
		type: 'regular',
		email: 'GCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16192,
		nationality: 'V'.toUpperCase(),
		cedula: 18530020,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yavendano'.trim().toLowerCase(),
		name: capitalCadena(' YRAIDA COROMOTO'.trim()),
		lastName: capitalCadena('AVENDAÑO RIVAS'.trim()),
		type: 'regular',
		email: 'yavendano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13251,
		nationality: 'V'.toUpperCase(),
		cedula: 6854201,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marherrera'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DEL COROMOTO'.trim()),
		lastName: capitalCadena('HERRERA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'marherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14568,
		nationality: 'V'.toUpperCase(),
		cedula: 11733494,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' ALIMAR KATIUSCA'.trim()),
		lastName: capitalCadena('MEDINA VELASQUEZ'.trim()),
		type: 'regular',
		email: 'AMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15774,
		nationality: 'V'.toUpperCase(),
		cedula: 18186674,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUCIO ANTONIO'.trim()),
		lastName: capitalCadena('MENDEZ RANGEL'.trim()),
		type: 'regular',
		email: 'LMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15798,
		nationality: 'V'.toUpperCase(),
		cedula: 9414795,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GABRIEL'.trim()),
		lastName: capitalCadena('MENDOZA GUTIERREZ'.trim()),
		type: 'regular',
		email: 'JOSMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16080,
		nationality: 'V'.toUpperCase(),
		cedula: 19314314,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DEGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' DENIS IBRAIM'.trim()),
		lastName: capitalCadena('GARCIA RIVAS'.trim()),
		type: 'regular',
		email: 'DEGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2481,
		nationality: 'V'.toUpperCase(),
		cedula: 13945277,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRIVERO'.trim().toLowerCase(),
		name: capitalCadena(' JIM MANUEL'.trim()),
		lastName: capitalCadena('RIVERO HERNANDEZ'.trim()),
		type: 'regular',
		email: 'JRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14462,
		nationality: 'V'.toUpperCase(),
		cedula: 19582525,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GGARRIDO'.trim().toLowerCase(),
		name: capitalCadena(' GERARD OMAR'.trim()),
		lastName: capitalCadena('GARRIDO COLMENAREZ'.trim()),
		type: 'regular',
		email: 'GGARRIDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4890,
		nationality: 'V'.toUpperCase(),
		cedula: 16796542,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RVALLENILLA'.trim().toLowerCase(),
		name: capitalCadena(' ROMEL JOSE'.trim()),
		lastName: capitalCadena('DAVID VALLENILLA'.trim()),
		type: 'regular',
		email: 'RVALLENILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13577,
		nationality: 'V'.toUpperCase(),
		cedula: 11603687,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUROMERO'.trim().toLowerCase(),
		name: capitalCadena(' JUAN CARLOS'.trim()),
		lastName: capitalCadena('ROMERO AVILA'.trim()),
		type: 'regular',
		email: 'JUROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13758,
		nationality: 'V'.toUpperCase(),
		cedula: 14427168,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOESANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' YOELT ALEXANDER'.trim()),
		lastName: capitalCadena('SANCHEZ REBOLLEDO'.trim()),
		type: 'regular',
		email: 'YOESANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13825,
		nationality: 'V'.toUpperCase(),
		cedula: 11225694,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ORREYES'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO '.trim()),
		lastName: capitalCadena('REYES '.trim()),
		type: 'regular',
		email: 'ORREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13833,
		nationality: 'V'.toUpperCase(),
		cedula: 4637609,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HENDURAN'.trim().toLowerCase(),
		name: capitalCadena(' HENRRY ANTONIO'.trim()),
		lastName: capitalCadena('DURAN GARCIA'.trim()),
		type: 'regular',
		email: 'HENDURAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13837,
		nationality: 'V'.toUpperCase(),
		cedula: 8068267,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPLAZOLA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('PLAZOLA SIERRA'.trim()),
		type: 'regular',
		email: 'JPLAZOLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13838,
		nationality: 'V'.toUpperCase(),
		cedula: 8760606,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCISNERO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS MANUEL'.trim()),
		lastName: capitalCadena('CISNERO MIRABAL'.trim()),
		type: 'regular',
		email: 'LCISNERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14470,
		nationality: 'V'.toUpperCase(),
		cedula: 25233240,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PSILVA'.trim().toLowerCase(),
		name: capitalCadena(' PAULO JORGE'.trim()),
		lastName: capitalCadena('SILVA DE OLIVEIRA'.trim()),
		type: 'regular',
		email: 'PSILVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13214,
		nationality: 'E'.toUpperCase(),
		cedula: 81090752,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PROYECTOS TÉCNICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rochoa'.trim().toLowerCase(),
		name: capitalCadena(' ROBERT ALEJANDRO'.trim()),
		lastName: capitalCadena('OCHOA CASTRO'.trim()),
		type: 'regular',
		email: 'rochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14250,
		nationality: 'V'.toUpperCase(),
		cedula: 18188454,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YEMATA'.trim().toLowerCase(),
		name: capitalCadena(' YESSIKA VANESSA'.trim()),
		lastName: capitalCadena('MATA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'YEMATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14569,
		nationality: 'V'.toUpperCase(),
		cedula: 17074529,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JAMARIN'.trim().toLowerCase(),
		name: capitalCadena(' JAILEL ENRIQUE'.trim()),
		lastName: capitalCadena('MARIN NIETO'.trim()),
		type: 'regular',
		email: 'JAMARIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16276,
		nationality: 'V'.toUpperCase(),
		cedula: 12877274,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PRIZZO'.trim().toLowerCase(),
		name: capitalCadena(' PAOLO ANTONIO'.trim()),
		lastName: capitalCadena('RIZZO GARCIA'.trim()),
		type: 'regular',
		email: 'PRIZZO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14635,
		nationality: 'V'.toUpperCase(),
		cedula: 11313776,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FAREVALO'.trim().toLowerCase(),
		name: capitalCadena(' FREDDY JAVIER'.trim()),
		lastName: capitalCadena('AREVALO TRIAS'.trim()),
		type: 'regular',
		email: 'FAREVALO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14894,
		nationality: 'V'.toUpperCase(),
		cedula: 21016826,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUIHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUIS FERNANDO'.trim()),
		lastName: capitalCadena('HERNANDEZ '.trim()),
		type: 'regular',
		email: 'LUIHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2500,
		nationality: 'V'.toUpperCase(),
		cedula: 17148645,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA PROYECTOS ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' ROSBEL JOSE'.trim()),
		lastName: capitalCadena('RODRIGUEZ SANCHEZ'.trim()),
		type: 'regular',
		email: 'rrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14628,
		nationality: 'V'.toUpperCase(),
		cedula: 14043861,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cnunez'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS EDUARDO'.trim()),
		lastName: capitalCadena('NUÑEZ OLIVARES'.trim()),
		type: 'regular',
		email: 'cnunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14818,
		nationality: 'V'.toUpperCase(),
		cedula: 12377018,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elobo'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO ANTONIO'.trim()),
		lastName: capitalCadena('LOBO LANDAETA'.trim()),
		type: 'regular',
		email: 'elobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13317,
		nationality: 'V'.toUpperCase(),
		cedula: 4810546,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NVILLEGAS'.trim().toLowerCase(),
		name: capitalCadena(' NESTOR '.trim()),
		lastName: capitalCadena('VILLEGAS FRAGACHAN'.trim()),
		type: 'regular',
		email: 'NVILLEGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14487,
		nationality: 'V'.toUpperCase(),
		cedula: 4353997,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GSUAREZ'.trim().toLowerCase(),
		name: capitalCadena(' GUSTAVO ADOLFO'.trim()),
		lastName: capitalCadena('SUAREZ LUZARDO'.trim()),
		type: 'regular',
		email: 'GSUAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14709,
		nationality: 'V'.toUpperCase(),
		cedula: 5538972,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zavariano'.trim().toLowerCase(),
		name: capitalCadena(' ZENON ALFREDO'.trim()),
		lastName: capitalCadena('AVARIANO CASTILLO'.trim()),
		type: 'regular',
		email: 'zavariano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14741,
		nationality: 'V'.toUpperCase(),
		cedula: 4585475,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jovivas'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('VIVAS CORRALES'.trim()),
		type: 'regular',
		email: 'jovivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14877,
		nationality: 'V'.toUpperCase(),
		cedula: 6364032,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE INTEGRACIÓN PLATAFORMA AS-400'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ksosa'.trim().toLowerCase(),
		name: capitalCadena(' KELLY ROSMARY'.trim()),
		lastName: capitalCadena('SOSA CAMACHO'.trim()),
		type: 'regular',
		email: 'ksosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13682,
		nationality: 'V'.toUpperCase(),
		cedula: 14062977,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' GREADARY GREGKELLY'.trim()),
		lastName: capitalCadena('GARCIA BARRERA'.trim()),
		type: 'regular',
		email: 'GGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11313,
		nationality: 'V'.toUpperCase(),
		cedula: 24896528,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE SISTEMAS POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RICGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD JOSE'.trim()),
		lastName: capitalCadena('GONZALEZ ADAMES'.trim()),
		type: 'regular',
		email: 'RICGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13340,
		nationality: 'V'.toUpperCase(),
		cedula: 6451508,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' JHOSENDER ERNESTO'.trim()),
		lastName: capitalCadena('PEREZ VILLA'.trim()),
		type: 'regular',
		email: 'JPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14102,
		nationality: 'V'.toUpperCase(),
		cedula: 14799155,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KFARIAS'.trim().toLowerCase(),
		name: capitalCadena(' KEINY BRYANT'.trim()),
		lastName: capitalCadena('FARIAS HERNANDEZ'.trim()),
		type: 'regular',
		email: 'KFARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14225,
		nationality: 'V'.toUpperCase(),
		cedula: 20630507,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WIHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' WILMER ALI'.trim()),
		lastName: capitalCadena('HERRERA RIVAS'.trim()),
		type: 'regular',
		email: 'WIHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14536,
		nationality: 'V'.toUpperCase(),
		cedula: 14746065,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AESPITIA'.trim().toLowerCase(),
		name: capitalCadena(' CESAR ALFONSO'.trim()),
		lastName: capitalCadena('ESPITIA NEIRA'.trim()),
		type: 'regular',
		email: 'AESPITIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5424,
		nationality: 'V'.toUpperCase(),
		cedula: 11041854,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'editorres'.trim().toLowerCase(),
		name: capitalCadena(' EDIXON RAMON'.trim()),
		lastName: capitalCadena('TORRES RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'editorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14103,
		nationality: 'V'.toUpperCase(),
		cedula: 20380152,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JDEMATOS'.trim().toLowerCase(),
		name: capitalCadena(' JUAN FRANCISCO'.trim()),
		lastName: capitalCadena('DE MATOS CONTASTI'.trim()),
		type: 'regular',
		email: 'JDEMATOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7949,
		nationality: 'V'.toUpperCase(),
		cedula: 21438227,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. RECAUDACIÓN GOBERNACIONES, ALCALDIAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irojas'.trim().toLowerCase(),
		name: capitalCadena(' IVAN ARGENIS'.trim()),
		lastName: capitalCadena('ROJAS VICENT'.trim()),
		type: 'regular',
		email: 'irojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14889,
		nationality: 'V'.toUpperCase(),
		cedula: 26063838,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN CONTROL ADM. Y CENTROS DE ACOPIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NHROJAS'.trim().toLowerCase(),
		name: capitalCadena(' NHAYLLINGER HAIRAM'.trim()),
		lastName: capitalCadena('ROJAS PULGAR'.trim()),
		type: 'regular',
		email: 'NHROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10943,
		nationality: 'V'.toUpperCase(),
		cedula: 25964833,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIAADIAZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('DIAZ PÉREZ'.trim()),
		type: 'regular',
		email: 'MARIAADIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7599,
		nationality: 'V'.toUpperCase(),
		cedula: 13160432,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE PRODUCCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'grcastillo'.trim().toLowerCase(),
		name: capitalCadena(' GREETCHEN KATHERINE'.trim()),
		lastName: capitalCadena('CASTILLO TACHÓN'.trim()),
		type: 'regular',
		email: 'grcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14076,
		nationality: 'V'.toUpperCase(),
		cedula: 19710598,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE PRODUCCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amorales'.trim().toLowerCase(),
		name: capitalCadena(' ANANGELYS '.trim()),
		lastName: capitalCadena('MORALES FIGUEROA'.trim()),
		type: 'regular',
		email: 'amorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14287,
		nationality: 'V'.toUpperCase(),
		cedula: 24435491,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE PRODUCCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mrada'.trim().toLowerCase(),
		name: capitalCadena(' MARBELYS YSABEL'.trim()),
		lastName: capitalCadena('RADA SANABRIA'.trim()),
		type: 'regular',
		email: 'mrada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13562,
		nationality: 'V'.toUpperCase(),
		cedula: 5528702,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lemendoza'.trim().toLowerCase(),
		name: capitalCadena(' LENY IVELIST'.trim()),
		lastName: capitalCadena('MENDOZA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'lemendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14519,
		nationality: 'V'.toUpperCase(),
		cedula: 22783595,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRTORRES'.trim().toLowerCase(),
		name: capitalCadena(' FREDDY DOMINGO'.trim()),
		lastName: capitalCadena('TORRES '.trim()),
		type: 'regular',
		email: 'FRTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7577,
		nationality: 'V'.toUpperCase(),
		cedula: 6205768,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA EMISIÓN Y DISTRIBUCIÓN VISA Y MASTER'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' JOEL ENRIQUE'.trim()),
		lastName: capitalCadena('MENDOZA GARCIA'.trim()),
		type: 'regular',
		email: 'JOMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9982,
		nationality: 'V'.toUpperCase(),
		cedula: 27713265,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA EMISIÓN Y DISTRIBUCIÓN VISA Y MASTER'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DURBANEJA'.trim().toLowerCase(),
		name: capitalCadena(' DIOMEDES RAFAEL'.trim()),
		lastName: capitalCadena('URBANEJA RIVERO'.trim()),
		type: 'regular',
		email: 'DURBANEJA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3021,
		nationality: 'V'.toUpperCase(),
		cedula: 6848875,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abravo'.trim().toLowerCase(),
		name: capitalCadena(' ANDREYNA DEL VALLE'.trim()),
		lastName: capitalCadena('BRAVO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'abravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14329,
		nationality: 'V'.toUpperCase(),
		cedula: 23943113,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'esalvarez'.trim().toLowerCase(),
		name: capitalCadena(' ESTEBAN '.trim()),
		lastName: capitalCadena('ALVAREZ DURAN'.trim()),
		type: 'regular',
		email: 'esalvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14460,
		nationality: 'V'.toUpperCase(),
		cedula: 7943572,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOBETANCOURT'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN '.trim()),
		lastName: capitalCadena('COLUCCI BETANCOURT'.trim()),
		type: 'regular',
		email: 'JOBETANCOURT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12644,
		nationality: 'V'.toUpperCase(),
		cedula: 13887297,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DZARZALEJO'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL '.trim()),
		lastName: capitalCadena('ZARZALEJO GALLARDO'.trim()),
		type: 'regular',
		email: 'DZARZALEJO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13254,
		nationality: 'V'.toUpperCase(),
		cedula: 5528485,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LRENDON'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALFONSO'.trim()),
		lastName: capitalCadena('RENDON ROMERO'.trim()),
		type: 'regular',
		email: 'LRENDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 344,
		nationality: 'V'.toUpperCase(),
		cedula: 7920230,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ODOMINGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO DE JESUS'.trim()),
		lastName: capitalCadena('DOMINGUEZ ALBORNOZ'.trim()),
		type: 'regular',
		email: 'ODOMINGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12361,
		nationality: 'V'.toUpperCase(),
		cedula: 13127584,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LPINA'.trim().toLowerCase(),
		name: capitalCadena(' LUISANGEL '.trim()),
		lastName: capitalCadena('PIÑA BELISARIO'.trim()),
		type: 'regular',
		email: 'LPINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7008,
		nationality: 'V'.toUpperCase(),
		cedula: 23636721,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HEREYES'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR GREGORIO'.trim()),
		lastName: capitalCadena('REYES PARRA'.trim()),
		type: 'regular',
		email: 'HEREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8218,
		nationality: 'V'.toUpperCase(),
		cedula: 6867299,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JQUINTAL'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MANUEL'.trim()),
		lastName: capitalCadena('DE QUINTAL QUINTAL'.trim()),
		type: 'regular',
		email: 'JQUINTAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4297,
		nationality: 'V'.toUpperCase(),
		cedula: 11671762,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMILLAN'.trim().toLowerCase(),
		name: capitalCadena(' ALFREDO RAFAEL'.trim()),
		lastName: capitalCadena('MILLAN CARVALLO'.trim()),
		type: 'regular',
		email: 'AMILLAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7039,
		nationality: 'V'.toUpperCase(),
		cedula: 5001046,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANCASTELLANOS'.trim().toLowerCase(),
		name: capitalCadena(' ANA GRACIELA'.trim()),
		lastName: capitalCadena('CASTELLANOS DELGADO'.trim()),
		type: 'regular',
		email: 'ANCASTELLANOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12344,
		nationality: 'V'.toUpperCase(),
		cedula: 6248960,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JJAUREGUI'.trim().toLowerCase(),
		name: capitalCadena(' JHONNY EMIL'.trim()),
		lastName: capitalCadena('JAUREGUI GARCIA'.trim()),
		type: 'regular',
		email: 'JJAUREGUI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11686,
		nationality: 'V'.toUpperCase(),
		cedula: 7926468,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RTARAZON'.trim().toLowerCase(),
		name: capitalCadena(' ROSSANA '.trim()),
		lastName: capitalCadena('TARAZON RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'RTARAZON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13829,
		nationality: 'V'.toUpperCase(),
		cedula: 14427931,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA PROYECTOS CORE BANCARIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IMARQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ISIDRO ANTONIO'.trim()),
		lastName: capitalCadena('MARQUEZ '.trim()),
		type: 'regular',
		email: 'IMARQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 343,
		nationality: 'V'.toUpperCase(),
		cedula: 5881265,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA PROYECTOS ESPECIALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JREYES'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('REYES LARA'.trim()),
		type: 'regular',
		email: 'JREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5578,
		nationality: 'V'.toUpperCase(),
		cedula: 4681929,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JESTEVES'.trim().toLowerCase(),
		name: capitalCadena(' JULIAN ANDRES'.trim()),
		lastName: capitalCadena('ESTEVES LORENZO'.trim()),
		type: 'regular',
		email: 'JESTEVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10245,
		nationality: 'V'.toUpperCase(),
		cedula: 23000760,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCHINA'.trim().toLowerCase(),
		name: capitalCadena(' YUSMARY JOSEFINA'.trim()),
		lastName: capitalCadena('CHINA RIVERO'.trim()),
		type: 'regular',
		email: 'YCHINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 674,
		nationality: 'V'.toUpperCase(),
		cedula: 14934002,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSOTILLO'.trim().toLowerCase(),
		name: capitalCadena(' ROSAURA '.trim()),
		lastName: capitalCadena('SOTILLO FLORES'.trim()),
		type: 'regular',
		email: 'RSOTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 611,
		nationality: 'V'.toUpperCase(),
		cedula: 5009761,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CBENITEZ'.trim().toLowerCase(),
		name: capitalCadena(' CESAR ALEJANDRO'.trim()),
		lastName: capitalCadena('BENITEZ LOZADA'.trim()),
		type: 'regular',
		email: 'CBENITEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4309,
		nationality: 'V'.toUpperCase(),
		cedula: 11161174,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTELLEZ'.trim().toLowerCase(),
		name: capitalCadena(' MIRIAN TERESA'.trim()),
		lastName: capitalCadena('TELLES BASTIDAS'.trim()),
		type: 'regular',
		email: 'MTELLEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2756,
		nationality: 'V'.toUpperCase(),
		cedula: 9010700,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SCOLLADO'.trim().toLowerCase(),
		name: capitalCadena(' STUART ARMANDO'.trim()),
		lastName: capitalCadena('COLLADO LEINDEZ'.trim()),
		type: 'regular',
		email: 'SCOLLADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7721,
		nationality: 'V'.toUpperCase(),
		cedula: 6512994,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FBRICENO'.trim().toLowerCase(),
		name: capitalCadena(' FRANKLIN ALEXANDER'.trim()),
		lastName: capitalCadena('BRICEÑO GUERRERO'.trim()),
		type: 'regular',
		email: 'FBRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1434,
		nationality: 'V'.toUpperCase(),
		cedula: 16904954,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YESCOBAR'.trim().toLowerCase(),
		name: capitalCadena(' YOMARCRIS MAHOLY'.trim()),
		lastName: capitalCadena('ESCOBAR RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YESCOBAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 795,
		nationality: 'V'.toUpperCase(),
		cedula: 15207373,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JESUAREZ'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER DEL CARMEN'.trim()),
		lastName: capitalCadena('SUAREZ AGUILERA'.trim()),
		type: 'regular',
		email: 'JESUAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 693,
		nationality: 'V'.toUpperCase(),
		cedula: 13564463,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MRAMOS'.trim().toLowerCase(),
		name: capitalCadena(' MILAGROS ADELAIDA'.trim()),
		lastName: capitalCadena('RAMOS BRITO'.trim()),
		type: 'regular',
		email: 'MRAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1065,
		nationality: 'V'.toUpperCase(),
		cedula: 11990037,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' CARLY JOSEFINA'.trim()),
		lastName: capitalCadena('FERNANDEZ CAMACHO'.trim()),
		type: 'regular',
		email: 'CFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2834,
		nationality: 'V'.toUpperCase(),
		cedula: 12382591,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL ANTONIO'.trim()),
		lastName: capitalCadena('ORTIZ NOGUERA'.trim()),
		type: 'regular',
		email: 'AORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3102,
		nationality: 'V'.toUpperCase(),
		cedula: 6196106,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SEGURIDAD AS-400']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMAZA'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS GABRIEL'.trim()),
		lastName: capitalCadena('MAZA SANCHEZ'.trim()),
		type: 'regular',
		email: 'CMAZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12307,
		nationality: 'V'.toUpperCase(),
		cedula: 18904832,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SEGURIDAD PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'chgonzalez'.trim().toLowerCase(),
		name: capitalCadena(' CHARLES JOSEPH'.trim()),
		lastName: capitalCadena('GONZALEZ SOUSA'.trim()),
		type: 'regular',
		email: 'chgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14530,
		nationality: 'V'.toUpperCase(),
		cedula: 18713219,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE INVESTIGACIONES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wfarias'.trim().toLowerCase(),
		name: capitalCadena(' WILFREDO RAFAEL'.trim()),
		lastName: capitalCadena('FARIAS ORELLANA'.trim()),
		type: 'regular',
		email: 'wfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14507,
		nationality: 'V'.toUpperCase(),
		cedula: 21239547,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lchacon'.trim().toLowerCase(),
		name: capitalCadena(' LEONARDO JESUS'.trim()),
		lastName: capitalCadena('CHACON PACHECO'.trim()),
		type: 'regular',
		email: 'lchacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15436,
		nationality: 'V'.toUpperCase(),
		cedula: 16113363,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA BANCA EN LINEA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afigueroa'.trim().toLowerCase(),
		name: capitalCadena(' ALEJANDRO JOSE'.trim()),
		lastName: capitalCadena('FIGUEROA BELLO'.trim()),
		type: 'regular',
		email: 'afigueroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14403,
		nationality: 'V'.toUpperCase(),
		cedula: 16814936,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SBARRAGAN'.trim().toLowerCase(),
		name: capitalCadena(' SARAHY DEL VALLE'.trim()),
		lastName: capitalCadena('BARRAGAN ORTEGA'.trim()),
		type: 'regular',
		email: 'SBARRAGAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12903,
		nationality: 'V'.toUpperCase(),
		cedula: 21640027,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE DESARROLLO DE SISTEMAS INTERNOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'earmas'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO JOSE'.trim()),
		lastName: capitalCadena('ARMAS GALINDEZ'.trim()),
		type: 'regular',
		email: 'earmas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14215,
		nationality: 'V'.toUpperCase(),
		cedula: 18539812,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KSOLORZANO'.trim().toLowerCase(),
		name: capitalCadena(' KEVIN RAFAEL'.trim()),
		lastName: capitalCadena('SOLORZANO VILLALTA'.trim()),
		type: 'regular',
		email: 'KSOLORZANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16283,
		nationality: 'V'.toUpperCase(),
		cedula: 16413780,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE OPEN BANKING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IYERENA'.trim().toLowerCase(),
		name: capitalCadena(' ITAMAR HELEOBANA'.trim()),
		lastName: capitalCadena('YERENA SILVA'.trim()),
		type: 'regular',
		email: 'IYERENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13818,
		nationality: 'V'.toUpperCase(),
		cedula: 9957498,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPENARANDA'.trim().toLowerCase(),
		name: capitalCadena(' JAVIER ALEXANDER'.trim()),
		lastName: capitalCadena('PEÑARANDA HERRERA'.trim()),
		type: 'regular',
		email: 'JPENARANDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8100,
		nationality: 'V'.toUpperCase(),
		cedula: 12196555,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PROMERO'.trim().toLowerCase(),
		name: capitalCadena(' PABLO RENOL'.trim()),
		lastName: capitalCadena('ROMERO SALAZAR'.trim()),
		type: 'regular',
		email: 'PROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1776,
		nationality: 'V'.toUpperCase(),
		cedula: 5335023,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SISTEMA PRODUCTOS PASIVOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MBASTIDAS'.trim().toLowerCase(),
		name: capitalCadena(' MICHAEL EDWARD'.trim()),
		lastName: capitalCadena('BASTIDAS CASTILLO'.trim()),
		type: 'regular',
		email: 'MBASTIDAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6097,
		nationality: 'V'.toUpperCase(),
		cedula: 13557634,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GERENCIA DE SISTEMAS POS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SESCOBAR'.trim().toLowerCase(),
		name: capitalCadena(' SUSANA PATRICIA'.trim()),
		lastName: capitalCadena('ESCOBAR MAHECHA'.trim()),
		type: 'regular',
		email: 'SESCOBAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4275,
		nationality: 'V'.toUpperCase(),
		cedula: 14876302,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DESARROLLO DE SISTEMAS DE INTEGRACIÓN'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'STOVAR'.trim().toLowerCase(),
		name: capitalCadena(' SHEYLA ROSA'.trim()),
		lastName: capitalCadena('TOVAR ESCALONA'.trim()),
		type: 'regular',
		email: 'STOVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12425,
		nationality: 'V'.toUpperCase(),
		cedula: 6265115,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA INTEGRACIÓN DE PLATAFORMAS DISTRIBUIDAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DANRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ALIRIO'.trim()),
		lastName: capitalCadena('RODRIGUEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'DANRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12198,
		nationality: 'V'.toUpperCase(),
		cedula: 22772445,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA REDES Y COMUNICACIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JDIYIANNATALE'.trim().toLowerCase(),
		name: capitalCadena(' JULIETA AUXILIADORA'.trim()),
		lastName: capitalCadena('DI YIANNATALE LUCENA'.trim()),
		type: 'regular',
		email: 'JDIYIANNATALE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12430,
		nationality: 'V'.toUpperCase(),
		cedula: 7305026,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALAMEDA'.trim().toLowerCase(),
		name: capitalCadena(' ALBANI ALEJANDRA'.trim()),
		lastName: capitalCadena('LAMEDA MUÑOZ'.trim()),
		type: 'regular',
		email: 'ALAMEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7918,
		nationality: 'V'.toUpperCase(),
		cedula: 24216043,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANGMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL RAMON'.trim()),
		lastName: capitalCadena('MEDINA CARDENAS'.trim()),
		type: 'regular',
		email: 'ANGMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13249,
		nationality: 'V'.toUpperCase(),
		cedula: 9194609,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'XMORENO'.trim().toLowerCase(),
		name: capitalCadena(' XIOMARA OFELIA'.trim()),
		lastName: capitalCadena('MORENO VILORIA'.trim()),
		type: 'regular',
		email: 'XMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9034,
		nationality: 'V'.toUpperCase(),
		cedula: 17977967,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE PRODUCCIÓN VISA Y MASTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRANBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' FRANKLIN RAMON'.trim()),
		lastName: capitalCadena('BLANCO AGUILERA'.trim()),
		type: 'regular',
		email: 'FRANBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6366,
		nationality: 'V'.toUpperCase(),
		cedula: 6948757,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA EMISIÓN Y DISTRIBUCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HESILVA'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR JOSE'.trim()),
		lastName: capitalCadena('SILVA GONZALEZ'.trim()),
		type: 'regular',
		email: 'HESILVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10261,
		nationality: 'V'.toUpperCase(),
		cedula: 15021704,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA EMISIÓN Y DISTRIBUCIÓN VISA Y MASTER'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUROJAS'.trim().toLowerCase(),
		name: capitalCadena(' YULEIMA MARITZA'.trim()),
		lastName: capitalCadena('ROJAS VELAZCO'.trim()),
		type: 'regular',
		email: 'YUROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16025,
		nationality: 'V'.toUpperCase(),
		cedula: 16282251,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA RECLAMO DE CANALES ELECTRONICOS ZONA 1'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCAMPOS'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA YURAIS'.trim()),
		lastName: capitalCadena('CAMPOS DUQUE'.trim()),
		type: 'regular',
		email: 'DCAMPOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12256,
		nationality: 'V'.toUpperCase(),
		cedula: 27756525,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' VANESSA VICTORIA'.trim()),
		lastName: capitalCadena('MENDOZA LAYA'.trim()),
		type: 'regular',
		email: 'VMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13128,
		nationality: 'V'.toUpperCase(),
		cedula: 28136161,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KCARABALLO'.trim().toLowerCase(),
		name: capitalCadena(' KEILA JARIB'.trim()),
		lastName: capitalCadena('CARABALLO MONGES'.trim()),
		type: 'regular',
		email: 'KCARABALLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13145,
		nationality: 'V'.toUpperCase(),
		cedula: 25205032,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mortiz'.trim().toLowerCase(),
		name: capitalCadena(' MAYERLING VICTORIA'.trim()),
		lastName: capitalCadena('ORTIZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'mortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14948,
		nationality: 'V'.toUpperCase(),
		cedula: 23696021,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crgarcia'.trim().toLowerCase(),
		name: capitalCadena(' CRISMAR CELESTE'.trim()),
		lastName: capitalCadena('GARCIA SALAZAR'.trim()),
		type: 'regular',
		email: 'crgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15200,
		nationality: 'V'.toUpperCase(),
		cedula: 25029591,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'idiaz'.trim().toLowerCase(),
		name: capitalCadena(' IVAN AUGUSTO'.trim()),
		lastName: capitalCadena('DIAZ CAMERO'.trim()),
		type: 'regular',
		email: 'idiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15338,
		nationality: 'V'.toUpperCase(),
		cedula: 30435411,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGODOY'.trim().toLowerCase(),
		name: capitalCadena(' JOSE DAVID'.trim()),
		lastName: capitalCadena('GODOY GARCIA'.trim()),
		type: 'regular',
		email: 'JGODOY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15948,
		nationality: 'V'.toUpperCase(),
		cedula: 28304108,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VDONATE'.trim().toLowerCase(),
		name: capitalCadena(' VIKY DARIACNY'.trim()),
		lastName: capitalCadena('DONATE RONDON'.trim()),
		type: 'regular',
		email: 'VDONATE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16093,
		nationality: 'V'.toUpperCase(),
		cedula: 27272178,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCASANOVA'.trim().toLowerCase(),
		name: capitalCadena(' JHON CARLOS'.trim()),
		lastName: capitalCadena('CASANOVA MORENO'.trim()),
		type: 'regular',
		email: 'JCASANOVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16190,
		nationality: 'V'.toUpperCase(),
		cedula: 29969207,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JVILLAFRANCA'.trim().toLowerCase(),
		name: capitalCadena(' JULIO CESAR'.trim()),
		lastName: capitalCadena('VILLAFRANCA ORTEGA'.trim()),
		type: 'regular',
		email: 'JVILLAFRANCA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16211,
		nationality: 'V'.toUpperCase(),
		cedula: 31795573,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) I'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOPENA'.trim().toLowerCase(),
		name: capitalCadena(' YOSELIN MATILDE'.trim()),
		lastName: capitalCadena('PEÑA MEZA'.trim()),
		type: 'regular',
		email: 'YOPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12766,
		nationality: 'V'.toUpperCase(),
		cedula: 25211635,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'svillafranca'.trim().toLowerCase(),
		name: capitalCadena(' SOL CELINA'.trim()),
		lastName: capitalCadena('VILLAFRANCA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'svillafranca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15092,
		nationality: 'V'.toUpperCase(),
		cedula: 27047747,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WVIELMA'.trim().toLowerCase(),
		name: capitalCadena(' WALEXKA GUADALUPE'.trim()),
		lastName: capitalCadena('VIELMA CLEMENTE'.trim()),
		type: 'regular',
		email: 'WVIELMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15234,
		nationality: 'V'.toUpperCase(),
		cedula: 30328250,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmarcano'.trim().toLowerCase(),
		name: capitalCadena(' DAINALYS ALEJANDRA'.trim()),
		lastName: capitalCadena('MARCANO MEZA'.trim()),
		type: 'regular',
		email: 'dmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15236,
		nationality: 'V'.toUpperCase(),
		cedula: 30245430,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kalvarado'.trim().toLowerCase(),
		name: capitalCadena(' KAIRO ALEJANDRO'.trim()),
		lastName: capitalCadena('ALVARADO PEÑA'.trim()),
		type: 'regular',
		email: 'kalvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15613,
		nationality: 'V'.toUpperCase(),
		cedula: 29966955,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NOSPINO'.trim().toLowerCase(),
		name: capitalCadena(' YESENIA ANDREINA'.trim()),
		lastName: capitalCadena('PAEZ MORENO'.trim()),
		type: 'regular',
		email: 'NOSPINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15760,
		nationality: 'V'.toUpperCase(),
		cedula: 25203341,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SPARRAGOZA'.trim().toLowerCase(),
		name: capitalCadena(' STEPHANY YERALDINE'.trim()),
		lastName: capitalCadena('ESPARRAGOZA CABAÑALES'.trim()),
		type: 'regular',
		email: 'SPARRAGOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16212,
		nationality: 'V'.toUpperCase(),
		cedula: 26268220,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUROMERO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS DANIEL'.trim()),
		lastName: capitalCadena('ROMERO GARNIER'.trim()),
		type: 'regular',
		email: 'LUROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16340,
		nationality: 'V'.toUpperCase(),
		cedula: 31101318,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOUZCATEGUI'.trim().toLowerCase(),
		name: capitalCadena(' YORGELIS '.trim()),
		lastName: capitalCadena('UZCATEGUI FAJARDO'.trim()),
		type: 'regular',
		email: 'YOUZCATEGUI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16358,
		nationality: 'V'.toUpperCase(),
		cedula: 30057735,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (M) II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ISFRANCO'.trim().toLowerCase(),
		name: capitalCadena(' ISAAC DAVID'.trim()),
		lastName: capitalCadena('FRANCO MARTINEZ'.trim()),
		type: 'regular',
		email: 'ISFRANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7535,
		nationality: 'V'.toUpperCase(),
		cedula: 24698797,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SHIDALGO'.trim().toLowerCase(),
		name: capitalCadena(' SANDRA CAROLINA'.trim()),
		lastName: capitalCadena('HIDALGO RUBIO'.trim()),
		type: 'regular',
		email: 'SHIDALGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8743,
		nationality: 'V'.toUpperCase(),
		cedula: 26573824,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZSOLORZANO'.trim().toLowerCase(),
		name: capitalCadena(' ZHAMIR ALEXANDER'.trim()),
		lastName: capitalCadena('SOLORZANO BECERRA'.trim()),
		type: 'regular',
		email: 'ZSOLORZANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10354,
		nationality: 'V'.toUpperCase(),
		cedula: 26619254,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSANDOVAL'.trim().toLowerCase(),
		name: capitalCadena(' JORVI ALEJANDRO'.trim()),
		lastName: capitalCadena('SANDOVAL RONDON'.trim()),
		type: 'regular',
		email: 'JSANDOVAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11767,
		nationality: 'V'.toUpperCase(),
		cedula: 27200036,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) V'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARAMOS'.trim().toLowerCase(),
		name: capitalCadena(' MARIA COROMOTO'.trim()),
		lastName: capitalCadena('RAMOS GUALDRON'.trim()),
		type: 'regular',
		email: 'MARAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6616,
		nationality: 'V'.toUpperCase(),
		cedula: 17927955,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALUNA'.trim().toLowerCase(),
		name: capitalCadena(' ALBERTO JOSE'.trim()),
		lastName: capitalCadena('LUNA GONZALEZ'.trim()),
		type: 'regular',
		email: 'ALUNA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11750,
		nationality: 'V'.toUpperCase(),
		cedula: 24757061,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCHIRINOS'.trim().toLowerCase(),
		name: capitalCadena(' MAURICIO ALFONZO'.trim()),
		lastName: capitalCadena('CHIRINOS RIVERO'.trim()),
		type: 'regular',
		email: 'MCHIRINOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12767,
		nationality: 'V'.toUpperCase(),
		cedula: 29605900,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (N) VI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MQUINAL'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL ENRIQUE'.trim()),
		lastName: capitalCadena('QUINAL RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'MQUINAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11404,
		nationality: 'V'.toUpperCase(),
		cedula: 15701475,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANIEVES'.trim().toLowerCase(),
		name: capitalCadena(' ARLENMAR THAYLANNY'.trim()),
		lastName: capitalCadena('NIEVES RAMOS'.trim()),
		type: 'regular',
		email: 'ANIEVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13036,
		nationality: 'V'.toUpperCase(),
		cedula: 30552440,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MALVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' MERIHANNI NICOLL'.trim()),
		lastName: capitalCadena('ALVAREZ PERALTA'.trim()),
		type: 'regular',
		email: 'MALVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13126,
		nationality: 'V'.toUpperCase(),
		cedula: 30104045,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jhdiaz'.trim().toLowerCase(),
		name: capitalCadena(' JHEIMAR ALEJANDRA'.trim()),
		lastName: capitalCadena('DIAZ MONTILLA'.trim()),
		type: 'regular',
		email: 'jhdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14946,
		nationality: 'V'.toUpperCase(),
		cedula: 30033266,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'manunez'.trim().toLowerCase(),
		name: capitalCadena(' MARLYN WALESKA'.trim()),
		lastName: capitalCadena('NUÑEZ AVENDAÑO'.trim()),
		type: 'regular',
		email: 'manunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15095,
		nationality: 'V'.toUpperCase(),
		cedula: 29922432,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LEQUINTERO'.trim().toLowerCase(),
		name: capitalCadena(' LEONEL ARTURO'.trim()),
		lastName: capitalCadena('QUINTERO NORIEGA'.trim()),
		type: 'regular',
		email: 'LEQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15484,
		nationality: 'V'.toUpperCase(),
		cedula: 29973314,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yurmorales'.trim().toLowerCase(),
		name: capitalCadena(' YURY PAOLA'.trim()),
		lastName: capitalCadena('MORALES COLMENARES'.trim()),
		type: 'regular',
		email: 'yurmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15531,
		nationality: 'V'.toUpperCase(),
		cedula: 29512201,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APAREZCA'.trim().toLowerCase(),
		name: capitalCadena(' ANGIE RAQUEL'.trim()),
		lastName: capitalCadena('LAMEDA PARISCA'.trim()),
		type: 'regular',
		email: 'APAREZCA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15700,
		nationality: 'V'.toUpperCase(),
		cedula: 30467899,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) III'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA CAROLINA'.trim()),
		lastName: capitalCadena('RODRIGUEZ BECERRA'.trim()),
		type: 'regular',
		email: 'ARODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12214,
		nationality: 'V'.toUpperCase(),
		cedula: 19453067,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kcarvajal'.trim().toLowerCase(),
		name: capitalCadena(' KARILYN MICHEL'.trim()),
		lastName: capitalCadena('CARVAJAL COLMENARES'.trim()),
		type: 'regular',
		email: 'kcarvajal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15042,
		nationality: 'V'.toUpperCase(),
		cedula: 27279970,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OFIGUEROA'.trim().toLowerCase(),
		name: capitalCadena(' OMARLYS YOSSIRE'.trim()),
		lastName: capitalCadena('FIGUEROA VILLEGAS'.trim()),
		type: 'regular',
		email: 'OFIGUEROA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15068,
		nationality: 'V'.toUpperCase(),
		cedula: 22565296,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vdomador'.trim().toLowerCase(),
		name: capitalCadena(' VERONICA DEL VALLE'.trim()),
		lastName: capitalCadena('DOMADOR PRINS'.trim()),
		type: 'regular',
		email: 'vdomador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15466,
		nationality: 'V'.toUpperCase(),
		cedula: 29596103,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SANTANDER'.trim().toLowerCase(),
		name: capitalCadena(' LEONEL ANTONIO'.trim()),
		lastName: capitalCadena('SANTANDER REYES'.trim()),
		type: 'regular',
		email: 'SANTANDER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15701,
		nationality: 'V'.toUpperCase(),
		cedula: 29919822,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gperdomo'.trim().toLowerCase(),
		name: capitalCadena(' GERAR JESUS'.trim()),
		lastName: capitalCadena('PERDOMO BELLO'.trim()),
		type: 'regular',
		email: 'gperdomo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15845,
		nationality: 'V'.toUpperCase(),
		cedula: 29952771,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PALZURO'.trim().toLowerCase(),
		name: capitalCadena(' PAOLA ROSCARI'.trim()),
		lastName: capitalCadena('ALZURO PEÑUELA'.trim()),
		type: 'regular',
		email: 'PALZURO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15895,
		nationality: 'V'.toUpperCase(),
		cedula: 28494649,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPADAUI'.trim().toLowerCase(),
		name: capitalCadena(' MARIO ANDRES'.trim()),
		lastName: capitalCadena('PADAUI ACEVEDO'.trim()),
		type: 'regular',
		email: 'MPADAUI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16092,
		nationality: 'V'.toUpperCase(),
		cedula: 29698405,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KAGUILAR'.trim().toLowerCase(),
		name: capitalCadena(' KEYNNER JESUS'.trim()),
		lastName: capitalCadena('AGUILAR RAGI'.trim()),
		type: 'regular',
		email: 'KAGUILAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16362,
		nationality: 'V'.toUpperCase(),
		cedula: 30071320,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. ATENCIÓN TELEFÓNICA AL CLIENTE (T) IV'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hperez'.trim().toLowerCase(),
		name: capitalCadena(' HILYADARA '.trim()),
		lastName: capitalCadena('PEREZ VELASQUEZ'.trim()),
		type: 'regular',
		email: 'hperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15249,
		nationality: 'V'.toUpperCase(),
		cedula: 12687172,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LURIVAS'.trim().toLowerCase(),
		name: capitalCadena(' LUISA SUJEIS'.trim()),
		lastName: capitalCadena('RIVAS LEON'.trim()),
		type: 'regular',
		email: 'LURIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15947,
		nationality: 'V'.toUpperCase(),
		cedula: 13465577,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONSOLA TORRE FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ealvarez'.trim().toLowerCase(),
		name: capitalCadena(' EDWARD ALEXIS'.trim()),
		lastName: capitalCadena('ALVAREZ CAMACHO'.trim()),
		type: 'regular',
		email: 'ealvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15049,
		nationality: 'V'.toUpperCase(),
		cedula: 12850629,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUFLORES'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALEJANDRO'.trim()),
		lastName: capitalCadena('FLORES ARRAEZ'.trim()),
		type: 'regular',
		email: 'LUFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15660,
		nationality: 'V'.toUpperCase(),
		cedula: 25624711,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' RUVID ALDEMAR'.trim()),
		lastName: capitalCadena('SANCHEZ FUENTES'.trim()),
		type: 'regular',
		email: 'RSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16097,
		nationality: 'V'.toUpperCase(),
		cedula: 14518336,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CHMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' CHRISTIAN GABRIEL'.trim()),
		lastName: capitalCadena('MARTINEZ BUROZ'.trim()),
		type: 'regular',
		email: 'CHMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7852,
		nationality: 'V'.toUpperCase(),
		cedula: 21089652,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EBERRIOS'.trim().toLowerCase(),
		name: capitalCadena(' ERIKA JOSEFINA'.trim()),
		lastName: capitalCadena('BERRIOS BRICEÑO'.trim()),
		type: 'regular',
		email: 'EBERRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11277,
		nationality: 'V'.toUpperCase(),
		cedula: 26881499,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jnavarro'.trim().toLowerCase(),
		name: capitalCadena(' JUAN DIEGO'.trim()),
		lastName: capitalCadena('NAVARRO MARQUEZ'.trim()),
		type: 'regular',
		email: 'jnavarro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14970,
		nationality: 'V'.toUpperCase(),
		cedula: 28540503,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luruiz'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALEJANDRO'.trim()),
		lastName: capitalCadena('RUIZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'luruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10101,
		nationality: 'V'.toUpperCase(),
		cedula: 23617342,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN TÉCNICA ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'airondon'.trim().toLowerCase(),
		name: capitalCadena(' AIVERSON ALEJANDRO'.trim()),
		lastName: capitalCadena('RONDON GARCIA'.trim()),
		type: 'regular',
		email: 'airondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14963,
		nationality: 'V'.toUpperCase(),
		cedula: 29920343,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN TÉCNICA ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPORTELA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE '.trim()),
		lastName: capitalCadena('PORTELA MARTINEZ'.trim()),
		type: 'regular',
		email: 'JPORTELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10048,
		nationality: 'V'.toUpperCase(),
		cedula: 10110301,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KSALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' KARLIANA DEL CARMEN'.trim()),
		lastName: capitalCadena('SALAZAR CHACON'.trim()),
		type: 'regular',
		email: 'KSALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6327,
		nationality: 'V'.toUpperCase(),
		cedula: 18912544,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONITOREO POS CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dinojosa'.trim().toLowerCase(),
		name: capitalCadena(' DORELIS ARIANA'.trim()),
		lastName: capitalCadena('INOJOSA BERMUDEZ'.trim()),
		type: 'regular',
		email: 'dinojosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14208,
		nationality: 'V'.toUpperCase(),
		cedula: 25367898,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONITOREO POS CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oguerra'.trim().toLowerCase(),
		name: capitalCadena(' ONESIMNO ENRIQUE'.trim()),
		lastName: capitalCadena('GUERRA PADRON'.trim()),
		type: 'regular',
		email: 'oguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14334,
		nationality: 'V'.toUpperCase(),
		cedula: 25205596,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN MONITOREO POS CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LQUERO'.trim().toLowerCase(),
		name: capitalCadena(' LISMEL COROMOTO'.trim()),
		lastName: capitalCadena('QUERO BELLO'.trim()),
		type: 'regular',
		email: 'LQUERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12735,
		nationality: 'V'.toUpperCase(),
		cedula: 14585819,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OVASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' OSCAR ARAMIS'.trim()),
		lastName: capitalCadena('VASQUEZ PONCE'.trim()),
		type: 'regular',
		email: 'OVASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15001,
		nationality: 'V'.toUpperCase(),
		cedula: 13311426,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jomolina'.trim().toLowerCase(),
		name: capitalCadena(' JORGE COROMOTO'.trim()),
		lastName: capitalCadena('MOLINA RIVAS'.trim()),
		type: 'regular',
		email: 'jomolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14432,
		nationality: 'V'.toUpperCase(),
		cedula: 5422699,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'V.P. SEGURIDAD PREVENTIVA Y PROTECCIÓN FÍSICA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ADIAZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALEXANDER'.trim()),
		lastName: capitalCadena('DIAZ CASIQUE'.trim()),
		type: 'regular',
		email: 'ADIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 243,
		nationality: 'V'.toUpperCase(),
		cedula: 9467657,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. DESARROLLO DE SOTWARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOALVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE AUGUSTO'.trim()),
		lastName: capitalCadena('ALVAREZ ALVAREZ'.trim()),
		type: 'regular',
		email: 'JOALVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14567,
		nationality: 'V'.toUpperCase(),
		cedula: 7947540,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. GESTIÓN DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO ENRIQUE'.trim()),
		lastName: capitalCadena('CASTRO LOPEZ'.trim()),
		type: 'regular',
		email: 'FCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 723,
		nationality: 'V'.toUpperCase(),
		cedula: 13802955,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JVIEIRA'.trim().toLowerCase(),
		name: capitalCadena(' JEANETTE ESTHER'.trim()),
		lastName: capitalCadena('VIEIRA MAIO'.trim()),
		type: 'regular',
		email: 'JVIEIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 605,
		nationality: 'V'.toUpperCase(),
		cedula: 9412903,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MRONDON'.trim().toLowerCase(),
		name: capitalCadena(' MARGRETT GISSELE'.trim()),
		lastName: capitalCadena('RONDON PEREZ'.trim()),
		type: 'regular',
		email: 'MRONDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 666,
		nationality: 'V'.toUpperCase(),
		cedula: 12765159,
		centroTrabajoId: '95_16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMEZA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EDUARDO'.trim()),
		lastName: capitalCadena('MEZA RIVAS'.trim()),
		type: 'regular',
		email: 'LMEZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3883,
		nationality: 'V'.toUpperCase(),
		cedula: 16202145,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MFRANCIA'.trim().toLowerCase(),
		name: capitalCadena(' MIGDALIA CLARET'.trim()),
		lastName: capitalCadena('FRANCIA HARRISON'.trim()),
		type: 'regular',
		email: 'MFRANCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6221,
		nationality: 'V'.toUpperCase(),
		cedula: 6011841,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SURBINA'.trim().toLowerCase(),
		name: capitalCadena(' SHARON PATRICIA'.trim()),
		lastName: capitalCadena('URBINA ROMERO'.trim()),
		type: 'regular',
		email: 'SURBINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8828,
		nationality: 'V'.toUpperCase(),
		cedula: 21623060,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMEJIA'.trim().toLowerCase(),
		name: capitalCadena(' JENDER JOSE'.trim()),
		lastName: capitalCadena('MEJIA DUARTE'.trim()),
		type: 'regular',
		email: 'JMEJIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10971,
		nationality: 'V'.toUpperCase(),
		cedula: 26574627,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDTORRES'.trim().toLowerCase(),
		name: capitalCadena(' EDGAR ENRIQUE'.trim()),
		lastName: capitalCadena('TORRES MANZANO'.trim()),
		type: 'regular',
		email: 'EDTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12377,
		nationality: 'V'.toUpperCase(),
		cedula: 23943719,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OSARACHE'.trim().toLowerCase(),
		name: capitalCadena(' OSCAR ARMANDO'.trim()),
		lastName: capitalCadena('SARACHE RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'OSARACHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10650,
		nationality: 'V'.toUpperCase(),
		cedula: 27177004,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DROJAS'.trim().toLowerCase(),
		name: capitalCadena(' DENISE DESIREE'.trim()),
		lastName: capitalCadena('ROJAS VERDU'.trim()),
		type: 'regular',
		email: 'DROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11037,
		nationality: 'V'.toUpperCase(),
		cedula: 23657217,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gpaez'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA CAROLINA'.trim()),
		lastName: capitalCadena('PAEZ TORRES'.trim()),
		type: 'regular',
		email: 'gpaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11145,
		nationality: 'V'.toUpperCase(),
		cedula: 28481412,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' AUREANYELY GABRIELA'.trim()),
		lastName: capitalCadena('FERNANDEZ ARROYO'.trim()),
		type: 'regular',
		email: 'AFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12686,
		nationality: 'V'.toUpperCase(),
		cedula: 30491056,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WDAVILA'.trim().toLowerCase(),
		name: capitalCadena(' WUILSON ANTONIO'.trim()),
		lastName: capitalCadena('DAVILA RAGUA'.trim()),
		type: 'regular',
		email: 'WDAVILA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12755,
		nationality: 'V'.toUpperCase(),
		cedula: 29828367,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VMOGOLLON'.trim().toLowerCase(),
		name: capitalCadena(' VALENTINA SUSETH'.trim()),
		lastName: capitalCadena('MOGOLLON LOPEZ'.trim()),
		type: 'regular',
		email: 'VMOGOLLON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13028,
		nationality: 'V'.toUpperCase(),
		cedula: 29983274,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LREQUENA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALBERTO'.trim()),
		lastName: capitalCadena('REQUENA LOPEZ'.trim()),
		type: 'regular',
		email: 'LREQUENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13082,
		nationality: 'V'.toUpperCase(),
		cedula: 28512420,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rosalazar'.trim().toLowerCase(),
		name: capitalCadena(' RODRIGO ANTONIO'.trim()),
		lastName: capitalCadena('SALAZAR BRITO'.trim()),
		type: 'regular',
		email: 'rosalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14942,
		nationality: 'V'.toUpperCase(),
		cedula: 28481223,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlinares'.trim().toLowerCase(),
		name: capitalCadena(' JOSE FELIX'.trim()),
		lastName: capitalCadena('LINARES CASTRO'.trim()),
		type: 'regular',
		email: 'jlinares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15126,
		nationality: 'V'.toUpperCase(),
		cedula: 30111721,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gquintero'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL DAVID'.trim()),
		lastName: capitalCadena('QUINTERO ANDRADES'.trim()),
		type: 'regular',
		email: 'gquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15426,
		nationality: 'V'.toUpperCase(),
		cedula: 29969767,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ENRIQUE'.trim()),
		lastName: capitalCadena('MENDOZA PARRA'.trim()),
		type: 'regular',
		email: 'CMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 265,
		nationality: 'V'.toUpperCase(),
		cedula: 4568285,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CVELANDIA'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN TERESA'.trim()),
		lastName: capitalCadena('VELANDIA USECHE'.trim()),
		type: 'regular',
		email: 'CVELANDIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1846,
		nationality: 'V'.toUpperCase(),
		cedula: 10480193,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA PRODUCTOS Y SERV TDD Y SOL EMERG'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSALGUEDO'.trim().toLowerCase(),
		name: capitalCadena(' JESUS RAFAEL'.trim()),
		lastName: capitalCadena('SALGUEDO RONDON'.trim()),
		type: 'regular',
		email: 'JSALGUEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12687,
		nationality: 'V'.toUpperCase(),
		cedula: 28327623,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' ZARAI '.trim()),
		lastName: capitalCadena('GOMEZ TOVAR'.trim()),
		type: 'regular',
		email: 'ZGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8829,
		nationality: 'V'.toUpperCase(),
		cedula: 21233179,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRENGIFO'.trim().toLowerCase(),
		name: capitalCadena(' JHANILKA MARELVA'.trim()),
		lastName: capitalCadena('RENGIFO QUEVEDO'.trim()),
		type: 'regular',
		email: 'JRENGIFO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12612,
		nationality: 'V'.toUpperCase(),
		cedula: 27879834,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krebolledo'.trim().toLowerCase(),
		name: capitalCadena(' KENLLYRET JHOSMAR'.trim()),
		lastName: capitalCadena('REBOLLEDO MARTI'.trim()),
		type: 'regular',
		email: 'krebolledo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15514,
		nationality: 'V'.toUpperCase(),
		cedula: 26819676,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vmendez'.trim().toLowerCase(),
		name: capitalCadena(' VALERIA VALENTINA'.trim()),
		lastName: capitalCadena('MENDEZ SULBARAN'.trim()),
		type: 'regular',
		email: 'vmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15611,
		nationality: 'V'.toUpperCase(),
		cedula: 29536657,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvillamizar'.trim().toLowerCase(),
		name: capitalCadena(' JUAN MANUEL'.trim()),
		lastName: capitalCadena('VILLAMIZAR ECHEZURIA'.trim()),
		type: 'regular',
		email: 'jvillamizar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15612,
		nationality: 'V'.toUpperCase(),
		cedula: 30719326,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kesanchez'.trim().toLowerCase(),
		name: capitalCadena(' KEN EDUARDO'.trim()),
		lastName: capitalCadena('SANCHEZ ALVAREZ'.trim()),
		type: 'regular',
		email: 'kesanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15702,
		nationality: 'V'.toUpperCase(),
		cedula: 29529567,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ATORREALBA'.trim().toLowerCase(),
		name: capitalCadena(' ARIANNY DAYERLING'.trim()),
		lastName: capitalCadena('TORREALBA QUINTANA'.trim()),
		type: 'regular',
		email: 'ATORREALBA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15748,
		nationality: 'V'.toUpperCase(),
		cedula: 29595622,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SCGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' SCARLET DEL VALLE'.trim()),
		lastName: capitalCadena('GONZALEZ TORCATE'.trim()),
		type: 'regular',
		email: 'SCGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15749,
		nationality: 'V'.toUpperCase(),
		cedula: 28494194,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMOSQUERA'.trim().toLowerCase(),
		name: capitalCadena(' DEIVY JOHANDER'.trim()),
		lastName: capitalCadena('MOSQUERA PERDOMO'.trim()),
		type: 'regular',
		email: 'DMOSQUERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16082,
		nationality: 'V'.toUpperCase(),
		cedula: 26473618,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ydavila'.trim().toLowerCase(),
		name: capitalCadena(' YESSIKA GREY'.trim()),
		lastName: capitalCadena('DAVILA GONZALEZ'.trim()),
		type: 'regular',
		email: 'ydavila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13407,
		nationality: 'V'.toUpperCase(),
		cedula: 11740316,
		centroTrabajoId: '95_2',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCARRILLO'.trim().toLowerCase(),
		name: capitalCadena(' YESENIA DEL VALLE'.trim()),
		lastName: capitalCadena('CARRILLO SANCHEZ'.trim()),
		type: 'regular',
		email: 'YCARRILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1349,
		nationality: 'V'.toUpperCase(),
		cedula: 14037516,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. TECNOLOGÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' EDY DEL VALLE'.trim()),
		lastName: capitalCadena('HERNANDEZ SALDAÑA'.trim()),
		type: 'regular',
		email: 'EDHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12338,
		nationality: 'V'.toUpperCase(),
		cedula: 10470993,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ONOGUERA'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO RAFAEL'.trim()),
		lastName: capitalCadena('NOGUERA CHAVEZ'.trim()),
		type: 'regular',
		email: 'ONOGUERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5055,
		nationality: 'V'.toUpperCase(),
		cedula: 14446822,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' JULIO CESAR'.trim()),
		lastName: capitalCadena('HERNANDEZ OLMOS'.trim()),
		type: 'regular',
		email: 'JUHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1511,
		nationality: 'V'.toUpperCase(),
		cedula: 16877769,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORDINACIÓN REDES Y COMUNICACIONES CARACAS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HPENA'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR JOSE'.trim()),
		lastName: capitalCadena('PEÑA '.trim()),
		type: 'regular',
		email: 'HPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5314,
		nationality: 'V'.toUpperCase(),
		cedula: 10275579,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'damarquez'.trim().toLowerCase(),
		name: capitalCadena(' DAVID ALEXANDER'.trim()),
		lastName: capitalCadena('MARQUEZ RINCON'.trim()),
		type: 'regular',
		email: 'damarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14504,
		nationality: 'V'.toUpperCase(),
		cedula: 23638350,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' HEBER ISAI'.trim()),
		lastName: capitalCadena('GARCIA VALDESPINO'.trim()),
		type: 'regular',
		email: 'HGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11105,
		nationality: 'V'.toUpperCase(),
		cedula: 23630624,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aexposito'.trim().toLowerCase(),
		name: capitalCadena(' ALBERTO JOSE'.trim()),
		lastName: capitalCadena('EXPOSITO PIÑERO'.trim()),
		type: 'regular',
		email: 'aexposito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14719,
		nationality: 'V'.toUpperCase(),
		cedula: 18538410,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA COMUNICACIÓN PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' ALI ALBERTO'.trim()),
		lastName: capitalCadena('CASTILLO LIENDO'.trim()),
		type: 'regular',
		email: 'ALCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10008,
		nationality: 'V'.toUpperCase(),
		cedula: 6508411,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ENERGÍA CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMILANO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS RODOLFO'.trim()),
		lastName: capitalCadena('MILANO PEREZ'.trim()),
		type: 'regular',
		email: 'CMILANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11367,
		nationality: 'V'.toUpperCase(),
		cedula: 10481043,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA NACIONAL DE CONSOLA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WMALAGON'.trim().toLowerCase(),
		name: capitalCadena(' WILLIAMS '.trim()),
		lastName: capitalCadena('MALAGON ZULUAGA'.trim()),
		type: 'regular',
		email: 'WMALAGON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9794,
		nationality: 'V'.toUpperCase(),
		cedula: 6792685,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ENERGÍA CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MDOMINGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DEL CARMEN'.trim()),
		lastName: capitalCadena('DOMINGUEZ MUJICA'.trim()),
		type: 'regular',
		email: 'MDOMINGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2042,
		nationality: 'V'.toUpperCase(),
		cedula: 6864506,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nyanez'.trim().toLowerCase(),
		name: capitalCadena(' NELSON JOSE'.trim()),
		lastName: capitalCadena('YAÑEZ VASQUEZ'.trim()),
		type: 'regular',
		email: 'nyanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10927,
		nationality: 'V'.toUpperCase(),
		cedula: 4297048,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR MANUEL'.trim()),
		lastName: capitalCadena('PIÑANGO COLMENARES'.trim()),
		type: 'regular',
		email: 'HCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12637,
		nationality: 'V'.toUpperCase(),
		cedula: 12085704,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RANGULO'.trim().toLowerCase(),
		name: capitalCadena(' RAMON ALEXIS'.trim()),
		lastName: capitalCadena('ANGULO '.trim()),
		type: 'regular',
		email: 'RANGULO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15036,
		nationality: 'V'.toUpperCase(),
		cedula: 11672951,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbetancourt'.trim().toLowerCase(),
		name: capitalCadena(' JORGE LUIS'.trim()),
		lastName: capitalCadena('BETANCOURT RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'jbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15251,
		nationality: 'V'.toUpperCase(),
		cedula: 17300995,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GMONTES'.trim().toLowerCase(),
		name: capitalCadena(' GIOVANNI ENRIQUE'.trim()),
		lastName: capitalCadena('MONTES BENITEZ'.trim()),
		type: 'regular',
		email: 'GMONTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1279,
		nationality: 'V'.toUpperCase(),
		cedula: 14728214,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ELINERO'.trim().toLowerCase(),
		name: capitalCadena(' ELVIS RAMON'.trim()),
		lastName: capitalCadena('LINERO CARABALLO'.trim()),
		type: 'regular',
		email: 'ELINERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5182,
		nationality: 'V'.toUpperCase(),
		cedula: 20870087,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ERIVAS'.trim().toLowerCase(),
		name: capitalCadena(' ELISAUL DAVID'.trim()),
		lastName: capitalCadena('RIVAS ROJAS'.trim()),
		type: 'regular',
		email: 'ERIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7330,
		nationality: 'V'.toUpperCase(),
		cedula: 17976861,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LPERDOMO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS DANIEL'.trim()),
		lastName: capitalCadena('PERDOMO DE LA OSSA'.trim()),
		type: 'regular',
		email: 'LPERDOMO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8917,
		nationality: 'V'.toUpperCase(),
		cedula: 26271536,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dhuerfano'.trim().toLowerCase(),
		name: capitalCadena(' DAUFREN ALEJANDRO'.trim()),
		lastName: capitalCadena('HUERFANO CONTRERAS'.trim()),
		type: 'regular',
		email: 'dhuerfano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9254,
		nationality: 'V'.toUpperCase(),
		cedula: 26440921,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MIGUEL'.trim()),
		lastName: capitalCadena('MARTINEZ CARDONA'.trim()),
		type: 'regular',
		email: 'JOMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9425,
		nationality: 'V'.toUpperCase(),
		cedula: 21346493,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' HEIBAR IRE'.trim()),
		lastName: capitalCadena('MARTINEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'HMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10782,
		nationality: 'V'.toUpperCase(),
		cedula: 19023086,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DEDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' DEIKER ANTONIO'.trim()),
		lastName: capitalCadena('DIAZ PEÑA'.trim()),
		type: 'regular',
		email: 'DEDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11265,
		nationality: 'V'.toUpperCase(),
		cedula: 21467133,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DEHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' DEIVI DANIEL'.trim()),
		lastName: capitalCadena('HERRERA PINO'.trim()),
		type: 'regular',
		email: 'DEHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11319,
		nationality: 'V'.toUpperCase(),
		cedula: 18751590,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACRESPO'.trim().toLowerCase(),
		name: capitalCadena(' ANTHONY JOHAN'.trim()),
		lastName: capitalCadena('CRESPO AMARO'.trim()),
		type: 'regular',
		email: 'ACRESPO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11817,
		nationality: 'V'.toUpperCase(),
		cedula: 24895478,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CESCOBAR'.trim().toLowerCase(),
		name: capitalCadena(' CESAR JAVIER'.trim()),
		lastName: capitalCadena('ESCOBAR ECHARRY'.trim()),
		type: 'regular',
		email: 'CESCOBAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12934,
		nationality: 'V'.toUpperCase(),
		cedula: 21806608,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HLACRUZ'.trim().toLowerCase(),
		name: capitalCadena(' HOMERO JOSE'.trim()),
		lastName: capitalCadena('LACRUZ MORENO'.trim()),
		type: 'regular',
		email: 'HLACRUZ@BNC.COM.VE>'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12969,
		nationality: 'V'.toUpperCase(),
		cedula: 28346601,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR TI II']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMAYO'.trim().toLowerCase(),
		name: capitalCadena(' ROBINSON JOSE'.trim()),
		lastName: capitalCadena('MAYO VILLEGAS'.trim()),
		type: 'regular',
		email: 'RMAYO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 691,
		nationality: 'V'.toUpperCase(),
		cedula: 6092311,
		centroTrabajoId: '95_3',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. TECNOLOGÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SBRACAMONTE'.trim().toLowerCase(),
		name: capitalCadena(' SILVANA LORENA'.trim()),
		lastName: capitalCadena('BRACAMONTE CASTILLO'.trim()),
		type: 'regular',
		email: 'SBRACAMONTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10694,
		nationality: 'V'.toUpperCase(),
		cedula: 14495382,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GMORALES'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS REBECA'.trim()),
		lastName: capitalCadena('MORALES PEREZ'.trim()),
		type: 'regular',
		email: 'GMORALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11188,
		nationality: 'V'.toUpperCase(),
		cedula: 26386277,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SBALZA'.trim().toLowerCase(),
		name: capitalCadena(' SILVEIRYS ROSANA'.trim()),
		lastName: capitalCadena('BALZA SOJO'.trim()),
		type: 'regular',
		email: 'SBALZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8849,
		nationality: 'V'.toUpperCase(),
		cedula: 19821525,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YORGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' YORNY JAVIER'.trim()),
		lastName: capitalCadena('GONZALEZ YSTURIZ'.trim()),
		type: 'regular',
		email: 'YORGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6086,
		nationality: 'V'.toUpperCase(),
		cedula: 12683119,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. CONTROL DE INVENTARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YGUEVARA'.trim().toLowerCase(),
		name: capitalCadena(' YUBISAY NAKARY'.trim()),
		lastName: capitalCadena('GUEVARA RAMIREZ'.trim()),
		type: 'regular',
		email: 'YGUEVARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7556,
		nationality: 'V'.toUpperCase(),
		cedula: 12763248,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACANIZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' ADRIAN ENRIQUE'.trim()),
		lastName: capitalCadena('CAÑIZALEZ VELANDRIA'.trim()),
		type: 'regular',
		email: 'ACANIZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11876,
		nationality: 'V'.toUpperCase(),
		cedula: 21103661,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO JESUS'.trim()),
		lastName: capitalCadena('RUIZ SALAS'.trim()),
		type: 'regular',
		email: 'FRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7335,
		nationality: 'V'.toUpperCase(),
		cedula: 18092763,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN CENTRO ALTERNO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOMEJIA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANGEL'.trim()),
		lastName: capitalCadena('MEJIA ASCANIO'.trim()),
		type: 'regular',
		email: 'JOMEJIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8349,
		nationality: 'V'.toUpperCase(),
		cedula: 17773111,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CROSALES'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ALFREDO'.trim()),
		lastName: capitalCadena('ROSALES PEDROZA'.trim()),
		type: 'regular',
		email: 'CROSALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10645,
		nationality: 'V'.toUpperCase(),
		cedula: 20593882,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CLHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' CLARIZA MARBELLA'.trim()),
		lastName: capitalCadena('HERNANDEZ '.trim()),
		type: 'regular',
		email: 'CLHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11202,
		nationality: 'V'.toUpperCase(),
		cedula: 6340095,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBRICENO'.trim().toLowerCase(),
		name: capitalCadena(' JOANGEL ANTONIO'.trim()),
		lastName: capitalCadena('BRICEÑO ROJAS'.trim()),
		type: 'regular',
		email: 'JBRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11761,
		nationality: 'V'.toUpperCase(),
		cedula: 22047158,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PCASTANEDA'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA GERALDINE'.trim()),
		lastName: capitalCadena('CASTAÑEDA ACOSTA'.trim()),
		type: 'regular',
		email: 'PCASTANEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12024,
		nationality: 'V'.toUpperCase(),
		cedula: 19354134,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. CAPITAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HOLIVEROS'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR OLIMPIO'.trim()),
		lastName: capitalCadena('OLIVEROS SALGADO'.trim()),
		type: 'regular',
		email: 'HOLIVEROS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4959,
		nationality: 'V'.toUpperCase(),
		cedula: 2644343,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' PABLO LEONCIO'.trim()),
		lastName: capitalCadena('RIVAS SALAZAR'.trim()),
		type: 'regular',
		email: 'PRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7277,
		nationality: 'V'.toUpperCase(),
		cedula: 9934486,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edescalona'.trim().toLowerCase(),
		name: capitalCadena(' EDGAR JESUS'.trim()),
		lastName: capitalCadena('ESCALONA PITTOL'.trim()),
		type: 'regular',
		email: 'edescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15572,
		nationality: 'V'.toUpperCase(),
		cedula: 18753218,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JQUILIMACO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANTONIO'.trim()),
		lastName: capitalCadena('QUILIMACO CANELON'.trim()),
		type: 'regular',
		email: 'JQUILIMACO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15902,
		nationality: 'V'.toUpperCase(),
		cedula: 14494255,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. SEGURIDAD ALMACENES GUATIRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRANKORTEGA'.trim().toLowerCase(),
		name: capitalCadena(' FRANKY ALEJANDRO'.trim()),
		lastName: capitalCadena('ORTEGA CORONADO'.trim()),
		type: 'regular',
		email: 'FRANKORTEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7677,
		nationality: 'V'.toUpperCase(),
		cedula: 15373844,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysolorzano'.trim().toLowerCase(),
		name: capitalCadena(' YEFERSON MOISES'.trim()),
		lastName: capitalCadena('SOLORZANO OSES'.trim()),
		type: 'regular',
		email: 'ysolorzano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10644,
		nationality: 'V'.toUpperCase(),
		cedula: 20211169,
		centroTrabajoId: '95_5',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (CARACAS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AARANGUREN'.trim().toLowerCase(),
		name: capitalCadena(' ALFREDO JOSE'.trim()),
		lastName: capitalCadena('ARANGUREN VARGAS'.trim()),
		type: 'regular',
		email: 'AARANGUREN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13659,
		nationality: 'V'.toUpperCase(),
		cedula: 12810134,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afereira'.trim().toLowerCase(),
		name: capitalCadena(' ASTRID CAROLINA'.trim()),
		lastName: capitalCadena('FEREIRA HERRERA'.trim()),
		type: 'regular',
		email: 'afereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12483,
		nationality: 'V'.toUpperCase(),
		cedula: 19245673,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pinto'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD EDINSON'.trim()),
		lastName: capitalCadena('PINTO SALCEDO'.trim()),
		type: 'regular',
		email: 'pinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15664,
		nationality: 'V'.toUpperCase(),
		cedula: 20649079,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pgomez'.trim().toLowerCase(),
		name: capitalCadena(' PAOLA VALENTINA'.trim()),
		lastName: capitalCadena('GOMEZ NOGUERA'.trim()),
		type: 'regular',
		email: 'pgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12819,
		nationality: 'V'.toUpperCase(),
		cedula: 26977144,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. REG. OPERACION DE AGENCIAS ARAGUA LOS LLANOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCAMPELO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('CAMPELO DE RUMBO'.trim()),
		type: 'regular',
		email: 'MCAMPELO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12415,
		nationality: 'V'.toUpperCase(),
		cedula: 11982809,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASISTENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CFRIAS'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS LUIS'.trim()),
		lastName: capitalCadena('FRIAS PACHECO'.trim()),
		type: 'regular',
		email: 'CFRIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12484,
		nationality: 'V'.toUpperCase(),
		cedula: 17366355,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCUBEROS'.trim().toLowerCase(),
		name: capitalCadena(' JAIRO JOSE'.trim()),
		lastName: capitalCadena('CUBEROS ALBORNOZ'.trim()),
		type: 'regular',
		email: 'JCUBEROS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15014,
		nationality: 'V'.toUpperCase(),
		cedula: 12573134,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JABARCA'.trim().toLowerCase(),
		name: capitalCadena(' JESUS OCTAVIO'.trim()),
		lastName: capitalCadena('ABARCA PRIMERA'.trim()),
		type: 'regular',
		email: 'JABARCA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15898,
		nationality: 'V'.toUpperCase(),
		cedula: 22285407,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LINAVAS'.trim().toLowerCase(),
		name: capitalCadena(' LISETH YOHANNA'.trim()),
		lastName: capitalCadena('NAVAS LOPEZ'.trim()),
		type: 'regular',
		email: 'LINAVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13159,
		nationality: 'V'.toUpperCase(),
		cedula: 19417743,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA APOYO A PRESIDENCIA EJECUTIVA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CHOFER']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BLANDAETA'.trim().toLowerCase(),
		name: capitalCadena(' BETZABEL JOSEFINA'.trim()),
		lastName: capitalCadena('LANDAETA ROMERO'.trim()),
		type: 'regular',
		email: 'BLANDAETA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13657,
		nationality: 'V'.toUpperCase(),
		cedula: 12121490,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMUNOZ'.trim().toLowerCase(),
		name: capitalCadena(' JUAN JOSE'.trim()),
		lastName: capitalCadena('MUÑOZ BRITO'.trim()),
		type: 'regular',
		email: 'JMUNOZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2123,
		nationality: 'V'.toUpperCase(),
		cedula: 15532331,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN ZONA ARAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' RUBEN ELOY'.trim()),
		lastName: capitalCadena('GUTIERREZ LA ROSA'.trim()),
		type: 'regular',
		email: 'RGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 854,
		nationality: 'V'.toUpperCase(),
		cedula: 12111324,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ESGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' ESTHER DESIRETH'.trim()),
		lastName: capitalCadena('GOMEZ CANTILLO'.trim()),
		type: 'regular',
		email: 'ESGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11773,
		nationality: 'V'.toUpperCase(),
		cedula: 19947192,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aaragort'.trim().toLowerCase(),
		name: capitalCadena(' ALLISON ARNALDO'.trim()),
		lastName: capitalCadena('ARAGORT CHAVEZ'.trim()),
		type: 'regular',
		email: 'aaragort@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15627,
		nationality: 'V'.toUpperCase(),
		cedula: 20245904,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAGRAZ'.trim().toLowerCase(),
		name: capitalCadena(' MARCO ANTONIO'.trim()),
		lastName: capitalCadena('AGRAZ PABON'.trim()),
		type: 'regular',
		email: 'MAGRAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 198,
		nationality: 'V'.toUpperCase(),
		cedula: 10754132,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMIER'.trim().toLowerCase(),
		name: capitalCadena(' ANEUDYS VIANNEY'.trim()),
		lastName: capitalCadena('MIER Y TERAN DIAZ'.trim()),
		type: 'regular',
		email: 'AMIER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13658,
		nationality: 'V'.toUpperCase(),
		cedula: 14830472,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA II'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' ROYMAN ARMANDO'.trim()),
		lastName: capitalCadena('CASTRO PIN'.trim()),
		type: 'regular',
		email: 'ROCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14860,
		nationality: 'V'.toUpperCase(),
		cedula: 7957107,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMONTEZUMA'.trim().toLowerCase(),
		name: capitalCadena(' YENSSY ALEJANDRO'.trim()),
		lastName: capitalCadena('MONTEZUMA MORILLO'.trim()),
		type: 'regular',
		email: 'YMONTEZUMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14780,
		nationality: 'V'.toUpperCase(),
		cedula: 21101276,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crmartinez'.trim().toLowerCase(),
		name: capitalCadena(' CRISTOBAL EMILIO'.trim()),
		lastName: capitalCadena('MARTINEZ MURILLO'.trim()),
		type: 'regular',
		email: 'crmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15874,
		nationality: 'V'.toUpperCase(),
		cedula: 3885308,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA DE ÁREA SEGURIDAD PREVENTIVA Y PROT. FÍSICA'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NHURTADO'.trim().toLowerCase(),
		name: capitalCadena(' NANCY FELICIA'.trim()),
		lastName: capitalCadena('HURTADO CRESPO'.trim()),
		type: 'regular',
		email: 'NHURTADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12468,
		nationality: 'V'.toUpperCase(),
		cedula: 6485524,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KKELLER'.trim().toLowerCase(),
		name: capitalCadena(' KAREN DESIREE'.trim()),
		lastName: capitalCadena('KELLER MARCANO'.trim()),
		type: 'regular',
		email: 'KKELLER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13856,
		nationality: 'V'.toUpperCase(),
		cedula: 18912552,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OMELCHOR'.trim().toLowerCase(),
		name: capitalCadena(' OMAGDY ALEXANDRA'.trim()),
		lastName: capitalCadena('MELCHOR IBARRA'.trim()),
		type: 'regular',
		email: 'OMELCHOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8956,
		nationality: 'V'.toUpperCase(),
		cedula: 13245279,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE NEGOCIOS SECT AGROPEC RG. ARAGUA-CARABOBO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YNUNEZ'.trim().toLowerCase(),
		name: capitalCadena(' YELIKA CHIQUINQUIRA'.trim()),
		lastName: capitalCadena('NUÑEZ URDANETA'.trim()),
		type: 'regular',
		email: 'YNUNEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4836,
		nationality: 'V'.toUpperCase(),
		cedula: 10446961,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. REG. OPERACION DE AGENCIAS ARAGUA LOS LLANOS'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RICHARDSILVERA1399'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD JOSE'.trim()),
		lastName: capitalCadena('SILVERA BOLIVAR'.trim()),
		type: 'regular',
		email: 'RICHARDSILVERA1399@HOTMAIL.COM'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11960,
		nationality: 'V'.toUpperCase(),
		cedula: 10616550,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TFLORES'.trim().toLowerCase(),
		name: capitalCadena(' TOMAS ENRIQUE'.trim()),
		lastName: capitalCadena('FLORES BRICEÑO'.trim()),
		type: 'regular',
		email: 'TFLORES@BNC.COM,VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16194,
		nationality: 'V'.toUpperCase(),
		cedula: 6853445,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOAGUILAR'.trim().toLowerCase(),
		name: capitalCadena(' JORGE LUIS'.trim()),
		lastName: capitalCadena('AGUILAR FARIAS'.trim()),
		type: 'regular',
		email: 'JOAGUILAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7694,
		nationality: 'V'.toUpperCase(),
		cedula: 11552968,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN TÉCNICA ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvasquez'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL ENRIQUE'.trim()),
		lastName: capitalCadena('VASQUEZ AMARANTE'.trim()),
		type: 'regular',
		email: 'mvasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14063,
		nationality: 'V'.toUpperCase(),
		cedula: 14061433,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'memorales'.trim().toLowerCase(),
		name: capitalCadena(' MERLIN VICTORIA'.trim()),
		lastName: capitalCadena('MORALES ISCULPI'.trim()),
		type: 'regular',
		email: 'memorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15455,
		nationality: 'V'.toUpperCase(),
		cedula: 12341706,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE SOPORTE POS CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DALFONSO'.trim().toLowerCase(),
		name: capitalCadena(' DESIREE ALEJANDRA'.trim()),
		lastName: capitalCadena('ALFONZO '.trim()),
		type: 'regular',
		email: 'DALFONSO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 197,
		nationality: 'V'.toUpperCase(),
		cedula: 13473925,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VGRATEROL'.trim().toLowerCase(),
		name: capitalCadena(' VIONIXTZA TRINIDAD'.trim()),
		lastName: capitalCadena('GRATEROL COLMENARES'.trim()),
		type: 'regular',
		email: 'VGRATEROL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 338,
		nationality: 'V'.toUpperCase(),
		cedula: 10321624,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA ARAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOCHACON'.trim().toLowerCase(),
		name: capitalCadena(' YOSMAR ELENA'.trim()),
		lastName: capitalCadena('CHACON CASTELLANOS'.trim()),
		type: 'regular',
		email: 'YOCHACON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9517,
		nationality: 'V'.toUpperCase(),
		cedula: 9675365,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LARANGUREN'.trim().toLowerCase(),
		name: capitalCadena(' LILIAM MARIA'.trim()),
		lastName: capitalCadena('ARANGUREN DE RAMIREZ'.trim()),
		type: 'regular',
		email: 'LARANGUREN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 203,
		nationality: 'V'.toUpperCase(),
		cedula: 8782536,
		centroTrabajoId: '95_7',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. REGIÓN ARAGUA - LOS LLANOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iespinoza'.trim().toLowerCase(),
		name: capitalCadena(' IRASEL DE JESUS'.trim()),
		lastName: capitalCadena('ESPINOZA NUÑEZ'.trim()),
		type: 'regular',
		email: 'iespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10773,
		nationality: 'V'.toUpperCase(),
		cedula: 19919337,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL OPERACION DE AGENCIAS CARABOBO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cagames'.trim().toLowerCase(),
		name: capitalCadena(' CAROLINA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('AGAMES CARABALLOS'.trim()),
		type: 'regular',
		email: 'cagames@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13971,
		nationality: 'V'.toUpperCase(),
		cedula: 22730910,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aaponte'.trim().toLowerCase(),
		name: capitalCadena(' ANTHONY JOSE'.trim()),
		lastName: capitalCadena('APONTE CALDERON'.trim()),
		type: 'regular',
		email: 'aaponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15133,
		nationality: 'V'.toUpperCase(),
		cedula: 28248756,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JARCINIEGAS'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('ARCINIEGAS SOTO'.trim()),
		type: 'regular',
		email: 'JARCINIEGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16109,
		nationality: 'V'.toUpperCase(),
		cedula: 15899710,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sortega'.trim().toLowerCase(),
		name: capitalCadena(' SINDIVELY DEL CARMEN'.trim()),
		lastName: capitalCadena('ORTEGA ORTEGA'.trim()),
		type: 'regular',
		email: 'sortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13968,
		nationality: 'V'.toUpperCase(),
		cedula: 20443378,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RROJAS'.trim().toLowerCase(),
		name: capitalCadena(' RIZKA ROXANNA'.trim()),
		lastName: capitalCadena('ROJAS BARRETO'.trim()),
		type: 'regular',
		email: 'RROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3860,
		nationality: 'V'.toUpperCase(),
		cedula: 11935424,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['COORDINACIÓN ZONA CARABOBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' JUAN '.trim()),
		lastName: capitalCadena('GONZALEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'JGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9796,
		nationality: 'V'.toUpperCase(),
		cedula: 17990741,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmendez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RAMON'.trim()),
		lastName: capitalCadena('MENDEZ VAZQUEZ'.trim()),
		type: 'regular',
		email: 'jmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13587,
		nationality: 'V'.toUpperCase(),
		cedula: 5541972,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN CENTRAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HEMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' HENRY MANUEL'.trim()),
		lastName: capitalCadena('MENDOZA GONZALEZ'.trim()),
		type: 'regular',
		email: 'HEMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3420,
		nationality: 'V'.toUpperCase(),
		cedula: 7084688,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HROSALES'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR EMILIO'.trim()),
		lastName: capitalCadena('ROSALES GUILLEN'.trim()),
		type: 'regular',
		email: 'HROSALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3434,
		nationality: 'V'.toUpperCase(),
		cedula: 13322283,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA SERVICIOS GENERALES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abestgalue'.trim().toLowerCase(),
		name: capitalCadena(' ARTURO ENRIQUE'.trim()),
		lastName: capitalCadena('BEST GALUE'.trim()),
		type: 'regular',
		email: 'abestgalue@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13575,
		nationality: 'V'.toUpperCase(),
		cedula: 11354991,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yemonsalve'.trim().toLowerCase(),
		name: capitalCadena(' YENIFER CAROLINA'.trim()),
		lastName: capitalCadena('MONSALVE PRADA'.trim()),
		type: 'regular',
		email: 'yemonsalve@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14318,
		nationality: 'V'.toUpperCase(),
		cedula: 18611989,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DOMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' DOAN MEDARDO'.trim()),
		lastName: capitalCadena('MENDEZ MOTA'.trim()),
		type: 'regular',
		email: 'DOMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13477,
		nationality: 'V'.toUpperCase(),
		cedula: 15466534,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agomez'.trim().toLowerCase(),
		name: capitalCadena(' ALIRIO JESUS'.trim()),
		lastName: capitalCadena('GOMEZ ESPINOZA'.trim()),
		type: 'regular',
		email: 'agomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9285,
		nationality: 'V'.toUpperCase(),
		cedula: 19321908,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YLABRADOR'.trim().toLowerCase(),
		name: capitalCadena(' YRIS ALISMARY'.trim()),
		lastName: capitalCadena('LABRADOR DE SALAS'.trim()),
		type: 'regular',
		email: 'YLABRADOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12648,
		nationality: 'V'.toUpperCase(),
		cedula: 12852499,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'baraque'.trim().toLowerCase(),
		name: capitalCadena(' BEATRIZ '.trim()),
		lastName: capitalCadena('ARAQUE GUERRERO'.trim()),
		type: 'regular',
		email: 'baraque@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13498,
		nationality: 'V'.toUpperCase(),
		cedula: 16049924,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EARCIA'.trim().toLowerCase(),
		name: capitalCadena(' ESTER MARLENI'.trim()),
		lastName: capitalCadena('ARCIA VELASQUEZ'.trim()),
		type: 'regular',
		email: 'EARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16176,
		nationality: 'V'.toUpperCase(),
		cedula: 12909023,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ORONDON'.trim().toLowerCase(),
		name: capitalCadena(' OMAIRA ROSARIO'.trim()),
		lastName: capitalCadena('RONDON QUINTERO'.trim()),
		type: 'regular',
		email: 'ORONDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2474,
		nationality: 'V'.toUpperCase(),
		cedula: 6971914,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE AREA DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE DE AREA DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EROLDAN'.trim().toLowerCase(),
		name: capitalCadena(' EDITH MARYURI'.trim()),
		lastName: capitalCadena('ROLDAN '.trim()),
		type: 'regular',
		email: 'EROLDAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6524,
		nationality: 'V'.toUpperCase(),
		cedula: 10234463,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'revera'.trim().toLowerCase(),
		name: capitalCadena(' REBECA NATALY'.trim()),
		lastName: capitalCadena('VERA LOPEZ'.trim()),
		type: 'regular',
		email: 'revera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14129,
		nationality: 'V'.toUpperCase(),
		cedula: 16412778,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALEXANDER'.trim()),
		lastName: capitalCadena('RUIZ LOPEZ'.trim()),
		type: 'regular',
		email: 'JOSRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15927,
		nationality: 'V'.toUpperCase(),
		cedula: 13103549,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vdelgado'.trim().toLowerCase(),
		name: capitalCadena(' VILMA MARGARITA'.trim()),
		lastName: capitalCadena('DELGADO DE GUTIERREZ'.trim()),
		type: 'regular',
		email: 'vdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13440,
		nationality: 'V'.toUpperCase(),
		cedula: 4461875,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA REGIONAL DE NEGOCIOS CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE REGIONAL DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MROJAS'.trim().toLowerCase(),
		name: capitalCadena(' MARXIA STELLA'.trim()),
		lastName: capitalCadena('ROJAS QUINTERO'.trim()),
		type: 'regular',
		email: 'MROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7460,
		nationality: 'V'.toUpperCase(),
		cedula: 11359596,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL OPERACION DE AGENCIAS CARABOBO'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SDURAND'.trim().toLowerCase(),
		name: capitalCadena(' SORAIMA ROSA'.trim()),
		lastName: capitalCadena('DURAN RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'SDURAND@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 227,
		nationality: 'V'.toUpperCase(),
		cedula: 10861386,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA CARABOBO I']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lramirez'.trim().toLowerCase(),
		name: capitalCadena(' LILIANA ELIZABETH'.trim()),
		lastName: capitalCadena('RAMIREZ GALICIA'.trim()),
		type: 'regular',
		email: 'lramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13715,
		nationality: 'V'.toUpperCase(),
		cedula: 12472814,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA CARABOBO II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zliscano'.trim().toLowerCase(),
		name: capitalCadena(' ZOHAR ADRIANA'.trim()),
		lastName: capitalCadena('LISCANO MIRABAL'.trim()),
		type: 'regular',
		email: 'zliscano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15663,
		nationality: 'V'.toUpperCase(),
		cedula: 27259251,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'COORD. REGISTRO DE CLIENTEES REGIÓN CENTRAL'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OFICINISTA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jganain'.trim().toLowerCase(),
		name: capitalCadena(' JESUS GANAIN'.trim()),
		lastName: capitalCadena('LIRA '.trim()),
		type: 'regular',
		email: 'jganain@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13846,
		nationality: 'V'.toUpperCase(),
		cedula: 11963412,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'leramirez'.trim().toLowerCase(),
		name: capitalCadena(' LENIN JOSUE'.trim()),
		lastName: capitalCadena('RAMIREZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'leramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14548,
		nationality: 'V'.toUpperCase(),
		cedula: 10577918,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OSCPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' OSCAR EDUARDO'.trim()),
		lastName: capitalCadena('PEREZ SOLORZANO'.trim()),
		type: 'regular',
		email: 'OSCPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15076,
		nationality: 'V'.toUpperCase(),
		cedula: 12315936,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORD. (CENTRO - LOS LLANOS)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL JOSE'.trim()),
		lastName: capitalCadena('GOMEZ DOMINGUEZ'.trim()),
		type: 'regular',
		email: 'DGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1067,
		nationality: 'V'.toUpperCase(),
		cedula: 13510146,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['COORDINACIÓN DE MONITOREO ATM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['TECNICO ATM SENIOR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pperaza'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA ELENA'.trim()),
		lastName: capitalCadena('PERAZA CALLES'.trim()),
		type: 'regular',
		email: 'pperaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15738,
		nationality: 'V'.toUpperCase(),
		cedula: 6520182,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. DE BANCA EMPRESA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' YAMEL MARGARITA'.trim()),
		lastName: capitalCadena('CASTRO VEGAS'.trim()),
		type: 'regular',
		email: 'YCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 211,
		nationality: 'V'.toUpperCase(),
		cedula: 7063855,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. ZONA CARABOBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DIRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' DILCIA JOSEFINA'.trim()),
		lastName: capitalCadena('RUIZ REGALADO'.trim()),
		type: 'regular',
		email: 'DIRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7285,
		nationality: 'V'.toUpperCase(),
		cedula: 12078628,
		centroTrabajoId: '95_8',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['V.P. REGIÓN CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ERCHIRINOS'.trim().toLowerCase(),
		name: capitalCadena(' ERIKA COROMOTO'.trim()),
		lastName: capitalCadena('CHIRINOS LEAL'.trim()),
		type: 'regular',
		email: 'ERCHIRINOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7749,
		nationality: 'V'.toUpperCase(),
		cedula: 17599724,
		centroTrabajoId: '95_9',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CENT. OCCI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YECASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' YELI ANGELINA'.trim()),
		lastName: capitalCadena('CASTILLO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YECASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13450,
		nationality: 'V'.toUpperCase(),
		cedula: 11787572,
		centroTrabajoId: '95_9',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GERENCIA REGIONAL OPERACIÓN DE AGENCIAS CENTRO OCCIDENTE'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCARACUZZI'.trim().toLowerCase(),
		name: capitalCadena(' DIANA NATIVIDAD'.trim()),
		lastName: capitalCadena('CARACUZZI PAREDES'.trim()),
		type: 'regular',
		email: 'DCARACUZZI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 259,
		nationality: 'V'.toUpperCase(),
		cedula: 7413159,
		centroTrabajoId: '95_9',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['GERENCIA DE ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CGRANADILLO'.trim().toLowerCase(),
		name: capitalCadena(' RITA CAROLINA'.trim()),
		lastName: capitalCadena('GRANADILLO CASTILLO'.trim()),
		type: 'regular',
		email: 'CGRANADILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 251,
		nationality: 'V'.toUpperCase(),
		cedula: 6568688,
		centroTrabajoId: '95_9',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. ZONA CENTRO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	}
]
module.exports = { updateEmployees_Res_ADM }
