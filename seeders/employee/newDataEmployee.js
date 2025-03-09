const { departamentoOnlyNames, departamentoData } = require('./area/departamento')
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

const updateEmployees_95_6 = [
	{
		userName: 'ANMAVAREZ'.toLowerCase(),
		name: capitalCadena('ANGELINE CLARET'),
		lastName: capitalCadena('MAVAREZ VILLALOBOS'),
		type: 'regular',
		email: 'ANMAVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14501,
		nationality: 'V'.toUpperCase(),
		cedula: 26416366,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ASUNTOS CORP. Y CONFIRMACIONES BANCARIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMORENO'.toLowerCase(),
		name: capitalCadena('MAYERLING AISBEL'),
		lastName: capitalCadena('MORENO GONZALEZ'),
		type: 'regular',
		email: 'MMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14554,
		nationality: 'V'.toUpperCase(),
		cedula: 13529411,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. LIBERACIONES Y DOCUMENTACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HMORENO'.toLowerCase(),
		name: capitalCadena('HORACIO ALEJANDRO'),
		lastName: capitalCadena('MORENO TORRES'),
		type: 'regular',
		email: 'HMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14436,
		nationality: 'V'.toUpperCase(),
		cedula: 24731743,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONSULTA, DE PRODUCTOS Y CONTRATOS ESPEC.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HTERAN'.toLowerCase(),
		name: capitalCadena('HUGO DAVID'),
		lastName: capitalCadena('TERAN PEÑA'),
		type: 'regular',
		email: 'HTERAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14921,
		nationality: 'V'.toUpperCase(),
		cedula: 26169176,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONTROL INSTITUCIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ADFERNANDEZ'.toLowerCase(),
		name: capitalCadena('ADRIANA CAROLINA'),
		lastName: capitalCadena('FERNANDEZ YGUARAN'),
		type: 'regular',
		email: 'ADFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14133,
		nationality: 'V'.toUpperCase(),
		cedula: 25182285,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NIPARRA'.toLowerCase(),
		name: capitalCadena('NIUMAR ESTEBAN'),
		lastName: capitalCadena('PARRA PRADO'),
		type: 'regular',
		email: 'NIPARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14238,
		nationality: 'V'.toUpperCase(),
		cedula: 24251660,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAICASTILLO'.toLowerCase(),
		name: capitalCadena('MAIKELLY PAOLA'),
		lastName: capitalCadena('CASTILLO HENRIQUEZ'),
		type: 'regular',
		email: 'MAICASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15739,
		nationality: 'V'.toUpperCase(),
		cedula: 24958164,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ATENCIÓN DE ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mrico'.toLowerCase(),
		name: capitalCadena('MARILFE DEL CARMEN'),
		lastName: capitalCadena('RICO ANGULO'),
		type: 'regular',
		email: 'mrico@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13775,
		nationality: 'V'.toUpperCase(),
		cedula: 10433134,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCONTRERAS'.toLowerCase(),
		name: capitalCadena('YUSMARY CAROLINA'),
		lastName: capitalCadena('CONTRERAS GONZALEZ'),
		type: 'regular',
		email: 'YCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14157,
		nationality: 'V'.toUpperCase(),
		cedula: 25719458,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'achacin'.toLowerCase(),
		name: capitalCadena('ARIAJNA ZUHAIL'),
		lastName: capitalCadena('CHACIN VARGAS'),
		type: 'regular',
		email: 'achacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14727,
		nationality: 'V'.toUpperCase(),
		cedula: 27997765,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUCUBILLAN'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('CUBILLAN GONZALEZ'),
		type: 'regular',
		email: 'JUCUBILLAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13551,
		nationality: 'V'.toUpperCase(),
		cedula: 13627464,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOSALAS'.toLowerCase(),
		name: capitalCadena('YOHANDERSON RAFAEL'),
		lastName: capitalCadena('SALAS URDANETA'),
		type: 'regular',
		email: 'YOSALAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13875,
		nationality: 'V'.toUpperCase(),
		cedula: 18682658,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LANTUNEZ'.toLowerCase(),
		name: capitalCadena('LUIS ALEJANDRO'),
		lastName: capitalCadena('ANTUNEZ AGUIRRE'),
		type: 'regular',
		email: 'LANTUNEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14366,
		nationality: 'V'.toUpperCase(),
		cedula: 28497634,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elromero'.toLowerCase(),
		name: capitalCadena('ELIANA CHIQUINQUIRA'),
		lastName: capitalCadena('ROMERO GONZALEZ'),
		type: 'regular',
		email: 'elromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14598,
		nationality: 'V'.toUpperCase(),
		cedula: 29523871,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RLOPEZ'.toLowerCase(),
		name: capitalCadena('RAFAEL ANGEL'),
		lastName: capitalCadena('LOPEZ GUTIERREZ'),
		type: 'regular',
		email: 'RLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14377,
		nationality: 'V'.toUpperCase(),
		cedula: 19178432,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPEREZ'.toLowerCase(),
		name: capitalCadena('MARGARITA DEL CARMEN'),
		lastName: capitalCadena('PEREZ '),
		type: 'regular',
		email: 'MPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13325,
		nationality: 'V'.toUpperCase(),
		cedula: 10449456,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecastellano'.toLowerCase(),
		name: capitalCadena('ERIKA MARIA'),
		lastName: capitalCadena('CASTELLANO DE AVILA'),
		type: 'regular',
		email: 'ecastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14801,
		nationality: 'V'.toUpperCase(),
		cedula: 17567736,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aramirez'.toLowerCase(),
		name: capitalCadena('ADEMAYRA ANDREINA'),
		lastName: capitalCadena('RAMIREZ FERNANDEZ'),
		type: 'regular',
		email: 'aramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14259,
		nationality: 'V'.toUpperCase(),
		cedula: 20775859,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ARQUITECTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMERCADO'.toLowerCase(),
		name: capitalCadena('MANUEL JOSE'),
		lastName: capitalCadena('MERCADO BONILLA'),
		type: 'regular',
		email: 'MMERCADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16149,
		nationality: 'V'.toUpperCase(),
		cedula: 13879262,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RREYES'.toLowerCase(),
		name: capitalCadena('RAFAEL JOSE'),
		lastName: capitalCadena('REYES CROES'),
		type: 'regular',
		email: 'RREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16152,
		nationality: 'V'.toUpperCase(),
		cedula: 21165821,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mebarrios'.toLowerCase(),
		name: capitalCadena('MELANY MARIA'),
		lastName: capitalCadena('BARRIOS PIRELA'),
		type: 'regular',
		email: 'mebarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14753,
		nationality: 'V'.toUpperCase(),
		cedula: 27197958,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ghernandez'.toLowerCase(),
		name: capitalCadena('GIOVANNY ANTONIO'),
		lastName: capitalCadena('HERNANDEZ MARQUEZ'),
		type: 'regular',
		email: 'ghernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14269,
		nationality: 'V'.toUpperCase(),
		cedula: 24255190,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmadueno'.toLowerCase(),
		name: capitalCadena('MAIRELIS HERALDA'),
		lastName: capitalCadena('MADUEÑO AZUAJE'),
		type: 'regular',
		email: 'mmadueno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14256,
		nationality: 'V'.toUpperCase(),
		cedula: 20283688,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SEMI SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mecheverria'.toLowerCase(),
		name: capitalCadena('MARIO ALEJANDRO'),
		lastName: capitalCadena('ECHEVERRIA URDANETA'),
		type: 'regular',
		email: 'mecheverria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14073,
		nationality: 'V'.toUpperCase(),
		cedula: 16458318,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avillarreal'.toLowerCase(),
		name: capitalCadena('AURA MARIA'),
		lastName: capitalCadena('VILLARREAL DE NIEVES'),
		type: 'regular',
		email: 'avillarreal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13353,
		nationality: 'V'.toUpperCase(),
		cedula: 6830465,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LPALMA'.toLowerCase(),
		name: capitalCadena('LUIS DAVID'),
		lastName: capitalCadena('PALMA HERNANDEZ'),
		type: 'regular',
		email: 'LPALMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14286,
		nationality: 'V'.toUpperCase(),
		cedula: 22087762,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE AUDITORIA DE AGENCIAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUDITOR SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'migomez'.toLowerCase(),
		name: capitalCadena('MIGUEL JAVIER'),
		lastName: capitalCadena('GOMEZ VANEGAS'),
		type: 'regular',
		email: 'migomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14844,
		nationality: 'V'.toUpperCase(),
		cedula: 18284769,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MANTENIMENTO FISICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eligonzalez'.toLowerCase(),
		name: capitalCadena('ELIAS JOSE'),
		lastName: capitalCadena('GONZALEZ FERNANDEZ'),
		type: 'regular',
		email: 'eligonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15713,
		nationality: 'V'.toUpperCase(),
		cedula: 25905376,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jemora'.toLowerCase(),
		name: capitalCadena('JENDRY JESUS'),
		lastName: capitalCadena('MORA RENDILES'),
		type: 'regular',
		email: 'jemora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15721,
		nationality: 'V'.toUpperCase(),
		cedula: 30973818,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DEGUTIERREZ'.toLowerCase(),
		name: capitalCadena('DEIVI ROBERTO'),
		lastName: capitalCadena('GUTIERREZ ARIZA'),
		type: 'regular',
		email: 'DEGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16088,
		nationality: 'V'.toUpperCase(),
		cedula: 21361021,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'enava'.toLowerCase(),
		name: capitalCadena('EMILY CHIQUINQUIRA'),
		lastName: capitalCadena('NAVA BARRIOS'),
		type: 'regular',
		email: 'enava@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14170,
		nationality: 'V'.toUpperCase(),
		cedula: 20578424,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. PLATAFORMA DISTRIBUIDA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YLOAIZA'.toLowerCase(),
		name: capitalCadena('YENIFER RUBY'),
		lastName: capitalCadena('LOAIZA GONZALEZ'),
		type: 'regular',
		email: 'YLOAIZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13983,
		nationality: 'V'.toUpperCase(),
		cedula: 21166240,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EGUTIERREZ'.toLowerCase(),
		name: capitalCadena('ELVIS ALBERTO'),
		lastName: capitalCadena('GUTIERREZ CASTILLO'),
		type: 'regular',
		email: 'EGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13338,
		nationality: 'V'.toUpperCase(),
		cedula: 7695074,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION ATENCIÓN AL CLIENTE Y OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zcastellanos'.toLowerCase(),
		name: capitalCadena('ZENAIRA COROMOTO'),
		lastName: capitalCadena('CASTELLANOS DUARTE'),
		type: 'regular',
		email: 'zcastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13727,
		nationality: 'V'.toUpperCase(),
		cedula: 10448351,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RBRACHO'.toLowerCase(),
		name: capitalCadena('ROCKY ANTONY'),
		lastName: capitalCadena('BRACHO BONILLA'),
		type: 'regular',
		email: 'RBRACHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14043,
		nationality: 'V'.toUpperCase(),
		cedula: 19837443,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'welopez'.toLowerCase(),
		name: capitalCadena('WENDY MARIA'),
		lastName: capitalCadena('LOPEZ PARRA'),
		type: 'regular',
		email: 'welopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13860,
		nationality: 'V'.toUpperCase(),
		cedula: 17088732,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gsparacino'.toLowerCase(),
		name: capitalCadena('GIUSEPPE ALBERTO'),
		lastName: capitalCadena('SPARACINO ZAMBRANO'),
		type: 'regular',
		email: 'gsparacino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14177,
		nationality: 'V'.toUpperCase(),
		cedula: 25800608,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CORRESPONDENCIA OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jomedina'.toLowerCase(),
		name: capitalCadena('JOHANA CAROLINA'),
		lastName: capitalCadena('MEDINA ACOSTA'),
		type: 'regular',
		email: 'jomedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13916,
		nationality: 'V'.toUpperCase(),
		cedula: 15889314,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ICORONADO'.toLowerCase(),
		name: capitalCadena('INGRID DANIELA'),
		lastName: capitalCadena('CORONADO QUEVEDO'),
		type: 'regular',
		email: 'ICORONADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13932,
		nationality: 'V'.toUpperCase(),
		cedula: 16015376,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JORLOPEZ'.toLowerCase(),
		name: capitalCadena('JORGE ELIECER'),
		lastName: capitalCadena('LOPEZ RODRIGUEZ'),
		type: 'regular',
		email: 'JORLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14288,
		nationality: 'V'.toUpperCase(),
		cedula: 24376022,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARRIVERO'.toLowerCase(),
		name: capitalCadena('MARIELYS MAGDALENA'),
		lastName: capitalCadena('RIVERO PIÑA'),
		type: 'regular',
		email: 'MARRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6999,
		nationality: 'V'.toUpperCase(),
		cedula: 17150246,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN OCCIDENTE II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CRODRIGUEZ'.toLowerCase(),
		name: capitalCadena('CARLOS ANDRES'),
		lastName: capitalCadena('RODRIGUEZ ANGULO'),
		type: 'regular',
		email: 'CRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14009,
		nationality: 'V'.toUpperCase(),
		cedula: 8698778,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ZONA OCCIDENTE I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marilsanchez'.toLowerCase(),
		name: capitalCadena('MARILENY CLARET'),
		lastName: capitalCadena('SANCHEZ LEON'),
		type: 'regular',
		email: 'marilsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14047,
		nationality: 'V'.toUpperCase(),
		cedula: 11862566,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CLEON'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('LEON BOSCAN'),
		type: 'regular',
		email: 'CLEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13942,
		nationality: 'V'.toUpperCase(),
		cedula: 14021527,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aarrieta'.toLowerCase(),
		name: capitalCadena('ALBERT MANUEL'),
		lastName: capitalCadena('ARRIETA GONZALEZ'),
		type: 'regular',
		email: 'aarrieta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14357,
		nationality: 'V'.toUpperCase(),
		cedula: 15287212,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'einciarte'.toLowerCase(),
		name: capitalCadena('EDUARDO ANTONIO'),
		lastName: capitalCadena('INCIARTE TORRES'),
		type: 'regular',
		email: 'einciarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14302,
		nationality: 'V'.toUpperCase(),
		cedula: 23554119,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jzambrano'.toLowerCase(),
		name: capitalCadena('JORGE RAMON'),
		lastName: capitalCadena('ZAMBRANO '),
		type: 'regular',
		email: 'jzambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13697,
		nationality: 'V'.toUpperCase(),
		cedula: 7607090,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yumorales'.toLowerCase(),
		name: capitalCadena('YULY PATRICIA'),
		lastName: capitalCadena('MORALES PAVA'),
		type: 'regular',
		email: 'yumorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13510,
		nationality: 'V'.toUpperCase(),
		cedula: 13007054,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abfigueroa'.toLowerCase(),
		name: capitalCadena('ABRAHAM JOSE'),
		lastName: capitalCadena('FIGUEROA BOSCAN'),
		type: 'regular',
		email: 'abfigueroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14099,
		nationality: 'V'.toUpperCase(),
		cedula: 18986553,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. CANALES DIGITALES Y DISTRIBUIDOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HBOSCAN'.toLowerCase(),
		name: capitalCadena('HENDRIK JOSE'),
		lastName: capitalCadena('BOSCAN RINCON'),
		type: 'regular',
		email: 'HBOSCAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14011,
		nationality: 'V'.toUpperCase(),
		cedula: 11609178,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dprieto'.toLowerCase(),
		name: capitalCadena('DORISEL MARIA'),
		lastName: capitalCadena('PRIETO RODRIGUEZ'),
		type: 'regular',
		email: 'dprieto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13791,
		nationality: 'V'.toUpperCase(),
		cedula: 12291802,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ARQUITECTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmauro'.toLowerCase(),
		name: capitalCadena('FABIOLA MARIA'),
		lastName: capitalCadena('MAURO LEAL'),
		type: 'regular',
		email: 'fmauro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13676,
		nationality: 'V'.toUpperCase(),
		cedula: 9766880,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN BASES DE DATOS DISTRIBUIDA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wnava'.toLowerCase(),
		name: capitalCadena('WILL RONALD'),
		lastName: capitalCadena('NAVA ALMARZA'),
		type: 'regular',
		email: 'wnava@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13822,
		nationality: 'V'.toUpperCase(),
		cedula: 15986224,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lpirela'.toLowerCase(),
		name: capitalCadena('LUIS GUILLERMO'),
		lastName: capitalCadena('PIRELA GONZALEZ'),
		type: 'regular',
		email: 'lpirela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14401,
		nationality: 'V'.toUpperCase(),
		cedula: 21751922,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'princon'.toLowerCase(),
		name: capitalCadena('PATRICIA CAROLINA'),
		lastName: capitalCadena('RINCON RINCON'),
		type: 'regular',
		email: 'princon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13673,
		nationality: 'V'.toUpperCase(),
		cedula: 12098173,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROYECTOS TÉCNICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'efreites'.toLowerCase(),
		name: capitalCadena('ELDAMARIS CAROLINA'),
		lastName: capitalCadena('FREITES VILLALOBOS'),
		type: 'regular',
		email: 'efreites@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14163,
		nationality: 'V'.toUpperCase(),
		cedula: 26053784,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maromero'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('ROMERO DE PIRELA'),
		type: 'regular',
		email: 'maromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13978,
		nationality: 'V'.toUpperCase(),
		cedula: 10405259,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SISTEMAS POSTILLION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marmendez'.toLowerCase(),
		name: capitalCadena('MARIA VIRGINIA'),
		lastName: capitalCadena('MENDEZ ACEVEDO'),
		type: 'regular',
		email: 'marmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13662,
		nationality: 'V'.toUpperCase(),
		cedula: 15603719,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcaballero'.toLowerCase(),
		name: capitalCadena('MARIA TERESA'),
		lastName: capitalCadena('CABALLERO GONZALEZ'),
		type: 'regular',
		email: 'mcaballero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13728,
		nationality: 'V'.toUpperCase(),
		cedula: 12870086,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'csilva'.toLowerCase(),
		name: capitalCadena('CARLOS JAVIER'),
		lastName: capitalCadena('SILVA NONES'),
		type: 'regular',
		email: 'csilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14112,
		nationality: 'V'.toUpperCase(),
		cedula: 24893597,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APATINO'.toLowerCase(),
		name: capitalCadena('ANGGIE CHIQUINQUIRA'),
		lastName: capitalCadena('PATIÑO BRACHO'),
		type: 'regular',
		email: 'APATINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13997,
		nationality: 'V'.toUpperCase(),
		cedula: 18494849,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vmorales'.toLowerCase(),
		name: capitalCadena('VANESSA ALEJANDRA'),
		lastName: capitalCadena('MORALES GONZALEZ'),
		type: 'regular',
		email: 'vmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14266,
		nationality: 'V'.toUpperCase(),
		cedula: 27911326,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hurdaneta'.toLowerCase(),
		name: capitalCadena('HERACLIO JOSE'),
		lastName: capitalCadena('URDANETA RINCON'),
		type: 'regular',
		email: 'hurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14682,
		nationality: 'V'.toUpperCase(),
		cedula: 12695706,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['GERENCIA TELEFONÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nmedina'.toLowerCase(),
		name: capitalCadena('NORBELYS CHIQUINQUIRA'),
		lastName: capitalCadena('MEDINA OJEDA'),
		type: 'regular',
		email: 'nmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14440,
		nationality: 'V'.toUpperCase(),
		cedula: 14415621,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDC ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arivera'.toLowerCase(),
		name: capitalCadena('ANGELICA MARIA'),
		lastName: capitalCadena('RIVERA LOAIZA'),
		type: 'regular',
		email: 'arivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14132,
		nationality: 'V'.toUpperCase(),
		cedula: 19938685,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aortega'.toLowerCase(),
		name: capitalCadena('ALFREDO DE JESUS'),
		lastName: capitalCadena('ORTEGA CHACIN'),
		type: 'regular',
		email: 'aortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14289,
		nationality: 'V'.toUpperCase(),
		cedula: 22165912,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE IVSS, NÓMINA Y DOMICILIACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elcastellano'.toLowerCase(),
		name: capitalCadena('ELIZABETH CHIQUINQUIRA'),
		lastName: capitalCadena('CASTELLANO DE SALAS'),
		type: 'regular',
		email: 'elcastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13462,
		nationality: 'V'.toUpperCase(),
		cedula: 16458254,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edmunoz'.toLowerCase(),
		name: capitalCadena('EDUARDO ENRIQUE'),
		lastName: capitalCadena('MUÑOZ MONTERROSA'),
		type: 'regular',
		email: 'edmunoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14211,
		nationality: 'V'.toUpperCase(),
		cedula: 21357735,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KALMARZA'.toLowerCase(),
		name: capitalCadena('KRISTYNA DESIREE'),
		lastName: capitalCadena('ALMARZA FERRER'),
		type: 'regular',
		email: 'KALMARZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14776,
		nationality: 'V'.toUpperCase(),
		cedula: 17414875,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'girodriguez'.toLowerCase(),
		name: capitalCadena('GIBIOLA DEL CARMEN'),
		lastName: capitalCadena('RODRIGUEZ JIMENEZ'),
		type: 'regular',
		email: 'girodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14991,
		nationality: 'V'.toUpperCase(),
		cedula: 25196182,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ENFERMERA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmoreno'.toLowerCase(),
		name: capitalCadena('ROBERT DAVID'),
		lastName: capitalCadena('MORENO GARCIA'),
		type: 'regular',
		email: 'rmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14815,
		nationality: 'V'.toUpperCase(),
		cedula: 18832297,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INSPECCIÓN Y CAPACITACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YAFUENMAYOR'.toLowerCase(),
		name: capitalCadena('YASNORIS JOSEFINA'),
		lastName: capitalCadena('FUENMAYOR RODRIGUEZ'),
		type: 'regular',
		email: 'YAFUENMAYOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13819,
		nationality: 'V'.toUpperCase(),
		cedula: 14370751,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aalbornoz'.toLowerCase(),
		name: capitalCadena('AMERICO JOSE'),
		lastName: capitalCadena('ALBORNOZ PIMENTEL'),
		type: 'regular',
		email: 'aalbornoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14858,
		nationality: 'V'.toUpperCase(),
		cedula: 26970595,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. GESTIÓN Y TRASLADO DE ACTIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rcamarillo'.toLowerCase(),
		name: capitalCadena('RAIZA JOSEFINA'),
		lastName: capitalCadena('CAMARILLO BARBOZA'),
		type: 'regular',
		email: 'rcamarillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14883,
		nationality: 'V'.toUpperCase(),
		cedula: 5768523,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN IMPUESTOS MUNICIPALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jarrioja'.toLowerCase(),
		name: capitalCadena('JANNA CAROLINA'),
		lastName: capitalCadena('ARRIOJA PEREZ'),
		type: 'regular',
		email: 'jarrioja@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14882,
		nationality: 'V'.toUpperCase(),
		cedula: 27260471,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oplata'.toLowerCase(),
		name: capitalCadena('ODRA PATRICIA'),
		lastName: capitalCadena('PLATA LIÑAN'),
		type: 'regular',
		email: 'oplata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14562,
		nationality: 'V'.toUpperCase(),
		cedula: 15744335,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IGARCIA'.toLowerCase(),
		name: capitalCadena('ISIS DE LOS ANGELES'),
		lastName: capitalCadena('GARCIA VALBUENA'),
		type: 'regular',
		email: 'IGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14751,
		nationality: 'V'.toUpperCase(),
		cedula: 28470554,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dbravo'.toLowerCase(),
		name: capitalCadena('DANILO WISMAK'),
		lastName: capitalCadena('BRAVO LEON'),
		type: 'regular',
		email: 'dbravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14891,
		nationality: 'V'.toUpperCase(),
		cedula: 20579116,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION GESTION DE PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCHAVEZ'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('CHAVEZ COLINA'),
		type: 'regular',
		email: 'JCHAVEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14233,
		nationality: 'V'.toUpperCase(),
		cedula: 14525843,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALRONDON'.toLowerCase(),
		name: capitalCadena('ALEJANDRO ANTONIO'),
		lastName: capitalCadena('RONDON MENDOZA'),
		type: 'regular',
		email: 'ALRONDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14293,
		nationality: 'V'.toUpperCase(),
		cedula: 7833564,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MHERNANDEZ'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('HERNANDEZ MARCHAN'),
		type: 'regular',
		email: 'MHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14700,
		nationality: 'V'.toUpperCase(),
		cedula: 25540980,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CBERMUDEZ'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('BERMUDEZ GARCIA'),
		type: 'regular',
		email: 'CBERMUDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14523,
		nationality: 'V'.toUpperCase(),
		cedula: 20579058,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LROSO'.toLowerCase(),
		name: capitalCadena('LILIANA DEL CARMEN'),
		lastName: capitalCadena('ROSO PEÑA'),
		type: 'regular',
		email: 'LROSO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13297,
		nationality: 'V'.toUpperCase(),
		cedula: 8502035,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfuenmayor'.toLowerCase(),
		name: capitalCadena('JAVIER JOSE'),
		lastName: capitalCadena('FUENMAYOR ORTEGA'),
		type: 'regular',
		email: 'jfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14559,
		nationality: 'V'.toUpperCase(),
		cedula: 10413213,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HEURDANETA'.toLowerCase(),
		name: capitalCadena('HENYERBERTH ENRIQUE'),
		lastName: capitalCadena('URDANETA PEÑA'),
		type: 'regular',
		email: 'HEURDANETA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14585,
		nationality: 'V'.toUpperCase(),
		cedula: 26795759,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncubillan'.toLowerCase(),
		name: capitalCadena('NORYBETH DEL PILAR'),
		lastName: capitalCadena('CUBILLAN MOLINA'),
		type: 'regular',
		email: 'ncubillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13568,
		nationality: 'V'.toUpperCase(),
		cedula: 14658438,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION ADM DE ACCESO DE IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YHMENDEZ'.toLowerCase(),
		name: capitalCadena('YHANMARCOS JOSE'),
		lastName: capitalCadena('MENDEZ COY'),
		type: 'regular',
		email: 'YHMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14193,
		nationality: 'V'.toUpperCase(),
		cedula: 21596638,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION ADM DE ACCESO DE IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcolina'.toLowerCase(),
		name: capitalCadena('JOSE ALEXANDER'),
		lastName: capitalCadena('COLINA MOLERO'),
		type: 'regular',
		email: 'jcolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13459,
		nationality: 'V'.toUpperCase(),
		cedula: 9786430,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fbarrios'.toLowerCase(),
		name: capitalCadena('FREDDY ALBERTO'),
		lastName: capitalCadena('BARRIOS BRAVO'),
		type: 'regular',
		email: 'fbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14145,
		nationality: 'V'.toUpperCase(),
		cedula: 18382302,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jdelgado'.toLowerCase(),
		name: capitalCadena('JOHNNY EMANUEL'),
		lastName: capitalCadena('DELGADO RANGEL'),
		type: 'regular',
		email: 'jdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14549,
		nationality: 'V'.toUpperCase(),
		cedula: 20147042,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EGARCIA'.toLowerCase(),
		name: capitalCadena('ELENA CHIQUINQUIRA'),
		lastName: capitalCadena('GARCIA ROSALES'),
		type: 'regular',
		email: 'EGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13841,
		nationality: 'V'.toUpperCase(),
		cedula: 12802809,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NNAVA'.toLowerCase(),
		name: capitalCadena('NANCY MARIA'),
		lastName: capitalCadena('NAVA TUDARES'),
		type: 'regular',
		email: 'NNAVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13934,
		nationality: 'V'.toUpperCase(),
		cedula: 7890182,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACION PROVEEDORES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anamoreno'.toLowerCase(),
		name: capitalCadena('ANA AMELIA'),
		lastName: capitalCadena('MORENO ALVAREZ'),
		type: 'regular',
		email: 'anamoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13310,
		nationality: 'V'.toUpperCase(),
		cedula: 13244969,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPARDO'.toLowerCase(),
		name: capitalCadena('JOHANNA CAROLINA'),
		lastName: capitalCadena('PARDO GONZALEZ'),
		type: 'regular',
		email: 'JPARDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13693,
		nationality: 'V'.toUpperCase(),
		cedula: 17412167,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GVARELA'.toLowerCase(),
		name: capitalCadena('GLIBETH BEXZAIDA'),
		lastName: capitalCadena('VARELA BARRIOS'),
		type: 'regular',
		email: 'GVARELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13827,
		nationality: 'V'.toUpperCase(),
		cedula: 13006547,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sherrison'.toLowerCase(),
		name: capitalCadena('SERGIO EDUARDO'),
		lastName: capitalCadena('HERRISON CHOURIO'),
		type: 'regular',
		email: 'sherrison@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14356,
		nationality: 'V'.toUpperCase(),
		cedula: 15411589,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['COORDINACION SERVICIOS'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ypalmar'.toLowerCase(),
		name: capitalCadena('YOLIS MAYELA'),
		lastName: capitalCadena('PALMAR GONZALEZ'),
		type: 'regular',
		email: 'ypalmar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13396,
		nationality: 'V'.toUpperCase(),
		cedula: 6830910,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'haurdaneta'.toLowerCase(),
		name: capitalCadena('HAYNES CHIQUINQUIRA'),
		lastName: capitalCadena('URDANETA PEÑA'),
		type: 'regular',
		email: 'haurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14278,
		nationality: 'V'.toUpperCase(),
		cedula: 12695934,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OFERNANDEZ'.toLowerCase(),
		name: capitalCadena('ORLANDO JESUS'),
		lastName: capitalCadena('FERNANDEZ LUZARDO'),
		type: 'regular',
		email: 'OFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14358,
		nationality: 'V'.toUpperCase(),
		cedula: 25325453,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvelasquez'.toLowerCase(),
		name: capitalCadena('JESUS MIGUEL'),
		lastName: capitalCadena('VELASQUEZ AMARIS'),
		type: 'regular',
		email: 'jvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14489,
		nationality: 'V'.toUpperCase(),
		cedula: 23280280,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GUSRODRIGUEZ'.toLowerCase(),
		name: capitalCadena('GUSTAVO ALFONSO'),
		lastName: capitalCadena('RODRIGUEZ URBINA'),
		type: 'regular',
		email: 'GUSRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16390,
		nationality: 'V'.toUpperCase(),
		cedula: 30934320,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gfuenmayor'.toLowerCase(),
		name: capitalCadena('GIPSY EBONY'),
		lastName: capitalCadena('FUENMAYOR FLORES'),
		type: 'regular',
		email: 'gfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14517,
		nationality: 'V'.toUpperCase(),
		cedula: 22484966,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maguero'.toLowerCase(),
		name: capitalCadena('MARIA JOSE'),
		lastName: capitalCadena('AGUERO PINEDA'),
		type: 'regular',
		email: 'maguero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14716,
		nationality: 'V'.toUpperCase(),
		cedula: 25342286,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ERQUINTERO'.toLowerCase(),
		name: capitalCadena('ERNY JOSE'),
		lastName: capitalCadena('QUINTERO EXPOSITO'),
		type: 'regular',
		email: 'ERQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16131,
		nationality: 'V'.toUpperCase(),
		cedula: 20204254,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edghernandez'.toLowerCase(),
		name: capitalCadena('EDGAR WUILFREDO'),
		lastName: capitalCadena('HERNANDEZ OLANO'),
		type: 'regular',
		email: 'edghernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14214,
		nationality: 'V'.toUpperCase(),
		cedula: 26410008,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jamaya'.toLowerCase(),
		name: capitalCadena('JASON JESUS'),
		lastName: capitalCadena('AMAYA VILLA'),
		type: 'regular',
		email: 'jamaya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14335,
		nationality: 'V'.toUpperCase(),
		cedula: 24726506,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NGONZALEZ'.toLowerCase(),
		name: capitalCadena('NORVYS ELIAS'),
		lastName: capitalCadena('GONZALEZ VELASQUEZ'),
		type: 'regular',
		email: 'NGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14461,
		nationality: 'V'.toUpperCase(),
		cedula: 26175938,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSMARTINEZ'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('MARTINEZ GOMEZ'),
		type: 'regular',
		email: 'JOSMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16330,
		nationality: 'V'.toUpperCase(),
		cedula: 19838752,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BRFLORES'.toLowerCase(),
		name: capitalCadena('BRAYAN ALFREDO'),
		lastName: capitalCadena('FLORES MORALES'),
		type: 'regular',
		email: 'BRFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14642,
		nationality: 'V'.toUpperCase(),
		cedula: 18121910,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO Y GESTIÓN COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MACOLINA'.toLowerCase(),
		name: capitalCadena('MANUEL ANGEL'),
		lastName: capitalCadena('COLINA JIMENEZ'),
		type: 'regular',
		email: 'MACOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13603,
		nationality: 'V'.toUpperCase(),
		cedula: 3737435,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MANTENIMENTO FISICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'azurita'.toLowerCase(),
		name: capitalCadena('ALFONSO TOMAS'),
		lastName: capitalCadena('ZURITA BELEÑO'),
		type: 'regular',
		email: 'azurita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13756,
		nationality: 'V'.toUpperCase(),
		cedula: 11292459,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MANTENIMENTO FISICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CDELGADO'.toLowerCase(),
		name: capitalCadena('CARLOS JAVIER'),
		lastName: capitalCadena('DELGADO GARCIA'),
		type: 'regular',
		email: 'CDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13426,
		nationality: 'V'.toUpperCase(),
		cedula: 13779270,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcastillo'.toLowerCase(),
		name: capitalCadena('MARLIN JOHANA'),
		lastName: capitalCadena('CASTILLO CASTILLO'),
		type: 'regular',
		email: 'mcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13696,
		nationality: 'V'.toUpperCase(),
		cedula: 18823757,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CSANDREA'.toLowerCase(),
		name: capitalCadena('CARMEN CHIQUINQUIRA'),
		lastName: capitalCadena('SANDREA DE GARCIA'),
		type: 'regular',
		email: 'CSANDREA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13598,
		nationality: 'V'.toUpperCase(),
		cedula: 9702620,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCHOURIO'.toLowerCase(),
		name: capitalCadena('DANIEL ANTONIO'),
		lastName: capitalCadena('CHOURIO GONZALEZ'),
		type: 'regular',
		email: 'DCHOURIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14064,
		nationality: 'V'.toUpperCase(),
		cedula: 20662570,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aleal'.toLowerCase(),
		name: capitalCadena('ALIDA EUGENIA'),
		lastName: capitalCadena('LEAL AGUILLON'),
		type: 'regular',
		email: 'aleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14086,
		nationality: 'V'.toUpperCase(),
		cedula: 15593200,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mirangel'.toLowerCase(),
		name: capitalCadena('MIRLA JOSEFINA'),
		lastName: capitalCadena('RANGEL RIVAS'),
		type: 'regular',
		email: 'mirangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14096,
		nationality: 'V'.toUpperCase(),
		cedula: 17604295,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncolman'.toLowerCase(),
		name: capitalCadena('NATHALY CAROLINA'),
		lastName: capitalCadena('COLMAN EREU'),
		type: 'regular',
		email: 'ncolman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14183,
		nationality: 'V'.toUpperCase(),
		cedula: 18833716,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JJIMENEZ'.toLowerCase(),
		name: capitalCadena('JHOCEL JHAIRO'),
		lastName: capitalCadena('JIMENEZ RIVAS'),
		type: 'regular',
		email: 'JJIMENEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14234,
		nationality: 'V'.toUpperCase(),
		cedula: 23893955,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMARCELO'.toLowerCase(),
		name: capitalCadena('YANETH PATRICIA'),
		lastName: capitalCadena('MARCELO ROJAS'),
		type: 'regular',
		email: 'YMARCELO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14235,
		nationality: 'V'.toUpperCase(),
		cedula: 17918119,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesalazar'.toLowerCase(),
		name: capitalCadena('JESUS ALBERTO'),
		lastName: capitalCadena('SALAZAR PIRELA'),
		type: 'regular',
		email: 'jesalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14457,
		nationality: 'V'.toUpperCase(),
		cedula: 27089322,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jatencio'.toLowerCase(),
		name: capitalCadena('JUNIOR EDUARDO'),
		lastName: capitalCadena('ATENCIO URDANETA'),
		type: 'regular',
		email: 'jatencio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14481,
		nationality: 'V'.toUpperCase(),
		cedula: 18571992,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRINCON'.toLowerCase(),
		name: capitalCadena('JOHANNA MERCEDES'),
		lastName: capitalCadena('RINCON DE GONZALEZ'),
		type: 'regular',
		email: 'JRINCON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14692,
		nationality: 'V'.toUpperCase(),
		cedula: 14823281,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JHUERTA'.toLowerCase(),
		name: capitalCadena('JOSE DANIEL'),
		lastName: capitalCadena('HUERTA BUERTA'),
		type: 'regular',
		email: 'JHUERTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14703,
		nationality: 'V'.toUpperCase(),
		cedula: 26826740,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ATENCIÓN INTERNA CAI OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSANDREA'.toLowerCase(),
		name: capitalCadena('RAFAEL DANIEL'),
		lastName: capitalCadena('SANDREA VALENZUELA'),
		type: 'regular',
		email: 'RSANDREA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14451,
		nationality: 'V'.toUpperCase(),
		cedula: 26456111,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alarreal'.toLowerCase(),
		name: capitalCadena('ADRIANA CAROLINA'),
		lastName: capitalCadena('LARREAL VASQUEZ'),
		type: 'regular',
		email: 'alarreal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14508,
		nationality: 'V'.toUpperCase(),
		cedula: 17232779,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emontoya'.toLowerCase(),
		name: capitalCadena('ESTHER MARINA'),
		lastName: capitalCadena('MONTOYA CASTRO'),
		type: 'regular',
		email: 'emontoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14579,
		nationality: 'V'.toUpperCase(),
		cedula: 25988905,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. DIGITALIZACIÓN Y CTROL DE ARCH. ARAGUA I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mgil'.toLowerCase(),
		name: capitalCadena('MARISOL DEL CARMEN'),
		lastName: capitalCadena('GIL RIVEROS'),
		type: 'regular',
		email: 'mgil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13464,
		nationality: 'V'.toUpperCase(),
		cedula: 13829673,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LROMERO'.toLowerCase(),
		name: capitalCadena('LORENA EMPERATRIZ'),
		lastName: capitalCadena('ROMERO GALIZ'),
		type: 'regular',
		email: 'LROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13842,
		nationality: 'V'.toUpperCase(),
		cedula: 8777755,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'resser'.toLowerCase(),
		name: capitalCadena('RAMON JOSE'),
		lastName: capitalCadena('ESSER '),
		type: 'regular',
		email: 'resser@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14127,
		nationality: 'V'.toUpperCase(),
		cedula: 12697273,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YQUINTERO'.toLowerCase(),
		name: capitalCadena('YAKELINE MEICARO'),
		lastName: capitalCadena('QUINTERO '),
		type: 'regular',
		email: 'YQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14216,
		nationality: 'V'.toUpperCase(),
		cedula: 13574774,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ychacin'.toLowerCase(),
		name: capitalCadena('YEISENIA BEATRIZ'),
		lastName: capitalCadena('CHACIN MALDONADO'),
		type: 'regular',
		email: 'ychacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14398,
		nationality: 'V'.toUpperCase(),
		cedula: 15287539,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hesanchez'.toLowerCase(),
		name: capitalCadena('HENLLER LICINIO'),
		lastName: capitalCadena('SANCHEZ FUENMAYOR'),
		type: 'regular',
		email: 'hesanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14458,
		nationality: 'V'.toUpperCase(),
		cedula: 17545826,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. REGISTRO DE CLIENTEES REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpicon'.toLowerCase(),
		name: capitalCadena('KEYLA MARIA'),
		lastName: capitalCadena('PICON LEON'),
		type: 'regular',
		email: 'kpicon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13712,
		nationality: 'V'.toUpperCase(),
		cedula: 17564957,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kferrebu'.toLowerCase(),
		name: capitalCadena('KEILA JOHANA'),
		lastName: capitalCadena('FERREBU PARRA'),
		type: 'regular',
		email: 'kferrebu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14702,
		nationality: 'V'.toUpperCase(),
		cedula: 15987875,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mprieto'.toLowerCase(),
		name: capitalCadena('MARIA DE LOS ANGELES'),
		lastName: capitalCadena('PRIETO GONZALEZ'),
		type: 'regular',
		email: 'mprieto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14533,
		nationality: 'V'.toUpperCase(),
		cedula: 26222451,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF.  DE MODELOS DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aaraujo'.toLowerCase(),
		name: capitalCadena('ANDRY JESUS'),
		lastName: capitalCadena('ARAUJO MUJICA'),
		type: 'regular',
		email: 'aaraujo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14670,
		nationality: 'V'.toUpperCase(),
		cedula: 26860184,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA EVAL. DE INDICADORES DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carloslopez'.toLowerCase(),
		name: capitalCadena('CARLOS JOSE'),
		lastName: capitalCadena('LOPEZ ACOSTA'),
		type: 'regular',
		email: 'carloslopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14515,
		nationality: 'V'.toUpperCase(),
		cedula: 11893817,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD Y SALUD LABORAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AITORRES'.toLowerCase(),
		name: capitalCadena('AIMIZARINE '),
		lastName: capitalCadena('TORRES CARVAJAL'),
		type: 'regular',
		email: 'AITORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13499,
		nationality: 'V'.toUpperCase(),
		cedula: 16187315,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apimentel'.toLowerCase(),
		name: capitalCadena('ADA MAIDELIN'),
		lastName: capitalCadena('PIMENTEL DE OCANDO'),
		type: 'regular',
		email: 'apimentel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13547,
		nationality: 'V'.toUpperCase(),
		cedula: 9739779,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rarrieta'.toLowerCase(),
		name: capitalCadena('RICHARD ALEX'),
		lastName: capitalCadena('ARRIETA CASTILLO'),
		type: 'regular',
		email: 'rarrieta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14224,
		nationality: 'V'.toUpperCase(),
		cedula: 12379424,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORRD. SEGURIDAD FÍSICA REGIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfuenmayor'.toLowerCase(),
		name: capitalCadena('MARYLIN ROSA'),
		lastName: capitalCadena('FUENMAYOR PALENCIA'),
		type: 'regular',
		email: 'mfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13889,
		nationality: 'V'.toUpperCase(),
		cedula: 14136184,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'narambulo'.toLowerCase(),
		name: capitalCadena('NORELKIS CHIQUINQUIRA'),
		lastName: capitalCadena('ARAMBULO ROMERO'),
		type: 'regular',
		email: 'narambulo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14091,
		nationality: 'V'.toUpperCase(),
		cedula: 18920806,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avillalobos'.toLowerCase(),
		name: capitalCadena('AMILCAR DE JESUS'),
		lastName: capitalCadena('VILLALOBOS GONZALEZ'),
		type: 'regular',
		email: 'avillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14125,
		nationality: 'V'.toUpperCase(),
		cedula: 19936823,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jocolina'.toLowerCase(),
		name: capitalCadena('JOSDAIRY DANIELA'),
		lastName: capitalCadena('COLINA CARREÑO'),
		type: 'regular',
		email: 'jocolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14126,
		nationality: 'V'.toUpperCase(),
		cedula: 20442265,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfranco'.toLowerCase(),
		name: capitalCadena('LEIDY COROMOTO'),
		lastName: capitalCadena('FRANCO GONZALEZ'),
		type: 'regular',
		email: 'lfranco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14313,
		nationality: 'V'.toUpperCase(),
		cedula: 18663575,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NADELGADO'.toLowerCase(),
		name: capitalCadena('NARLYN ELISA'),
		lastName: capitalCadena('DELGADO SAN PEDRO'),
		type: 'regular',
		email: 'NADELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13981,
		nationality: 'V'.toUpperCase(),
		cedula: 15854112,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mavillalobos'.toLowerCase(),
		name: capitalCadena('MARINEPT DE LOS ANGELES'),
		lastName: capitalCadena('VILLALOBOS LA CRUZ'),
		type: 'regular',
		email: 'mavillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13854,
		nationality: 'V'.toUpperCase(),
		cedula: 17940272,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nereyes'.toLowerCase(),
		name: capitalCadena('NEMECIO MARTIN'),
		lastName: capitalCadena('REYES FARIA'),
		type: 'regular',
		email: 'nereyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14017,
		nationality: 'V'.toUpperCase(),
		cedula: 10081851,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPAEZ'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('PAEZ HUERTA'),
		type: 'regular',
		email: 'JPAEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14050,
		nationality: 'V'.toUpperCase(),
		cedula: 7600969,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acabria'.toLowerCase(),
		name: capitalCadena('ARNALDO JOSE'),
		lastName: capitalCadena('CABRIA CASANOVA'),
		type: 'regular',
		email: 'acabria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14261,
		nationality: 'V'.toUpperCase(),
		cedula: 25907128,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ADMINISTRACIÓN DE AMBIENTES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jaigarcia'.toLowerCase(),
		name: capitalCadena('JAIMARY COROMOTO'),
		lastName: capitalCadena('GARCIA SILVA'),
		type: 'regular',
		email: 'jaigarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13777,
		nationality: 'V'.toUpperCase(),
		cedula: 15386589,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ARQUITECTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lsulbaran'.toLowerCase(),
		name: capitalCadena('LUIS OMAR'),
		lastName: capitalCadena('SULBARAN IGLESIAS'),
		type: 'regular',
		email: 'lsulbaran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14493,
		nationality: 'V'.toUpperCase(),
		cedula: 10598944,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN ARQUITECTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YORTIZ'.toLowerCase(),
		name: capitalCadena('YURI NEIL'),
		lastName: capitalCadena('ORTIZ SANCHEZ'),
		type: 'regular',
		email: 'YORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14752,
		nationality: 'V'.toUpperCase(),
		cedula: 14096900,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA CENTRALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rgraterol'.toLowerCase(),
		name: capitalCadena('RUBEN DARIO'),
		lastName: capitalCadena('GRATEROL GAMBOA'),
		type: 'regular',
		email: 'rgraterol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13826,
		nationality: 'V'.toUpperCase(),
		cedula: 12099965,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSALAS'.toLowerCase(),
		name: capitalCadena('MOISES ANTONIO'),
		lastName: capitalCadena('SALAS VILLADIEGO'),
		type: 'regular',
		email: 'MSALAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14022,
		nationality: 'V'.toUpperCase(),
		cedula: 14007994,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'imontiel'.toLowerCase(),
		name: capitalCadena('ISABEL CRISTINA'),
		lastName: capitalCadena('MONTIEL MORENO'),
		type: 'regular',
		email: 'imontiel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13836,
		nationality: 'V'.toUpperCase(),
		cedula: 18025060,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CARRAGA'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('ARRAGA ROMERO'),
		type: 'regular',
		email: 'CARRAGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13958,
		nationality: 'V'.toUpperCase(),
		cedula: 18918300,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ypirela'.toLowerCase(),
		name: capitalCadena('YUSELY PAOLA'),
		lastName: capitalCadena('PIRELA GUILLEN'),
		type: 'regular',
		email: 'ypirela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14341,
		nationality: 'V'.toUpperCase(),
		cedula: 26639758,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jprieto'.toLowerCase(),
		name: capitalCadena('JAVIER ALFONSO'),
		lastName: capitalCadena('PRIETO CORZO'),
		type: 'regular',
		email: 'jprieto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14363,
		nationality: 'V'.toUpperCase(),
		cedula: 15719543,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PRODUCCIÓN OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CAGARCIA'.toLowerCase(),
		name: capitalCadena('CARMEN ADELAIDA'),
		lastName: capitalCadena('GARCIA VALBUENA'),
		type: 'regular',
		email: 'CAGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13567,
		nationality: 'V'.toUpperCase(),
		cedula: 11950950,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN PROYECTOS TÉCNICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'atales'.toLowerCase(),
		name: capitalCadena('AMAURYS ANDRYS'),
		lastName: capitalCadena('TALES GARCIA'),
		type: 'regular',
		email: 'atales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14166,
		nationality: 'V'.toUpperCase(),
		cedula: 18427476,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cchirino'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('CHIRINO RONDON'),
		type: 'regular',
		email: 'cchirino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14218,
		nationality: 'V'.toUpperCase(),
		cedula: 23445522,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'danez'.toLowerCase(),
		name: capitalCadena('DARIO FRANCISCO'),
		lastName: capitalCadena('AÑEZ YZTURRIETA'),
		type: 'regular',
		email: 'danez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14260,
		nationality: 'V'.toUpperCase(),
		cedula: 9741132,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARGUTIERREZ'.toLowerCase(),
		name: capitalCadena('MARCOS AURELIO'),
		lastName: capitalCadena('GUTIERREZ RIVAS'),
		type: 'regular',
		email: 'MARGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14680,
		nationality: 'V'.toUpperCase(),
		cedula: 17670882,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eulacio'.toLowerCase(),
		name: capitalCadena('EDWINS NEPTALI'),
		lastName: capitalCadena('ULACIO SALAS'),
		type: 'regular',
		email: 'eulacio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14739,
		nationality: 'V'.toUpperCase(),
		cedula: 16150955,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN REDES Y COMUNICACIONES OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAMENDEZ'.toLowerCase(),
		name: capitalCadena('MAXIMO COROMOTO'),
		lastName: capitalCadena('MENDEZ MONSALVE'),
		type: 'regular',
		email: 'MAMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14053,
		nationality: 'V'.toUpperCase(),
		cedula: 6505913,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SISTEMAS POSTILLION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'feramirez'.toLowerCase(),
		name: capitalCadena('FERNANDO ALBERTO'),
		lastName: capitalCadena('RAMIREZ FERRER'),
		type: 'regular',
		email: 'feramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14520,
		nationality: 'V'.toUpperCase(),
		cedula: 16458481,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN SISTEMAS POSTILLION']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mutrera'.toLowerCase(),
		name: capitalCadena('MARIELA CAROLINA'),
		lastName: capitalCadena('UTRERA TOVAR'),
		type: 'regular',
		email: 'mutrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13781,
		nationality: 'V'.toUpperCase(),
		cedula: 13208386,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VEGRATEROL'.toLowerCase(),
		name: capitalCadena('VERONICA ISABEL'),
		lastName: capitalCadena('GRATEROL MENDOZA'),
		type: 'regular',
		email: 'VEGRATEROL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13996,
		nationality: 'V'.toUpperCase(),
		cedula: 17232103,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'darodriguez'.toLowerCase(),
		name: capitalCadena('DANIEL EDUARDO'),
		lastName: capitalCadena('RODRIGUEZ PEREZ'),
		type: 'regular',
		email: 'darodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14130,
		nationality: 'V'.toUpperCase(),
		cedula: 25788354,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nchirinos'.toLowerCase(),
		name: capitalCadena('NILSON ENRIQUE'),
		lastName: capitalCadena('CHIRINOS QUINTERO'),
		type: 'regular',
		email: 'nchirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13814,
		nationality: 'V'.toUpperCase(),
		cedula: 13930475,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmiranda'.toLowerCase(),
		name: capitalCadena('FELIPE ALFONZO'),
		lastName: capitalCadena('MIRANDA GONZALEZ'),
		type: 'regular',
		email: 'fmiranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14304,
		nationality: 'V'.toUpperCase(),
		cedula: 20377156,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PURDANETA'.toLowerCase(),
		name: capitalCadena('PAOLA COROMOTO'),
		lastName: capitalCadena('URDANETA PEÑA'),
		type: 'regular',
		email: 'PURDANETA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13581,
		nationality: 'V'.toUpperCase(),
		cedula: 12695932,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kstewart'.toLowerCase(),
		name: capitalCadena('KATHERINE ANDREINA'),
		lastName: capitalCadena('STEWART PINEDA'),
		type: 'regular',
		email: 'kstewart@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14144,
		nationality: 'V'.toUpperCase(),
		cedula: 20947411,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RACUNA'.toLowerCase(),
		name: capitalCadena('ROSANGEL ELENA'),
		lastName: capitalCadena('ACUÑA ACUÑA'),
		type: 'regular',
		email: 'RACUNA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14010,
		nationality: 'V'.toUpperCase(),
		cedula: 17184722,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'loferrer'.toLowerCase(),
		name: capitalCadena('LORELEN VANESSA'),
		lastName: capitalCadena('FERRER BRACHO'),
		type: 'regular',
		email: 'loferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13762,
		nationality: 'V'.toUpperCase(),
		cedula: 13705555,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'friera'.toLowerCase(),
		name: capitalCadena('FABIOLA VIRGINA'),
		lastName: capitalCadena('RIERA SALINAS'),
		type: 'regular',
		email: 'friera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13960,
		nationality: 'V'.toUpperCase(),
		cedula: 20985316,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maacosta'.toLowerCase(),
		name: capitalCadena('MARIA JOSE'),
		lastName: capitalCadena('ACOSTA JAIME'),
		type: 'regular',
		email: 'maacosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14299,
		nationality: 'V'.toUpperCase(),
		cedula: 24736601,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CVERA'.toLowerCase(),
		name: capitalCadena('CARLOS ENRIQUE'),
		lastName: capitalCadena('VERA MONTIEL'),
		type: 'regular',
		email: 'CVERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14311,
		nationality: 'V'.toUpperCase(),
		cedula: 20656740,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LARODRIGUE'.toLowerCase(),
		name: capitalCadena('LAURA MICHELLE'),
		lastName: capitalCadena('RODRIGUEZ PRIETO'),
		type: 'regular',
		email: 'LARODRIGUE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14756,
		nationality: 'V'.toUpperCase(),
		cedula: 25690041,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccaceres'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('CACERES VILLASMIL'),
		type: 'regular',
		email: 'ccaceres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13989,
		nationality: 'V'.toUpperCase(),
		cedula: 18496241,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmartinez'.toLowerCase(),
		name: capitalCadena('DIXON JESUS'),
		lastName: capitalCadena('MARTINEZ ARIAS'),
		type: 'regular',
		email: 'dmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14018,
		nationality: 'V'.toUpperCase(),
		cedula: 15759272,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yluzardo'.toLowerCase(),
		name: capitalCadena('YONIS ALEXANDER'),
		lastName: capitalCadena('LUZARDO QUINTERO'),
		type: 'regular',
		email: 'yluzardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14725,
		nationality: 'V'.toUpperCase(),
		cedula: 19907049,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CAROJAS'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('ROJAS VERGARA'),
		type: 'regular',
		email: 'CAROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14736,
		nationality: 'V'.toUpperCase(),
		cedula: 20944878,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DANGARCIA'.toLowerCase(),
		name: capitalCadena('DANNY DAVID'),
		lastName: capitalCadena('GARCIA MATOS'),
		type: 'regular',
		email: 'DANGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14738,
		nationality: 'V'.toUpperCase(),
		cedula: 26170589,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JODIAZ'.toLowerCase(),
		name: capitalCadena('JOSE ALBERTO'),
		lastName: capitalCadena('DIAZ ARANGUREN'),
		type: 'regular',
		email: 'JODIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13940,
		nationality: 'V'.toUpperCase(),
		cedula: 19679653,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krincon'.toLowerCase(),
		name: capitalCadena('KRISTABEL EDILIA'),
		lastName: capitalCadena('RINCON MOSQUERA'),
		type: 'regular',
		email: 'krincon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14029,
		nationality: 'V'.toUpperCase(),
		cedula: 18650266,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUFERRER'.toLowerCase(),
		name: capitalCadena('LUIS EMMANUEL'),
		lastName: capitalCadena('FERRER TERMINE'),
		type: 'regular',
		email: 'LUFERRER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14138,
		nationality: 'V'.toUpperCase(),
		cedula: 18429407,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMANEIRO'.toLowerCase(),
		name: capitalCadena('ANDRES EDUARDO'),
		lastName: capitalCadena('MANEIRO ANTUNEZ'),
		type: 'regular',
		email: 'ANMANEIRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14267,
		nationality: 'V'.toUpperCase(),
		cedula: 18647881,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LBRINEZ'.toLowerCase(),
		name: capitalCadena('LUIS MARIO'),
		lastName: capitalCadena('BRIÑEZ CARDOZO'),
		type: 'regular',
		email: 'LBRINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14799,
		nationality: 'V'.toUpperCase(),
		cedula: 27284907,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariacgonzalez'.toLowerCase(),
		name: capitalCadena('MARIACECILIA CHIQUINQUIRA'),
		lastName: capitalCadena('GONZALEZ ZAMBRANO'),
		type: 'regular',
		email: 'mariacgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14688,
		nationality: 'V'.toUpperCase(),
		cedula: 26112567,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDC ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMIQUILENA'.toLowerCase(),
		name: capitalCadena('MAIRY CAROLINA'),
		lastName: capitalCadena('MIQUILENA PRIETO'),
		type: 'regular',
		email: 'MMIQUILENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14270,
		nationality: 'V'.toUpperCase(),
		cedula: 16731467,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dgutierrez'.toLowerCase(),
		name: capitalCadena('DAILYN DANIELA'),
		lastName: capitalCadena('GUTIERREZ BERMUDEZ'),
		type: 'regular',
		email: 'dgutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14693,
		nationality: 'V'.toUpperCase(),
		cedula: 27945918,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD RECLAMOS DE CANALES ELECTRÓNICOS TDD ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvazquez'.toLowerCase(),
		name: capitalCadena('YURIMAR ELENA'),
		lastName: capitalCadena('VAZQUEZ MONTES'),
		type: 'regular',
		email: 'yvazquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14257,
		nationality: 'V'.toUpperCase(),
		cedula: 17736329,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMENDOZA'.toLowerCase(),
		name: capitalCadena('YANNY CAROLINA'),
		lastName: capitalCadena('MENDOZA PEREZ'),
		type: 'regular',
		email: 'YMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14683,
		nationality: 'V'.toUpperCase(),
		cedula: 23749322,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eferrini'.toLowerCase(),
		name: capitalCadena('EMILEANGELI CAROLINA'),
		lastName: capitalCadena('FERRINI FANEITE'),
		type: 'regular',
		email: 'eferrini@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14717,
		nationality: 'V'.toUpperCase(),
		cedula: 27435492,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE LOGÍSTICA MONEDA NACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emavares'.toLowerCase(),
		name: capitalCadena('EDGAR ENRIQUE'),
		lastName: capitalCadena('MAVARES PEREZ'),
		type: 'regular',
		email: 'emavares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14021,
		nationality: 'V'.toUpperCase(),
		cedula: 18394952,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmejia'.toLowerCase(),
		name: capitalCadena('KEILYS PAOLA'),
		lastName: capitalCadena('MEJIA SANCHEZ'),
		type: 'regular',
		email: 'kmejia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14119,
		nationality: 'V'.toUpperCase(),
		cedula: 23448153,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dboscan'.toLowerCase(),
		name: capitalCadena('DEYLIN JOHANNA'),
		lastName: capitalCadena('BOSCAN CHIRINO'),
		type: 'regular',
		email: 'dboscan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14162,
		nationality: 'V'.toUpperCase(),
		cedula: 24733175,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ygonzalez'.toLowerCase(),
		name: capitalCadena('YENNIFER ALEJANDRA'),
		lastName: capitalCadena('GONZALEZ ORTEGA'),
		type: 'regular',
		email: 'ygonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14271,
		nationality: 'V'.toUpperCase(),
		cedula: 27206638,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DE REPORTARÍA Y MONITOREO DE OPERACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WPAREDES'.toLowerCase(),
		name: capitalCadena('WALKAREN WALKIRIA'),
		lastName: capitalCadena('PAREDES PIRELA'),
		type: 'regular',
		email: 'WPAREDES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14352,
		nationality: 'V'.toUpperCase(),
		cedula: 26617498,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCHOURIO'.toLowerCase(),
		name: capitalCadena('GUANDA SANDIBEL'),
		lastName: capitalCadena('CHOURIO PULGAR'),
		type: 'regular',
		email: 'GCHOURIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14185,
		nationality: 'V'.toUpperCase(),
		cedula: 23739285,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCUBILLAN'.toLowerCase(),
		name: capitalCadena('JEANY MAITE'),
		lastName: capitalCadena('CUBILLAN BARRIOS'),
		type: 'regular',
		email: 'JCUBILLAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13831,
		nationality: 'V'.toUpperCase(),
		cedula: 13297237,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fjimenez'.toLowerCase(),
		name: capitalCadena('FABIOLA CHIQUINQUIRA'),
		lastName: capitalCadena('JIMENEZ TORRES'),
		type: 'regular',
		email: 'fjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13984,
		nationality: 'V'.toUpperCase(),
		cedula: 18201525,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RALTAMIRANO'.toLowerCase(),
		name: capitalCadena('ROBERT WILLIAMS'),
		lastName: capitalCadena('ALTAMIRANO MENDEZ'),
		type: 'regular',
		email: 'RALTAMIRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14205,
		nationality: 'V'.toUpperCase(),
		cedula: 19836703,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JAORTIZ'.toLowerCase(),
		name: capitalCadena('JAVIER JESUS'),
		lastName: capitalCadena('ORTIZ MAGDALENO'),
		type: 'regular',
		email: 'JAORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14447,
		nationality: 'V'.toUpperCase(),
		cedula: 20660275,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COODINACIÓN DE ATENCIÓN POST VENTA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YETTIENE'.toLowerCase(),
		name: capitalCadena('YHEANA MARGARETH'),
		lastName: capitalCadena('ETTIENE CHACIN'),
		type: 'regular',
		email: 'YETTIENE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16179,
		nationality: 'V'.toUpperCase(),
		cedula: 15432291,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jgutierrez'.toLowerCase(),
		name: capitalCadena('JOHANNA PAOLA'),
		lastName: capitalCadena('GUTIERREZ FERNANDEZ'),
		type: 'regular',
		email: 'jgutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14188,
		nationality: 'V'.toUpperCase(),
		cedula: 15938292,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BGONZALEZ'.toLowerCase(),
		name: capitalCadena('BELITZA DE JESUS'),
		lastName: capitalCadena('GONZALEZ RUIZ'),
		type: 'regular',
		email: 'BGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14326,
		nationality: 'V'.toUpperCase(),
		cedula: 16572947,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'azuniga'.toLowerCase(),
		name: capitalCadena('AISBEL CAROLINA'),
		lastName: capitalCadena('ZUÑIGA CANO'),
		type: 'regular',
		email: 'azuniga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14525,
		nationality: 'V'.toUpperCase(),
		cedula: 21357893,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGUILLEN'.toLowerCase(),
		name: capitalCadena('JORGE LEONARDO'),
		lastName: capitalCadena('GUILLEN ARAQUE'),
		type: 'regular',
		email: 'JGUILLEN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13975,
		nationality: 'V'.toUpperCase(),
		cedula: 19459882,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jantunez'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('ANTUNEZ DIAZ'),
		type: 'regular',
		email: 'jantunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14647,
		nationality: 'V'.toUpperCase(),
		cedula: 11860279,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'camartinez'.toLowerCase(),
		name: capitalCadena('CARMEN ALICIA'),
		lastName: capitalCadena('MARTINEZ CASIQUE'),
		type: 'regular',
		email: 'camartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13565,
		nationality: 'V'.toUpperCase(),
		cedula: 9463983,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA DE SISTEMAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ggouveia'.toLowerCase(),
		name: capitalCadena('GEIXE '),
		lastName: capitalCadena('GOUVEIA DE MOTTA'),
		type: 'regular',
		email: 'ggouveia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13526,
		nationality: 'V'.toUpperCase(),
		cedula: 10441987,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA AUDITORIA FINANCIERA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LPRIETO'.toLowerCase(),
		name: capitalCadena('LISSET COROMOTO'),
		lastName: capitalCadena('PRIETO MARTINEZ'),
		type: 'regular',
		email: 'LPRIETO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13580,
		nationality: 'V'.toUpperCase(),
		cedula: 10604811,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IVILLALOBOS'.toLowerCase(),
		name: capitalCadena('ISMARA '),
		lastName: capitalCadena('VILLALOBOS VELIZ'),
		type: 'regular',
		email: 'IVILLALOBOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14082,
		nationality: 'V'.toUpperCase(),
		cedula: 25296991,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ebriceno'.toLowerCase(),
		name: capitalCadena('ELIDE MARGARITA'),
		lastName: capitalCadena('BRICEÑO ROMERO'),
		type: 'regular',
		email: 'ebriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14320,
		nationality: 'V'.toUpperCase(),
		cedula: 15525785,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CFUENMAYOR'.toLowerCase(),
		name: capitalCadena('CARLA ERIKA'),
		lastName: capitalCadena('FUENMAYOR RONDON'),
		type: 'regular',
		email: 'CFUENMAYOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13873,
		nationality: 'V'.toUpperCase(),
		cedula: 9689561,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DEF.  DE MODELOS DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ereyes'.toLowerCase(),
		name: capitalCadena('EVA MARIA'),
		lastName: capitalCadena('REYES DE ROMERO'),
		type: 'regular',
		email: 'ereyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13358,
		nationality: 'V'.toUpperCase(),
		cedula: 11607169,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTION DE SERVICIOS AL PERSONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anleal'.toLowerCase(),
		name: capitalCadena('ANGELICA MARIA'),
		lastName: capitalCadena('LEAL MATA'),
		type: 'regular',
		email: 'anleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13606,
		nationality: 'V'.toUpperCase(),
		cedula: 11947573,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pmaltese'.toLowerCase(),
		name: capitalCadena('PIERO '),
		lastName: capitalCadena('MALTESE ORDAZ'),
		type: 'regular',
		email: 'pmaltese@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14663,
		nationality: 'V'.toUpperCase(),
		cedula: 12693749,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcarquez'.toLowerCase(),
		name: capitalCadena('LEONARDO ENRIQUE'),
		lastName: capitalCadena('CARQUEZ BUSTOS'),
		type: 'regular',
		email: 'lcarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13521,
		nationality: 'V'.toUpperCase(),
		cedula: 10919627,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'calopez'.toLowerCase(),
		name: capitalCadena('CAROLINA LISETTE'),
		lastName: capitalCadena('LOPEZ SIFONTES'),
		type: 'regular',
		email: 'calopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14610,
		nationality: 'V'.toUpperCase(),
		cedula: 8968102,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MBOHORQUEZ'.toLowerCase(),
		name: capitalCadena('MARIUGENIA DEL CARMEN'),
		lastName: capitalCadena('BOHORQUEZ BOHORQUEZ'),
		type: 'regular',
		email: 'MBOHORQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13605,
		nationality: 'V'.toUpperCase(),
		cedula: 17634246,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josgonzalez'.toLowerCase(),
		name: capitalCadena('JOSE ALBERTO'),
		lastName: capitalCadena('GONZALEZ GONZALEZ'),
		type: 'regular',
		email: 'josgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13853,
		nationality: 'V'.toUpperCase(),
		cedula: 10450687,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ioliveira'.toLowerCase(),
		name: capitalCadena('ISAMELIA '),
		lastName: capitalCadena('OLIVEIRA LOAIZA'),
		type: 'regular',
		email: 'ioliveira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13692,
		nationality: 'V'.toUpperCase(),
		cedula: 18005171,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gsilva'.toLowerCase(),
		name: capitalCadena('GUSTAVO ADOLFO'),
		lastName: capitalCadena('SILVA FERRER'),
		type: 'regular',
		email: 'gsilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14378,
		nationality: 'V'.toUpperCase(),
		cedula: 21490220,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN DE INFORMACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvazquez'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('VAZQUEZ FERRER'),
		type: 'regular',
		email: 'jvazquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13504,
		nationality: 'V'.toUpperCase(),
		cedula: 4520912,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA ESTADÍSTICA SOBRE METODOLOGÍA DE RIESGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vreyes'.toLowerCase(),
		name: capitalCadena('VALENTINA NAZARETH'),
		lastName: capitalCadena('REYES LOPEZ'),
		type: 'regular',
		email: 'vreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14111,
		nationality: 'V'.toUpperCase(),
		cedula: 20777904,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ANÁLISIS DE OPERACIONES FINANCIERAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ppaz'.toLowerCase(),
		name: capitalCadena('PATRICIA MILAGROS'),
		lastName: capitalCadena('PAZ LAMEDA'),
		type: 'regular',
		email: 'ppaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13648,
		nationality: 'V'.toUpperCase(),
		cedula: 17005700,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IPALENCIA'.toLowerCase(),
		name: capitalCadena('ISIS MERCEDES'),
		lastName: capitalCadena('PALENCIA CORDERO'),
		type: 'regular',
		email: 'IPALENCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13430,
		nationality: 'V'.toUpperCase(),
		cedula: 8503980,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmorillo'.toLowerCase(),
		name: capitalCadena('DARWIN ATILIO'),
		lastName: capitalCadena('MORILLO HERNANDEZ'),
		type: 'regular',
		email: 'dmorillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13334,
		nationality: 'V'.toUpperCase(),
		cedula: 13300624,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'znunez'.toLowerCase(),
		name: capitalCadena('ZOLANDA MERCEDES'),
		lastName: capitalCadena('NUÑEZ MEJIAS'),
		type: 'regular',
		email: 'znunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13554,
		nationality: 'V'.toUpperCase(),
		cedula: 11859299,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jyanez'.toLowerCase(),
		name: capitalCadena('JOHAN MANUEL'),
		lastName: capitalCadena('YANEZ VALERO'),
		type: 'regular',
		email: 'jyanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15723,
		nationality: 'V'.toUpperCase(),
		cedula: 20438208,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncamacho'.toLowerCase(),
		name: capitalCadena('NINOSKA CHIQUINQUIRA'),
		lastName: capitalCadena('CAMACHO '),
		type: 'regular',
		email: 'ncamacho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13544,
		nationality: 'V'.toUpperCase(),
		cedula: 14117514,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMARTINEZ'.toLowerCase(),
		name: capitalCadena('ALBENIS ANTONIO'),
		lastName: capitalCadena('MARTINEZ YNCIARTE'),
		type: 'regular',
		email: 'AMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13506,
		nationality: 'V'.toUpperCase(),
		cedula: 4018017,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ENERGÍA MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcepeda'.toLowerCase(),
		name: capitalCadena('MARY PAZ'),
		lastName: capitalCadena('CEPEDA OCANDO'),
		type: 'regular',
		email: 'mcepeda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14604,
		nationality: 'V'.toUpperCase(),
		cedula: 11393846,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cortega'.toLowerCase(),
		name: capitalCadena('CARLOS EMILIO'),
		lastName: capitalCadena('ORTEGA ROMERO'),
		type: 'regular',
		email: 'cortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13292,
		nationality: 'V'.toUpperCase(),
		cedula: 7812532,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elohernandez'.toLowerCase(),
		name: capitalCadena('ELOISA DEL CARMEN'),
		lastName: capitalCadena('HERNANDEZ SANDOVAL'),
		type: 'regular',
		email: 'elohernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13593,
		nationality: 'V'.toUpperCase(),
		cedula: 15260220,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elhernandez'.toLowerCase(),
		name: capitalCadena('ELIANA DE LOS ANGELES'),
		lastName: capitalCadena('HERNANDEZ ROSALES'),
		type: 'regular',
		email: 'elhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14169,
		nationality: 'V'.toUpperCase(),
		cedula: 23450875,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CENTRO DE ACOPIO MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBRIZUELA'.toLowerCase(),
		name: capitalCadena('JOSE MANUEL'),
		lastName: capitalCadena('BRIZUELA SUAREZ'),
		type: 'regular',
		email: 'JBRIZUELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14044,
		nationality: 'V'.toUpperCase(),
		cedula: 23749161,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE APLICACIONES DE COBRO Y PROCE MASIVOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marsanchez'.toLowerCase(),
		name: capitalCadena('MARIBEL '),
		lastName: capitalCadena('SANCHEZ DE MEDINA'),
		type: 'regular',
		email: 'marsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13739,
		nationality: 'V'.toUpperCase(),
		cedula: 14623354,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nehernandez'.toLowerCase(),
		name: capitalCadena('NEYLLS KARELIS'),
		lastName: capitalCadena('HERNANDEZ NUÑEZ'),
		type: 'regular',
		email: 'nehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13679,
		nationality: 'V'.toUpperCase(),
		cedula: 17088741,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PRODUCCIÓN AMEX']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dpenzo'.toLowerCase(),
		name: capitalCadena('DINORAILI CHIQUINQUIRA'),
		lastName: capitalCadena('PENZO AÑEZ'),
		type: 'regular',
		email: 'dpenzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13457,
		nationality: 'V'.toUpperCase(),
		cedula: 15810628,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'helopez'.toLowerCase(),
		name: capitalCadena('HERLINDA DEL CARMEN'),
		lastName: capitalCadena('LOPEZ GARCIA'),
		type: 'regular',
		email: 'helopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14045,
		nationality: 'V'.toUpperCase(),
		cedula: 19844204,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA RECLAMOS DE CANALES ELECTRONICOS ZONA 2']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eferrer'.toLowerCase(),
		name: capitalCadena('EDDY YAFRANCI'),
		lastName: capitalCadena('FERRER BRAVO'),
		type: 'regular',
		email: 'eferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14687,
		nationality: 'V'.toUpperCase(),
		cedula: 24727815,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA CONSULTA, DE PRODUCTOS Y CONTRATOS ESPEC.']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmerchan'.toLowerCase(),
		name: capitalCadena('MARIA VIRGINIA'),
		lastName: capitalCadena('MERCHAN JIMENEZ'),
		type: 'regular',
		email: 'mmerchan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13823,
		nationality: 'V'.toUpperCase(),
		cedula: 16607251,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA GESTIÓN ADMINISTRATIVA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAOMANA'.toLowerCase(),
		name: capitalCadena('MARIA ANDREINA'),
		lastName: capitalCadena('OMAÑA PIRELA'),
		type: 'regular',
		email: 'MAOMANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13972,
		nationality: 'V'.toUpperCase(),
		cedula: 19988407,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA AFILIACIÓN AL SERVICIO POS INTERIOR']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'begomez'.toLowerCase(),
		name: capitalCadena('BELKIS OMAIRA'),
		lastName: capitalCadena('GOMEZ '),
		type: 'regular',
		email: 'begomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13683,
		nationality: 'V'.toUpperCase(),
		cedula: 13021106,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mbaptista'.toLowerCase(),
		name: capitalCadena('MONICA DESIRE'),
		lastName: capitalCadena('BAPTISTA DE BAUZA'),
		type: 'regular',
		email: 'mbaptista@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13315,
		nationality: 'V'.toUpperCase(),
		cedula: 12307238,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elvrodriguez'.toLowerCase(),
		name: capitalCadena('ELVIRA ELENA'),
		lastName: capitalCadena('RODRIGUEZ DE PEREZ'),
		type: 'regular',
		email: 'elvrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13465,
		nationality: 'V'.toUpperCase(),
		cedula: 7759533,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tgouveia'.toLowerCase(),
		name: capitalCadena('TRINA DE JESUS'),
		lastName: capitalCadena('GOUVEIA DA SILVA'),
		type: 'regular',
		email: 'tgouveia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14854,
		nationality: 'V'.toUpperCase(),
		cedula: 9738923,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCASTRO'.toLowerCase(),
		name: capitalCadena('MARISOL DEL VALLE'),
		lastName: capitalCadena('CASTRO '),
		type: 'regular',
		email: 'MCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 507,
		nationality: 'V'.toUpperCase(),
		cedula: 9765517,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA REGIONAL OPERACION DE AGENCIAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOVILLEGAS'.toLowerCase(),
		name: capitalCadena('JORGE ENRIQUE'),
		lastName: capitalCadena('VILLEGAS ROSADO'),
		type: 'regular',
		email: 'JOVILLEGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8282,
		nationality: 'V'.toUpperCase(),
		cedula: 13757444,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ruhernandez'.toLowerCase(),
		name: capitalCadena('RUTH MARINA'),
		lastName: capitalCadena('HERNANDEZ '),
		type: 'regular',
		email: 'ruhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13238,
		nationality: 'V'.toUpperCase(),
		cedula: 5059942,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSALAZAR'.toLowerCase(),
		name: capitalCadena('RICAURTER JOSE'),
		lastName: capitalCadena('SALAZAR CARRIELES'),
		type: 'regular',
		email: 'RSALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13134,
		nationality: 'V'.toUpperCase(),
		cedula: 9725884,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ZONA ZULIA FALCÓN IV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'larriaz'.toLowerCase(),
		name: capitalCadena('LUMARY INES'),
		lastName: capitalCadena('ARRIAZ NAVA'),
		type: 'regular',
		email: 'larriaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14990,
		nationality: 'V'.toUpperCase(),
		cedula: 12804929,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SALUD OCUPACIONAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['MEDICO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDMOLINA'.toLowerCase(),
		name: capitalCadena('EDWAR ANTONIO'),
		lastName: capitalCadena('MOLINA GAVIDIA'),
		type: 'regular',
		email: 'EDMOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13965,
		nationality: 'V'.toUpperCase(),
		cedula: 12381033,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUNDIAZ'.toLowerCase(),
		name: capitalCadena('JUNNIOR JOSE'),
		lastName: capitalCadena('DIAZ GRATEROL'),
		type: 'regular',
		email: 'JUNDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14123,
		nationality: 'V'.toUpperCase(),
		cedula: 12379847,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fsilva'.toLowerCase(),
		name: capitalCadena('FRANCISCO JAVIER'),
		lastName: capitalCadena('SILVA GONZALEZ'),
		type: 'regular',
		email: 'fsilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15556,
		nationality: 'V'.toUpperCase(),
		cedula: 14006681,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GZABALA'.toLowerCase(),
		name: capitalCadena('GERARDO JESUS'),
		lastName: capitalCadena('ZABALA BRACHO'),
		type: 'regular',
		email: 'GZABALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15943,
		nationality: 'V'.toUpperCase(),
		cedula: 30101952,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LSOTURNO'.toLowerCase(),
		name: capitalCadena('LEONARDO JOSE'),
		lastName: capitalCadena('SOTURNO CORDERO'),
		type: 'regular',
		email: 'LSOTURNO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16086,
		nationality: 'V'.toUpperCase(),
		cedula: 18918197,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMEDINA'.toLowerCase(),
		name: capitalCadena('ENGERBER JOSE'),
		lastName: capitalCadena('MEDINA OROZCO'),
		type: 'regular',
		email: 'EMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16096,
		nationality: 'V'.toUpperCase(),
		cedula: 12216609,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. (OCCIDENTE - ANDES)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE CONSOLA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CABARRIOS'.toLowerCase(),
		name: capitalCadena('CARLOS JAVIER'),
		lastName: capitalCadena('BARRIOS BRICEÑO'),
		type: 'regular',
		email: 'CABARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16101,
		nationality: 'V'.toUpperCase(),
		cedula: 24361918,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORD. ALMACÉN Y PROVEEDURÍA (OCCIDENTE)']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE ALMACEN'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsoto'.toLowerCase(),
		name: capitalCadena('DEIVID FIDEL'),
		lastName: capitalCadena('SOTO HURTADO'),
		type: 'regular',
		email: 'dsoto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13793,
		nationality: 'V'.toUpperCase(),
		cedula: 13932976,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE POS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aroo'.toLowerCase(),
		name: capitalCadena('ALEJANDRO JAVIER'),
		lastName: capitalCadena('ROO COLMENARES'),
		type: 'regular',
		email: 'aroo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13413,
		nationality: 'V'.toUpperCase(),
		cedula: 13741865,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zdaza'.toLowerCase(),
		name: capitalCadena('ZULAY JOSEFINA'),
		lastName: capitalCadena('DAZA LOPEZ'),
		type: 'regular',
		email: 'zdaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13576,
		nationality: 'V'.toUpperCase(),
		cedula: 6747141,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. CALIDAD DE SERVICIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbaena'.toLowerCase(),
		name: capitalCadena('CARLOS '),
		lastName: capitalCadena('BAENA '),
		type: 'regular',
		email: 'cbaena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13371,
		nationality: 'V'.toUpperCase(),
		cedula: 13296956,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. OPERACIONES DE EFECTIVO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aferrer'.toLowerCase(),
		name: capitalCadena('ALEJANDRA VANESSA'),
		lastName: capitalCadena('FERRER FUENMAYOR'),
		type: 'regular',
		email: 'aferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14020,
		nationality: 'V'.toUpperCase(),
		cedula: 20442877,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ASUNTOS LEGALES'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ivillasmil'.toLowerCase(),
		name: capitalCadena('IRMA TAHIS'),
		lastName: capitalCadena('VILLASMIL VALBUENA'),
		type: 'regular',
		email: 'ivillasmil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13328,
		nationality: 'V'.toUpperCase(),
		cedula: 12305823,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. BANCA EMPRESAS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CALBORNOZ'.toLowerCase(),
		name: capitalCadena('COROMOTO DEL CARMEN'),
		lastName: capitalCadena('ALBORNOZ DE MAVARES'),
		type: 'regular',
		email: 'CALBORNOZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 748,
		nationality: 'V'.toUpperCase(),
		cedula: 7774837,
		centroTrabajoId: '95_6',
		locationId: null,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. REGIÓN OCCIDENTE'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE REGIONAL'])[0].id,
		extension: [],
		phone: []
	}
]
module.exports = { updateEmployees_95_6 }
