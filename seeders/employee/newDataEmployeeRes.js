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

const updateEmployees_Agencia = [
	{
		userName: 'DPIMENTEL'.trim().toLowerCase(),
		name: capitalCadena(' DEIKER JOSE'.trim()),
		lastName: capitalCadena('PIMENTEL AVILES'.trim()),
		type: 'regular',
		email: 'DPIMENTEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5263,
		nationality: 'V'.toUpperCase(),
		cedula: 18351505,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycarvajal'.trim().toLowerCase(),
		name: capitalCadena(' YEILI ALEXANDRA'.trim()),
		lastName: capitalCadena('CARVAJAL UZCATEGUI'.trim()),
		type: 'regular',
		email: 'ycarvajal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7548,
		nationality: 'V'.toUpperCase(),
		cedula: 25870958,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DSANTOS'.trim().toLowerCase(),
		name: capitalCadena(' DUBRASKA YOSVILTH'.trim()),
		lastName: capitalCadena('SANTOS PAUCAR'.trim()),
		type: 'regular',
		email: 'DSANTOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8504,
		nationality: 'V'.toUpperCase(),
		cedula: 20174956,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FZABALA'.trim().toLowerCase(),
		name: capitalCadena(' FRANKLIN JOSE'.trim()),
		lastName: capitalCadena('ZABALA SENA'.trim()),
		type: 'regular',
		email: 'FZABALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4363,
		nationality: 'V'.toUpperCase(),
		cedula: 5535973,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' BETY COROMOTO'.trim()),
		lastName: capitalCadena('MENDEZ '.trim()),
		type: 'regular',
		email: 'BMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2692,
		nationality: 'V'.toUpperCase(),
		cedula: 11049058,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msilvera'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL RAMON'.trim()),
		lastName: capitalCadena('SILVERA LUGO'.trim()),
		type: 'regular',
		email: 'msilvera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13041,
		nationality: 'V'.toUpperCase(),
		cedula: 11198325,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'respanol'.trim().toLowerCase(),
		name: capitalCadena(' REIVAN SAYEK'.trim()),
		lastName: capitalCadena('ESPAÑOL ROJAS'.trim()),
		type: 'regular',
		email: 'respanol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13141,
		nationality: 'V'.toUpperCase(),
		cedula: 27426512,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANMOYA'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA GABRIELA'.trim()),
		lastName: capitalCadena('MOYA ALVINS'.trim()),
		type: 'regular',
		email: 'ANMOYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15649,
		nationality: 'V'.toUpperCase(),
		cedula: 30507735,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WALCALA'.trim().toLowerCase(),
		name: capitalCadena(' WILLIAM MIGUEL'.trim()),
		lastName: capitalCadena('ALCALA PRATO'.trim()),
		type: 'regular',
		email: 'WALCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16178,
		nationality: 'V'.toUpperCase(),
		cedula: 19084387,
		centroTrabajoId: '1',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN BERNARDINO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BORELLANA'.trim().toLowerCase(),
		name: capitalCadena(' BETHZAY YEMALLIA'.trim()),
		lastName: capitalCadena('ORELLANA SANCHEZ'.trim()),
		type: 'regular',
		email: 'BORELLANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12206,
		nationality: 'V'.toUpperCase(),
		cedula: 18934117,
		centroTrabajoId: '10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpoleo'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ENRIQUE'.trim()),
		lastName: capitalCadena('POLEO PEÑA'.trim()),
		type: 'regular',
		email: 'jpoleo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13716,
		nationality: 'V'.toUpperCase(),
		cedula: 14140923,
		centroTrabajoId: '10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OPENA'.trim().toLowerCase(),
		name: capitalCadena(' OSWALDO ENRRIQUE'.trim()),
		lastName: capitalCadena('PEÑA '.trim()),
		type: 'regular',
		email: 'OPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3227,
		nationality: 'V'.toUpperCase(),
		cedula: 6865476,
		centroTrabajoId: '10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JANDRADE'.trim().toLowerCase(),
		name: capitalCadena(' JESUS NOEL'.trim()),
		lastName: capitalCadena('ANDRADE ARRIECHE'.trim()),
		type: 'regular',
		email: 'JANDRADE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12828,
		nationality: 'V'.toUpperCase(),
		cedula: 10503876,
		centroTrabajoId: '10',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI SAN MARTIN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccastellanos'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN JULIA'.trim()),
		lastName: capitalCadena('CASTELLANOS ROMERO'.trim()),
		type: 'regular',
		email: 'ccastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14255,
		nationality: 'V'.toUpperCase(),
		cedula: 18334440,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WMOLINA'.trim().toLowerCase(),
		name: capitalCadena(' WILMER JOSE'.trim()),
		lastName: capitalCadena('MOLINA MONTIEL'.trim()),
		type: 'regular',
		email: 'WMOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7185,
		nationality: 'V'.toUpperCase(),
		cedula: 13244361,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecarreno'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO JOSE'.trim()),
		lastName: capitalCadena('CARREÑO UBAN'.trim()),
		type: 'regular',
		email: 'ecarreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14669,
		nationality: 'V'.toUpperCase(),
		cedula: 17682290,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RIPARRA'.trim().toLowerCase(),
		name: capitalCadena(' RICKY JOSE'.trim()),
		lastName: capitalCadena('PARRA CASTILLO'.trim()),
		type: 'regular',
		email: 'RIPARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12102,
		nationality: 'V'.toUpperCase(),
		cedula: 15560893,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoron'.trim().toLowerCase(),
		name: capitalCadena(' JUAN CARLOS'.trim()),
		lastName: capitalCadena('MORON MORAN'.trim()),
		type: 'regular',
		email: 'jmoron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13406,
		nationality: 'V'.toUpperCase(),
		cedula: 7976163,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dconde'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA JOSEFINA'.trim()),
		lastName: capitalCadena('CONDE RAMIREZ'.trim()),
		type: 'regular',
		email: 'dconde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13878,
		nationality: 'V'.toUpperCase(),
		cedula: 13402549,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrincon'.trim().toLowerCase(),
		name: capitalCadena(' YONATHAN JESUS'.trim()),
		lastName: capitalCadena('RINCON CONTRERAS'.trim()),
		type: 'regular',
		email: 'yrincon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13881,
		nationality: 'V'.toUpperCase(),
		cedula: 16458301,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JTORRES'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER ANDREINA'.trim()),
		lastName: capitalCadena('TORRES REY'.trim()),
		type: 'regular',
		email: 'JTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13946,
		nationality: 'V'.toUpperCase(),
		cedula: 23271256,
		centroTrabajoId: '101',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['MARACAIBO CENTRO COMERCIAL GRAN BAZAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA LAURA'.trim()),
		lastName: capitalCadena('GOMEZ FERRER'.trim()),
		type: 'regular',
		email: 'MARIGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10618,
		nationality: 'V'.toUpperCase(),
		cedula: 26197749,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fromero'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO JAVIER'.trim()),
		lastName: capitalCadena('ROMERO TREJO'.trim()),
		type: 'regular',
		email: 'fromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13472,
		nationality: 'V'.toUpperCase(),
		cedula: 9517115,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SUHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' SUHAY YAMILEE'.trim()),
		lastName: capitalCadena('HERNANDEZ GARCIA'.trim()),
		type: 'regular',
		email: 'SUHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6737,
		nationality: 'V'.toUpperCase(),
		cedula: 13616941,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EFONSECA'.trim().toLowerCase(),
		name: capitalCadena(' ERVIN JOSE DE JESUS'.trim()),
		lastName: capitalCadena('FONSECA JIMENEZ'.trim()),
		type: 'regular',
		email: 'EFONSECA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12178,
		nationality: 'V'.toUpperCase(),
		cedula: 17178173,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' KARIENNYS KAINA'.trim()),
		lastName: capitalCadena('SANCHEZ LOPEZ'.trim()),
		type: 'regular',
		email: 'KSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12654,
		nationality: 'V'.toUpperCase(),
		cedula: 25128175,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMARIN'.trim().toLowerCase(),
		name: capitalCadena(' RENE RAFAEL'.trim()),
		lastName: capitalCadena('MARIN ARCILA'.trim()),
		type: 'regular',
		email: 'RMARIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15381,
		nationality: 'V'.toUpperCase(),
		cedula: 26266339,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMONTE'.trim().toLowerCase(),
		name: capitalCadena(' MARIELA EDITH'.trim()),
		lastName: capitalCadena('MONTE CABRERA'.trim()),
		type: 'regular',
		email: 'MMONTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7083,
		nationality: 'V'.toUpperCase(),
		cedula: 16708475,
		centroTrabajoId: '102',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CORO SUPERMERCADO EUROFALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RALCALA'.trim().toLowerCase(),
		name: capitalCadena(' ROSLEISY YENIREE'.trim()),
		lastName: capitalCadena('ALCALA RIVERA'.trim()),
		type: 'regular',
		email: 'RALCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12614,
		nationality: 'V'.toUpperCase(),
		cedula: 19716366,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BETSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' BETZABET DEL VALLE'.trim()),
		lastName: capitalCadena('SANCHEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'BETSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6057,
		nationality: 'V'.toUpperCase(),
		cedula: 12575577,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anromero'.trim().toLowerCase(),
		name: capitalCadena(' ANA GABRIELA'.trim()),
		lastName: capitalCadena('ROMERO VARGAS'.trim()),
		type: 'regular',
		email: 'anromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14879,
		nationality: 'V'.toUpperCase(),
		cedula: 19716732,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MATVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MATILDE BEATRIZ'.trim()),
		lastName: capitalCadena('VELASQUEZ MEJIAS'.trim()),
		type: 'regular',
		email: 'MATVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9261,
		nationality: 'V'.toUpperCase(),
		cedula: 10287306,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARBELIS DEL VALLE'.trim()),
		lastName: capitalCadena('VELASQUEZ CRUCES'.trim()),
		type: 'regular',
		email: 'MAVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5582,
		nationality: 'V'.toUpperCase(),
		cedula: 8345123,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YDEPARUCHO'.trim().toLowerCase(),
		name: capitalCadena(' YAMILET GREGORIA'.trim()),
		lastName: capitalCadena('VALLENILLA DE PARUCHO'.trim()),
		type: 'regular',
		email: 'YDEPARUCHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6448,
		nationality: 'V'.toUpperCase(),
		cedula: 13092811,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eguaina'.trim().toLowerCase(),
		name: capitalCadena(' ELI RAMON'.trim()),
		lastName: capitalCadena('GUAINA MARCANO'.trim()),
		type: 'regular',
		email: 'eguaina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13006,
		nationality: 'V'.toUpperCase(),
		cedula: 15292748,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcedeno'.trim().toLowerCase(),
		name: capitalCadena(' MAICKEL JAVIER'.trim()),
		lastName: capitalCadena('CEDEÑO SANCHEZ'.trim()),
		type: 'regular',
		email: 'mcedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14979,
		nationality: 'V'.toUpperCase(),
		cedula: 20763302,
		centroTrabajoId: '103',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUERTO LA CRUZ AV. ALBERTO RAVELL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMENA'.trim().toLowerCase(),
		name: capitalCadena(' CHRISLEIDY YUDITH'.trim()),
		lastName: capitalCadena('MENA PEREZ'.trim()),
		type: 'regular',
		email: 'CMENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10064,
		nationality: 'V'.toUpperCase(),
		cedula: 24524452,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VORELLANA'.trim().toLowerCase(),
		name: capitalCadena(' VANESSA KARINA'.trim()),
		lastName: capitalCadena('ORELLANA MARQUEZ'.trim()),
		type: 'regular',
		email: 'VORELLANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5307,
		nationality: 'V'.toUpperCase(),
		cedula: 17472789,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OLUGO'.trim().toLowerCase(),
		name: capitalCadena(' OSCAR JOSE'.trim()),
		lastName: capitalCadena('LUGO FERNANDEZ'.trim()),
		type: 'regular',
		email: 'OLUGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15929,
		nationality: 'V'.toUpperCase(),
		cedula: 18067445,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CMERCHAN'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ENRIQUE'.trim()),
		lastName: capitalCadena('MERCHAN TARAZONA'.trim()),
		type: 'regular',
		email: 'CMERCHAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 490,
		nationality: 'V'.toUpperCase(),
		cedula: 7196464,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCRESPO'.trim().toLowerCase(),
		name: capitalCadena(' LEIDY CRISTIMAR'.trim()),
		lastName: capitalCadena('CRESPO SAEZ'.trim()),
		type: 'regular',
		email: 'LCRESPO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6158,
		nationality: 'V'.toUpperCase(),
		cedula: 17164034,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VAPALMA'.trim().toLowerCase(),
		name: capitalCadena(' VANESSA CAROLINA'.trim()),
		lastName: capitalCadena('PALMA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'VAPALMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10090,
		nationality: 'V'.toUpperCase(),
		cedula: 25858320,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMENA'.trim().toLowerCase(),
		name: capitalCadena(' ADRIAN JOSE'.trim()),
		lastName: capitalCadena('MENA OTERO'.trim()),
		type: 'regular',
		email: 'AMENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16032,
		nationality: 'V'.toUpperCase(),
		cedula: 25501946,
		centroTrabajoId: '104',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY AV VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FZORRILLA'.trim().toLowerCase(),
		name: capitalCadena(' FLORIMAR ELENA'.trim()),
		lastName: capitalCadena('ZORRILLA RIVAS'.trim()),
		type: 'regular',
		email: 'FZORRILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9173,
		nationality: 'V'.toUpperCase(),
		cedula: 13293834,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MLUGO'.trim().toLowerCase(),
		name: capitalCadena(' MARYURI CAROLINA'.trim()),
		lastName: capitalCadena('LUGO FAJARDO'.trim()),
		type: 'regular',
		email: 'MLUGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12669,
		nationality: 'V'.toUpperCase(),
		cedula: 14322000,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DAFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' DAIRILYS MARIA'.trim()),
		lastName: capitalCadena('FERNANDEZ MARCANO'.trim()),
		type: 'regular',
		email: 'DAFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9641,
		nationality: 'V'.toUpperCase(),
		cedula: 14856219,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRAMOS'.trim().toLowerCase(),
		name: capitalCadena(' JESUS VALENTIN'.trim()),
		lastName: capitalCadena('RAMOS NUÑEZ'.trim()),
		type: 'regular',
		email: 'JRAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7167,
		nationality: 'V'.toUpperCase(),
		cedula: 12524207,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JFARIAS'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ENRIQUE'.trim()),
		lastName: capitalCadena('FARIAS '.trim()),
		type: 'regular',
		email: 'JFARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7214,
		nationality: 'V'.toUpperCase(),
		cedula: 11444827,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HROSARIO'.trim().toLowerCase(),
		name: capitalCadena(' HILNA ROSA'.trim()),
		lastName: capitalCadena('ROSARIO PAYARES'.trim()),
		type: 'regular',
		email: 'HROSARIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7215,
		nationality: 'V'.toUpperCase(),
		cedula: 10219637,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMALAVE'.trim().toLowerCase(),
		name: capitalCadena(' AMARILYS DEL VALLE'.trim()),
		lastName: capitalCadena('MALAVE HERNANDEZ'.trim()),
		type: 'regular',
		email: 'AMALAVE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12048,
		nationality: 'V'.toUpperCase(),
		cedula: 17022240,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amarin'.trim().toLowerCase(),
		name: capitalCadena(' ADRIAN ANTONIO'.trim()),
		lastName: capitalCadena('MARIN GONZALEZ'.trim()),
		type: 'regular',
		email: 'amarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13455,
		nationality: 'V'.toUpperCase(),
		cedula: 10879106,
		centroTrabajoId: '106',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CARUPANO CENTRO COMERCIAL CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUAGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' JUAN MIGUEL'.trim()),
		lastName: capitalCadena('GARCIA ORTEGA'.trim()),
		type: 'regular',
		email: 'JUAGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14344,
		nationality: 'V'.toUpperCase(),
		cedula: 21215708,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YSUMOZA'.trim().toLowerCase(),
		name: capitalCadena(' YOSBELY BETANIA'.trim()),
		lastName: capitalCadena('SUMOZA AGUILAR'.trim()),
		type: 'regular',
		email: 'YSUMOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5123,
		nationality: 'V'.toUpperCase(),
		cedula: 12315336,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' DESIREE DEL CARMEN'.trim()),
		lastName: capitalCadena('ORTIZ MENDEZ'.trim()),
		type: 'regular',
		email: 'DORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4587,
		nationality: 'V'.toUpperCase(),
		cedula: 17257350,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CBAUTE'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN JULIA'.trim()),
		lastName: capitalCadena('BAUTE NAVAS'.trim()),
		type: 'regular',
		email: 'CBAUTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6059,
		nationality: 'V'.toUpperCase(),
		cedula: 12773442,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANGEL'.trim()),
		lastName: capitalCadena('COLMENARES GARCIA'.trim()),
		type: 'regular',
		email: 'MCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12619,
		nationality: 'V'.toUpperCase(),
		cedula: 18748108,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llara'.trim().toLowerCase(),
		name: capitalCadena(' LIANNYS MARIANA'.trim()),
		lastName: capitalCadena('LARA ROJAS'.trim()),
		type: 'regular',
		email: 'llara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15096,
		nationality: 'V'.toUpperCase(),
		cedula: 26581760,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cpineda'.trim().toLowerCase(),
		name: capitalCadena(' CARLA GABRIELA'.trim()),
		lastName: capitalCadena('PINEDA TERAN'.trim()),
		type: 'regular',
		email: 'cpineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15580,
		nationality: 'V'.toUpperCase(),
		cedula: 27501908,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CZAPATA'.trim().toLowerCase(),
		name: capitalCadena(' CELVELI ALESANDRA'.trim()),
		lastName: capitalCadena('ZAPATA DE MOSQUEDA'.trim()),
		type: 'regular',
		email: 'CZAPATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12580,
		nationality: 'V'.toUpperCase(),
		cedula: 17316946,
		centroTrabajoId: '107',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['VALENCIA C.C. CONCEPTO LA GRANJA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josalas'.trim().toLowerCase(),
		name: capitalCadena(' JOHEL JOSE'.trim()),
		lastName: capitalCadena('SALAS ACOSTA'.trim()),
		type: 'regular',
		email: 'josalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14747,
		nationality: 'V'.toUpperCase(),
		cedula: 13669955,
		centroTrabajoId: '108',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LPENA'.trim().toLowerCase(),
		name: capitalCadena(' LEOMARYS DEL VALLE'.trim()),
		lastName: capitalCadena('PEÑA ROJAS'.trim()),
		type: 'regular',
		email: 'LPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12070,
		nationality: 'V'.toUpperCase(),
		cedula: 27740538,
		centroTrabajoId: '108',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alhernandez'.trim().toLowerCase(),
		name: capitalCadena(' ALBERTO JOSE'.trim()),
		lastName: capitalCadena('HERNANDEZ NOROÑO'.trim()),
		type: 'regular',
		email: 'alhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13122,
		nationality: 'V'.toUpperCase(),
		cedula: 24438665,
		centroTrabajoId: '108',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmarin'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS DEL VALLE'.trim()),
		lastName: capitalCadena('MARIN DE SALINAS'.trim()),
		type: 'regular',
		email: 'fmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15458,
		nationality: 'V'.toUpperCase(),
		cedula: 12672959,
		centroTrabajoId: '108',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PORLAMAR ALCALDIA MARIÑO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CVARELA'.trim().toLowerCase(),
		name: capitalCadena(' CARLA DESIREE'.trim()),
		lastName: capitalCadena('VARELA ORTEGA'.trim()),
		type: 'regular',
		email: 'CVARELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11279,
		nationality: 'V'.toUpperCase(),
		cedula: 16318026,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMIRANDA'.trim().toLowerCase(),
		name: capitalCadena(' LISMAR MISDALY'.trim()),
		lastName: capitalCadena('MIRANDA ALVARADO'.trim()),
		type: 'regular',
		email: 'LMIRANDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7458,
		nationality: 'V'.toUpperCase(),
		cedula: 18500463,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' PASTOR RAMON'.trim()),
		lastName: capitalCadena('CASTILLO OCHOA'.trim()),
		type: 'regular',
		email: 'PCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 913,
		nationality: 'V'.toUpperCase(),
		cedula: 14025006,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MHENRIQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA KARINA'.trim()),
		lastName: capitalCadena('HENRIQUEZ SEVILLA'.trim()),
		type: 'regular',
		email: 'MHENRIQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11796,
		nationality: 'V'.toUpperCase(),
		cedula: 13235038,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MFRONTADO'.trim().toLowerCase(),
		name: capitalCadena(' MARIAN ELENA'.trim()),
		lastName: capitalCadena('FRONTADO VEGA'.trim()),
		type: 'regular',
		email: 'MFRONTADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12277,
		nationality: 'V'.toUpperCase(),
		cedula: 14624324,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lhernandez'.trim().toLowerCase(),
		name: capitalCadena(' LAURA YAMILETH'.trim()),
		lastName: capitalCadena('HERNANDEZ MACHADO'.trim()),
		type: 'regular',
		email: 'lhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12892,
		nationality: 'V'.toUpperCase(),
		cedula: 15257274,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROPINERO'.trim().toLowerCase(),
		name: capitalCadena(' ROBERTO MIGUEL'.trim()),
		lastName: capitalCadena('PIÑERO GUTIERREZ'.trim()),
		type: 'regular',
		email: 'ROPINERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8565,
		nationality: 'V'.toUpperCase(),
		cedula: 15890393,
		centroTrabajoId: '109',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['BEJUMA AV LOS FUNDADORES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' LESBIA TERESA'.trim()),
		lastName: capitalCadena('MENDOZA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'LMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12651,
		nationality: 'V'.toUpperCase(),
		cedula: 6319736,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yediaz'.trim().toLowerCase(),
		name: capitalCadena(' YENIRE COROMOTO'.trim()),
		lastName: capitalCadena('DIAZ CARRILLO'.trim()),
		type: 'regular',
		email: 'yediaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10783,
		nationality: 'V'.toUpperCase(),
		cedula: 20872135,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KZAMBRANO'.trim().toLowerCase(),
		name: capitalCadena(' KERLY SUSANA'.trim()),
		lastName: capitalCadena('ZAMBRANO DOZA'.trim()),
		type: 'regular',
		email: 'KZAMBRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12207,
		nationality: 'V'.toUpperCase(),
		cedula: 16412002,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZQUINTERO'.trim().toLowerCase(),
		name: capitalCadena(' ZULLY COROMOTO'.trim()),
		lastName: capitalCadena('QUINTERO ORTEGA'.trim()),
		type: 'regular',
		email: 'ZQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4684,
		nationality: 'V'.toUpperCase(),
		cedula: 10535999,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGARANITO'.trim().toLowerCase(),
		name: capitalCadena(' LIDIA '.trim()),
		lastName: capitalCadena('GARANITO TEIXEIRA'.trim()),
		type: 'regular',
		email: 'LGARANITO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3974,
		nationality: 'V'.toUpperCase(),
		cedula: 7884680,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lurojas'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ENRIQUE'.trim()),
		lastName: capitalCadena('ROJAS CASTRO'.trim()),
		type: 'regular',
		email: 'lurojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14242,
		nationality: 'V'.toUpperCase(),
		cedula: 14518576,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JREGALADO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE VIDAL'.trim()),
		lastName: capitalCadena('REGALADO OSORIO'.trim()),
		type: 'regular',
		email: 'JREGALADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4030,
		nationality: 'V'.toUpperCase(),
		cedula: 7908368,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCABELLO'.trim().toLowerCase(),
		name: capitalCadena(' DAYERLYN YESENIA'.trim()),
		lastName: capitalCadena('CABELLO REQUE'.trim()),
		type: 'regular',
		email: 'DCABELLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10804,
		nationality: 'V'.toUpperCase(),
		cedula: 24530007,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'merojas'.trim().toLowerCase(),
		name: capitalCadena(' MELENY NAZARETH'.trim()),
		lastName: capitalCadena('ROJAS AVILA'.trim()),
		type: 'regular',
		email: 'merojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13115,
		nationality: 'V'.toUpperCase(),
		cedula: 20793054,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcivira'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ALEJANDRO'.trim()),
		lastName: capitalCadena('CIVIRA VELASQUEZ'.trim()),
		type: 'regular',
		email: 'mcivira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15402,
		nationality: 'V'.toUpperCase(),
		cedula: 29992820,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adominguez'.trim().toLowerCase(),
		name: capitalCadena(' ANA GABRIELA'.trim()),
		lastName: capitalCadena('DOMINGUEZ LINARES'.trim()),
		type: 'regular',
		email: 'adominguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15589,
		nationality: 'V'.toUpperCase(),
		cedula: 28136232,
		centroTrabajoId: '11',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CANDELARIA-CASABERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KCHACARES'.trim().toLowerCase(),
		name: capitalCadena(' KAREN KAROLINA'.trim()),
		lastName: capitalCadena('CHACARES PADRON'.trim()),
		type: 'regular',
		email: 'KCHACARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9140,
		nationality: 'V'.toUpperCase(),
		cedula: 20506601,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ndasilva'.trim().toLowerCase(),
		name: capitalCadena(' NINOSKA JOSEFINA'.trim()),
		lastName: capitalCadena('DASILVA RIVAS'.trim()),
		type: 'regular',
		email: 'ndasilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13963,
		nationality: 'V'.toUpperCase(),
		cedula: 12643517,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LIROJAS'.trim().toLowerCase(),
		name: capitalCadena(' LILIA KARINA'.trim()),
		lastName: capitalCadena('ROJAS NUÑEZ'.trim()),
		type: 'regular',
		email: 'LIROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14309,
		nationality: 'V'.toUpperCase(),
		cedula: 11343655,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecastellanos'.trim().toLowerCase(),
		name: capitalCadena(' ESTHER ANDREINA'.trim()),
		lastName: capitalCadena('CASTELLANOS NATERA'.trim()),
		type: 'regular',
		email: 'ecastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14648,
		nationality: 'V'.toUpperCase(),
		cedula: 22858465,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSEARODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANDRES'.trim()),
		lastName: capitalCadena('RODRIGUEZ CHACARE'.trim()),
		type: 'regular',
		email: 'JOSEARODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10984,
		nationality: 'V'.toUpperCase(),
		cedula: 27958389,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMONRROY'.trim().toLowerCase(),
		name: capitalCadena(' DEYGLIS CAROLINA'.trim()),
		lastName: capitalCadena('MONRROY BERMUDEZ'.trim()),
		type: 'regular',
		email: 'DMONRROY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2659,
		nationality: 'V'.toUpperCase(),
		cedula: 16024252,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' YURITZA JOSEFINA'.trim()),
		lastName: capitalCadena('RIVAS RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 816,
		nationality: 'V'.toUpperCase(),
		cedula: 10551960,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysalmeron'.trim().toLowerCase(),
		name: capitalCadena(' YSMERYS DEL CARMEN'.trim()),
		lastName: capitalCadena('SALMERON '.trim()),
		type: 'regular',
		email: 'ysalmeron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13475,
		nationality: 'V'.toUpperCase(),
		cedula: 11995546,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edintorres'.trim().toLowerCase(),
		name: capitalCadena(' EDINSO JOSE'.trim()),
		lastName: capitalCadena('TORRES LOZADA'.trim()),
		type: 'regular',
		email: 'edintorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15365,
		nationality: 'V'.toUpperCase(),
		cedula: 21249398,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drodriguez'.trim().toLowerCase(),
		name: capitalCadena(' DAIREN DE JESUS'.trim()),
		lastName: capitalCadena('RODRIGUEZ PEREZ'.trim()),
		type: 'regular',
		email: 'drodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15488,
		nationality: 'V'.toUpperCase(),
		cedula: 23501969,
		centroTrabajoId: '110',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['PUERTO ORDAZ CONTINENTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emoreno'.trim().toLowerCase(),
		name: capitalCadena(' EFRAIN ALEJANDRO'.trim()),
		lastName: capitalCadena('MORENO SEGOVIA'.trim()),
		type: 'regular',
		email: 'emoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10790,
		nationality: 'V'.toUpperCase(),
		cedula: 26553704,
		centroTrabajoId: '112',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIGIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MRAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA CAROLINA'.trim()),
		lastName: capitalCadena('RAMIREZ '.trim()),
		type: 'regular',
		email: 'MRAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12362,
		nationality: 'V'.toUpperCase(),
		cedula: 14255106,
		centroTrabajoId: '112',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIGIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmolina'.trim().toLowerCase(),
		name: capitalCadena(' MAIRA DEL VALLE'.trim()),
		lastName: capitalCadena('MOLINA ROSALES'.trim()),
		type: 'regular',
		email: 'mmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14779,
		nationality: 'V'.toUpperCase(),
		cedula: 14962763,
		centroTrabajoId: '112',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIGIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eibarra'.trim().toLowerCase(),
		name: capitalCadena(' EMIRO JOSUE'.trim()),
		lastName: capitalCadena('IBARRA PAYARES'.trim()),
		type: 'regular',
		email: 'eibarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13004,
		nationality: 'V'.toUpperCase(),
		cedula: 28296180,
		centroTrabajoId: '112',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIGIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'leoliveros'.trim().toLowerCase(),
		name: capitalCadena(' LEIDY PAOLA'.trim()),
		lastName: capitalCadena('OLIVEROS DAVILA'.trim()),
		type: 'regular',
		email: 'leoliveros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15044,
		nationality: 'V'.toUpperCase(),
		cedula: 24551895,
		centroTrabajoId: '112',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIGIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GARAQUE'.trim().toLowerCase(),
		name: capitalCadena(' GLEDYS DEL SOCORRO'.trim()),
		lastName: capitalCadena('ARAQUE PUENTE'.trim()),
		type: 'regular',
		email: 'GARAQUE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12170,
		nationality: 'V'.toUpperCase(),
		cedula: 12115762,
		centroTrabajoId: '112',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIGIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CADIAZ'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN AILIR'.trim()),
		lastName: capitalCadena('DIAZ TUSEN'.trim()),
		type: 'regular',
		email: 'CADIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13100,
		nationality: 'V'.toUpperCase(),
		cedula: 11014276,
		centroTrabajoId: '115',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' AMEL MARIA'.trim()),
		lastName: capitalCadena('FERNANDEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'AMFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13099,
		nationality: 'V'.toUpperCase(),
		cedula: 13074450,
		centroTrabajoId: '115',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rlugo'.trim().toLowerCase(),
		name: capitalCadena(' ROSELYS JOHANA'.trim()),
		lastName: capitalCadena('LUGO GONZALEZ'.trim()),
		type: 'regular',
		email: 'rlugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13101,
		nationality: 'V'.toUpperCase(),
		cedula: 20807052,
		centroTrabajoId: '115',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AALCALA'.trim().toLowerCase(),
		name: capitalCadena(' ANNIBER MARIA'.trim()),
		lastName: capitalCadena('ALCALA BRAVO'.trim()),
		type: 'regular',
		email: 'AALCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13096,
		nationality: 'V'.toUpperCase(),
		cedula: 15882190,
		centroTrabajoId: '115',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALCALDIA DE CASANAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yaguilar'.trim().toLowerCase(),
		name: capitalCadena(' YOSMARY JACKELINE'.trim()),
		lastName: capitalCadena('AGUILAR VILORIA'.trim()),
		type: 'regular',
		email: 'yaguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13726,
		nationality: 'V'.toUpperCase(),
		cedula: 12540809,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YHUZ'.trim().toLowerCase(),
		name: capitalCadena(' YOSELIN DEL CARMEN'.trim()),
		lastName: capitalCadena('HUZ BASTIDAS'.trim()),
		type: 'regular',
		email: 'YHUZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4598,
		nationality: 'V'.toUpperCase(),
		cedula: 13404257,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lduran'.trim().toLowerCase(),
		name: capitalCadena(' LUIS MANUEL'.trim()),
		lastName: capitalCadena('DURAN SOTO'.trim()),
		type: 'regular',
		email: 'lduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13920,
		nationality: 'V'.toUpperCase(),
		cedula: 11614418,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RVILLARREAL'.trim().toLowerCase(),
		name: capitalCadena(' ROSALBA '.trim()),
		lastName: capitalCadena('VILLARREAL GUTIERREZ'.trim()),
		type: 'regular',
		email: 'RVILLARREAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2438,
		nationality: 'V'.toUpperCase(),
		cedula: 14148164,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CPACHECO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ALBERTO'.trim()),
		lastName: capitalCadena('PACHECO SIERVO'.trim()),
		type: 'regular',
		email: 'CPACHECO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12492,
		nationality: 'V'.toUpperCase(),
		cedula: 27628810,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' WILLIAM ENRIQUE'.trim()),
		lastName: capitalCadena('FERNANDEZ ANGULO'.trim()),
		type: 'regular',
		email: 'WFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12861,
		nationality: 'V'.toUpperCase(),
		cedula: 13050156,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgarcia'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS JAVIER'.trim()),
		lastName: capitalCadena('GARCIA RUIZ'.trim()),
		type: 'regular',
		email: 'cgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13661,
		nationality: 'V'.toUpperCase(),
		cedula: 12905026,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'brodriguez'.trim().toLowerCase(),
		name: capitalCadena(' BRAYAN KEVIN'.trim()),
		lastName: capitalCadena('RODRIGUEZ LA CRUZ'.trim()),
		type: 'regular',
		email: 'brodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14966,
		nationality: 'V'.toUpperCase(),
		cedula: 27804751,
		centroTrabajoId: '117',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emolina'.trim().toLowerCase(),
		name: capitalCadena(' ENEIDA RAQUEL'.trim()),
		lastName: capitalCadena('MOLINA DE AULAR'.trim()),
		type: 'regular',
		email: 'emolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13257,
		nationality: 'V'.toUpperCase(),
		cedula: 11767887,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ogarcia'.trim().toLowerCase(),
		name: capitalCadena(' OSIRIS COROMOTO'.trim()),
		lastName: capitalCadena('GARCIA MEDINA'.trim()),
		type: 'regular',
		email: 'ogarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13641,
		nationality: 'V'.toUpperCase(),
		cedula: 11768265,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ygomez'.trim().toLowerCase(),
		name: capitalCadena(' YUREIDYS YUSMYS'.trim()),
		lastName: capitalCadena('GOMEZ '.trim()),
		type: 'regular',
		email: 'ygomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13930,
		nationality: 'V'.toUpperCase(),
		cedula: 18153491,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsanchez'.trim().toLowerCase(),
		name: capitalCadena(' DAVID ALEJANDRO'.trim()),
		lastName: capitalCadena('SANCHEZ '.trim()),
		type: 'regular',
		email: 'dsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13691,
		nationality: 'V'.toUpperCase(),
		cedula: 15386835,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RPOLANCO'.trim().toLowerCase(),
		name: capitalCadena(' RHAYZA CECILIA'.trim()),
		lastName: capitalCadena('POLANCO HURTADO'.trim()),
		type: 'regular',
		email: 'RPOLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12009,
		nationality: 'V'.toUpperCase(),
		cedula: 14227706,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mamedina'.trim().toLowerCase(),
		name: capitalCadena(' MARIA JOSE'.trim()),
		lastName: capitalCadena('MEDINA FLETE'.trim()),
		type: 'regular',
		email: 'mamedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15323,
		nationality: 'V'.toUpperCase(),
		cedula: 24306100,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alugo'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA MARIA'.trim()),
		lastName: capitalCadena('LUGO CHIRINOS'.trim()),
		type: 'regular',
		email: 'alugo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15729,
		nationality: 'V'.toUpperCase(),
		cedula: 17841035,
		centroTrabajoId: '119',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUNTO FIJO-FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' YEIKER ANDRY'.trim()),
		lastName: capitalCadena('SANCHEZ CARDENAS'.trim()),
		type: 'regular',
		email: 'YSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16210,
		nationality: 'V'.toUpperCase(),
		cedula: 21133250,
		centroTrabajoId: '12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA URBINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MEBASTIDAS'.trim().toLowerCase(),
		name: capitalCadena(' MELINA COROMOTO'.trim()),
		lastName: capitalCadena('BASTIDAS RUIZ'.trim()),
		type: 'regular',
		email: 'MEBASTIDAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9577,
		nationality: 'V'.toUpperCase(),
		cedula: 24656401,
		centroTrabajoId: '12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA URBINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CAAGUILERA'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ELOINA'.trim()),
		lastName: capitalCadena('AGUILERA ASTUDILLO'.trim()),
		type: 'regular',
		email: 'CAAGUILERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5543,
		nationality: 'V'.toUpperCase(),
		cedula: 17142442,
		centroTrabajoId: '12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA URBINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSATURNO'.trim().toLowerCase(),
		name: capitalCadena(' ROSEMARY MONICA'.trim()),
		lastName: capitalCadena('SATURNO CAMACHO'.trim()),
		type: 'regular',
		email: 'RSATURNO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4687,
		nationality: 'V'.toUpperCase(),
		cedula: 5313388,
		centroTrabajoId: '12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA URBINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zcontreras'.trim().toLowerCase(),
		name: capitalCadena(' ZUNY DEL PILAR'.trim()),
		lastName: capitalCadena('CONTRERAS DE LA CRUZ'.trim()),
		type: 'regular',
		email: 'zcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15102,
		nationality: 'V'.toUpperCase(),
		cedula: 14559624,
		centroTrabajoId: '12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA URBINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dgarcia'.trim().toLowerCase(),
		name: capitalCadena(' DAILIMAR DE LOS ANGELES'.trim()),
		lastName: capitalCadena('GARCIA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'dgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15479,
		nationality: 'V'.toUpperCase(),
		cedula: 29780337,
		centroTrabajoId: '12',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA URBINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NREYES'.trim().toLowerCase(),
		name: capitalCadena(' NAILY COROMOTO'.trim()),
		lastName: capitalCadena('REYES LEAL'.trim()),
		type: 'regular',
		email: 'NREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13845,
		nationality: 'V'.toUpperCase(),
		cedula: 14397077,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EANDARA'.trim().toLowerCase(),
		name: capitalCadena(' EDIGNA AUXILIADORA'.trim()),
		lastName: capitalCadena('ANDARA DE BLANCO'.trim()),
		type: 'regular',
		email: 'EANDARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11721,
		nationality: 'V'.toUpperCase(),
		cedula: 15915088,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ppartidas'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO MANUEL'.trim()),
		lastName: capitalCadena('PARTIDAS '.trim()),
		type: 'regular',
		email: 'ppartidas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14327,
		nationality: 'V'.toUpperCase(),
		cedula: 10477839,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JALVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' JHOANNY COROMOTO'.trim()),
		lastName: capitalCadena('ALVAREZ '.trim()),
		type: 'regular',
		email: 'JALVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10019,
		nationality: 'V'.toUpperCase(),
		cedula: 19617811,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' FIDIAS JOSE'.trim()),
		lastName: capitalCadena('HERNANDEZ PEROZO'.trim()),
		type: 'regular',
		email: 'FHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12653,
		nationality: 'V'.toUpperCase(),
		cedula: 15556253,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' ROSMARY JOSEFINA'.trim()),
		lastName: capitalCadena('CASTRO RUJANO'.trim()),
		type: 'regular',
		email: 'RCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12824,
		nationality: 'V'.toUpperCase(),
		cedula: 15917648,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hguignan'.trim().toLowerCase(),
		name: capitalCadena(' HERNAN JOSE'.trim()),
		lastName: capitalCadena('GUIGÑAN AULAR'.trim()),
		type: 'regular',
		email: 'hguignan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13702,
		nationality: 'V'.toUpperCase(),
		cedula: 9507296,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OROMERO'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO JOSE'.trim()),
		lastName: capitalCadena('ROMERO PALENCIA'.trim()),
		type: 'regular',
		email: 'OROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14295,
		nationality: 'V'.toUpperCase(),
		cedula: 6865667,
		centroTrabajoId: '122',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CORO I - FALCON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'echiquinquira'.trim().toLowerCase(),
		name: capitalCadena(' ELISABETH CHIQUINQUIRA'.trim()),
		lastName: capitalCadena('GONZALEZ '.trim()),
		type: 'regular',
		email: 'echiquinquira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13456,
		nationality: 'V'.toUpperCase(),
		cedula: 9727712,
		centroTrabajoId: '123',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gemedina'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS VANESSA'.trim()),
		lastName: capitalCadena('MEDINA PIÑA'.trim()),
		type: 'regular',
		email: 'gemedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13974,
		nationality: 'V'.toUpperCase(),
		cedula: 20579272,
		centroTrabajoId: '123',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MOMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' MOISES DAVID'.trim()),
		lastName: capitalCadena('MENDOZA VERA'.trim()),
		type: 'regular',
		email: 'MOMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15901,
		nationality: 'V'.toUpperCase(),
		cedula: 23764559,
		centroTrabajoId: '123',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NIDURAN'.trim().toLowerCase(),
		name: capitalCadena(' NIBIA NAYERLY'.trim()),
		lastName: capitalCadena('DURAN VILLASMIL'.trim()),
		type: 'regular',
		email: 'NIDURAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16177,
		nationality: 'V'.toUpperCase(),
		cedula: 31167275,
		centroTrabajoId: '123',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EFUENMAYOR'.trim().toLowerCase(),
		name: capitalCadena(' ELIZABETH RAMONA'.trim()),
		lastName: capitalCadena('FUENMAYOR GARCIA'.trim()),
		type: 'regular',
		email: 'EFUENMAYOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16271,
		nationality: 'V'.toUpperCase(),
		cedula: 10446924,
		centroTrabajoId: '123',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS HATICOS - MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MYLINARES'.trim().toLowerCase(),
		name: capitalCadena(' MYLEIDI CAROLINA'.trim()),
		lastName: capitalCadena('LINARES RAMIREZ'.trim()),
		type: 'regular',
		email: 'MYLINARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10227,
		nationality: 'V'.toUpperCase(),
		cedula: 25258339,
		centroTrabajoId: '124',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NLIENDO'.trim().toLowerCase(),
		name: capitalCadena(' NAHIRIS DEL SOL'.trim()),
		lastName: capitalCadena('LIENDO MONZON'.trim()),
		type: 'regular',
		email: 'NLIENDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 887,
		nationality: 'V'.toUpperCase(),
		cedula: 12162067,
		centroTrabajoId: '124',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IVGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' IVETTE '.trim()),
		lastName: capitalCadena('GONZALEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'IVGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2352,
		nationality: 'V'.toUpperCase(),
		cedula: 7997634,
		centroTrabajoId: '124',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ICANIZALES'.trim().toLowerCase(),
		name: capitalCadena(' IRAIDA DEL CARMEN'.trim()),
		lastName: capitalCadena('CAÑIZALES VILORIA'.trim()),
		type: 'regular',
		email: 'ICANIZALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10398,
		nationality: 'V'.toUpperCase(),
		cedula: 6235231,
		centroTrabajoId: '124',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcabrera'.trim().toLowerCase(),
		name: capitalCadena(' LOREIDRYCK DEL VALLE'.trim()),
		lastName: capitalCadena('CABRERA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'lcabrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15107,
		nationality: 'V'.toUpperCase(),
		cedula: 27343743,
		centroTrabajoId: '124',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' EVELYN DEL VALLE'.trim()),
		lastName: capitalCadena('MARCANO SALAZAR'.trim()),
		type: 'regular',
		email: 'EMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13212,
		nationality: 'V'.toUpperCase(),
		cedula: 9997342,
		centroTrabajoId: '124',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CC PLANETA SOTAVENTOS MAIQUETIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adgarcia'.trim().toLowerCase(),
		name: capitalCadena(' ADAIN ANTONIA'.trim()),
		lastName: capitalCadena('GARCIA RIVERO'.trim()),
		type: 'regular',
		email: 'adgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14034,
		nationality: 'V'.toUpperCase(),
		cedula: 14895153,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'igonzalez'.trim().toLowerCase(),
		name: capitalCadena(' INGRID GERALDINE'.trim()),
		lastName: capitalCadena('GONZALEZ CARRERA'.trim()),
		type: 'regular',
		email: 'igonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14037,
		nationality: 'V'.toUpperCase(),
		cedula: 17089762,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EPRIMERA'.trim().toLowerCase(),
		name: capitalCadena(' ELISA INES'.trim()),
		lastName: capitalCadena('PRIMERA MAGGIOLO'.trim()),
		type: 'regular',
		email: 'EPRIMERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14072,
		nationality: 'V'.toUpperCase(),
		cedula: 12099411,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HVILLASMIL'.trim().toLowerCase(),
		name: capitalCadena(' HUSSEY CHIQUINQUIRA'.trim()),
		lastName: capitalCadena('VILLASMIL LUZARDO'.trim()),
		type: 'regular',
		email: 'HVILLASMIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10920,
		nationality: 'V'.toUpperCase(),
		cedula: 18005657,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KKILSO'.trim().toLowerCase(),
		name: capitalCadena(' KELVIS KAREL'.trim()),
		lastName: capitalCadena('KILSO GONZALEZ'.trim()),
		type: 'regular',
		email: 'KKILSO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12950,
		nationality: 'V'.toUpperCase(),
		cedula: 12695515,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RBOSCAN'.trim().toLowerCase(),
		name: capitalCadena(' REILLY DEIVID'.trim()),
		lastName: capitalCadena('BOSCAN GARCIA'.trim()),
		type: 'regular',
		email: 'RBOSCAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10482,
		nationality: 'V'.toUpperCase(),
		cedula: 19680584,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvalera'.trim().toLowerCase(),
		name: capitalCadena(' LANDY ALEXANDER'.trim()),
		lastName: capitalCadena('VALERA LEON'.trim()),
		type: 'regular',
		email: 'lvalera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13446,
		nationality: 'V'.toUpperCase(),
		cedula: 12440848,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rrivera'.trim().toLowerCase(),
		name: capitalCadena(' RANDY JOSE'.trim()),
		lastName: capitalCadena('RIVERA VILLALOBOS'.trim()),
		type: 'regular',
		email: 'rrivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14597,
		nationality: 'V'.toUpperCase(),
		cedula: 29749080,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfernandez'.trim().toLowerCase(),
		name: capitalCadena(' JHON ANDRES'.trim()),
		lastName: capitalCadena('FERNANDEZ YGUARAN'.trim()),
		type: 'regular',
		email: 'jfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14599,
		nationality: 'V'.toUpperCase(),
		cedula: 29951345,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yferrer'.trim().toLowerCase(),
		name: capitalCadena(' YOLIMAR DEL CARMEN'.trim()),
		lastName: capitalCadena('FERRER OLIVERO'.trim()),
		type: 'regular',
		email: 'yferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15452,
		nationality: 'V'.toUpperCase(),
		cedula: 24509518,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VARODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' VALERIA ESTEFANY'.trim()),
		lastName: capitalCadena('RODRIGUEZ FERNANDEZ'.trim()),
		type: 'regular',
		email: 'VARODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15706,
		nationality: 'V'.toUpperCase(),
		cedula: 30740029,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YARRAGA'.trim().toLowerCase(),
		name: capitalCadena(' YOJANY DEL CARMEN'.trim()),
		lastName: capitalCadena('ARRAGA BARRETO'.trim()),
		type: 'regular',
		email: 'YARRAGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15714,
		nationality: 'V'.toUpperCase(),
		cedula: 31048662,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' LUIS OMAR'.trim()),
		lastName: capitalCadena('DIAZ LINARES'.trim()),
		type: 'regular',
		email: 'LDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16287,
		nationality: 'V'.toUpperCase(),
		cedula: 18005268,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DLAGUNA'.trim().toLowerCase(),
		name: capitalCadena(' DANN LEIFF'.trim()),
		lastName: capitalCadena('LAGUNA MARTINEZ'.trim()),
		type: 'regular',
		email: 'DLAGUNA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16334,
		nationality: 'V'.toUpperCase(),
		cedula: 14832554,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRIOS'.trim().toLowerCase(),
		name: capitalCadena(' YUMAIRI COROMOTO'.trim()),
		lastName: capitalCadena('RIOS CEGARRA'.trim()),
		type: 'regular',
		email: 'YRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16286,
		nationality: 'V'.toUpperCase(),
		cedula: 16730576,
		centroTrabajoId: '125',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO AV. 5 DE JULIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'judrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' JUDITH CELESTE'.trim()),
		lastName: capitalCadena('RODRIGUEZ CASTILLO'.trim()),
		type: 'regular',
		email: 'judrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14774,
		nationality: 'V'.toUpperCase(),
		cedula: 15254904,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' ARCENIO MANUEL'.trim()),
		lastName: capitalCadena('MARTINEZ MACHADO'.trim()),
		type: 'regular',
		email: 'ARMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3444,
		nationality: 'V'.toUpperCase(),
		cedula: 14233039,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asierra'.trim().toLowerCase(),
		name: capitalCadena(' ANDREA CAROLINA'.trim()),
		lastName: capitalCadena('SIERRA DI PAOLA'.trim()),
		type: 'regular',
		email: 'asierra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15552,
		nationality: 'V'.toUpperCase(),
		cedula: 20690039,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BCARRASCO'.trim().toLowerCase(),
		name: capitalCadena(' BERANGELIS PAOLA'.trim()),
		lastName: capitalCadena('CARRASCO BAYONA'.trim()),
		type: 'regular',
		email: 'BCARRASCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10332,
		nationality: 'V'.toUpperCase(),
		cedula: 23268213,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ybarroso'.trim().toLowerCase(),
		name: capitalCadena(' YUDEINIS JOSEFINA'.trim()),
		lastName: capitalCadena('BARROSO FERNANDEZ'.trim()),
		type: 'regular',
		email: 'ybarroso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10486,
		nationality: 'V'.toUpperCase(),
		cedula: 21039945,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'otorres'.trim().toLowerCase(),
		name: capitalCadena(' OSMAN DARIO'.trim()),
		lastName: capitalCadena('TORRES MUÑOZ'.trim()),
		type: 'regular',
		email: 'otorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13453,
		nationality: 'V'.toUpperCase(),
		cedula: 7639256,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'migutierrez'.trim().toLowerCase(),
		name: capitalCadena(' MILEXIS DEL CARMEN'.trim()),
		lastName: capitalCadena('GUTIERREZ PARADA'.trim()),
		type: 'regular',
		email: 'migutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14772,
		nationality: 'V'.toUpperCase(),
		cedula: 13957615,
		centroTrabajoId: '126',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DEL ROSARIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANOGUERA'.trim().toLowerCase(),
		name: capitalCadena(' ANA ISABEL'.trim()),
		lastName: capitalCadena('NOGUERA DUARTE'.trim()),
		type: 'regular',
		email: 'ANOGUERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8571,
		nationality: 'V'.toUpperCase(),
		cedula: 18637393,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LDELGADO'.trim().toLowerCase(),
		name: capitalCadena(' LUISANA ANDREINA'.trim()),
		lastName: capitalCadena('DELGADO SALAZAR'.trim()),
		type: 'regular',
		email: 'LDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13904,
		nationality: 'V'.toUpperCase(),
		cedula: 16502003,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EGOTOPO'.trim().toLowerCase(),
		name: capitalCadena(' EDWARD JESUS'.trim()),
		lastName: capitalCadena('GOTOPO ARTEAGA'.trim()),
		type: 'regular',
		email: 'EGOTOPO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12578,
		nationality: 'V'.toUpperCase(),
		cedula: 16501755,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANDRY MICHAEL'.trim()),
		lastName: capitalCadena('GONZALEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'AGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12670,
		nationality: 'V'.toUpperCase(),
		cedula: 15860671,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NMONFLEUR'.trim().toLowerCase(),
		name: capitalCadena(' NOEMI DESIREE'.trim()),
		lastName: capitalCadena('MONFLEUR LABADY'.trim()),
		type: 'regular',
		email: 'NMONFLEUR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12929,
		nationality: 'V'.toUpperCase(),
		cedula: 12474003,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' WILMER RAFAEL'.trim()),
		lastName: capitalCadena('CASTILLO ACOSTA'.trim()),
		type: 'regular',
		email: 'WCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16248,
		nationality: 'V'.toUpperCase(),
		cedula: 10230620,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'azapata'.trim().toLowerCase(),
		name: capitalCadena(' ADARILYS YETZABETH'.trim()),
		lastName: capitalCadena('ZAPATA ORTEGA'.trim()),
		type: 'regular',
		email: 'azapata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10369,
		nationality: 'V'.toUpperCase(),
		cedula: 23411083,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' KARLA LORENIS'.trim()),
		lastName: capitalCadena('CASTILLO PAEZ'.trim()),
		type: 'regular',
		email: 'KCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12702,
		nationality: 'V'.toUpperCase(),
		cedula: 14515106,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LECASTRO'.trim().toLowerCase(),
		name: capitalCadena(' LEYDA PATRICIA'.trim()),
		lastName: capitalCadena('CASTRO LOPEZ'.trim()),
		type: 'regular',
		email: 'LECASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12762,
		nationality: 'V'.toUpperCase(),
		cedula: 18436580,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ggilhernandez'.trim().toLowerCase(),
		name: capitalCadena(' GABI DEL CARMEN'.trim()),
		lastName: capitalCadena('GIL HERNANDEZ'.trim()),
		type: 'regular',
		email: 'ggilhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13071,
		nationality: 'V'.toUpperCase(),
		cedula: 29947099,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'halvarado'.trim().toLowerCase(),
		name: capitalCadena(' HILDA EVELYN'.trim()),
		lastName: capitalCadena('ALVARADO PACHECO'.trim()),
		type: 'regular',
		email: 'halvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13675,
		nationality: 'V'.toUpperCase(),
		cedula: 14162739,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elpena'.trim().toLowerCase(),
		name: capitalCadena(' ELVIRA MARGARITA'.trim()),
		lastName: capitalCadena('PEÑA YUSTI'.trim()),
		type: 'regular',
		email: 'elpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15099,
		nationality: 'V'.toUpperCase(),
		cedula: 18746421,
		centroTrabajoId: '127',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CAMORUCO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AIMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' AIXA KATERIN'.trim()),
		lastName: capitalCadena('MENDOZA PASTRAN'.trim()),
		type: 'regular',
		email: 'AIMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8125,
		nationality: 'V'.toUpperCase(),
		cedula: 20249985,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maiherrera'.trim().toLowerCase(),
		name: capitalCadena(' MAIRY DEL CARMEN'.trim()),
		lastName: capitalCadena('HERRERA DE LA HOZ'.trim()),
		type: 'regular',
		email: 'maiherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13760,
		nationality: 'V'.toUpperCase(),
		cedula: 15653549,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOTORREALBA'.trim().toLowerCase(),
		name: capitalCadena(' YOLANDA DEL SOCORRO'.trim()),
		lastName: capitalCadena('TORREALBA MUJICA'.trim()),
		type: 'regular',
		email: 'YOTORREALBA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1690,
		nationality: 'V'.toUpperCase(),
		cedula: 12924995,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MUGARTE'.trim().toLowerCase(),
		name: capitalCadena(' MARY CARMEN'.trim()),
		lastName: capitalCadena('UGARTE DUARTE'.trim()),
		type: 'regular',
		email: 'MUGARTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 788,
		nationality: 'V'.toUpperCase(),
		cedula: 7110384,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YURODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' YULEIDY EDUANDIS'.trim()),
		lastName: capitalCadena('RODRIGUEZ SANCHEZ'.trim()),
		type: 'regular',
		email: 'YURODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6227,
		nationality: 'V'.toUpperCase(),
		cedula: 19666791,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EUGENIA'.trim()),
		lastName: capitalCadena('RODRIGUEZ MONCADA'.trim()),
		type: 'regular',
		email: 'MRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12452,
		nationality: 'V'.toUpperCase(),
		cedula: 19524476,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VVASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' VERONICA IBRAYANA'.trim()),
		lastName: capitalCadena('VASQUEZ RIVERO'.trim()),
		type: 'regular',
		email: 'VVASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15674,
		nationality: 'V'.toUpperCase(),
		cedula: 28529249,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jrojo'.trim().toLowerCase(),
		name: capitalCadena(' JOSELIN ALBANIS'.trim()),
		lastName: capitalCadena('ROJO ZAMBRANO'.trim()),
		type: 'regular',
		email: 'jrojo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15778,
		nationality: 'V'.toUpperCase(),
		cedula: 30647787,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARYORI CAROLINA'.trim()),
		lastName: capitalCadena('GONZALEZ ORTIZ'.trim()),
		type: 'regular',
		email: 'MAGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12581,
		nationality: 'V'.toUpperCase(),
		cedula: 16401181,
		centroTrabajoId: '128',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DIDELGADO'.trim().toLowerCase(),
		name: capitalCadena(' DINALYS CELESTE'.trim()),
		lastName: capitalCadena('DELGADO FERNANDEZ'.trim()),
		type: 'regular',
		email: 'DIDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11571,
		nationality: 'V'.toUpperCase(),
		cedula: 26374361,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gsulbaran'.trim().toLowerCase(),
		name: capitalCadena(' GUELWUIS JOSE'.trim()),
		lastName: capitalCadena('SULBARAN BARRIENTOS'.trim()),
		type: 'regular',
		email: 'gsulbaran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13919,
		nationality: 'V'.toUpperCase(),
		cedula: 15970828,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' MARSSEL SAMUEL'.trim()),
		lastName: capitalCadena('MEDINA CONDE'.trim()),
		type: 'regular',
		email: 'MMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6233,
		nationality: 'V'.toUpperCase(),
		cedula: 12194413,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZALCALA'.trim().toLowerCase(),
		name: capitalCadena(' ZURIMA JOSE'.trim()),
		lastName: capitalCadena('ALCALA YANEZ'.trim()),
		type: 'regular',
		email: 'ZALCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3091,
		nationality: 'V'.toUpperCase(),
		cedula: 10662707,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TAZOCAR'.trim().toLowerCase(),
		name: capitalCadena(' TAXI YOANA'.trim()),
		lastName: capitalCadena('AZOCAR PINTO'.trim()),
		type: 'regular',
		email: 'TAZOCAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2718,
		nationality: 'V'.toUpperCase(),
		cedula: 15636248,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GORTA'.trim().toLowerCase(),
		name: capitalCadena(' GIANCARLA DEL CARMEN'.trim()),
		lastName: capitalCadena('ORTA LIZARDI'.trim()),
		type: 'regular',
		email: 'GORTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12721,
		nationality: 'V'.toUpperCase(),
		cedula: 12598125,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APALMA'.trim().toLowerCase(),
		name: capitalCadena(' ABRIL ANGIEMAR'.trim()),
		lastName: capitalCadena('PALMA CONTRERAS'.trim()),
		type: 'regular',
		email: 'APALMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12774,
		nationality: 'V'.toUpperCase(),
		cedula: 28356734,
		centroTrabajoId: '129',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jocarmona'.trim().toLowerCase(),
		name: capitalCadena(' JOSE VICENTE'.trim()),
		lastName: capitalCadena('CARMONA COLMENARES'.trim()),
		type: 'regular',
		email: 'jocarmona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13335,
		nationality: 'V'.toUpperCase(),
		cedula: 6109145,
		centroTrabajoId: '13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DSANDOVAL'.trim().toLowerCase(),
		name: capitalCadena(' DUBRASKA DANELYS'.trim()),
		lastName: capitalCadena('SANDOVAL OVALLES'.trim()),
		type: 'regular',
		email: 'DSANDOVAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6825,
		nationality: 'V'.toUpperCase(),
		cedula: 20824784,
		centroTrabajoId: '13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALFONSO'.trim()),
		lastName: capitalCadena('CASTRO RAMIREZ'.trim()),
		type: 'regular',
		email: 'LCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 625,
		nationality: 'V'.toUpperCase(),
		cedula: 9246246,
		centroTrabajoId: '13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FABRICENO'.trim().toLowerCase(),
		name: capitalCadena(' FANNY DEL VALLE'.trim()),
		lastName: capitalCadena('BRICEÑO DE HERNANDEZ'.trim()),
		type: 'regular',
		email: 'FABRICENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1920,
		nationality: 'V'.toUpperCase(),
		cedula: 14275202,
		centroTrabajoId: '13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvivas'.trim().toLowerCase(),
		name: capitalCadena(' JOSE JEFERSON'.trim()),
		lastName: capitalCadena('VIVAS HERNANDEZ'.trim()),
		type: 'regular',
		email: 'jvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10528,
		nationality: 'V'.toUpperCase(),
		cedula: 19740843,
		centroTrabajoId: '13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'npinero'.trim().toLowerCase(),
		name: capitalCadena(' NAIDELYS YANELI'.trim()),
		lastName: capitalCadena('PIÑERO RIVAS'.trim()),
		type: 'regular',
		email: 'npinero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12937,
		nationality: 'V'.toUpperCase(),
		cedula: 27796563,
		centroTrabajoId: '13',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA BOULEVARD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JVASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ANTONIO'.trim()),
		lastName: capitalCadena('VASQUEZ SISO'.trim()),
		type: 'regular',
		email: 'JVASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6446,
		nationality: 'V'.toUpperCase(),
		cedula: 5962746,
		centroTrabajoId: '130',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CLUB LA LAGUNITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AALFONZO'.trim().toLowerCase(),
		name: capitalCadena(' ARMANDO RAFAEL'.trim()),
		lastName: capitalCadena('ALFONZO VELÁSQUEZ'.trim()),
		type: 'regular',
		email: 'AALFONZO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11078,
		nationality: 'V'.toUpperCase(),
		cedula: 11143647,
		centroTrabajoId: '130',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CLUB LA LAGUNITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCALANCHE'.trim().toLowerCase(),
		name: capitalCadena(' CIPRIANO '.trim()),
		lastName: capitalCadena('CALANCHE PACHECO'.trim()),
		type: 'regular',
		email: 'CCALANCHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2963,
		nationality: 'V'.toUpperCase(),
		cedula: 9650892,
		centroTrabajoId: '133',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHORONI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymora'.trim().toLowerCase(),
		name: capitalCadena(' YALIESCA ATNELIS'.trim()),
		lastName: capitalCadena('MORA SALAZAR'.trim()),
		type: 'regular',
		email: 'ymora@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15090,
		nationality: 'V'.toUpperCase(),
		cedula: 25070681,
		centroTrabajoId: '133',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHORONI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HFLORES'.trim().toLowerCase(),
		name: capitalCadena(' HEDERLEY PAOLA'.trim()),
		lastName: capitalCadena('FLORES BORGES'.trim()),
		type: 'regular',
		email: 'HFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16250,
		nationality: 'V'.toUpperCase(),
		cedula: 26570797,
		centroTrabajoId: '133',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHORONI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DEGUZMAN'.trim().toLowerCase(),
		name: capitalCadena(' DEISY YAMILETH'.trim()),
		lastName: capitalCadena('GUZMAN GARCIA'.trim()),
		type: 'regular',
		email: 'DEGUZMAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6753,
		nationality: 'V'.toUpperCase(),
		cedula: 15123802,
		centroTrabajoId: '133',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHORONI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANAISANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANAIVIS GRAYAMI'.trim()),
		lastName: capitalCadena('SANCHEZ PIÑATE'.trim()),
		type: 'regular',
		email: 'ANAISANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8890,
		nationality: 'V'.toUpperCase(),
		cedula: 23528253,
		centroTrabajoId: '135',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO MEDICO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SCARPIO'.trim().toLowerCase(),
		name: capitalCadena(' SYREM ARIANA'.trim()),
		lastName: capitalCadena('CARPIO MAURERA'.trim()),
		type: 'regular',
		email: 'SCARPIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15961,
		nationality: 'V'.toUpperCase(),
		cedula: 20528175,
		centroTrabajoId: '135',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO MEDICO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BCALANCHE'.trim().toLowerCase(),
		name: capitalCadena(' BELKIS YANET'.trim()),
		lastName: capitalCadena('CALANCHE HERNANDEZ'.trim()),
		type: 'regular',
		email: 'BCALANCHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2287,
		nationality: 'V'.toUpperCase(),
		cedula: 14787746,
		centroTrabajoId: '135',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO MEDICO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DSIMANCAS'.trim().toLowerCase(),
		name: capitalCadena(' DISMARLY DEL CARMEN'.trim()),
		lastName: capitalCadena('SIMANCAS ANDRADE'.trim()),
		type: 'regular',
		email: 'DSIMANCAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6259,
		nationality: 'V'.toUpperCase(),
		cedula: 19514030,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gegarcia'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS CARIDAD'.trim()),
		lastName: capitalCadena('GARCIA MEZA'.trim()),
		type: 'regular',
		email: 'gegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13957,
		nationality: 'V'.toUpperCase(),
		cedula: 22798734,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OGUZMAN'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA ELISA'.trim()),
		lastName: capitalCadena('GUZMAN RAMIREZ'.trim()),
		type: 'regular',
		email: 'OGUZMAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8668,
		nationality: 'V'.toUpperCase(),
		cedula: 20838440,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'csanchez'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN GREY'.trim()),
		lastName: capitalCadena('SANCHEZ CHACON'.trim()),
		type: 'regular',
		email: 'csanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14904,
		nationality: 'V'.toUpperCase(),
		cedula: 10486715,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' AMBAR DOMENICA'.trim()),
		lastName: capitalCadena('GUTIERREZ ALVAREZ'.trim()),
		type: 'regular',
		email: 'AGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5180,
		nationality: 'V'.toUpperCase(),
		cedula: 17964014,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ADGRATEROL'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA CAROLINA'.trim()),
		lastName: capitalCadena('GRATEROL PIAR'.trim()),
		type: 'regular',
		email: 'ADGRATEROL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9989,
		nationality: 'V'.toUpperCase(),
		cedula: 27600131,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cinfante'.trim().toLowerCase(),
		name: capitalCadena(' CESAR AUGUSTO'.trim()),
		lastName: capitalCadena('INFANTE ALVARADO'.trim()),
		type: 'regular',
		email: 'cinfante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13129,
		nationality: 'V'.toUpperCase(),
		cedula: 17147152,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ESANDIA'.trim().toLowerCase(),
		name: capitalCadena(' EZEQUIEL ANTONIO'.trim()),
		lastName: capitalCadena('SANDIA OQUENDO'.trim()),
		type: 'regular',
		email: 'ESANDIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15641,
		nationality: 'V'.toUpperCase(),
		cedula: 30719066,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MESANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' MELANY YAILYN'.trim()),
		lastName: capitalCadena('SANCHEZ RAMIREZ'.trim()),
		type: 'regular',
		email: 'MESANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15773,
		nationality: 'V'.toUpperCase(),
		cedula: 17907823,
		centroTrabajoId: '14',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CHARALLAVE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nirivas'.trim().toLowerCase(),
		name: capitalCadena(' NINOSKA DEL CARMEN'.trim()),
		lastName: capitalCadena('RIVAS MORENO'.trim()),
		type: 'regular',
		email: 'nirivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13392,
		nationality: 'V'.toUpperCase(),
		cedula: 6194187,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anrojas'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL ADRIAN'.trim()),
		lastName: capitalCadena('ROJAS PEREZ'.trim()),
		type: 'regular',
		email: 'anrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13799,
		nationality: 'V'.toUpperCase(),
		cedula: 11560293,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YEMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA GINETTE'.trim()),
		lastName: capitalCadena('MARTINEZ RIVAS'.trim()),
		type: 'regular',
		email: 'YEMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10216,
		nationality: 'V'.toUpperCase(),
		cedula: 16543849,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('MENDOZA FIGUEROA'.trim()),
		type: 'regular',
		email: 'MARMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8343,
		nationality: 'V'.toUpperCase(),
		cedula: 19966559,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
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
		userName: 'YCARRERA'.trim().toLowerCase(),
		name: capitalCadena(' YERALDY ZAILEX'.trim()),
		lastName: capitalCadena('CARRERA CARRERA'.trim()),
		type: 'regular',
		email: 'YCARRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16381,
		nationality: 'V'.toUpperCase(),
		cedula: 17390414,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NCRESPO'.trim().toLowerCase(),
		name: capitalCadena(' NORMELIS BEATRIZ'.trim()),
		lastName: capitalCadena('CRESPO CORDERO'.trim()),
		type: 'regular',
		email: 'NCRESPO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6257,
		nationality: 'V'.toUpperCase(),
		cedula: 16442506,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JBARRERA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANTONIO'.trim()),
		lastName: capitalCadena('BARRERA MORENO'.trim()),
		type: 'regular',
		email: 'JBARRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4799,
		nationality: 'V'.toUpperCase(),
		cedula: 6811388,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IMORON'.trim().toLowerCase(),
		name: capitalCadena(' IRIS DEL MAR'.trim()),
		lastName: capitalCadena('MORON TORO'.trim()),
		type: 'regular',
		email: 'IMORON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12031,
		nationality: 'V'.toUpperCase(),
		cedula: 18002884,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kbrito'.trim().toLowerCase(),
		name: capitalCadena(' KEILA TATIANA'.trim()),
		lastName: capitalCadena('BRITO FRIAS'.trim()),
		type: 'regular',
		email: 'kbrito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15257,
		nationality: 'V'.toUpperCase(),
		cedula: 18037579,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KARGUINZONES'.trim().toLowerCase(),
		name: capitalCadena(' KATLHEMS NAHOMY ARIADNE'.trim()),
		lastName: capitalCadena('ARGUINZONES RAMIREZ'.trim()),
		type: 'regular',
		email: 'KARGUINZONES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16199,
		nationality: 'V'.toUpperCase(),
		cedula: 28331674,
		centroTrabajoId: '142',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS DOS CAMINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erivera'.trim().toLowerCase(),
		name: capitalCadena(' ELCIDA JANETT'.trim()),
		lastName: capitalCadena('RIVERA ARENAS'.trim()),
		type: 'regular',
		email: 'erivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13685,
		nationality: 'V'.toUpperCase(),
		cedula: 10148460,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BBARRIOS'.trim().toLowerCase(),
		name: capitalCadena(' BEATRIZ ELENA'.trim()),
		lastName: capitalCadena('BARRIOS SOSA'.trim()),
		type: 'regular',
		email: 'BBARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 988,
		nationality: 'V'.toUpperCase(),
		cedula: 8810940,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VGRILLO'.trim().toLowerCase(),
		name: capitalCadena(' VISTELBA NATIVIDAD'.trim()),
		lastName: capitalCadena('GRILLO POLEO'.trim()),
		type: 'regular',
		email: 'VGRILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13197,
		nationality: 'V'.toUpperCase(),
		cedula: 8815853,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GLUGO'.trim().toLowerCase(),
		name: capitalCadena(' GLORIA JOSEFINA'.trim()),
		lastName: capitalCadena('LUGO GARCIA'.trim()),
		type: 'regular',
		email: 'GLUGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11955,
		nationality: 'V'.toUpperCase(),
		cedula: 15555325,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' YOSELIN MAIBETH'.trim()),
		lastName: capitalCadena('SANCHEZ BENITEZ'.trim()),
		type: 'regular',
		email: 'YOSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14038,
		nationality: 'V'.toUpperCase(),
		cedula: 17716621,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAPADRON'.trim().toLowerCase(),
		name: capitalCadena(' MARJORIE BEATRIZ'.trim()),
		lastName: capitalCadena('PADRON NOA'.trim()),
		type: 'regular',
		email: 'MAPADRON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15963,
		nationality: 'V'.toUpperCase(),
		cedula: 16762117,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMACHADO'.trim().toLowerCase(),
		name: capitalCadena(' YILMARIN ANDREINA'.trim()),
		lastName: capitalCadena('MACHADO HERNANDEZ'.trim()),
		type: 'regular',
		email: 'YMACHADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16306,
		nationality: 'V'.toUpperCase(),
		cedula: 21252305,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IRIVERO'.trim().toLowerCase(),
		name: capitalCadena(' IRISMAR '.trim()),
		lastName: capitalCadena('RIVERO AGUILERA'.trim()),
		type: 'regular',
		email: 'IRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9553,
		nationality: 'V'.toUpperCase(),
		cedula: 12122561,
		centroTrabajoId: '144',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA VICTORIA PALMA CENTER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mbolivar'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EUGENIA'.trim()),
		lastName: capitalCadena('BOLIVAR ZAMBRANO'.trim()),
		type: 'regular',
		email: 'mbolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11194,
		nationality: 'V'.toUpperCase(),
		cedula: 9995807,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCASTELIN'.trim().toLowerCase(),
		name: capitalCadena(' LISETT DEL VALLE'.trim()),
		lastName: capitalCadena('CASTELIN FERNANDEZ'.trim()),
		type: 'regular',
		email: 'LCASTELIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13170,
		nationality: 'V'.toUpperCase(),
		cedula: 13541947,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEORTIZ'.trim().toLowerCase(),
		name: capitalCadena(' JEYMY ANDREA'.trim()),
		lastName: capitalCadena('ORTIZ ORTIZ'.trim()),
		type: 'regular',
		email: 'JEORTIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15008,
		nationality: 'V'.toUpperCase(),
		cedula: 14542486,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCARABALLO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ERNESTO'.trim()),
		lastName: capitalCadena('CARABALLO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'CCARABALLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11793,
		nationality: 'V'.toUpperCase(),
		cedula: 17418507,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LNARVAEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUZBENNY DEL VALLE'.trim()),
		lastName: capitalCadena('NARVAEZ GOMEZ'.trim()),
		type: 'regular',
		email: 'LNARVAEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13189,
		nationality: 'V'.toUpperCase(),
		cedula: 11537312,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOHGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' YOHANNYS DEL VALLE'.trim()),
		lastName: capitalCadena('GONZALEZ VASQUEZ'.trim()),
		type: 'regular',
		email: 'YOHGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7296,
		nationality: 'V'.toUpperCase(),
		cedula: 13541030,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfarias'.trim().toLowerCase(),
		name: capitalCadena(' MARIELYS DEL VALLE'.trim()),
		lastName: capitalCadena('FARIAS SERRA'.trim()),
		type: 'regular',
		email: 'mfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9666,
		nationality: 'V'.toUpperCase(),
		cedula: 20904036,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bmarcano'.trim().toLowerCase(),
		name: capitalCadena(' BEATRIZ CAROLINA'.trim()),
		lastName: capitalCadena('MARCANO BERMUDEZ'.trim()),
		type: 'regular',
		email: 'bmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10819,
		nationality: 'V'.toUpperCase(),
		cedula: 17419756,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZLEON'.trim().toLowerCase(),
		name: capitalCadena(' ZUGLEINYS JOSE'.trim()),
		lastName: capitalCadena('LEON VILLARROEL'.trim()),
		type: 'regular',
		email: 'ZLEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12613,
		nationality: 'V'.toUpperCase(),
		cedula: 18401895,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' YRISNEL PAOLA'.trim()),
		lastName: capitalCadena('VELASQUEZ FERRER'.trim()),
		type: 'regular',
		email: 'YVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14965,
		nationality: 'V'.toUpperCase(),
		cedula: 24719318,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecotogno'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO ALEJANDRO'.trim()),
		lastName: capitalCadena('COTOGNO REYES'.trim()),
		type: 'regular',
		email: 'ecotogno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15110,
		nationality: 'V'.toUpperCase(),
		cedula: 19116471,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YPINO'.trim().toLowerCase(),
		name: capitalCadena(' YANETH CAROLINA'.trim()),
		lastName: capitalCadena('PINO VELASQUEZ'.trim()),
		type: 'regular',
		email: 'YPINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16357,
		nationality: 'V'.toUpperCase(),
		cedula: 18940352,
		centroTrabajoId: '146',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nocastillo'.trim().toLowerCase(),
		name: capitalCadena(' NORISBEL REBECA'.trim()),
		lastName: capitalCadena('CASTILLO CAZORLA'.trim()),
		type: 'regular',
		email: 'nocastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13784,
		nationality: 'V'.toUpperCase(),
		cedula: 19912303,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZGRANCE'.trim().toLowerCase(),
		name: capitalCadena(' ZUNILDE ALEJANDRINA'.trim()),
		lastName: capitalCadena('GRANCE BENITEZ'.trim()),
		type: 'regular',
		email: 'ZGRANCE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11822,
		nationality: 'V'.toUpperCase(),
		cedula: 12335093,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marpinto'.trim().toLowerCase(),
		name: capitalCadena(' MARIANELA BEATRIZ'.trim()),
		lastName: capitalCadena('PINTO ALVAREZ'.trim()),
		type: 'regular',
		email: 'marpinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13490,
		nationality: 'V'.toUpperCase(),
		cedula: 10761697,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bcarvallo'.trim().toLowerCase(),
		name: capitalCadena(' BEGLYS ROSARIO'.trim()),
		lastName: capitalCadena('CARVALLO TORRES'.trim()),
		type: 'regular',
		email: 'bcarvallo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13807,
		nationality: 'V'.toUpperCase(),
		cedula: 17552559,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'olopez'.trim().toLowerCase(),
		name: capitalCadena(' OSCAR DOMINGO'.trim()),
		lastName: capitalCadena('LOPEZ TENORIO'.trim()),
		type: 'regular',
		email: 'olopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15582,
		nationality: 'V'.toUpperCase(),
		cedula: 7099396,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emiranda'.trim().toLowerCase(),
		name: capitalCadena(' ERIKA NATHALY'.trim()),
		lastName: capitalCadena('MIRANDA BENITEZ'.trim()),
		type: 'regular',
		email: 'emiranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15629,
		nationality: 'V'.toUpperCase(),
		cedula: 16217496,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'esoto'.trim().toLowerCase(),
		name: capitalCadena(' ESCARLET MICHELL'.trim()),
		lastName: capitalCadena('SOTO PERDOMO'.trim()),
		type: 'regular',
		email: 'esoto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15803,
		nationality: 'V'.toUpperCase(),
		cedula: 29872056,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mvazquez'.trim().toLowerCase(),
		name: capitalCadena(' MARIAN HERNALY'.trim()),
		lastName: capitalCadena('VAZQUEZ SOTELDO'.trim()),
		type: 'regular',
		email: 'mvazquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15869,
		nationality: 'V'.toUpperCase(),
		cedula: 25340213,
		centroTrabajoId: '148',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS GARCITAS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maricastillo'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EUGENIA'.trim()),
		lastName: capitalCadena('CASTILLO ZERPA'.trim()),
		type: 'regular',
		email: 'maricastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13508,
		nationality: 'V'.toUpperCase(),
		cedula: 11458186,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lquintero'.trim().toLowerCase(),
		name: capitalCadena(' LISSETH GUADALUPE'.trim()),
		lastName: capitalCadena('QUINTERO PEREIRA'.trim()),
		type: 'regular',
		email: 'lquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14032,
		nationality: 'V'.toUpperCase(),
		cedula: 17151252,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epulgar'.trim().toLowerCase(),
		name: capitalCadena(' ELEINIS CAROLINA'.trim()),
		lastName: capitalCadena('PULGAR ALDANA'.trim()),
		type: 'regular',
		email: 'epulgar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14036,
		nationality: 'V'.toUpperCase(),
		cedula: 19968615,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'prondon'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO JOSE'.trim()),
		lastName: capitalCadena('RONDON GARCIA'.trim()),
		type: 'regular',
		email: 'prondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13349,
		nationality: 'V'.toUpperCase(),
		cedula: 7857197,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NGALLARDO'.trim().toLowerCase(),
		name: capitalCadena(' NEIDA BEATRIZ'.trim()),
		lastName: capitalCadena('GALLARDO YORIS'.trim()),
		type: 'regular',
		email: 'NGALLARDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12986,
		nationality: 'V'.toUpperCase(),
		cedula: 14266186,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'licastillo'.trim().toLowerCase(),
		name: capitalCadena(' LIVIA MARINA'.trim()),
		lastName: capitalCadena('CASTILLO MONTOYA'.trim()),
		type: 'regular',
		email: 'licastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13333,
		nationality: 'V'.toUpperCase(),
		cedula: 10352938,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASARMIENTO'.trim().toLowerCase(),
		name: capitalCadena(' ANTONY JOSE'.trim()),
		lastName: capitalCadena('SARMIENTO ROJAS'.trim()),
		type: 'regular',
		email: 'ASARMIENTO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11240,
		nationality: 'V'.toUpperCase(),
		cedula: 23765442,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jusalazar'.trim().toLowerCase(),
		name: capitalCadena(' JUAN LUIS'.trim()),
		lastName: capitalCadena('SALAZAR STRUVE'.trim()),
		type: 'regular',
		email: 'jusalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12885,
		nationality: 'V'.toUpperCase(),
		cedula: 27082512,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUACOSTA'.trim().toLowerCase(),
		name: capitalCadena(' YUSMARY ELENA'.trim()),
		lastName: capitalCadena('ACOSTA ULACIO'.trim()),
		type: 'regular',
		email: 'YUACOSTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13059,
		nationality: 'V'.toUpperCase(),
		cedula: 12326565,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jalana'.trim().toLowerCase(),
		name: capitalCadena(' JOVANNA COROMOTO'.trim()),
		lastName: capitalCadena('ALAÑA MORILLO'.trim()),
		type: 'regular',
		email: 'jalana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13599,
		nationality: 'V'.toUpperCase(),
		cedula: 12843925,
		centroTrabajoId: '15',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EARAY'.trim().toLowerCase(),
		name: capitalCadena(' ERIK JAVIER'.trim()),
		lastName: capitalCadena('ARAY '.trim()),
		type: 'regular',
		email: 'EARAY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10495,
		nationality: 'V'.toUpperCase(),
		cedula: 18173643,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aestanga'.trim().toLowerCase(),
		name: capitalCadena(' ANA DE JESUS'.trim()),
		lastName: capitalCadena('ESTANGA '.trim()),
		type: 'regular',
		email: 'aestanga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13647,
		nationality: 'V'.toUpperCase(),
		cedula: 10839460,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HPLAZA'.trim().toLowerCase(),
		name: capitalCadena(' HERIKA CAROLINA'.trim()),
		lastName: capitalCadena('PLAZA ZOTILLO'.trim()),
		type: 'regular',
		email: 'HPLAZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3687,
		nationality: 'V'.toUpperCase(),
		cedula: 19079414,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA JOSEFINA'.trim()),
		lastName: capitalCadena('LOPEZ RENGEL'.trim()),
		type: 'regular',
		email: 'GLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2569,
		nationality: 'V'.toUpperCase(),
		cedula: 16697466,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OPATETE'.trim().toLowerCase(),
		name: capitalCadena(' OSMARIS CAROLINA'.trim()),
		lastName: capitalCadena('PATETE GONZALEZ'.trim()),
		type: 'regular',
		email: 'OPATETE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6127,
		nationality: 'V'.toUpperCase(),
		cedula: 17546918,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JESPINOZA'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ALBERTO'.trim()),
		lastName: capitalCadena('ESPINOZA BRAVO'.trim()),
		type: 'regular',
		email: 'JESPINOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12642,
		nationality: 'V'.toUpperCase(),
		cedula: 26762896,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APALACIOS'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('PALACIOS MARCANO'.trim()),
		type: 'regular',
		email: 'APALACIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12808,
		nationality: 'V'.toUpperCase(),
		cedula: 15050906,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mipalacios'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL JOSE'.trim()),
		lastName: capitalCadena('PALACIOS RIVAS'.trim()),
		type: 'regular',
		email: 'mipalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13352,
		nationality: 'V'.toUpperCase(),
		cedula: 9902275,
		centroTrabajoId: '151',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MATURIN II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AVILLASMIL'.trim().toLowerCase(),
		name: capitalCadena(' ANA MARIA'.trim()),
		lastName: capitalCadena('VILLASMIL OBERTO'.trim()),
		type: 'regular',
		email: 'AVILLASMIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13867,
		nationality: 'V'.toUpperCase(),
		cedula: 18574600,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jocando'.trim().toLowerCase(),
		name: capitalCadena(' JEAN CARLOS'.trim()),
		lastName: capitalCadena('OCANDO PEREZ'.trim()),
		type: 'regular',
		email: 'jocando@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12816,
		nationality: 'V'.toUpperCase(),
		cedula: 14457933,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PPOLANCO'.trim().toLowerCase(),
		name: capitalCadena(' PAUL GERARDO'.trim()),
		lastName: capitalCadena('POLANCO RIOS'.trim()),
		type: 'regular',
		email: 'PPOLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13797,
		nationality: 'V'.toUpperCase(),
		cedula: 18648895,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bobonaga'.trim().toLowerCase(),
		name: capitalCadena(' BLANCA YULITZA'.trim()),
		lastName: capitalCadena('OBONAGA CHIRINOS'.trim()),
		type: 'regular',
		email: 'bobonaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12924,
		nationality: 'V'.toUpperCase(),
		cedula: 27315943,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AUGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' AURIMAR '.trim()),
		lastName: capitalCadena('GONZALEZ QUINTERO'.trim()),
		type: 'regular',
		email: 'AUGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12926,
		nationality: 'V'.toUpperCase(),
		cedula: 9796511,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ELEON'.trim().toLowerCase(),
		name: capitalCadena(' ELIANA REBECA'.trim()),
		lastName: capitalCadena('LEON ROMERO'.trim()),
		type: 'regular',
		email: 'ELEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13025,
		nationality: 'V'.toUpperCase(),
		cedula: 27972283,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCHIRINOS'.trim().toLowerCase(),
		name: capitalCadena(' JAHIZEEL CHIQUINQUIRA'.trim()),
		lastName: capitalCadena('CHIRINOS ORTEGA'.trim()),
		type: 'regular',
		email: 'JCHIRINOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15712,
		nationality: 'V'.toUpperCase(),
		cedula: 30412479,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANILA JOSEFINA'.trim()),
		lastName: capitalCadena('FERNANDEZ DE HERNANDEZ'.trim()),
		type: 'regular',
		email: 'ANFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13545,
		nationality: 'V'.toUpperCase(),
		cedula: 17416614,
		centroTrabajoId: '152',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. BABILON CENTRO SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' FIOMER ISAI'.trim()),
		lastName: capitalCadena('MARTINEZ GARCIA'.trim()),
		type: 'regular',
		email: 'FMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6593,
		nationality: 'V'.toUpperCase(),
		cedula: 19123139,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lesuarez'.trim().toLowerCase(),
		name: capitalCadena(' LEIDY YUREIMA'.trim()),
		lastName: capitalCadena('SUAREZ CONTRERAS'.trim()),
		type: 'regular',
		email: 'lesuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9581,
		nationality: 'V'.toUpperCase(),
		cedula: 18110809,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LESCALONA'.trim().toLowerCase(),
		name: capitalCadena(' LESBIA MARGARITA'.trim()),
		lastName: capitalCadena('ESCALONA PEREZ'.trim()),
		type: 'regular',
		email: 'LESCALONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9788,
		nationality: 'V'.toUpperCase(),
		cedula: 6227883,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YDEHORTA'.trim().toLowerCase(),
		name: capitalCadena(' YULEISI '.trim()),
		lastName: capitalCadena('DE HORTA VALENZUELA'.trim()),
		type: 'regular',
		email: 'YDEHORTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12433,
		nationality: 'V'.toUpperCase(),
		cedula: 21289751,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HPAREDES'.trim().toLowerCase(),
		name: capitalCadena(' HAZEL EVELIN'.trim()),
		lastName: capitalCadena('PAREDES '.trim()),
		type: 'regular',
		email: 'HPAREDES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14859,
		nationality: 'V'.toUpperCase(),
		cedula: 12625367,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IRESTREPO'.trim().toLowerCase(),
		name: capitalCadena(' ISCHELL MAUREN'.trim()),
		lastName: capitalCadena('RESTREPO PEÑALOZA'.trim()),
		type: 'regular',
		email: 'IRESTREPO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16195,
		nationality: 'V'.toUpperCase(),
		cedula: 26747178,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BRMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' BREYDA ISABEL'.trim()),
		lastName: capitalCadena('MENDOZA RONDON'.trim()),
		type: 'regular',
		email: 'BRMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16252,
		nationality: 'V'.toUpperCase(),
		cedula: 18315070,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABELTRAN'.trim().toLowerCase(),
		name: capitalCadena(' AMIRA COROMOTO'.trim()),
		lastName: capitalCadena('BELTRAN AGUILAR'.trim()),
		type: 'regular',
		email: 'ABELTRAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13234,
		nationality: 'V'.toUpperCase(),
		cedula: 10519862,
		centroTrabajoId: '153',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LA TRINIDAD ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ftapias'.trim().toLowerCase(),
		name: capitalCadena(' FLOR DESIREE'.trim()),
		lastName: capitalCadena('TAPIAS RAMIREZ'.trim()),
		type: 'regular',
		email: 'ftapias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14435,
		nationality: 'V'.toUpperCase(),
		cedula: 10803473,
		centroTrabajoId: '155',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GROBLES'.trim().toLowerCase(),
		name: capitalCadena(' GIOJANA CAROL'.trim()),
		lastName: capitalCadena('ROBLES MARTINEZ'.trim()),
		type: 'regular',
		email: 'GROBLES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2405,
		nationality: 'V'.toUpperCase(),
		cedula: 13443923,
		centroTrabajoId: '155',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PSALAS'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA DEL VALLE'.trim()),
		lastName: capitalCadena('SALAS DUARTE'.trim()),
		type: 'regular',
		email: 'PSALAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4111,
		nationality: 'V'.toUpperCase(),
		cedula: 12359070,
		centroTrabajoId: '155',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIANA DEL MILAGRO'.trim()),
		lastName: capitalCadena('MENDEZ CALDERAS'.trim()),
		type: 'regular',
		email: 'MMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15004,
		nationality: 'V'.toUpperCase(),
		cedula: 24559637,
		centroTrabajoId: '155',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marojas'.trim().toLowerCase(),
		name: capitalCadena(' MARIA CAROLINA'.trim()),
		lastName: capitalCadena('ROJAS ROMAN'.trim()),
		type: 'regular',
		email: 'marojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13656,
		nationality: 'V'.toUpperCase(),
		cedula: 16164183,
		centroTrabajoId: '155',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['EUROBUILDING PUERTO ORDAZ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MVANEGAS'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANTONIO'.trim()),
		lastName: capitalCadena('VANEGAS MALAGUERA'.trim()),
		type: 'regular',
		email: 'MVANEGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15566,
		nationality: 'V'.toUpperCase(),
		cedula: 17206775,
		centroTrabajoId: '156',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MZAMUDIO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA CRISTINA'.trim()),
		lastName: capitalCadena('ZAMUDIO CONTRERAS'.trim()),
		type: 'regular',
		email: 'MZAMUDIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12585,
		nationality: 'V'.toUpperCase(),
		cedula: 18289759,
		centroTrabajoId: '156',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'blozano'.trim().toLowerCase(),
		name: capitalCadena(' BLARELVIS ANDREINA'.trim()),
		lastName: capitalCadena('LOZANO ARREVILLA'.trim()),
		type: 'regular',
		email: 'blozano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15447,
		nationality: 'V'.toUpperCase(),
		cedula: 20240753,
		centroTrabajoId: '156',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' EDILBERTO RAMON'.trim()),
		lastName: capitalCadena('GONZALEZ GARCES'.trim()),
		type: 'regular',
		email: 'EDGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15909,
		nationality: 'V'.toUpperCase(),
		cedula: 14663541,
		centroTrabajoId: '156',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DTORRES'.trim().toLowerCase(),
		name: capitalCadena(' DAMELIS '.trim()),
		lastName: capitalCadena('RUJANO TORRES'.trim()),
		type: 'regular',
		email: 'DTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12043,
		nationality: 'V'.toUpperCase(),
		cedula: 21171311,
		centroTrabajoId: '156',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fgonzalez'.trim().toLowerCase(),
		name: capitalCadena(' FREINYS LOREANA'.trim()),
		lastName: capitalCadena('GONZALEZ LOPEZ'.trim()),
		type: 'regular',
		email: 'fgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15474,
		nationality: 'V'.toUpperCase(),
		cedula: 30225895,
		centroTrabajoId: '159',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CLUB PUERTO AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCAMACHO'.trim().toLowerCase(),
		name: capitalCadena(' YUVICENT YULISMAR'.trim()),
		lastName: capitalCadena('CAMACHO MARCANO'.trim()),
		type: 'regular',
		email: 'YCAMACHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15904,
		nationality: 'V'.toUpperCase(),
		cedula: 24177899,
		centroTrabajoId: '159',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CLUB PUERTO AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCAMPOS'.trim().toLowerCase(),
		name: capitalCadena(' LUCIA FERNANDA'.trim()),
		lastName: capitalCadena('CAMPOS GOBERDHAN'.trim()),
		type: 'regular',
		email: 'LCAMPOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4602,
		nationality: 'V'.toUpperCase(),
		cedula: 16814125,
		centroTrabajoId: '159',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CLUB PUERTO AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NCASERTA'.trim().toLowerCase(),
		name: capitalCadena(' NATHALY DEL VALLE'.trim()),
		lastName: capitalCadena('CASERTA '.trim()),
		type: 'regular',
		email: 'NCASERTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11351,
		nationality: 'V'.toUpperCase(),
		cedula: 19880848,
		centroTrabajoId: '16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCOLINA'.trim().toLowerCase(),
		name: capitalCadena(' MIGDALIA JOSEFINA'.trim()),
		lastName: capitalCadena('COLINA LOPEZ'.trim()),
		type: 'regular',
		email: 'MCOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8110,
		nationality: 'V'.toUpperCase(),
		cedula: 10966096,
		centroTrabajoId: '16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gmarin'.trim().toLowerCase(),
		name: capitalCadena(' GUSMAN ANTONIO'.trim()),
		lastName: capitalCadena('MARIN ATACHO'.trim()),
		type: 'regular',
		email: 'gmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10073,
		nationality: 'V'.toUpperCase(),
		cedula: 19442333,
		centroTrabajoId: '16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ssoler'.trim().toLowerCase(),
		name: capitalCadena(' SAIDA MARGARITA'.trim()),
		lastName: capitalCadena('SOLER GUANIPA'.trim()),
		type: 'regular',
		email: 'ssoler@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14084,
		nationality: 'V'.toUpperCase(),
		cedula: 9733659,
		centroTrabajoId: '16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIJIMENEZ'.trim().toLowerCase(),
		name: capitalCadena(' MIRNA ISABEL'.trim()),
		lastName: capitalCadena('JIMENEZ PAREJA'.trim()),
		type: 'regular',
		email: 'MIJIMENEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4043,
		nationality: 'V'.toUpperCase(),
		cedula: 15980037,
		centroTrabajoId: '16',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LOS TAQUES - FALCÓN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANATRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANA TERESITA DE JESUS'.trim()),
		lastName: capitalCadena('RODRIGUEZ DE JIMENEZ'.trim()),
		type: 'regular',
		email: 'ANATRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16269,
		nationality: 'V'.toUpperCase(),
		cedula: 12192588,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isalazar'.trim().toLowerCase(),
		name: capitalCadena(' INGRYDS CAROLINA'.trim()),
		lastName: capitalCadena('SALAZAR SALAZAR'.trim()),
		type: 'regular',
		email: 'isalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13998,
		nationality: 'V'.toUpperCase(),
		cedula: 16930688,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPINTO'.trim().toLowerCase(),
		name: capitalCadena(' MAIRET DARIANA'.trim()),
		lastName: capitalCadena('PINTO GONZALEZ'.trim()),
		type: 'regular',
		email: 'MPINTO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16270,
		nationality: 'V'.toUpperCase(),
		cedula: 15025171,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' WILLMARI YARAHI'.trim()),
		lastName: capitalCadena('RODRIGUEZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'WRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7148,
		nationality: 'V'.toUpperCase(),
		cedula: 19897693,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DANCEDENO'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ALEXANDER'.trim()),
		lastName: capitalCadena('CEDEÑO ROJAS'.trim()),
		type: 'regular',
		email: 'DANCEDENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11304,
		nationality: 'V'.toUpperCase(),
		cedula: 20324460,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ltiberio'.trim().toLowerCase(),
		name: capitalCadena(' LIRGUIS RAFAEL'.trim()),
		lastName: capitalCadena('TIBERIO COVA'.trim()),
		type: 'regular',
		email: 'ltiberio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13062,
		nationality: 'V'.toUpperCase(),
		cedula: 16931706,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jramirez'.trim().toLowerCase(),
		name: capitalCadena(' JEORGINA VANESSA'.trim()),
		lastName: capitalCadena('RAMIREZ FERMIN'.trim()),
		type: 'regular',
		email: 'jramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13131,
		nationality: 'V'.toUpperCase(),
		cedula: 26243851,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kpestana'.trim().toLowerCase(),
		name: capitalCadena(' KEETER JOSE'.trim()),
		lastName: capitalCadena('PESTANA DA COSTA'.trim()),
		type: 'regular',
		email: 'kpestana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14254,
		nationality: 'V'.toUpperCase(),
		cedula: 11232487,
		centroTrabajoId: '161',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PORLAMAR CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AORONO'.trim().toLowerCase(),
		name: capitalCadena(' AURISERG CAROLINA'.trim()),
		lastName: capitalCadena('OROÑO ROMERO'.trim()),
		type: 'regular',
		email: 'AORONO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5399,
		nationality: 'V'.toUpperCase(),
		cedula: 16846523,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maestrada'.trim().toLowerCase(),
		name: capitalCadena(' MARJORIE CHIQUINQUIR'.trim()),
		lastName: capitalCadena('ESTRADA BASALO'.trim()),
		type: 'regular',
		email: 'maestrada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13491,
		nationality: 'V'.toUpperCase(),
		cedula: 16302024,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'falbornoz'.trim().toLowerCase(),
		name: capitalCadena(' FRANK JOSE'.trim()),
		lastName: capitalCadena('ALBORNOZ PIÑA'.trim()),
		type: 'regular',
		email: 'falbornoz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14469,
		nationality: 'V'.toUpperCase(),
		cedula: 20742663,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABORJAS'.trim().toLowerCase(),
		name: capitalCadena(' AILEN CAROLINA'.trim()),
		lastName: capitalCadena('BORJAS GRATEROL'.trim()),
		type: 'regular',
		email: 'ABORJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12574,
		nationality: 'V'.toUpperCase(),
		cedula: 17647898,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABRACHO'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA DESIREE'.trim()),
		lastName: capitalCadena('BRACHO ACOSTA'.trim()),
		type: 'regular',
		email: 'ABRACHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2008,
		nationality: 'V'.toUpperCase(),
		cedula: 15442429,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OMNAVA'.trim().toLowerCase(),
		name: capitalCadena(' OMAR JOSE'.trim()),
		lastName: capitalCadena('NAVA CHIRINOS'.trim()),
		type: 'regular',
		email: 'OMNAVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9684,
		nationality: 'V'.toUpperCase(),
		cedula: 26820022,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hbriceno'.trim().toLowerCase(),
		name: capitalCadena(' HEBERTO JOSE'.trim()),
		lastName: capitalCadena('BRICEÑO ALBORNOZ'.trim()),
		type: 'regular',
		email: 'hbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14928,
		nationality: 'V'.toUpperCase(),
		cedula: 18397803,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emaita'.trim().toLowerCase(),
		name: capitalCadena(' EDNA MARIAN'.trim()),
		lastName: capitalCadena('MAITA VILORIA'.trim()),
		type: 'regular',
		email: 'emaita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14930,
		nationality: 'V'.toUpperCase(),
		cedula: 20855010,
		centroTrabajoId: '162',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD OJEDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JONAVARRO'.trim().toLowerCase(),
		name: capitalCadena(' JOELI CAROLINA'.trim()),
		lastName: capitalCadena('NAVARRO ASPURUA'.trim()),
		type: 'regular',
		email: 'JONAVARRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4792,
		nationality: 'V'.toUpperCase(),
		cedula: 15239932,
		centroTrabajoId: '163',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iescobar'.trim().toLowerCase(),
		name: capitalCadena(' ISAMAR MARGARITA'.trim()),
		lastName: capitalCadena('ESCOBAR GUTIERREZ'.trim()),
		type: 'regular',
		email: 'iescobar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10803,
		nationality: 'V'.toUpperCase(),
		cedula: 22764423,
		centroTrabajoId: '163',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rcaldera'.trim().toLowerCase(),
		name: capitalCadena(' ROSANGELA '.trim()),
		lastName: capitalCadena('CALDERA ARGUELLO'.trim()),
		type: 'regular',
		email: 'rcaldera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13944,
		nationality: 'V'.toUpperCase(),
		cedula: 14954574,
		centroTrabajoId: '163',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' SAIMARELIS DEL VALLE'.trim()),
		lastName: capitalCadena('GONZALEZ CEDEÑO'.trim()),
		type: 'regular',
		email: 'SGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1422,
		nationality: 'V'.toUpperCase(),
		cedula: 11044427,
		centroTrabajoId: '163',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JTORREALBA'.trim().toLowerCase(),
		name: capitalCadena(' JAIRO LEONARD'.trim()),
		lastName: capitalCadena('TORREALBA BLANCO'.trim()),
		type: 'regular',
		email: 'JTORREALBA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12710,
		nationality: 'V'.toUpperCase(),
		cedula: 17147106,
		centroTrabajoId: '163',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CNIEVES'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN JUDITH'.trim()),
		lastName: capitalCadena('NIEVES SILVA'.trim()),
		type: 'regular',
		email: 'CNIEVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13056,
		nationality: 'V'.toUpperCase(),
		cedula: 10275366,
		centroTrabajoId: '163',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL LOS TEQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RNIEVES'.trim().toLowerCase(),
		name: capitalCadena(' RAMON EDUARDO'.trim()),
		lastName: capitalCadena('NIEVES HERNANDEZ'.trim()),
		type: 'regular',
		email: 'RNIEVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4775,
		nationality: 'V'.toUpperCase(),
		cedula: 18803430,
		centroTrabajoId: '164',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SOMBRERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOVASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALI'.trim()),
		lastName: capitalCadena('VASQUEZ ROJAS'.trim()),
		type: 'regular',
		email: 'JOVASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7151,
		nationality: 'V'.toUpperCase(),
		cedula: 18219475,
		centroTrabajoId: '164',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SOMBRERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ENRIQUE'.trim()),
		lastName: capitalCadena('FERNANDEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'LUFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7150,
		nationality: 'V'.toUpperCase(),
		cedula: 20247468,
		centroTrabajoId: '164',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SOMBRERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DVIVAS'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA LISMAR'.trim()),
		lastName: capitalCadena('VIVAS PEREZ'.trim()),
		type: 'regular',
		email: 'DVIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7226,
		nationality: 'V'.toUpperCase(),
		cedula: 14238617,
		centroTrabajoId: '164',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SOMBRERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOBOLIVAR'.trim().toLowerCase(),
		name: capitalCadena(' JOSE BALTAZAR'.trim()),
		lastName: capitalCadena('BOLIVAR SEIJAS'.trim()),
		type: 'regular',
		email: 'JOBOLIVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8202,
		nationality: 'V'.toUpperCase(),
		cedula: 18175644,
		centroTrabajoId: '164',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SOMBRERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PLAYA'.trim().toLowerCase(),
		name: capitalCadena(' PRISCA RAMONA'.trim()),
		lastName: capitalCadena('LAYA '.trim()),
		type: 'regular',
		email: 'PLAYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4678,
		nationality: 'V'.toUpperCase(),
		cedula: 8769833,
		centroTrabajoId: '164',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SOMBRERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KASALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' KAREN MAGDIEL'.trim()),
		lastName: capitalCadena('SALAZAR PIÑA'.trim()),
		type: 'regular',
		email: 'KASALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10852,
		nationality: 'V'.toUpperCase(),
		cedula: 20188816,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbecerra'.trim().toLowerCase(),
		name: capitalCadena(' JULIO MOISES'.trim()),
		lastName: capitalCadena('BECERRA ARRIECHE'.trim()),
		type: 'regular',
		email: 'jbecerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9276,
		nationality: 'V'.toUpperCase(),
		cedula: 20236762,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCHAVEZ'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ELENA'.trim()),
		lastName: capitalCadena('CHAVEZ CHIRINOS'.trim()),
		type: 'regular',
		email: 'CCHAVEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1032,
		nationality: 'V'.toUpperCase(),
		cedula: 12023808,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEESCALONA'.trim().toLowerCase(),
		name: capitalCadena(' JESUS EDUARDO'.trim()),
		lastName: capitalCadena('ESCALONA SILVA'.trim()),
		type: 'regular',
		email: 'JEESCALONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4110,
		nationality: 'V'.toUpperCase(),
		cedula: 7382003,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ILATINI'.trim().toLowerCase(),
		name: capitalCadena(' IXA ROSNEY'.trim()),
		lastName: capitalCadena('LATINI GIL'.trim()),
		type: 'regular',
		email: 'ILATINI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12722,
		nationality: 'V'.toUpperCase(),
		cedula: 19827805,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALZAPATA'.trim().toLowerCase(),
		name: capitalCadena(' ALEXAMAR VANESSA'.trim()),
		lastName: capitalCadena('ZAPATA ROJAS'.trim()),
		type: 'regular',
		email: 'ALZAPATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12806,
		nationality: 'V'.toUpperCase(),
		cedula: 20188975,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cahernandez'.trim().toLowerCase(),
		name: capitalCadena(' CAROLINA LISBETH'.trim()),
		lastName: capitalCadena('HERNANDEZ COLMENAREZ'.trim()),
		type: 'regular',
		email: 'cahernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15806,
		nationality: 'V'.toUpperCase(),
		cedula: 17507423,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' YAENGLIZ DURLEY'.trim()),
		lastName: capitalCadena('MENDEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5111,
		nationality: 'V'.toUpperCase(),
		cedula: 13084793,
		centroTrabajoId: '165',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL METROPOLIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PADIAZ'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA DEL CARMEN'.trim()),
		lastName: capitalCadena('DIAZ VICTORA'.trim()),
		type: 'regular',
		email: 'PADIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6701,
		nationality: 'V'.toUpperCase(),
		cedula: 21345578,
		centroTrabajoId: '166',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA MONICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SRANGEL'.trim().toLowerCase(),
		name: capitalCadena(' STEPHANY SOLANYEL'.trim()),
		lastName: capitalCadena('RANGEL PEÑA'.trim()),
		type: 'regular',
		email: 'SRANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11420,
		nationality: 'V'.toUpperCase(),
		cedula: 27309223,
		centroTrabajoId: '166',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA MONICA']
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
		userName: 'JPLESSMANN'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RAFAEL'.trim()),
		lastName: capitalCadena('PLESSMANN MARQUIS'.trim()),
		type: 'regular',
		email: 'JPLESSMANN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5273,
		nationality: 'V'.toUpperCase(),
		cedula: 6029852,
		centroTrabajoId: '166',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA MONICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccampos'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN DAYANIRA'.trim()),
		lastName: capitalCadena('CAMPOS MARTINEZ'.trim()),
		type: 'regular',
		email: 'ccampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13240,
		nationality: 'V'.toUpperCase(),
		cedula: 10094598,
		centroTrabajoId: '166',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA MONICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' VIRGILIO '.trim()),
		lastName: capitalCadena('FERNANDEZ DELGADO'.trim()),
		type: 'regular',
		email: 'VFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4238,
		nationality: 'V'.toUpperCase(),
		cedula: 5652457,
		centroTrabajoId: '166',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA MONICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'midiaz'.trim().toLowerCase(),
		name: capitalCadena(' MIRIAM '.trim()),
		lastName: capitalCadena('DIAZ CARMONA'.trim()),
		type: 'regular',
		email: 'midiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15543,
		nationality: 'V'.toUpperCase(),
		cedula: 12784356,
		centroTrabajoId: '166',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA MONICA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hegarcia'.trim().toLowerCase(),
		name: capitalCadena(' HEIDI ADRIANA'.trim()),
		lastName: capitalCadena('GARCIA RENGIFO'.trim()),
		type: 'regular',
		email: 'hegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13735,
		nationality: 'V'.toUpperCase(),
		cedula: 12281774,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ejimenez'.trim().toLowerCase(),
		name: capitalCadena(' ERLENIS GABRIELA'.trim()),
		lastName: capitalCadena('JIMENEZ SOTO'.trim()),
		type: 'regular',
		email: 'ejimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14116,
		nationality: 'V'.toUpperCase(),
		cedula: 21308599,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASULBARAN'.trim().toLowerCase(),
		name: capitalCadena(' ALBANO ENRIQUE'.trim()),
		lastName: capitalCadena('SULBARAN UZCATEGUI'.trim()),
		type: 'regular',
		email: 'ASULBARAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1101,
		nationality: 'V'.toUpperCase(),
		cedula: 5614343,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCA ANTONIA'.trim()),
		lastName: capitalCadena('HERRERA MUÑOZ'.trim()),
		type: 'regular',
		email: 'FHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4071,
		nationality: 'V'.toUpperCase(),
		cedula: 10739395,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ECARRASCO'.trim().toLowerCase(),
		name: capitalCadena(' ELIANA DEL VALLE'.trim()),
		lastName: capitalCadena('CARRASCO ALVARADO'.trim()),
		type: 'regular',
		email: 'ECARRASCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11308,
		nationality: 'V'.toUpperCase(),
		cedula: 20498547,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' SINAHI EUGENIA'.trim()),
		lastName: capitalCadena('MEDINA CORREA'.trim()),
		type: 'regular',
		email: 'SMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11568,
		nationality: 'V'.toUpperCase(),
		cedula: 20513815,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BFLORES'.trim().toLowerCase(),
		name: capitalCadena(' BLAIMAR YOLIBETH'.trim()),
		lastName: capitalCadena('FLORES CAMACHO'.trim()),
		type: 'regular',
		email: 'BFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12200,
		nationality: 'V'.toUpperCase(),
		cedula: 19108885,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AGARCE'.trim().toLowerCase(),
		name: capitalCadena(' ALBANYS DANIELA'.trim()),
		lastName: capitalCadena('GARCE SANCHEZ'.trim()),
		type: 'regular',
		email: 'AGARCE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15671,
		nationality: 'V'.toUpperCase(),
		cedula: 30391306,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LRONDON'.trim().toLowerCase(),
		name: capitalCadena(' LILIANA DEL CARMEN'.trim()),
		lastName: capitalCadena('RONDON '.trim()),
		type: 'regular',
		email: 'LRONDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15958,
		nationality: 'V'.toUpperCase(),
		cedula: 16615794,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO ANTONIO'.trim()),
		lastName: capitalCadena('SANCHEZ QUIÑONEZ'.trim()),
		type: 'regular',
		email: 'OSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 414,
		nationality: 'V'.toUpperCase(),
		cedula: 11525362,
		centroTrabajoId: '168',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['C.C. METRÓPOLIS VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oarredondo'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO JAVIER'.trim()),
		lastName: capitalCadena('ARREDONDO VELAZCO'.trim()),
		type: 'regular',
		email: 'oarredondo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13752,
		nationality: 'V'.toUpperCase(),
		cedula: 11363516,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrsanchez'.trim().toLowerCase(),
		name: capitalCadena(' YRVIS ATERINA'.trim()),
		lastName: capitalCadena('SANCHEZ BRAVO'.trim()),
		type: 'regular',
		email: 'yrsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13772,
		nationality: 'V'.toUpperCase(),
		cedula: 7963523,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANA DEL VALLE'.trim()),
		lastName: capitalCadena('GOMEZ SMITH'.trim()),
		type: 'regular',
		email: 'ANGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14788,
		nationality: 'V'.toUpperCase(),
		cedula: 7871001,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alreyes'.trim().toLowerCase(),
		name: capitalCadena(' ALFREDO JOSE'.trim()),
		lastName: capitalCadena('REYES BARRERA'.trim()),
		type: 'regular',
		email: 'alreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9603,
		nationality: 'V'.toUpperCase(),
		cedula: 19747507,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'magarcia'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL ANDRES'.trim()),
		lastName: capitalCadena('GARCIA '.trim()),
		type: 'regular',
		email: 'magarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12886,
		nationality: 'V'.toUpperCase(),
		cedula: 17675057,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSILVA'.trim().toLowerCase(),
		name: capitalCadena(' JOEGLIS JOSEFINA'.trim()),
		lastName: capitalCadena('SILVA ACOSTA'.trim()),
		type: 'regular',
		email: 'JSILVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16364,
		nationality: 'V'.toUpperCase(),
		cedula: 18482154,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMOYA'.trim().toLowerCase(),
		name: capitalCadena(' ANDRES ALEXANDER'.trim()),
		lastName: capitalCadena('MOYA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'AMOYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12505,
		nationality: 'V'.toUpperCase(),
		cedula: 16832007,
		centroTrabajoId: '169',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FCORDOVA'.trim().toLowerCase(),
		name: capitalCadena(' FELIMER NAZARET'.trim()),
		lastName: capitalCadena('CORDOVA CUNEMO'.trim()),
		type: 'regular',
		email: 'FCORDOVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14301,
		nationality: 'V'.toUpperCase(),
		cedula: 21231312,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIVILLARROEL'.trim().toLowerCase(),
		name: capitalCadena(' MILAGROS EDITH'.trim()),
		lastName: capitalCadena('VILLAROEL DE FIGUERA'.trim()),
		type: 'regular',
		email: 'MIVILLARROEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15031,
		nationality: 'V'.toUpperCase(),
		cedula: 10545244,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acroce'.trim().toLowerCase(),
		name: capitalCadena(' ANDRY CAROLINA'.trim()),
		lastName: capitalCadena('CROCE COBOS'.trim()),
		type: 'regular',
		email: 'acroce@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13885,
		nationality: 'V'.toUpperCase(),
		cedula: 19154141,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AURBAEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANA MARIA'.trim()),
		lastName: capitalCadena('URBAEZ '.trim()),
		type: 'regular',
		email: 'AURBAEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8001,
		nationality: 'V'.toUpperCase(),
		cedula: 10180263,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SDEBARON'.trim().toLowerCase(),
		name: capitalCadena(' SONIA TERESA'.trim()),
		lastName: capitalCadena('MARTINEZ DE BARON'.trim()),
		type: 'regular',
		email: 'SDEBARON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 606,
		nationality: 'V'.toUpperCase(),
		cedula: 6085226,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMOYA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EUGENIA'.trim()),
		lastName: capitalCadena('MOYA GUTIERREZ'.trim()),
		type: 'regular',
		email: 'MMOYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3043,
		nationality: 'V'.toUpperCase(),
		cedula: 16413310,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmaita'.trim().toLowerCase(),
		name: capitalCadena(' KARLA DEL VALLE'.trim()),
		lastName: capitalCadena('MAITA DE BOLIVAR'.trim()),
		type: 'regular',
		email: 'kmaita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15425,
		nationality: 'V'.toUpperCase(),
		cedula: 17442847,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcastro'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN ALBERTO'.trim()),
		lastName: capitalCadena('CASTRO DIAZ'.trim()),
		type: 'regular',
		email: 'jcastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15427,
		nationality: 'V'.toUpperCase(),
		cedula: 26528408,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'operez'.trim().toLowerCase(),
		name: capitalCadena(' OGLASS NILEVE'.trim()),
		lastName: capitalCadena('PEREZ SUAREZ'.trim()),
		type: 'regular',
		email: 'operez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15614,
		nationality: 'V'.toUpperCase(),
		cedula: 20754895,
		centroTrabajoId: '171',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE AV. INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EAGUILERA'.trim().toLowerCase(),
		name: capitalCadena(' EMMA ROSALIA'.trim()),
		lastName: capitalCadena('AGUILERA RIVERO'.trim()),
		type: 'regular',
		email: 'EAGUILERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6363,
		nationality: 'V'.toUpperCase(),
		cedula: 15706657,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HPEREIRA'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR JESUS'.trim()),
		lastName: capitalCadena('PEREIRA TAYUPO'.trim()),
		type: 'regular',
		email: 'HPEREIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11254,
		nationality: 'V'.toUpperCase(),
		cedula: 18981587,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yguayapero'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA MERCEDES'.trim()),
		lastName: capitalCadena('GUAYAPERO '.trim()),
		type: 'regular',
		email: 'yguayapero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10986,
		nationality: 'V'.toUpperCase(),
		cedula: 8485757,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hbetancourt'.trim().toLowerCase(),
		name: capitalCadena(' HINGERBERT LING'.trim()),
		lastName: capitalCadena('BETANCOURT MARTINEZ'.trim()),
		type: 'regular',
		email: 'hbetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10606,
		nationality: 'V'.toUpperCase(),
		cedula: 20547492,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmaneiro'.trim().toLowerCase(),
		name: capitalCadena(' MONICA PATRICIA'.trim()),
		lastName: capitalCadena('MANEIRO ACOSTA'.trim()),
		type: 'regular',
		email: 'mmaneiro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14167,
		nationality: 'V'.toUpperCase(),
		cedula: 22574547,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSERUIZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANGEL'.trim()),
		lastName: capitalCadena('RUIZ MAITA'.trim()),
		type: 'regular',
		email: 'JOSERUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16204,
		nationality: 'V'.toUpperCase(),
		cedula: 17871488,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NBASTIDAS'.trim().toLowerCase(),
		name: capitalCadena(' NURY YANETH'.trim()),
		lastName: capitalCadena('BASTIDAS DELGADO'.trim()),
		type: 'regular',
		email: 'NBASTIDAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16386,
		nationality: 'V'.toUpperCase(),
		cedula: 12960183,
		centroTrabajoId: '172',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS MARIAN'.trim()),
		lastName: capitalCadena('DE JESUS PEREZ'.trim()),
		type: 'regular',
		email: 'GPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13927,
		nationality: 'V'.toUpperCase(),
		cedula: 19156860,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANCONTRERAS'.trim().toLowerCase(),
		name: capitalCadena(' ANA YELITZA'.trim()),
		lastName: capitalCadena('CONTRERAS GARCIA'.trim()),
		type: 'regular',
		email: 'ANCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11953,
		nationality: 'V'.toUpperCase(),
		cedula: 18990406,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGUZMAN'.trim().toLowerCase(),
		name: capitalCadena(' JULIA NOREIDA'.trim()),
		lastName: capitalCadena('GUZMAN CASTRO'.trim()),
		type: 'regular',
		email: 'JGUZMAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6670,
		nationality: 'V'.toUpperCase(),
		cedula: 10626585,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' STEFANNY JOSEPH'.trim()),
		lastName: capitalCadena('VELASQUEZ LEON'.trim()),
		type: 'regular',
		email: 'SVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11988,
		nationality: 'V'.toUpperCase(),
		cedula: 29837171,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AOLIVERO'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA ANAIS'.trim()),
		lastName: capitalCadena('OLIVERO ALVAREZ'.trim()),
		type: 'regular',
		email: 'AOLIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12571,
		nationality: 'V'.toUpperCase(),
		cedula: 18691451,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RAMON'.trim()),
		lastName: capitalCadena('CASTILLO RAMIREZ'.trim()),
		type: 'regular',
		email: 'JCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12677,
		nationality: 'V'.toUpperCase(),
		cedula: 25477347,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wiperez'.trim().toLowerCase(),
		name: capitalCadena(' WILLIAM ALEXANDER'.trim()),
		lastName: capitalCadena('PEREZ CONTRERAS'.trim()),
		type: 'regular',
		email: 'wiperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12904,
		nationality: 'V'.toUpperCase(),
		cedula: 17571008,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PDELGADO'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO FELIX'.trim()),
		lastName: capitalCadena('DELGADO COVA'.trim()),
		type: 'regular',
		email: 'PDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2727,
		nationality: 'V'.toUpperCase(),
		cedula: 7213550,
		centroTrabajoId: '175',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccolon'.trim().toLowerCase(),
		name: capitalCadena(' CRISMAR CAROLINA'.trim()),
		lastName: capitalCadena('COLON DELGADO'.trim()),
		type: 'regular',
		email: 'ccolon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14077,
		nationality: 'V'.toUpperCase(),
		cedula: 18205583,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' VICTOR MANUEL'.trim()),
		lastName: capitalCadena('MARTINEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'VMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12371,
		nationality: 'V'.toUpperCase(),
		cedula: 22878477,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' JOSE FELIX'.trim()),
		lastName: capitalCadena('RIVAS VILLAROEL'.trim()),
		type: 'regular',
		email: 'JRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12486,
		nationality: 'V'.toUpperCase(),
		cedula: 13767864,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AURGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' AURELINA JOSEFINA'.trim()),
		lastName: capitalCadena('GONZALEZ DOMINGUEZ'.trim()),
		type: 'regular',
		email: 'AURGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16309,
		nationality: 'V'.toUpperCase(),
		cedula: 11904672,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LIGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' LISETH JOSEFINA'.trim()),
		lastName: capitalCadena('GONZALEZ BELLORIN'.trim()),
		type: 'regular',
		email: 'LIGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12440,
		nationality: 'V'.toUpperCase(),
		cedula: 10299397,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YTAUIL'.trim().toLowerCase(),
		name: capitalCadena(' YARIANNY DEL VALLE'.trim()),
		lastName: capitalCadena('TAUIL AGUIRRE'.trim()),
		type: 'regular',
		email: 'YTAUIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11998,
		nationality: 'V'.toUpperCase(),
		cedula: 26916601,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ljimenez'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EDUARDO'.trim()),
		lastName: capitalCadena('JIMENEZ CASANOVA'.trim()),
		type: 'regular',
		email: 'ljimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14977,
		nationality: 'V'.toUpperCase(),
		cedula: 13766349,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSCHARBAY'.trim().toLowerCase(),
		name: capitalCadena(' ROMINA COROMOTO'.trim()),
		lastName: capitalCadena('SCHARBAY RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'RSCHARBAY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15382,
		nationality: 'V'.toUpperCase(),
		cedula: 15191936,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LFUENMAYOR'.trim().toLowerCase(),
		name: capitalCadena(' LIMAR DEL CARMEN'.trim()),
		lastName: capitalCadena('FUENMAYOR '.trim()),
		type: 'regular',
		email: 'LFUENMAYOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16193,
		nationality: 'V'.toUpperCase(),
		cedula: 11421881,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAYGIL'.trim().toLowerCase(),
		name: capitalCadena(' MAYERLING ELENA'.trim()),
		lastName: capitalCadena('GIL VEGAS'.trim()),
		type: 'regular',
		email: 'MAYGIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16247,
		nationality: 'V'.toUpperCase(),
		cedula: 16223696,
		centroTrabajoId: '176',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LECHERIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANGUERRA'.trim().toLowerCase(),
		name: capitalCadena(' ANGELA MARIA'.trim()),
		lastName: capitalCadena('GUERRA DE NUÑEZ'.trim()),
		type: 'regular',
		email: 'ANGUERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7288,
		nationality: 'V'.toUpperCase(),
		cedula: 12664782,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zcastaneda'.trim().toLowerCase(),
		name: capitalCadena(' ZULAY DEL CARMEN'.trim()),
		lastName: capitalCadena('CASTAÑEDA MALAVE'.trim()),
		type: 'regular',
		email: 'zcastaneda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13221,
		nationality: 'V'.toUpperCase(),
		cedula: 10467377,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SCOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' SCARLET ADAMELIS'.trim()),
		lastName: capitalCadena('COLMENARES GAMBOA'.trim()),
		type: 'regular',
		email: 'SCOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7292,
		nationality: 'V'.toUpperCase(),
		cedula: 12165539,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FMATA'.trim().toLowerCase(),
		name: capitalCadena(' FELIZAIDA DEL VALLE'.trim()),
		lastName: capitalCadena('MATA MARQUEZ'.trim()),
		type: 'regular',
		email: 'FMATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3505,
		nationality: 'V'.toUpperCase(),
		cedula: 10952421,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rjimenez'.trim().toLowerCase(),
		name: capitalCadena(' ROMULO SEGUNDO'.trim()),
		lastName: capitalCadena('JIMENEZ ANDUJAR'.trim()),
		type: 'regular',
		email: 'rjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14404,
		nationality: 'V'.toUpperCase(),
		cedula: 12489489,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'admoronta'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA DEL VALLE'.trim()),
		lastName: capitalCadena('MORONTA ALMEIDA'.trim()),
		type: 'regular',
		email: 'admoronta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15247,
		nationality: 'V'.toUpperCase(),
		cedula: 20357503,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCARABALLO'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL ALEJANDRO'.trim()),
		lastName: capitalCadena('CARABALLO GONZALEZ'.trim()),
		type: 'regular',
		email: 'GCARABALLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15252,
		nationality: 'V'.toUpperCase(),
		cedula: 24740211,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMILLAN'.trim().toLowerCase(),
		name: capitalCadena(' YANITZA JOSE'.trim()),
		lastName: capitalCadena('RONDON RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'DMILLAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15764,
		nationality: 'V'.toUpperCase(),
		cedula: 16485261,
		centroTrabajoId: '178',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRAKI CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymartinez'.trim().toLowerCase(),
		name: capitalCadena(' YUSMAIRA '.trim()),
		lastName: capitalCadena('LEON MARTINEZ'.trim()),
		type: 'regular',
		email: 'ymartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13899,
		nationality: 'V'.toUpperCase(),
		cedula: 15892365,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' ISMELY COROMOTO'.trim()),
		lastName: capitalCadena('BLANCO MORANTE'.trim()),
		type: 'regular',
		email: 'IBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4891,
		nationality: 'V'.toUpperCase(),
		cedula: 11670363,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PEHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO JAVIER'.trim()),
		lastName: capitalCadena('HERNANDEZ '.trim()),
		type: 'regular',
		email: 'PEHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9412,
		nationality: 'V'.toUpperCase(),
		cedula: 10891958,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ljaramillo'.trim().toLowerCase(),
		name: capitalCadena(' LUIS MANUEL'.trim()),
		lastName: capitalCadena('JARAMILLO '.trim()),
		type: 'regular',
		email: 'ljaramillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13387,
		nationality: 'V'.toUpperCase(),
		cedula: 12562899,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DURRIETA'.trim().toLowerCase(),
		name: capitalCadena(' DANI YAJAIRA'.trim()),
		lastName: capitalCadena('URRIETA GIL'.trim()),
		type: 'regular',
		email: 'DURRIETA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3899,
		nationality: 'V'.toUpperCase(),
		cedula: 15160850,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OURBANO'.trim().toLowerCase(),
		name: capitalCadena(' OSMARI DORINA'.trim()),
		lastName: capitalCadena('URBANO TORRES'.trim()),
		type: 'regular',
		email: 'OURBANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6261,
		nationality: 'V'.toUpperCase(),
		cedula: 20328019,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kbecerra'.trim().toLowerCase(),
		name: capitalCadena(' KARLEIDYS ALEXANDRA'.trim()),
		lastName: capitalCadena('BECERRA CARRERA'.trim()),
		type: 'regular',
		email: 'kbecerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15396,
		nationality: 'V'.toUpperCase(),
		cedula: 30541591,
		centroTrabajoId: '18',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA TERESA DEL TUY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JABREU'.trim().toLowerCase(),
		name: capitalCadena(' JACKLINMAR LALESCA'.trim()),
		lastName: capitalCadena('ABREU QUINTERO'.trim()),
		type: 'regular',
		email: 'JABREU@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15913,
		nationality: 'V'.toUpperCase(),
		cedula: 26131375,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LALVES'.trim().toLowerCase(),
		name: capitalCadena(' LISETH DAYANA'.trim()),
		lastName: capitalCadena('ALVES MARTINEZ'.trim()),
		type: 'regular',
		email: 'LALVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4339,
		nationality: 'V'.toUpperCase(),
		cedula: 20027216,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DPARICA'.trim().toLowerCase(),
		name: capitalCadena(' DRENNALIZ CELESTE'.trim()),
		lastName: capitalCadena('PARICA DE VERAMENDI'.trim()),
		type: 'regular',
		email: 'DPARICA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6156,
		nationality: 'V'.toUpperCase(),
		cedula: 19678538,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
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
		userName: 'ycampelo'.trim().toLowerCase(),
		name: capitalCadena(' YORATSY LISBETH'.trim()),
		lastName: capitalCadena('CAMPELO GONZALEZ'.trim()),
		type: 'regular',
		email: 'ycampelo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13948,
		nationality: 'V'.toUpperCase(),
		cedula: 16411039,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JREYFREITES'.trim().toLowerCase(),
		name: capitalCadena(' JHEREMY JOSE'.trim()),
		lastName: capitalCadena('REY FREITES'.trim()),
		type: 'regular',
		email: 'JREYFREITES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13088,
		nationality: 'V'.toUpperCase(),
		cedula: 29921995,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jnunez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('NUÑEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'jnunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15360,
		nationality: 'V'.toUpperCase(),
		cedula: 26631860,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FROMERIN'.trim().toLowerCase(),
		name: capitalCadena(' FRANKLIN YOEL'.trim()),
		lastName: capitalCadena('ROMERIN '.trim()),
		type: 'regular',
		email: 'FROMERIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14243,
		nationality: 'V'.toUpperCase(),
		cedula: 13109928,
		centroTrabajoId: '181',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN IGNACIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsequera'.trim().toLowerCase(),
		name: capitalCadena(' ROXANA JOSEFINA'.trim()),
		lastName: capitalCadena('SEQUERA ACEITUNO'.trim()),
		type: 'regular',
		email: 'rsequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13589,
		nationality: 'V'.toUpperCase(),
		cedula: 11361365,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dantequera'.trim().toLowerCase(),
		name: capitalCadena(' DIXON JOSE'.trim()),
		lastName: capitalCadena('ANTEQUERA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'dantequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13922,
		nationality: 'V'.toUpperCase(),
		cedula: 16244388,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RLEAL'.trim().toLowerCase(),
		name: capitalCadena(' ROXEIDA JOSE'.trim()),
		lastName: capitalCadena('LEAL RAMIREZ'.trim()),
		type: 'regular',
		email: 'RLEAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11566,
		nationality: 'V'.toUpperCase(),
		cedula: 23425492,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GGUDINO'.trim().toLowerCase(),
		name: capitalCadena(' GLENDYS GABRIELA'.trim()),
		lastName: capitalCadena('GUDIÑO GARCIA'.trim()),
		type: 'regular',
		email: 'GGUDINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13817,
		nationality: 'V'.toUpperCase(),
		cedula: 16946503,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAGUIRRE'.trim().toLowerCase(),
		name: capitalCadena(' MARYORIS JOSEFINA'.trim()),
		lastName: capitalCadena('AGUIRRE BORJES'.trim()),
		type: 'regular',
		email: 'MAGUIRRE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 237,
		nationality: 'V'.toUpperCase(),
		cedula: 10735531,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MLAROCCA'.trim().toLowerCase(),
		name: capitalCadena(' MARA PATRICIA'.trim()),
		lastName: capitalCadena('LA ROCCA DI PASQUALE'.trim()),
		type: 'regular',
		email: 'MLAROCCA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12620,
		nationality: 'V'.toUpperCase(),
		cedula: 14069024,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lgomez'.trim().toLowerCase(),
		name: capitalCadena(' LUISANA VALENTINA'.trim()),
		lastName: capitalCadena('GOMEZ TORCATES'.trim()),
		type: 'regular',
		email: 'lgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13074,
		nationality: 'V'.toUpperCase(),
		cedula: 31489821,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAMEJIAS'.trim().toLowerCase(),
		name: capitalCadena(' MARIANA ALEJANDRA'.trim()),
		lastName: capitalCadena('MEJIAS MEDINA'.trim()),
		type: 'regular',
		email: 'MAMEJIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15672,
		nationality: 'V'.toUpperCase(),
		cedula: 31313828,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'miaguiar'.trim().toLowerCase(),
		name: capitalCadena(' MIRTHA ELENA'.trim()),
		lastName: capitalCadena('AGUIAR REYES'.trim()),
		type: 'regular',
		email: 'miaguiar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15802,
		nationality: 'V'.toUpperCase(),
		cedula: 9448765,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MRUJANO'.trim().toLowerCase(),
		name: capitalCadena(' NORELIZ COROMOTO'.trim()),
		lastName: capitalCadena('RUJANO HERRERA'.trim()),
		type: 'regular',
		email: 'MRUJANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15811,
		nationality: 'V'.toUpperCase(),
		cedula: 15008148,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALEJANDRO'.trim()),
		lastName: capitalCadena('HERRERA RIOS'.trim()),
		type: 'regular',
		email: 'JOHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5360,
		nationality: 'V'.toUpperCase(),
		cedula: 13810956,
		centroTrabajoId: '185',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL VIÑEDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JANANGUREN'.trim().toLowerCase(),
		name: capitalCadena(' JENIREE NATHALIE'.trim()),
		lastName: capitalCadena('AÑANGUREN GUARIQUE'.trim()),
		type: 'regular',
		email: 'JANANGUREN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4371,
		nationality: 'V'.toUpperCase(),
		cedula: 19407829,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPADRON'.trim().toLowerCase(),
		name: capitalCadena(' MARLIN JOSEFINA'.trim()),
		lastName: capitalCadena('PADRON AMUNDARAIN'.trim()),
		type: 'regular',
		email: 'MPADRON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6089,
		nationality: 'V'.toUpperCase(),
		cedula: 12260901,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yomendez'.trim().toLowerCase(),
		name: capitalCadena(' YOLIMAR DEL VALLE'.trim()),
		lastName: capitalCadena('MENDEZ BASTARDO'.trim()),
		type: 'regular',
		email: 'yomendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15831,
		nationality: 'V'.toUpperCase(),
		cedula: 15725556,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IBAUTE'.trim().toLowerCase(),
		name: capitalCadena(' IRMA ELIZABETH'.trim()),
		lastName: capitalCadena('BAUTE '.trim()),
		type: 'regular',
		email: 'IBAUTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3067,
		nationality: 'V'.toUpperCase(),
		cedula: 10692968,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LESPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' LESLIER VANESSA'.trim()),
		lastName: capitalCadena('PEREZ PANTOJA'.trim()),
		type: 'regular',
		email: 'LESPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10010,
		nationality: 'V'.toUpperCase(),
		cedula: 20032081,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMANZANILLA'.trim().toLowerCase(),
		name: capitalCadena(' ELBIMAR '.trim()),
		lastName: capitalCadena('MANZANILLA MORENO'.trim()),
		type: 'regular',
		email: 'EMANZANILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15033,
		nationality: 'V'.toUpperCase(),
		cedula: 14972702,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgomez'.trim().toLowerCase(),
		name: capitalCadena(' CLEIVEL OMAR'.trim()),
		lastName: capitalCadena('GOMEZ LEON'.trim()),
		type: 'regular',
		email: 'cgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15432,
		nationality: 'V'.toUpperCase(),
		cedula: 27914660,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malcala'.trim().toLowerCase(),
		name: capitalCadena(' MARLEYS DIOGELIN'.trim()),
		lastName: capitalCadena('ALCALA ROMERO'.trim()),
		type: 'regular',
		email: 'malcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15445,
		nationality: 'V'.toUpperCase(),
		cedula: 20822730,
		centroTrabajoId: '19',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RVILLALOBOS'.trim().toLowerCase(),
		name: capitalCadena(' RINA RUBISAY'.trim()),
		lastName: capitalCadena('VILLALOBOS MENDOZA'.trim()),
		type: 'regular',
		email: 'RVILLALOBOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1239,
		nationality: 'V'.toUpperCase(),
		cedula: 13244882,
		centroTrabajoId: '192',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPUCHE'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ALBERTO'.trim()),
		lastName: capitalCadena('PUCHE MOLERO'.trim()),
		type: 'regular',
		email: 'MPUCHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13955,
		nationality: 'V'.toUpperCase(),
		cedula: 23457065,
		centroTrabajoId: '192',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YARELLANO'.trim().toLowerCase(),
		name: capitalCadena(' YUSLENIS MARIELA'.trim()),
		lastName: capitalCadena('ARELLANO ALVAREZ'.trim()),
		type: 'regular',
		email: 'YARELLANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9439,
		nationality: 'V'.toUpperCase(),
		cedula: 15964247,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carlopez'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS JESUS'.trim()),
		lastName: capitalCadena('LOPEZ VARGAS'.trim()),
		type: 'regular',
		email: 'carlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10303,
		nationality: 'V'.toUpperCase(),
		cedula: 18769404,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marurdaneta'.trim().toLowerCase(),
		name: capitalCadena(' MAURY ALEJANDRA'.trim()),
		lastName: capitalCadena('URDANETA WEFFER'.trim()),
		type: 'regular',
		email: 'marurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6130,
		nationality: 'V'.toUpperCase(),
		cedula: 15531422,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KQUIROZ'.trim().toLowerCase(),
		name: capitalCadena(' KAREN IRENE'.trim()),
		lastName: capitalCadena('QUIROZ ORTEGA'.trim()),
		type: 'regular',
		email: 'KQUIROZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11245,
		nationality: 'V'.toUpperCase(),
		cedula: 22309683,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YTORRES'.trim().toLowerCase(),
		name: capitalCadena(' YETSY STEFHANIE'.trim()),
		lastName: capitalCadena('TORRES ROMERO'.trim()),
		type: 'regular',
		email: 'YTORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12790,
		nationality: 'V'.toUpperCase(),
		cedula: 19817362,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mbracho'.trim().toLowerCase(),
		name: capitalCadena(' MILEXIS MARIBEL'.trim()),
		lastName: capitalCadena('BRACHO REYES'.trim()),
		type: 'regular',
		email: 'mbracho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13953,
		nationality: 'V'.toUpperCase(),
		cedula: 16110802,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AJALLARO'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA CAROLINA'.trim()),
		lastName: capitalCadena('JALLARO AULAR'.trim()),
		type: 'regular',
		email: 'AJALLARO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9392,
		nationality: 'V'.toUpperCase(),
		cedula: 18438787,
		centroTrabajoId: '194',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIPE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mameza'.trim().toLowerCase(),
		name: capitalCadena(' MARINA YULEIBI'.trim()),
		lastName: capitalCadena('MEZA COLLADO'.trim()),
		type: 'regular',
		email: 'mameza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13699,
		nationality: 'V'.toUpperCase(),
		cedula: 13947952,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfernandez'.trim().toLowerCase(),
		name: capitalCadena(' YULAN MAYELI'.trim()),
		lastName: capitalCadena('FERNANDEZ MARQUEZ'.trim()),
		type: 'regular',
		email: 'yfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14737,
		nationality: 'V'.toUpperCase(),
		cedula: 18091802,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marondon'.trim().toLowerCase(),
		name: capitalCadena(' MARIELA DEL CARMEN'.trim()),
		lastName: capitalCadena('RONDON MANZANO'.trim()),
		type: 'regular',
		email: 'marondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15875,
		nationality: 'V'.toUpperCase(),
		cedula: 13591741,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZALCONINI'.trim().toLowerCase(),
		name: capitalCadena(' ZAIDA ALEJANDRA'.trim()),
		lastName: capitalCadena('ALCONINI CESPEDES'.trim()),
		type: 'regular',
		email: 'ZALCONINI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12506,
		nationality: 'V'.toUpperCase(),
		cedula: 14932396,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dnieves'.trim().toLowerCase(),
		name: capitalCadena(' DELSY VERONICA'.trim()),
		lastName: capitalCadena('NIEVES '.trim()),
		type: 'regular',
		email: 'dnieves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13573,
		nationality: 'V'.toUpperCase(),
		cedula: 13683784,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAMAYA'.trim().toLowerCase(),
		name: capitalCadena(' MAYRA ALEJANDRA'.trim()),
		lastName: capitalCadena('AMAYA PEREZ'.trim()),
		type: 'regular',
		email: 'MAMAYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12462,
		nationality: 'V'.toUpperCase(),
		cedula: 13500944,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CEPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' CESAR FABIAN'.trim()),
		lastName: capitalCadena('PEREZ PAREDES'.trim()),
		type: 'regular',
		email: 'CEPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15156,
		nationality: 'V'.toUpperCase(),
		cedula: 28673103,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mdasilva'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL ANDERSON'.trim()),
		lastName: capitalCadena('DA SILVA OSUNA'.trim()),
		type: 'regular',
		email: 'mdasilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15342,
		nationality: 'V'.toUpperCase(),
		cedula: 13062804,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycazano'.trim().toLowerCase(),
		name: capitalCadena(' YETZALI JOHANNA'.trim()),
		lastName: capitalCadena('CAZANO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'ycazano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15575,
		nationality: 'V'.toUpperCase(),
		cedula: 15506074,
		centroTrabajoId: '196',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARINAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'baponte'.trim().toLowerCase(),
		name: capitalCadena(' BETSY CAROLINA'.trim()),
		lastName: capitalCadena('APONTE FERNANDEZ'.trim()),
		type: 'regular',
		email: 'baponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13956,
		nationality: 'V'.toUpperCase(),
		cedula: 15475467,
		centroTrabajoId: '197',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSALCEDO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('SALCEDO BUSTILLOS'.trim()),
		type: 'regular',
		email: 'JSALCEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2012,
		nationality: 'V'.toUpperCase(),
		cedula: 6796569,
		centroTrabajoId: '197',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lliss'.trim().toLowerCase(),
		name: capitalCadena(' LISBETH MARILDA'.trim()),
		lastName: capitalCadena('LISS GUILLEN'.trim()),
		type: 'regular',
		email: 'lliss@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13611,
		nationality: 'V'.toUpperCase(),
		cedula: 10076003,
		centroTrabajoId: '197',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AZAMBRANO'.trim().toLowerCase(),
		name: capitalCadena(' ALEXIS NABOR'.trim()),
		lastName: capitalCadena('ZAMBRANO ROA'.trim()),
		type: 'regular',
		email: 'AZAMBRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2816,
		nationality: 'V'.toUpperCase(),
		cedula: 16411645,
		centroTrabajoId: '197',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yreinosa'.trim().toLowerCase(),
		name: capitalCadena(' YEILIS NAYERLIN'.trim()),
		lastName: capitalCadena('REINOSA CASTRO'.trim()),
		type: 'regular',
		email: 'yreinosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10801,
		nationality: 'V'.toUpperCase(),
		cedula: 21640034,
		centroTrabajoId: '197',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RPICON'.trim().toLowerCase(),
		name: capitalCadena(' RENZO ANDRES'.trim()),
		lastName: capitalCadena('PICON RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'RPICON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13016,
		nationality: 'V'.toUpperCase(),
		cedula: 24336810,
		centroTrabajoId: '197',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CHARALLAVE - C.C.SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesulgarcia'.trim().toLowerCase(),
		name: capitalCadena(' JESULAY JACQUELINE'.trim()),
		lastName: capitalCadena('GARCIA DE MENDEZ'.trim()),
		type: 'regular',
		email: 'jesulgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11161,
		nationality: 'V'.toUpperCase(),
		cedula: 15610251,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YSANDOVAL'.trim().toLowerCase(),
		name: capitalCadena(' YERALDINI '.trim()),
		lastName: capitalCadena('SANDOVAL DELGADO'.trim()),
		type: 'regular',
		email: 'YSANDOVAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2707,
		nationality: 'V'.toUpperCase(),
		cedula: 16551587,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RPALAZZOLO'.trim().toLowerCase(),
		name: capitalCadena(' ROSANA '.trim()),
		lastName: capitalCadena('PALAZZOLO LEON'.trim()),
		type: 'regular',
		email: 'RPALAZZOLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12720,
		nationality: 'V'.toUpperCase(),
		cedula: 7297225,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EANGULO'.trim().toLowerCase(),
		name: capitalCadena(' ENMA MAYERLIN'.trim()),
		lastName: capitalCadena('ANGULO MARQUEZ'.trim()),
		type: 'regular',
		email: 'EANGULO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 784,
		nationality: 'V'.toUpperCase(),
		cedula: 12395503,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' NAIROBIS DAYANA'.trim()),
		lastName: capitalCadena('RODRIGUEZ CASTILLO'.trim()),
		type: 'regular',
		email: 'nrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15808,
		nationality: 'V'.toUpperCase(),
		cedula: 20694502,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kperez'.trim().toLowerCase(),
		name: capitalCadena(' KLEYIS MARIANGEL'.trim()),
		lastName: capitalCadena('PEREZ GEROMES'.trim()),
		type: 'regular',
		email: 'kperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15872,
		nationality: 'V'.toUpperCase(),
		cedula: 20693038,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('VELASQUEZ CARBILLO'.trim()),
		type: 'regular',
		email: 'JOSVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16363,
		nationality: 'V'.toUpperCase(),
		cedula: 14509516,
		centroTrabajoId: '199',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TUMERO C.C. MARIÑO PLAZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aburgos'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA LISSET'.trim()),
		lastName: capitalCadena('BURGOS MUÑOZ'.trim()),
		type: 'regular',
		email: 'aburgos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10059,
		nationality: 'V'.toUpperCase(),
		cedula: 22942834,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ANGELICA'.trim()),
		lastName: capitalCadena('GARCIA TREJO'.trim()),
		type: 'regular',
		email: 'MARGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8679,
		nationality: 'V'.toUpperCase(),
		cedula: 15739802,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AALEGRIA'.trim().toLowerCase(),
		name: capitalCadena(' ALEXIS ANTONIO'.trim()),
		lastName: capitalCadena('ALEGRIA VARGAS'.trim()),
		type: 'regular',
		email: 'AALEGRIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16168,
		nationality: 'V'.toUpperCase(),
		cedula: 13473604,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YVARELA'.trim().toLowerCase(),
		name: capitalCadena(' YGOR EDUARDO'.trim()),
		lastName: capitalCadena('VARELA ACEVEDO'.trim()),
		type: 'regular',
		email: 'YVARELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4781,
		nationality: 'V'.toUpperCase(),
		cedula: 9648229,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ibreto'.trim().toLowerCase(),
		name: capitalCadena(' IVON NATHALI'.trim()),
		lastName: capitalCadena('BRETO SANCHEZ'.trim()),
		type: 'regular',
		email: 'ibreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11125,
		nationality: 'V'.toUpperCase(),
		cedula: 23786398,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wrojas'.trim().toLowerCase(),
		name: capitalCadena(' WILLEIDI ISAMAR'.trim()),
		lastName: capitalCadena('ROJAS MENDOZA'.trim()),
		type: 'regular',
		email: 'wrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15196,
		nationality: 'V'.toUpperCase(),
		cedula: 23785724,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' CESAR AUGUSTO'.trim()),
		lastName: capitalCadena('CASTILLO LEDEZMA'.trim()),
		type: 'regular',
		email: 'CCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16069,
		nationality: 'V'.toUpperCase(),
		cedula: 23785406,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpuerta'.trim().toLowerCase(),
		name: capitalCadena(' MAIGUALIDA MARIA'.trim()),
		lastName: capitalCadena('PUERTA APONTE'.trim()),
		type: 'regular',
		email: 'mpuerta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13264,
		nationality: 'V'.toUpperCase(),
		cedula: 11687031,
		centroTrabajoId: '20',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PALO NEGRO SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NMENDIBLE'.trim().toLowerCase(),
		name: capitalCadena(' NELSON MAURICIO'.trim()),
		lastName: capitalCadena('MENDIBLE SANCHEZ'.trim()),
		type: 'regular',
		email: 'NMENDIBLE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15374,
		nationality: 'V'.toUpperCase(),
		cedula: 12174045,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mrivas'.trim().toLowerCase(),
		name: capitalCadena(' MARYELIS ANDREINA'.trim()),
		lastName: capitalCadena('RIVAS '.trim()),
		type: 'regular',
		email: 'mrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11020,
		nationality: 'V'.toUpperCase(),
		cedula: 15043767,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfranco'.trim().toLowerCase(),
		name: capitalCadena(' YEZENIA NATHALY'.trim()),
		lastName: capitalCadena('FRANCO ROJAS'.trim()),
		type: 'regular',
		email: 'yfranco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13708,
		nationality: 'V'.toUpperCase(),
		cedula: 15153855,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEIGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' JEISKARLY DEL VALLE'.trim()),
		lastName: capitalCadena('GONZALEZ SALAZAR'.trim()),
		type: 'regular',
		email: 'JEIGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7517,
		nationality: 'V'.toUpperCase(),
		cedula: 19551703,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BGARAY'.trim().toLowerCase(),
		name: capitalCadena(' BRIYITH CLAIRETH'.trim()),
		lastName: capitalCadena('GARAY VIRGUEZ'.trim()),
		type: 'regular',
		email: 'BGARAY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9060,
		nationality: 'V'.toUpperCase(),
		cedula: 20319087,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZPAREDES'.trim().toLowerCase(),
		name: capitalCadena(' ZULEIDY MARIA'.trim()),
		lastName: capitalCadena('PAREDES LOYO'.trim()),
		type: 'regular',
		email: 'ZPAREDES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15378,
		nationality: 'V'.toUpperCase(),
		cedula: 22315059,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JDORANTE'.trim().toLowerCase(),
		name: capitalCadena(' JOAO PEDRO'.trim()),
		lastName: capitalCadena('DORANTE '.trim()),
		type: 'regular',
		email: 'JDORANTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7318,
		nationality: 'V'.toUpperCase(),
		cedula: 18735061,
		centroTrabajoId: '202',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['YARITAGUA HYPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMEZA'.trim().toLowerCase(),
		name: capitalCadena(' ELSY JOSEFINA'.trim()),
		lastName: capitalCadena('MEZA DE MONSALVE'.trim()),
		type: 'regular',
		email: 'EMEZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14466,
		nationality: 'V'.toUpperCase(),
		cedula: 14382513,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AVALERA'.trim().toLowerCase(),
		name: capitalCadena(' AIMARA NATHALI'.trim()),
		lastName: capitalCadena('VALERA PAEZ'.trim()),
		type: 'regular',
		email: 'AVALERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12402,
		nationality: 'V'.toUpperCase(),
		cedula: 15996953,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MEMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' MERCEDES GARDENIA'.trim()),
		lastName: capitalCadena('MARTINEZ ROJAS'.trim()),
		type: 'regular',
		email: 'MEMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13217,
		nationality: 'V'.toUpperCase(),
		cedula: 6813011,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kecastillo'.trim().toLowerCase(),
		name: capitalCadena(' KEYBER RAMON'.trim()),
		lastName: capitalCadena('CASTILLO GRANADO'.trim()),
		type: 'regular',
		email: 'kecastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13068,
		nationality: 'V'.toUpperCase(),
		cedula: 30210432,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lborges'.trim().toLowerCase(),
		name: capitalCadena(' LAYMEDES DEL VALLE'.trim()),
		lastName: capitalCadena('BORGES SALAZAR'.trim()),
		type: 'regular',
		email: 'lborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14454,
		nationality: 'V'.toUpperCase(),
		cedula: 16462014,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FDAVILA'.trim().toLowerCase(),
		name: capitalCadena(' FRANCHESKA MARIA'.trim()),
		lastName: capitalCadena('DAVILA CORREA'.trim()),
		type: 'regular',
		email: 'FDAVILA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15678,
		nationality: 'V'.toUpperCase(),
		cedula: 30948485,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fpinto'.trim().toLowerCase(),
		name: capitalCadena(' FRANKLIN JOSE'.trim()),
		lastName: capitalCadena('PINTO SANCHEZ'.trim()),
		type: 'regular',
		email: 'fpinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15870,
		nationality: 'V'.toUpperCase(),
		cedula: 25049986,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMONTERREY'.trim().toLowerCase(),
		name: capitalCadena(' MORAIMA JOSEFINA'.trim()),
		lastName: capitalCadena('MONTERREY CASTILLO'.trim()),
		type: 'regular',
		email: 'MMONTERREY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1505,
		nationality: 'V'.toUpperCase(),
		cedula: 8839424,
		centroTrabajoId: '203',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN DIEGO SUPERMERCADO HIPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'errojas'.trim().toLowerCase(),
		name: capitalCadena(' ERWIN IVAN'.trim()),
		lastName: capitalCadena('ROJAS ALBARRACIN'.trim()),
		type: 'regular',
		email: 'errojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13926,
		nationality: 'V'.toUpperCase(),
		cedula: 17395654,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DOROJAS'.trim().toLowerCase(),
		name: capitalCadena(' DOUGLAS GERMAN'.trim()),
		lastName: capitalCadena('ROJAS TORTOZA'.trim()),
		type: 'regular',
		email: 'DOROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12050,
		nationality: 'V'.toUpperCase(),
		cedula: 21005780,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RORIVAS'.trim().toLowerCase(),
		name: capitalCadena(' ROSA AMELIA'.trim()),
		lastName: capitalCadena('RIVAS '.trim()),
		type: 'regular',
		email: 'RORIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8357,
		nationality: 'V'.toUpperCase(),
		cedula: 10265744,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUMORALES'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ENRIQUE'.trim()),
		lastName: capitalCadena('MORALES ORTEGA'.trim()),
		type: 'regular',
		email: 'LUMORALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12384,
		nationality: 'V'.toUpperCase(),
		cedula: 21146945,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rramos'.trim().toLowerCase(),
		name: capitalCadena(' RAFAEL EULISES'.trim()),
		lastName: capitalCadena('RAMOS GAMARRA'.trim()),
		type: 'regular',
		email: 'rramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13165,
		nationality: 'V'.toUpperCase(),
		cedula: 27231175,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'getovar'.trim().toLowerCase(),
		name: capitalCadena(' GEONELA NAHOMY'.trim()),
		lastName: capitalCadena('TOVAR CASTILLO'.trim()),
		type: 'regular',
		email: 'getovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15082,
		nationality: 'V'.toUpperCase(),
		cedula: 26714345,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adelgado'.trim().toLowerCase(),
		name: capitalCadena(' ANGGI LUISIANA'.trim()),
		lastName: capitalCadena('DELGADO ZAPATA'.trim()),
		type: 'regular',
		email: 'adelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15456,
		nationality: 'V'.toUpperCase(),
		cedula: 29597885,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BPARRA'.trim().toLowerCase(),
		name: capitalCadena(' BEIZA YANET'.trim()),
		lastName: capitalCadena('PARRA CALDERA'.trim()),
		type: 'regular',
		email: 'BPARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8896,
		nationality: 'V'.toUpperCase(),
		cedula: 14958141,
		centroTrabajoId: '206',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'igimenez'.trim().toLowerCase(),
		name: capitalCadena(' IRIS CAROLINA'.trim()),
		lastName: capitalCadena('GIMENEZ COLMENAREZ'.trim()),
		type: 'regular',
		email: 'igimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10282,
		nationality: 'V'.toUpperCase(),
		cedula: 22265330,
		centroTrabajoId: '207',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' ANTONIO ALBERTO'.trim()),
		lastName: capitalCadena('CASTRO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'ANCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4515,
		nationality: 'V'.toUpperCase(),
		cedula: 7383260,
		centroTrabajoId: '207',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CARTEAGA'.trim().toLowerCase(),
		name: capitalCadena(' CELIA COROMOTO'.trim()),
		lastName: capitalCadena('ARTEAGA GARRIDO'.trim()),
		type: 'regular',
		email: 'CARTEAGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 683,
		nationality: 'V'.toUpperCase(),
		cedula: 7581904,
		centroTrabajoId: '207',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KDUARTE'.trim().toLowerCase(),
		name: capitalCadena(' KARLA VALERIA'.trim()),
		lastName: capitalCadena('DUARTE ORTEGA'.trim()),
		type: 'regular',
		email: 'KDUARTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13020,
		nationality: 'V'.toUpperCase(),
		cedula: 28381105,
		centroTrabajoId: '207',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ILIANA CAROLINA'.trim()),
		lastName: capitalCadena('FERNANDEZ ANDREA'.trim()),
		type: 'regular',
		email: 'IFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13123,
		nationality: 'V'.toUpperCase(),
		cedula: 24159044,
		centroTrabajoId: '207',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SANTEQUERA'.trim().toLowerCase(),
		name: capitalCadena(' SARAIS JOSEFINA'.trim()),
		lastName: capitalCadena('ANTEQUERA RUBIO'.trim()),
		type: 'regular',
		email: 'SANTEQUERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9875,
		nationality: 'V'.toUpperCase(),
		cedula: 18059242,
		centroTrabajoId: '207',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LIDER CABUDARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cpinto'.trim().toLowerCase(),
		name: capitalCadena(' CARELVIS YSNLENIA'.trim()),
		lastName: capitalCadena('PINTO LOPEZ'.trim()),
		type: 'regular',
		email: 'cpinto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14467,
		nationality: 'V'.toUpperCase(),
		cedula: 20485772,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acastro'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA MARISELA'.trim()),
		lastName: capitalCadena('CASTRO DE VARGAS'.trim()),
		type: 'regular',
		email: 'acastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14118,
		nationality: 'V'.toUpperCase(),
		cedula: 16423512,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KDONAIRES'.trim().toLowerCase(),
		name: capitalCadena(' KELVIN EFRAIN'.trim()),
		lastName: capitalCadena('DONAIRES LLOVERA'.trim()),
		type: 'regular',
		email: 'KDONAIRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11962,
		nationality: 'V'.toUpperCase(),
		cedula: 24014692,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'xcastellanos'.trim().toLowerCase(),
		name: capitalCadena(' XIOMARA JOSEFINA'.trim()),
		lastName: capitalCadena('CASTELLANOS AULAR'.trim()),
		type: 'regular',
		email: 'xcastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13130,
		nationality: 'V'.toUpperCase(),
		cedula: 14413909,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tsalcedo'.trim().toLowerCase(),
		name: capitalCadena(' TIFFANYS FRANCINE'.trim()),
		lastName: capitalCadena('SALCEDO SUAREZ'.trim()),
		type: 'regular',
		email: 'tsalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15581,
		nationality: 'V'.toUpperCase(),
		cedula: 30996563,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FTOVAR'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO ANTONIO'.trim()),
		lastName: capitalCadena('TOVAR CARRASCO'.trim()),
		type: 'regular',
		email: 'FTOVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16251,
		nationality: 'V'.toUpperCase(),
		cedula: 28439932,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'spineda'.trim().toLowerCase(),
		name: capitalCadena(' SUSANA ROXANA'.trim()),
		lastName: capitalCadena('PINEDA DIAZ'.trim()),
		type: 'regular',
		email: 'spineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14109,
		nationality: 'V'.toUpperCase(),
		cedula: 20486344,
		centroTrabajoId: '208',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CARLOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'blezama'.trim().toLowerCase(),
		name: capitalCadena(' BLISMAR DE LOS ANGELES'.trim()),
		lastName: capitalCadena('LEZAMA JIMENEZ'.trim()),
		type: 'regular',
		email: 'blezama@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15366,
		nationality: 'V'.toUpperCase(),
		cedula: 18827093,
		centroTrabajoId: '209',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EVMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' EVELIN VANESSA'.trim()),
		lastName: capitalCadena('MARTINEZ '.trim()),
		type: 'regular',
		email: 'EVMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16244,
		nationality: 'V'.toUpperCase(),
		cedula: 16700275,
		centroTrabajoId: '209',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ocanas'.trim().toLowerCase(),
		name: capitalCadena(' OSCAR AQUILES'.trim()),
		lastName: capitalCadena('CAÑAS ESTEVES'.trim()),
		type: 'regular',
		email: 'ocanas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10312,
		nationality: 'V'.toUpperCase(),
		cedula: 11213217,
		centroTrabajoId: '209',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OVAQUERO'.trim().toLowerCase(),
		name: capitalCadena(' OVIDIO ANTONIO'.trim()),
		lastName: capitalCadena('VAQUERO NAVARRO'.trim()),
		type: 'regular',
		email: 'OVAQUERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11932,
		nationality: 'V'.toUpperCase(),
		cedula: 11209406,
		centroTrabajoId: '209',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LHIPOLITO'.trim().toLowerCase(),
		name: capitalCadena(' LEIDA SARAI'.trim()),
		lastName: capitalCadena('HIPOLITO MACHIS'.trim()),
		type: 'regular',
		email: 'LHIPOLITO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15949,
		nationality: 'V'.toUpperCase(),
		cedula: 17999215,
		centroTrabajoId: '209',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WBARRERA'.trim().toLowerCase(),
		name: capitalCadena(' WALNER DEL JESUS'.trim()),
		lastName: capitalCadena('BARRERA BERMUDEZ'.trim()),
		type: 'regular',
		email: 'WBARRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12202,
		nationality: 'V'.toUpperCase(),
		cedula: 19859687,
		centroTrabajoId: '209',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPITA TRAKI']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' JEANETTE ANAIS'.trim()),
		lastName: capitalCadena('MARTINEZ RAMOS'.trim()),
		type: 'regular',
		email: 'JEMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9234,
		nationality: 'V'.toUpperCase(),
		cedula: 18475502,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BVELOZ'.trim().toLowerCase(),
		name: capitalCadena(' BELGICA RUSSORY'.trim()),
		lastName: capitalCadena('VELOZ BORGES'.trim()),
		type: 'regular',
		email: 'BVELOZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11778,
		nationality: 'V'.toUpperCase(),
		cedula: 20759357,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abogado'.trim().toLowerCase(),
		name: capitalCadena(' ANDRES EDUARDO'.trim()),
		lastName: capitalCadena('BOGADO MEDINA'.trim()),
		type: 'regular',
		email: 'abogado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14306,
		nationality: 'V'.toUpperCase(),
		cedula: 22291168,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DGUERRA'.trim().toLowerCase(),
		name: capitalCadena(' DANNY RAFAEL'.trim()),
		lastName: capitalCadena('GUERRA MACHUCA'.trim()),
		type: 'regular',
		email: 'DGUERRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12550,
		nationality: 'V'.toUpperCase(),
		cedula: 15823222,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anbarrios'.trim().toLowerCase(),
		name: capitalCadena(' ANTHONY ALEJANDRO'.trim()),
		lastName: capitalCadena('BARRIOS SALAZAR'.trim()),
		type: 'regular',
		email: 'anbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10417,
		nationality: 'V'.toUpperCase(),
		cedula: 22953394,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VLEON'.trim().toLowerCase(),
		name: capitalCadena(' VANESSA JOSEFINA'.trim()),
		lastName: capitalCadena('LEON COSTERA'.trim()),
		type: 'regular',
		email: 'VLEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11700,
		nationality: 'V'.toUpperCase(),
		cedula: 17702798,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycoronel'.trim().toLowerCase(),
		name: capitalCadena(' YORSA SOYLIMAR'.trim()),
		lastName: capitalCadena('CORONEL LABRADOR'.trim()),
		type: 'regular',
		email: 'ycoronel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12820,
		nationality: 'V'.toUpperCase(),
		cedula: 13721975,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gjaimes'.trim().toLowerCase(),
		name: capitalCadena(' GERARDO ENRIQUE'.trim()),
		lastName: capitalCadena('JAIMES ESTRADA'.trim()),
		type: 'regular',
		email: 'gjaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13010,
		nationality: 'V'.toUpperCase(),
		cedula: 26369968,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clabrador'.trim().toLowerCase(),
		name: capitalCadena(' CELIA LUCIA'.trim()),
		lastName: capitalCadena('LABRADOR CARDENAS'.trim()),
		type: 'regular',
		email: 'clabrador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13454,
		nationality: 'V'.toUpperCase(),
		cedula: 7261770,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CURQUIOLA'.trim().toLowerCase(),
		name: capitalCadena(' CHRISTINE CAROLINA'.trim()),
		lastName: capitalCadena('URQUIOLA CABRERA'.trim()),
		type: 'regular',
		email: 'CURQUIOLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16297,
		nationality: 'V'.toUpperCase(),
		cedula: 20896673,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LDATICA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EDUARDO'.trim()),
		lastName: capitalCadena('DATICA GONZALEZ'.trim()),
		type: 'regular',
		email: 'LDATICA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2853,
		nationality: 'V'.toUpperCase(),
		cedula: 14982728,
		centroTrabajoId: '21',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY C.C. PLATINIUM']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YNAVA'.trim().toLowerCase(),
		name: capitalCadena(' YUGLIMAR CAROLINA'.trim()),
		lastName: capitalCadena('NAVA RIZCO'.trim()),
		type: 'regular',
		email: 'YNAVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11244,
		nationality: 'V'.toUpperCase(),
		cedula: 27384152,
		centroTrabajoId: '210',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DABAJURO II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ylopez'.trim().toLowerCase(),
		name: capitalCadena(' YULIANA DEL VALLE'.trim()),
		lastName: capitalCadena('LOPEZ LOPEZ'.trim()),
		type: 'regular',
		email: 'ylopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10875,
		nationality: 'V'.toUpperCase(),
		cedula: 18151394,
		centroTrabajoId: '210',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DABAJURO II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JACOSTA'.trim().toLowerCase(),
		name: capitalCadena(' JESSICA CATALINA'.trim()),
		lastName: capitalCadena('ACOSTA MAVAREZ'.trim()),
		type: 'regular',
		email: 'JACOSTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11699,
		nationality: 'V'.toUpperCase(),
		cedula: 20085603,
		centroTrabajoId: '210',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DABAJURO II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hsangronis'.trim().toLowerCase(),
		name: capitalCadena(' HELMAR JUDITH'.trim()),
		lastName: capitalCadena('SANGRONIS PATIÑO'.trim()),
		type: 'regular',
		email: 'hsangronis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13095,
		nationality: 'V'.toUpperCase(),
		cedula: 13902231,
		centroTrabajoId: '210',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DABAJURO II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AARIAS'.trim().toLowerCase(),
		name: capitalCadena(' AMIRCAR JOSE'.trim()),
		lastName: capitalCadena('ARIAS EIZAGA'.trim()),
		type: 'regular',
		email: 'AARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16385,
		nationality: 'V'.toUpperCase(),
		cedula: 16828279,
		centroTrabajoId: '210',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['DABAJURO II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YELHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' YELI MARIA'.trim()),
		lastName: capitalCadena('HERNANDEZ INFANTE'.trim()),
		type: 'regular',
		email: 'YELHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9461,
		nationality: 'V'.toUpperCase(),
		cedula: 24628481,
		centroTrabajoId: '213',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LLAYA'.trim().toLowerCase(),
		name: capitalCadena(' LUISAURA EDITH'.trim()),
		lastName: capitalCadena('LAYA GOMEZ'.trim()),
		type: 'regular',
		email: 'LLAYA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13051,
		nationality: 'V'.toUpperCase(),
		cedula: 26652966,
		centroTrabajoId: '213',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ssilva'.trim().toLowerCase(),
		name: capitalCadena(' SAHILIBETH ELIOMARIS'.trim()),
		lastName: capitalCadena('SILVA BOLIVAR'.trim()),
		type: 'regular',
		email: 'ssilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13052,
		nationality: 'V'.toUpperCase(),
		cedula: 26231591,
		centroTrabajoId: '213',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fleon'.trim().toLowerCase(),
		name: capitalCadena(' FLOR SENAIS'.trim()),
		lastName: capitalCadena('LEON DE RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'fleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13190,
		nationality: 'V'.toUpperCase(),
		cedula: 8155212,
		centroTrabajoId: '213',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'galopez'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL ARMANDO'.trim()),
		lastName: capitalCadena('LOPEZ NUÑEZ'.trim()),
		type: 'regular',
		email: 'galopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15731,
		nationality: 'V'.toUpperCase(),
		cedula: 26658515,
		centroTrabajoId: '213',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LEGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' LEONARDO '.trim()),
		lastName: capitalCadena('GONZALEZ '.trim()),
		type: 'regular',
		email: 'LEGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13063,
		nationality: 'V'.toUpperCase(),
		cedula: 19133432,
		centroTrabajoId: '213',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['TRAKI SAN FERNANDO DE APURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'davila'.trim().toLowerCase(),
		name: capitalCadena(' DAYSI '.trim()),
		lastName: capitalCadena('AVILA DIAZ'.trim()),
		type: 'regular',
		email: 'davila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13858,
		nationality: 'V'.toUpperCase(),
		cedula: 6311644,
		centroTrabajoId: '214',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MATOVAR'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DEL CARMEN'.trim()),
		lastName: capitalCadena('TOVAR TOLEDO'.trim()),
		type: 'regular',
		email: 'MATOVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6481,
		nationality: 'V'.toUpperCase(),
		cedula: 18032830,
		centroTrabajoId: '214',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GLORODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' GLORIA JOHANA'.trim()),
		lastName: capitalCadena('RODRIGUEZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'GLORODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6263,
		nationality: 'V'.toUpperCase(),
		cedula: 19200003,
		centroTrabajoId: '214',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcastillo'.trim().toLowerCase(),
		name: capitalCadena(' LEONELA ALEJANDRA'.trim()),
		lastName: capitalCadena('CASTILLO CASIGLIA'.trim()),
		type: 'regular',
		email: 'lcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13167,
		nationality: 'V'.toUpperCase(),
		cedula: 27475811,
		centroTrabajoId: '214',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' WILLIAM JOEL'.trim()),
		lastName: capitalCadena('BLANCO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'WBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12274,
		nationality: 'V'.toUpperCase(),
		cedula: 12399618,
		centroTrabajoId: '214',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['FRANCISCO SOLANO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IRFLORES'.trim().toLowerCase(),
		name: capitalCadena(' IRIAN AMERICA'.trim()),
		lastName: capitalCadena('FLORES MACIAS'.trim()),
		type: 'regular',
		email: 'IRFLORES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13313,
		nationality: 'V'.toUpperCase(),
		cedula: 7128018,
		centroTrabajoId: '215',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eipacheco'.trim().toLowerCase(),
		name: capitalCadena(' EILEEN YSABEL'.trim()),
		lastName: capitalCadena('PACHECO MORALES'.trim()),
		type: 'regular',
		email: 'eipacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13835,
		nationality: 'V'.toUpperCase(),
		cedula: 15334221,
		centroTrabajoId: '215',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YACASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' YASMIN ALEXANDER'.trim()),
		lastName: capitalCadena('CASTILLO SIERRALTA'.trim()),
		type: 'regular',
		email: 'YACASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15908,
		nationality: 'V'.toUpperCase(),
		cedula: 14303125,
		centroTrabajoId: '215',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'magil'.trim().toLowerCase(),
		name: capitalCadena(' MARIELIS DE LOS ANGELES'.trim()),
		lastName: capitalCadena('GIL LUGO'.trim()),
		type: 'regular',
		email: 'magil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15238,
		nationality: 'V'.toUpperCase(),
		cedula: 23435780,
		centroTrabajoId: '215',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTORREALBA'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL ALEJANDRO'.trim()),
		lastName: capitalCadena('TORREALBA ECHENIQUE'.trim()),
		type: 'regular',
		email: 'MTORREALBA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15681,
		nationality: 'V'.toUpperCase(),
		cedula: 25716519,
		centroTrabajoId: '215',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jostos'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RAFAEL'.trim()),
		lastName: capitalCadena('OSTOS OSORIO'.trim()),
		type: 'regular',
		email: 'jostos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13507,
		nationality: 'V'.toUpperCase(),
		cedula: 12102290,
		centroTrabajoId: '215',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DAMORALES'.trim().toLowerCase(),
		name: capitalCadena(' DAVID ISAAC'.trim()),
		lastName: capitalCadena('MORALES CHIRINOS'.trim()),
		type: 'regular',
		email: 'DAMORALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15643,
		nationality: 'V'.toUpperCase(),
		cedula: 30507719,
		centroTrabajoId: '216',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EXCELSIOR GAMA SANTA FE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mandrade'.trim().toLowerCase(),
		name: capitalCadena(' MARIA CONCEPCION'.trim()),
		lastName: capitalCadena('DE ANDRADE JESUS'.trim()),
		type: 'regular',
		email: 'mandrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13204,
		nationality: 'V'.toUpperCase(),
		cedula: 6157811,
		centroTrabajoId: '216',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EXCELSIOR GAMA SANTA FE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maripalacios'.trim().toLowerCase(),
		name: capitalCadena(' MARIA VICTORIA'.trim()),
		lastName: capitalCadena('PALACIOS MERIÑO'.trim()),
		type: 'regular',
		email: 'maripalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15478,
		nationality: 'V'.toUpperCase(),
		cedula: 28309242,
		centroTrabajoId: '217',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['EXCELSIOR GAMA SANTA EUDIVIGIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSALCEDO'.trim().toLowerCase(),
		name: capitalCadena(' MAYURI MARIELA'.trim()),
		lastName: capitalCadena('SALCEDO FERNANDEZ'.trim()),
		type: 'regular',
		email: 'MSALCEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13632,
		nationality: 'V'.toUpperCase(),
		cedula: 7945234,
		centroTrabajoId: '217',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['EXCELSIOR GAMA SANTA EUDIVIGIS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anagutierrez'.trim().toLowerCase(),
		name: capitalCadena(' ANA ROSA'.trim()),
		lastName: capitalCadena('GUTIERREZ TOVAR'.trim()),
		type: 'regular',
		email: 'anagutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14444,
		nationality: 'V'.toUpperCase(),
		cedula: 10268656,
		centroTrabajoId: '218',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luparra'.trim().toLowerCase(),
		name: capitalCadena(' LUIS JOSE'.trim()),
		lastName: capitalCadena('PARRA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'luparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10879,
		nationality: 'V'.toUpperCase(),
		cedula: 22408083,
		centroTrabajoId: '218',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mimendoza'.trim().toLowerCase(),
		name: capitalCadena(' MILAGRO ISABEL'.trim()),
		lastName: capitalCadena('MENDOZA VILLANUEVA'.trim()),
		type: 'regular',
		email: 'mimendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13073,
		nationality: 'V'.toUpperCase(),
		cedula: 31014261,
		centroTrabajoId: '218',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmatamoros'.trim().toLowerCase(),
		name: capitalCadena(' MARIANGEL GABRIELA'.trim()),
		lastName: capitalCadena('MATAMOROS PRIMERA'.trim()),
		type: 'regular',
		email: 'mmatamoros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15577,
		nationality: 'V'.toUpperCase(),
		cedula: 30430476,
		centroTrabajoId: '218',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NALEON'.trim().toLowerCase(),
		name: capitalCadena(' NATASHA VALENTINA'.trim()),
		lastName: capitalCadena('LEON APONTE'.trim()),
		type: 'regular',
		email: 'NALEON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15675,
		nationality: 'V'.toUpperCase(),
		cedula: 30821702,
		centroTrabajoId: '218',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dflores'.trim().toLowerCase(),
		name: capitalCadena(' DOUGLAS ENRIQUE'.trim()),
		lastName: capitalCadena('FLORES OCHOA'.trim()),
		type: 'regular',
		email: 'dflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13259,
		nationality: 'V'.toUpperCase(),
		cedula: 12034767,
		centroTrabajoId: '218',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VIÑA VALENCIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jaranguren'.trim().toLowerCase(),
		name: capitalCadena(' JAIKER ALEXANDER'.trim()),
		lastName: capitalCadena('ARANGUREN CACERES'.trim()),
		type: 'regular',
		email: 'jaranguren@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14283,
		nationality: 'V'.toUpperCase(),
		cedula: 25966091,
		centroTrabajoId: '219',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CLATORRE'.trim().toLowerCase(),
		name: capitalCadena(' CECILIA '.trim()),
		lastName: capitalCadena('LA TORRE YAMBOA'.trim()),
		type: 'regular',
		email: 'CLATORRE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13383,
		nationality: 'V'.toUpperCase(),
		cedula: 9563254,
		centroTrabajoId: '219',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariagomez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA AUXILIADORA'.trim()),
		lastName: capitalCadena('GOMEZ '.trim()),
		type: 'regular',
		email: 'mariagomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13227,
		nationality: 'V'.toUpperCase(),
		cedula: 9565140,
		centroTrabajoId: '219',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpereira'.trim().toLowerCase(),
		name: capitalCadena(' JESUS DAVID'.trim()),
		lastName: capitalCadena('PEREIRA TORCATES'.trim()),
		type: 'regular',
		email: 'jpereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14895,
		nationality: 'V'.toUpperCase(),
		cedula: 29847715,
		centroTrabajoId: '219',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TSOTO'.trim().toLowerCase(),
		name: capitalCadena(' TRINIDAD DE JESUS'.trim()),
		lastName: capitalCadena('SOTO FIGUERAS'.trim()),
		type: 'regular',
		email: 'TSOTO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15907,
		nationality: 'V'.toUpperCase(),
		cedula: 16414594,
		centroTrabajoId: '219',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['HIPER LÍDER ARAURE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MANTEQUERO'.trim().toLowerCase(),
		name: capitalCadena(' MAIKE MIGUEL'.trim()),
		lastName: capitalCadena('ANTEQUERO MARTINEZ'.trim()),
		type: 'regular',
		email: 'MANTEQUERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11507,
		nationality: 'V'.toUpperCase(),
		cedula: 15507431,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOLEITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lboscan'.trim().toLowerCase(),
		name: capitalCadena(' LUIS JOSE'.trim()),
		lastName: capitalCadena('BOSCAN HERNANDEZ'.trim()),
		type: 'regular',
		email: 'lboscan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15385,
		nationality: 'V'.toUpperCase(),
		cedula: 14300737,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOLEITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AAVALO'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA '.trim()),
		lastName: capitalCadena('AVALO BETANCUR'.trim()),
		type: 'regular',
		email: 'AAVALO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16200,
		nationality: 'V'.toUpperCase(),
		cedula: 14908041,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOLEITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCASTELLANO'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALFREDO'.trim()),
		lastName: capitalCadena('CASTELLANO SALCEDO'.trim()),
		type: 'regular',
		email: 'LCASTELLANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12733,
		nationality: 'V'.toUpperCase(),
		cedula: 11485950,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOLEITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPETIT'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANGEL'.trim()),
		lastName: capitalCadena('PETIT LOPEZ'.trim()),
		type: 'regular',
		email: 'MPETIT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12193,
		nationality: 'V'.toUpperCase(),
		cedula: 11929621,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOLEITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YARIVERO'.trim().toLowerCase(),
		name: capitalCadena(' YANELI LORAINE'.trim()),
		lastName: capitalCadena('RIVERO CERVANTES'.trim()),
		type: 'regular',
		email: 'YARIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15815,
		nationality: 'V'.toUpperCase(),
		cedula: 29887152,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOLEITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ECALDERA'.trim().toLowerCase(),
		name: capitalCadena(' ERNESTO ANTONIO'.trim()),
		lastName: capitalCadena('CALDERA '.trim()),
		type: 'regular',
		email: 'ECALDERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3139,
		nationality: 'V'.toUpperCase(),
		cedula: 11161843,
		centroTrabajoId: '220',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asposito'.trim().toLowerCase(),
		name: capitalCadena(' ANA DEL ROSARIO'.trim()),
		lastName: capitalCadena('SPOSITO HERRERA'.trim()),
		type: 'regular',
		email: 'asposito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11124,
		nationality: 'V'.toUpperCase(),
		cedula: 14038248,
		centroTrabajoId: '221',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MOCHOA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA YSABEL'.trim()),
		lastName: capitalCadena('OCHOA OJEDA'.trim()),
		type: 'regular',
		email: 'MOCHOA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6425,
		nationality: 'V'.toUpperCase(),
		cedula: 14664584,
		centroTrabajoId: '221',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DOVALLES'.trim().toLowerCase(),
		name: capitalCadena(' DARLING ARELIS'.trim()),
		lastName: capitalCadena('OVALLES DE RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'DOVALLES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12451,
		nationality: 'V'.toUpperCase(),
		cedula: 13667691,
		centroTrabajoId: '221',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIRRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' MIRAYDA DEL VALLE'.trim()),
		lastName: capitalCadena('RODRIGUEZ DI GENOVA'.trim()),
		type: 'regular',
		email: 'MIRRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12894,
		nationality: 'V'.toUpperCase(),
		cedula: 13579145,
		centroTrabajoId: '221',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KMAYO'.trim().toLowerCase(),
		name: capitalCadena(' KATHERINE DESSIRE'.trim()),
		lastName: capitalCadena('MAYO OSORIO'.trim()),
		type: 'regular',
		email: 'KMAYO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3985,
		nationality: 'V'.toUpperCase(),
		cedula: 20452948,
		centroTrabajoId: '221',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C UNICENTRO MARACAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarias'.trim().toLowerCase(),
		name: capitalCadena(' YVICT SARAI'.trim()),
		lastName: capitalCadena('ARIAS ANDERSON'.trim()),
		type: 'regular',
		email: 'yarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14051,
		nationality: 'V'.toUpperCase(),
		cedula: 16172793,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frmartinez'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS GABRIELA'.trim()),
		lastName: capitalCadena('MARTINEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'frmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14110,
		nationality: 'V'.toUpperCase(),
		cedula: 19774250,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yobando'.trim().toLowerCase(),
		name: capitalCadena(' YOLIANNYS MARIA'.trim()),
		lastName: capitalCadena('OBANDO MORENO'.trim()),
		type: 'regular',
		email: 'yobando@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13788,
		nationality: 'V'.toUpperCase(),
		cedula: 16064223,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oaray'.trim().toLowerCase(),
		name: capitalCadena(' OSMERY JOSEFINA'.trim()),
		lastName: capitalCadena('ARAY BADUEL'.trim()),
		type: 'regular',
		email: 'oaray@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13609,
		nationality: 'V'.toUpperCase(),
		cedula: 8293060,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aprado'.trim().toLowerCase(),
		name: capitalCadena(' ANA GABRIELA'.trim()),
		lastName: capitalCadena('PRADO SERRANO'.trim()),
		type: 'regular',
		email: 'aprado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13970,
		nationality: 'V'.toUpperCase(),
		cedula: 16063933,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysuarez'.trim().toLowerCase(),
		name: capitalCadena(' YINETHSI DEL VALLE'.trim()),
		lastName: capitalCadena('SUAREZ BERMUDEZ'.trim()),
		type: 'regular',
		email: 'ysuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13993,
		nationality: 'V'.toUpperCase(),
		cedula: 17786899,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jdlucas'.trim().toLowerCase(),
		name: capitalCadena(' JOSEFINA '.trim()),
		lastName: capitalCadena('D LUCAS CABEZA'.trim()),
		type: 'regular',
		email: 'jdlucas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13236,
		nationality: 'V'.toUpperCase(),
		cedula: 8555924,
		centroTrabajoId: '230',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ANACO AV. MERIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASCANACHE'.trim().toLowerCase(),
		name: capitalCadena(' ASTRID CAROLINA'.trim()),
		lastName: capitalCadena('CANACHE PARAQUEIMO'.trim()),
		type: 'regular',
		email: 'ASCANACHE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13161,
		nationality: 'V'.toUpperCase(),
		cedula: 18127257,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kford'.trim().toLowerCase(),
		name: capitalCadena(' KARINA ALEXANDRA'.trim()),
		lastName: capitalCadena('FORD DIAZ'.trim()),
		type: 'regular',
		email: 'kford@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13907,
		nationality: 'V'.toUpperCase(),
		cedula: 14828943,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aggomez'.trim().toLowerCase(),
		name: capitalCadena(' AGUSTIN JESUS'.trim()),
		lastName: capitalCadena('GOMEZ GOMEZ'.trim()),
		type: 'regular',
		email: 'aggomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14389,
		nationality: 'V'.toUpperCase(),
		cedula: 26548716,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUIRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALEJANDRO'.trim()),
		lastName: capitalCadena('RODRIGUEZ CHANCHAMIRE'.trim()),
		type: 'regular',
		email: 'LUIRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14956,
		nationality: 'V'.toUpperCase(),
		cedula: 20106340,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GROJAS'.trim().toLowerCase(),
		name: capitalCadena(' GREICY MARIANNIS'.trim()),
		lastName: capitalCadena('ROJAS PUERTA'.trim()),
		type: 'regular',
		email: 'GROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15017,
		nationality: 'V'.toUpperCase(),
		cedula: 24948334,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRINCONES'.trim().toLowerCase(),
		name: capitalCadena(' YAMILET DEL VALLE'.trim()),
		lastName: capitalCadena('RINCONES GUZMAN'.trim()),
		type: 'regular',
		email: 'YRINCONES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16071,
		nationality: 'V'.toUpperCase(),
		cedula: 11421692,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aotero'.trim().toLowerCase(),
		name: capitalCadena(' ARTURO RAFAEL'.trim()),
		lastName: capitalCadena('OTERO CAYUMA'.trim()),
		type: 'regular',
		email: 'aotero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13924,
		nationality: 'V'.toUpperCase(),
		cedula: 8265206,
		centroTrabajoId: '231',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO PIRITU']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yumarquez'.trim().toLowerCase(),
		name: capitalCadena(' YULEXIS DEL VALLE'.trim()),
		lastName: capitalCadena('MARQUEZ MUDARRA'.trim()),
		type: 'regular',
		email: 'yumarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14828,
		nationality: 'V'.toUpperCase(),
		cedula: 25621925,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'makhras'.trim().toLowerCase(),
		name: capitalCadena(' MAHIRNA JOSEFINA'.trim()),
		lastName: capitalCadena('AKHRAS GOMEZ'.trim()),
		type: 'regular',
		email: 'makhras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13553,
		nationality: 'V'.toUpperCase(),
		cedula: 13163753,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ETORRES'.trim().toLowerCase(),
		name: capitalCadena(' EBELICE COROMOTO'.trim()),
		lastName: capitalCadena('TORRES MALAVE'.trim()),
		type: 'regular',
		email: 'ETORRES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4299,
		nationality: 'V'.toUpperCase(),
		cedula: 11416612,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yyamal'.trim().toLowerCase(),
		name: capitalCadena(' YESIRETH DEL VALLE'.trim()),
		lastName: capitalCadena('YAMAL GOMEZ'.trim()),
		type: 'regular',
		email: 'yyamal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14968,
		nationality: 'V'.toUpperCase(),
		cedula: 18126695,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JYENDI'.trim().toLowerCase(),
		name: capitalCadena(' JETZIKA CAROLINA'.trim()),
		lastName: capitalCadena('YENDI GOMEZ'.trim()),
		type: 'regular',
		email: 'JYENDI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15880,
		nationality: 'V'.toUpperCase(),
		cedula: 19316101,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CALARA'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS EDUARDO'.trim()),
		lastName: capitalCadena('LARA ARMAS'.trim()),
		type: 'regular',
		email: 'CALARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15923,
		nationality: 'V'.toUpperCase(),
		cedula: 14935791,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ptineo'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO JOSE'.trim()),
		lastName: capitalCadena('TINEO GONZALEZ'.trim()),
		type: 'regular',
		email: 'ptineo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13225,
		nationality: 'V'.toUpperCase(),
		cedula: 6528492,
		centroTrabajoId: '233',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARCELONA CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmoya'.trim().toLowerCase(),
		name: capitalCadena(' RAMERCY MARIA'.trim()),
		lastName: capitalCadena('MOYA CASTRO'.trim()),
		type: 'regular',
		email: 'rmoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13564,
		nationality: 'V'.toUpperCase(),
		cedula: 12842073,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yamarquez'.trim().toLowerCase(),
		name: capitalCadena(' YASINET NINOSCA'.trim()),
		lastName: capitalCadena('MARQUEZ RAMIREZ'.trim()),
		type: 'regular',
		email: 'yamarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14152,
		nationality: 'V'.toUpperCase(),
		cedula: 18680283,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irmendoza'.trim().toLowerCase(),
		name: capitalCadena(' IRIAN MAGALY'.trim()),
		lastName: capitalCadena('MENDOZA LOPEZ'.trim()),
		type: 'regular',
		email: 'irmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13215,
		nationality: 'V'.toUpperCase(),
		cedula: 5648643,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'candarcia'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ASUNCION'.trim()),
		lastName: capitalCadena('ANDARCIA DE BRAZON'.trim()),
		type: 'regular',
		email: 'candarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13713,
		nationality: 'V'.toUpperCase(),
		cedula: 8462577,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEALVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' JENNY TERESA'.trim()),
		lastName: capitalCadena('ALVAREZ QUIJADA'.trim()),
		type: 'regular',
		email: 'JEALVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6370,
		nationality: 'V'.toUpperCase(),
		cedula: 11655734,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zarteaga'.trim().toLowerCase(),
		name: capitalCadena(' ZOREGLYS JOSEFINA'.trim()),
		lastName: capitalCadena('ARTEAGA CARPERO'.trim()),
		type: 'regular',
		email: 'zarteaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13582,
		nationality: 'V'.toUpperCase(),
		cedula: 10935200,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cborges'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN JULIA'.trim()),
		lastName: capitalCadena('BORGES DE YTRIAGO'.trim()),
		type: 'regular',
		email: 'cborges@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13473,
		nationality: 'V'.toUpperCase(),
		cedula: 6504818,
		centroTrabajoId: '234',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TIGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dequintero'.trim().toLowerCase(),
		name: capitalCadena(' DERLIZ MARGARITA'.trim()),
		lastName: capitalCadena('QUINTERO BERICOTO'.trim()),
		type: 'regular',
		email: 'dequintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14878,
		nationality: 'V'.toUpperCase(),
		cedula: 14615685,
		centroTrabajoId: '235',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carivas'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN MARIA'.trim()),
		lastName: capitalCadena('RIVAS GALLARDO'.trim()),
		type: 'regular',
		email: 'carivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14675,
		nationality: 'V'.toUpperCase(),
		cedula: 6957550,
		centroTrabajoId: '235',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yramirez'.trim().toLowerCase(),
		name: capitalCadena(' YASMIN YULIBEL'.trim()),
		lastName: capitalCadena('RAMIREZ AYALA'.trim()),
		type: 'regular',
		email: 'yramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13124,
		nationality: 'V'.toUpperCase(),
		cedula: 14102337,
		centroTrabajoId: '235',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUGUZMAN'.trim().toLowerCase(),
		name: capitalCadena(' YULEYS ELENA'.trim()),
		lastName: capitalCadena('GUZMAN CAMPOS'.trim()),
		type: 'regular',
		email: 'YUGUZMAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15383,
		nationality: 'V'.toUpperCase(),
		cedula: 8288968,
		centroTrabajoId: '235',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' ROSIMAR DEL VALLE'.trim()),
		lastName: capitalCadena('MARTINEZ TABEROA'.trim()),
		type: 'regular',
		email: 'ROMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15932,
		nationality: 'V'.toUpperCase(),
		cedula: 25387048,
		centroTrabajoId: '235',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hbeltran'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR JOSE'.trim()),
		lastName: capitalCadena('BELTRAN SABINO'.trim()),
		type: 'regular',
		email: 'hbeltran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13482,
		nationality: 'V'.toUpperCase(),
		cedula: 8271251,
		centroTrabajoId: '235',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['LECHERIA CENTRO EMPRESARIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nesilva'.trim().toLowerCase(),
		name: capitalCadena(' NELLINA ESTHER'.trim()),
		lastName: capitalCadena('SILVA MOJICA'.trim()),
		type: 'regular',
		email: 'nesilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13578,
		nationality: 'V'.toUpperCase(),
		cedula: 12616535,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LERODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' LEONOR JOSEFINA'.trim()),
		lastName: capitalCadena('RODRIGUEZ DURAND'.trim()),
		type: 'regular',
		email: 'LERODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13959,
		nationality: 'V'.toUpperCase(),
		cedula: 15470052,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfigueredo'.trim().toLowerCase(),
		name: capitalCadena(' JULIO CESAR'.trim()),
		lastName: capitalCadena('FIGUEREDO CABRERA'.trim()),
		type: 'regular',
		email: 'jfigueredo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11047,
		nationality: 'V'.toUpperCase(),
		cedula: 15733875,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUCONTRERAS'.trim().toLowerCase(),
		name: capitalCadena(' JUNIOR ARGENIS'.trim()),
		lastName: capitalCadena('CONTRERAS GARCIA'.trim()),
		type: 'regular',
		email: 'JUCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7300,
		nationality: 'V'.toUpperCase(),
		cedula: 17968269,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMALDONADO'.trim().toLowerCase(),
		name: capitalCadena(' ANNI JASMIN'.trim()),
		lastName: capitalCadena('MALDONADO SARMIENTO'.trim()),
		type: 'regular',
		email: 'AMALDONADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 989,
		nationality: 'V'.toUpperCase(),
		cedula: 11180998,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MISALAS'.trim().toLowerCase(),
		name: capitalCadena(' MIRIAM JOSE'.trim()),
		lastName: capitalCadena('SALAS GRATEROL'.trim()),
		type: 'regular',
		email: 'MISALAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16023,
		nationality: 'V'.toUpperCase(),
		cedula: 16762151,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LGALINDO'.trim().toLowerCase(),
		name: capitalCadena(' LAURY DEL VALLE'.trim()),
		lastName: capitalCadena('GALINDO CARTA'.trim()),
		type: 'regular',
		email: 'LGALINDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16102,
		nationality: 'V'.toUpperCase(),
		cedula: 10357225,
		centroTrabajoId: '239',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angtorres'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA MARIANA'.trim()),
		lastName: capitalCadena('TORRES REALZA'.trim()),
		type: 'regular',
		email: 'angtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13515,
		nationality: 'V'.toUpperCase(),
		cedula: 14578488,
		centroTrabajoId: '240',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTOLEDO'.trim().toLowerCase(),
		name: capitalCadena(' MARIELA '.trim()),
		lastName: capitalCadena('TOLEDO DE CAÑIZALEZ'.trim()),
		type: 'regular',
		email: 'MTOLEDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14273,
		nationality: 'V'.toUpperCase(),
		cedula: 8727845,
		centroTrabajoId: '240',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YVIEIRA'.trim().toLowerCase(),
		name: capitalCadena(' YSABEL '.trim()),
		lastName: capitalCadena('VIEIRA DE SOUSA'.trim()),
		type: 'regular',
		email: 'YVIEIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15906,
		nationality: 'V'.toUpperCase(),
		cedula: 10457745,
		centroTrabajoId: '240',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RAPONTE'.trim().toLowerCase(),
		name: capitalCadena(' ROSMI ALEJANDRA'.trim()),
		lastName: capitalCadena('APONTE JARAMILLO'.trim()),
		type: 'regular',
		email: 'RAPONTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12573,
		nationality: 'V'.toUpperCase(),
		cedula: 18488080,
		centroTrabajoId: '240',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yledezma'.trim().toLowerCase(),
		name: capitalCadena(' YOHELYS CHANKEAN'.trim()),
		lastName: capitalCadena('LEDEZMA BRICEÑO'.trim()),
		type: 'regular',
		email: 'yledezma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14863,
		nationality: 'V'.toUpperCase(),
		cedula: 27400878,
		centroTrabajoId: '240',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCUBICI'.trim().toLowerCase(),
		name: capitalCadena(' GHEORGHINA YAMILETH'.trim()),
		lastName: capitalCadena('CUBICI HERNANDEZ'.trim()),
		type: 'regular',
		email: 'GCUBICI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16346,
		nationality: 'V'.toUpperCase(),
		cedula: 20449194,
		centroTrabajoId: '240',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA MORITA INTERCOMUNAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YBOLIVAR'.trim().toLowerCase(),
		name: capitalCadena(' YAKELINES '.trim()),
		lastName: capitalCadena('BOLIVAR ROJAS'.trim()),
		type: 'regular',
		email: 'YBOLIVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4648,
		nationality: 'V'.toUpperCase(),
		cedula: 13120395,
		centroTrabajoId: '242',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vsucre'.trim().toLowerCase(),
		name: capitalCadena(' VICENTA DEL CARMEN'.trim()),
		lastName: capitalCadena('SUCRE CALDEA'.trim()),
		type: 'regular',
		email: 'vsucre@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13610,
		nationality: 'V'.toUpperCase(),
		cedula: 15570560,
		centroTrabajoId: '242',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMRONDON'.trim().toLowerCase(),
		name: capitalCadena(' AMIRKA SOLEISIS'.trim()),
		lastName: capitalCadena('RONDON YDROGO'.trim()),
		type: 'regular',
		email: 'AMRONDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14980,
		nationality: 'V'.toUpperCase(),
		cedula: 13853637,
		centroTrabajoId: '242',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EZRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' DIANNYS DEL VALLE'.trim()),
		lastName: capitalCadena('MILLAN JIMENEZ'.trim()),
		type: 'regular',
		email: 'EZRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15763,
		nationality: 'V'.toUpperCase(),
		cedula: 21083313,
		centroTrabajoId: '242',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMUNOZ'.trim().toLowerCase(),
		name: capitalCadena(' YULIBYS BOLIVIA'.trim()),
		lastName: capitalCadena('MUÑOZ MARQUEZ'.trim()),
		type: 'regular',
		email: 'YMUNOZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7105,
		nationality: 'V'.toUpperCase(),
		cedula: 10550730,
		centroTrabajoId: '242',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO ORDAZ CASTILLITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarnaez'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA CAROLINA'.trim()),
		lastName: capitalCadena('ARNAEZ DUGARTE'.trim()),
		type: 'regular',
		email: 'yarnaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14113,
		nationality: 'V'.toUpperCase(),
		cedula: 13995419,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jortega'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('ORTEGA ORDOÑES'.trim()),
		type: 'regular',
		email: 'jortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13258,
		nationality: 'V'.toUpperCase(),
		cedula: 12924508,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' LIBIA NIRVANA'.trim()),
		lastName: capitalCadena('MEDINA DE DA SILVA'.trim()),
		type: 'regular',
		email: 'LMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15944,
		nationality: 'V'.toUpperCase(),
		cedula: 7023143,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysmoreno'.trim().toLowerCase(),
		name: capitalCadena(' YSMAEL EDUARDO'.trim()),
		lastName: capitalCadena('MORENO REYES'.trim()),
		type: 'regular',
		email: 'ysmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13888,
		nationality: 'V'.toUpperCase(),
		cedula: 18956348,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ghurtado'.trim().toLowerCase(),
		name: capitalCadena(' GERARDO JESUS'.trim()),
		lastName: capitalCadena('HURTADO VILLAMEDIANA'.trim()),
		type: 'regular',
		email: 'ghurtado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13906,
		nationality: 'V'.toUpperCase(),
		cedula: 21484825,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'heclopez'.trim().toLowerCase(),
		name: capitalCadena(' HECNAYLIN YESIVEL'.trim()),
		lastName: capitalCadena('LOPEZ GUERRA'.trim()),
		type: 'regular',
		email: 'heclopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15801,
		nationality: 'V'.toUpperCase(),
		cedula: 22222983,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' WILFREDO RAMON'.trim()),
		lastName: capitalCadena('LOPEZ PINTO'.trim()),
		type: 'regular',
		email: 'WLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12697,
		nationality: 'V'.toUpperCase(),
		cedula: 13809338,
		centroTrabajoId: '244',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TOCUYITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MESCALONA'.trim().toLowerCase(),
		name: capitalCadena(' MARY ANGELICA'.trim()),
		lastName: capitalCadena('ESCALONA MENDOZA'.trim()),
		type: 'regular',
		email: 'MESCALONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14540,
		nationality: 'V'.toUpperCase(),
		cedula: 17844114,
		centroTrabajoId: '246',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MONTALBAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yulehernandez'.trim().toLowerCase(),
		name: capitalCadena(' YULEICI JOSE'.trim()),
		lastName: capitalCadena('HERNANDEZ OVIEDO'.trim()),
		type: 'regular',
		email: 'yulehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15047,
		nationality: 'V'.toUpperCase(),
		cedula: 24472221,
		centroTrabajoId: '246',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MONTALBAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zhernandez'.trim().toLowerCase(),
		name: capitalCadena(' ZOBEIDA ALEJANDRA'.trim()),
		lastName: capitalCadena('HERNANDEZ LEAL'.trim()),
		type: 'regular',
		email: 'zhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15624,
		nationality: 'V'.toUpperCase(),
		cedula: 16132528,
		centroTrabajoId: '246',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MONTALBAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pojeda'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA ALEJANDRA'.trim()),
		lastName: capitalCadena('OJEDA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'pojeda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14003,
		nationality: 'V'.toUpperCase(),
		cedula: 21153846,
		centroTrabajoId: '246',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MONTALBAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asangronis'.trim().toLowerCase(),
		name: capitalCadena(' ANGELY DESIREE'.trim()),
		lastName: capitalCadena('SANGRONIS '.trim()),
		type: 'regular',
		email: 'asangronis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14333,
		nationality: 'V'.toUpperCase(),
		cedula: 17808584,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yegonzalez'.trim().toLowerCase(),
		name: capitalCadena(' YERRY SANTOS'.trim()),
		lastName: capitalCadena('GONZALEZ BALAGUERA'.trim()),
		type: 'regular',
		email: 'yegonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14542,
		nationality: 'V'.toUpperCase(),
		cedula: 18361664,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nparra'.trim().toLowerCase(),
		name: capitalCadena(' NORMELYS DESIREE'.trim()),
		lastName: capitalCadena('PARRA AVILA'.trim()),
		type: 'regular',
		email: 'nparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13458,
		nationality: 'V'.toUpperCase(),
		cedula: 12931557,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsequera'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MANUEL'.trim()),
		lastName: capitalCadena('SEQUERA SEQUERA'.trim()),
		type: 'regular',
		email: 'jsequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13194,
		nationality: 'V'.toUpperCase(),
		cedula: 8845204,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mitorres'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANGEL'.trim()),
		lastName: capitalCadena('TORRES '.trim()),
		type: 'regular',
		email: 'mitorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13990,
		nationality: 'V'.toUpperCase(),
		cedula: 17066210,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yapacheco'.trim().toLowerCase(),
		name: capitalCadena(' YARITZA ARELIS'.trim()),
		lastName: capitalCadena('PACHECO JAEN'.trim()),
		type: 'regular',
		email: 'yapacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14543,
		nationality: 'V'.toUpperCase(),
		cedula: 8836257,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gaponte'.trim().toLowerCase(),
		name: capitalCadena(' GERMAIN JOSE'.trim()),
		lastName: capitalCadena('APONTE SANCHEZ'.trim()),
		type: 'regular',
		email: 'gaponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15097,
		nationality: 'V'.toUpperCase(),
		cedula: 18783490,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dhernandez'.trim().toLowerCase(),
		name: capitalCadena(' DEIVIS ORLANDO'.trim()),
		lastName: capitalCadena('HERNANDEZ NOGUERA'.trim()),
		type: 'regular',
		email: 'dhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13511,
		nationality: 'V'.toUpperCase(),
		cedula: 7129233,
		centroTrabajoId: '248',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ROSA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DRIVERO'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA ALEJANDRA'.trim()),
		lastName: capitalCadena('RIVERO MARTINEZ'.trim()),
		type: 'regular',
		email: 'DRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2199,
		nationality: 'V'.toUpperCase(),
		cedula: 18617184,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gibarra'.trim().toLowerCase(),
		name: capitalCadena(' GLORIESKY DEL VALLE'.trim()),
		lastName: capitalCadena('IBARRA PAEZ'.trim()),
		type: 'regular',
		email: 'gibarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9495,
		nationality: 'V'.toUpperCase(),
		cedula: 21335636,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JACKELIN CARIDAD'.trim()),
		lastName: capitalCadena('RODRIGUEZ LARA'.trim()),
		type: 'regular',
		email: 'JRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2143,
		nationality: 'V'.toUpperCase(),
		cedula: 17063987,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' DIULECSI LIROLEIZA'.trim()),
		lastName: capitalCadena('BLANCO GIL'.trim()),
		type: 'regular',
		email: 'DBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5252,
		nationality: 'V'.toUpperCase(),
		cedula: 9884489,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msalazar'.trim().toLowerCase(),
		name: capitalCadena(' MADERLYN MARIA'.trim()),
		lastName: capitalCadena('SALAZAR PALMA'.trim()),
		type: 'regular',
		email: 'msalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14148,
		nationality: 'V'.toUpperCase(),
		cedula: 19221738,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'slejarazo'.trim().toLowerCase(),
		name: capitalCadena(' SUJEHY AUGUSMAR'.trim()),
		lastName: capitalCadena('LEJARAZO ALVAREZ'.trim()),
		type: 'regular',
		email: 'slejarazo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15805,
		nationality: 'V'.toUpperCase(),
		cedula: 21335530,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' KAILET CIRIMAR'.trim()),
		lastName: capitalCadena('RAMIREZ MONTAÑEZ'.trim()),
		type: 'regular',
		email: 'KRAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16387,
		nationality: 'V'.toUpperCase(),
		cedula: 18804424,
		centroTrabajoId: '25',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JUAN DE LOS MORROS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycastellano'.trim().toLowerCase(),
		name: capitalCadena(' YOSANDRE JOSE'.trim()),
		lastName: capitalCadena('CASTELLANO GODOY'.trim()),
		type: 'regular',
		email: 'ycastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15055,
		nationality: 'V'.toUpperCase(),
		cedula: 16157143,
		centroTrabajoId: '253',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TINAQUILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FLIMA'.trim().toLowerCase(),
		name: capitalCadena(' FABIOLA THAIS'.trim()),
		lastName: capitalCadena('LIMA MEJIAS'.trim()),
		type: 'regular',
		email: 'FLIMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16267,
		nationality: 'V'.toUpperCase(),
		cedula: 10328229,
		centroTrabajoId: '253',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TINAQUILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marirodriguez'.trim().toLowerCase(),
		name: capitalCadena(' MARIANGEL BRIGITTE'.trim()),
		lastName: capitalCadena('RODRIGUEZ CALDERON'.trim()),
		type: 'regular',
		email: 'marirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15210,
		nationality: 'V'.toUpperCase(),
		cedula: 27477790,
		centroTrabajoId: '253',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TINAQUILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRICO'.trim().toLowerCase(),
		name: capitalCadena(' YARITZA CAROLINA'.trim()),
		lastName: capitalCadena('RICO DE CABAÑA'.trim()),
		type: 'regular',
		email: 'YRICO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15940,
		nationality: 'V'.toUpperCase(),
		cedula: 13479922,
		centroTrabajoId: '253',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TINAQUILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AIRIVERO'.trim().toLowerCase(),
		name: capitalCadena(' AIDA LILIMAR'.trim()),
		lastName: capitalCadena('RIVERO CASADIEGO'.trim()),
		type: 'regular',
		email: 'AIRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16100,
		nationality: 'V'.toUpperCase(),
		cedula: 16993163,
		centroTrabajoId: '253',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TINAQUILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbetancor'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS DAVID'.trim()),
		lastName: capitalCadena('BETANCOR PEREZ'.trim()),
		type: 'regular',
		email: 'cbetancor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13208,
		nationality: 'V'.toUpperCase(),
		cedula: 9539363,
		centroTrabajoId: '253',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TINAQUILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cardiaz'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS JAVIER'.trim()),
		lastName: capitalCadena('DIAZ LEONICE'.trim()),
		type: 'regular',
		email: 'cardiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14886,
		nationality: 'V'.toUpperCase(),
		cedula: 15929611,
		centroTrabajoId: '254',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'damendoza'.trim().toLowerCase(),
		name: capitalCadena(' DALIANA DEL CARMEN'.trim()),
		lastName: capitalCadena('MENDOZA PEÑA'.trim()),
		type: 'regular',
		email: 'damendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14505,
		nationality: 'V'.toUpperCase(),
		cedula: 23563945,
		centroTrabajoId: '254',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dalvarez'.trim().toLowerCase(),
		name: capitalCadena(' DUBRASKA ELIZABETH'.trim()),
		lastName: capitalCadena('ALVAREZ MEJIA'.trim()),
		type: 'regular',
		email: 'dalvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14695,
		nationality: 'V'.toUpperCase(),
		cedula: 12418349,
		centroTrabajoId: '254',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rurodriguez'.trim().toLowerCase(),
		name: capitalCadena(' RUBEN JOSE'.trim()),
		lastName: capitalCadena('RODRIGUEZ ANTELIS'.trim()),
		type: 'regular',
		email: 'rurodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13494,
		nationality: 'V'.toUpperCase(),
		cedula: 11049126,
		centroTrabajoId: '254',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joramirez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE RAFAEL'.trim()),
		lastName: capitalCadena('RAMIREZ CANO'.trim()),
		type: 'regular',
		email: 'joramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13616,
		nationality: 'V'.toUpperCase(),
		cedula: 6245397,
		centroTrabajoId: '254',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUSIFONTES'.trim().toLowerCase(),
		name: capitalCadena(' LUISANA IRAIZY'.trim()),
		lastName: capitalCadena('SIFONTES PACHECO'.trim()),
		type: 'regular',
		email: 'LUSIFONTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15893,
		nationality: 'V'.toUpperCase(),
		cedula: 29501817,
		centroTrabajoId: '254',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. UNIVERSIDAD']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRIVERA'.trim().toLowerCase(),
		name: capitalCadena(' FANNY MELANIA'.trim()),
		lastName: capitalCadena('RIVERA ROJAS'.trim()),
		type: 'regular',
		email: 'FRIVERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14048,
		nationality: 'V'.toUpperCase(),
		cedula: 19658792,
		centroTrabajoId: '255',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JAGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' JANAKI BIHARI'.trim()),
		lastName: capitalCadena('GARCIA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'JAGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11689,
		nationality: 'V'.toUpperCase(),
		cedula: 22904736,
		centroTrabajoId: '255',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hhidalgo'.trim().toLowerCase(),
		name: capitalCadena(' HUMBERLY NACARIS'.trim()),
		lastName: capitalCadena('HIDALGO RIOS'.trim()),
		type: 'regular',
		email: 'hhidalgo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13669,
		nationality: 'V'.toUpperCase(),
		cedula: 16871209,
		centroTrabajoId: '255',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frsanchez'.trim().toLowerCase(),
		name: capitalCadena(' FRANK ANTONIO'.trim()),
		lastName: capitalCadena('SANCHEZ LUCENA'.trim()),
		type: 'regular',
		email: 'frsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13339,
		nationality: 'V'.toUpperCase(),
		cedula: 6525557,
		centroTrabajoId: '255',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PEGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' PENELOPE DEL CARMEN'.trim()),
		lastName: capitalCadena('GONZALEZ '.trim()),
		type: 'regular',
		email: 'PEGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12725,
		nationality: 'V'.toUpperCase(),
		cedula: 16430183,
		centroTrabajoId: '255',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aandrade'.trim().toLowerCase(),
		name: capitalCadena(' ANSONY ALBERTO'.trim()),
		lastName: capitalCadena('ANDRADE '.trim()),
		type: 'regular',
		email: 'aandrade@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15826,
		nationality: 'V'.toUpperCase(),
		cedula: 17513434,
		centroTrabajoId: '255',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['SAN MARTIN C.C. LOS MOLINOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jgelves'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN JOSE'.trim()),
		lastName: capitalCadena('GELVES MACHUCA'.trim()),
		type: 'regular',
		email: 'jgelves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14068,
		nationality: 'V'.toUpperCase(),
		cedula: 16474087,
		centroTrabajoId: '256',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOBARRETO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANTONIO'.trim()),
		lastName: capitalCadena('BARRETO '.trim()),
		type: 'regular',
		email: 'JOBARRETO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5384,
		nationality: 'V'.toUpperCase(),
		cedula: 6801634,
		centroTrabajoId: '256',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OMOSQUERA'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA PAOLA'.trim()),
		lastName: capitalCadena('MOSQUERA CASTILLO'.trim()),
		type: 'regular',
		email: 'OMOSQUERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11505,
		nationality: 'V'.toUpperCase(),
		cedula: 27107761,
		centroTrabajoId: '256',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jinfante'.trim().toLowerCase(),
		name: capitalCadena(' JUSTIN SCOTTH'.trim()),
		lastName: capitalCadena('INFANTE VIEIRA'.trim()),
		type: 'regular',
		email: 'jinfante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15398,
		nationality: 'V'.toUpperCase(),
		cedula: 30444943,
		centroTrabajoId: '256',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ilozano'.trim().toLowerCase(),
		name: capitalCadena(' ISAEL '.trim()),
		lastName: capitalCadena('LOZANO MENDOZA'.trim()),
		type: 'regular',
		email: 'ilozano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13720,
		nationality: 'V'.toUpperCase(),
		cedula: 10538683,
		centroTrabajoId: '256',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA AV. SUCRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'modreman'.trim().toLowerCase(),
		name: capitalCadena(' MAIRA ALEXANDRA'.trim()),
		lastName: capitalCadena('ODREMAN GARCIA'.trim()),
		type: 'regular',
		email: 'modreman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15205,
		nationality: 'V'.toUpperCase(),
		cedula: 14909391,
		centroTrabajoId: '257',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adegarcia'.trim().toLowerCase(),
		name: capitalCadena(' ADELMO ALFONSO'.trim()),
		lastName: capitalCadena('GARCIA '.trim()),
		type: 'regular',
		email: 'adegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13620,
		nationality: 'V'.toUpperCase(),
		cedula: 5308387,
		centroTrabajoId: '257',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CGALLARDO'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ALBERTO'.trim()),
		lastName: capitalCadena('GALLARDO LOPEZ'.trim()),
		type: 'regular',
		email: 'CGALLARDO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16273,
		nationality: 'V'.toUpperCase(),
		cedula: 7925155,
		centroTrabajoId: '257',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarteaga'.trim().toLowerCase(),
		name: capitalCadena(' YOFRAN JOSE'.trim()),
		lastName: capitalCadena('ARTEAGA GARCIA'.trim()),
		type: 'regular',
		email: 'yarteaga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14349,
		nationality: 'V'.toUpperCase(),
		cedula: 11932961,
		centroTrabajoId: '257',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariadiaz'.trim().toLowerCase(),
		name: capitalCadena(' MARIA MILAGROS'.trim()),
		lastName: capitalCadena('DIAZ SALAS'.trim()),
		type: 'regular',
		email: 'mariadiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15877,
		nationality: 'V'.toUpperCase(),
		cedula: 24224151,
		centroTrabajoId: '257',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AROMERO'.trim().toLowerCase(),
		name: capitalCadena(' ALFREDO LUIS'.trim()),
		lastName: capitalCadena('ROMERO PERDOMO'.trim()),
		type: 'regular',
		email: 'AROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12595,
		nationality: 'V'.toUpperCase(),
		cedula: 7662091,
		centroTrabajoId: '257',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['LA YAGUARA AV. PRINCIPAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hbenitez'.trim().toLowerCase(),
		name: capitalCadena(' HEUDYS ANAIS'.trim()),
		lastName: capitalCadena('BENITEZ VOLCANES'.trim()),
		type: 'regular',
		email: 'hbenitez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10807,
		nationality: 'V'.toUpperCase(),
		cedula: 27497603,
		centroTrabajoId: '258',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL PARAISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BHUNG'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA JANETTE'.trim()),
		lastName: capitalCadena('HUNG PAREJO'.trim()),
		type: 'regular',
		email: 'BHUNG@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 726,
		nationality: 'V'.toUpperCase(),
		cedula: 6054649,
		centroTrabajoId: '258',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL PARAISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMEJIA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EGDALYS VIRGINIA'.trim()),
		lastName: capitalCadena('MEJIA GUZMAN'.trim()),
		type: 'regular',
		email: 'MMEJIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8336,
		nationality: 'V'.toUpperCase(),
		cedula: 10514581,
		centroTrabajoId: '258',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL PARAISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'talonzo'.trim().toLowerCase(),
		name: capitalCadena(' TITO JESUS'.trim()),
		lastName: capitalCadena('ALONZO BAILON'.trim()),
		type: 'regular',
		email: 'talonzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13260,
		nationality: 'V'.toUpperCase(),
		cedula: 15821938,
		centroTrabajoId: '258',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL PARAISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsaez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('SAEZ SAEZ'.trim()),
		type: 'regular',
		email: 'jsaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13767,
		nationality: 'V'.toUpperCase(),
		cedula: 5973322,
		centroTrabajoId: '258',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL PARAISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dagonzalez'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA ALEJANDRA'.trim()),
		lastName: capitalCadena('GONZALEZ GARCIA'.trim()),
		type: 'regular',
		email: 'dagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15590,
		nationality: 'V'.toUpperCase(),
		cedula: 30925954,
		centroTrabajoId: '258',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL PARAISO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sherrera'.trim().toLowerCase(),
		name: capitalCadena(' SERGIO ANTONIO'.trim()),
		lastName: capitalCadena('HERRERA BOTIA'.trim()),
		type: 'regular',
		email: 'sherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14164,
		nationality: 'V'.toUpperCase(),
		cedula: 24933215,
		centroTrabajoId: '259',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CITY MARKET']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NTRAVIESO'.trim().toLowerCase(),
		name: capitalCadena(' NADESKA YUNIRAY'.trim()),
		lastName: capitalCadena('TRAVIESO COLMENARES'.trim()),
		type: 'regular',
		email: 'NTRAVIESO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8703,
		nationality: 'V'.toUpperCase(),
		cedula: 26219421,
		centroTrabajoId: '259',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CITY MARKET']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FORTEGA'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS ELENA'.trim()),
		lastName: capitalCadena('ORTEGA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'FORTEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1082,
		nationality: 'V'.toUpperCase(),
		cedula: 11196333,
		centroTrabajoId: '259',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CITY MARKET']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEZAPATA'.trim().toLowerCase(),
		name: capitalCadena(' JESICA MARELYN'.trim()),
		lastName: capitalCadena('ZAPATA AMAYA'.trim()),
		type: 'regular',
		email: 'JEZAPATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7862,
		nationality: 'V'.toUpperCase(),
		cedula: 19224951,
		centroTrabajoId: '259',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CITY MARKET']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lumarquez'.trim().toLowerCase(),
		name: capitalCadena(' LUISA ELENA'.trim()),
		lastName: capitalCadena('MARQUEZ DE RAMIREZ'.trim()),
		type: 'regular',
		email: 'lumarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15367,
		nationality: 'V'.toUpperCase(),
		cedula: 16599544,
		centroTrabajoId: '259',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CITY MARKET']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tmarquez'.trim().toLowerCase(),
		name: capitalCadena(' TEGLIS JOSEFINA'.trim()),
		lastName: capitalCadena('MARQUEZ DUQUE'.trim()),
		type: 'regular',
		email: 'tmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13902,
		nationality: 'V'.toUpperCase(),
		cedula: 9977639,
		centroTrabajoId: '260',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['UNIVERSIDAD CATOLICA ANDRES BELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AALVARADO'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDRA CAROLINA'.trim()),
		lastName: capitalCadena('ALVARADO SOSA'.trim()),
		type: 'regular',
		email: 'AALVARADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16242,
		nationality: 'V'.toUpperCase(),
		cedula: 19733388,
		centroTrabajoId: '260',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['UNIVERSIDAD CATOLICA ANDRES BELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'argodoy'.trim().toLowerCase(),
		name: capitalCadena(' ARGELIA TIBISAY'.trim()),
		lastName: capitalCadena('GODOY MACHADO'.trim()),
		type: 'regular',
		email: 'argodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13237,
		nationality: 'V'.toUpperCase(),
		cedula: 6243993,
		centroTrabajoId: '261',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUINTA CRESPO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RIBRITO'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ANTONIO'.trim()),
		lastName: capitalCadena('BRITO MARQUEZ'.trim()),
		type: 'regular',
		email: 'RIBRITO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4423,
		nationality: 'V'.toUpperCase(),
		cedula: 15540912,
		centroTrabajoId: '261',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUINTA CRESPO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCALLES'.trim().toLowerCase(),
		name: capitalCadena(' MARIELA EDUVIGIS'.trim()),
		lastName: capitalCadena('CALLES LEONI'.trim()),
		type: 'regular',
		email: 'MCALLES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3545,
		nationality: 'V'.toUpperCase(),
		cedula: 14726104,
		centroTrabajoId: '261',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUINTA CRESPO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KIGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' KILSKENNY LISBETH'.trim()),
		lastName: capitalCadena('GUTIERREZ SALCEDO'.trim()),
		type: 'regular',
		email: 'KIGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16208,
		nationality: 'V'.toUpperCase(),
		cedula: 12785456,
		centroTrabajoId: '261',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUINTA CRESPO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' GREIDYS FRANCELYS'.trim()),
		lastName: capitalCadena('GONZALEZ LEGON'.trim()),
		type: 'regular',
		email: 'GGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13089,
		nationality: 'V'.toUpperCase(),
		cedula: 27770202,
		centroTrabajoId: '261',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUINTA CRESPO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clira'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS CELEDONIO'.trim()),
		lastName: capitalCadena('LIRA RIVAS'.trim()),
		type: 'regular',
		email: 'clira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13621,
		nationality: 'V'.toUpperCase(),
		cedula: 6173322,
		centroTrabajoId: '261',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUINTA CRESPO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apuente'.trim().toLowerCase(),
		name: capitalCadena(' ALVI JAVIER'.trim()),
		lastName: capitalCadena('PUENTE AULAR'.trim()),
		type: 'regular',
		email: 'apuente@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13717,
		nationality: 'V'.toUpperCase(),
		cedula: 13662299,
		centroTrabajoId: '262',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kasanchez'.trim().toLowerCase(),
		name: capitalCadena(' KARELYS ANDREINA'.trim()),
		lastName: capitalCadena('SANCHEZ ROMAN'.trim()),
		type: 'regular',
		email: 'kasanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13664,
		nationality: 'V'.toUpperCase(),
		cedula: 14646833,
		centroTrabajoId: '262',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acoronel'.trim().toLowerCase(),
		name: capitalCadena(' ANA LEONOR'.trim()),
		lastName: capitalCadena('CORONEL CONDE'.trim()),
		type: 'regular',
		email: 'acoronel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13370,
		nationality: 'V'.toUpperCase(),
		cedula: 7571666,
		centroTrabajoId: '262',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aquesada'.trim().toLowerCase(),
		name: capitalCadena(' ALBANY GABRIELA'.trim()),
		lastName: capitalCadena('QUESADA MORALES'.trim()),
		type: 'regular',
		email: 'aquesada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15462,
		nationality: 'V'.toUpperCase(),
		cedula: 28039409,
		centroTrabajoId: '262',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adbriceno'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA LISSETTE'.trim()),
		lastName: capitalCadena('BRICEÑO DE GOMEZ'.trim()),
		type: 'regular',
		email: 'adbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13279,
		nationality: 'V'.toUpperCase(),
		cedula: 11767404,
		centroTrabajoId: '262',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL PARAGUANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfrenellin'.trim().toLowerCase(),
		name: capitalCadena(' JUANA YUDILMA'.trim()),
		lastName: capitalCadena('FRENELLIN DE BRACHO'.trim()),
		type: 'regular',
		email: 'jfrenellin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13250,
		nationality: 'V'.toUpperCase(),
		cedula: 7572437,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aqrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' AQUILINA MARGARITA'.trim()),
		lastName: capitalCadena('RODRIGUEZ ROJAS'.trim()),
		type: 'regular',
		email: 'aqrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13449,
		nationality: 'V'.toUpperCase(),
		cedula: 7573740,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmartinez'.trim().toLowerCase(),
		name: capitalCadena(' ROSANGELA '.trim()),
		lastName: capitalCadena('MARTINEZ AGUILAR'.trim()),
		type: 'regular',
		email: 'rmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13684,
		nationality: 'V'.toUpperCase(),
		cedula: 13934744,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nleon'.trim().toLowerCase(),
		name: capitalCadena(' NARKIS JOSELIN'.trim()),
		lastName: capitalCadena('LEON QUERALES'.trim()),
		type: 'regular',
		email: 'nleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14336,
		nationality: 'V'.toUpperCase(),
		cedula: 25556771,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbazan'.trim().toLowerCase(),
		name: capitalCadena(' JOHANNA MILAGROS'.trim()),
		lastName: capitalCadena('BAZAN LUGO'.trim()),
		type: 'regular',
		email: 'jbazan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13753,
		nationality: 'V'.toUpperCase(),
		cedula: 14647362,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GBARRENO'.trim().toLowerCase(),
		name: capitalCadena(' GLEISY JHOANA'.trim()),
		lastName: capitalCadena('BARRENO DE AVILA'.trim()),
		type: 'regular',
		email: 'GBARRENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11109,
		nationality: 'V'.toUpperCase(),
		cedula: 14226843,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anpuente'.trim().toLowerCase(),
		name: capitalCadena(' ANGIEE COROMOTO'.trim()),
		lastName: capitalCadena('PUENTE MEDINA'.trim()),
		type: 'regular',
		email: 'anpuente@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13668,
		nationality: 'V'.toUpperCase(),
		cedula: 15017097,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmadriz'.trim().toLowerCase(),
		name: capitalCadena(' MARIALBY CAROLINA'.trim()),
		lastName: capitalCadena('MADRIZ SEMECO'.trim()),
		type: 'regular',
		email: 'mmadriz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13785,
		nationality: 'V'.toUpperCase(),
		cedula: 15017765,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EZEA'.trim().toLowerCase(),
		name: capitalCadena(' ESTHER JOSEFINA'.trim()),
		lastName: capitalCadena('ZEA ZEA'.trim()),
		type: 'regular',
		email: 'EZEA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13790,
		nationality: 'V'.toUpperCase(),
		cedula: 10973465,
		centroTrabajoId: '263',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['PUNTO FIJO AV. JACINTO LARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agil'.trim().toLowerCase(),
		name: capitalCadena(' ANA MARIA'.trim()),
		lastName: capitalCadena('GIL MANZANILLA'.trim()),
		type: 'regular',
		email: 'agil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13341,
		nationality: 'V'.toUpperCase(),
		cedula: 7361284,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'raguilar'.trim().toLowerCase(),
		name: capitalCadena(' ROSA MILAGRO'.trim()),
		lastName: capitalCadena('DEL VALLE AGUILAR'.trim()),
		type: 'regular',
		email: 'raguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14325,
		nationality: 'V'.toUpperCase(),
		cedula: 15167246,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE TEOFILO'.trim()),
		lastName: capitalCadena('RODRIGUEZ MORILLO'.trim()),
		type: 'regular',
		email: 'josrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13635,
		nationality: 'V'.toUpperCase(),
		cedula: 10129105,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fbustos'.trim().toLowerCase(),
		name: capitalCadena(' FLOR ELENA'.trim()),
		lastName: capitalCadena('BUSTOS DE RAMIREZ'.trim()),
		type: 'regular',
		email: 'fbustos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14482,
		nationality: 'V'.toUpperCase(),
		cedula: 10033788,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'japostol'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('APOSTOL TOVAR'.trim()),
		type: 'regular',
		email: 'japostol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13330,
		nationality: 'V'.toUpperCase(),
		cedula: 9603790,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRAMONES'.trim().toLowerCase(),
		name: capitalCadena(' YURME DEL CARMEN'.trim()),
		lastName: capitalCadena('RAMONES OROPEZA'.trim()),
		type: 'regular',
		email: 'YRAMONES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12927,
		nationality: 'V'.toUpperCase(),
		cedula: 20472833,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlinarez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE FRANCISCO'.trim()),
		lastName: capitalCadena('LINAREZ '.trim()),
		type: 'regular',
		email: 'jlinarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13312,
		nationality: 'V'.toUpperCase(),
		cedula: 7302267,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acolmenarez'.trim().toLowerCase(),
		name: capitalCadena(' ANA CRISTINA'.trim()),
		lastName: capitalCadena('COLMENAREZ COLMENAREZ'.trim()),
		type: 'regular',
		email: 'acolmenarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14502,
		nationality: 'V'.toUpperCase(),
		cedula: 17196712,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anarvaez'.trim().toLowerCase(),
		name: capitalCadena(' ALVARO JOSE'.trim()),
		lastName: capitalCadena('NARVAEZ MATUTE'.trim()),
		type: 'regular',
		email: 'anarvaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15576,
		nationality: 'V'.toUpperCase(),
		cedula: 15776971,
		centroTrabajoId: '264',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO AV. VARGAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fleal'.trim().toLowerCase(),
		name: capitalCadena(' FRAYERLIN CAROLINA'.trim()),
		lastName: capitalCadena('LEAL CASTAÑEDA'.trim()),
		type: 'regular',
		email: 'fleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14142,
		nationality: 'V'.toUpperCase(),
		cedula: 23566765,
		centroTrabajoId: '265',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmelendez'.trim().toLowerCase(),
		name: capitalCadena(' CRISTOBAL RAMON'.trim()),
		lastName: capitalCadena('MELENDEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'cmelendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13666,
		nationality: 'V'.toUpperCase(),
		cedula: 7391257,
		centroTrabajoId: '265',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kgutierrez'.trim().toLowerCase(),
		name: capitalCadena(' KATTY ELENA'.trim()),
		lastName: capitalCadena('GUTIERREZ MELENDEZ'.trim()),
		type: 'regular',
		email: 'kgutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13733,
		nationality: 'V'.toUpperCase(),
		cedula: 14733181,
		centroTrabajoId: '265',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josehernandez'.trim().toLowerCase(),
		name: capitalCadena(' JOSE GREGORIO'.trim()),
		lastName: capitalCadena('HERNANDEZ '.trim()),
		type: 'regular',
		email: 'josehernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13608,
		nationality: 'V'.toUpperCase(),
		cedula: 7350956,
		centroTrabajoId: '265',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgranda'.trim().toLowerCase(),
		name: capitalCadena(' CAROLL LISSETH'.trim()),
		lastName: capitalCadena('GRANDA SOTO'.trim()),
		type: 'regular',
		email: 'cgranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15734,
		nationality: 'V'.toUpperCase(),
		cedula: 15731647,
		centroTrabajoId: '265',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'glhernandez'.trim().toLowerCase(),
		name: capitalCadena(' GLORIMA LUDIN'.trim()),
		lastName: capitalCadena('HERNANDEZ GARCIA'.trim()),
		type: 'regular',
		email: 'glhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13428,
		nationality: 'V'.toUpperCase(),
		cedula: 7438101,
		centroTrabajoId: '265',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL BARQUISIMETO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'miecheverria'.trim().toLowerCase(),
		name: capitalCadena(' MILDRED MARIDE'.trim()),
		lastName: capitalCadena('ECHEVERRIA GIL'.trim()),
		type: 'regular',
		email: 'miecheverria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13634,
		nationality: 'V'.toUpperCase(),
		cedula: 11263744,
		centroTrabajoId: '266',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PESPINOZA'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO ANTONIO'.trim()),
		lastName: capitalCadena('ESPINOZA ANDRADE'.trim()),
		type: 'regular',
		email: 'PESPINOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13220,
		nationality: 'V'.toUpperCase(),
		cedula: 5423335,
		centroTrabajoId: '266',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmontilla'.trim().toLowerCase(),
		name: capitalCadena(' MARIA AUXILIADORA'.trim()),
		lastName: capitalCadena('MONTILLA BASTIDAS'.trim()),
		type: 'regular',
		email: 'mmontilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13695,
		nationality: 'V'.toUpperCase(),
		cedula: 11706220,
		centroTrabajoId: '266',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcastaneda'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANTONIO'.trim()),
		lastName: capitalCadena('CASTAÑEDA LOPEZ'.trim()),
		type: 'regular',
		email: 'jcastaneda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13427,
		nationality: 'V'.toUpperCase(),
		cedula: 9118011,
		centroTrabajoId: '266',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycorrea'.trim().toLowerCase(),
		name: capitalCadena(' YOHAMI YELITSA'.trim()),
		lastName: capitalCadena('CORREA SUA'.trim()),
		type: 'regular',
		email: 'ycorrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13903,
		nationality: 'V'.toUpperCase(),
		cedula: 16277254,
		centroTrabajoId: '266',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mereu'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ANTONIETTA'.trim()),
		lastName: capitalCadena('EREU PEREZ'.trim()),
		type: 'regular',
		email: 'mereu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15807,
		nationality: 'V'.toUpperCase(),
		cedula: 17348132,
		centroTrabajoId: '266',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['BARQUISIMETO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DALMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' DALISMARY DEL CARMEN'.trim()),
		lastName: capitalCadena('MARTINEZ DE PEREZ'.trim()),
		type: 'regular',
		email: 'DALMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14007,
		nationality: 'V'.toUpperCase(),
		cedula: 19113492,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCARIELES'.trim().toLowerCase(),
		name: capitalCadena(' MILEIDY YOSELIN'.trim()),
		lastName: capitalCadena('CARIELES COLMENAREZ'.trim()),
		type: 'regular',
		email: 'MCARIELES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14016,
		nationality: 'V'.toUpperCase(),
		cedula: 20321502,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'laurodriguez'.trim().toLowerCase(),
		name: capitalCadena(' LAURA MARIA'.trim()),
		lastName: capitalCadena('RODRIGUEZ QUERALES'.trim()),
		type: 'regular',
		email: 'laurodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15732,
		nationality: 'V'.toUpperCase(),
		cedula: 16238575,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LAYGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' LAYLA CAROLINA'.trim()),
		lastName: capitalCadena('GOMEZ ORELLANA'.trim()),
		type: 'regular',
		email: 'LAYGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16172,
		nationality: 'V'.toUpperCase(),
		cedula: 16530750,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bmendoza'.trim().toLowerCase(),
		name: capitalCadena(' BLANCA MARIA'.trim()),
		lastName: capitalCadena('MENDOZA GALINDEZ'.trim()),
		type: 'regular',
		email: 'bmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13425,
		nationality: 'V'.toUpperCase(),
		cedula: 7462319,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yjimenez'.trim().toLowerCase(),
		name: capitalCadena(' YEIBER JOSE'.trim()),
		lastName: capitalCadena('JIMENEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'yjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15416,
		nationality: 'V'.toUpperCase(),
		cedula: 29873689,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maflores'.trim().toLowerCase(),
		name: capitalCadena(' MARINA DEL CARMEN'.trim()),
		lastName: capitalCadena('FLORES JIMENEZ'.trim()),
		type: 'regular',
		email: 'maflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15460,
		nationality: 'V'.toUpperCase(),
		cedula: 18690389,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ygoyo'.trim().toLowerCase(),
		name: capitalCadena(' YVONNE DEL CARMEN'.trim()),
		lastName: capitalCadena('GOYO TORRES'.trim()),
		type: 'regular',
		email: 'ygoyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13213,
		nationality: 'V'.toUpperCase(),
		cedula: 7462472,
		centroTrabajoId: '267',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['QUIBOR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRIERA'.trim().toLowerCase(),
		name: capitalCadena(' YOEXA TERESA'.trim()),
		lastName: capitalCadena('RIERA VASQUEZ'.trim()),
		type: 'regular',
		email: 'YRIERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14988,
		nationality: 'V'.toUpperCase(),
		cedula: 15263734,
		centroTrabajoId: '268',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARORA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DAARROYO'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ANTONIO'.trim()),
		lastName: capitalCadena('ARROYO ROJAS'.trim()),
		type: 'regular',
		email: 'DAARROYO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13196,
		nationality: 'V'.toUpperCase(),
		cedula: 5930207,
		centroTrabajoId: '268',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARORA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tgomez'.trim().toLowerCase(),
		name: capitalCadena(' THAIS YOLEYDA'.trim()),
		lastName: capitalCadena('GOMEZ PEREZ'.trim()),
		type: 'regular',
		email: 'tgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15043,
		nationality: 'V'.toUpperCase(),
		cedula: 9633860,
		centroTrabajoId: '268',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARORA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecortez'.trim().toLowerCase(),
		name: capitalCadena(' ENZO ANDRES'.trim()),
		lastName: capitalCadena('CORTEZ SIERRALTA'.trim()),
		type: 'regular',
		email: 'ecortez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13871,
		nationality: 'V'.toUpperCase(),
		cedula: 9849241,
		centroTrabajoId: '268',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARORA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'agallardo'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDRA CRISTINA'.trim()),
		lastName: capitalCadena('GALLARDO VILLALOBOS'.trim()),
		type: 'regular',
		email: 'agallardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14987,
		nationality: 'V'.toUpperCase(),
		cedula: 26540152,
		centroTrabajoId: '268',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARORA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KPERNALETE'.trim().toLowerCase(),
		name: capitalCadena(' KEILA CAROLYN'.trim()),
		lastName: capitalCadena('PERNALETE CORDERO'.trim()),
		type: 'regular',
		email: 'KPERNALETE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14989,
		nationality: 'V'.toUpperCase(),
		cedula: 17621230,
		centroTrabajoId: '268',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARORA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' YORWIS JULIO'.trim()),
		lastName: capitalCadena('MARTINEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'YOMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12126,
		nationality: 'V'.toUpperCase(),
		cedula: 19739069,
		centroTrabajoId: '270',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jecaraballo'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER LISETH'.trim()),
		lastName: capitalCadena('CARABALLO VILLEGAS'.trim()),
		type: 'regular',
		email: 'jecaraballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13783,
		nationality: 'V'.toUpperCase(),
		cedula: 12383216,
		centroTrabajoId: '270',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARYURY NAZARET'.trim()),
		lastName: capitalCadena('LOPEZ CHANAGA'.trim()),
		type: 'regular',
		email: 'MARLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15882,
		nationality: 'V'.toUpperCase(),
		cedula: 17442231,
		centroTrabajoId: '270',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EALBORNOZ'.trim().toLowerCase(),
		name: capitalCadena(' ELIZABETH DEL CARMEN'.trim()),
		lastName: capitalCadena('ALBORNOZ ZABALA'.trim()),
		type: 'regular',
		email: 'EALBORNOZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13308,
		nationality: 'V'.toUpperCase(),
		cedula: 12831672,
		centroTrabajoId: '270',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesvivas'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ALIPIO'.trim()),
		lastName: capitalCadena('VIVAS QUINTERO'.trim()),
		type: 'regular',
		email: 'jesvivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13900,
		nationality: 'V'.toUpperCase(),
		cedula: 6968522,
		centroTrabajoId: '270',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mjaramillo'.trim().toLowerCase(),
		name: capitalCadena(' MARY CARMEN'.trim()),
		lastName: capitalCadena('JARAMILLO NEGRETE'.trim()),
		type: 'regular',
		email: 'mjaramillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15823,
		nationality: 'V'.toUpperCase(),
		cedula: 26895423,
		centroTrabajoId: '270',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PASEO LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yeperez'.trim().toLowerCase(),
		name: capitalCadena(' YENNY JOSEFINA'.trim()),
		lastName: capitalCadena('PEREZ TERAN'.trim()),
		type: 'regular',
		email: 'yeperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13219,
		nationality: 'V'.toUpperCase(),
		cedula: 6300663,
		centroTrabajoId: '271',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RISUAREZ'.trim().toLowerCase(),
		name: capitalCadena(' RICARDO DEYEIBERTH'.trim()),
		lastName: capitalCadena('SUAREZ JARAMILLO'.trim()),
		type: 'regular',
		email: 'RISUAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15634,
		nationality: 'V'.toUpperCase(),
		cedula: 30926191,
		centroTrabajoId: '271',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'REGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' REINALDO ANTONIO'.trim()),
		lastName: capitalCadena('GONZALEZ RIVERO'.trim()),
		type: 'regular',
		email: 'REGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15691,
		nationality: 'V'.toUpperCase(),
		cedula: 17402312,
		centroTrabajoId: '271',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'trall'.trim().toLowerCase(),
		name: capitalCadena(' THANIA DE LA CONCEPCIÓN'.trim()),
		lastName: capitalCadena('RALL ZAMBRANO'.trim()),
		type: 'regular',
		email: 'trall@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13357,
		nationality: 'V'.toUpperCase(),
		cedula: 11927019,
		centroTrabajoId: '271',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMBRES DE CURUMO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MLANDAETA'.trim().toLowerCase(),
		name: capitalCadena(' MAIGUALIDA TERESA'.trim()),
		lastName: capitalCadena('LANDAETA MOLINA'.trim()),
		type: 'regular',
		email: 'MLANDAETA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13246,
		nationality: 'V'.toUpperCase(),
		cedula: 5452933,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['AUXILIAR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AAVILAN'.trim().toLowerCase(),
		name: capitalCadena(' ASUGEIS ALENY'.trim()),
		lastName: capitalCadena('AVILAN OROPEZA'.trim()),
		type: 'regular',
		email: 'AAVILAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14375,
		nationality: 'V'.toUpperCase(),
		cedula: 15912851,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lgascon'.trim().toLowerCase(),
		name: capitalCadena(' LISSIT DEL MAR'.trim()),
		lastName: capitalCadena('GASCON LOPEZ'.trim()),
		type: 'regular',
		email: 'lgascon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13445,
		nationality: 'V'.toUpperCase(),
		cedula: 6670839,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariagonzalez'.trim().toLowerCase(),
		name: capitalCadena(' MARIALEJANDRA '.trim()),
		lastName: capitalCadena('GONZALEZ NUÑEZ'.trim()),
		type: 'regular',
		email: 'mariagonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14726,
		nationality: 'V'.toUpperCase(),
		cedula: 17532441,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dgalindez'.trim().toLowerCase(),
		name: capitalCadena(' DINORATH MERCEDES'.trim()),
		lastName: capitalCadena('GALINDEZ '.trim()),
		type: 'regular',
		email: 'dgalindez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13433,
		nationality: 'V'.toUpperCase(),
		cedula: 4850006,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbracamonte'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ALBERTO'.trim()),
		lastName: capitalCadena('BRACAMONTE MELENDEZ'.trim()),
		type: 'regular',
		email: 'cbracamonte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14907,
		nationality: 'V'.toUpperCase(),
		cedula: 25579230,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AALIZO'.trim().toLowerCase(),
		name: capitalCadena(' AYMARA ALEXANDRA'.trim()),
		lastName: capitalCadena('ALIZO AGUILERA'.trim()),
		type: 'regular',
		email: 'AALIZO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15633,
		nationality: 'V'.toUpperCase(),
		cedula: 28052760,
		centroTrabajoId: '272',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. LA CASCADA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANY JOHANA'.trim()),
		lastName: capitalCadena('RODRIGUEZ NOVOA'.trim()),
		type: 'regular',
		email: 'ANRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12758,
		nationality: 'V'.toUpperCase(),
		cedula: 13563659,
		centroTrabajoId: '273',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apacheco'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL RAFAEL'.trim()),
		lastName: capitalCadena('PACHECO '.trim()),
		type: 'regular',
		email: 'apacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14362,
		nationality: 'V'.toUpperCase(),
		cedula: 11426131,
		centroTrabajoId: '273',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' FATIMA VANESA'.trim()),
		lastName: capitalCadena('MARCANO SAUCE'.trim()),
		type: 'regular',
		email: 'FMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13119,
		nationality: 'V'.toUpperCase(),
		cedula: 14163307,
		centroTrabajoId: '273',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tcedeno'.trim().toLowerCase(),
		name: capitalCadena(' TAMARA ELENA'.trim()),
		lastName: capitalCadena('CEDEÑO HIDALGO'.trim()),
		type: 'regular',
		email: 'tcedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13229,
		nationality: 'V'.toUpperCase(),
		cedula: 10112528,
		centroTrabajoId: '273',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ybenitez'.trim().toLowerCase(),
		name: capitalCadena(' YUBIRI JOSEFINA'.trim()),
		lastName: capitalCadena('BENITEZ NAVARRO'.trim()),
		type: 'regular',
		email: 'ybenitez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13798,
		nationality: 'V'.toUpperCase(),
		cedula: 6892869,
		centroTrabajoId: '273',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'auespitia'.trim().toLowerCase(),
		name: capitalCadena(' AURELY JOHANA'.trim()),
		lastName: capitalCadena('ESPITIA NOVA'.trim()),
		type: 'regular',
		email: 'auespitia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15363,
		nationality: 'V'.toUpperCase(),
		cedula: 16218341,
		centroTrabajoId: '273',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msantacolina'.trim().toLowerCase(),
		name: capitalCadena(' MARY DEL VALLE'.trim()),
		lastName: capitalCadena('SANTACOLINA SANTACOLINA'.trim()),
		type: 'regular',
		email: 'msantacolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14908,
		nationality: 'V'.toUpperCase(),
		cedula: 12093957,
		centroTrabajoId: '275',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IGONCALVES'.trim().toLowerCase(),
		name: capitalCadena(' IOHANS ANDRE'.trim()),
		lastName: capitalCadena('GONCALVES MARTINEZ'.trim()),
		type: 'regular',
		email: 'IGONCALVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15032,
		nationality: 'V'.toUpperCase(),
		cedula: 17428240,
		centroTrabajoId: '275',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GQUINTANA'.trim().toLowerCase(),
		name: capitalCadena(' GRACIELA YANINA'.trim()),
		lastName: capitalCadena('QUINTANA BUSTAMANTE'.trim()),
		type: 'regular',
		email: 'GQUINTANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4688,
		nationality: 'V'.toUpperCase(),
		cedula: 16820350,
		centroTrabajoId: '275',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MACOSTA'.trim().toLowerCase(),
		name: capitalCadena(' MARKELLYS YIRALLY'.trim()),
		lastName: capitalCadena('ACOSTA MACHADO'.trim()),
		type: 'regular',
		email: 'MACOSTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15025,
		nationality: 'V'.toUpperCase(),
		cedula: 28312147,
		centroTrabajoId: '275',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPINO'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL EDUARDO'.trim()),
		lastName: capitalCadena('PINO BRACHO'.trim()),
		type: 'regular',
		email: 'MPINO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15776,
		nationality: 'V'.toUpperCase(),
		cedula: 9527661,
		centroTrabajoId: '275',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUARENAS C.C. MIRANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcaceres'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DE LOURDES'.trim()),
		lastName: capitalCadena('CACERES DE CARVALLO'.trim()),
		type: 'regular',
		email: 'mcaceres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13470,
		nationality: 'V'.toUpperCase(),
		cedula: 9749938,
		centroTrabajoId: '276',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MARQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCADETE'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN JUDITH'.trim()),
		lastName: capitalCadena('CADETE MARTINEZ'.trim()),
		type: 'regular',
		email: 'CCADETE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16389,
		nationality: 'V'.toUpperCase(),
		cedula: 10632668,
		centroTrabajoId: '276',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MARQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUOSORIO'.trim().toLowerCase(),
		name: capitalCadena(' YULIMAR '.trim()),
		lastName: capitalCadena('OSORIO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YUOSORIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6155,
		nationality: 'V'.toUpperCase(),
		cedula: 18589527,
		centroTrabajoId: '276',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MARQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avivas'.trim().toLowerCase(),
		name: capitalCadena(' ALEJANDRA SOFIA'.trim()),
		lastName: capitalCadena('VIVAS PARICA'.trim()),
		type: 'regular',
		email: 'avivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10583,
		nationality: 'V'.toUpperCase(),
		cedula: 26210163,
		centroTrabajoId: '276',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MARQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yron'.trim().toLowerCase(),
		name: capitalCadena(' YESSICA ISABELA'.trim()),
		lastName: capitalCadena('RON GUERRERO'.trim()),
		type: 'regular',
		email: 'yron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15820,
		nationality: 'V'.toUpperCase(),
		cedula: 29965370,
		centroTrabajoId: '276',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MARQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ODIAZ'.trim().toLowerCase(),
		name: capitalCadena(' OSLENA '.trim()),
		lastName: capitalCadena('DIAZ RAMIREZ'.trim()),
		type: 'regular',
		email: 'ODIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14115,
		nationality: 'V'.toUpperCase(),
		cedula: 9737318,
		centroTrabajoId: '277',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACARACUAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'neherrera'.trim().toLowerCase(),
		name: capitalCadena(' NERLIS '.trim()),
		lastName: capitalCadena('HERRERA CARDONA'.trim()),
		type: 'regular',
		email: 'neherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13787,
		nationality: 'V'.toUpperCase(),
		cedula: 16972601,
		centroTrabajoId: '277',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACARACUAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' NAILITH ADELA'.trim()),
		lastName: capitalCadena('RUIZ NUÑEZ'.trim()),
		type: 'regular',
		email: 'NRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16369,
		nationality: 'V'.toUpperCase(),
		cedula: 17531447,
		centroTrabajoId: '277',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACARACUAY']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' BETZELYS DEL CARMEN'.trim()),
		lastName: capitalCadena('HERNANDEZ CARRIZALEZ'.trim()),
		type: 'regular',
		email: 'BHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15753,
		nationality: 'V'.toUpperCase(),
		cedula: 20210656,
		centroTrabajoId: '279',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DIFIGUEROA'.trim().toLowerCase(),
		name: capitalCadena(' DILIANA ALEXANDRA'.trim()),
		lastName: capitalCadena('FIGUEROA SALAZAR'.trim()),
		type: 'regular',
		email: 'DIFIGUEROA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10809,
		nationality: 'V'.toUpperCase(),
		cedula: 20823777,
		centroTrabajoId: '279',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANMORENO'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA ESTEFANI'.trim()),
		lastName: capitalCadena('MORENO PAEZ'.trim()),
		type: 'regular',
		email: 'ANMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15693,
		nationality: 'V'.toUpperCase(),
		cedula: 30693432,
		centroTrabajoId: '279',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gnarvaez'.trim().toLowerCase(),
		name: capitalCadena(' GERMAINE JAVIER'.trim()),
		lastName: capitalCadena('NARVAEZ SUAREZ'.trim()),
		type: 'regular',
		email: 'gnarvaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15822,
		nationality: 'V'.toUpperCase(),
		cedula: 25704884,
		centroTrabajoId: '279',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cfarache'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN YUDITH'.trim()),
		lastName: capitalCadena('FARACHE '.trim()),
		type: 'regular',
		email: 'cfarache@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13803,
		nationality: 'V'.toUpperCase(),
		cedula: 7921140,
		centroTrabajoId: '279',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['GUATIRE C.C. BUENAVENTURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CCHACON'.trim().toLowerCase(),
		name: capitalCadena(' CECILIA DEL CARMEN'.trim()),
		lastName: capitalCadena('CHACON FLORES'.trim()),
		type: 'regular',
		email: 'CCHACON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6511,
		nationality: 'V'.toUpperCase(),
		cedula: 17068716,
		centroTrabajoId: '28',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mimarquez'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANGEL'.trim()),
		lastName: capitalCadena('MARQUEZ MARQUEZ'.trim()),
		type: 'regular',
		email: 'mimarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10632,
		nationality: 'V'.toUpperCase(),
		cedula: 19804783,
		centroTrabajoId: '28',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gsubero'.trim().toLowerCase(),
		name: capitalCadena(' GLISMARIS NARCELIS'.trim()),
		lastName: capitalCadena('SUBERO BARRIOS'.trim()),
		type: 'regular',
		email: 'gsubero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12897,
		nationality: 'V'.toUpperCase(),
		cedula: 25255574,
		centroTrabajoId: '28',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frondon'.trim().toLowerCase(),
		name: capitalCadena(' FERNANDO ISAAC'.trim()),
		lastName: capitalCadena('RONDON RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'frondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15879,
		nationality: 'V'.toUpperCase(),
		cedula: 29643955,
		centroTrabajoId: '28',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCARRILLO'.trim().toLowerCase(),
		name: capitalCadena(' JOSLICE ALEJANDRO'.trim()),
		lastName: capitalCadena('CARRILLO GRANADOS'.trim()),
		type: 'regular',
		email: 'JCARRILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1464,
		nationality: 'V'.toUpperCase(),
		cedula: 13573163,
		centroTrabajoId: '28',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASACOIMA DELTA AMACURO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALABRADOR'.trim().toLowerCase(),
		name: capitalCadena(' ARIADNIS CAROLINA'.trim()),
		lastName: capitalCadena('LABRADOR VASQUEZ'.trim()),
		type: 'regular',
		email: 'ALABRADOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15202,
		nationality: 'V'.toUpperCase(),
		cedula: 16826836,
		centroTrabajoId: '280',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anserrano'.trim().toLowerCase(),
		name: capitalCadena(' ANDRES JOSE'.trim()),
		lastName: capitalCadena('SERRANO CORTECIA'.trim()),
		type: 'regular',
		email: 'anserrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15853,
		nationality: 'V'.toUpperCase(),
		cedula: 14840028,
		centroTrabajoId: '280',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'algomez'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDRA JOSEFINA'.trim()),
		lastName: capitalCadena('GOMEZ MAZZEI'.trim()),
		type: 'regular',
		email: 'algomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15254,
		nationality: 'V'.toUpperCase(),
		cedula: 9882139,
		centroTrabajoId: '280',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' MARIANNY DEL VALLE'.trim()),
		lastName: capitalCadena('GARCIA MARTINEZ'.trim()),
		type: 'regular',
		email: 'MARIGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10893,
		nationality: 'V'.toUpperCase(),
		cedula: 19584266,
		centroTrabajoId: '280',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmalave'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS DEL CARMEN'.trim()),
		lastName: capitalCadena('MALAVE GUTIERREZ'.trim()),
		type: 'regular',
		email: 'fmalave@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15410,
		nationality: 'V'.toUpperCase(),
		cedula: 26897794,
		centroTrabajoId: '280',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' ARACELIS TERESA'.trim()),
		lastName: capitalCadena('GONZALEZ NUÑEZ'.trim()),
		type: 'regular',
		email: 'ARGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12859,
		nationality: 'V'.toUpperCase(),
		cedula: 15114110,
		centroTrabajoId: '280',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL PARQUE COSTA AZUL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MGUEVARA'.trim().toLowerCase(),
		name: capitalCadena(' MARLVIRYS KAROLAYN'.trim()),
		lastName: capitalCadena('GUEVARA RONDON'.trim()),
		type: 'regular',
		email: 'MGUEVARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14964,
		nationality: 'V'.toUpperCase(),
		cedula: 18601582,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ROMINA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('VELASQUEZ BERMUDEZ'.trim()),
		type: 'regular',
		email: 'ROVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8815,
		nationality: 'V'.toUpperCase(),
		cedula: 16037835,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LUHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' LUIS MANUEL'.trim()),
		lastName: capitalCadena('HERNANDEZ REQUENA'.trim()),
		type: 'regular',
		email: 'LUHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16391,
		nationality: 'V'.toUpperCase(),
		cedula: 12921640,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RVARGAS'.trim().toLowerCase(),
		name: capitalCadena(' RAMON JOSE'.trim()),
		lastName: capitalCadena('VARGAS '.trim()),
		type: 'regular',
		email: 'RVARGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13029,
		nationality: 'V'.toUpperCase(),
		cedula: 8384943,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIAEGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ELVIRA'.trim()),
		lastName: capitalCadena('GONZALEZ GUTIERREZ'.trim()),
		type: 'regular',
		email: 'MARIAEGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7483,
		nationality: 'V'.toUpperCase(),
		cedula: 16546672,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juacosta'.trim().toLowerCase(),
		name: capitalCadena(' JULISSE GABRIELIS'.trim()),
		lastName: capitalCadena('ACOSTA ALAÑA'.trim()),
		type: 'regular',
		email: 'juacosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15411,
		nationality: 'V'.toUpperCase(),
		cedula: 26326087,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' ROSAIDA DEL VALLE'.trim()),
		lastName: capitalCadena('GARCIA PINO'.trim()),
		type: 'regular',
		email: 'RGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16300,
		nationality: 'V'.toUpperCase(),
		cedula: 15676609,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AIGIL'.trim().toLowerCase(),
		name: capitalCadena(' AIDA MARGARITA'.trim()),
		lastName: capitalCadena('GIL PEÑA'.trim()),
		type: 'regular',
		email: 'AIGIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16392,
		nationality: 'V'.toUpperCase(),
		cedula: 10200557,
		centroTrabajoId: '281',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARGARITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JESMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' JESUS RAFAEL'.trim()),
		lastName: capitalCadena('MARCANO MARCANO'.trim()),
		type: 'regular',
		email: 'JESMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13964,
		nationality: 'V'.toUpperCase(),
		cedula: 13670006,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANAVARRO'.trim().toLowerCase(),
		name: capitalCadena(' ARTURO LUIS'.trim()),
		lastName: capitalCadena('NAVARRO MARTINEZ'.trim()),
		type: 'regular',
		email: 'ANAVARRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14290,
		nationality: 'V'.toUpperCase(),
		cedula: 17408416,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'leperez'.trim().toLowerCase(),
		name: capitalCadena(' LESMA DORGREY'.trim()),
		lastName: capitalCadena('PEREZ CUEVAS'.trim()),
		type: 'regular',
		email: 'leperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15208,
		nationality: 'V'.toUpperCase(),
		cedula: 16234444,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRSALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' KRISTHY DEL VALLE'.trim()),
		lastName: capitalCadena('SALAZAR MILLAN'.trim()),
		type: 'regular',
		email: 'KRSALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13132,
		nationality: 'V'.toUpperCase(),
		cedula: 17653030,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DIUGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' DIULIAN DE JESUS'.trim()),
		lastName: capitalCadena('GONZALEZ CAMPOS'.trim()),
		type: 'regular',
		email: 'DIUGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13241,
		nationality: 'V'.toUpperCase(),
		cedula: 11009688,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JFUENTES'.trim().toLowerCase(),
		name: capitalCadena(' JUAN ALEJANDRO'.trim()),
		lastName: capitalCadena('FUENTES PIÑERUA'.trim()),
		type: 'regular',
		email: 'JFUENTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15164,
		nationality: 'V'.toUpperCase(),
		cedula: 17847370,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OVILLARROEL'.trim().toLowerCase(),
		name: capitalCadena(' ORLANDO RAFAEL'.trim()),
		lastName: capitalCadena('VILLARROEL QUIJADA'.trim()),
		type: 'regular',
		email: 'OVILLARROEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13518,
		nationality: 'V'.toUpperCase(),
		cedula: 9302863,
		centroTrabajoId: '282',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['JUAN GRIEGO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alcolmenares'.trim().toLowerCase(),
		name: capitalCadena(' ALBA MARINA'.trim()),
		lastName: capitalCadena('COLMENARES ESCALONA'.trim()),
		type: 'regular',
		email: 'alcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15492,
		nationality: 'V'.toUpperCase(),
		cedula: 21160753,
		centroTrabajoId: '283',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUANARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llobo'.trim().toLowerCase(),
		name: capitalCadena(' LUSIRAIMA '.trim()),
		lastName: capitalCadena('LOBO CASTILLO'.trim()),
		type: 'regular',
		email: 'llobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14079,
		nationality: 'V'.toUpperCase(),
		cedula: 11715726,
		centroTrabajoId: '283',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUANARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pangulo'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO ERNESTO'.trim()),
		lastName: capitalCadena('ANGULO RAMOS'.trim()),
		type: 'regular',
		email: 'pangulo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14897,
		nationality: 'V'.toUpperCase(),
		cedula: 5130749,
		centroTrabajoId: '283',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUANARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RARANGUREN'.trim().toLowerCase(),
		name: capitalCadena(' RUDY MARISOL'.trim()),
		lastName: capitalCadena('ARANGUREN GONZALEZ'.trim()),
		type: 'regular',
		email: 'RARANGUREN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13309,
		nationality: 'V'.toUpperCase(),
		cedula: 10143623,
		centroTrabajoId: '283',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUANARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mybarra'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DANIELA'.trim()),
		lastName: capitalCadena('YBARRA BASTIDAS'.trim()),
		type: 'regular',
		email: 'mybarra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15074,
		nationality: 'V'.toUpperCase(),
		cedula: 27145960,
		centroTrabajoId: '283',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUANARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NMONTILLA'.trim().toLowerCase(),
		name: capitalCadena(' NORBELYS COROMOTO'.trim()),
		lastName: capitalCadena('MONTILLA RAMOS'.trim()),
		type: 'regular',
		email: 'NMONTILLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15564,
		nationality: 'V'.toUpperCase(),
		cedula: 22091765,
		centroTrabajoId: '283',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GUANARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yladino'.trim().toLowerCase(),
		name: capitalCadena(' YAHELIN COROMOTO'.trim()),
		lastName: capitalCadena('LADINO LADINO'.trim()),
		type: 'regular',
		email: 'yladino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14868,
		nationality: 'V'.toUpperCase(),
		cedula: 24936972,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yerlopez'.trim().toLowerCase(),
		name: capitalCadena(' YERIDA FLORENCIA'.trim()),
		lastName: capitalCadena('LOPEZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'yerlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14794,
		nationality: 'V'.toUpperCase(),
		cedula: 18187687,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HGALVIS'.trim().toLowerCase(),
		name: capitalCadena(' HERNANDO JOSE'.trim()),
		lastName: capitalCadena('GALVIS BERMUDEZ'.trim()),
		type: 'regular',
		email: 'HGALVIS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16221,
		nationality: 'V'.toUpperCase(),
		cedula: 15341045,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anagarcia'.trim().toLowerCase(),
		name: capitalCadena(' ANA KARINA'.trim()),
		lastName: capitalCadena('GARCIA FUSCO'.trim()),
		type: 'regular',
		email: 'anagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15087,
		nationality: 'V'.toUpperCase(),
		cedula: 18186879,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kirodriguez'.trim().toLowerCase(),
		name: capitalCadena(' KISLEIBY BAUDILIANA'.trim()),
		lastName: capitalCadena('RODRIGUEZ CASTRO'.trim()),
		type: 'regular',
		email: 'kirodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15563,
		nationality: 'V'.toUpperCase(),
		cedula: 25161006,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'smartinez'.trim().toLowerCase(),
		name: capitalCadena(' SANDRA ISABEL'.trim()),
		lastName: capitalCadena('MARTINEZ MORENO'.trim()),
		type: 'regular',
		email: 'smartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15873,
		nationality: 'V'.toUpperCase(),
		cedula: 23579207,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMATUTE'.trim().toLowerCase(),
		name: capitalCadena(' ADELA ROSA'.trim()),
		lastName: capitalCadena('MATUTE COLINA'.trim()),
		type: 'regular',
		email: 'AMATUTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13267,
		nationality: 'V'.toUpperCase(),
		cedula: 10643912,
		centroTrabajoId: '284',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUREN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adviazzo'.trim().toLowerCase(),
		name: capitalCadena(' ALICIA MARGARITA'.trim()),
		lastName: capitalCadena('D VIAZZO FERNÁNDEZ'.trim()),
		type: 'regular',
		email: 'adviazzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13646,
		nationality: 'V'.toUpperCase(),
		cedula: 8637842,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMOYEGA'.trim().toLowerCase(),
		name: capitalCadena(' MARIANNY VICTORIA'.trim()),
		lastName: capitalCadena('MOYEGA ZAPATA'.trim()),
		type: 'regular',
		email: 'MMOYEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14332,
		nationality: 'V'.toUpperCase(),
		cedula: 19237458,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALBLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' ALBANELLYS DEL CARMEN'.trim()),
		lastName: capitalCadena('LOPEZ VALLEJO'.trim()),
		type: 'regular',
		email: 'ALBLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7291,
		nationality: 'V'.toUpperCase(),
		cedula: 13360795,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SALFONZO'.trim().toLowerCase(),
		name: capitalCadena(' SOLIMAR MARIA'.trim()),
		lastName: capitalCadena('ALFONZO ASCENCION'.trim()),
		type: 'regular',
		email: 'SALFONZO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9614,
		nationality: 'V'.toUpperCase(),
		cedula: 11673452,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KISALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' KLIBER SIMON'.trim()),
		lastName: capitalCadena('SALAZAR AGUILERA'.trim()),
		type: 'regular',
		email: 'KISALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7290,
		nationality: 'V'.toUpperCase(),
		cedula: 12659457,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PCABRERA'.trim().toLowerCase(),
		name: capitalCadena(' PATRICIA ANDREINA'.trim()),
		lastName: capitalCadena('CABRERA TABEROA'.trim()),
		type: 'regular',
		email: 'PCABRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10498,
		nationality: 'V'.toUpperCase(),
		cedula: 22631617,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSALAZAR'.trim().toLowerCase(),
		name: capitalCadena(' JEANNET CAROLINA'.trim()),
		lastName: capitalCadena('SALAZAR SALAZAR'.trim()),
		type: 'regular',
		email: 'JSALAZAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15415,
		nationality: 'V'.toUpperCase(),
		cedula: 17487142,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YPAEZ'.trim().toLowerCase(),
		name: capitalCadena(' EZEQUIEL JOSE'.trim()),
		lastName: capitalCadena('RIVAS MUDARRA'.trim()),
		type: 'regular',
		email: 'YPAEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15762,
		nationality: 'V'.toUpperCase(),
		cedula: 20063893,
		centroTrabajoId: '285',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CUMANA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmoncada'.trim().toLowerCase(),
		name: capitalCadena(' KARINA DEL CARMEN'.trim()),
		lastName: capitalCadena('MONCADA DE OTALORA'.trim()),
		type: 'regular',
		email: 'kmoncada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15622,
		nationality: 'V'.toUpperCase(),
		cedula: 14502827,
		centroTrabajoId: '286',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvelasco'.trim().toLowerCase(),
		name: capitalCadena(' LILIAM ELIZABETH'.trim()),
		lastName: capitalCadena('VELASCO DE MASTROLONARDO'.trim()),
		type: 'regular',
		email: 'lvelasco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15239,
		nationality: 'V'.toUpperCase(),
		cedula: 6887038,
		centroTrabajoId: '286',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LENUNEZ'.trim().toLowerCase(),
		name: capitalCadena(' LEISLY ANDREINA'.trim()),
		lastName: capitalCadena('NUÑEZ MORA'.trim()),
		type: 'regular',
		email: 'LENUNEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12416,
		nationality: 'V'.toUpperCase(),
		cedula: 16228231,
		centroTrabajoId: '286',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mifarias'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ARCANGEL'.trim()),
		lastName: capitalCadena('FARIAS LISBOA'.trim()),
		type: 'regular',
		email: 'mifarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15117,
		nationality: 'V'.toUpperCase(),
		cedula: 26208890,
		centroTrabajoId: '286',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ESANDOVAL'.trim().toLowerCase(),
		name: capitalCadena(' EGDDA KRISMAR'.trim()),
		lastName: capitalCadena('SANDOVAL PEREIRA'.trim()),
		type: 'regular',
		email: 'ESANDOVAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16274,
		nationality: 'V'.toUpperCase(),
		cedula: 19160753,
		centroTrabajoId: '286',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JTERAN'.trim().toLowerCase(),
		name: capitalCadena(' JULIO CESAR'.trim()),
		lastName: capitalCadena('TERAN BLANCO'.trim()),
		type: 'regular',
		email: 'JTERAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8772,
		nationality: 'V'.toUpperCase(),
		cedula: 11163458,
		centroTrabajoId: '286',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EXRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' EXTEFANNY ALEJANDRA'.trim()),
		lastName: capitalCadena('RUIZ POLO'.trim()),
		type: 'regular',
		email: 'EXRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15006,
		nationality: 'V'.toUpperCase(),
		cedula: 21001614,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMORALES'.trim().toLowerCase(),
		name: capitalCadena(' REINALDO JOSE'.trim()),
		lastName: capitalCadena('MORALES CARDENAS'.trim()),
		type: 'regular',
		email: 'RMORALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13736,
		nationality: 'V'.toUpperCase(),
		cedula: 9217757,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANRAMIREZ'.trim().toLowerCase(),
		name: capitalCadena(' ANA KARIN'.trim()),
		lastName: capitalCadena('RAMIREZ CARRERO'.trim()),
		type: 'regular',
		email: 'ANRAMIREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15730,
		nationality: 'V'.toUpperCase(),
		cedula: 23140683,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WIMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' WILMER EDUARDO'.trim()),
		lastName: capitalCadena('MENDOZA COLMENARES'.trim()),
		type: 'regular',
		email: 'WIMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9402,
		nationality: 'V'.toUpperCase(),
		cedula: 17368388,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emendoza'.trim().toLowerCase(),
		name: capitalCadena(' EDGAR ALFONSO'.trim()),
		lastName: capitalCadena('MENDOZA ESCALANTE'.trim()),
		type: 'regular',
		email: 'emendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13365,
		nationality: 'V'.toUpperCase(),
		cedula: 9210258,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlobo'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALEJANDRO'.trim()),
		lastName: capitalCadena('LOBO ARTETA'.trim()),
		type: 'regular',
		email: 'jlobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15364,
		nationality: 'V'.toUpperCase(),
		cedula: 30604627,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'COROZCO'.trim().toLowerCase(),
		name: capitalCadena(' CAROL VIVIANA'.trim()),
		lastName: capitalCadena('OROZCO GONZALEZ'.trim()),
		type: 'regular',
		email: 'COROZCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16150,
		nationality: 'V'.toUpperCase(),
		cedula: 25168359,
		centroTrabajoId: '287',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN CRISTOBAL 7MA. AVENIDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMEJIAS'.trim().toLowerCase(),
		name: capitalCadena(' MARIA PETRA'.trim()),
		lastName: capitalCadena('MEJIAS DE BASTIDAS'.trim()),
		type: 'regular',
		email: 'MMEJIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13636,
		nationality: 'V'.toUpperCase(),
		cedula: 14834899,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ajusto'.trim().toLowerCase(),
		name: capitalCadena(' AGNER RENE'.trim()),
		lastName: capitalCadena('JUSTO AZUAJE'.trim()),
		type: 'regular',
		email: 'ajusto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13928,
		nationality: 'V'.toUpperCase(),
		cedula: 20151522,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kafernandez'.trim().toLowerCase(),
		name: capitalCadena(' KATTY JOSEFINA'.trim()),
		lastName: capitalCadena('FERNANDEZ CALDERA'.trim()),
		type: 'regular',
		email: 'kafernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13612,
		nationality: 'V'.toUpperCase(),
		cedula: 16276652,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irrivas'.trim().toLowerCase(),
		name: capitalCadena(' IRVIN JOSE'.trim()),
		lastName: capitalCadena('RIVAS QUINTERO'.trim()),
		type: 'regular',
		email: 'irrivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14264,
		nationality: 'V'.toUpperCase(),
		cedula: 25593377,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mlozano'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ELENA'.trim()),
		lastName: capitalCadena('LOZANO BRAVO'.trim()),
		type: 'regular',
		email: 'mlozano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14368,
		nationality: 'V'.toUpperCase(),
		cedula: 13119035,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCABEZAS'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA YUSBELYS'.trim()),
		lastName: capitalCadena('CABEZAS BASTIDAS'.trim()),
		type: 'regular',
		email: 'YCABEZAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15558,
		nationality: 'V'.toUpperCase(),
		cedula: 17305852,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HVALLADARES'.trim().toLowerCase(),
		name: capitalCadena(' HILXIS ALEXANDRA'.trim()),
		lastName: capitalCadena('VALLADARES TORRES'.trim()),
		type: 'regular',
		email: 'HVALLADARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13643,
		nationality: 'V'.toUpperCase(),
		cedula: 17829033,
		centroTrabajoId: '288',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BOCONO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NAULAR'.trim().toLowerCase(),
		name: capitalCadena(' NORYS MARGARITA'.trim()),
		lastName: capitalCadena('AULAR OLIVO'.trim()),
		type: 'regular',
		email: 'NAULAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1219,
		nationality: 'V'.toUpperCase(),
		cedula: 11842400,
		centroTrabajoId: '29',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPIDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRENGIFO'.trim().toLowerCase(),
		name: capitalCadena(' YURAIMA JOSEFINA'.trim()),
		lastName: capitalCadena('RENGIFO SALAZAR'.trim()),
		type: 'regular',
		email: 'YRENGIFO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2040,
		nationality: 'V'.toUpperCase(),
		cedula: 14056295,
		centroTrabajoId: '29',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPIDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GRRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' GREISI ERAIS'.trim()),
		lastName: capitalCadena('RUIZ GUIPE'.trim()),
		type: 'regular',
		email: 'GRRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8185,
		nationality: 'V'.toUpperCase(),
		cedula: 21662651,
		centroTrabajoId: '29',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPIDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JESUS FRANCISCO'.trim()),
		lastName: capitalCadena('VELASQUEZ PALACIOS'.trim()),
		type: 'regular',
		email: 'JEVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11610,
		nationality: 'V'.toUpperCase(),
		cedula: 26299519,
		centroTrabajoId: '29',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPIDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' PIERINA DEL VALLE'.trim()),
		lastName: capitalCadena('GONZALEZ PRADO'.trim()),
		type: 'regular',
		email: 'PGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5466,
		nationality: 'V'.toUpperCase(),
		cedula: 21314645,
		centroTrabajoId: '29',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TUCUPIDO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AVIELMA'.trim().toLowerCase(),
		name: capitalCadena(' ARLENIS YOSELIN'.trim()),
		lastName: capitalCadena('VIELMA FRANCO'.trim()),
		type: 'regular',
		email: 'AVIELMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13800,
		nationality: 'V'.toUpperCase(),
		cedula: 17605017,
		centroTrabajoId: '290',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEVILORIA'.trim().toLowerCase(),
		name: capitalCadena(' JESUS RAMON'.trim()),
		lastName: capitalCadena('VILORIA TORRES'.trim()),
		type: 'regular',
		email: 'JEVILORIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14070,
		nationality: 'V'.toUpperCase(),
		cedula: 19898874,
		centroTrabajoId: '290',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcastellanos'.trim().toLowerCase(),
		name: capitalCadena(' JUAN CARLOS'.trim()),
		lastName: capitalCadena('CASTELLANOS LINARES'.trim()),
		type: 'regular',
		email: 'jcastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13523,
		nationality: 'V'.toUpperCase(),
		cedula: 12905039,
		centroTrabajoId: '290',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JUBARRIOS'.trim().toLowerCase(),
		name: capitalCadena(' JUAN JOSE'.trim()),
		lastName: capitalCadena('BARRIOS BRICEÑO'.trim()),
		type: 'regular',
		email: 'JUBARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16222,
		nationality: 'V'.toUpperCase(),
		cedula: 20790328,
		centroTrabajoId: '290',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mjimenez'.trim().toLowerCase(),
		name: capitalCadena(' MARISOL DEL VALLE'.trim()),
		lastName: capitalCadena('JIMENEZ LEON'.trim()),
		type: 'regular',
		email: 'mjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13522,
		nationality: 'V'.toUpperCase(),
		cedula: 9849630,
		centroTrabajoId: '290',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANA DE MENDOZA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'obriceno'.trim().toLowerCase(),
		name: capitalCadena(' ODALIS COROMOTO'.trim()),
		lastName: capitalCadena('BRICEÑO BRICEÑO'.trim()),
		type: 'regular',
		email: 'obriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13649,
		nationality: 'V'.toUpperCase(),
		cedula: 11618695,
		centroTrabajoId: '291',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRUJILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nbriceno'.trim().toLowerCase(),
		name: capitalCadena(' NORVIS JOSE'.trim()),
		lastName: capitalCadena('BRICEÑO GONZALEZ'.trim()),
		type: 'regular',
		email: 'nbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11088,
		nationality: 'V'.toUpperCase(),
		cedula: 16883154,
		centroTrabajoId: '291',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRUJILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rugonzalez'.trim().toLowerCase(),
		name: capitalCadena(' RUSBER DARIO'.trim()),
		lastName: capitalCadena('GONZALEZ CIFUENTES'.trim()),
		type: 'regular',
		email: 'rugonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15054,
		nationality: 'V'.toUpperCase(),
		cedula: 25604448,
		centroTrabajoId: '291',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRUJILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ateran'.trim().toLowerCase(),
		name: capitalCadena(' ALEIDA DEL CARMEN'.trim()),
		lastName: capitalCadena('TERAN ANGEL'.trim()),
		type: 'regular',
		email: 'ateran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13420,
		nationality: 'V'.toUpperCase(),
		cedula: 5785676,
		centroTrabajoId: '291',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['TRUJILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mruiz'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ISABEL'.trim()),
		lastName: capitalCadena('RUIZ VILLEGAS'.trim()),
		type: 'regular',
		email: 'mruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13774,
		nationality: 'V'.toUpperCase(),
		cedula: 12043329,
		centroTrabajoId: '292',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PLATA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elitorres'.trim().toLowerCase(),
		name: capitalCadena(' ELIZABETH COROMOTO'.trim()),
		lastName: capitalCadena('TORRES BRICEÑO'.trim()),
		type: 'regular',
		email: 'elitorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14388,
		nationality: 'V'.toUpperCase(),
		cedula: 14755827,
		centroTrabajoId: '292',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PLATA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'framos'.trim().toLowerCase(),
		name: capitalCadena(' FELIPE ANTONIO'.trim()),
		lastName: capitalCadena('RAMOS LAGUNA'.trim()),
		type: 'regular',
		email: 'framos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13710,
		nationality: 'V'.toUpperCase(),
		cedula: 16327129,
		centroTrabajoId: '292',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PLATA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'galbarran'.trim().toLowerCase(),
		name: capitalCadena(' GIORGINA MARGARITA'.trim()),
		lastName: capitalCadena('ALBARRAN ROJO'.trim()),
		type: 'regular',
		email: 'galbarran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13740,
		nationality: 'V'.toUpperCase(),
		cedula: 13897525,
		centroTrabajoId: '292',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PLATA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'antrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' ANTONIO JOSE'.trim()),
		lastName: capitalCadena('RODRIGUEZ GRATEROL'.trim()),
		type: 'regular',
		email: 'antrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13187,
		nationality: 'V'.toUpperCase(),
		cedula: 21364243,
		centroTrabajoId: '292',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PLATA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARZAMBRANO'.trim().toLowerCase(),
		name: capitalCadena(' ARELIS JOSEFINA'.trim()),
		lastName: capitalCadena('ZAMBRANO RIVERO'.trim()),
		type: 'regular',
		email: 'ARZAMBRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15794,
		nationality: 'V'.toUpperCase(),
		cedula: 15043395,
		centroTrabajoId: '292',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PLATA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KSUAREZ'.trim().toLowerCase(),
		name: capitalCadena(' KARLA ANDREINA'.trim()),
		lastName: capitalCadena('SUAREZ '.trim()),
		type: 'regular',
		email: 'KSUAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5044,
		nationality: 'V'.toUpperCase(),
		cedula: 16267476,
		centroTrabajoId: '293',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mirramirez'.trim().toLowerCase(),
		name: capitalCadena(' MIREYA DEL ROSARIO'.trim()),
		lastName: capitalCadena('RAMIREZ BRICEÑO'.trim()),
		type: 'regular',
		email: 'mirramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13949,
		nationality: 'V'.toUpperCase(),
		cedula: 14148945,
		centroTrabajoId: '293',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTOUSSAINT'.trim().toLowerCase(),
		name: capitalCadena(' MARY CARMEN'.trim()),
		lastName: capitalCadena('TOUSSAINT RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'MTOUSSAINT@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14410,
		nationality: 'V'.toUpperCase(),
		cedula: 9458742,
		centroTrabajoId: '293',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frramirez'.trim().toLowerCase(),
		name: capitalCadena(' FRANGELY CAROLINA'.trim()),
		lastName: capitalCadena('RAMIREZ ALARCON'.trim()),
		type: 'regular',
		email: 'frramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15849,
		nationality: 'V'.toUpperCase(),
		cedula: 21064289,
		centroTrabajoId: '293',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AVOLCAN'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA DEL VALLE'.trim()),
		lastName: capitalCadena('VOLCAN TORRES'.trim()),
		type: 'regular',
		email: 'AVOLCAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13765,
		nationality: 'V'.toUpperCase(),
		cedula: 16883295,
		centroTrabajoId: '293',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALERA LA PUERTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eescalona'.trim().toLowerCase(),
		name: capitalCadena(' ESTEFANI CAROLINA'.trim()),
		lastName: capitalCadena('ESCALONA MENDEZ'.trim()),
		type: 'regular',
		email: 'eescalona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14192,
		nationality: 'V'.toUpperCase(),
		cedula: 26763491,
		centroTrabajoId: '294',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA LA MAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DOMORENO'.trim().toLowerCase(),
		name: capitalCadena(' DOMAIKELYS FABIANA'.trim()),
		lastName: capitalCadena('MORENO ESPINOZA'.trim()),
		type: 'regular',
		email: 'DOMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8350,
		nationality: 'V'.toUpperCase(),
		cedula: 20784928,
		centroTrabajoId: '294',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA LA MAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCORDOVA'.trim().toLowerCase(),
		name: capitalCadena(' JULENNY OMERYS'.trim()),
		lastName: capitalCadena('CORDOVA GIL'.trim()),
		type: 'regular',
		email: 'JCORDOVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15685,
		nationality: 'V'.toUpperCase(),
		cedula: 14769307,
		centroTrabajoId: '294',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA LA MAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'danigonzalez'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ALFREDO'.trim()),
		lastName: capitalCadena('GONZALEZ ATENCIO'.trim()),
		type: 'regular',
		email: 'danigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13597,
		nationality: 'V'.toUpperCase(),
		cedula: 6472889,
		centroTrabajoId: '294',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA LA MAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GEBARRIOS'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS DAYANA'.trim()),
		lastName: capitalCadena('BARRIOS VANEGAS'.trim()),
		type: 'regular',
		email: 'GEBARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14959,
		nationality: 'V'.toUpperCase(),
		cedula: 28458361,
		centroTrabajoId: '294',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA LA MAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' MIREYA DEL CARMEN'.trim()),
		lastName: capitalCadena('RIVAS BRIZUELA'.trim()),
		type: 'regular',
		email: 'MIRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16307,
		nationality: 'V'.toUpperCase(),
		cedula: 10583294,
		centroTrabajoId: '294',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CATIA LA MAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCONTRERAS'.trim().toLowerCase(),
		name: capitalCadena(' LEONIDAS '.trim()),
		lastName: capitalCadena('CONTRERAS CONTRERAS'.trim()),
		type: 'regular',
		email: 'LCONTRERAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15661,
		nationality: 'V'.toUpperCase(),
		cedula: 7927969,
		centroTrabajoId: '295',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL JUNQUITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lerivero'.trim().toLowerCase(),
		name: capitalCadena(' LEONARDO DAVID'.trim()),
		lastName: capitalCadena('RIVERO SORONDO'.trim()),
		type: 'regular',
		email: 'lerivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15485,
		nationality: 'V'.toUpperCase(),
		cedula: 27788883,
		centroTrabajoId: '295',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL JUNQUITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RMORA'.trim().toLowerCase(),
		name: capitalCadena(' REYES MARIA'.trim()),
		lastName: capitalCadena('MORA GUERRERO'.trim()),
		type: 'regular',
		email: 'RMORA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9940,
		nationality: 'V'.toUpperCase(),
		cedula: 12847352,
		centroTrabajoId: '295',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL JUNQUITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avelandria'.trim().toLowerCase(),
		name: capitalCadena(' ANDERSON GABRIEL'.trim()),
		lastName: capitalCadena('VELANDRIA MORALES'.trim()),
		type: 'regular',
		email: 'avelandria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15818,
		nationality: 'V'.toUpperCase(),
		cedula: 28338435,
		centroTrabajoId: '295',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL JUNQUITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aqgarcia'.trim().toLowerCase(),
		name: capitalCadena(' AQUILES RAFAEL'.trim()),
		lastName: capitalCadena('GARCIA BERROTERAN'.trim()),
		type: 'regular',
		email: 'aqgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13627,
		nationality: 'V'.toUpperCase(),
		cedula: 6826479,
		centroTrabajoId: '295',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL JUNQUITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysalas'.trim().toLowerCase(),
		name: capitalCadena(' YENITZ RAMONA'.trim()),
		lastName: capitalCadena('SALAS DE FIGUEREDO'.trim()),
		type: 'regular',
		email: 'ysalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13414,
		nationality: 'V'.toUpperCase(),
		cedula: 9171363,
		centroTrabajoId: '296',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MENE GRANDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvargas'.trim().toLowerCase(),
		name: capitalCadena(' JUAN JOSE'.trim()),
		lastName: capitalCadena('VARGAS CARDONA'.trim()),
		type: 'regular',
		email: 'jvargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14085,
		nationality: 'V'.toUpperCase(),
		cedula: 19576364,
		centroTrabajoId: '296',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MENE GRANDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elmarin'.trim().toLowerCase(),
		name: capitalCadena(' ELIDA GRICELIA'.trim()),
		lastName: capitalCadena('MARIN MARIN'.trim()),
		type: 'regular',
		email: 'elmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13305,
		nationality: 'V'.toUpperCase(),
		cedula: 7855169,
		centroTrabajoId: '296',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MENE GRANDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariasanchez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA TERESA'.trim()),
		lastName: capitalCadena('SANCHEZ PEÑA'.trim()),
		type: 'regular',
		email: 'mariasanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14199,
		nationality: 'V'.toUpperCase(),
		cedula: 16833544,
		centroTrabajoId: '296',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MENE GRANDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JHENRIQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JEINNY MILAGRO'.trim()),
		lastName: capitalCadena('HENRIQUEZ APONTE'.trim()),
		type: 'regular',
		email: 'JHENRIQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16072,
		nationality: 'V'.toUpperCase(),
		cedula: 24909543,
		centroTrabajoId: '296',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MENE GRANDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mquevedo'.trim().toLowerCase(),
		name: capitalCadena(' MAGDIEL MIGUEL'.trim()),
		lastName: capitalCadena('QUEVEDO '.trim()),
		type: 'regular',
		email: 'mquevedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13379,
		nationality: 'V'.toUpperCase(),
		cedula: 13283555,
		centroTrabajoId: '296',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MENE GRANDE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yuromero'.trim().toLowerCase(),
		name: capitalCadena(' YUBIRY JOSEFINA'.trim()),
		lastName: capitalCadena('ROMERO ZERPA'.trim()),
		type: 'regular',
		email: 'yuromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13253,
		nationality: 'V'.toUpperCase(),
		cedula: 7968827,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncaridad'.trim().toLowerCase(),
		name: capitalCadena(' NELSY MARCELINA'.trim()),
		lastName: capitalCadena('CARIDAD CARDENAS'.trim()),
		type: 'regular',
		email: 'ncaridad@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13864,
		nationality: 'V'.toUpperCase(),
		cedula: 11886250,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE CARLOS'.trim()),
		lastName: capitalCadena('MEDINA PEREIRA'.trim()),
		type: 'regular',
		email: 'JOSMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16305,
		nationality: 'V'.toUpperCase(),
		cedula: 18371090,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'igutierrez'.trim().toLowerCase(),
		name: capitalCadena(' ISABELINA D.L.SANTOS'.trim()),
		lastName: capitalCadena('GUTIERREZ DE PIÑA'.trim()),
		type: 'regular',
		email: 'igutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13231,
		nationality: 'V'.toUpperCase(),
		cedula: 10081428,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' YOLEIDA JOSEFINA'.trim()),
		lastName: capitalCadena('BLANCO GONZALEZ'.trim()),
		type: 'regular',
		email: 'YOBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16246,
		nationality: 'V'.toUpperCase(),
		cedula: 7873501,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jlara'.trim().toLowerCase(),
		name: capitalCadena(' JEAN CARLO'.trim()),
		lastName: capitalCadena('LARA BRACHO'.trim()),
		type: 'regular',
		email: 'jlara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13961,
		nationality: 'V'.toUpperCase(),
		cedula: 15974880,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ngarcia'.trim().toLowerCase(),
		name: capitalCadena(' NELISETH DEL CARMEN'.trim()),
		lastName: capitalCadena('GARCIA MEDINA'.trim()),
		type: 'regular',
		email: 'ngarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15710,
		nationality: 'V'.toUpperCase(),
		cedula: 23757476,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIAS'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ANGELICA'.trim()),
		lastName: capitalCadena('ARIAS GUTIERREZ'.trim()),
		type: 'regular',
		email: 'MARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16304,
		nationality: 'V'.toUpperCase(),
		cedula: 28059198,
		centroTrabajoId: '297',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CABIMAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RARODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' RAFAEL ENRIQUE'.trim()),
		lastName: capitalCadena('RODRIGUEZ GODOY'.trim()),
		type: 'regular',
		email: 'RARODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16189,
		nationality: 'V'.toUpperCase(),
		cedula: 14473260,
		centroTrabajoId: '298',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA BARBARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YRHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' YRIANA RAMONA'.trim()),
		lastName: capitalCadena('HERNANDEZ MONTIEL'.trim()),
		type: 'regular',
		email: 'YRHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15910,
		nationality: 'V'.toUpperCase(),
		cedula: 12134848,
		centroTrabajoId: '298',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA BARBARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'megonzalez'.trim().toLowerCase(),
		name: capitalCadena(' MERIS NAYLE'.trim()),
		lastName: capitalCadena('GONZALEZ '.trim()),
		type: 'regular',
		email: 'megonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13329,
		nationality: 'V'.toUpperCase(),
		cedula: 7781151,
		centroTrabajoId: '298',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA BARBARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aanez'.trim().toLowerCase(),
		name: capitalCadena(' ASDRUBAL DE JESUS'.trim()),
		lastName: capitalCadena('AÑEZ FEREIRA'.trim()),
		type: 'regular',
		email: 'aanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13351,
		nationality: 'V'.toUpperCase(),
		cedula: 7897875,
		centroTrabajoId: '298',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA BARBARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcastellano'.trim().toLowerCase(),
		name: capitalCadena(' DAILIN DEL ROSARIO'.trim()),
		lastName: capitalCadena('CASTELLANO NIÑO'.trim()),
		type: 'regular',
		email: 'dcastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13967,
		nationality: 'V'.toUpperCase(),
		cedula: 19099235,
		centroTrabajoId: '299',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CONCEPCION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alrivera'.trim().toLowerCase(),
		name: capitalCadena(' ALBA ELANY'.trim()),
		lastName: capitalCadena('RIVERA URDANETA'.trim()),
		type: 'regular',
		email: 'alrivera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13394,
		nationality: 'V'.toUpperCase(),
		cedula: 9792001,
		centroTrabajoId: '299',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CONCEPCION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'scadenas'.trim().toLowerCase(),
		name: capitalCadena(' SUYIN OCARINA'.trim()),
		lastName: capitalCadena('CADENAS DE PERCHE'.trim()),
		type: 'regular',
		email: 'scadenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13390,
		nationality: 'V'.toUpperCase(),
		cedula: 12444859,
		centroTrabajoId: '299',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CONCEPCION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' ALIZBETH DEL VALLE'.trim()),
		lastName: capitalCadena('RODRIGUEZ DAVIS'.trim()),
		type: 'regular',
		email: 'alrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13588,
		nationality: 'V'.toUpperCase(),
		cedula: 15282838,
		centroTrabajoId: '299',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CONCEPCION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HMATUTE'.trim().toLowerCase(),
		name: capitalCadena(' HAROLD SEGUNDO'.trim()),
		lastName: capitalCadena('MATUTE MORALES'.trim()),
		type: 'regular',
		email: 'HMATUTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16048,
		nationality: 'V'.toUpperCase(),
		cedula: 25883035,
		centroTrabajoId: '299',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA CONCEPCION']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EMROMERO'.trim().toLowerCase(),
		name: capitalCadena(' EMILY PAOLA'.trim()),
		lastName: capitalCadena('ROMERO SANCHEZ'.trim()),
		type: 'regular',
		email: 'EMROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9214,
		nationality: 'V'.toUpperCase(),
		cedula: 23456050,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rbarrios'.trim().toLowerCase(),
		name: capitalCadena(' RIMERCY DEL CARMEN'.trim()),
		lastName: capitalCadena('BARRIOS PEROZO'.trim()),
		type: 'regular',
		email: 'rbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14054,
		nationality: 'V'.toUpperCase(),
		cedula: 16607407,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jaldana'.trim().toLowerCase(),
		name: capitalCadena(' JAINET MARINA'.trim()),
		lastName: capitalCadena('ALDANA DE ALMARZA'.trim()),
		type: 'regular',
		email: 'jaldana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9692,
		nationality: 'V'.toUpperCase(),
		cedula: 16367677,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WMAYOR'.trim().toLowerCase(),
		name: capitalCadena(' WILFREDO ENRIQUE'.trim()),
		lastName: capitalCadena('MAYOR CAMACHO'.trim()),
		type: 'regular',
		email: 'WMAYOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13030,
		nationality: 'V'.toUpperCase(),
		cedula: 15263146,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA CAROLINA'.trim()),
		lastName: capitalCadena('DIAZ ALVARADO'.trim()),
		type: 'regular',
		email: 'DDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13615,
		nationality: 'V'.toUpperCase(),
		cedula: 17416889,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rantunez'.trim().toLowerCase(),
		name: capitalCadena(' ROSELIN DEL VALLE'.trim()),
		lastName: capitalCadena('ANTUNEZ ANDARA'.trim()),
		type: 'regular',
		email: 'rantunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13461,
		nationality: 'V'.toUpperCase(),
		cedula: 14415412,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoreno'.trim().toLowerCase(),
		name: capitalCadena(' JORGE JAVIER'.trim()),
		lastName: capitalCadena('MORENO CAMARGO'.trim()),
		type: 'regular',
		email: 'jmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12975,
		nationality: 'V'.toUpperCase(),
		cedula: 30933567,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lportillo'.trim().toLowerCase(),
		name: capitalCadena(' LIZBELY YOAMA'.trim()),
		lastName: capitalCadena('PORTILLO LUZARDO'.trim()),
		type: 'regular',
		email: 'lportillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13745,
		nationality: 'V'.toUpperCase(),
		cedula: 14117881,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ipuche'.trim().toLowerCase(),
		name: capitalCadena(' INGRID JOSEFINA'.trim()),
		lastName: capitalCadena('PUCHE FUENMAYOR'.trim()),
		type: 'regular',
		email: 'ipuche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14983,
		nationality: 'V'.toUpperCase(),
		cedula: 15193750,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kvelasquez'.trim().toLowerCase(),
		name: capitalCadena(' KERVIN RAFAEL'.trim()),
		lastName: capitalCadena('VELASQUEZ OJEDA'.trim()),
		type: 'regular',
		email: 'kvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15520,
		nationality: 'V'.toUpperCase(),
		cedula: 14748809,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARMELEAN'.trim().toLowerCase(),
		name: capitalCadena(' MARIA FERNANDA'.trim()),
		lastName: capitalCadena('MELEAN MOLERO'.trim()),
		type: 'regular',
		email: 'MARMELEAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15711,
		nationality: 'V'.toUpperCase(),
		cedula: 31061389,
		centroTrabajoId: '30',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'monrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' MONICA MARIA'.trim()),
		lastName: capitalCadena('RODRIGUEZ SANCHEZ'.trim()),
		type: 'regular',
		email: 'monrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13350,
		nationality: 'V'.toUpperCase(),
		cedula: 13141043,
		centroTrabajoId: '300',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mescalante'.trim().toLowerCase(),
		name: capitalCadena(' MAIRLIM ESPERANZA'.trim()),
		lastName: capitalCadena('ESCALANTE RUIZ'.trim()),
		type: 'regular',
		email: 'mescalante@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13724,
		nationality: 'V'.toUpperCase(),
		cedula: 16281209,
		centroTrabajoId: '300',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OROJAS'.trim().toLowerCase(),
		name: capitalCadena(' OSMAR JOSUE'.trim()),
		lastName: capitalCadena('ROJAS VENEGAS'.trim()),
		type: 'regular',
		email: 'OROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16024,
		nationality: 'V'.toUpperCase(),
		cedula: 30975379,
		centroTrabajoId: '300',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MIHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MIGCHAEL ALEJANDRO'.trim()),
		lastName: capitalCadena('HERNANDEZ ARRIETA'.trim()),
		type: 'regular',
		email: 'MIHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16070,
		nationality: 'V'.toUpperCase(),
		cedula: 21357106,
		centroTrabajoId: '300',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CASIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mdelgado'.trim().toLowerCase(),
		name: capitalCadena(' MARIANNY JOSE'.trim()),
		lastName: capitalCadena('DELGADO COLINA'.trim()),
		type: 'regular',
		email: 'mdelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14861,
		nationality: 'V'.toUpperCase(),
		cedula: 27530400,
		centroTrabajoId: '301',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACHIQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'esortiz'.trim().toLowerCase(),
		name: capitalCadena(' ESTHER CAROLINA'.trim()),
		lastName: capitalCadena('ORTIZ LOPEZ'.trim()),
		type: 'regular',
		email: 'esortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14866,
		nationality: 'V'.toUpperCase(),
		cedula: 23284148,
		centroTrabajoId: '301',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACHIQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmarin'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN ENRIQUE'.trim()),
		lastName: capitalCadena('MARIN CASTILLO'.trim()),
		type: 'regular',
		email: 'jmarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14331,
		nationality: 'V'.toUpperCase(),
		cedula: 25876931,
		centroTrabajoId: '301',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACHIQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rcorrea'.trim().toLowerCase(),
		name: capitalCadena(' RICARDO JOSE'.trim()),
		lastName: capitalCadena('CORREA ATENCIA'.trim()),
		type: 'regular',
		email: 'rcorrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13893,
		nationality: 'V'.toUpperCase(),
		cedula: 18522858,
		centroTrabajoId: '301',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACHIQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lublanco'.trim().toLowerCase(),
		name: capitalCadena(' LUZ ELENA'.trim()),
		lastName: capitalCadena('BLANCO NIÑO'.trim()),
		type: 'regular',
		email: 'lublanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14900,
		nationality: 'V'.toUpperCase(),
		cedula: 27886853,
		centroTrabajoId: '301',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACHIQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lusanchez'.trim().toLowerCase(),
		name: capitalCadena(' LUIS JOSE'.trim()),
		lastName: capitalCadena('SANCHEZ INCIARTE'.trim()),
		type: 'regular',
		email: 'lusanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14108,
		nationality: 'V'.toUpperCase(),
		cedula: 20816587,
		centroTrabajoId: '301',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MACHIQUES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gumendez'.trim().toLowerCase(),
		name: capitalCadena(' GUSTAVO JOSE'.trim()),
		lastName: capitalCadena('MENDEZ REVEROL'.trim()),
		type: 'regular',
		email: 'gumendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13874,
		nationality: 'V'.toUpperCase(),
		cedula: 11694062,
		centroTrabajoId: '302',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARRASQUERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lybanez'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ANGEL'.trim()),
		lastName: capitalCadena('YBAÑEZ MANARE'.trim()),
		type: 'regular',
		email: 'lybanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14354,
		nationality: 'V'.toUpperCase(),
		cedula: 15945899,
		centroTrabajoId: '302',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARRASQUERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'glmedina'.trim().toLowerCase(),
		name: capitalCadena(' GLEIMYS ISMARY'.trim()),
		lastName: capitalCadena('MEDINA CHOURIO'.trim()),
		type: 'regular',
		email: 'glmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15725,
		nationality: 'V'.toUpperCase(),
		cedula: 27339567,
		centroTrabajoId: '302',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARRASQUERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lisgonzalez'.trim().toLowerCase(),
		name: capitalCadena(' LISNEYDA BEATRIZ'.trim()),
		lastName: capitalCadena('GONZALEZ NAVA'.trim()),
		type: 'regular',
		email: 'lisgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15112,
		nationality: 'V'.toUpperCase(),
		cedula: 15479659,
		centroTrabajoId: '302',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CARRASQUERO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yaromero'.trim().toLowerCase(),
		name: capitalCadena(' YANMILETH DEL VALLE'.trim()),
		lastName: capitalCadena('ROMERO CARRUYO'.trim()),
		type: 'regular',
		email: 'yaromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14093,
		nationality: 'V'.toUpperCase(),
		cedula: 14356920,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SPAZ'.trim().toLowerCase(),
		name: capitalCadena(' SERGIO JOSE'.trim()),
		lastName: capitalCadena('PAZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'SPAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16298,
		nationality: 'V'.toUpperCase(),
		cedula: 15286520,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCARIDAD'.trim().toLowerCase(),
		name: capitalCadena(' DIAMELYS SIRAMAD'.trim()),
		lastName: capitalCadena('CARIDAD PEÑA'.trim()),
		type: 'regular',
		email: 'DCARIDAD@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16289,
		nationality: 'V'.toUpperCase(),
		cedula: 13298265,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gvillalobo'.trim().toLowerCase(),
		name: capitalCadena(' GLENDYS YASMELI'.trim()),
		lastName: capitalCadena('VILLALOBOS FERNANDEZ'.trim()),
		type: 'regular',
		email: 'gvillalobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13863,
		nationality: 'V'.toUpperCase(),
		cedula: 12445815,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMORILLO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('MORILLO MORILLO'.trim()),
		type: 'regular',
		email: 'MMORILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15717,
		nationality: 'V'.toUpperCase(),
		cedula: 28428360,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPOLANCO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA GABRIELA'.trim()),
		lastName: capitalCadena('POLANCO INSIGNARE'.trim()),
		type: 'regular',
		email: 'MPOLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16303,
		nationality: 'V'.toUpperCase(),
		cedula: 29842574,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zbarrios'.trim().toLowerCase(),
		name: capitalCadena(' ZAILIS COROMOTO'.trim()),
		lastName: capitalCadena('BARRIOS MORALES'.trim()),
		type: 'regular',
		email: 'zbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13252,
		nationality: 'V'.toUpperCase(),
		cedula: 9705199,
		centroTrabajoId: '303',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maigonzalez'.trim().toLowerCase(),
		name: capitalCadena(' MAIRITH DEL CARMEN'.trim()),
		lastName: capitalCadena('GONZALEZ GARCIA'.trim()),
		type: 'regular',
		email: 'maigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13681,
		nationality: 'V'.toUpperCase(),
		cedula: 12406790,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'momana'.trim().toLowerCase(),
		name: capitalCadena(' MONAMY ALEJANDRA'.trim()),
		lastName: capitalCadena('OMAÑA SIMANCAS'.trim()),
		type: 'regular',
		email: 'momana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13633,
		nationality: 'V'.toUpperCase(),
		cedula: 14356855,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcarrizo'.trim().toLowerCase(),
		name: capitalCadena(' DOUGLAS ALBERTO'.trim()),
		lastName: capitalCadena('CARRIZO LOAIZA'.trim()),
		type: 'regular',
		email: 'dcarrizo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13866,
		nationality: 'V'.toUpperCase(),
		cedula: 18217283,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VCOLMENAREZ'.trim().toLowerCase(),
		name: capitalCadena(' VANESSA CAROLINA'.trim()),
		lastName: capitalCadena('COLMENAREZ DE DAZA'.trim()),
		type: 'regular',
		email: 'VCOLMENAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12952,
		nationality: 'V'.toUpperCase(),
		cedula: 17834752,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APAZPIRELA'.trim().toLowerCase(),
		name: capitalCadena(' ANTONIA ELENA'.trim()),
		lastName: capitalCadena('PAZ PIRELA'.trim()),
		type: 'regular',
		email: 'APAZPIRELA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14247,
		nationality: 'V'.toUpperCase(),
		cedula: 18572144,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yucolina'.trim().toLowerCase(),
		name: capitalCadena(' YUSMARY DEL VALLE'.trim()),
		lastName: capitalCadena('COLINA GARCIA'.trim()),
		type: 'regular',
		email: 'yucolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15322,
		nationality: 'V'.toUpperCase(),
		cedula: 13371268,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RVILCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' ROBERTO GERMANICO'.trim()),
		lastName: capitalCadena('VILCHEZ MENDEZ'.trim()),
		type: 'regular',
		email: 'RVILCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13108,
		nationality: 'V'.toUpperCase(),
		cedula: 16296033,
		centroTrabajoId: '304',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['INDIO MARA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'laranguibel'.trim().toLowerCase(),
		name: capitalCadena(' LILA JOSEFINA'.trim()),
		lastName: capitalCadena('ARANGUIBEL DE GONZALEZ'.trim()),
		type: 'regular',
		email: 'laranguibel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13266,
		nationality: 'V'.toUpperCase(),
		cedula: 9779954,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aochoa'.trim().toLowerCase(),
		name: capitalCadena(' ANN MARY'.trim()),
		lastName: capitalCadena('OCHOA OCHOA'.trim()),
		type: 'regular',
		email: 'aochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13626,
		nationality: 'V'.toUpperCase(),
		cedula: 15260790,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROXGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' ROXANA LORENA'.trim()),
		lastName: capitalCadena('GONZALEZ LOZANO'.trim()),
		type: 'regular',
		email: 'ROXGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6556,
		nationality: 'V'.toUpperCase(),
		cedula: 14208802,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ENEGRON'.trim().toLowerCase(),
		name: capitalCadena(' ENYEILY MARIA'.trim()),
		lastName: capitalCadena('NEGRON SUAREZ'.trim()),
		type: 'regular',
		email: 'ENEGRON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14427,
		nationality: 'V'.toUpperCase(),
		cedula: 17099421,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arueda'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA ISABEL'.trim()),
		lastName: capitalCadena('RUEDA SIBADA'.trim()),
		type: 'regular',
		email: 'arueda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15319,
		nationality: 'V'.toUpperCase(),
		cedula: 17005312,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDIS ANGELICA'.trim()),
		lastName: capitalCadena('RODRIGUEZ MUJICA'.trim()),
		type: 'regular',
		email: 'EDRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15719,
		nationality: 'V'.toUpperCase(),
		cedula: 26261860,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JECORDERO'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER JACKELINE'.trim()),
		lastName: capitalCadena('CORDERO GUTIERREZ'.trim()),
		type: 'regular',
		email: 'JECORDERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15791,
		nationality: 'V'.toUpperCase(),
		cedula: 24728629,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kecarrillo'.trim().toLowerCase(),
		name: capitalCadena(' KEYLA DEL CARMEN'.trim()),
		lastName: capitalCadena('CARRILLO DE MORALES'.trim()),
		type: 'regular',
		email: 'kecarrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13600,
		nationality: 'V'.toUpperCase(),
		cedula: 13372558,
		centroTrabajoId: '305',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GALERIAS MALL - MCBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrubio'.trim().toLowerCase(),
		name: capitalCadena(' LORENA JOSEFINA'.trim()),
		lastName: capitalCadena('RUBIO SOTO'.trim()),
		type: 'regular',
		email: 'lrubio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13694,
		nationality: 'V'.toUpperCase(),
		cedula: 9782087,
		centroTrabajoId: '306',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gigonzalez'.trim().toLowerCase(),
		name: capitalCadena(' GILBERTO JOSE'.trim()),
		lastName: capitalCadena('GONZALEZ BALZAN'.trim()),
		type: 'regular',
		email: 'gigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13271,
		nationality: 'V'.toUpperCase(),
		cedula: 12805489,
		centroTrabajoId: '306',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yalmaza'.trim().toLowerCase(),
		name: capitalCadena(' YOHELIS ALEJANDRA'.trim()),
		lastName: capitalCadena('ALMAZA CORNEJO'.trim()),
		type: 'regular',
		email: 'yalmaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15708,
		nationality: 'V'.toUpperCase(),
		cedula: 28488261,
		centroTrabajoId: '306',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jurdaneta'.trim().toLowerCase(),
		name: capitalCadena(' JUDITH DEL CARMEN'.trim()),
		lastName: capitalCadena('URDANETA '.trim()),
		type: 'regular',
		email: 'jurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13306,
		nationality: 'V'.toUpperCase(),
		cedula: 9712075,
		centroTrabajoId: '306',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CENTRO LAGO MALL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMONTIEL'.trim().toLowerCase(),
		name: capitalCadena(' LUZNEY '.trim()),
		lastName: capitalCadena('MONTIEL AVENDAÑO'.trim()),
		type: 'regular',
		email: 'LMONTIEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16049,
		nationality: 'V'.toUpperCase(),
		cedula: 14833671,
		centroTrabajoId: '308',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eolivar'.trim().toLowerCase(),
		name: capitalCadena(' EDGAR ALEXANDER'.trim()),
		lastName: capitalCadena('OLIVAR MORILLO'.trim()),
		type: 'regular',
		email: 'eolivar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15320,
		nationality: 'V'.toUpperCase(),
		cedula: 12307923,
		centroTrabajoId: '308',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dvillalobos'.trim().toLowerCase(),
		name: capitalCadena(' DAMARYS ROSA'.trim()),
		lastName: capitalCadena('VILLALOBOS FIGUEREDO'.trim()),
		type: 'regular',
		email: 'dvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13631,
		nationality: 'V'.toUpperCase(),
		cedula: 16118791,
		centroTrabajoId: '308',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ctunon'.trim().toLowerCase(),
		name: capitalCadena(' CAROLINA DEL CARMEN'.trim()),
		lastName: capitalCadena('TUÑON GONZALEZ'.trim()),
		type: 'regular',
		email: 'ctunon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15079,
		nationality: 'V'.toUpperCase(),
		cedula: 18382063,
		centroTrabajoId: '308',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RCHOURIO'.trim().toLowerCase(),
		name: capitalCadena(' RICARDO ANDRES'.trim()),
		lastName: capitalCadena('CHOURIO FONSECA'.trim()),
		type: 'regular',
		email: 'RCHOURIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16366,
		nationality: 'V'.toUpperCase(),
		cedula: 29891604,
		centroTrabajoId: '308',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfinol'.trim().toLowerCase(),
		name: capitalCadena(' LISSETT CHIQUINQUIRA'.trim()),
		lastName: capitalCadena('FINOL CASANOVA'.trim()),
		type: 'regular',
		email: 'lfinol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13282,
		nationality: 'V'.toUpperCase(),
		cedula: 12695901,
		centroTrabajoId: '308',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CURVA DE MOLINA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gpalencia'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS CHIQUINQUIRA'.trim()),
		lastName: capitalCadena('PALENCIA VALERO'.trim()),
		type: 'regular',
		email: 'gpalencia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14920,
		nationality: 'V'.toUpperCase(),
		cedula: 27071801,
		centroTrabajoId: '309',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANETA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gbaena'.trim().toLowerCase(),
		name: capitalCadena(' GENIS MARIA'.trim()),
		lastName: capitalCadena('BAENA CASTRO'.trim()),
		type: 'regular',
		email: 'gbaena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13806,
		nationality: 'V'.toUpperCase(),
		cedula: 14718266,
		centroTrabajoId: '309',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANETA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juvillalobos'.trim().toLowerCase(),
		name: capitalCadena(' JULIA ELENA'.trim()),
		lastName: capitalCadena('VILLALOBOS '.trim()),
		type: 'regular',
		email: 'juvillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13502,
		nationality: 'V'.toUpperCase(),
		cedula: 9719892,
		centroTrabajoId: '309',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANETA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rcontreras'.trim().toLowerCase(),
		name: capitalCadena(' ROSALVA MARIA'.trim()),
		lastName: capitalCadena('CONTRERAS ALVAREZ'.trim()),
		type: 'regular',
		email: 'rcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13730,
		nationality: 'V'.toUpperCase(),
		cedula: 6832683,
		centroTrabajoId: '309',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANETA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MBERMUDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA CAROLINA'.trim()),
		lastName: capitalCadena('BERMUDEZ BARRIO'.trim()),
		type: 'regular',
		email: 'MBERMUDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1669,
		nationality: 'V'.toUpperCase(),
		cedula: 13002704,
		centroTrabajoId: '309',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SABANETA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MACASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA CAROLINA'.trim()),
		lastName: capitalCadena('CASTILLO CHAPARRO'.trim()),
		type: 'regular',
		email: 'MACASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14008,
		nationality: 'V'.toUpperCase(),
		cedula: 9796160,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'klopez'.trim().toLowerCase(),
		name: capitalCadena(' KATHERINE NADIUSKA'.trim()),
		lastName: capitalCadena('LOPEZ CAMPOS'.trim()),
		type: 'regular',
		email: 'klopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14553,
		nationality: 'V'.toUpperCase(),
		cedula: 12617397,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YESLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' YESICA MARIA'.trim()),
		lastName: capitalCadena('LOPEZ MONTILLA'.trim()),
		type: 'regular',
		email: 'YESLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12621,
		nationality: 'V'.toUpperCase(),
		cedula: 18724921,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANNLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANNY JUSMERY'.trim()),
		lastName: capitalCadena('LOPEZ SANCHEZ'.trim()),
		type: 'regular',
		email: 'ANNLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8245,
		nationality: 'V'.toUpperCase(),
		cedula: 13014581,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'BROMERO'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA YULIMAR'.trim()),
		lastName: capitalCadena('ROMERO CORONA'.trim()),
		type: 'regular',
		email: 'BROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10791,
		nationality: 'V'.toUpperCase(),
		cedula: 17097987,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'echacin'.trim().toLowerCase(),
		name: capitalCadena(' EYERIVETH GREOANNA'.trim()),
		lastName: capitalCadena('CHACIN CHIRINO'.trim()),
		type: 'regular',
		email: 'echacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13182,
		nationality: 'V'.toUpperCase(),
		cedula: 14206374,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPALMA'.trim().toLowerCase(),
		name: capitalCadena(' MARY CRISTINA'.trim()),
		lastName: capitalCadena('PALMA VILLALOBOS'.trim()),
		type: 'regular',
		email: 'MPALMA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15705,
		nationality: 'V'.toUpperCase(),
		cedula: 30940372,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMESTRE'.trim().toLowerCase(),
		name: capitalCadena(' ALBERTO JOSE'.trim()),
		lastName: capitalCadena('MESTRE GARCIA'.trim()),
		type: 'regular',
		email: 'AMESTRE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16302,
		nationality: 'V'.toUpperCase(),
		cedula: 16987101,
		centroTrabajoId: '31',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAIBO BELLA VISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTRUJILLO'.trim().toLowerCase(),
		name: capitalCadena(' MIRLA CRISTINA'.trim()),
		lastName: capitalCadena('TRUJILLO FARIA'.trim()),
		type: 'regular',
		email: 'MTRUJILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13346,
		nationality: 'V'.toUpperCase(),
		cedula: 12308038,
		centroTrabajoId: '311',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALLE 72']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' LEIDIS ELVIRA'.trim()),
		lastName: capitalCadena('LOPEZ DE MOYA'.trim()),
		type: 'regular',
		email: 'LLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14793,
		nationality: 'V'.toUpperCase(),
		cedula: 13974444,
		centroTrabajoId: '311',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALLE 72']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'atorres'.trim().toLowerCase(),
		name: capitalCadena(' ARSENIO JOSE'.trim()),
		lastName: capitalCadena('TORRES CABRERA'.trim()),
		type: 'regular',
		email: 'atorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13178,
		nationality: 'V'.toUpperCase(),
		cedula: 15726562,
		centroTrabajoId: '311',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALLE 72']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MANUEL'.trim()),
		lastName: capitalCadena('LOPEZ ANDRADE'.trim()),
		type: 'regular',
		email: 'JOLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11303,
		nationality: 'V'.toUpperCase(),
		cedula: 18283141,
		centroTrabajoId: '311',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALLE 72']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymontiel'.trim().toLowerCase(),
		name: capitalCadena(' YEIMAR JOHANA'.trim()),
		lastName: capitalCadena('MONTIEL MONTIEL'.trim()),
		type: 'regular',
		email: 'ymontiel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12976,
		nationality: 'V'.toUpperCase(),
		cedula: 30070262,
		centroTrabajoId: '311',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALLE 72']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kkilson'.trim().toLowerCase(),
		name: capitalCadena(' KATIUZCA KARINA'.trim()),
		lastName: capitalCadena('KILSON GONZALEZ'.trim()),
		type: 'regular',
		email: 'kkilson@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13301,
		nationality: 'V'.toUpperCase(),
		cedula: 6747661,
		centroTrabajoId: '311',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALLE 72']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lifernandez'.trim().toLowerCase(),
		name: capitalCadena(' LILIANA RAMONA'.trim()),
		lastName: capitalCadena('FERNANDEZ DE MORENO'.trim()),
		type: 'regular',
		email: 'lifernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13324,
		nationality: 'V'.toUpperCase(),
		cedula: 11286328,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marhernandez'.trim().toLowerCase(),
		name: capitalCadena(' MARIAN DE LOS ANGELES'.trim()),
		lastName: capitalCadena('HERNANDEZ DURAN'.trim()),
		type: 'regular',
		email: 'marhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14180,
		nationality: 'V'.toUpperCase(),
		cedula: 18516529,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'xreyes'.trim().toLowerCase(),
		name: capitalCadena(' XIOGIS YUBILLY'.trim()),
		lastName: capitalCadena('REYES SANCHEZ'.trim()),
		type: 'regular',
		email: 'xreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13750,
		nationality: 'V'.toUpperCase(),
		cedula: 14458233,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cportillo'.trim().toLowerCase(),
		name: capitalCadena(' CLARET ANTONIA'.trim()),
		lastName: capitalCadena('PORTILLO RUIZ'.trim()),
		type: 'regular',
		email: 'cportillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13492,
		nationality: 'V'.toUpperCase(),
		cedula: 8699519,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'deromero'.trim().toLowerCase(),
		name: capitalCadena(' DERYS COROMOTO'.trim()),
		lastName: capitalCadena('ROMERO DE CHACIN'.trim()),
		type: 'regular',
		email: 'deromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13272,
		nationality: 'V'.toUpperCase(),
		cedula: 9793470,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ibravo'.trim().toLowerCase(),
		name: capitalCadena(' INDIRA HELEN'.trim()),
		lastName: capitalCadena('BRAVO BRAVO'.trim()),
		type: 'regular',
		email: 'ibravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13360,
		nationality: 'V'.toUpperCase(),
		cedula: 12443075,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msantana'.trim().toLowerCase(),
		name: capitalCadena(' MARIELA DEL CARMEN'.trim()),
		lastName: capitalCadena('SANTANA DE RINCON'.trim()),
		type: 'regular',
		email: 'msantana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13377,
		nationality: 'V'.toUpperCase(),
		cedula: 9718053,
		centroTrabajoId: '313',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['MARACAIBO ZONA INDUSTRIAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sosanchez'.trim().toLowerCase(),
		name: capitalCadena(' SORLEY PATRICIA'.trim()),
		lastName: capitalCadena('SANCHEZ BERMUDEZ'.trim()),
		type: 'regular',
		email: 'sosanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13680,
		nationality: 'V'.toUpperCase(),
		cedula: 13705821,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nerivas'.trim().toLowerCase(),
		name: capitalCadena(' NESTOR JOSE'.trim()),
		lastName: capitalCadena('RIVAS PIRELA'.trim()),
		type: 'regular',
		email: 'nerivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13316,
		nationality: 'V'.toUpperCase(),
		cedula: 11283803,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LTIRADO'.trim().toLowerCase(),
		name: capitalCadena(' LEANDRO AUGUSTO'.trim()),
		lastName: capitalCadena('TIRADO VARGAS'.trim()),
		type: 'regular',
		email: 'LTIRADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13706,
		nationality: 'V'.toUpperCase(),
		cedula: 17281770,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'equintero'.trim().toLowerCase(),
		name: capitalCadena(' ELIAZAR ENRIQUE'.trim()),
		lastName: capitalCadena('QUINTERO HERRERA'.trim()),
		type: 'regular',
		email: 'equintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13467,
		nationality: 'V'.toUpperCase(),
		cedula: 6803354,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'micolina'.trim().toLowerCase(),
		name: capitalCadena(' MICHELLE ANDREINA'.trim()),
		lastName: capitalCadena('COLINA GRANADILLO'.trim()),
		type: 'regular',
		email: 'micolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14381,
		nationality: 'V'.toUpperCase(),
		cedula: 20442080,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ambarrios'.trim().toLowerCase(),
		name: capitalCadena(' AMADO ANDRES'.trim()),
		lastName: capitalCadena('BARRIOS DIAZ'.trim()),
		type: 'regular',
		email: 'ambarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15503,
		nationality: 'V'.toUpperCase(),
		cedula: 29717553,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CAROMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' CAROLINA BEATRIZ'.trim()),
		lastName: capitalCadena('MARTINEZ COLINA'.trim()),
		type: 'regular',
		email: 'CAROMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13537,
		nationality: 'V'.toUpperCase(),
		cedula: 7825530,
		centroTrabajoId: '314',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LAS MERCEDES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llaguado'.trim().toLowerCase(),
		name: capitalCadena(' LUISANA ISABEL'.trim()),
		lastName: capitalCadena('LAGUADO SANDREA'.trim()),
		type: 'regular',
		email: 'llaguado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14875,
		nationality: 'V'.toUpperCase(),
		cedula: 28470031,
		centroTrabajoId: '315',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TRANSITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jloaiza'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LOS SANTOS'.trim()),
		lastName: capitalCadena('LOAIZA '.trim()),
		type: 'regular',
		email: 'jloaiza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13747,
		nationality: 'V'.toUpperCase(),
		cedula: 7900567,
		centroTrabajoId: '315',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TRANSITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' ROSYMARELVIA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('FERNANDEZ QUIVERA'.trim()),
		type: 'regular',
		email: 'RFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14001,
		nationality: 'V'.toUpperCase(),
		cedula: 23453587,
		centroTrabajoId: '315',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TRANSITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymarcano'.trim().toLowerCase(),
		name: capitalCadena(' YAIPED CAROLINA'.trim()),
		lastName: capitalCadena('MARCANO GONZALEZ'.trim()),
		type: 'regular',
		email: 'ymarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13792,
		nationality: 'V'.toUpperCase(),
		cedula: 18831230,
		centroTrabajoId: '315',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TRANSITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'efumero'.trim().toLowerCase(),
		name: capitalCadena(' EDWARD JESUS'.trim()),
		lastName: capitalCadena('FUMERO DE LA ROSA'.trim()),
		type: 'regular',
		email: 'efumero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15715,
		nationality: 'V'.toUpperCase(),
		cedula: 29579176,
		centroTrabajoId: '315',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TRANSITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yudiaz'.trim().toLowerCase(),
		name: capitalCadena(' YUMAIRA YULIMAR'.trim()),
		lastName: capitalCadena('DIAZ BRACHO'.trim()),
		type: 'regular',
		email: 'yudiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13622,
		nationality: 'V'.toUpperCase(),
		cedula: 13297962,
		centroTrabajoId: '315',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL TRANSITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvillamizar'.trim().toLowerCase(),
		name: capitalCadena(' LILIBETH ANDREINA'.trim()),
		lastName: capitalCadena('VILLAMIZAR RAMIREZ'.trim()),
		type: 'regular',
		email: 'lvillamizar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13538,
		nationality: 'V'.toUpperCase(),
		cedula: 15163192,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lfaria'.trim().toLowerCase(),
		name: capitalCadena(' LEIDYS MARIANA'.trim()),
		lastName: capitalCadena('FARIA MOLERO'.trim()),
		type: 'regular',
		email: 'lfaria@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14792,
		nationality: 'V'.toUpperCase(),
		cedula: 18426982,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mroa'.trim().toLowerCase(),
		name: capitalCadena(' MARIAN ANGELICA'.trim()),
		lastName: capitalCadena('ROA RAMIREZ'.trim()),
		type: 'regular',
		email: 'mroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14092,
		nationality: 'V'.toUpperCase(),
		cedula: 18742936,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARANGEL'.trim().toLowerCase(),
		name: capitalCadena(' ANTONIO RAMON'.trim()),
		lastName: capitalCadena('RANGEL '.trim()),
		type: 'regular',
		email: 'ARANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4521,
		nationality: 'V'.toUpperCase(),
		cedula: 5045098,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpineda'.trim().toLowerCase(),
		name: capitalCadena(' JEFFRI EXGORI'.trim()),
		lastName: capitalCadena('PINEDA MARQUEZ'.trim()),
		type: 'regular',
		email: 'jpineda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13181,
		nationality: 'V'.toUpperCase(),
		cedula: 12590332,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpalmar'.trim().toLowerCase(),
		name: capitalCadena(' MARIA EMILIA'.trim()),
		lastName: capitalCadena('PALMAR SILVA'.trim()),
		type: 'regular',
		email: 'mpalmar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14340,
		nationality: 'V'.toUpperCase(),
		cedula: 27180792,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'htoro'.trim().toLowerCase(),
		name: capitalCadena(' HENRY ANTONIO'.trim()),
		lastName: capitalCadena('TORO MOLINA'.trim()),
		type: 'regular',
		email: 'htoro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13572,
		nationality: 'V'.toUpperCase(),
		cedula: 9753234,
		centroTrabajoId: '316',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAMBIL MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yaperozo'.trim().toLowerCase(),
		name: capitalCadena(' YANIRETH ANTONIA'.trim()),
		lastName: capitalCadena('PEROZO GONZALEZ'.trim()),
		type: 'regular',
		email: 'yaperozo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13528,
		nationality: 'V'.toUpperCase(),
		cedula: 6885670,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfermin'.trim().toLowerCase(),
		name: capitalCadena(' MARIANA ISABEL'.trim()),
		lastName: capitalCadena('FERMIN ROJAS'.trim()),
		type: 'regular',
		email: 'mfermin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14547,
		nationality: 'V'.toUpperCase(),
		cedula: 15973399,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mesis'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL DE JESUS'.trim()),
		lastName: capitalCadena('ESIS OCHOA'.trim()),
		type: 'regular',
		email: 'mesis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13988,
		nationality: 'V'.toUpperCase(),
		cedula: 19747889,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jovalles'.trim().toLowerCase(),
		name: capitalCadena(' JORIANNY JOSEFINA'.trim()),
		lastName: capitalCadena('VALLES PARRA'.trim()),
		type: 'regular',
		email: 'jovalles@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13844,
		nationality: 'V'.toUpperCase(),
		cedula: 12862402,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysulbaran'.trim().toLowerCase(),
		name: capitalCadena(' YESSICA CAROLINA'.trim()),
		lastName: capitalCadena('SULBARAN GALUE'.trim()),
		type: 'regular',
		email: 'ysulbaran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15553,
		nationality: 'V'.toUpperCase(),
		cedula: 26170880,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EDAGUILERA'.trim().toLowerCase(),
		name: capitalCadena(' EDWIN JESUS'.trim()),
		lastName: capitalCadena('AGUILERA NAVA'.trim()),
		type: 'regular',
		email: 'EDAGUILERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15620,
		nationality: 'V'.toUpperCase(),
		cedula: 22482205,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'falana'.trim().toLowerCase(),
		name: capitalCadena(' FABIOLA ALTAGRACIA'.trim()),
		lastName: capitalCadena('ALAÑA OLIVARES'.trim()),
		type: 'regular',
		email: 'falana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15669,
		nationality: 'V'.toUpperCase(),
		cedula: 19099090,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'entorres'.trim().toLowerCase(),
		name: capitalCadena(' ENEIDA PAOLA'.trim()),
		lastName: capitalCadena('TORRES RIVERO'.trim()),
		type: 'regular',
		email: 'entorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15722,
		nationality: 'V'.toUpperCase(),
		cedula: 25343798,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yoliveros'.trim().toLowerCase(),
		name: capitalCadena(' YAJAIRA DEL CARMEN'.trim()),
		lastName: capitalCadena('OLIVEROS CALDERA'.trim()),
		type: 'regular',
		email: 'yoliveros@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13384,
		nationality: 'V'.toUpperCase(),
		cedula: 13209221,
		centroTrabajoId: '317',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTOS DE ALTAGRACIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daromero'.trim().toLowerCase(),
		name: capitalCadena(' DALIMAR DEL VALLE'.trim()),
		lastName: capitalCadena('ROMERO AGUILAR'.trim()),
		type: 'regular',
		email: 'daromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13804,
		nationality: 'V'.toUpperCase(),
		cedula: 16186664,
		centroTrabajoId: '318',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SAMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KMORILLO'.trim().toLowerCase(),
		name: capitalCadena(' KATIUSCA RAMONA'.trim()),
		lastName: capitalCadena('MORILLO BENAVIDES'.trim()),
		type: 'regular',
		email: 'KMORILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14014,
		nationality: 'V'.toUpperCase(),
		cedula: 11288173,
		centroTrabajoId: '318',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SAMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APARRA'.trim().toLowerCase(),
		name: capitalCadena(' ABRAHAM DE JESUS'.trim()),
		lastName: capitalCadena('PARRA RINCON'.trim()),
		type: 'regular',
		email: 'APARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13283,
		nationality: 'V'.toUpperCase(),
		cedula: 9744286,
		centroTrabajoId: '318',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SAMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dpalmar'.trim().toLowerCase(),
		name: capitalCadena(' DEYANIRA DEL VALLE'.trim()),
		lastName: capitalCadena('PALMAR CHACIN'.trim()),
		type: 'regular',
		email: 'dpalmar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13749,
		nationality: 'V'.toUpperCase(),
		cedula: 14005705,
		centroTrabajoId: '318',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SAMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anperez'.trim().toLowerCase(),
		name: capitalCadena(' ANTHOR ENRIQUE'.trim()),
		lastName: capitalCadena('PEREZ REYES'.trim()),
		type: 'regular',
		email: 'anperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13135,
		nationality: 'V'.toUpperCase(),
		cedula: 22457504,
		centroTrabajoId: '318',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SAMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rerodriguez'.trim().toLowerCase(),
		name: capitalCadena(' REYMAR ELIANA'.trim()),
		lastName: capitalCadena('RODRIGUEZ VALDEZ'.trim()),
		type: 'regular',
		email: 'rerodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15321,
		nationality: 'V'.toUpperCase(),
		cedula: 27104838,
		centroTrabajoId: '318',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL SAMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bmerchan'.trim().toLowerCase(),
		name: capitalCadena(' BEISY COROMOTO'.trim()),
		lastName: capitalCadena('MERCHAN VARGAS'.trim()),
		type: 'regular',
		email: 'bmerchan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13487,
		nationality: 'V'.toUpperCase(),
		cedula: 9332008,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCHACIN'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA ALEJANDRA'.trim()),
		lastName: capitalCadena('CHACIN MORALES'.trim()),
		type: 'regular',
		email: 'DCHACIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13107,
		nationality: 'V'.toUpperCase(),
		cedula: 19214289,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DICOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' DIEGO JOSE'.trim()),
		lastName: capitalCadena('COLMENARES CARDENAS'.trim()),
		type: 'regular',
		email: 'DICOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12142,
		nationality: 'V'.toUpperCase(),
		cedula: 25778228,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTROCONIS'.trim().toLowerCase(),
		name: capitalCadena(' MARIANGI DEL CARMEN'.trim()),
		lastName: capitalCadena('TROCONIS HERNANDEZ'.trim()),
		type: 'regular',
		email: 'MTROCONIS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8569,
		nationality: 'V'.toUpperCase(),
		cedula: 21358672,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AGODOY'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDER JOSE'.trim()),
		lastName: capitalCadena('GODOY CARRASQUERO'.trim()),
		type: 'regular',
		email: 'AGODOY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11299,
		nationality: 'V'.toUpperCase(),
		cedula: 20862182,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rgonzalez'.trim().toLowerCase(),
		name: capitalCadena(' RAFAEL ENRIQUE'.trim()),
		lastName: capitalCadena('GONZALEZ PARRA'.trim()),
		type: 'regular',
		email: 'rgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13177,
		nationality: 'V'.toUpperCase(),
		cedula: 25906886,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YEPEROZO'.trim().toLowerCase(),
		name: capitalCadena(' YESELYN COROMOTO'.trim()),
		lastName: capitalCadena('PEROZO QUINTERO'.trim()),
		type: 'regular',
		email: 'YEPEROZO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14380,
		nationality: 'V'.toUpperCase(),
		cedula: 18742997,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GAGREDA'.trim().toLowerCase(),
		name: capitalCadena(' GABRIEL JOSUE'.trim()),
		lastName: capitalCadena('AGREDA BRACHO'.trim()),
		type: 'regular',
		email: 'GAGREDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16272,
		nationality: 'V'.toUpperCase(),
		cedula: 33539813,
		centroTrabajoId: '32',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA LIMPIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mparra'.trim().toLowerCase(),
		name: capitalCadena(' MILENNIS KARLEY'.trim()),
		lastName: capitalCadena('PARRA MARTINEZ'.trim()),
		type: 'regular',
		email: 'mparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13862,
		nationality: 'V'.toUpperCase(),
		cedula: 13661322,
		centroTrabajoId: '321',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA RITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luramos'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ALBERTO'.trim()),
		lastName: capitalCadena('RAMOS URDANETA'.trim()),
		type: 'regular',
		email: 'luramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14522,
		nationality: 'V'.toUpperCase(),
		cedula: 15974567,
		centroTrabajoId: '321',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA RITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMAVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' ABDIEL DAVIS'.trim()),
		lastName: capitalCadena('MAVARES OLLARVES'.trim()),
		type: 'regular',
		email: 'AMAVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13431,
		nationality: 'V'.toUpperCase(),
		cedula: 14234302,
		centroTrabajoId: '321',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA RITA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvillasmil'.trim().toLowerCase(),
		name: capitalCadena(' YOLEYDA MARGARITA'.trim()),
		lastName: capitalCadena('VILLASMIL SANCHEZ'.trim()),
		type: 'regular',
		email: 'yvillasmil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13711,
		nationality: 'V'.toUpperCase(),
		cedula: 17437028,
		centroTrabajoId: '322',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAJA SECA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymaterano'.trim().toLowerCase(),
		name: capitalCadena(' YOCELIN DEL VALLE'.trim()),
		lastName: capitalCadena('MATERANO MATERANO'.trim()),
		type: 'regular',
		email: 'ymaterano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14197,
		nationality: 'V'.toUpperCase(),
		cedula: 23717678,
		centroTrabajoId: '322',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAJA SECA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rhaimacana'.trim().toLowerCase(),
		name: capitalCadena(' RUBEN ISAIAS'.trim()),
		lastName: capitalCadena('HAIMACAÑA LOPEZ'.trim()),
		type: 'regular',
		email: 'rhaimacana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13939,
		nationality: 'V'.toUpperCase(),
		cedula: 14744596,
		centroTrabajoId: '322',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAJA SECA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmendoza'.trim().toLowerCase(),
		name: capitalCadena(' JEAN MANUEL'.trim()),
		lastName: capitalCadena('MENDOZA VILLAREAL'.trim()),
		type: 'regular',
		email: 'jmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13782,
		nationality: 'V'.toUpperCase(),
		cedula: 14983725,
		centroTrabajoId: '322',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAJA SECA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ERGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' ERIKA PAOLA'.trim()),
		lastName: capitalCadena('GARCIA BALMACEDA'.trim()),
		type: 'regular',
		email: 'ERGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15962,
		nationality: 'V'.toUpperCase(),
		cedula: 25489217,
		centroTrabajoId: '322',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAJA SECA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hsalom'.trim().toLowerCase(),
		name: capitalCadena(' HENRY ANTONIO'.trim()),
		lastName: capitalCadena('SALOM PEÑA'.trim()),
		type: 'regular',
		email: 'hsalom@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14198,
		nationality: 'V'.toUpperCase(),
		cedula: 19767372,
		centroTrabajoId: '322',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAJA SECA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asemprun'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDER JOSE'.trim()),
		lastName: capitalCadena('SEMPRUN NAVEA'.trim()),
		type: 'regular',
		email: 'asemprun@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14448,
		nationality: 'V'.toUpperCase(),
		cedula: 14522188,
		centroTrabajoId: '323',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MOJAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alabarca'.trim().toLowerCase(),
		name: capitalCadena(' ALEIDA COROMOTO'.trim()),
		lastName: capitalCadena('LABARCA ACUÑA'.trim()),
		type: 'regular',
		email: 'alabarca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13640,
		nationality: 'V'.toUpperCase(),
		cedula: 9751098,
		centroTrabajoId: '323',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MOJAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPALMAR'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ALFONSO'.trim()),
		lastName: capitalCadena('PALMAR ESPINA'.trim()),
		type: 'regular',
		email: 'JPALMAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15928,
		nationality: 'V'.toUpperCase(),
		cedula: 25739213,
		centroTrabajoId: '323',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MOJAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bchacin'.trim().toLowerCase(),
		name: capitalCadena(' BARBARA DIANELLY'.trim()),
		lastName: capitalCadena('CHACIN BRACHO'.trim()),
		type: 'regular',
		email: 'bchacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13524,
		nationality: 'V'.toUpperCase(),
		cedula: 16121755,
		centroTrabajoId: '323',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MOJAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hepereira'.trim().toLowerCase(),
		name: capitalCadena(' HENRY SAMUEL'.trim()),
		lastName: capitalCadena('PEREIRA RUIZ'.trim()),
		type: 'regular',
		email: 'hepereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15333,
		nationality: 'V'.toUpperCase(),
		cedula: 11406007,
		centroTrabajoId: '324',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. BLANDIN CHACAO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WCODALLO'.trim().toLowerCase(),
		name: capitalCadena(' WILIANI ESTEFANY'.trim()),
		lastName: capitalCadena('CODALLO CORPAS'.trim()),
		type: 'regular',
		email: 'WCODALLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15638,
		nationality: 'V'.toUpperCase(),
		cedula: 30165955,
		centroTrabajoId: '324',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. BLANDIN CHACAO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUCASTRO'.trim().toLowerCase(),
		name: capitalCadena(' YURASMY YOHANA'.trim()),
		lastName: capitalCadena('CASTRO CASTRO'.trim()),
		type: 'regular',
		email: 'YUCASTRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15892,
		nationality: 'V'.toUpperCase(),
		cedula: 27770752,
		centroTrabajoId: '324',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. BLANDIN CHACAO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAPALACIOS'.trim().toLowerCase(),
		name: capitalCadena(' MARTINA '.trim()),
		lastName: capitalCadena('PALACIOS CAICEDO'.trim()),
		type: 'regular',
		email: 'MAPALACIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12603,
		nationality: 'V'.toUpperCase(),
		cedula: 6332904,
		centroTrabajoId: '324',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. BLANDIN CHACAO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nomedina'.trim().toLowerCase(),
		name: capitalCadena(' NORMA MARGARITA'.trim()),
		lastName: capitalCadena('MEDINA MARQUEZ'.trim()),
		type: 'regular',
		email: 'nomedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13513,
		nationality: 'V'.toUpperCase(),
		cedula: 8700226,
		centroTrabajoId: '326',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MENITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rcastillo'.trim().toLowerCase(),
		name: capitalCadena(' ROXELIS CATHERIN'.trim()),
		lastName: capitalCadena('CASTILLO LUGO'.trim()),
		type: 'regular',
		email: 'rcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14494,
		nationality: 'V'.toUpperCase(),
		cedula: 19749925,
		centroTrabajoId: '326',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MENITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malvarado'.trim().toLowerCase(),
		name: capitalCadena(' MAYERLIN HASGLENDYS'.trim()),
		lastName: capitalCadena('ALVARADO CHACIN'.trim()),
		type: 'regular',
		email: 'malvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13883,
		nationality: 'V'.toUpperCase(),
		cedula: 17996863,
		centroTrabajoId: '326',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL MENITO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rimartinez'.trim().toLowerCase(),
		name: capitalCadena(' RICHARD ENRIQUE'.trim()),
		lastName: capitalCadena('MARTINEZ RAMIREZ'.trim()),
		type: 'regular',
		email: 'rimartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14179,
		nationality: 'V'.toUpperCase(),
		cedula: 20844497,
		centroTrabajoId: '327',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO DE MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OLOZADA'.trim().toLowerCase(),
		name: capitalCadena(' ODELIN DE LOS ANGELES'.trim()),
		lastName: capitalCadena('LOZADA ARIAS'.trim()),
		type: 'regular',
		email: 'OLOZADA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15709,
		nationality: 'V'.toUpperCase(),
		cedula: 24376729,
		centroTrabajoId: '327',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO DE MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEQUINTERO'.trim().toLowerCase(),
		name: capitalCadena(' JENNIFER MARIA'.trim()),
		lastName: capitalCadena('QUINTERO BERMUDEZ'.trim()),
		type: 'regular',
		email: 'JEQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11388,
		nationality: 'V'.toUpperCase(),
		cedula: 15727662,
		centroTrabajoId: '327',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO DE MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jteixeira'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MANUEL'.trim()),
		lastName: capitalCadena('TEIXEIRA JAIMES'.trim()),
		type: 'regular',
		email: 'jteixeira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13764,
		nationality: 'V'.toUpperCase(),
		cedula: 14451185,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'surbaez'.trim().toLowerCase(),
		name: capitalCadena(' SUGERI DEL VALLE'.trim()),
		lastName: capitalCadena('URBAEZ HERRERA'.trim()),
		type: 'regular',
		email: 'surbaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15065,
		nationality: 'V'.toUpperCase(),
		cedula: 13379848,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AVARGAS'.trim().toLowerCase(),
		name: capitalCadena(' ATILIO ENRIQUE'.trim()),
		lastName: capitalCadena('VARGAS PEÑA'.trim()),
		type: 'regular',
		email: 'AVARGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16240,
		nationality: 'V'.toUpperCase(),
		cedula: 17140571,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CBERSABIN'.trim().toLowerCase(),
		name: capitalCadena(' BERSABIN CLARET'.trim()),
		lastName: capitalCadena('PAREDES ANGEL'.trim()),
		type: 'regular',
		email: 'CBERSABIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4437,
		nationality: 'V'.toUpperCase(),
		cedula: 16564236,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CARMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS ALEXIS'.trim()),
		lastName: capitalCadena('MARTINEZ '.trim()),
		type: 'regular',
		email: 'CARMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13261,
		nationality: 'V'.toUpperCase(),
		cedula: 10780885,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' FREDDY RAFAEL'.trim()),
		lastName: capitalCadena('CASTILLO '.trim()),
		type: 'regular',
		email: 'FRCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12830,
		nationality: 'V'.toUpperCase(),
		cedula: 12297629,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joinojosa'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('INOJOSA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'joinojosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14913,
		nationality: 'V'.toUpperCase(),
		cedula: 17587476,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AKRIVAS'.trim().toLowerCase(),
		name: capitalCadena(' AKEMI CELESTE'.trim()),
		lastName: capitalCadena('RIVAS PALMA'.trim()),
		type: 'regular',
		email: 'AKRIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15888,
		nationality: 'V'.toUpperCase(),
		cedula: 29921774,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DOJEDA'.trim().toLowerCase(),
		name: capitalCadena(' DAMELIS SARAI'.trim()),
		lastName: capitalCadena('OJEDA DE GUETTE'.trim()),
		type: 'regular',
		email: 'DOJEDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16367,
		nationality: 'V'.toUpperCase(),
		cedula: 19737855,
		centroTrabajoId: '328',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAMPO ALEGRE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dparra'.trim().toLowerCase(),
		name: capitalCadena(' DINORATH YANETH'.trim()),
		lastName: capitalCadena('PARRA CONTRERAS'.trim()),
		type: 'regular',
		email: 'dparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13405,
		nationality: 'V'.toUpperCase(),
		cedula: 12048141,
		centroTrabajoId: '35',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL HATILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCHIRINOS'.trim().toLowerCase(),
		name: capitalCadena(' GINETTE ORIANA'.trim()),
		lastName: capitalCadena('CHIRINOS MARTINEZ'.trim()),
		type: 'regular',
		email: 'GCHIRINOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11407,
		nationality: 'V'.toUpperCase(),
		cedula: 25840318,
		centroTrabajoId: '35',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL HATILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RJARDIM'.trim().toLowerCase(),
		name: capitalCadena(' RITA RAQUEL'.trim()),
		lastName: capitalCadena('JARDIM DE ANDRADE'.trim()),
		type: 'regular',
		email: 'RJARDIM@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16207,
		nationality: 'V'.toUpperCase(),
		cedula: 6272220,
		centroTrabajoId: '35',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL HATILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MEALCALA'.trim().toLowerCase(),
		name: capitalCadena(' MELISA MAIKELIS'.trim()),
		lastName: capitalCadena('ALCALA LONGART'.trim()),
		type: 'regular',
		email: 'MEALCALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10897,
		nationality: 'V'.toUpperCase(),
		cedula: 16218500,
		centroTrabajoId: '35',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL HATILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' ANIFRE LEONDER'.trim()),
		lastName: capitalCadena('DIAZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'ANDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13027,
		nationality: 'V'.toUpperCase(),
		cedula: 27788569,
		centroTrabajoId: '35',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL HATILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jeaponte'.trim().toLowerCase(),
		name: capitalCadena(' JESUS ANTONIO'.trim()),
		lastName: capitalCadena('APONTE GIL'.trim()),
		type: 'regular',
		email: 'jeaponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13233,
		nationality: 'V'.toUpperCase(),
		cedula: 10786489,
		centroTrabajoId: '35',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL HATILLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tzambrano'.trim().toLowerCase(),
		name: capitalCadena(' TUESDAY AIDEE'.trim()),
		lastName: capitalCadena('ZAMBRANO DE HERNANDEZ'.trim()),
		type: 'regular',
		email: 'tzambrano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13294,
		nationality: 'V'.toUpperCase(),
		cedula: 7659851,
		centroTrabajoId: '36',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ADUQUE'.trim().toLowerCase(),
		name: capitalCadena(' ALVARO GIOVANNY'.trim()),
		lastName: capitalCadena('DUQUE DELGADO'.trim()),
		type: 'regular',
		email: 'ADUQUE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16257,
		nationality: 'V'.toUpperCase(),
		cedula: 18815001,
		centroTrabajoId: '36',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LIGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' LIDUZKA MARIA'.trim()),
		lastName: capitalCadena('GARCIA DE MACHADO'.trim()),
		type: 'regular',
		email: 'LIGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12728,
		nationality: 'V'.toUpperCase(),
		cedula: 13873595,
		centroTrabajoId: '36',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KQUINTANA'.trim().toLowerCase(),
		name: capitalCadena(' KATHERINE YEIS'.trim()),
		lastName: capitalCadena('QUINTANA MEZA'.trim()),
		type: 'regular',
		email: 'KQUINTANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15687,
		nationality: 'V'.toUpperCase(),
		cedula: 27798635,
		centroTrabajoId: '36',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pbravo'.trim().toLowerCase(),
		name: capitalCadena(' PAOLA MARINA'.trim()),
		lastName: capitalCadena('BRAVO JASPE'.trim()),
		type: 'regular',
		email: 'pbravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15842,
		nationality: 'V'.toUpperCase(),
		cedula: 27796493,
		centroTrabajoId: '36',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DASCANIO'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA DEL CARMEN'.trim()),
		lastName: capitalCadena('ASCANIO '.trim()),
		type: 'regular',
		email: 'DASCANIO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2697,
		nationality: 'V'.toUpperCase(),
		cedula: 12625306,
		centroTrabajoId: '36',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN JORGE EL CEMENTERIO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nduran'.trim().toLowerCase(),
		name: capitalCadena(' NIEVES SONSIRE'.trim()),
		lastName: capitalCadena('DURAN MENDOZA'.trim()),
		type: 'regular',
		email: 'nduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15212,
		nationality: 'V'.toUpperCase(),
		cedula: 24744230,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YQUIROGA'.trim().toLowerCase(),
		name: capitalCadena(' YESENIA MICHELL'.trim()),
		lastName: capitalCadena('QUIROGA CARRERO'.trim()),
		type: 'regular',
		email: 'YQUIROGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11830,
		nationality: 'V'.toUpperCase(),
		cedula: 18879878,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARY CARMEN'.trim()),
		lastName: capitalCadena('GOMEZ DE VILLAMIZAR'.trim()),
		type: 'regular',
		email: 'MARGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12094,
		nationality: 'V'.toUpperCase(),
		cedula: 16779659,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HVILCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' HERNAN EDUARDO'.trim()),
		lastName: capitalCadena('VILCHEZ GUILLEN'.trim()),
		type: 'regular',
		email: 'HVILCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13023,
		nationality: 'V'.toUpperCase(),
		cedula: 12232369,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA NELLY'.trim()),
		lastName: capitalCadena('BLANCO RINCON'.trim()),
		type: 'regular',
		email: 'MBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 426,
		nationality: 'V'.toUpperCase(),
		cedula: 11023619,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OPARACO'.trim().toLowerCase(),
		name: capitalCadena(' OMAR ARGENIS'.trim()),
		lastName: capitalCadena('PARACO BUITRAGO'.trim()),
		type: 'regular',
		email: 'OPARACO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14105,
		nationality: 'V'.toUpperCase(),
		cedula: 14035037,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JGUERRERO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE CARMELO'.trim()),
		lastName: capitalCadena('GUERRERO VIVAS'.trim()),
		type: 'regular',
		email: 'JGUERRERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 782,
		nationality: 'V'.toUpperCase(),
		cedula: 5643023,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesalcedo'.trim().toLowerCase(),
		name: capitalCadena(' JESUS EDUARDO'.trim()),
		lastName: capitalCadena('SALCEDO PARRA'.trim()),
		type: 'regular',
		email: 'jesalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13058,
		nationality: 'V'.toUpperCase(),
		cedula: 27601393,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nnavea'.trim().toLowerCase(),
		name: capitalCadena(' NERVA DEL VALLE'.trim()),
		lastName: capitalCadena('NAVEA MORALES'.trim()),
		type: 'regular',
		email: 'nnavea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13113,
		nationality: 'V'.toUpperCase(),
		cedula: 11499778,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yicontreras'.trim().toLowerCase(),
		name: capitalCadena(' YICELY SORLEY'.trim()),
		lastName: capitalCadena('CONTRERAS HERNANDEZ'.trim()),
		type: 'regular',
		email: 'yicontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15368,
		nationality: 'V'.toUpperCase(),
		cedula: 19776115,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mayflores'.trim().toLowerCase(),
		name: capitalCadena(' MAYLIN JEANNETTE'.trim()),
		lastName: capitalCadena('FLORES DE ROA'.trim()),
		type: 'regular',
		email: 'mayflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15623,
		nationality: 'V'.toUpperCase(),
		cedula: 13139811,
		centroTrabajoId: '40',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN CRISTOBAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACATANHO'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA ALI'.trim()),
		lastName: capitalCadena('CATANHO YAGUARAN'.trim()),
		type: 'regular',
		email: 'ACATANHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15373,
		nationality: 'V'.toUpperCase(),
		cedula: 15247032,
		centroTrabajoId: '42',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'noherrera'.trim().toLowerCase(),
		name: capitalCadena(' NORELYS JOSEFINA'.trim()),
		lastName: capitalCadena('HERRERA GARCIA'.trim()),
		type: 'regular',
		email: 'noherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9307,
		nationality: 'V'.toUpperCase(),
		cedula: 16504395,
		centroTrabajoId: '42',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DARIAS'.trim().toLowerCase(),
		name: capitalCadena(' DOUGLAS JOSE'.trim()),
		lastName: capitalCadena('ARIAS TORO'.trim()),
		type: 'regular',
		email: 'DARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2776,
		nationality: 'V'.toUpperCase(),
		cedula: 14672583,
		centroTrabajoId: '42',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GLORETO'.trim().toLowerCase(),
		name: capitalCadena(' GENESIS NAZARETH'.trim()),
		lastName: capitalCadena('LORETO ARMAS'.trim()),
		type: 'regular',
		email: 'GLORETO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16117,
		nationality: 'V'.toUpperCase(),
		cedula: 26299430,
		centroTrabajoId: '42',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DJOA'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ALEXANDER'.trim()),
		lastName: capitalCadena('JOA JIMENEZ'.trim()),
		type: 'regular',
		email: 'DJOA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16151,
		nationality: 'V'.toUpperCase(),
		cedula: 23567139,
		centroTrabajoId: '42',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' YOLIBER CAROLINA'.trim()),
		lastName: capitalCadena('HERNANDEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'YOHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12476,
		nationality: 'V'.toUpperCase(),
		cedula: 16040053,
		centroTrabajoId: '42',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['TRAKI VALLE DE LA PASCUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jzamor'.trim().toLowerCase(),
		name: capitalCadena(' JENSY MICHELENA'.trim()),
		lastName: capitalCadena('ZAMOR CARREUS'.trim()),
		type: 'regular',
		email: 'jzamor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11085,
		nationality: 'V'.toUpperCase(),
		cedula: 21467688,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'despinoza'.trim().toLowerCase(),
		name: capitalCadena(' DORA ELENA'.trim()),
		lastName: capitalCadena('ESPINOZA LOBO'.trim()),
		type: 'regular',
		email: 'despinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13191,
		nationality: 'V'.toUpperCase(),
		cedula: 6458040,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nflores'.trim().toLowerCase(),
		name: capitalCadena(' NORILIS MILAGROS'.trim()),
		lastName: capitalCadena('FLORES MANRIQUE'.trim()),
		type: 'regular',
		email: 'nflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13399,
		nationality: 'V'.toUpperCase(),
		cedula: 10515103,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DALDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' DALIA ROSA'.trim()),
		lastName: capitalCadena('DIAZ COLMENARES'.trim()),
		type: 'regular',
		email: 'DALDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3159,
		nationality: 'V'.toUpperCase(),
		cedula: 11200467,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ACORRO'.trim().toLowerCase(),
		name: capitalCadena(' ANYI MARIA'.trim()),
		lastName: capitalCadena('CORRO RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'ACORRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6758,
		nationality: 'V'.toUpperCase(),
		cedula: 20115357,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ROROZCO'.trim().toLowerCase(),
		name: capitalCadena(' ROSMELY NACARY'.trim()),
		lastName: capitalCadena('OROZCO ROA'.trim()),
		type: 'regular',
		email: 'ROROZCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11418,
		nationality: 'V'.toUpperCase(),
		cedula: 24886553,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emartinez'.trim().toLowerCase(),
		name: capitalCadena(' EDINSON '.trim()),
		lastName: capitalCadena('MARTINEZ PEREZ'.trim()),
		type: 'regular',
		email: 'emartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13151,
		nationality: 'V'.toUpperCase(),
		cedula: 26921839,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ilopez'.trim().toLowerCase(),
		name: capitalCadena(' IDANIA SOLEIDA'.trim()),
		lastName: capitalCadena('LOPEZ BARRIOS'.trim()),
		type: 'regular',
		email: 'ilopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15062,
		nationality: 'V'.toUpperCase(),
		cedula: 15713306,
		centroTrabajoId: '43',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN ANTONIO DE LOS ALTOS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DCEDENO'.trim().toLowerCase(),
		name: capitalCadena(' DAMILIS YANETH'.trim()),
		lastName: capitalCadena('CEDEÑO CONTRERAS'.trim()),
		type: 'regular',
		email: 'DCEDENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2253,
		nationality: 'V'.toUpperCase(),
		cedula: 15521889,
		centroTrabajoId: '44',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YORDGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' YORDY RAMON'.trim()),
		lastName: capitalCadena('GONZALEZ RAMOS'.trim()),
		type: 'regular',
		email: 'YORDGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10414,
		nationality: 'V'.toUpperCase(),
		cedula: 25002183,
		centroTrabajoId: '44',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MEFUENTES'.trim().toLowerCase(),
		name: capitalCadena(' MELSYS JULISSA'.trim()),
		lastName: capitalCadena('FUENTES GRILLET'.trim()),
		type: 'regular',
		email: 'MEFUENTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2626,
		nationality: 'V'.toUpperCase(),
		cedula: 13120952,
		centroTrabajoId: '44',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YELOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' YECENIA ANDREINA'.trim()),
		lastName: capitalCadena('LOPEZ BRITO'.trim()),
		type: 'regular',
		email: 'YELOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11570,
		nationality: 'V'.toUpperCase(),
		cedula: 21340227,
		centroTrabajoId: '44',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jobando'.trim().toLowerCase(),
		name: capitalCadena(' JUANA BIANNEY'.trim()),
		lastName: capitalCadena('OBANDO MARCANO'.trim()),
		type: 'regular',
		email: 'jobando@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13378,
		nationality: 'V'.toUpperCase(),
		cedula: 12909197,
		centroTrabajoId: '44',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ydguzman'.trim().toLowerCase(),
		name: capitalCadena(' YDALIA DIULESES'.trim()),
		lastName: capitalCadena('GUZMAN GARRIDO'.trim()),
		type: 'regular',
		email: 'ydguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13590,
		nationality: 'V'.toUpperCase(),
		cedula: 11511409,
		centroTrabajoId: '44',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN FELIX']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' KATHERINE ARIANNIS'.trim()),
		lastName: capitalCadena('GONZALEZ BEJARAN'.trim()),
		type: 'regular',
		email: 'KGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13021,
		nationality: 'V'.toUpperCase(),
		cedula: 26500745,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'OREYES'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA ANDREINA'.trim()),
		lastName: capitalCadena('REYES '.trim()),
		type: 'regular',
		email: 'OREYES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5258,
		nationality: 'V'.toUpperCase(),
		cedula: 21261453,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LERAMOS'.trim().toLowerCase(),
		name: capitalCadena(' LERIDA DEL VALLE'.trim()),
		lastName: capitalCadena('RAMOS VASQUEZ'.trim()),
		type: 'regular',
		email: 'LERAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1370,
		nationality: 'V'.toUpperCase(),
		cedula: 14088981,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ABOLIVAR'.trim().toLowerCase(),
		name: capitalCadena(' ANDERSON JOSUE'.trim()),
		lastName: capitalCadena('BOLIVAR '.trim()),
		type: 'regular',
		email: 'ABOLIVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11230,
		nationality: 'V'.toUpperCase(),
		cedula: 20013385,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRGONZALEZ'.trim().toLowerCase(),
		name: capitalCadena(' KRISTY DE LOS ANGELES'.trim()),
		lastName: capitalCadena('GONZALEZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'KRGONZALEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13022,
		nationality: 'V'.toUpperCase(),
		cedula: 15908222,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yagomez'.trim().toLowerCase(),
		name: capitalCadena(' YAMILET JOSE'.trim()),
		lastName: capitalCadena('GOMEZ PADRON'.trim()),
		type: 'regular',
		email: 'yagomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15616,
		nationality: 'V'.toUpperCase(),
		cedula: 17337596,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCEDENO'.trim().toLowerCase(),
		name: capitalCadena(' YULIS ZAIDA'.trim()),
		lastName: capitalCadena('CEDEÑO DE LOPEZ'.trim()),
		type: 'regular',
		email: 'YCEDENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1585,
		nationality: 'V'.toUpperCase(),
		cedula: 5000990,
		centroTrabajoId: '45',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['UNARE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' KARIENNYS MARGARITA'.trim()),
		lastName: capitalCadena('FERNANDEZ GASCON'.trim()),
		type: 'regular',
		email: 'KFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11119,
		nationality: 'V'.toUpperCase(),
		cedula: 23605888,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FFERMIN'.trim().toLowerCase(),
		name: capitalCadena(' FRANCIS ALEJANDRA'.trim()),
		lastName: capitalCadena('FERMIN ZAPATA'.trim()),
		type: 'regular',
		email: 'FFERMIN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3079,
		nationality: 'V'.toUpperCase(),
		cedula: 16391858,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmarquez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('MARQUEZ ROJAS'.trim()),
		type: 'regular',
		email: 'mmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13741,
		nationality: 'V'.toUpperCase(),
		cedula: 16061976,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PEURQUIOLA'.trim().toLowerCase(),
		name: capitalCadena(' PEDRO RAUL'.trim()),
		lastName: capitalCadena('URQUIOLA DELGADO'.trim()),
		type: 'regular',
		email: 'PEURQUIOLA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12197,
		nationality: 'V'.toUpperCase(),
		cedula: 25387103,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TNIEVE'.trim().toLowerCase(),
		name: capitalCadena(' NIEVE YUREIMA'.trim()),
		lastName: capitalCadena('TRINITARIO LOPEZ'.trim()),
		type: 'regular',
		email: 'TNIEVE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6518,
		nationality: 'V'.toUpperCase(),
		cedula: 17215781,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'omguzman'.trim().toLowerCase(),
		name: capitalCadena(' OMARLIN JOSEFINA'.trim()),
		lastName: capitalCadena('GUZMAN CASTILLO'.trim()),
		type: 'regular',
		email: 'omguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11010,
		nationality: 'V'.toUpperCase(),
		cedula: 20299999,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'epalma'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO JOSE'.trim()),
		lastName: capitalCadena('PALMA VERA'.trim()),
		type: 'regular',
		email: 'epalma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12466,
		nationality: 'V'.toUpperCase(),
		cedula: 19158282,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LESPINOZA'.trim().toLowerCase(),
		name: capitalCadena(' LAURENETH CAROLINA'.trim()),
		lastName: capitalCadena('ESPINOZA CUMANA'.trim()),
		type: 'regular',
		email: 'LESPINOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13060,
		nationality: 'V'.toUpperCase(),
		cedula: 14911994,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'guseche'.trim().toLowerCase(),
		name: capitalCadena(' GUILLERMO ANTONIO'.trim()),
		lastName: capitalCadena('USECHE RAMIREZ'.trim()),
		type: 'regular',
		email: 'guseche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13619,
		nationality: 'V'.toUpperCase(),
		cedula: 10625558,
		centroTrabajoId: '47',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAVISTA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCANELON'.trim().toLowerCase(),
		name: capitalCadena(' LICET MANUELA'.trim()),
		lastName: capitalCadena('CANELON SEIJA'.trim()),
		type: 'regular',
		email: 'LCANELON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6349,
		nationality: 'V'.toUpperCase(),
		cedula: 11338136,
		centroTrabajoId: '49',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AEROPUERTO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JFHER'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ANTONIO'.trim()),
		lastName: capitalCadena('FHER VEGAS'.trim()),
		type: 'regular',
		email: 'JFHER@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 830,
		nationality: 'V'.toUpperCase(),
		cedula: 6337506,
		centroTrabajoId: '49',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AEROPUERTO CARACAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GALONZO'.trim().toLowerCase(),
		name: capitalCadena(' GEORWILL ALFREDO'.trim()),
		lastName: capitalCadena('ALONZO AGUIAR'.trim()),
		type: 'regular',
		email: 'GALONZO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12411,
		nationality: 'V'.toUpperCase(),
		cedula: 15161341,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmarquez'.trim().toLowerCase(),
		name: capitalCadena(' ROSELYN DEL VALLE'.trim()),
		lastName: capitalCadena('MARQUEZ CORONADO'.trim()),
		type: 'regular',
		email: 'rmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15340,
		nationality: 'V'.toUpperCase(),
		cedula: 14519317,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cparra'.trim().toLowerCase(),
		name: capitalCadena(' CAREN ANAIS'.trim()),
		lastName: capitalCadena('PARRA PAPPALARDO'.trim()),
		type: 'regular',
		email: 'cparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14668,
		nationality: 'V'.toUpperCase(),
		cedula: 17459230,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
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
		userName: 'DAPONTE'.trim().toLowerCase(),
		name: capitalCadena(' DORIS MAILYNG'.trim()),
		lastName: capitalCadena('APONTE BERMUDEZ'.trim()),
		type: 'regular',
		email: 'DAPONTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6579,
		nationality: 'V'.toUpperCase(),
		cedula: 20308825,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPIAMO'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MIGUEL'.trim()),
		lastName: capitalCadena('PIAMO CONTRERAS'.trim()),
		type: 'regular',
		email: 'JPIAMO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1295,
		nationality: 'V'.toUpperCase(),
		cedula: 16904004,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' YURY VANESSA'.trim()),
		lastName: capitalCadena('MARTINEZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'YUMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12645,
		nationality: 'V'.toUpperCase(),
		cedula: 19203660,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IMARCANO'.trim().toLowerCase(),
		name: capitalCadena(' ISIS COROMOTO'.trim()),
		lastName: capitalCadena('MARCANO GONZALEZ'.trim()),
		type: 'regular',
		email: 'IMARCANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13117,
		nationality: 'V'.toUpperCase(),
		cedula: 11198815,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irondon'.trim().toLowerCase(),
		name: capitalCadena(' IVERLIN DALIS'.trim()),
		lastName: capitalCadena('RONDON OLIVARES'.trim()),
		type: 'regular',
		email: 'irondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14917,
		nationality: 'V'.toUpperCase(),
		cedula: 27007511,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daquintero'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL ALEJANDRO'.trim()),
		lastName: capitalCadena('QUINTERO ORTIZ'.trim()),
		type: 'regular',
		email: 'daquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15399,
		nationality: 'V'.toUpperCase(),
		cedula: 29631412,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YENDARA'.trim().toLowerCase(),
		name: capitalCadena(' YENIFER ANNABEL'.trim()),
		lastName: capitalCadena('ENDARA MENENDEZ'.trim()),
		type: 'regular',
		email: 'YENDARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15891,
		nationality: 'V'.toUpperCase(),
		cedula: 28448829,
		centroTrabajoId: '50',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PARQUE CRISTAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ELEAL'.trim().toLowerCase(),
		name: capitalCadena(' ERIMAR DEL CARMEN'.trim()),
		lastName: capitalCadena('LEAL FLORES'.trim()),
		type: 'regular',
		email: 'ELEAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16278,
		nationality: 'V'.toUpperCase(),
		cedula: 20154084,
		centroTrabajoId: '51',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edpena'.trim().toLowerCase(),
		name: capitalCadena(' EDINSON RAMON'.trim()),
		lastName: capitalCadena('PEÑA PERNALETE'.trim()),
		type: 'regular',
		email: 'edpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15487,
		nationality: 'V'.toUpperCase(),
		cedula: 12064727,
		centroTrabajoId: '51',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JEGARCIA'.trim().toLowerCase(),
		name: capitalCadena(' JEFFERSON WLADIMIR'.trim()),
		lastName: capitalCadena('GARCIA CAMARGO'.trim()),
		type: 'regular',
		email: 'JEGARCIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5137,
		nationality: 'V'.toUpperCase(),
		cedula: 19532647,
		centroTrabajoId: '51',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clacruz'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ELENA'.trim()),
		lastName: capitalCadena('LACRUZ PAREDES'.trim()),
		type: 'regular',
		email: 'clacruz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13223,
		nationality: 'V'.toUpperCase(),
		cedula: 6823042,
		centroTrabajoId: '51',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CBARRIOS'.trim().toLowerCase(),
		name: capitalCadena(' CRISLEYDA CRISTINA'.trim()),
		lastName: capitalCadena('BARRIOS GUZMAN'.trim()),
		type: 'regular',
		email: 'CBARRIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8479,
		nationality: 'V'.toUpperCase(),
		cedula: 22502841,
		centroTrabajoId: '51',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mchacon'.trim().toLowerCase(),
		name: capitalCadena(' MIGUEL ANGEL'.trim()),
		lastName: capitalCadena('CHACON CONTRERAS'.trim()),
		type: 'regular',
		email: 'mchacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13941,
		nationality: 'V'.toUpperCase(),
		cedula: 6088089,
		centroTrabajoId: '51',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EUROBUILDING']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' LICETTE DEL VALLE'.trim()),
		lastName: capitalCadena('BLANCO MATA'.trim()),
		type: 'regular',
		email: 'LBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9240,
		nationality: 'V'.toUpperCase(),
		cedula: 6511413,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yosuarez'.trim().toLowerCase(),
		name: capitalCadena(' YORVYN CARLOS'.trim()),
		lastName: capitalCadena('SUAREZ OROPEZA'.trim()),
		type: 'regular',
		email: 'yosuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13674,
		nationality: 'V'.toUpperCase(),
		cedula: 15378302,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMARQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' LAURA GABRIELA'.trim()),
		lastName: capitalCadena('MARQUEZ MONTOYA'.trim()),
		type: 'regular',
		email: 'LMARQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16275,
		nationality: 'V'.toUpperCase(),
		cedula: 17720307,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'efgarcia'.trim().toLowerCase(),
		name: capitalCadena(' EFREN JOSE'.trim()),
		lastName: capitalCadena('GARCIA ROJAS'.trim()),
		type: 'regular',
		email: 'efgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13373,
		nationality: 'V'.toUpperCase(),
		cedula: 7663314,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yviera'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA CAROLINA'.trim()),
		lastName: capitalCadena('VIERA NOGUERA'.trim()),
		type: 'regular',
		email: 'yviera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12945,
		nationality: 'V'.toUpperCase(),
		cedula: 28645643,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymeneses'.trim().toLowerCase(),
		name: capitalCadena(' YALITZA YANIRE'.trim()),
		lastName: capitalCadena('MENESES BRICEÑO'.trim()),
		type: 'regular',
		email: 'ymeneses@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15361,
		nationality: 'V'.toUpperCase(),
		cedula: 18914650,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VALVES'.trim().toLowerCase(),
		name: capitalCadena(' VIVIANA CAROLINA'.trim()),
		lastName: capitalCadena('ALVES GOMEZ'.trim()),
		type: 'regular',
		email: 'VALVES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15886,
		nationality: 'V'.toUpperCase(),
		cedula: 24440164,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DPAREDES'.trim().toLowerCase(),
		name: capitalCadena(' DORIS GREY'.trim()),
		lastName: capitalCadena('PAREDES PACHECO'.trim()),
		type: 'regular',
		email: 'DPAREDES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 852,
		nationality: 'V'.toUpperCase(),
		cedula: 11231379,
		centroTrabajoId: '52',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ALTAMIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fpoleo'.trim().toLowerCase(),
		name: capitalCadena(' FELISA IZNARDA'.trim()),
		lastName: capitalCadena('POLEO DE PORTELA'.trim()),
		type: 'regular',
		email: 'fpoleo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13299,
		nationality: 'V'.toUpperCase(),
		cedula: 6730686,
		centroTrabajoId: '53',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ROMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gtorrealba'.trim().toLowerCase(),
		name: capitalCadena(' GERYMAR AYARITH'.trim()),
		lastName: capitalCadena('TORREALBA PINTO'.trim()),
		type: 'regular',
		email: 'gtorrealba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14049,
		nationality: 'V'.toUpperCase(),
		cedula: 22347270,
		centroTrabajoId: '53',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ROMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JFONSECA'.trim().toLowerCase(),
		name: capitalCadena(' JENIFER PAOLA'.trim()),
		lastName: capitalCadena('FONSECA FONSECA'.trim()),
		type: 'regular',
		email: 'JFONSECA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15637,
		nationality: 'V'.toUpperCase(),
		cedula: 29577911,
		centroTrabajoId: '53',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ROMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YABREU'.trim().toLowerCase(),
		name: capitalCadena(' YORMA YAQUIMA'.trim()),
		lastName: capitalCadena('ABREU MARQUEZ'.trim()),
		type: 'regular',
		email: 'YABREU@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4908,
		nationality: 'V'.toUpperCase(),
		cedula: 12830677,
		centroTrabajoId: '53',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ROMAN']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yecarvajal'.trim().toLowerCase(),
		name: capitalCadena(' YESSIKA VERONICA'.trim()),
		lastName: capitalCadena('CARVAJAL FREITES'.trim()),
		type: 'regular',
		email: 'yecarvajal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13887,
		nationality: 'V'.toUpperCase(),
		cedula: 17452415,
		centroTrabajoId: '534',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAUCAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afiguera'.trim().toLowerCase(),
		name: capitalCadena(' ASDRUBAL ANTONIO'.trim()),
		lastName: capitalCadena('FIGUERA TOVAR'.trim()),
		type: 'regular',
		email: 'afiguera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13613,
		nationality: 'V'.toUpperCase(),
		cedula: 14688871,
		centroTrabajoId: '534',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAUCAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marrodriguez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA YSABEL'.trim()),
		lastName: capitalCadena('RODRIGUEZ LOPEZ'.trim()),
		type: 'regular',
		email: 'marrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15433,
		nationality: 'V'.toUpperCase(),
		cedula: 14428606,
		centroTrabajoId: '534',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAUCAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maherrera'.trim().toLowerCase(),
		name: capitalCadena(' MACIEL ANDREINA'.trim()),
		lastName: capitalCadena('HERRERA MARTINEZ'.trim()),
		type: 'regular',
		email: 'maherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14373,
		nationality: 'V'.toUpperCase(),
		cedula: 27686008,
		centroTrabajoId: '534',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAUCAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsalcedo'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA STHEFANY'.trim()),
		lastName: capitalCadena('SALCEDO PACHECO'.trim()),
		type: 'regular',
		email: 'dsalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15394,
		nationality: 'V'.toUpperCase(),
		cedula: 27686190,
		centroTrabajoId: '534',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAUCAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCASARES'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DEL VALLE'.trim()),
		lastName: capitalCadena('CASARES FARFAN'.trim()),
		type: 'regular',
		email: 'MCASARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16266,
		nationality: 'V'.toUpperCase(),
		cedula: 11483308,
		centroTrabajoId: '534',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAUCAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'milgonzalez'.trim().toLowerCase(),
		name: capitalCadena(' MILAGROS GERALDINE'.trim()),
		lastName: capitalCadena('GONZALEZ PACHECO'.trim()),
		type: 'regular',
		email: 'milgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14407,
		nationality: 'V'.toUpperCase(),
		cedula: 22386662,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iburgos'.trim().toLowerCase(),
		name: capitalCadena(' IGNACIO JESUS'.trim()),
		lastName: capitalCadena('BURGOS '.trim()),
		type: 'regular',
		email: 'iburgos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13226,
		nationality: 'V'.toUpperCase(),
		cedula: 6157657,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' ZOMAIRA BEATRIZ'.trim()),
		lastName: capitalCadena('MENDOZA POLANCO'.trim()),
		type: 'regular',
		email: 'ZMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16047,
		nationality: 'V'.toUpperCase(),
		cedula: 12213313,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marchernandez'.trim().toLowerCase(),
		name: capitalCadena(' MARCOS ANASTACIO'.trim()),
		lastName: capitalCadena('HERNANDEZ GARCIA'.trim()),
		type: 'regular',
		email: 'marchernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15408,
		nationality: 'V'.toUpperCase(),
		cedula: 13232748,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ICOLMENARES'.trim().toLowerCase(),
		name: capitalCadena(' IRIS CAROLINA'.trim()),
		lastName: capitalCadena('COLMENARES ASCANIO'.trim()),
		type: 'regular',
		email: 'ICOLMENARES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15505,
		nationality: 'V'.toUpperCase(),
		cedula: 14991357,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aloyo'.trim().toLowerCase(),
		name: capitalCadena(' ABIGAIL MANUELA'.trim()),
		lastName: capitalCadena('LOYO HERNANDEZ'.trim()),
		type: 'regular',
		email: 'aloyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15508,
		nationality: 'V'.toUpperCase(),
		cedula: 25223922,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asifontes'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA ROSA'.trim()),
		lastName: capitalCadena('SIFONTES '.trim()),
		type: 'regular',
		email: 'asifontes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13192,
		nationality: 'V'.toUpperCase(),
		cedula: 6621105,
		centroTrabajoId: '535',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['RIO CHICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nlaya'.trim().toLowerCase(),
		name: capitalCadena(' NINO RAFAEL'.trim()),
		lastName: capitalCadena('LAYA RIOS'.trim()),
		type: 'regular',
		email: 'nlaya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13342,
		nationality: 'V'.toUpperCase(),
		cedula: 6858541,
		centroTrabajoId: '54',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZMEJIAS'.trim().toLowerCase(),
		name: capitalCadena(' ZULAY DEYANIRA'.trim()),
		lastName: capitalCadena('MEJIAS RIOS'.trim()),
		type: 'regular',
		email: 'ZMEJIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16260,
		nationality: 'V'.toUpperCase(),
		cedula: 7923004,
		centroTrabajoId: '54',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angonzalez'.trim().toLowerCase(),
		name: capitalCadena(' ANA BETZAIDA'.trim()),
		lastName: capitalCadena('GONZALEZ PULVIAC'.trim()),
		type: 'regular',
		email: 'angonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14345,
		nationality: 'V'.toUpperCase(),
		cedula: 10625210,
		centroTrabajoId: '54',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOGRATEROL'.trim().toLowerCase(),
		name: capitalCadena(' JOHANA ALEJANDRA'.trim()),
		lastName: capitalCadena('GRATEROL GRATEROL'.trim()),
		type: 'regular',
		email: 'JOGRATEROL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11345,
		nationality: 'V'.toUpperCase(),
		cedula: 18445152,
		centroTrabajoId: '54',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KROSALES'.trim().toLowerCase(),
		name: capitalCadena(' KENDRY GABRIEL'.trim()),
		lastName: capitalCadena('ROSALES MORALES'.trim()),
		type: 'regular',
		email: 'KROSALES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15644,
		nationality: 'V'.toUpperCase(),
		cedula: 30142054,
		centroTrabajoId: '54',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['CENTRO COMERCIAL ALTO PRADO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'evelasquez'.trim().toLowerCase(),
		name: capitalCadena(' EIDA DEL VALLE'.trim()),
		lastName: capitalCadena('VELASQUEZ DE FERNÁNDEZ'.trim()),
		type: 'regular',
		email: 'evelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13296,
		nationality: 'V'.toUpperCase(),
		cedula: 9421583,
		centroTrabajoId: '541',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA VELA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmoya'.trim().toLowerCase(),
		name: capitalCadena(' JOANA ROSALINA'.trim()),
		lastName: capitalCadena('MOYA '.trim()),
		type: 'regular',
		email: 'jmoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14984,
		nationality: 'V'.toUpperCase(),
		cedula: 12740314,
		centroTrabajoId: '541',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA VELA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FANTON'.trim().toLowerCase(),
		name: capitalCadena(' FANIA ALEJANDRA'.trim()),
		lastName: capitalCadena('ANTON DE OLIVERO'.trim()),
		type: 'regular',
		email: 'FANTON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15007,
		nationality: 'V'.toUpperCase(),
		cedula: 14841482,
		centroTrabajoId: '541',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA VELA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DIFUENTES'.trim().toLowerCase(),
		name: capitalCadena(' DIPTY SUSANA'.trim()),
		lastName: capitalCadena('FUENTES MILLAN'.trim()),
		type: 'regular',
		email: 'DIFUENTES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12860,
		nationality: 'V'.toUpperCase(),
		cedula: 12225539,
		centroTrabajoId: '541',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA VELA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPUPO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('PUPO PINTO'.trim()),
		type: 'regular',
		email: 'MPUPO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11402,
		nationality: 'V'.toUpperCase(),
		cedula: 20027013,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrivero'.trim().toLowerCase(),
		name: capitalCadena(' YESSENIA ISABEL'.trim()),
		lastName: capitalCadena('RIVERO SANGRONIS'.trim()),
		type: 'regular',
		email: 'yrivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14131,
		nationality: 'V'.toUpperCase(),
		cedula: 22446035,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARIVAS'.trim().toLowerCase(),
		name: capitalCadena(' ANA ROSA'.trim()),
		lastName: capitalCadena('RIVAS DE GIL'.trim()),
		type: 'regular',
		email: 'ARIVAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5235,
		nationality: 'V'.toUpperCase(),
		cedula: 7884328,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMENDEZ'.trim().toLowerCase(),
		name: capitalCadena(' DANIELA STEPHANIE'.trim()),
		lastName: capitalCadena('MENDEZ BARRAGAN'.trim()),
		type: 'regular',
		email: 'DMENDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4693,
		nationality: 'V'.toUpperCase(),
		cedula: 19692910,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fguerra'.trim().toLowerCase(),
		name: capitalCadena(' FENIYER NAZARETH'.trim()),
		lastName: capitalCadena('GUERRA MANCERA'.trim()),
		type: 'regular',
		email: 'fguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13057,
		nationality: 'V'.toUpperCase(),
		cedula: 29583999,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mflores'.trim().toLowerCase(),
		name: capitalCadena(' MICHEL CHERY'.trim()),
		lastName: capitalCadena('FLORES BERNARD'.trim()),
		type: 'regular',
		email: 'mflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15335,
		nationality: 'V'.toUpperCase(),
		cedula: 15844620,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' SHARON VERONICA'.trim()),
		lastName: capitalCadena('RODRIGUEZ SIERRA'.trim()),
		type: 'regular',
		email: 'SRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15647,
		nationality: 'V'.toUpperCase(),
		cedula: 30308698,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ZARAY'.trim().toLowerCase(),
		name: capitalCadena(' ZWELKY DEL CARMEN'.trim()),
		lastName: capitalCadena('ARAY GUDIÑO'.trim()),
		type: 'regular',
		email: 'ZARAY@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16196,
		nationality: 'V'.toUpperCase(),
		cedula: 24592817,
		centroTrabajoId: '55',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['C.C. CIUDAD TAMANACO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbarrios'.trim().toLowerCase(),
		name: capitalCadena(' JACKELINE COROMOTO'.trim()),
		lastName: capitalCadena('BARRIOS PEREZ'.trim()),
		type: 'regular',
		email: 'jbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13991,
		nationality: 'V'.toUpperCase(),
		cedula: 19609934,
		centroTrabajoId: '550',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ISABEL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adacosta'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDER '.trim()),
		lastName: capitalCadena('DA COSTA VIERAS'.trim()),
		type: 'regular',
		email: 'adacosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15863,
		nationality: 'V'.toUpperCase(),
		cedula: 15188040,
		centroTrabajoId: '550',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ISABEL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ychinchilla'.trim().toLowerCase(),
		name: capitalCadena(' YEIDIMAR DEL VALLE'.trim()),
		lastName: capitalCadena('CHINCHILLA MATERANO'.trim()),
		type: 'regular',
		email: 'ychinchilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14297,
		nationality: 'V'.toUpperCase(),
		cedula: 26877513,
		centroTrabajoId: '550',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ISABEL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apena'.trim().toLowerCase(),
		name: capitalCadena(' ADRIANA DEL VALLE'.trim()),
		lastName: capitalCadena('PEÑA AZUAJE'.trim()),
		type: 'regular',
		email: 'apena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14566,
		nationality: 'V'.toUpperCase(),
		cedula: 20400946,
		centroTrabajoId: '550',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ISABEL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mgodoy'.trim().toLowerCase(),
		name: capitalCadena(' MIRIAM DEL CARMEN'.trim()),
		lastName: capitalCadena('GODOY '.trim()),
		type: 'regular',
		email: 'mgodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13416,
		nationality: 'V'.toUpperCase(),
		cedula: 12796000,
		centroTrabajoId: '550',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SANTA ISABEL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fblanco'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO JAVIER'.trim()),
		lastName: capitalCadena('BLANCO IRIARTE'.trim()),
		type: 'regular',
		email: 'fblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14328,
		nationality: 'V'.toUpperCase(),
		cedula: 19796937,
		centroTrabajoId: '552',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['NAIGUATÁ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'everde'.trim().toLowerCase(),
		name: capitalCadena(' ELOYMAR '.trim()),
		lastName: capitalCadena('VERDE ARRATIA'.trim()),
		type: 'regular',
		email: 'everde@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14413,
		nationality: 'V'.toUpperCase(),
		cedula: 17312591,
		centroTrabajoId: '552',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['NAIGUATÁ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maespinoza'.trim().toLowerCase(),
		name: capitalCadena(' MARIANELA DE LOS ANGELES'.trim()),
		lastName: capitalCadena('ESPINOZA ARISTIGUETA'.trim()),
		type: 'regular',
		email: 'maespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15468,
		nationality: 'V'.toUpperCase(),
		cedula: 12162386,
		centroTrabajoId: '552',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['NAIGUATÁ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yacedeno'.trim().toLowerCase(),
		name: capitalCadena(' YASMERY JOSEFINA'.trim()),
		lastName: capitalCadena('CEDEÑO LUNAR'.trim()),
		type: 'regular',
		email: 'yacedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13211,
		nationality: 'V'.toUpperCase(),
		cedula: 9996426,
		centroTrabajoId: '552',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['NAIGUATÁ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eramos'.trim().toLowerCase(),
		name: capitalCadena(' ELIA GHERISBELL'.trim()),
		lastName: capitalCadena('RAMOS MILLAN'.trim()),
		type: 'regular',
		email: 'eramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15593,
		nationality: 'V'.toUpperCase(),
		cedula: 20559980,
		centroTrabajoId: '552',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['NAIGUATÁ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' FRANYELIS VIRGINIA'.trim()),
		lastName: capitalCadena('HERNANDEZ SOLORZANO'.trim()),
		type: 'regular',
		email: 'FRHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15650,
		nationality: 'V'.toUpperCase(),
		cedula: 24182631,
		centroTrabajoId: '552',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['NAIGUATÁ']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AMATA'.trim().toLowerCase(),
		name: capitalCadena(' AIMAR CAROLINA'.trim()),
		lastName: capitalCadena('MATA GARCIA'.trim()),
		type: 'regular',
		email: 'AMATA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4421,
		nationality: 'V'.toUpperCase(),
		cedula: 20191769,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malopez'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DOLORES'.trim()),
		lastName: capitalCadena('LOPEZ ROMERO'.trim()),
		type: 'regular',
		email: 'malopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14764,
		nationality: 'V'.toUpperCase(),
		cedula: 10581780,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VCOA'.trim().toLowerCase(),
		name: capitalCadena(' VALERY MEREDITH'.trim()),
		lastName: capitalCadena('COA MAQUEDA'.trim()),
		type: 'regular',
		email: 'VCOA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12838,
		nationality: 'V'.toUpperCase(),
		cedula: 26327081,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yuhernandez'.trim().toLowerCase(),
		name: capitalCadena(' YURAYMA ANDREYNA'.trim()),
		lastName: capitalCadena('HERNANDEZ PACHECO'.trim()),
		type: 'regular',
		email: 'yuhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12991,
		nationality: 'V'.toUpperCase(),
		cedula: 20007591,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ivalera'.trim().toLowerCase(),
		name: capitalCadena(' ISABEL DE LOS ANGELES'.trim()),
		lastName: capitalCadena('VALERA CHONA'.trim()),
		type: 'regular',
		email: 'ivalera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15390,
		nationality: 'V'.toUpperCase(),
		cedula: 12113929,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'atavio'.trim().toLowerCase(),
		name: capitalCadena(' ALIBER NADIUSKA'.trim()),
		lastName: capitalCadena('TAVIO PALMERO'.trim()),
		type: 'regular',
		email: 'atavio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15393,
		nationality: 'V'.toUpperCase(),
		cedula: 13224303,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ADURAND'.trim().toLowerCase(),
		name: capitalCadena(' ALEXKA COROMOTO'.trim()),
		lastName: capitalCadena('DURAND PADRON'.trim()),
		type: 'regular',
		email: 'ADURAND@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11199,
		nationality: 'V'.toUpperCase(),
		cedula: 24178079,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA GUAIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YYANEZ'.trim().toLowerCase(),
		name: capitalCadena(' JANET DEL VALLE'.trim()),
		lastName: capitalCadena('YANEZ '.trim()),
		type: 'regular',
		email: 'YYANEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 313,
		nationality: 'V'.toUpperCase(),
		cedula: 5574675,
		centroTrabajoId: '56',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA III']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VLAGUNA'.trim().toLowerCase(),
		name: capitalCadena(' VIVIANA '.trim()),
		lastName: capitalCadena('LAGUNA LOPEZ'.trim()),
		type: 'regular',
		email: 'VLAGUNA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12032,
		nationality: 'V'.toUpperCase(),
		cedula: 18188967,
		centroTrabajoId: '57',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rleon'.trim().toLowerCase(),
		name: capitalCadena(' ROBERTO ANTONIO'.trim()),
		lastName: capitalCadena('LEON MENDEZ'.trim()),
		type: 'regular',
		email: 'rleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14361,
		nationality: 'V'.toUpperCase(),
		cedula: 6452059,
		centroTrabajoId: '57',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GMOLINA'.trim().toLowerCase(),
		name: capitalCadena(' GRISHKA JEANNINE'.trim()),
		lastName: capitalCadena('MOLINA ACOSTA'.trim()),
		type: 'regular',
		email: 'GMOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16255,
		nationality: 'V'.toUpperCase(),
		cedula: 12685985,
		centroTrabajoId: '57',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' THOMAS ELIAS'.trim()),
		lastName: capitalCadena('DIAZ SALAZAR'.trim()),
		type: 'regular',
		email: 'TDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4336,
		nationality: 'V'.toUpperCase(),
		cedula: 16264518,
		centroTrabajoId: '57',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gcaigua'.trim().toLowerCase(),
		name: capitalCadena(' GARDIMAR CAROLINA'.trim()),
		lastName: capitalCadena('CAIGUA FLORES'.trim()),
		type: 'regular',
		email: 'gcaigua@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15475,
		nationality: 'V'.toUpperCase(),
		cedula: 27007274,
		centroTrabajoId: '57',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUDELGADO'.trim().toLowerCase(),
		name: capitalCadena(' YUREILYS CAROLINA'.trim()),
		lastName: capitalCadena('DELGADO CHACON'.trim()),
		type: 'regular',
		email: 'YUDELGADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15645,
		nationality: 'V'.toUpperCase(),
		cedula: 27037183,
		centroTrabajoId: '57',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PLAZA LAS AMÉRICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUBENITEZ'.trim().toLowerCase(),
		name: capitalCadena(' YUSNERBI VANESSA'.trim()),
		lastName: capitalCadena('BENITEZ '.trim()),
		type: 'regular',
		email: 'YUBENITEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8593,
		nationality: 'V'.toUpperCase(),
		cedula: 20308191,
		centroTrabajoId: '59',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YBRACHO'.trim().toLowerCase(),
		name: capitalCadena(' YAIMARA ELVIMAR'.trim()),
		lastName: capitalCadena('BRACHO MENDEZ'.trim()),
		type: 'regular',
		email: 'YBRACHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10596,
		nationality: 'V'.toUpperCase(),
		cedula: 23617729,
		centroTrabajoId: '59',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FTERAN'.trim().toLowerCase(),
		name: capitalCadena(' FRANCISCO JAVIER'.trim()),
		lastName: capitalCadena('TERAN INFANTE'.trim()),
		type: 'regular',
		email: 'FTERAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3815,
		nationality: 'V'.toUpperCase(),
		cedula: 9156202,
		centroTrabajoId: '59',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NSILVA'.trim().toLowerCase(),
		name: capitalCadena(' NAHYR ELENA'.trim()),
		lastName: capitalCadena('SILVA SEILER'.trim()),
		type: 'regular',
		email: 'NSILVA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4755,
		nationality: 'V'.toUpperCase(),
		cedula: 18390963,
		centroTrabajoId: '59',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GIRANGEL'.trim().toLowerCase(),
		name: capitalCadena(' GILBERTO '.trim()),
		lastName: capitalCadena('RANGEL RONDON'.trim()),
		type: 'regular',
		email: 'GIRANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10012,
		nationality: 'V'.toUpperCase(),
		cedula: 9026992,
		centroTrabajoId: '59',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMILLAN'.trim().toLowerCase(),
		name: capitalCadena(' JEANNA KARIM'.trim()),
		lastName: capitalCadena('MILLAN VARELA'.trim()),
		type: 'regular',
		email: 'JMILLAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15636,
		nationality: 'V'.toUpperCase(),
		cedula: 30519943,
		centroTrabajoId: '59',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV. VICTORIA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAFERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARGORY PASTORA'.trim()),
		lastName: capitalCadena('FERNANDEZ RINCONES'.trim()),
		type: 'regular',
		email: 'MAFERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12987,
		nationality: 'V'.toUpperCase(),
		cedula: 16532504,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JPINA'.trim().toLowerCase(),
		name: capitalCadena(' JULIO RAMON'.trim()),
		lastName: capitalCadena('PIÑA AGUERO'.trim()),
		type: 'regular',
		email: 'JPINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5125,
		nationality: 'V'.toUpperCase(),
		cedula: 9616685,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eespinoza'.trim().toLowerCase(),
		name: capitalCadena(' EDUARDO COROMOTO'.trim()),
		lastName: capitalCadena('ESPINOZA HERNANDEZ'.trim()),
		type: 'regular',
		email: 'eespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13284,
		nationality: 'V'.toUpperCase(),
		cedula: 7923816,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acordero'.trim().toLowerCase(),
		name: capitalCadena(' AMERICA LISETH'.trim()),
		lastName: capitalCadena('CORDERO BARCOS'.trim()),
		type: 'regular',
		email: 'acordero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13586,
		nationality: 'V'.toUpperCase(),
		cedula: 10774076,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' LORENA CARELYS'.trim()),
		lastName: capitalCadena('RODRIGUEZ PALACIOS'.trim()),
		type: 'regular',
		email: 'LRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11016,
		nationality: 'V'.toUpperCase(),
		cedula: 16748225,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maygonzalez'.trim().toLowerCase(),
		name: capitalCadena(' MAYIRA DEL CARMEN'.trim()),
		lastName: capitalCadena('GONZALEZ LABRADOR'.trim()),
		type: 'regular',
		email: 'maygonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11027,
		nationality: 'V'.toUpperCase(),
		cedula: 26540017,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmorales'.trim().toLowerCase(),
		name: capitalCadena(' MARIA FERNANDA'.trim()),
		lastName: capitalCadena('MORALES RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'mmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11028,
		nationality: 'V'.toUpperCase(),
		cedula: 26831800,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCAMACARO'.trim().toLowerCase(),
		name: capitalCadena(' MILEXA PASTORA'.trim()),
		lastName: capitalCadena('CAMACARO SANCHEZ'.trim()),
		type: 'regular',
		email: 'MCAMACARO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12445,
		nationality: 'V'.toUpperCase(),
		cedula: 14590100,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsuarez'.trim().toLowerCase(),
		name: capitalCadena(' DARLENY ANAHISA'.trim()),
		lastName: capitalCadena('SUAREZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'dsuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15491,
		nationality: 'V'.toUpperCase(),
		cedula: 28577138,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'egalindez'.trim().toLowerCase(),
		name: capitalCadena(' EZEQUIEL DAVID'.trim()),
		lastName: capitalCadena('GALINDEZ JIMENEZ'.trim()),
		type: 'regular',
		email: 'egalindez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15876,
		nationality: 'V'.toUpperCase(),
		cedula: 30145614,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LFARIAS'.trim().toLowerCase(),
		name: capitalCadena(' LIBIA MERCEDES'.trim()),
		lastName: capitalCadena('FARIAS MARIÑO'.trim()),
		type: 'regular',
		email: 'LFARIAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13509,
		nationality: 'V'.toUpperCase(),
		cedula: 4380986,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YALVARADO'.trim().toLowerCase(),
		name: capitalCadena(' YLDEMARO RAFAEL'.trim()),
		lastName: capitalCadena('ALVARADO ESCALONA'.trim()),
		type: 'regular',
		email: 'YALVARADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13574,
		nationality: 'V'.toUpperCase(),
		cedula: 12534158,
		centroTrabajoId: '60',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames['C.C. BARQUISIMETO CAPANAPARO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CEDWARD'.trim().toLowerCase(),
		name: capitalCadena(' EDWARD JOSUE'.trim()),
		lastName: capitalCadena('CHIREMA RIVERO'.trim()),
		type: 'regular',
		email: 'CEDWARD@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12485,
		nationality: 'V'.toUpperCase(),
		cedula: 27464247,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'adgonzalez'.trim().toLowerCase(),
		name: capitalCadena(' ADRIAN ALEJANDRO'.trim()),
		lastName: capitalCadena('GONZALEZ CASTILLO'.trim()),
		type: 'regular',
		email: 'adgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14896,
		nationality: 'V'.toUpperCase(),
		cedula: 25163587,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JCEBALLOS'.trim().toLowerCase(),
		name: capitalCadena(' JORGE LUIS'.trim()),
		lastName: capitalCadena('CEBALLOS MOSQUERA'.trim()),
		type: 'regular',
		email: 'JCEBALLOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12681,
		nationality: 'V'.toUpperCase(),
		cedula: 14676351,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sperez'.trim().toLowerCase(),
		name: capitalCadena(' STEFANY ANDREINA'.trim()),
		lastName: capitalCadena('PEREZ PAREDES'.trim()),
		type: 'regular',
		email: 'sperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14409,
		nationality: 'V'.toUpperCase(),
		cedula: 26972329,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCOLINA'.trim().toLowerCase(),
		name: capitalCadena(' YAJAIRA BEATRIZ'.trim()),
		lastName: capitalCadena('COLINA LEMUS'.trim()),
		type: 'regular',
		email: 'YCOLINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5291,
		nationality: 'V'.toUpperCase(),
		cedula: 7313913,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JASERRANO'.trim().toLowerCase(),
		name: capitalCadena(' JAIRO JOSE'.trim()),
		lastName: capitalCadena('SERRANO ASCANIO'.trim()),
		type: 'regular',
		email: 'JASERRANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4945,
		nationality: 'V'.toUpperCase(),
		cedula: 12266671,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ftorres'.trim().toLowerCase(),
		name: capitalCadena(' FERNANDO ANTONIO'.trim()),
		lastName: capitalCadena('TORRES GONZALEZ'.trim()),
		type: 'regular',
		email: 'ftorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10842,
		nationality: 'V'.toUpperCase(),
		cedula: 11546603,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DPINERO'.trim().toLowerCase(),
		name: capitalCadena(' DULKELYN CAROLINA'.trim()),
		lastName: capitalCadena('PIÑERO HERNANDEZ'.trim()),
		type: 'regular',
		email: 'DPINERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12787,
		nationality: 'V'.toUpperCase(),
		cedula: 19053080,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MVALERA'.trim().toLowerCase(),
		name: capitalCadena(' MAHOLI GREGORIA'.trim()),
		lastName: capitalCadena('VALERA CASTELLANOS'.trim()),
		type: 'regular',
		email: 'MVALERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12853,
		nationality: 'V'.toUpperCase(),
		cedula: 19171021,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' YOLIBETH LORENA'.trim()),
		lastName: capitalCadena('MEDINA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YOMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15937,
		nationality: 'V'.toUpperCase(),
		cedula: 14540861,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angutierrez'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL MANUEL'.trim()),
		lastName: capitalCadena('GUTIERREZ SALCEDO'.trim()),
		type: 'regular',
		email: 'angutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13548,
		nationality: 'V'.toUpperCase(),
		cedula: 14001824,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['ACARIGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YCANA'.trim().toLowerCase(),
		name: capitalCadena(' YUSNEIDY JOSE'.trim()),
		lastName: capitalCadena('CAÑA RUIZ'.trim()),
		type: 'regular',
		email: 'YCANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12748,
		nationality: 'V'.toUpperCase(),
		cedula: 19633149,
		centroTrabajoId: '67',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMEDINA'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA JOSEFINA'.trim()),
		lastName: capitalCadena('MEDINA NARANJO'.trim()),
		type: 'regular',
		email: 'YMEDINA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1049,
		nationality: 'V'.toUpperCase(),
		cedula: 11482846,
		centroTrabajoId: '67',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MOTERO'.trim().toLowerCase(),
		name: capitalCadena(' MADA DEL LOURDES'.trim()),
		lastName: capitalCadena('OTERO ESPINOZA'.trim()),
		type: 'regular',
		email: 'MOTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16217,
		nationality: 'V'.toUpperCase(),
		cedula: 11058101,
		centroTrabajoId: '67',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOGUEVARA'.trim().toLowerCase(),
		name: capitalCadena(' YORNELLY KLEIDIMAR'.trim()),
		lastName: capitalCadena('GUEVARA FLORES'.trim()),
		type: 'regular',
		email: 'YOGUEVARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11578,
		nationality: 'V'.toUpperCase(),
		cedula: 20066618,
		centroTrabajoId: '67',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DJARDIM'.trim().toLowerCase(),
		name: capitalCadena(' DIMAR JAVIER'.trim()),
		lastName: capitalCadena('JARDIM HERNANDEZ'.trim()),
		type: 'regular',
		email: 'DJARDIM@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12606,
		nationality: 'V'.toUpperCase(),
		cedula: 15489974,
		centroTrabajoId: '67',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rgil'.trim().toLowerCase(),
		name: capitalCadena(' REINALDO ANTONIO'.trim()),
		lastName: capitalCadena('GIL PIMENTEL'.trim()),
		type: 'regular',
		email: 'rgil@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14862,
		nationality: 'V'.toUpperCase(),
		cedula: 19813346,
		centroTrabajoId: '67',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA SUPER LIDER']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LAROCHA'.trim().toLowerCase(),
		name: capitalCadena(' LAURA VALERIA'.trim()),
		lastName: capitalCadena('AROCHA ARAUJO'.trim()),
		type: 'regular',
		email: 'LAROCHA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11680,
		nationality: 'V'.toUpperCase(),
		cedula: 23621793,
		centroTrabajoId: '68',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMAGALLANES'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA ISABEL'.trim()),
		lastName: capitalCadena('MAGALLANES JIMENEZ'.trim()),
		type: 'regular',
		email: 'DMAGALLANES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12092,
		nationality: 'V'.toUpperCase(),
		cedula: 15739129,
		centroTrabajoId: '68',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ETOVAR'.trim().toLowerCase(),
		name: capitalCadena(' ELVIRA JOSEFINA'.trim()),
		lastName: capitalCadena('TOVAR AGUIRRE'.trim()),
		type: 'regular',
		email: 'ETOVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12372,
		nationality: 'V'.toUpperCase(),
		cedula: 9660688,
		centroTrabajoId: '68',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YVARGAS'.trim().toLowerCase(),
		name: capitalCadena(' YUNGRY LISSETTE'.trim()),
		lastName: capitalCadena('VARGAS ARELLANO'.trim()),
		type: 'regular',
		email: 'YVARGAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3850,
		nationality: 'V'.toUpperCase(),
		cedula: 14503516,
		centroTrabajoId: '68',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LPARRA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS ENRIQUE'.trim()),
		lastName: capitalCadena('PARRA CALDERA'.trim()),
		type: 'regular',
		email: 'LPARRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4176,
		nationality: 'V'.toUpperCase(),
		cedula: 11979337,
		centroTrabajoId: '68',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hegutierrez'.trim().toLowerCase(),
		name: capitalCadena(' HEIDI YUSVARI'.trim()),
		lastName: capitalCadena('GUTIERREZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'hegutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12999,
		nationality: 'V'.toUpperCase(),
		cedula: 13625405,
		centroTrabajoId: '68',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SUPER LIDER EL LIMON']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' MARCOS ANTONIO'.trim()),
		lastName: capitalCadena('DIAZ GONZALEZ'.trim()),
		type: 'regular',
		email: 'MDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12286,
		nationality: 'V'.toUpperCase(),
		cedula: 10776737,
		centroTrabajoId: '69',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO MERCABAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mlopez'.trim().toLowerCase(),
		name: capitalCadena(' MACARIO ANTONIO'.trim()),
		lastName: capitalCadena('LOPEZ '.trim()),
		type: 'regular',
		email: 'mlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13359,
		nationality: 'V'.toUpperCase(),
		cedula: 7367207,
		centroTrabajoId: '69',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO MERCABAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANESCALONA'.trim().toLowerCase(),
		name: capitalCadena(' ANTONIO JOSE'.trim()),
		lastName: capitalCadena('ESCALONA '.trim()),
		type: 'regular',
		email: 'ANESCALONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13322,
		nationality: 'V'.toUpperCase(),
		cedula: 7986960,
		centroTrabajoId: '69',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['BARQUISIMETO MERCABAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCUMARE'.trim().toLowerCase(),
		name: capitalCadena(' GLEIDYS MARIA'.trim()),
		lastName: capitalCadena('CUMARE DE BARRIOS'.trim()),
		type: 'regular',
		email: 'GCUMARE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5139,
		nationality: 'V'.toUpperCase(),
		cedula: 15949030,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ajaraba'.trim().toLowerCase(),
		name: capitalCadena(' ALAM DANIEL'.trim()),
		lastName: capitalCadena('JARABA '.trim()),
		type: 'regular',
		email: 'ajaraba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10272,
		nationality: 'V'.toUpperCase(),
		cedula: 15227302,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LLANDA'.trim().toLowerCase(),
		name: capitalCadena(' LEIDY LUDERCY'.trim()),
		lastName: capitalCadena('LANDA PALENCIA'.trim()),
		type: 'regular',
		email: 'LLANDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10321,
		nationality: 'V'.toUpperCase(),
		cedula: 12745146,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'UCAMPOS'.trim().toLowerCase(),
		name: capitalCadena(' UBALDA JOSEFINA'.trim()),
		lastName: capitalCadena('CAMPOS GODOY'.trim()),
		type: 'regular',
		email: 'UCAMPOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1537,
		nationality: 'V'.toUpperCase(),
		cedula: 7174457,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GAGUERO'.trim().toLowerCase(),
		name: capitalCadena(' GLENDYS DEYANIRA'.trim()),
		lastName: capitalCadena('AGUERO ARTEAGA'.trim()),
		type: 'regular',
		email: 'GAGUERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12398,
		nationality: 'V'.toUpperCase(),
		cedula: 14380667,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lucampos'.trim().toLowerCase(),
		name: capitalCadena(' LUISA JACQUELINE'.trim()),
		lastName: capitalCadena('CAMPOS ARISMENDI'.trim()),
		type: 'regular',
		email: 'lucampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15244,
		nationality: 'V'.toUpperCase(),
		cedula: 16828725,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'andromero'.trim().toLowerCase(),
		name: capitalCadena(' ANDRY JOSE'.trim()),
		lastName: capitalCadena('ROMERO REYES'.trim()),
		type: 'regular',
		email: 'andromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15245,
		nationality: 'V'.toUpperCase(),
		cedula: 27754360,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AHERMES'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA DESSIRE'.trim()),
		lastName: capitalCadena('HERMES MARQUEZ'.trim()),
		type: 'regular',
		email: 'AHERMES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16116,
		nationality: 'V'.toUpperCase(),
		cedula: 19295728,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YADBLANCO'.trim().toLowerCase(),
		name: capitalCadena(' YADIWIL DE JESUS'.trim()),
		lastName: capitalCadena('BLANCO DE RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'YADBLANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16296,
		nationality: 'V'.toUpperCase(),
		cedula: 15951131,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMENDOZA'.trim().toLowerCase(),
		name: capitalCadena(' MIRLA JOSEFINA'.trim()),
		lastName: capitalCadena('MENDOZA '.trim()),
		type: 'regular',
		email: 'MMENDOZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10504,
		nationality: 'V'.toUpperCase(),
		cedula: 7171871,
		centroTrabajoId: '71',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['PUERTO CABELLO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MTEIXEIRA'.trim().toLowerCase(),
		name: capitalCadena(' MARSAN MARYCIELO'.trim()),
		lastName: capitalCadena('TEIXEIRA RADA'.trim()),
		type: 'regular',
		email: 'MTEIXEIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11015,
		nationality: 'V'.toUpperCase(),
		cedula: 24436843,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MFILINDRO'.trim().toLowerCase(),
		name: capitalCadena(' MARIA FERNANDA'.trim()),
		lastName: capitalCadena('FILINDRO CORONA'.trim()),
		type: 'regular',
		email: 'MFILINDRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7313,
		nationality: 'V'.toUpperCase(),
		cedula: 18922027,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' HERNAN JOSE'.trim()),
		lastName: capitalCadena('LOPEZ GIMENEZ'.trim()),
		type: 'regular',
		email: 'HLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 646,
		nationality: 'V'.toUpperCase(),
		cedula: 4378796,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SESCALONA'.trim().toLowerCase(),
		name: capitalCadena(' SAMARA DEL CARMEN'.trim()),
		lastName: capitalCadena('ESCALONA MOSQUERA'.trim()),
		type: 'regular',
		email: 'SESCALONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2230,
		nationality: 'V'.toUpperCase(),
		cedula: 11879233,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jperaza'.trim().toLowerCase(),
		name: capitalCadena(' JHOAN ARNALDO'.trim()),
		lastName: capitalCadena('PERAZA BETANCOURT'.trim()),
		type: 'regular',
		email: 'jperaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15490,
		nationality: 'V'.toUpperCase(),
		cedula: 14159233,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yearojas'.trim().toLowerCase(),
		name: capitalCadena(' YEANMAR ARIADNA'.trim()),
		lastName: capitalCadena('ROJAS BRITO'.trim()),
		type: 'regular',
		email: 'yearojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15733,
		nationality: 'V'.toUpperCase(),
		cedula: 19164553,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mgarcia'.trim().toLowerCase(),
		name: capitalCadena(' MAIROBY ALBANY'.trim()),
		lastName: capitalCadena('GARCIA DE OVIEDO'.trim()),
		type: 'regular',
		email: 'mgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15735,
		nationality: 'V'.toUpperCase(),
		cedula: 19640757,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RUDVARGAS'.trim().toLowerCase(),
		name: capitalCadena(' RUDDY SONILENNY'.trim()),
		lastName: capitalCadena('VARGAS YUSTIS'.trim()),
		type: 'regular',
		email: 'RUDVARGAS@BNC.COM,VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16249,
		nationality: 'V'.toUpperCase(),
		cedula: 21461151,
		centroTrabajoId: '73',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['AV PEDRO LEON TORRES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SMAVAREZ'.trim().toLowerCase(),
		name: capitalCadena(' SANDRA CONSTANSA'.trim()),
		lastName: capitalCadena('MAVAREZ ROMERO'.trim()),
		type: 'regular',
		email: 'SMAVAREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16368,
		nationality: 'V'.toUpperCase(),
		cedula: 12326403,
		centroTrabajoId: '74',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DPAUL'.trim().toLowerCase(),
		name: capitalCadena(' DANY KENDRIA'.trim()),
		lastName: capitalCadena('PAUL '.trim()),
		type: 'regular',
		email: 'DPAUL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12717,
		nationality: 'V'.toUpperCase(),
		cedula: 22520892,
		centroTrabajoId: '74',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DMONASTERIOS'.trim().toLowerCase(),
		name: capitalCadena(' DANIEL JESUS'.trim()),
		lastName: capitalCadena('MONASTERIO RAMIREZ'.trim()),
		type: 'regular',
		email: 'DMONASTERIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15939,
		nationality: 'V'.toUpperCase(),
		cedula: 28032055,
		centroTrabajoId: '74',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CIUDAD BOLIVAR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yvelazco'.trim().toLowerCase(),
		name: capitalCadena(' YSMELYS YELITZA'.trim()),
		lastName: capitalCadena('VELAZCO DE SILVA'.trim()),
		type: 'regular',
		email: 'yvelazco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13466,
		nationality: 'V'.toUpperCase(),
		cedula: 8762237,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PGIL'.trim().toLowerCase(),
		name: capitalCadena(' PILAR JOHANA'.trim()),
		lastName: capitalCadena('GIL '.trim()),
		type: 'regular',
		email: 'PGIL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7629,
		nationality: 'V'.toUpperCase(),
		cedula: 18062125,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'heduran'.trim().toLowerCase(),
		name: capitalCadena(' HERMINIA ROSA'.trim()),
		lastName: capitalCadena('DURAN RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'heduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13485,
		nationality: 'V'.toUpperCase(),
		cedula: 12726600,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NPENA'.trim().toLowerCase(),
		name: capitalCadena(' NERY JOSEFINA'.trim()),
		lastName: capitalCadena('PENA DE LA ROSA'.trim()),
		type: 'regular',
		email: 'NPENA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8775,
		nationality: 'V'.toUpperCase(),
		cedula: 7120081,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GDOMINGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' GABRIELA PATRICIA'.trim()),
		lastName: capitalCadena('DOMINGUEZ NOGUERA'.trim()),
		type: 'regular',
		email: 'GDOMINGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5356,
		nationality: 'V'.toUpperCase(),
		cedula: 15657186,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IZAVALA'.trim().toLowerCase(),
		name: capitalCadena(' IRENE MARIA'.trim()),
		lastName: capitalCadena('ZAVALA RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'IZAVALA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12700,
		nationality: 'V'.toUpperCase(),
		cedula: 18764569,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rospino'.trim().toLowerCase(),
		name: capitalCadena(' ROBERTO WALTER'.trim()),
		lastName: capitalCadena('OSPINO FLORES'.trim()),
		type: 'regular',
		email: 'rospino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13072,
		nationality: 'V'.toUpperCase(),
		cedula: 31747348,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NAPONTE'.trim().toLowerCase(),
		name: capitalCadena(' NORELIS ANDREINA'.trim()),
		lastName: capitalCadena('APONTE MACIAS'.trim()),
		type: 'regular',
		email: 'NAPONTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15680,
		nationality: 'V'.toUpperCase(),
		cedula: 30172384,
		centroTrabajoId: '76',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA SUR']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KADARME'.trim().toLowerCase(),
		name: capitalCadena(' KEYLA VANESSA'.trim()),
		lastName: capitalCadena('ADARME MILANO'.trim()),
		type: 'regular',
		email: 'KADARME@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12049,
		nationality: 'V'.toUpperCase(),
		cedula: 15393136,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IMORENO'.trim().toLowerCase(),
		name: capitalCadena(' ISMAEL JOSE'.trim()),
		lastName: capitalCadena('MORENO AGRAZ'.trim()),
		type: 'regular',
		email: 'IMORENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8528,
		nationality: 'V'.toUpperCase(),
		cedula: 18836750,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANGYRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGYBELL MAILITH'.trim()),
		lastName: capitalCadena('RODRIGUEZ ORTEGA'.trim()),
		type: 'regular',
		email: 'ANGYRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16187,
		nationality: 'V'.toUpperCase(),
		cedula: 14395577,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GCASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' GARDENIS COROMOTO'.trim()),
		lastName: capitalCadena('CASTILLO ZACARIAS'.trim()),
		type: 'regular',
		email: 'GCASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2074,
		nationality: 'V'.toUpperCase(),
		cedula: 12842992,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcarruido'.trim().toLowerCase(),
		name: capitalCadena(' DARIFER '.trim()),
		lastName: capitalCadena('CARRUIDO PIMENTEL'.trim()),
		type: 'regular',
		email: 'dcarruido@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10988,
		nationality: 'V'.toUpperCase(),
		cedula: 16074332,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IFRANCO'.trim().toLowerCase(),
		name: capitalCadena(' IVONNE OXIMAR'.trim()),
		lastName: capitalCadena('FRANCO CHAPARRO'.trim()),
		type: 'regular',
		email: 'IFRANCO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11943,
		nationality: 'V'.toUpperCase(),
		cedula: 15393610,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASIDRIAN'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDER JOSE'.trim()),
		lastName: capitalCadena('SIDRIAN VILLEGAS'.trim()),
		type: 'regular',
		email: 'ASIDRIAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 645,
		nationality: 'V'.toUpperCase(),
		cedula: 10667184,
		centroTrabajoId: '79',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name === departamentoOnlyNames['SAN SEBASTIAN DE LOS REYES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'SUHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' SULIMAR JOSEFINA'.trim()),
		lastName: capitalCadena('HERRERA CASTRILLO'.trim()),
		type: 'regular',
		email: 'SUHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11990,
		nationality: 'V'.toUpperCase(),
		cedula: 16553005,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NNAVARRO'.trim().toLowerCase(),
		name: capitalCadena(' NETZA VIRGINIA'.trim()),
		lastName: capitalCadena('NAVARRO QUINTERO'.trim()),
		type: 'regular',
		email: 'NNAVARRO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16268,
		nationality: 'V'.toUpperCase(),
		cedula: 18083974,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcarmona'.trim().toLowerCase(),
		name: capitalCadena(' JUAN JOSE'.trim()),
		lastName: capitalCadena('CARMONA BORDONES'.trim()),
		type: 'regular',
		email: 'jcarmona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15417,
		nationality: 'V'.toUpperCase(),
		cedula: 21099356,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' NIEVES '.trim()),
		lastName: capitalCadena('RODRIGUEZ SAN FIEL'.trim()),
		type: 'regular',
		email: 'FRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16265,
		nationality: 'E'.toUpperCase(),
		cedula: 81185254,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NVERA'.trim().toLowerCase(),
		name: capitalCadena(' NAYARI '.trim()),
		lastName: capitalCadena('VERA LAREZ'.trim()),
		type: 'regular',
		email: 'NVERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 980,
		nationality: 'V'.toUpperCase(),
		cedula: 14577014,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' JANET COROMOTO'.trim()),
		lastName: capitalCadena('SANCHEZ ORTA'.trim()),
		type: 'regular',
		email: 'JSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2106,
		nationality: 'V'.toUpperCase(),
		cedula: 9483240,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DORTEGA'.trim().toLowerCase(),
		name: capitalCadena(' DANA MARIANA'.trim()),
		lastName: capitalCadena('ORTEGA CABRERA'.trim()),
		type: 'regular',
		email: 'DORTEGA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11956,
		nationality: 'V'.toUpperCase(),
		cedula: 26486119,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSHAHUN'.trim().toLowerCase(),
		name: capitalCadena(' RADI DE JESUS'.trim()),
		lastName: capitalCadena('SHAHUN MORENO'.trim()),
		type: 'regular',
		email: 'RSHAHUN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15559,
		nationality: 'V'.toUpperCase(),
		cedula: 30555942,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KEICASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' KEIMI JANIS'.trim()),
		lastName: capitalCadena('CASTILLO BERMUDEZ'.trim()),
		type: 'regular',
		email: 'KEICASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15561,
		nationality: 'V'.toUpperCase(),
		cedula: 19531634,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarengifo'.trim().toLowerCase(),
		name: capitalCadena(' YANEYCA IROSANA'.trim()),
		lastName: capitalCadena('RENGIFO VALECILLOS'.trim()),
		type: 'regular',
		email: 'yarengifo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15865,
		nationality: 'V'.toUpperCase(),
		cedula: 26734831,
		centroTrabajoId: '80',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LAS DELICIAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VCAMACHO'.trim().toLowerCase(),
		name: capitalCadena(' VERONICA ANDREINA'.trim()),
		lastName: capitalCadena('CAMACHO RIVERO'.trim()),
		type: 'regular',
		email: 'VCAMACHO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4313,
		nationality: 'V'.toUpperCase(),
		cedula: 17015957,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RRIVERO'.trim().toLowerCase(),
		name: capitalCadena(' RONALD ALEXANDER'.trim()),
		lastName: capitalCadena('RIVERO PORTILLO'.trim()),
		type: 'regular',
		email: 'RRIVERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12112,
		nationality: 'V'.toUpperCase(),
		cedula: 23801456,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JURODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' JUAN BAUTISTA'.trim()),
		lastName: capitalCadena('RODRIGUEZ JAEN'.trim()),
		type: 'regular',
		email: 'JURODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2061,
		nationality: 'V'.toUpperCase(),
		cedula: 6427663,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erdiaz'.trim().toLowerCase(),
		name: capitalCadena(' ERIKA VANESSA'.trim()),
		lastName: capitalCadena('DIAZ ROMERO'.trim()),
		type: 'regular',
		email: 'erdiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14938,
		nationality: 'V'.toUpperCase(),
		cedula: 17459662,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycorniel'.trim().toLowerCase(),
		name: capitalCadena(' YENSYS YURBELYS'.trim()),
		lastName: capitalCadena('CORNIEL ZAPATA'.trim()),
		type: 'regular',
		email: 'ycorniel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15243,
		nationality: 'V'.toUpperCase(),
		cedula: 19003339,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRAMOS'.trim().toLowerCase(),
		name: capitalCadena(' KHARLA ANYERI'.trim()),
		lastName: capitalCadena('RAMOS CEBALLOS'.trim()),
		type: 'regular',
		email: 'KRAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16021,
		nationality: 'V'.toUpperCase(),
		cedula: 17985426,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgalindez'.trim().toLowerCase(),
		name: capitalCadena(' CANDIDA CRISBERTH'.trim()),
		lastName: capitalCadena('GALINDEZ JIMENEZ'.trim()),
		type: 'regular',
		email: 'cgalindez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10505,
		nationality: 'V'.toUpperCase(),
		cedula: 19949749,
		centroTrabajoId: '81',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY CENTRO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yugamez'.trim().toLowerCase(),
		name: capitalCadena(' YUSDREY '.trim()),
		lastName: capitalCadena('GAMEZ BORGES'.trim()),
		type: 'regular',
		email: 'yugamez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11050,
		nationality: 'V'.toUpperCase(),
		cedula: 22958723,
		centroTrabajoId: '83',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LCARRERA'.trim().toLowerCase(),
		name: capitalCadena(' LUIS EMILIO'.trim()),
		lastName: capitalCadena('CARRERA BARBOZA'.trim()),
		type: 'regular',
		email: 'LCARRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5080,
		nationality: 'V'.toUpperCase(),
		cedula: 6460301,
		centroTrabajoId: '83',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'IVILORIA'.trim().toLowerCase(),
		name: capitalCadena(' IRENE JOSEFINA'.trim()),
		lastName: capitalCadena('VILORIA LORETO'.trim()),
		type: 'regular',
		email: 'IVILORIA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5531,
		nationality: 'V'.toUpperCase(),
		cedula: 9664571,
		centroTrabajoId: '83',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' LEOPOLDO ALBERTO'.trim()),
		lastName: capitalCadena('HERRERA ALAMO'.trim()),
		type: 'regular',
		email: 'LHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15936,
		nationality: 'V'.toUpperCase(),
		cedula: 15739170,
		centroTrabajoId: '83',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YUSECASTILLO'.trim().toLowerCase(),
		name: capitalCadena(' YUSELI YERIDEE'.trim()),
		lastName: capitalCadena('CASTILLO MORON'.trim()),
		type: 'regular',
		email: 'YUSECASTILLO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9230,
		nationality: 'V'.toUpperCase(),
		cedula: 20895607,
		centroTrabajoId: '83',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY ALCALDÍA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vuviedo'.trim().toLowerCase(),
		name: capitalCadena(' VIRGINIA JOSEFINA'.trim()),
		lastName: capitalCadena('UVIEDO ARAQUE'.trim()),
		type: 'regular',
		email: 'vuviedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13811,
		nationality: 'V'.toUpperCase(),
		cedula: 14925877,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' HECTOR EDUARDO'.trim()),
		lastName: capitalCadena('SANCHEZ QUIÑONEZ'.trim()),
		type: 'regular',
		email: 'HSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1680,
		nationality: 'V'.toUpperCase(),
		cedula: 15300960,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'WPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' WALKIRIA BENSALEM'.trim()),
		lastName: capitalCadena('PEREZ ORTUÑO'.trim()),
		type: 'regular',
		email: 'WPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12551,
		nationality: 'V'.toUpperCase(),
		cedula: 17517012,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CATOVAR'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS EFREN'.trim()),
		lastName: capitalCadena('TOVAR MENDOZA'.trim()),
		type: 'regular',
		email: 'CATOVAR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 648,
		nationality: 'V'.toUpperCase(),
		cedula: 7105185,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MALFIERI'.trim().toLowerCase(),
		name: capitalCadena(' MYRIAM ANNA'.trim()),
		lastName: capitalCadena('ALFIERI CIALDELLA'.trim()),
		type: 'regular',
		email: 'MALFIERI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1273,
		nationality: 'V'.toUpperCase(),
		cedula: 11350183,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YIDROGO'.trim().toLowerCase(),
		name: capitalCadena(' YOLEIDA DE JESUS'.trim()),
		lastName: capitalCadena('IDROGO SALAS'.trim()),
		type: 'regular',
		email: 'YIDROGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12074,
		nationality: 'V'.toUpperCase(),
		cedula: 12109733,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rarodriguez'.trim().toLowerCase(),
		name: capitalCadena(' RAQUEL NOEMI'.trim()),
		lastName: capitalCadena('RODRIGUEZ OTAIZA'.trim()),
		type: 'regular',
		email: 'rarodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15584,
		nationality: 'V'.toUpperCase(),
		cedula: 20030080,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oortega'.trim().toLowerCase(),
		name: capitalCadena(' ORIANA SARAI'.trim()),
		lastName: capitalCadena('ORTEGA ESPINOZA'.trim()),
		type: 'regular',
		email: 'oortega@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15628,
		nationality: 'V'.toUpperCase(),
		cedula: 30505417,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAYGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' MAYRIANNY FRANYESQUI'.trim()),
		lastName: capitalCadena('GUTIERREZ SEQUERA'.trim()),
		type: 'regular',
		email: 'MAYGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15676,
		nationality: 'V'.toUpperCase(),
		cedula: 30657003,
		centroTrabajoId: '85',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VALENCIA BOLÍVAR NORTE']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JNOCENTE'.trim().toLowerCase(),
		name: capitalCadena(' JOHAN ISAAC'.trim()),
		lastName: capitalCadena('NOCENTE MEDINA'.trim()),
		type: 'regular',
		email: 'JNOCENTE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11560,
		nationality: 'V'.toUpperCase(),
		cedula: 21466046,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irodriguez'.trim().toLowerCase(),
		name: capitalCadena(' ISMENIA MAGDALENA'.trim()),
		lastName: capitalCadena('RODRIGUEZ MARTINEZ'.trim()),
		type: 'regular',
		email: 'irodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14323,
		nationality: 'V'.toUpperCase(),
		cedula: 15301744,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'chcarrillo'.trim().toLowerCase(),
		name: capitalCadena(' CHRISTIAN JOSE'.trim()),
		lastName: capitalCadena('CARRILLO SOJO'.trim()),
		type: 'regular',
		email: 'chcarrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13834,
		nationality: 'V'.toUpperCase(),
		cedula: 17701567,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MASANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIAN DEL VALLE'.trim()),
		lastName: capitalCadena('SANCHEZ '.trim()),
		type: 'regular',
		email: 'MASANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2619,
		nationality: 'V'.toUpperCase(),
		cedula: 15962524,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'FASUAJE'.trim().toLowerCase(),
		name: capitalCadena(' FERNANDO RAMON'.trim()),
		lastName: capitalCadena('ASUAJE RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'FASUAJE@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2618,
		nationality: 'V'.toUpperCase(),
		cedula: 13483452,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DQUINTANA'.trim().toLowerCase(),
		name: capitalCadena(' DAVIANA DANYELI'.trim()),
		lastName: capitalCadena('QUINTANA PIÑANGO'.trim()),
		type: 'regular',
		email: 'DQUINTANA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10568,
		nationality: 'V'.toUpperCase(),
		cedula: 25542554,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YOSTOS'.trim().toLowerCase(),
		name: capitalCadena(' YASIBIT CAROLINA'.trim()),
		lastName: capitalCadena('OSTOS PEREZ'.trim()),
		type: 'regular',
		email: 'YOSTOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12693,
		nationality: 'V'.toUpperCase(),
		cedula: 17471951,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marreyes'.trim().toLowerCase(),
		name: capitalCadena(' MARIA ALEJANDRA'.trim()),
		lastName: capitalCadena('REYES DE ROMERO'.trim()),
		type: 'regular',
		email: 'marreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12912,
		nationality: 'V'.toUpperCase(),
		cedula: 12608879,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'TESAA'.trim().toLowerCase(),
		name: capitalCadena(' TEDDY TATIANA'.trim()),
		lastName: capitalCadena('ESAA ROJAS'.trim()),
		type: 'regular',
		email: 'TESAA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9591,
		nationality: 'V'.toUpperCase(),
		cedula: 18147527,
		centroTrabajoId: '88',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CAGUA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JARELLANO'.trim().toLowerCase(),
		name: capitalCadena(' JOSMAIL NAIRYN'.trim()),
		lastName: capitalCadena('ARELLANO PLATA'.trim()),
		type: 'regular',
		email: 'JARELLANO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10611,
		nationality: 'V'.toUpperCase(),
		cedula: 19514975,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DQUINTERO'.trim().toLowerCase(),
		name: capitalCadena(' DULCE MARIBEL'.trim()),
		lastName: capitalCadena('QUINTERO CASTILLO'.trim()),
		type: 'regular',
		email: 'DQUINTERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3449,
		nationality: 'V'.toUpperCase(),
		cedula: 12339450,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KEHERNANDEZ'.trim().toLowerCase(),
		name: capitalCadena(' KERVIN DAVID'.trim()),
		lastName: capitalCadena('HERNANDEZ ARGUELLO'.trim()),
		type: 'regular',
		email: 'KEHERNANDEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4879,
		nationality: 'V'.toUpperCase(),
		cedula: 19428813,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MMOYETONES'.trim().toLowerCase(),
		name: capitalCadena(' MANUEL VICENTE'.trim()),
		lastName: capitalCadena('MOYETONES PRADO'.trim()),
		type: 'regular',
		email: 'MMOYETONES@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9445,
		nationality: 'V'.toUpperCase(),
		cedula: 8803765,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maperez'.trim().toLowerCase(),
		name: capitalCadena(' MARTHA YOLEIDA'.trim()),
		lastName: capitalCadena('PEREZ VIVAS'.trim()),
		type: 'regular',
		email: 'maperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11126,
		nationality: 'V'.toUpperCase(),
		cedula: 14577087,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANRAMOS'.trim().toLowerCase(),
		name: capitalCadena(' ANGELICA YAMILETH'.trim()),
		lastName: capitalCadena('RAMOS DELGADO'.trim()),
		type: 'regular',
		email: 'ANRAMOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11780,
		nationality: 'V'.toUpperCase(),
		cedula: 27866302,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'VPRINCIPAL'.trim().toLowerCase(),
		name: capitalCadena(' VIVIAN NINORKA'.trim()),
		lastName: capitalCadena('PRINCIPAL MARCANO'.trim()),
		type: 'regular',
		email: 'VPRINCIPAL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12893,
		nationality: 'V'.toUpperCase(),
		cedula: 16130162,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cduarte'.trim().toLowerCase(),
		name: capitalCadena(' CARLOS NOEL'.trim()),
		lastName: capitalCadena('DUARTE CHACOA'.trim()),
		type: 'regular',
		email: 'cduarte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12958,
		nationality: 'V'.toUpperCase(),
		cedula: 13953127,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ynlopez'.trim().toLowerCase(),
		name: capitalCadena(' YNGRELI YEXURI'.trim()),
		lastName: capitalCadena('LOPEZ DUQUE'.trim()),
		type: 'regular',
		email: 'ynlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15453,
		nationality: 'V'.toUpperCase(),
		cedula: 20453692,
		centroTrabajoId: '89',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MARACAY LOS SAMANES']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yaxramirez'.trim().toLowerCase(),
		name: capitalCadena(' YAXENIA YORMARY'.trim()),
		lastName: capitalCadena('RAMIREZ NIEVES'.trim()),
		type: 'regular',
		email: 'yaxramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9751,
		nationality: 'V'.toUpperCase(),
		cedula: 20356012,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANRUIZ'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL ROBERTO'.trim()),
		lastName: capitalCadena('RUIZ MIJARES'.trim()),
		type: 'regular',
		email: 'ANRUIZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2743,
		nationality: 'V'.toUpperCase(),
		cedula: 7288354,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'GLRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' GLENYS MARIELAROSA'.trim()),
		lastName: capitalCadena('RODRIGUEZ RODRIGUEZ'.trim()),
		type: 'regular',
		email: 'GLRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7133,
		nationality: 'V'.toUpperCase(),
		cedula: 19003364,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DHERRERA'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA COROMOTO'.trim()),
		lastName: capitalCadena('HERRERA '.trim()),
		type: 'regular',
		email: 'DHERRERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10792,
		nationality: 'V'.toUpperCase(),
		cedula: 15130234,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MRIERA'.trim().toLowerCase(),
		name: capitalCadena(' MARIO RENE'.trim()),
		lastName: capitalCadena('RIERA TORO'.trim()),
		type: 'regular',
		email: 'MRIERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11248,
		nationality: 'V'.toUpperCase(),
		cedula: 16183451,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ASALDENO'.trim().toLowerCase(),
		name: capitalCadena(' ALANIS LOURDES'.trim()),
		lastName: capitalCadena('SALDEÑO YSAYA'.trim()),
		type: 'regular',
		email: 'ASALDENO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16073,
		nationality: 'V'.toUpperCase(),
		cedula: 27863821,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'PALMEIDA'.trim().toLowerCase(),
		name: capitalCadena(' PAOLA FRANCHESCA'.trim()),
		lastName: capitalCadena('ALMEIDA CARMONA'.trim()),
		type: 'regular',
		email: 'PALMEIDA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16219,
		nationality: 'V'.toUpperCase(),
		cedula: 20651128,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CROJAS'.trim().toLowerCase(),
		name: capitalCadena(' CARMEN ELENA'.trim()),
		lastName: capitalCadena('ROJAS QUIÑONEZ'.trim()),
		type: 'regular',
		email: 'CROJAS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1144,
		nationality: 'V'.toUpperCase(),
		cedula: 12309696,
		centroTrabajoId: '91',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['VILLA DE CURA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aarellano'.trim().toLowerCase(),
		name: capitalCadena(' ANNY MAGRET'.trim()),
		lastName: capitalCadena('ARELLANO QUINTERO'.trim()),
		type: 'regular',
		email: 'aarellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14465,
		nationality: 'V'.toUpperCase(),
		cedula: 13099106,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JORONDON'.trim().toLowerCase(),
		name: capitalCadena(' JOSE ALONSO'.trim()),
		lastName: capitalCadena('RONDON ZERPA'.trim()),
		type: 'regular',
		email: 'JORONDON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12428,
		nationality: 'V'.toUpperCase(),
		cedula: 10108582,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eguillen'.trim().toLowerCase(),
		name: capitalCadena(' EYLIN GRACIELA'.trim()),
		lastName: capitalCadena('GUILLEN DE SULBARAN'.trim()),
		type: 'regular',
		email: 'eguillen@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13992,
		nationality: 'V'.toUpperCase(),
		cedula: 13967982,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycadenas'.trim().toLowerCase(),
		name: capitalCadena(' YUSMERY ANGELICA'.trim()),
		lastName: capitalCadena('CADENAS ANGULO'.trim()),
		type: 'regular',
		email: 'ycadenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13469,
		nationality: 'V'.toUpperCase(),
		cedula: 9953293,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE JAVIER'.trim()),
		lastName: capitalCadena('PEREZ '.trim()),
		type: 'regular',
		email: 'JOSPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11959,
		nationality: 'V'.toUpperCase(),
		cedula: 15174389,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ygarcia'.trim().toLowerCase(),
		name: capitalCadena(' YELLY JOSEFINA'.trim()),
		lastName: capitalCadena('GARCIA GOITA'.trim()),
		type: 'regular',
		email: 'ygarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12481,
		nationality: 'V'.toUpperCase(),
		cedula: 16288485,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llabrador'.trim().toLowerCase(),
		name: capitalCadena(' LUZ ANDREINA'.trim()),
		lastName: capitalCadena('LABRADOR DOMADOR'.trim()),
		type: 'regular',
		email: 'llabrador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15369,
		nationality: 'V'.toUpperCase(),
		cedula: 16655000,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcarmona'.trim().toLowerCase(),
		name: capitalCadena(' MARIA GABRIELA'.trim()),
		lastName: capitalCadena('CARMONA PIMENTEL'.trim()),
		type: 'regular',
		email: 'mcarmona@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15555,
		nationality: 'V'.toUpperCase(),
		cedula: 24409790,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CICALDERON'.trim().toLowerCase(),
		name: capitalCadena(' CIRIA RUTH'.trim()),
		lastName: capitalCadena('CALDERON PEREZ'.trim()),
		type: 'regular',
		email: 'CICALDERON@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16003,
		nationality: 'V'.toUpperCase(),
		cedula: 13649059,
		centroTrabajoId: '93',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['MERIDA LAS AMERICAS']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncardenas'.trim().toLowerCase(),
		name: capitalCadena(' NORELLYS NEXDIMAR'.trim()),
		lastName: capitalCadena('CARDENAS GUEVARA'.trim()),
		type: 'regular',
		email: 'ncardenas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13655,
		nationality: 'V'.toUpperCase(),
		cedula: 15215492,
		centroTrabajoId: '63',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep =>
				dep.name ===
				departamentoOnlyNames[
					'GCIA. DE NEGOCIOS SECT AGROPECUARIO RG. CENT. OCCI'
				]
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'RSAYAGO'.trim().toLowerCase(),
		name: capitalCadena(' ROSMARITH YORGELYS'.trim()),
		lastName: capitalCadena('SAYAGO CONTRERAS'.trim()),
		type: 'regular',
		email: 'RSAYAGO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12387,
		nationality: 'V'.toUpperCase(),
		cedula: 23826634,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'NOLOPEZ'.trim().toLowerCase(),
		name: capitalCadena(' NORMA KARINA'.trim()),
		lastName: capitalCadena('LOPEZ RANGEL'.trim()),
		type: 'regular',
		email: 'NOLOPEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13163,
		nationality: 'V'.toUpperCase(),
		cedula: 18354642,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JTARAZONA'.trim().toLowerCase(),
		name: capitalCadena(' JOSE MARINO'.trim()),
		lastName: capitalCadena('TARAZONA GUERRERO'.trim()),
		type: 'regular',
		email: 'JTARAZONA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12417,
		nationality: 'V'.toUpperCase(),
		cedula: 5740278,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmendoza'.trim().toLowerCase(),
		name: capitalCadena(' DILLY YUSEL'.trim()),
		lastName: capitalCadena('MENDOZA SALCEDO'.trim()),
		type: 'regular',
		email: 'dmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15091,
		nationality: 'V'.toUpperCase(),
		cedula: 29636573,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JOSSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' JOSE LUIS'.trim()),
		lastName: capitalCadena('SANCHEZ AMADO'.trim()),
		type: 'regular',
		email: 'JOSSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15557,
		nationality: 'V'.toUpperCase(),
		cedula: 12992808,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ENCASTELLANOS'.trim().toLowerCase(),
		name: capitalCadena(' ENYERLYN LUYMAR'.trim()),
		lastName: capitalCadena('CASTELLANOS RAMIREZ'.trim()),
		type: 'regular',
		email: 'ENCASTELLANOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15795,
		nationality: 'V'.toUpperCase(),
		cedula: 30890796,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LMALDONADO'.trim().toLowerCase(),
		name: capitalCadena(' LISBETH DEL CARMEN'.trim()),
		lastName: capitalCadena('MALDONADO DE PEREZ'.trim()),
		type: 'regular',
		email: 'LMALDONADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12655,
		nationality: 'V'.toUpperCase(),
		cedula: 14975561,
		centroTrabajoId: '96',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['SAN ANTONIO DEL TACHIRA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'atorrence'.trim().toLowerCase(),
		name: capitalCadena(' ANA MARIA'.trim()),
		lastName: capitalCadena('TORRENCE MARIÑO'.trim()),
		type: 'regular',
		email: 'atorrence@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14360,
		nationality: 'V'.toUpperCase(),
		cedula: 20082460,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DVELASQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' DAYANA ROCIO'.trim()),
		lastName: capitalCadena('VELASQUEZ PETIT'.trim()),
		type: 'regular',
		email: 'DVELASQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14707,
		nationality: 'V'.toUpperCase(),
		cedula: 12104413,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MPALACIOS'.trim().toLowerCase(),
		name: capitalCadena(' MILAGROS YAMILET'.trim()),
		lastName: capitalCadena('PALACIOS HENRIQUEZ'.trim()),
		type: 'regular',
		email: 'MPALACIOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6274,
		nationality: 'V'.toUpperCase(),
		cedula: 13635233,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAGUTIERREZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIANN DE LOS ANGELES'.trim()),
		lastName: capitalCadena('GUTIERREZ CEDEÑO'.trim()),
		type: 'regular',
		email: 'MAGUTIERREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1933,
		nationality: 'V'.toUpperCase(),
		cedula: 15000384,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ERANGEL'.trim().toLowerCase(),
		name: capitalCadena(' EBONY JOSEFINA'.trim()),
		lastName: capitalCadena('RANGEL MARTINEZ'.trim()),
		type: 'regular',
		email: 'ERANGEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11706,
		nationality: 'V'.toUpperCase(),
		cedula: 14999803,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MSIRA'.trim().toLowerCase(),
		name: capitalCadena(' MISLAI DEL CARMEN'.trim()),
		lastName: capitalCadena('SIRA GUTIERREZ'.trim()),
		type: 'regular',
		email: 'MSIRA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12672,
		nationality: 'V'.toUpperCase(),
		cedula: 17994635,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'HBALZA'.trim().toLowerCase(),
		name: capitalCadena(' HEIDIMAR ALEXANDRA'.trim()),
		lastName: capitalCadena('BALZA SILVA'.trim()),
		type: 'regular',
		email: 'HBALZA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15677,
		nationality: 'V'.toUpperCase(),
		cedula: 29603454,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'LIMALDONADO'.trim().toLowerCase(),
		name: capitalCadena(' LIZMAR ANDREA'.trim()),
		lastName: capitalCadena('MALDONADO ZERPA'.trim()),
		type: 'regular',
		email: 'LIMALDONADO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15679,
		nationality: 'V'.toUpperCase(),
		cedula: 30197897,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALEPEREZ'.trim().toLowerCase(),
		name: capitalCadena(' ALEXANDRA MARINA'.trim()),
		lastName: capitalCadena('PEREZ REYES'.trim()),
		type: 'regular',
		email: 'ALEPEREZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16050,
		nationality: 'V'.toUpperCase(),
		cedula: 22009000,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rubhernandez'.trim().toLowerCase(),
		name: capitalCadena(' RUBEN DARIO'.trim()),
		lastName: capitalCadena('HERNANDEZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'rubhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13901,
		nationality: 'V'.toUpperCase(),
		cedula: 15259925,
		centroTrabajoId: '97',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['LA QUIZANDA']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acabello'.trim().toLowerCase(),
		name: capitalCadena(' ANGEL RAFAEL'.trim()),
		lastName: capitalCadena('CABELLO MORALES'.trim()),
		type: 'regular',
		email: 'acabello@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14512,
		nationality: 'V'.toUpperCase(),
		cedula: 18865197,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joguzman'.trim().toLowerCase(),
		name: capitalCadena(' JONATHAN JATNIEL'.trim()),
		lastName: capitalCadena('GUZMAN CASTRO'.trim()),
		type: 'regular',
		email: 'joguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9643,
		nationality: 'V'.toUpperCase(),
		cedula: 18588634,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'JMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' JORGE ALFREDO'.trim()),
		lastName: capitalCadena('MARTINEZ CORONEL'.trim()),
		type: 'regular',
		email: 'JMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12589,
		nationality: 'V'.toUpperCase(),
		cedula: 13284187,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ARMILLAN'.trim().toLowerCase(),
		name: capitalCadena(' ARIANNA ANDREINA'.trim()),
		lastName: capitalCadena('MILLAN RONDON'.trim()),
		type: 'regular',
		email: 'ARMILLAN@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16279,
		nationality: 'V'.toUpperCase(),
		cedula: 15664267,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsequera'.trim().toLowerCase(),
		name: capitalCadena(' DIRWIN JESUS'.trim()),
		lastName: capitalCadena('SEQUERA LEON'.trim()),
		type: 'regular',
		email: 'dsequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10931,
		nationality: 'V'.toUpperCase(),
		cedula: 20027765,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CGUEVARA'.trim().toLowerCase(),
		name: capitalCadena(' CIDER ELISEO'.trim()),
		lastName: capitalCadena('GUEVARA ALARCON'.trim()),
		type: 'regular',
		email: 'CGUEVARA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6037,
		nationality: 'V'.toUpperCase(),
		cedula: 17269085,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
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
		userName: 'CCARRASQUEL'.trim().toLowerCase(),
		name: capitalCadena(' CARLA DEL VALLE'.trim()),
		lastName: capitalCadena('CARRASQUEL ALVAREZ'.trim()),
		type: 'regular',
		email: 'CCARRASQUEL@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8030,
		nationality: 'V'.toUpperCase(),
		cedula: 15049663,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
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
		userName: 'ICAMPOS'.trim().toLowerCase(),
		name: capitalCadena(' IYERLIN COROMOTO'.trim()),
		lastName: capitalCadena('CAMPOS VILLARROEL'.trim()),
		type: 'regular',
		email: 'ICAMPOS@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4925,
		nationality: 'V'.toUpperCase(),
		cedula: 20593306,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MCORREA'.trim().toLowerCase(),
		name: capitalCadena(' MONICA JOSEFINA'.trim()),
		lastName: capitalCadena('CORREA ALVAREZ'.trim()),
		type: 'regular',
		email: 'MCORREA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 550,
		nationality: 'V'.toUpperCase(),
		cedula: 6343480,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ANIDIAZ'.trim().toLowerCase(),
		name: capitalCadena(' ANIBAL RODOLFO'.trim()),
		lastName: capitalCadena('DIAZ '.trim()),
		type: 'regular',
		email: 'ANIDIAZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16258,
		nationality: 'V'.toUpperCase(),
		cedula: 11369949,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KRODRIGUEZ'.trim().toLowerCase(),
		name: capitalCadena(' KATIUSKA ALEJANDRA'.trim()),
		lastName: capitalCadena('RODRIGUEZ DURAN'.trim()),
		type: 'regular',
		email: 'KRODRIGUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12128,
		nationality: 'V'.toUpperCase(),
		cedula: 24224656,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'AYANEZ'.trim().toLowerCase(),
		name: capitalCadena(' ABRAHAM ANTONIO'.trim()),
		lastName: capitalCadena('YANEZ DOUBRONT'.trim()),
		type: 'regular',
		email: 'AYANEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13077,
		nationality: 'V'.toUpperCase(),
		cedula: 29651611,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YMOSCOSO'.trim().toLowerCase(),
		name: capitalCadena(' YEIMBERLING YOSMARI'.trim()),
		lastName: capitalCadena('MOSCOSO LOPEZ'.trim()),
		type: 'regular',
		email: 'YMOSCOSO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13091,
		nationality: 'V'.toUpperCase(),
		cedula: 28326542,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'micontreras'.trim().toLowerCase(),
		name: capitalCadena(' MIXAEL ZAID'.trim()),
		lastName: capitalCadena('CONTRERAS DIAZ'.trim()),
		type: 'regular',
		email: 'micontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15397,
		nationality: 'V'.toUpperCase(),
		cedula: 31024734,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yualvarez'.trim().toLowerCase(),
		name: capitalCadena(' YUSBEIDY NOHEMI'.trim()),
		lastName: capitalCadena('ALVAREZ CARDOZO'.trim()),
		type: 'regular',
		email: 'yualvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15472,
		nationality: 'V'.toUpperCase(),
		cedula: 29518614,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcordero'.trim().toLowerCase(),
		name: capitalCadena(' JONAITH LEIMAR'.trim()),
		lastName: capitalCadena('CORDERO TORO'.trim()),
		type: 'regular',
		email: 'jcordero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15476,
		nationality: 'V'.toUpperCase(),
		cedula: 30358484,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'megutierrez'.trim().toLowerCase(),
		name: capitalCadena(' MERCEDES MIREYA'.trim()),
		lastName: capitalCadena('GUTIERREZ PALAO'.trim()),
		type: 'regular',
		email: 'megutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15530,
		nationality: 'V'.toUpperCase(),
		cedula: 18417214,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crgomez'.trim().toLowerCase(),
		name: capitalCadena(' CRISBEL YOSELINE'.trim()),
		lastName: capitalCadena('GOMEZ PALACIOS'.trim()),
		type: 'regular',
		email: 'crgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15596,
		nationality: 'V'.toUpperCase(),
		cedula: 25029271,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ALUPI'.trim().toLowerCase(),
		name: capitalCadena(' ARIADNA RAFAELA'.trim()),
		lastName: capitalCadena('LUPI BERROTERAN'.trim()),
		type: 'regular',
		email: 'ALUPI@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15695,
		nationality: 'V'.toUpperCase(),
		cedula: 28353035,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'APERERA'.trim().toLowerCase(),
		name: capitalCadena(' ANDREINA NAIROBY'.trim()),
		lastName: capitalCadena('PERERA GONZALEZ'.trim()),
		type: 'regular',
		email: 'APERERA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15756,
		nationality: 'V'.toUpperCase(),
		cedula: 18529414,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfontalvo'.trim().toLowerCase(),
		name: capitalCadena(' YARLENY BETANIA'.trim()),
		lastName: capitalCadena('FOLTALVO MONTILLA'.trim()),
		type: 'regular',
		email: 'yfontalvo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15819,
		nationality: 'V'.toUpperCase(),
		cedula: 29677304,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'KVAZQUEZ'.trim().toLowerCase(),
		name: capitalCadena(' KLUIVERLY DAVIANA'.trim()),
		lastName: capitalCadena('VAZQUEZ SILVA'.trim()),
		type: 'regular',
		email: 'KVAZQUEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15897,
		nationality: 'V'.toUpperCase(),
		cedula: 29832921,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'DROMERO'.trim().toLowerCase(),
		name: capitalCadena(' DAYANNA DE JESUS'.trim()),
		lastName: capitalCadena('ROMERO PARRA'.trim()),
		type: 'regular',
		email: 'DROMERO@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16201,
		nationality: 'V'.toUpperCase(),
		cedula: 15757008,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'EOSUNA'.trim().toLowerCase(),
		name: capitalCadena(' EMERLIN '.trim()),
		lastName: capitalCadena('OSUNA TOVAR'.trim()),
		type: 'regular',
		email: 'EOSUNA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16214,
		nationality: 'V'.toUpperCase(),
		cedula: 27374781,
		centroTrabajoId: '98',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['EL ROSAL']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aoropeza'.trim().toLowerCase(),
		name: capitalCadena(' ANIXA ROSARIO'.trim()),
		lastName: capitalCadena('OROPEZA PORTE'.trim()),
		type: 'regular',
		email: 'aoropeza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13637,
		nationality: 'V'.toUpperCase(),
		cedula: 15480646,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'naparicio'.trim().toLowerCase(),
		name: capitalCadena(' NANCY YULIMAR'.trim()),
		lastName: capitalCadena('APARICIO '.trim()),
		type: 'regular',
		email: 'naparicio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13969,
		nationality: 'V'.toUpperCase(),
		cedula: 15480701,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'CLMARTINEZ'.trim().toLowerCase(),
		name: capitalCadena(' CLARO OCTAVIO'.trim()),
		lastName: capitalCadena('MARTINEZ MACHADO'.trim()),
		type: 'regular',
		email: 'CLMARTINEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11631,
		nationality: 'V'.toUpperCase(),
		cedula: 13949013,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'YAMADOR'.trim().toLowerCase(),
		name: capitalCadena(' YELITZA JOSEFINA'.trim()),
		lastName: capitalCadena('AMADOR CARRILLO'.trim()),
		type: 'regular',
		email: 'YAMADOR@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16027,
		nationality: 'V'.toUpperCase(),
		cedula: 12382662,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARIADSANCHEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA DANIELA'.trim()),
		lastName: capitalCadena('SANCHEZ DURAN'.trim()),
		type: 'regular',
		email: 'MARIADSANCHEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16216,
		nationality: 'V'.toUpperCase(),
		cedula: 19600197,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MARACOSTA'.trim().toLowerCase(),
		name: capitalCadena(' MARIA JOSE'.trim()),
		lastName: capitalCadena('ACOSTA '.trim()),
		type: 'regular',
		email: 'MARACOSTA@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16295,
		nationality: 'V'.toUpperCase(),
		cedula: 25684089,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name ===
				cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'MAGOMEZ'.trim().toLowerCase(),
		name: capitalCadena(' MARIA VICTORIA'.trim()),
		lastName: capitalCadena('GOMEZ HERNANDEZ'.trim()),
		type: 'regular',
		email: 'MAGOMEZ@BNC.COM.VE'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7107,
		nationality: 'V'.toUpperCase(),
		cedula: 16384708,
		centroTrabajoId: '99',
		locationId: null,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['CALABOZO - GUÁRICO']
		)[0].id,
		cargoId: cargosData.filter(
			cargo =>
				cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS']
		)[0].id,
		extension: [],
		phone: []
	}
]
module.exports = { updateEmployees_Agencia }
