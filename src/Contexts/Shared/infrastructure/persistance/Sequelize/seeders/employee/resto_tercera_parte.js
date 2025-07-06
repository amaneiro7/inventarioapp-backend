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

const restoTerceraParte = [
	{
		userName: 'jesuarez'.toLowerCase(),
		name: capitalCadena('JENNIFER DEL CARMEN'),
		lastName: capitalCadena('SUAREZ AGUILERA'),
		type: 'regular',
		email: 'jesuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 693,
		nationality: 'V'.toUpperCase(),
		cedula: 13564463,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mramos'.toLowerCase(),
		name: capitalCadena('MILAGROS ADELAIDA'),
		lastName: capitalCadena('RAMOS BRITO'),
		type: 'regular',
		email: 'mramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1065,
		nationality: 'V'.toUpperCase(),
		cedula: 11990037,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cfernandez'.toLowerCase(),
		name: capitalCadena('CARLY JOSEFINA'),
		lastName: capitalCadena('FERNANDEZ CAMACHO'),
		type: 'regular',
		email: 'cfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2834,
		nationality: 'V'.toUpperCase(),
		cedula: 12382591,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hrico'.toLowerCase(),
		name: capitalCadena('HEVER ADRIAN'),
		lastName: capitalCadena('RICO CASTRO'),
		type: 'regular',
		email: 'hrico@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3073,
		nationality: 'V'.toUpperCase(),
		cedula: 17976743,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aortiz'.toLowerCase(),
		name: capitalCadena('ANGEL ANTONIO'),
		lastName: capitalCadena('ORTIZ NOGUERA'),
		type: 'regular',
		email: 'aortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3102,
		nationality: 'V'.toUpperCase(),
		cedula: 6196106,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD AS-400']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wsanz'.toLowerCase(),
		name: capitalCadena('WILLIEMAY '),
		lastName: capitalCadena('SANZ BRACHO'),
		type: 'regular',
		email: 'wsanz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5228,
		nationality: 'V'.toUpperCase(),
		cedula: 20155234,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN PLATAFORMA MEDIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'almartinez'.toLowerCase(),
		name: capitalCadena('ALBANIS YAHILINE'),
		lastName: capitalCadena('MARTINEZ SEQUERA'),
		type: 'regular',
		email: 'almartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7619,
		nationality: 'V'.toUpperCase(),
		cedula: 25947461,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'soropeza'.toLowerCase(),
		name: capitalCadena('STARLYN YOJAN'),
		lastName: capitalCadena('OROPEZA OVALLES'),
		type: 'regular',
		email: 'soropeza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9001,
		nationality: 'V'.toUpperCase(),
		cedula: 25561583,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CREACIÓN DE USUARIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arrosales'.toLowerCase(),
		name: capitalCadena('ARMANDO JOSE'),
		lastName: capitalCadena('ROSALES GARCIA'),
		type: 'regular',
		email: 'arrosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10148,
		nationality: 'V'.toUpperCase(),
		cedula: 25871236,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL DE CALIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cmaza'.toLowerCase(),
		name: capitalCadena('CARLOS GABRIEL'),
		lastName: capitalCadena('MAZA SANCHEZ'),
		type: 'regular',
		email: 'cmaza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12307,
		nationality: 'V'.toUpperCase(),
		cedula: 18904832,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'faquino'.toLowerCase(),
		name: capitalCadena('FRANCISCO JOSUE'),
		lastName: capitalCadena('AQUINO PIÑATE'),
		type: 'regular',
		email: 'faquino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12592,
		nationality: 'V'.toUpperCase(),
		cedula: 26281377,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA SEGURIDAD INFORMATICA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SEGURIDAD PERIMETRAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ipalencia'.toLowerCase(),
		name: capitalCadena('ISIS MERCEDES'),
		lastName: capitalCadena('PALENCIA CORDERO'),
		type: 'regular',
		email: 'ipalencia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13430,
		nationality: 'V'.toUpperCase(),
		cedula: 8503980,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yhmendez'.toLowerCase(),
		name: capitalCadena('YHANMARCOS JOSE'),
		lastName: capitalCadena('MENDEZ COY'),
		type: 'regular',
		email: 'yhmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14193,
		nationality: 'V'.toUpperCase(),
		cedula: 21596638,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE USUARIOS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ADMINISTRACIÓN ACCESO IDENTIDAD']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE AREA CALIDAD Y CUMPLIMIENTO'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CUMPLIMIENTO']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'egutierrez'.toLowerCase(),
		name: capitalCadena('ELVIS ALBERTO'),
		lastName: capitalCadena('GUTIERREZ CASTILLO'),
		type: 'regular',
		email: 'egutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13338,
		nationality: 'V'.toUpperCase(),
		cedula: 7695074,
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
		userName: 'ypalmar'.toLowerCase(),
		name: capitalCadena('YOLIS MAYELA'),
		lastName: capitalCadena('PALMAR GONZALEZ'),
		type: 'regular',
		email: 'ypalmar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13396,
		nationality: 'V'.toUpperCase(),
		cedula: 6830910,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lprieto'.toLowerCase(),
		name: capitalCadena('LISSET COROMOTO'),
		lastName: capitalCadena('PRIETO MARTINEZ'),
		type: 'regular',
		email: 'lprieto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13580,
		nationality: 'V'.toUpperCase(),
		cedula: 10604811,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'macolina'.toLowerCase(),
		name: capitalCadena('MANUEL ANGEL'),
		lastName: capitalCadena('COLINA JIMENEZ'),
		type: 'regular',
		email: 'macolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13603,
		nationality: 'V'.toUpperCase(),
		cedula: 3737435,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpardo'.toLowerCase(),
		name: capitalCadena('JOHANNA CAROLINA'),
		lastName: capitalCadena('PARDO GONZALEZ'),
		type: 'regular',
		email: 'jpardo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13693,
		nationality: 'V'.toUpperCase(),
		cedula: 17412167,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		userName: 'azurita'.toLowerCase(),
		name: capitalCadena('ALFONSO TOMAS'),
		lastName: capitalCadena('ZURITA BELEÑO'),
		type: 'regular',
		email: 'azurita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13756,
		nationality: 'V'.toUpperCase(),
		cedula: 11292459,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		userName: 'yafuenmayor'.toLowerCase(),
		name: capitalCadena('YASNORIS JOSEFINA'),
		lastName: capitalCadena('FUENMAYOR RODRIGUEZ'),
		type: 'regular',
		email: 'yafuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13819,
		nationality: 'V'.toUpperCase(),
		cedula: 14370751,
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
		userName: 'gvarela'.toLowerCase(),
		name: capitalCadena('GLIBETH BEXZAIDA'),
		lastName: capitalCadena('VARELA BARRIOS'),
		type: 'regular',
		email: 'gvarela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13827,
		nationality: 'V'.toUpperCase(),
		cedula: 13006547,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'egarcia'.toLowerCase(),
		name: capitalCadena('ELENA CHIQUINQUIRA'),
		lastName: capitalCadena('GARCIA ROSALES'),
		type: 'regular',
		email: 'egarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13841,
		nationality: 'V'.toUpperCase(),
		cedula: 12802809,
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
		userName: 'nnava'.toLowerCase(),
		name: capitalCadena('NANCY MARIA'),
		lastName: capitalCadena('NAVA TUDARES'),
		type: 'regular',
		email: 'nnava@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13934,
		nationality: 'V'.toUpperCase(),
		cedula: 7890182,
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
		userName: 'yloaiza'.toLowerCase(),
		name: capitalCadena('YENIFER RUBY'),
		lastName: capitalCadena('LOAIZA GONZALEZ'),
		type: 'regular',
		email: 'yloaiza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13983,
		nationality: 'V'.toUpperCase(),
		cedula: 21166240,
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
		userName: 'ivillalobos'.toLowerCase(),
		name: capitalCadena('ISMARA '),
		lastName: capitalCadena('VILLALOBOS VELIZ'),
		type: 'regular',
		email: 'ivillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14082,
		nationality: 'V'.toUpperCase(),
		cedula: 25296991,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anagonzale'.toLowerCase(),
		name: capitalCadena('ANA KARINA'),
		lastName: capitalCadena('GONZALEZ MONTILLA'),
		type: 'regular',
		email: 'anagonzale@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14120,
		nationality: 'V'.toUpperCase(),
		cedula: 20543608,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
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
		userName: 'aramirez'.toLowerCase(),
		name: capitalCadena('ADEMAYRA ANDREINA'),
		lastName: capitalCadena('RAMIREZ FERNANDEZ'),
		type: 'regular',
		email: 'aramirez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14259,
		nationality: 'V'.toUpperCase(),
		cedula: 20775859,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ARQUITECTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL FINANCIERO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		userName: 'sherrison'.toLowerCase(),
		name: capitalCadena('SERGIO EDUARDO'),
		lastName: capitalCadena('HERRISON CHOURIO'),
		type: 'regular',
		email: 'sherrison@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14356,
		nationality: 'V'.toUpperCase(),
		cedula: 15411589,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. CONTRATOS Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SERVICIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ofernandez'.toLowerCase(),
		name: capitalCadena('ORLANDO JESUS'),
		lastName: capitalCadena('FERNANDEZ LUZARDO'),
		type: 'regular',
		email: 'ofernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14358,
		nationality: 'V'.toUpperCase(),
		cedula: 25325453,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lsantiago'.toLowerCase(),
		name: capitalCadena('LUIS ALBERTO'),
		lastName: capitalCadena('SANTIAGO GALBIS'),
		type: 'regular',
		email: 'lsantiago@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14414,
		nationality: 'V'.toUpperCase(),
		cedula: 12832870,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ngonzalez'.toLowerCase(),
		name: capitalCadena('NORVYS ELIAS'),
		lastName: capitalCadena('GONZALEZ VELASQUEZ'),
		type: 'regular',
		email: 'ngonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14461,
		nationality: 'V'.toUpperCase(),
		cedula: 26175938,
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
		userName: 'jvelasquez'.toLowerCase(),
		name: capitalCadena('JESUS MIGUEL'),
		lastName: capitalCadena('VELASQUEZ AMARIS'),
		type: 'regular',
		email: 'jvelasquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14489,
		nationality: 'V'.toUpperCase(),
		cedula: 23280280,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hmarquina'.toLowerCase(),
		name: capitalCadena('HERNAN '),
		lastName: capitalCadena('MARQUINA SANCHEZ'),
		type: 'regular',
		email: 'hmarquina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14556,
		nationality: 'V'.toUpperCase(),
		cedula: 7954112,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mespinoza'.toLowerCase(),
		name: capitalCadena('MARCOS TULIO'),
		lastName: capitalCadena('ESPINOZA JIMENEZ'),
		type: 'regular',
		email: 'mespinoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14587,
		nationality: 'V'.toUpperCase(),
		cedula: 17977367,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'brflores'.toLowerCase(),
		name: capitalCadena('BRAYAN ALFREDO'),
		lastName: capitalCadena('FLORES MORALES'),
		type: 'regular',
		email: 'brflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14642,
		nationality: 'V'.toUpperCase(),
		cedula: 18121910,
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
		userName: 'maguero'.toLowerCase(),
		name: capitalCadena('MARIA JOSE'),
		lastName: capitalCadena('AGUERO PINEDA'),
		type: 'regular',
		email: 'maguero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14716,
		nationality: 'V'.toUpperCase(),
		cedula: 25342286,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. INFRAESTRUCTURA Y MANTENIMIENTO FISICO']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE INFRAESTRUCTURA Y MANTENIMIENT']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['AUXILIAR DE MANTENIMIENTO'])[0].id,
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
		userName: 'jarrioja'.toLowerCase(),
		name: capitalCadena('JANNA CAROLINA'),
		lastName: capitalCadena('ARRIOJA PEREZ'),
		type: 'regular',
		email: 'jarrioja@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14882,
		nationality: 'V'.toUpperCase(),
		cedula: 27260471,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA PROYECTO ESPECIAL CONTROL Y GESTIÓN']
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
		userName: 'jelopez'.toLowerCase(),
		name: capitalCadena('JESUS HUMBERTO'),
		lastName: capitalCadena('LOPEZ VELAZCO'),
		type: 'regular',
		email: 'jelopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15119,
		nationality: 'V'.toUpperCase(),
		cedula: 7943977,
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
		userName: 'cabarrios'.toLowerCase(),
		name: capitalCadena('CARLOS JAVIER'),
		lastName: capitalCadena('BARRIOS BRICEÑO'),
		type: 'regular',
		email: 'cabarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16101,
		nationality: 'V'.toUpperCase(),
		cedula: 24361918,
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
		userName: 'erquintero'.toLowerCase(),
		name: capitalCadena('ERNY JOSE'),
		lastName: capitalCadena('QUINTERO EXPOSITO'),
		type: 'regular',
		email: 'erquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16131,
		nationality: 'V'.toUpperCase(),
		cedula: 20204254,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTROL DE GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josmartinez'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('MARTINEZ GOMEZ'),
		type: 'regular',
		email: 'josmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16330,
		nationality: 'V'.toUpperCase(),
		cedula: 19838752,
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
		userName: 'gusrodriguez'.toLowerCase(),
		name: capitalCadena('GUSTAVO ALFONSO'),
		lastName: capitalCadena('RODRIGUEZ URBINA'),
		type: 'regular',
		email: 'gusrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16390,
		nationality: 'V'.toUpperCase(),
		cedula: 30934320,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E FINANZAS'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE CONTRALORÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ARA DE CONTRALORÍA DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jguillen'.toLowerCase(),
		name: capitalCadena('JORGE LEONARDO'),
		lastName: capitalCadena('GUILLEN ARAQUE'),
		type: 'regular',
		email: 'jguillen@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13975,
		nationality: 'V'.toUpperCase(),
		cedula: 19459882,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rbracho'.toLowerCase(),
		name: capitalCadena('ROCKY ANTONY'),
		lastName: capitalCadena('BRACHO BONILLA'),
		type: 'regular',
		email: 'rbracho@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14043,
		nationality: 'V'.toUpperCase(),
		cedula: 19837443,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA CORPORATIVA EMPRESAS E INSTITUCIONES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. BEI I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE NEGOCIOS OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO SR'])[0].id,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIO JR'])[0].id,
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
		userName: 'tgouveia'.toLowerCase(),
		name: capitalCadena('TRINA DE JESUS'),
		lastName: capitalCadena('GOUVEIA DA SILVA'),
		type: 'regular',
		email: 'tgouveia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14854,
		nationality: 'V'.toUpperCase(),
		cedula: 9738923,
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
		userName: 'vreyes'.toLowerCase(),
		name: capitalCadena('VALENTINA NAZARETH'),
		lastName: capitalCadena('REYES LOPEZ'),
		type: 'regular',
		email: 'vreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14111,
		nationality: 'V'.toUpperCase(),
		cedula: 20777904,
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
		userName: 'heurdaneta'.toLowerCase(),
		name: capitalCadena('HENYERBERTH ENRIQUE'),
		lastName: capitalCadena('URDANETA PEÑA'),
		type: 'regular',
		email: 'heurdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14585,
		nationality: 'V'.toUpperCase(),
		cedula: 26795759,
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
		userName: 'rmoreno'.toLowerCase(),
		name: capitalCadena('ROBERT DAVID'),
		lastName: capitalCadena('MORENO GARCIA'),
		type: 'regular',
		email: 'rmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14815,
		nationality: 'V'.toUpperCase(),
		cedula: 18832297,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. CUMPLIMIENTO'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. UPCLCFTFPADM'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA PREV Y CONTROL DE LC-FT-FPADM']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maicastillo'.toLowerCase(),
		name: capitalCadena('MAIKELLY PAOLA'),
		lastName: capitalCadena('CASTILLO HENRIQUEZ'),
		type: 'regular',
		email: 'maicastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15739,
		nationality: 'V'.toUpperCase(),
		cedula: 24958164,
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
		userName: 'mcorrea'.toLowerCase(),
		name: capitalCadena('MONICA JOSEFINA'),
		lastName: capitalCadena('CORREA ALVAREZ'),
		type: 'regular',
		email: 'mcorrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 550,
		nationality: 'V'.toUpperCase(),
		cedula: 6343480,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sdebaron'.toLowerCase(),
		name: capitalCadena('SONIA TERESA'),
		lastName: capitalCadena('MARTINEZ DE BARON'),
		type: 'regular',
		email: 'sdebaron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 606,
		nationality: 'V'.toUpperCase(),
		cedula: 6085226,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcastro'.toLowerCase(),
		name: capitalCadena('MARISOL DEL VALLE'),
		lastName: capitalCadena('CASTRO '),
		type: 'regular',
		email: 'mcastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 507,
		nationality: 'V'.toUpperCase(),
		cedula: 9765517,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE REGIONAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpiamo'.toLowerCase(),
		name: capitalCadena('JOSE MIGUEL'),
		lastName: capitalCadena('PIAMO CONTRERAS'),
		type: 'regular',
		email: 'jpiamo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1295,
		nationality: 'V'.toUpperCase(),
		cedula: 16904004,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mmoya'.toLowerCase(),
		name: capitalCadena('MARIA EUGENIA'),
		lastName: capitalCadena('MOYA GUTIERREZ'),
		type: 'regular',
		email: 'mmoya@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3043,
		nationality: 'V'.toUpperCase(),
		cedula: 16413310,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ibaute'.toLowerCase(),
		name: capitalCadena('IRMA ELIZABETH'),
		lastName: capitalCadena('BAUTE '),
		type: 'regular',
		email: 'ibaute@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3067,
		nationality: 'V'.toUpperCase(),
		cedula: 10692968,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jegarcia'.toLowerCase(),
		name: capitalCadena('JEFFERSON WLADIMIR'),
		lastName: capitalCadena('GARCIA CAMARGO'),
		type: 'regular',
		email: 'jegarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5137,
		nationality: 'V'.toUpperCase(),
		cedula: 19532647,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'imarcano'.toLowerCase(),
		name: capitalCadena('ISIS COROMOTO'),
		lastName: capitalCadena('MARCANO GONZALEZ'),
		type: 'regular',
		email: 'imarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13117,
		nationality: 'V'.toUpperCase(),
		cedula: 11198815,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lalves'.toLowerCase(),
		name: capitalCadena('LISETH DAYANA'),
		lastName: capitalCadena('ALVES MARTINEZ'),
		type: 'regular',
		email: 'lalves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4339,
		nationality: 'V'.toUpperCase(),
		cedula: 20027216,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arivas'.toLowerCase(),
		name: capitalCadena('ANA ROSA'),
		lastName: capitalCadena('RIVAS DE GIL'),
		type: 'regular',
		email: 'arivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5235,
		nationality: 'V'.toUpperCase(),
		cedula: 7884328,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsaturno'.toLowerCase(),
		name: capitalCadena('ROSEMARY MONICA'),
		lastName: capitalCadena('SATURNO CAMACHO'),
		type: 'regular',
		email: 'rsaturno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4687,
		nationality: 'V'.toUpperCase(),
		cedula: 5313388,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gquintana'.toLowerCase(),
		name: capitalCadena('GRACIELA YANINA'),
		lastName: capitalCadena('QUINTANA BUSTAMANTE'),
		type: 'regular',
		email: 'gquintana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4688,
		nationality: 'V'.toUpperCase(),
		cedula: 16820350,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmendez'.toLowerCase(),
		name: capitalCadena('DANIELA STEPHANIE'),
		lastName: capitalCadena('MENDEZ BARRAGAN'),
		type: 'regular',
		email: 'dmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4693,
		nationality: 'V'.toUpperCase(),
		cedula: 19692910,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbarrera'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('BARRERA MORENO'),
		type: 'regular',
		email: 'jbarrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4799,
		nationality: 'V'.toUpperCase(),
		cedula: 6811388,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpadron'.toLowerCase(),
		name: capitalCadena('MARLIN JOSEFINA'),
		lastName: capitalCadena('PADRON AMUNDARAIN'),
		type: 'regular',
		email: 'mpadron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6089,
		nationality: 'V'.toUpperCase(),
		cedula: 12260901,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yuosorio'.toLowerCase(),
		name: capitalCadena('YULIMAR '),
		lastName: capitalCadena('OSORIO RODRIGUEZ'),
		type: 'regular',
		email: 'yuosorio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6155,
		nationality: 'V'.toUpperCase(),
		cedula: 18589527,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ncrespo'.toLowerCase(),
		name: capitalCadena('NORMELIS BEATRIZ'),
		lastName: capitalCadena('CRESPO CORDERO'),
		type: 'regular',
		email: 'ncrespo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6257,
		nationality: 'V'.toUpperCase(),
		cedula: 16442506,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marrivero'.toLowerCase(),
		name: capitalCadena('MARIELYS MAGDALENA'),
		lastName: capitalCadena('RIVERO PIÑA'),
		type: 'regular',
		email: 'marrivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6999,
		nationality: 'V'.toUpperCase(),
		cedula: 17150246,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpupo'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('PUPO PINTO'),
		type: 'regular',
		email: 'mpupo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11402,
		nationality: 'V'.toUpperCase(),
		cedula: 20027013,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbarrios'.toLowerCase(),
		name: capitalCadena('CRISLEYDA CRISTINA'),
		lastName: capitalCadena('BARRIOS GUZMAN'),
		type: 'regular',
		email: 'cbarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8479,
		nationality: 'V'.toUpperCase(),
		cedula: 22502841,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mebastidas'.toLowerCase(),
		name: capitalCadena('MELINA COROMOTO'),
		lastName: capitalCadena('BASTIDAS RUIZ'),
		type: 'regular',
		email: 'mebastidas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9577,
		nationality: 'V'.toUpperCase(),
		cedula: 24656401,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joguzman'.toLowerCase(),
		name: capitalCadena('JONATHAN JATNIEL'),
		lastName: capitalCadena('GUZMAN CASTRO'),
		type: 'regular',
		email: 'joguzman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9643,
		nationality: 'V'.toUpperCase(),
		cedula: 18588634,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lesperez'.toLowerCase(),
		name: capitalCadena('LESLIER VANESSA'),
		lastName: capitalCadena('PEREZ PANTOJA'),
		type: 'regular',
		email: 'lesperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10010,
		nationality: 'V'.toUpperCase(),
		cedula: 20032081,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'avivas'.toLowerCase(),
		name: capitalCadena('ALEJANDRA SOFIA'),
		lastName: capitalCadena('VIVAS PARICA'),
		type: 'regular',
		email: 'avivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10583,
		nationality: 'V'.toUpperCase(),
		cedula: 26210163,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'difigueroa'.toLowerCase(),
		name: capitalCadena('DILIANA ALEXANDRA'),
		lastName: capitalCadena('FIGUEROA SALAZAR'),
		type: 'regular',
		email: 'difigueroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10809,
		nationality: 'V'.toUpperCase(),
		cedula: 20823777,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daponte'.toLowerCase(),
		name: capitalCadena('DORIS MAILYNG'),
		lastName: capitalCadena('APONTE BERMUDEZ'),
		type: 'regular',
		email: 'daponte@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6579,
		nationality: 'V'.toUpperCase(),
		cedula: 20308825,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'imoron'.toLowerCase(),
		name: capitalCadena('IRIS DEL MAR'),
		lastName: capitalCadena('MORON TORO'),
		type: 'regular',
		email: 'imoron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12031,
		nationality: 'V'.toUpperCase(),
		cedula: 18002884,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krodriguez'.toLowerCase(),
		name: capitalCadena('KATIUSKA ALEJANDRA'),
		lastName: capitalCadena('RODRIGUEZ DURAN'),
		type: 'regular',
		email: 'krodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12128,
		nationality: 'V'.toUpperCase(),
		cedula: 24224656,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpetit'.toLowerCase(),
		name: capitalCadena('MIGUEL ANGEL'),
		lastName: capitalCadena('PETIT LOPEZ'),
		type: 'regular',
		email: 'mpetit@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12193,
		nationality: 'V'.toUpperCase(),
		cedula: 11929621,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'galonzo'.toLowerCase(),
		name: capitalCadena('GEORWILL ALFREDO'),
		lastName: capitalCadena('ALONZO AGUIAR'),
		type: 'regular',
		email: 'galonzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12411,
		nationality: 'V'.toUpperCase(),
		cedula: 15161341,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmartinez'.toLowerCase(),
		name: capitalCadena('JORGE ALFREDO'),
		lastName: capitalCadena('MARTINEZ CORONEL'),
		type: 'regular',
		email: 'jmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12589,
		nationality: 'V'.toUpperCase(),
		cedula: 13284187,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mapalacios'.toLowerCase(),
		name: capitalCadena('MARTINA '),
		lastName: capitalCadena('PALACIOS CAICEDO'),
		type: 'regular',
		email: 'mapalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12603,
		nationality: 'V'.toUpperCase(),
		cedula: 6332904,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yumartinez'.toLowerCase(),
		name: capitalCadena('YURY VANESSA'),
		lastName: capitalCadena('MARTINEZ GONZALEZ'),
		type: 'regular',
		email: 'yumartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12645,
		nationality: 'V'.toUpperCase(),
		cedula: 19203660,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcastellano'.toLowerCase(),
		name: capitalCadena('LUIS ALFREDO'),
		lastName: capitalCadena('CASTELLANO SALCEDO'),
		type: 'regular',
		email: 'lcastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12733,
		nationality: 'V'.toUpperCase(),
		cedula: 11485950,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frcastillo'.toLowerCase(),
		name: capitalCadena('FREDDY RAFAEL'),
		lastName: capitalCadena('CASTILLO '),
		type: 'regular',
		email: 'frcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12830,
		nationality: 'V'.toUpperCase(),
		cedula: 12297629,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fguerra'.toLowerCase(),
		name: capitalCadena('FENIYER NAZARETH'),
		lastName: capitalCadena('GUERRA MANCERA'),
		type: 'regular',
		email: 'fguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13057,
		nationality: 'V'.toUpperCase(),
		cedula: 29583999,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ayanez'.toLowerCase(),
		name: capitalCadena('ABRAHAM ANTONIO'),
		lastName: capitalCadena('YANEZ DOUBRONT'),
		type: 'regular',
		email: 'ayanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13077,
		nationality: 'V'.toUpperCase(),
		cedula: 29651611,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jreyfreites'.toLowerCase(),
		name: capitalCadena('JHEREMY JOSE'),
		lastName: capitalCadena('REY FREITES'),
		type: 'regular',
		email: 'jreyfreites@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13088,
		nationality: 'V'.toUpperCase(),
		cedula: 29921995,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymoscoso'.toLowerCase(),
		name: capitalCadena('YEIMBERLING YOSMARI'),
		lastName: capitalCadena('MOSCOSO LOPEZ'),
		type: 'regular',
		email: 'ymoscoso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13091,
		nationality: 'V'.toUpperCase(),
		cedula: 28326542,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lblanco'.toLowerCase(),
		name: capitalCadena('LICETTE DEL VALLE'),
		lastName: capitalCadena('BLANCO MATA'),
		type: 'regular',
		email: 'lblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9240,
		nationality: 'V'.toUpperCase(),
		cedula: 6511413,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsalazar'.toLowerCase(),
		name: capitalCadena('RICAURTER JOSE'),
		lastName: capitalCadena('SALAZAR CARRIELES'),
		type: 'regular',
		email: 'rsalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13134,
		nationality: 'V'.toUpperCase(),
		cedula: 9725884,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'asifontes'.toLowerCase(),
		name: capitalCadena('ADRIANA ROSA'),
		lastName: capitalCadena('SIFONTES '),
		type: 'regular',
		email: 'asifontes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13192,
		nationality: 'V'.toUpperCase(),
		cedula: 6621105,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eleal'.toLowerCase(),
		name: capitalCadena('ERIMAR DEL CARMEN'),
		lastName: capitalCadena('LEAL FLORES'),
		type: 'regular',
		email: 'eleal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16278,
		nationality: 'V'.toUpperCase(),
		cedula: 20154084,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL I'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'clacruz'.toLowerCase(),
		name: capitalCadena('CARMEN ELENA'),
		lastName: capitalCadena('LACRUZ PAREDES'),
		type: 'regular',
		email: 'clacruz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13223,
		nationality: 'V'.toUpperCase(),
		cedula: 6823042,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iburgos'.toLowerCase(),
		name: capitalCadena('IGNACIO JESUS'),
		lastName: capitalCadena('BURGOS '),
		type: 'regular',
		email: 'iburgos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13226,
		nationality: 'V'.toUpperCase(),
		cedula: 6157657,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'tcedeno'.toLowerCase(),
		name: capitalCadena('TAMARA ELENA'),
		lastName: capitalCadena('CEDEÑO HIDALGO'),
		type: 'regular',
		email: 'tcedeno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13229,
		nationality: 'V'.toUpperCase(),
		cedula: 10112528,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIÓN OCCIDENTE'])[0].id,
		departamentoId: departamentoData.filter(dep => dep.name === departamentoOnlyNames['V.P. ZONA ZULIA FALCÓN'])[0]
			.id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carmartinez'.toLowerCase(),
		name: capitalCadena('CARLOS ALEXIS'),
		lastName: capitalCadena('MARTINEZ '),
		type: 'regular',
		email: 'carmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13261,
		nationality: 'V'.toUpperCase(),
		cedula: 10780885,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alupi'.toLowerCase(),
		name: capitalCadena('ARIADNA RAFAELA'),
		lastName: capitalCadena('LUPI BERROTERAN'),
		type: 'regular',
		email: 'alupi@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15695,
		nationality: 'V'.toUpperCase(),
		cedula: 28353035,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ecaldera'.toLowerCase(),
		name: capitalCadena('ERNESTO ANTONIO'),
		lastName: capitalCadena('CALDERA '),
		type: 'regular',
		email: 'ecaldera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3139,
		nationality: 'V'.toUpperCase(),
		cedula: 11161843,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'efgarcia'.toLowerCase(),
		name: capitalCadena('EFREN JOSE'),
		lastName: capitalCadena('GARCIA ROJAS'),
		type: 'regular',
		email: 'efgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13373,
		nationality: 'V'.toUpperCase(),
		cedula: 7663314,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jananguren'.toLowerCase(),
		name: capitalCadena('JENIREE NATHALIE'),
		lastName: capitalCadena('AÑANGUREN GUARIQUE'),
		type: 'regular',
		email: 'jananguren@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4371,
		nationality: 'V'.toUpperCase(),
		cedula: 19407829,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'caaguilera'.toLowerCase(),
		name: capitalCadena('CARMEN ELOINA'),
		lastName: capitalCadena('AGUILERA ASTUDILLO'),
		type: 'regular',
		email: 'caaguilera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5543,
		nationality: 'V'.toUpperCase(),
		cedula: 17142442,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aurbaez'.toLowerCase(),
		name: capitalCadena('ANA MARIA'),
		lastName: capitalCadena('URBAEZ '),
		type: 'regular',
		email: 'aurbaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8001,
		nationality: 'V'.toUpperCase(),
		cedula: 10180263,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jucubillan'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('CUBILLAN GONZALEZ'),
		type: 'regular',
		email: 'jucubillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13551,
		nationality: 'V'.toUpperCase(),
		cedula: 13627464,
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
		userName: 'znunez'.toLowerCase(),
		name: capitalCadena('ZOLANDA MERCEDES'),
		lastName: capitalCadena('NUÑEZ MEJIAS'),
		type: 'regular',
		email: 'znunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13554,
		nationality: 'V'.toUpperCase(),
		cedula: 11859299,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'csandrea'.toLowerCase(),
		name: capitalCadena('CARMEN CHIQUINQUIRA'),
		lastName: capitalCadena('SANDREA DE GARCIA'),
		type: 'regular',
		email: 'csandrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13598,
		nationality: 'V'.toUpperCase(),
		cedula: 9702620,
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
		userName: 'marmendoza'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('MENDOZA FIGUEROA'),
		type: 'regular',
		email: 'marmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8343,
		nationality: 'V'.toUpperCase(),
		cedula: 19966559,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afiguera'.toLowerCase(),
		name: capitalCadena('ASDRUBAL ANTONIO'),
		lastName: capitalCadena('FIGUERA TOVAR'),
		type: 'regular',
		email: 'afiguera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13613,
		nationality: 'V'.toUpperCase(),
		cedula: 14688871,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msalcedo'.toLowerCase(),
		name: capitalCadena('MAYURI MARIELA'),
		lastName: capitalCadena('SALCEDO FERNANDEZ'),
		type: 'regular',
		email: 'msalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13632,
		nationality: 'V'.toUpperCase(),
		cedula: 7945234,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aperera'.toLowerCase(),
		name: capitalCadena('ANDREINA NAIROBY'),
		lastName: capitalCadena('PERERA GONZALEZ'),
		type: 'regular',
		email: 'aperera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15756,
		nationality: 'V'.toUpperCase(),
		cedula: 18529414,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yosuarez'.toLowerCase(),
		name: capitalCadena('YORVYN CARLOS'),
		lastName: capitalCadena('SUAREZ OROPEZA'),
		type: 'regular',
		email: 'yosuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13674,
		nationality: 'V'.toUpperCase(),
		cedula: 15378302,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE CONTROL Y GESTIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jteixeira'.toLowerCase(),
		name: capitalCadena('JOSE MANUEL'),
		lastName: capitalCadena('TEIXEIRA JAIMES'),
		type: 'regular',
		email: 'jteixeira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13764,
		nationality: 'V'.toUpperCase(),
		cedula: 14451185,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'neherrera'.toLowerCase(),
		name: capitalCadena('NERLIS '),
		lastName: capitalCadena('HERRERA CARDONA'),
		type: 'regular',
		email: 'neherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13787,
		nationality: 'V'.toUpperCase(),
		cedula: 16972601,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ybenitez'.toLowerCase(),
		name: capitalCadena('YUBIRI JOSEFINA'),
		lastName: capitalCadena('BENITEZ NAVARRO'),
		type: 'regular',
		email: 'ybenitez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13798,
		nationality: 'V'.toUpperCase(),
		cedula: 6892869,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anrojas'.toLowerCase(),
		name: capitalCadena('ANGEL ADRIAN'),
		lastName: capitalCadena('ROJAS PEREZ'),
		type: 'regular',
		email: 'anrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13799,
		nationality: 'V'.toUpperCase(),
		cedula: 11560293,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cfarache'.toLowerCase(),
		name: capitalCadena('CARMEN YUDITH'),
		lastName: capitalCadena('FARACHE '),
		type: 'regular',
		email: 'cfarache@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13803,
		nationality: 'V'.toUpperCase(),
		cedula: 7921140,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jabreu'.toLowerCase(),
		name: capitalCadena('JACKLINMAR LALESCA'),
		lastName: capitalCadena('ABREU QUINTERO'),
		type: 'regular',
		email: 'jabreu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15913,
		nationality: 'V'.toUpperCase(),
		cedula: 26131375,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
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
		userName: 'yosalas'.toLowerCase(),
		name: capitalCadena('YOHANDERSON RAFAEL'),
		lastName: capitalCadena('SALAS URDANETA'),
		type: 'regular',
		email: 'yosalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13875,
		nationality: 'V'.toUpperCase(),
		cedula: 18682658,
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
		userName: 'acroce'.toLowerCase(),
		name: capitalCadena('ANDRY CAROLINA'),
		lastName: capitalCadena('CROCE COBOS'),
		type: 'regular',
		email: 'acroce@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13885,
		nationality: 'V'.toUpperCase(),
		cedula: 19154141,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yemartinez'.toLowerCase(),
		name: capitalCadena('YELITZA GINETTE'),
		lastName: capitalCadena('MARTINEZ RIVAS'),
		type: 'regular',
		email: 'yemartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10216,
		nationality: 'V'.toUpperCase(),
		cedula: 16543849,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mantequero'.toLowerCase(),
		name: capitalCadena('MAIKE MIGUEL'),
		lastName: capitalCadena('ANTEQUERO MARTINEZ'),
		type: 'regular',
		email: 'mantequero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11507,
		nationality: 'V'.toUpperCase(),
		cedula: 15507431,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
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
		userName: 'icoronado'.toLowerCase(),
		name: capitalCadena('INGRID DANIELA'),
		lastName: capitalCadena('CORONADO QUEVEDO'),
		type: 'regular',
		email: 'icoronado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13932,
		nationality: 'V'.toUpperCase(),
		cedula: 16015376,
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
		userName: 'mchacon'.toLowerCase(),
		name: capitalCadena('MIGUEL ANGEL'),
		lastName: capitalCadena('CHACON CONTRERAS'),
		type: 'regular',
		email: 'mchacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13941,
		nationality: 'V'.toUpperCase(),
		cedula: 6088089,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrodriguez'.toLowerCase(),
		name: capitalCadena('YOSENIA NAYIBETH'),
		lastName: capitalCadena('RODRIGUEZ MORENO'),
		type: 'regular',
		email: 'yrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16461,
		nationality: 'V'.toUpperCase(),
		cedula: 15587001,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lromero'.toLowerCase(),
		name: capitalCadena('LORENA EMPERATRIZ'),
		lastName: capitalCadena('ROMERO GALIZ'),
		type: 'regular',
		email: 'lromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13842,
		nationality: 'V'.toUpperCase(),
		cedula: 8777755,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsequera'.toLowerCase(),
		name: capitalCadena('DIRWIN JESUS'),
		lastName: capitalCadena('SEQUERA LEON'),
		type: 'regular',
		email: 'dsequera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10931,
		nationality: 'V'.toUpperCase(),
		cedula: 20027765,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acabello'.toLowerCase(),
		name: capitalCadena('ANGEL RAFAEL'),
		lastName: capitalCadena('CABELLO MORALES'),
		type: 'regular',
		email: 'acabello@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14512,
		nationality: 'V'.toUpperCase(),
		cedula: 18865197,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dchourio'.toLowerCase(),
		name: capitalCadena('DANIEL ANTONIO'),
		lastName: capitalCadena('CHOURIO GONZALEZ'),
		type: 'regular',
		email: 'dchourio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14064,
		nationality: 'V'.toUpperCase(),
		cedula: 20662570,
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
		userName: 'avargas'.toLowerCase(),
		name: capitalCadena('ATILIO ENRIQUE'),
		lastName: capitalCadena('VARGAS PEÑA'),
		type: 'regular',
		email: 'avargas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16240,
		nationality: 'V'.toUpperCase(),
		cedula: 17140571,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL JR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crodriguez'.toLowerCase(),
		name: capitalCadena('CARLOS ANDRES'),
		lastName: capitalCadena('RODRIGUEZ ANGULO'),
		type: 'regular',
		email: 'crodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14009,
		nationality: 'V'.toUpperCase(),
		cedula: 8698778,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA I ADMINISTRACION DE AGENCIAS I']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		userName: 'mirangel'.toLowerCase(),
		name: capitalCadena('MIRLA JOSEFINA'),
		lastName: capitalCadena('RANGEL RIVAS'),
		type: 'regular',
		email: 'mirangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14096,
		nationality: 'V'.toUpperCase(),
		cedula: 17604295,
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
		userName: 'odiaz'.toLowerCase(),
		name: capitalCadena('OSLENA '),
		lastName: capitalCadena('DIAZ RAMIREZ'),
		type: 'regular',
		email: 'odiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14115,
		nationality: 'V'.toUpperCase(),
		cedula: 9737318,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrivero'.toLowerCase(),
		name: capitalCadena('YESSENIA ISABEL'),
		lastName: capitalCadena('RIVERO SANGRONIS'),
		type: 'regular',
		email: 'yrivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14131,
		nationality: 'V'.toUpperCase(),
		cedula: 22446035,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycontreras'.toLowerCase(),
		name: capitalCadena('YUSMARY CAROLINA'),
		lastName: capitalCadena('CONTRERAS GONZALEZ'),
		type: 'regular',
		email: 'ycontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14157,
		nationality: 'V'.toUpperCase(),
		cedula: 25719458,
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
		userName: 'cguevara'.toLowerCase(),
		name: capitalCadena('CIDER ELISEO'),
		lastName: capitalCadena('GUEVARA ALARCON'),
		type: 'regular',
		email: 'cguevara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6037,
		nationality: 'V'.toUpperCase(),
		cedula: 17269085,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id,
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
		userName: 'ncolman'.toLowerCase(),
		name: capitalCadena('NATHALY CAROLINA'),
		lastName: capitalCadena('COLMAN EREU'),
		type: 'regular',
		email: 'ncolman@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14183,
		nationality: 'V'.toUpperCase(),
		cedula: 18833716,
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
		userName: 'resser'.toLowerCase(),
		name: capitalCadena('RAMON JOSE'),
		lastName: capitalCadena('ESSER '),
		type: 'regular',
		email: 'resser@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14127,
		nationality: 'V'.toUpperCase(),
		cedula: 12697273,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jjimenez'.toLowerCase(),
		name: capitalCadena('JHOCEL JHAIRO'),
		lastName: capitalCadena('JIMENEZ RIVAS'),
		type: 'regular',
		email: 'jjimenez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14234,
		nationality: 'V'.toUpperCase(),
		cedula: 23893955,
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
		userName: 'ymarcelo'.toLowerCase(),
		name: capitalCadena('YANETH PATRICIA'),
		lastName: capitalCadena('MARCELO ROJAS'),
		type: 'regular',
		email: 'ymarcelo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14235,
		nationality: 'V'.toUpperCase(),
		cedula: 17918119,
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
		userName: 'fromerin'.toLowerCase(),
		name: capitalCadena('FRANKLIN YOEL'),
		lastName: capitalCadena('ROMERIN '),
		type: 'regular',
		email: 'fromerin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14243,
		nationality: 'V'.toUpperCase(),
		cedula: 13109928,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yquintero'.toLowerCase(),
		name: capitalCadena('YAKELINE MEICARO'),
		lastName: capitalCadena('QUINTERO '),
		type: 'regular',
		email: 'yquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14216,
		nationality: 'V'.toUpperCase(),
		cedula: 13574774,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apacheco'.toLowerCase(),
		name: capitalCadena('ANGEL RAFAEL'),
		lastName: capitalCadena('PACHECO '),
		type: 'regular',
		email: 'apacheco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14362,
		nationality: 'V'.toUpperCase(),
		cedula: 11426131,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jorlopez'.toLowerCase(),
		name: capitalCadena('JORGE ELIECER'),
		lastName: capitalCadena('LOPEZ RODRIGUEZ'),
		type: 'regular',
		email: 'jorlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14288,
		nationality: 'V'.toUpperCase(),
		cedula: 24376022,
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
		userName: 'maherrera'.toLowerCase(),
		name: capitalCadena('MACIEL ANDREINA'),
		lastName: capitalCadena('HERRERA MARTINEZ'),
		type: 'regular',
		email: 'maherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14373,
		nationality: 'V'.toUpperCase(),
		cedula: 27686008,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lantunez'.toLowerCase(),
		name: capitalCadena('LUIS ALEJANDRO'),
		lastName: capitalCadena('ANTUNEZ AGUIRRE'),
		type: 'regular',
		email: 'lantunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14366,
		nationality: 'V'.toUpperCase(),
		cedula: 28497634,
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
		userName: 'nirivas'.toLowerCase(),
		name: capitalCadena('NINOSKA DEL CARMEN'),
		lastName: capitalCadena('RIVAS MORENO'),
		type: 'regular',
		email: 'nirivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13392,
		nationality: 'V'.toUpperCase(),
		cedula: 6194187,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsandrea'.toLowerCase(),
		name: capitalCadena('RAFAEL DANIEL'),
		lastName: capitalCadena('SANDREA VALENZUELA'),
		type: 'regular',
		email: 'rsandrea@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14451,
		nationality: 'V'.toUpperCase(),
		cedula: 26456111,
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
		userName: 'jesalazar'.toLowerCase(),
		name: capitalCadena('JESUS ALBERTO'),
		lastName: capitalCadena('SALAZAR PIRELA'),
		type: 'regular',
		email: 'jesalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14457,
		nationality: 'V'.toUpperCase(),
		cedula: 27089322,
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
		userName: 'ychacin'.toLowerCase(),
		name: capitalCadena('YEISENIA BEATRIZ'),
		lastName: capitalCadena('CHACIN MALDONADO'),
		type: 'regular',
		email: 'ychacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14398,
		nationality: 'V'.toUpperCase(),
		cedula: 15287539,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
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
		userName: 'alarreal'.toLowerCase(),
		name: capitalCadena('ADRIANA CAROLINA'),
		lastName: capitalCadena('LARREAL VASQUEZ'),
		type: 'regular',
		email: 'alarreal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14508,
		nationality: 'V'.toUpperCase(),
		cedula: 17232779,
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
		userName: 'dparica'.toLowerCase(),
		name: capitalCadena('DRENNALIZ CELESTE'),
		lastName: capitalCadena('PARICA DE VERAMENDI'),
		type: 'regular',
		email: 'dparica@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6156,
		nationality: 'V'.toUpperCase(),
		cedula: 19678538,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA BACK OFFICE REGISTRO DE CLIENTE']
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
		userName: 'ccarrasquel'.toLowerCase(),
		name: capitalCadena('CARLA DEL VALLE'),
		lastName: capitalCadena('CARRASQUEL ALVAREZ'),
		type: 'regular',
		email: 'ccarrasquel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8030,
		nationality: 'V'.toUpperCase(),
		cedula: 15049663,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jrincon'.toLowerCase(),
		name: capitalCadena('JOHANNA MERCEDES'),
		lastName: capitalCadena('RINCON DE GONZALEZ'),
		type: 'regular',
		email: 'jrincon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14692,
		nationality: 'V'.toUpperCase(),
		cedula: 14823281,
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
		userName: 'cparra'.toLowerCase(),
		name: capitalCadena('CAREN ANAIS'),
		lastName: capitalCadena('PARRA PAPPALARDO'),
		type: 'regular',
		email: 'cparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14668,
		nationality: 'V'.toUpperCase(),
		cedula: 17459230,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO DE NEGOCIOS COMERCIAL SR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EFICIENCIA COMERCIAL'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE EFICIENCIA COMERCIAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jhuerta'.toLowerCase(),
		name: capitalCadena('JOSE DANIEL'),
		lastName: capitalCadena('HUERTA BUERTA'),
		type: 'regular',
		email: 'jhuerta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14703,
		nationality: 'V'.toUpperCase(),
		cedula: 26826740,
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
		userName: 'achacin'.toLowerCase(),
		name: capitalCadena('ARIAJNA ZUHAIL'),
		lastName: capitalCadena('CHACIN VARGAS'),
		type: 'regular',
		email: 'achacin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14727,
		nationality: 'V'.toUpperCase(),
		cedula: 27997765,
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
		userName: 'oplata'.toLowerCase(),
		name: capitalCadena('ODRA PATRICIA'),
		lastName: capitalCadena('PLATA LIÑAN'),
		type: 'regular',
		email: 'oplata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14562,
		nationality: 'V'.toUpperCase(),
		cedula: 15744335,
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
		userName: 'cbersabin'.toLowerCase(),
		name: capitalCadena('BERSABIN CLARET'),
		lastName: capitalCadena('PAREDES ANGEL'),
		type: 'regular',
		email: 'cbersabin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4437,
		nationality: 'V'.toUpperCase(),
		cedula: 16564236,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcaceres'.toLowerCase(),
		name: capitalCadena('MARIA DE LOURDES'),
		lastName: capitalCadena('CACERES DE CARVALLO'),
		type: 'regular',
		email: 'mcaceres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13470,
		nationality: 'V'.toUpperCase(),
		cedula: 9749938,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yecarvajal'.toLowerCase(),
		name: capitalCadena('YESSIKA VERONICA'),
		lastName: capitalCadena('CARVAJAL FREITES'),
		type: 'regular',
		email: 'yecarvajal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13887,
		nationality: 'V'.toUpperCase(),
		cedula: 17452415,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'joinojosa'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('INOJOSA HERNANDEZ'),
		type: 'regular',
		email: 'joinojosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14913,
		nationality: 'V'.toUpperCase(),
		cedula: 17587476,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irondon'.toLowerCase(),
		name: capitalCadena('IVERLIN DALIS'),
		lastName: capitalCadena('RONDON OLIVARES'),
		type: 'regular',
		email: 'irondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14917,
		nationality: 'V'.toUpperCase(),
		cedula: 27007511,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'macosta'.toLowerCase(),
		name: capitalCadena('MARKELLYS YIRALLY'),
		lastName: capitalCadena('ACOSTA MACHADO'),
		type: 'regular',
		email: 'macosta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15025,
		nationality: 'V'.toUpperCase(),
		cedula: 28312147,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fcordova'.toLowerCase(),
		name: capitalCadena('FELIMER NAZARET'),
		lastName: capitalCadena('CORDOVA CUNEMO'),
		type: 'regular',
		email: 'fcordova@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14301,
		nationality: 'V'.toUpperCase(),
		cedula: 21231312,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'igoncalves'.toLowerCase(),
		name: capitalCadena('IOHANS ANDRE'),
		lastName: capitalCadena('GONCALVES MARTINEZ'),
		type: 'regular',
		email: 'igoncalves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15032,
		nationality: 'V'.toUpperCase(),
		cedula: 17428240,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emanzanilla'.toLowerCase(),
		name: capitalCadena('ELBIMAR '),
		lastName: capitalCadena('MANZANILLA MORENO'),
		type: 'regular',
		email: 'emanzanilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15033,
		nationality: 'V'.toUpperCase(),
		cedula: 14972702,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'surbaez'.toLowerCase(),
		name: capitalCadena('SUGERI DEL VALLE'),
		lastName: capitalCadena('URBAEZ HERRERA'),
		type: 'regular',
		email: 'surbaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15065,
		nationality: 'V'.toUpperCase(),
		cedula: 13379848,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zcontreras'.toLowerCase(),
		name: capitalCadena('ZUNY DEL PILAR'),
		lastName: capitalCadena('CONTRERAS DE LA CRUZ'),
		type: 'regular',
		email: 'zcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15102,
		nationality: 'V'.toUpperCase(),
		cedula: 14559624,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'igarcia'.toLowerCase(),
		name: capitalCadena('ISIS DE LOS ANGELES'),
		lastName: capitalCadena('GARCIA VALBUENA'),
		type: 'regular',
		email: 'igarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14751,
		nationality: 'V'.toUpperCase(),
		cedula: 28470554,
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
		userName: 'icampos'.toLowerCase(),
		name: capitalCadena('IYERLIN COROMOTO'),
		lastName: capitalCadena('CAMPOS VILLARROEL'),
		type: 'regular',
		email: 'icampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4925,
		nationality: 'V'.toUpperCase(),
		cedula: 20593306,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arsandoval'.toLowerCase(),
		name: capitalCadena('ARIANNY VALENTINA'),
		lastName: capitalCadena('SANDOVAL FLORES'),
		type: 'regular',
		email: 'arsandoval@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15293,
		nationality: 'V'.toUpperCase(),
		cedula: 31160208,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hepereira'.toLowerCase(),
		name: capitalCadena('HENRY SAMUEL'),
		lastName: capitalCadena('PEREIRA RUIZ'),
		type: 'regular',
		email: 'hepereira@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15333,
		nationality: 'V'.toUpperCase(),
		cedula: 11406007,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmarquez'.toLowerCase(),
		name: capitalCadena('ROSELYN DEL VALLE'),
		lastName: capitalCadena('MARQUEZ CORONADO'),
		type: 'regular',
		email: 'rmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15340,
		nationality: 'V'.toUpperCase(),
		cedula: 14519317,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jnunez'.toLowerCase(),
		name: capitalCadena('JOSE GREGORIO'),
		lastName: capitalCadena('NUÑEZ GONZALEZ'),
		type: 'regular',
		email: 'jnunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15360,
		nationality: 'V'.toUpperCase(),
		cedula: 26631860,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymeneses'.toLowerCase(),
		name: capitalCadena('YALITZA YANIRE'),
		lastName: capitalCadena('MENESES BRICEÑO'),
		type: 'regular',
		email: 'ymeneses@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15361,
		nationality: 'V'.toUpperCase(),
		cedula: 18914650,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'auespitia'.toLowerCase(),
		name: capitalCadena('AURELY JOHANA'),
		lastName: capitalCadena('ESPITIA NOVA'),
		type: 'regular',
		email: 'auespitia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15363,
		nationality: 'V'.toUpperCase(),
		cedula: 16218341,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lboscan'.toLowerCase(),
		name: capitalCadena('LUIS JOSE'),
		lastName: capitalCadena('BOSCAN HERNANDEZ'),
		type: 'regular',
		email: 'lboscan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15385,
		nationality: 'V'.toUpperCase(),
		cedula: 14300737,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsalcedo'.toLowerCase(),
		name: capitalCadena('DANIELA STHEFANY'),
		lastName: capitalCadena('SALCEDO PACHECO'),
		type: 'regular',
		email: 'dsalcedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15394,
		nationality: 'V'.toUpperCase(),
		cedula: 27686190,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'micontreras'.toLowerCase(),
		name: capitalCadena('MIXAEL ZAID'),
		lastName: capitalCadena('CONTRERAS DIAZ'),
		type: 'regular',
		email: 'micontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15397,
		nationality: 'V'.toUpperCase(),
		cedula: 31024734,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'daquintero'.toLowerCase(),
		name: capitalCadena('DANIEL ALEJANDRO'),
		lastName: capitalCadena('QUINTERO ORTIZ'),
		type: 'regular',
		email: 'daquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15399,
		nationality: 'V'.toUpperCase(),
		cedula: 29631412,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marchernandez'.toLowerCase(),
		name: capitalCadena('MARCOS ANASTACIO'),
		lastName: capitalCadena('HERNANDEZ GARCIA'),
		type: 'regular',
		email: 'marchernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15408,
		nationality: 'V'.toUpperCase(),
		cedula: 13232748,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kmaita'.toLowerCase(),
		name: capitalCadena('KARLA DEL VALLE'),
		lastName: capitalCadena('MAITA DE BOLIVAR'),
		type: 'regular',
		email: 'kmaita@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15425,
		nationality: 'V'.toUpperCase(),
		cedula: 17442847,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcastro'.toLowerCase(),
		name: capitalCadena('JONATHAN ALBERTO'),
		lastName: capitalCadena('CASTRO DIAZ'),
		type: 'regular',
		email: 'jcastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15427,
		nationality: 'V'.toUpperCase(),
		cedula: 26528408,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cgomez'.toLowerCase(),
		name: capitalCadena('CLEIVEL OMAR'),
		lastName: capitalCadena('GOMEZ LEON'),
		type: 'regular',
		email: 'cgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15432,
		nationality: 'V'.toUpperCase(),
		cedula: 27914660,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'milgonzalez'.toLowerCase(),
		name: capitalCadena('MILAGROS GERALDINE'),
		lastName: capitalCadena('GONZALEZ PACHECO'),
		type: 'regular',
		email: 'milgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14407,
		nationality: 'V'.toUpperCase(),
		cedula: 22386662,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malcala'.toLowerCase(),
		name: capitalCadena('MARLEYS DIOGELIN'),
		lastName: capitalCadena('ALCALA ROMERO'),
		type: 'regular',
		email: 'malcala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15445,
		nationality: 'V'.toUpperCase(),
		cedula: 20822730,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maripalacios'.toLowerCase(),
		name: capitalCadena('MARIA VICTORIA'),
		lastName: capitalCadena('PALACIOS MERIÑO'),
		type: 'regular',
		email: 'maripalacios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15478,
		nationality: 'V'.toUpperCase(),
		cedula: 28309242,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dgarcia'.toLowerCase(),
		name: capitalCadena('DAILIMAR DE LOS ANGELES'),
		lastName: capitalCadena('GARCIA HERNANDEZ'),
		type: 'regular',
		email: 'dgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15479,
		nationality: 'V'.toUpperCase(),
		cedula: 29780337,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edpena'.toLowerCase(),
		name: capitalCadena('EDINSON RAMON'),
		lastName: capitalCadena('PEÑA PERNALETE'),
		type: 'regular',
		email: 'edpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15487,
		nationality: 'V'.toUpperCase(),
		cedula: 12064727,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'icolmenares'.toLowerCase(),
		name: capitalCadena('IRIS CAROLINA'),
		lastName: capitalCadena('COLMENARES ASCANIO'),
		type: 'regular',
		email: 'icolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15505,
		nationality: 'V'.toUpperCase(),
		cedula: 14991357,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aloyo'.toLowerCase(),
		name: capitalCadena('ABIGAIL MANUELA'),
		lastName: capitalCadena('LOYO HERNANDEZ'),
		type: 'regular',
		email: 'aloyo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15508,
		nationality: 'V'.toUpperCase(),
		cedula: 25223922,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'crgomez'.toLowerCase(),
		name: capitalCadena('CRISBEL YOSELINE'),
		lastName: capitalCadena('GOMEZ PALACIOS'),
		type: 'regular',
		email: 'crgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15596,
		nationality: 'V'.toUpperCase(),
		cedula: 25029271,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'operez'.toLowerCase(),
		name: capitalCadena('OGLASS NILEVE'),
		lastName: capitalCadena('PEREZ SUAREZ'),
		type: 'regular',
		email: 'operez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15614,
		nationality: 'V'.toUpperCase(),
		cedula: 20754895,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wcodallo'.toLowerCase(),
		name: capitalCadena('WILIANI ESTEFANY'),
		lastName: capitalCadena('CODALLO CORPAS'),
		type: 'regular',
		email: 'wcodallo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15638,
		nationality: 'V'.toUpperCase(),
		cedula: 30165955,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anmoreno'.toLowerCase(),
		name: capitalCadena('ANDREINA ESTEFANI'),
		lastName: capitalCadena('MORENO PAEZ'),
		type: 'regular',
		email: 'anmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15693,
		nationality: 'V'.toUpperCase(),
		cedula: 30693432,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msantacolina'.toLowerCase(),
		name: capitalCadena('MARY DEL VALLE'),
		lastName: capitalCadena('SANTACOLINA SANTACOLINA'),
		type: 'regular',
		email: 'msantacolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14908,
		nationality: 'V'.toUpperCase(),
		cedula: 12093957,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpino'.toLowerCase(),
		name: capitalCadena('MIGUEL EDUARDO'),
		lastName: capitalCadena('PINO BRACHO'),
		type: 'regular',
		email: 'mpino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15776,
		nationality: 'V'.toUpperCase(),
		cedula: 9527661,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yarivero'.toLowerCase(),
		name: capitalCadena('YANELI LORAINE'),
		lastName: capitalCadena('RIVERO CERVANTES'),
		type: 'regular',
		email: 'yarivero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15815,
		nationality: 'V'.toUpperCase(),
		cedula: 29887152,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yfontalvo'.toLowerCase(),
		name: capitalCadena('YARLENY BETANIA'),
		lastName: capitalCadena('FOLTALVO MONTILLA'),
		type: 'regular',
		email: 'yfontalvo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15819,
		nationality: 'V'.toUpperCase(),
		cedula: 29677304,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yron'.toLowerCase(),
		name: capitalCadena('YESSICA ISABELA'),
		lastName: capitalCadena('RON GUERRERO'),
		type: 'regular',
		email: 'yron@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15820,
		nationality: 'V'.toUpperCase(),
		cedula: 29965370,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gnarvaez'.toLowerCase(),
		name: capitalCadena('GERMAINE JAVIER'),
		lastName: capitalCadena('NARVAEZ SUAREZ'),
		type: 'regular',
		email: 'gnarvaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15822,
		nationality: 'V'.toUpperCase(),
		cedula: 25704884,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mivillarroel'.toLowerCase(),
		name: capitalCadena('MILAGROS EDITH'),
		lastName: capitalCadena('VILLAROEL DE FIGUERA'),
		type: 'regular',
		email: 'mivillarroel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15031,
		nationality: 'V'.toUpperCase(),
		cedula: 10545244,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fmarcano'.toLowerCase(),
		name: capitalCadena('FATIMA VANESA'),
		lastName: capitalCadena('MARCANO SAUCE'),
		type: 'regular',
		email: 'fmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13119,
		nationality: 'V'.toUpperCase(),
		cedula: 14163307,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'valves'.toLowerCase(),
		name: capitalCadena('VIVIANA CAROLINA'),
		lastName: capitalCadena('ALVES GOMEZ'),
		type: 'regular',
		email: 'valves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15886,
		nationality: 'V'.toUpperCase(),
		cedula: 24440164,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yendara'.toLowerCase(),
		name: capitalCadena('YENIFER ANNABEL'),
		lastName: capitalCadena('ENDARA MENENDEZ'),
		type: 'regular',
		email: 'yendara@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15891,
		nationality: 'V'.toUpperCase(),
		cedula: 28448829,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yucastro'.toLowerCase(),
		name: capitalCadena('YURASMY YOHANA'),
		lastName: capitalCadena('CASTRO CASTRO'),
		type: 'regular',
		email: 'yucastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15892,
		nationality: 'V'.toUpperCase(),
		cedula: 27770752,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kvazquez'.toLowerCase(),
		name: capitalCadena('KLUIVERLY DAVIANA'),
		lastName: capitalCadena('VAZQUEZ SILVA'),
		type: 'regular',
		email: 'kvazquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15897,
		nationality: 'V'.toUpperCase(),
		cedula: 29832921,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycampelo'.toLowerCase(),
		name: capitalCadena('YORATSY LISBETH'),
		lastName: capitalCadena('CAMPELO GONZALEZ'),
		type: 'regular',
		email: 'ycampelo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13948,
		nationality: 'V'.toUpperCase(),
		cedula: 16411039,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marrodriguez'.toLowerCase(),
		name: capitalCadena('MARIA YSABEL'),
		lastName: capitalCadena('RODRIGUEZ LOPEZ'),
		type: 'regular',
		email: 'marrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15433,
		nationality: 'V'.toUpperCase(),
		cedula: 14428606,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zaray'.toLowerCase(),
		name: capitalCadena('ZWELKY DEL CARMEN'),
		lastName: capitalCadena('ARAY GUDIÑO'),
		type: 'regular',
		email: 'zaray@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16196,
		nationality: 'V'.toUpperCase(),
		cedula: 24592817,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'karguinzones'.toLowerCase(),
		name: capitalCadena('KATLHEMS NAHOMY ARIADNE'),
		lastName: capitalCadena('ARGUINZONES RAMIREZ'),
		type: 'regular',
		email: 'karguinzones@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16199,
		nationality: 'V'.toUpperCase(),
		cedula: 28331674,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bhernandez'.toLowerCase(),
		name: capitalCadena('BETZELYS DEL CARMEN'),
		lastName: capitalCadena('HERNANDEZ CARRIZALEZ'),
		type: 'regular',
		email: 'bhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15753,
		nationality: 'V'.toUpperCase(),
		cedula: 20210656,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yomendez'.toLowerCase(),
		name: capitalCadena('YOLIMAR DEL VALLE'),
		lastName: capitalCadena('MENDEZ BASTARDO'),
		type: 'regular',
		email: 'yomendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15831,
		nationality: 'V'.toUpperCase(),
		cedula: 15725556,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zmendoza'.toLowerCase(),
		name: capitalCadena('ZOMAIRA BEATRIZ'),
		lastName: capitalCadena('MENDOZA POLANCO'),
		type: 'regular',
		email: 'zmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16047,
		nationality: 'V'.toUpperCase(),
		cedula: 12213313,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eosuna'.toLowerCase(),
		name: capitalCadena('EMERLIN '),
		lastName: capitalCadena('OSUNA TOVAR'),
		type: 'regular',
		email: 'eosuna@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16214,
		nationality: 'V'.toUpperCase(),
		cedula: 27374781,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aavalo'.toLowerCase(),
		name: capitalCadena('ANDREINA '),
		lastName: capitalCadena('AVALO BETANCUR'),
		type: 'regular',
		email: 'aavalo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16200,
		nationality: 'V'.toUpperCase(),
		cedula: 14908041,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anidiaz'.toLowerCase(),
		name: capitalCadena('ANIBAL RODOLFO'),
		lastName: capitalCadena('DIAZ '),
		type: 'regular',
		email: 'anidiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16258,
		nationality: 'V'.toUpperCase(),
		cedula: 11369949,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysanchez'.toLowerCase(),
		name: capitalCadena('YEIKER ANDRY'),
		lastName: capitalCadena('SANCHEZ CARDENAS'),
		type: 'regular',
		email: 'ysanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16210,
		nationality: 'V'.toUpperCase(),
		cedula: 21133250,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ASESOR DE NEGOCIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mcasares'.toLowerCase(),
		name: capitalCadena('MARIA DEL VALLE'),
		lastName: capitalCadena('CASARES FARFAN'),
		type: 'regular',
		email: 'mcasares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16266,
		nationality: 'V'.toUpperCase(),
		cedula: 11483308,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE OPERATIVO Y SERVICIOS'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmarquez'.toLowerCase(),
		name: capitalCadena('LAURA GABRIELA'),
		lastName: capitalCadena('MARQUEZ MONTOYA'),
		type: 'regular',
		email: 'lmarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16275,
		nationality: 'V'.toUpperCase(),
		cedula: 17720307,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'armillan'.toLowerCase(),
		name: capitalCadena('ARIANNA ANDREINA'),
		lastName: capitalCadena('MILLAN RONDON'),
		type: 'regular',
		email: 'armillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16279,
		nationality: 'V'.toUpperCase(),
		cedula: 15664267,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR INTEGRAL OPERATIVO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dojeda'.toLowerCase(),
		name: capitalCadena('DAMELIS SARAI'),
		lastName: capitalCadena('OJEDA DE GUETTE'),
		type: 'regular',
		email: 'dojeda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16367,
		nationality: 'V'.toUpperCase(),
		cedula: 19737855,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nruiz'.toLowerCase(),
		name: capitalCadena('NAILITH ADELA'),
		lastName: capitalCadena('RUIZ NUÑEZ'),
		type: 'regular',
		email: 'nruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16369,
		nationality: 'V'.toUpperCase(),
		cedula: 17531447,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P. REGIONAL GESTIÓN OPERATIVA DE AGENCIAS']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ycarrera'.toLowerCase(),
		name: capitalCadena('YERALDY ZAILEX'),
		lastName: capitalCadena('CARRERA CARRERA'),
		type: 'regular',
		email: 'ycarrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16381,
		nationality: 'V'.toUpperCase(),
		cedula: 17390414,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccadete'.toLowerCase(),
		name: capitalCadena('CARMEN JUDITH'),
		lastName: capitalCadena('CADETE MARTINEZ'),
		type: 'regular',
		email: 'ccadete@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16389,
		nationality: 'V'.toUpperCase(),
		cedula: 10632668,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IIB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AGENCIA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cguaimaro'.toLowerCase(),
		name: capitalCadena('CARLOS DANIEL'),
		lastName: capitalCadena('GUAIMARO BENAVENTE'),
		type: 'regular',
		email: 'cguaimaro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16453,
		nationality: 'V'.toUpperCase(),
		cedula: 31078378,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II (ADM)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'burbina'.toLowerCase(),
		name: capitalCadena('BIANCA MARIAN'),
		lastName: capitalCadena('URBINA MELO'),
		type: 'regular',
		email: 'burbina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16455,
		nationality: 'V'.toUpperCase(),
		cedula: 14727159,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II (ADM)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ldurant'.toLowerCase(),
		name: capitalCadena('LUIS MANUEL'),
		lastName: capitalCadena('DURANT NAVAS'),
		type: 'regular',
		email: 'ldurant@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16458,
		nationality: 'V'.toUpperCase(),
		cedula: 23785642,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. REGIONAL ADMINISTRACIÓN DE AGENCIAS'])[0]
			.id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE ZONA II ADMINISTRACION DE AGENCIAS II (ADM)']
		)[0].id,
		cargoId: cargosData.filter(
			cargo => cargo.name === cargoOnlyNames['PROMOTOR(A) INTEGRAL DE ATENCION AL CLIENTE']
		)[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dparedes'.toLowerCase(),
		name: capitalCadena('DORIS GREY'),
		lastName: capitalCadena('PAREDES PACHECO'),
		type: 'regular',
		email: 'dparedes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 852,
		nationality: 'V'.toUpperCase(),
		cedula: 11231379,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA COMERCIAL'])[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P REGIONAL REGIÓN CAPITAL II'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['V.P. DE NEGOCIOS ZONA IB']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['VICEPRESIDENTE DE ZONA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ereyes'.toLowerCase(),
		name: capitalCadena('EVA MARIA'),
		lastName: capitalCadena('REYES RODRIGUEZ'),
		type: 'regular',
		email: 'ereyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13358,
		nationality: 'V'.toUpperCase(),
		cedula: 11607169,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cfuenmayor'.toLowerCase(),
		name: capitalCadena('CARLA ERIKA'),
		lastName: capitalCadena('FUENMAYOR RONDON'),
		type: 'regular',
		email: 'cfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13873,
		nationality: 'V'.toUpperCase(),
		cedula: 9689561,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		userName: 'carloslopez'.toLowerCase(),
		name: capitalCadena('CARLOS JOSE'),
		lastName: capitalCadena('LOPEZ ACOSTA'),
		type: 'regular',
		email: 'carloslopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14515,
		nationality: 'V'.toUpperCase(),
		cedula: 11893817,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		userName: 'dbravo'.toLowerCase(),
		name: capitalCadena('DANILO WISMAK'),
		lastName: capitalCadena('BRAVO LEON'),
		type: 'regular',
		email: 'dbravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14891,
		nationality: 'V'.toUpperCase(),
		cedula: 20579116,
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
		userName: 'larriaz'.toLowerCase(),
		name: capitalCadena('LUMARY INES'),
		lastName: capitalCadena('ARRIAZ NAVA'),
		type: 'regular',
		email: 'larriaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14990,
		nationality: 'V'.toUpperCase(),
		cedula: 12804929,
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
		userName: 'ouseche'.toLowerCase(),
		name: capitalCadena('ORLANDO '),
		lastName: capitalCadena('USECHE RAMIREZ'),
		type: 'regular',
		email: 'ouseche@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2142,
		nationality: 'V'.toUpperCase(),
		cedula: 6907530,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmeza'.toLowerCase(),
		name: capitalCadena('LUIS EDUARDO'),
		lastName: capitalCadena('MEZA RIVAS'),
		type: 'regular',
		email: 'lmeza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3883,
		nationality: 'V'.toUpperCase(),
		cedula: 16202145,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mfrancia'.toLowerCase(),
		name: capitalCadena('MIGDALIA CLARET'),
		lastName: capitalCadena('FRANCIA HARRISON'),
		type: 'regular',
		email: 'mfrancia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6221,
		nationality: 'V'.toUpperCase(),
		cedula: 6011841,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'surbina'.toLowerCase(),
		name: capitalCadena('SHARON PATRICIA'),
		lastName: capitalCadena('URBINA ROMERO'),
		type: 'regular',
		email: 'surbina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8828,
		nationality: 'V'.toUpperCase(),
		cedula: 21623060,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zgomez'.toLowerCase(),
		name: capitalCadena('ZARAI '),
		lastName: capitalCadena('GOMEZ TOVAR'),
		type: 'regular',
		email: 'zgomez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8829,
		nationality: 'V'.toUpperCase(),
		cedula: 21233179,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmejia'.toLowerCase(),
		name: capitalCadena('JENDER JOSE'),
		lastName: capitalCadena('MEJIA DUARTE'),
		type: 'regular',
		email: 'jmejia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10971,
		nationality: 'V'.toUpperCase(),
		cedula: 26574627,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'drojas'.toLowerCase(),
		name: capitalCadena('DENISE DESIREE'),
		lastName: capitalCadena('ROJAS VERDU'),
		type: 'regular',
		email: 'drojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11037,
		nationality: 'V'.toUpperCase(),
		cedula: 23657217,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gpaez'.toLowerCase(),
		name: capitalCadena('GABRIELA CAROLINA'),
		lastName: capitalCadena('PAEZ TORRES'),
		type: 'regular',
		email: 'gpaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11145,
		nationality: 'V'.toUpperCase(),
		cedula: 28481412,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marigonzalez'.toLowerCase(),
		name: capitalCadena('MARILIAN ANDREINA'),
		lastName: capitalCadena('GONZALEZ LLAMOZAS'),
		type: 'regular',
		email: 'marigonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11189,
		nationality: 'V'.toUpperCase(),
		cedula: 19018117,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edtorres'.toLowerCase(),
		name: capitalCadena('EDGAR ENRIQUE'),
		lastName: capitalCadena('TORRES MANZANO'),
		type: 'regular',
		email: 'edtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12377,
		nationality: 'V'.toUpperCase(),
		cedula: 23943719,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jrengifo'.toLowerCase(),
		name: capitalCadena('JHANILKA MARELVA'),
		lastName: capitalCadena('RENGIFO QUEVEDO'),
		type: 'regular',
		email: 'jrengifo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12612,
		nationality: 'V'.toUpperCase(),
		cedula: 27879834,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afernandez'.toLowerCase(),
		name: capitalCadena('AUREANYELY GABRIELA'),
		lastName: capitalCadena('FERNANDEZ ARROYO'),
		type: 'regular',
		email: 'afernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12686,
		nationality: 'V'.toUpperCase(),
		cedula: 30491056,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsalguedo'.toLowerCase(),
		name: capitalCadena('JESUS RAFAEL'),
		lastName: capitalCadena('SALGUEDO RONDON'),
		type: 'regular',
		email: 'jsalguedo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12687,
		nationality: 'V'.toUpperCase(),
		cedula: 28327623,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wdavila'.toLowerCase(),
		name: capitalCadena('WUILSON ANTONIO'),
		lastName: capitalCadena('DAVILA RAGUA'),
		type: 'regular',
		email: 'wdavila@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12755,
		nationality: 'V'.toUpperCase(),
		cedula: 29828367,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcarranza'.toLowerCase(),
		name: capitalCadena('LISETH DAMARIS'),
		lastName: capitalCadena('CARRANZA CHIVICO'),
		type: 'regular',
		email: 'lcarranza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12855,
		nationality: 'V'.toUpperCase(),
		cedula: 21231366,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vmogollon'.toLowerCase(),
		name: capitalCadena('VALENTINA SUSETH'),
		lastName: capitalCadena('MOGOLLON LOPEZ'),
		type: 'regular',
		email: 'vmogollon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13028,
		nationality: 'V'.toUpperCase(),
		cedula: 29983274,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrequena'.toLowerCase(),
		name: capitalCadena('LUIS ALBERTO'),
		lastName: capitalCadena('REQUENA LOPEZ'),
		type: 'regular',
		email: 'lrequena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13082,
		nationality: 'V'.toUpperCase(),
		cedula: 28512420,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yavendano'.toLowerCase(),
		name: capitalCadena('YRAIDA COROMOTO'),
		lastName: capitalCadena('AVENDAÑO RIVAS'),
		type: 'regular',
		email: 'yavendano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13251,
		nationality: 'V'.toUpperCase(),
		cedula: 6854201,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'pzacarias'.toLowerCase(),
		name: capitalCadena('PEDRO MIGUEL'),
		lastName: capitalCadena('ZACARIAS BASTARDO'),
		type: 'regular',
		email: 'pzacarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13447,
		nationality: 'V'.toUpperCase(),
		cedula: 4906375,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aitorres'.toLowerCase(),
		name: capitalCadena('AIMIZARINE '),
		lastName: capitalCadena('TORRES CARVAJAL'),
		type: 'regular',
		email: 'aitorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13499,
		nationality: 'V'.toUpperCase(),
		cedula: 16187315,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		userName: 'mfuenmayor'.toLowerCase(),
		name: capitalCadena('MARYLIN ROSA'),
		lastName: capitalCadena('FUENMAYOR PALENCIA'),
		type: 'regular',
		email: 'mfuenmayor@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13889,
		nationality: 'V'.toUpperCase(),
		cedula: 14136184,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cleon'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('LEON BOSCAN'),
		type: 'regular',
		email: 'cleon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13942,
		nationality: 'V'.toUpperCase(),
		cedula: 14021527,
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
		userName: 'edmolina'.toLowerCase(),
		name: capitalCadena('EDWAR ANTONIO'),
		lastName: capitalCadena('MOLINA GAVIDIA'),
		type: 'regular',
		email: 'edmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13965,
		nationality: 'V'.toUpperCase(),
		cedula: 12381033,
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
		userName: 'nadelgado'.toLowerCase(),
		name: capitalCadena('NARLYN ELISA'),
		lastName: capitalCadena('DELGADO SAN PEDRO'),
		type: 'regular',
		email: 'nadelgado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13981,
		nationality: 'V'.toUpperCase(),
		cedula: 15854112,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jundiaz'.toLowerCase(),
		name: capitalCadena('JUNNIOR JOSE'),
		lastName: capitalCadena('DIAZ GRATEROL'),
		type: 'regular',
		email: 'jundiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14123,
		nationality: 'V'.toUpperCase(),
		cedula: 12379847,
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
		userName: 'avillalobos'.toLowerCase(),
		name: capitalCadena('AMILCAR DE JESUS'),
		lastName: capitalCadena('VILLALOBOS GONZALEZ'),
		type: 'regular',
		email: 'avillalobos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14125,
		nationality: 'V'.toUpperCase(),
		cedula: 19936823,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mabreu'.toLowerCase(),
		name: capitalCadena('MARCCELIN DANIUSKA'),
		lastName: capitalCadena('ABREU REQUENA'),
		type: 'regular',
		email: 'mabreu@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14217,
		nationality: 'V'.toUpperCase(),
		cedula: 18441709,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES MARACAIBO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'abravo'.toLowerCase(),
		name: capitalCadena('ANDREYNA DEL VALLE'),
		lastName: capitalCadena('BRAVO RODRIGUEZ'),
		type: 'regular',
		email: 'abravo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14329,
		nationality: 'V'.toUpperCase(),
		cedula: 23943113,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'esalvarez'.toLowerCase(),
		name: capitalCadena('ESTEBAN '),
		lastName: capitalCadena('ALVAREZ DURAN'),
		type: 'regular',
		email: 'esalvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14460,
		nationality: 'V'.toUpperCase(),
		cedula: 7943572,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wfarias'.toLowerCase(),
		name: capitalCadena('WILFREDO RAFAEL'),
		lastName: capitalCadena('FARIAS ORELLANA'),
		type: 'regular',
		email: 'wfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14507,
		nationality: 'V'.toUpperCase(),
		cedula: 21239547,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'marherrera'.toLowerCase(),
		name: capitalCadena('MARIA DEL COROMOTO'),
		lastName: capitalCadena('HERRERA HERNANDEZ'),
		type: 'regular',
		email: 'marherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14568,
		nationality: 'V'.toUpperCase(),
		cedula: 11733494,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rosalazar'.toLowerCase(),
		name: capitalCadena('RODRIGO ANTONIO'),
		lastName: capitalCadena('SALAZAR BRITO'),
		type: 'regular',
		email: 'rosalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14942,
		nationality: 'V'.toUpperCase(),
		cedula: 28481223,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ealvarez'.toLowerCase(),
		name: capitalCadena('EDWARD ALEXIS'),
		lastName: capitalCadena('ALVAREZ CAMACHO'),
		type: 'regular',
		email: 'ealvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15049,
		nationality: 'V'.toUpperCase(),
		cedula: 12850629,
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
		userName: 'jlinares'.toLowerCase(),
		name: capitalCadena('JOSE FELIX'),
		lastName: capitalCadena('LINARES CASTRO'),
		type: 'regular',
		email: 'jlinares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15126,
		nationality: 'V'.toUpperCase(),
		cedula: 30111721,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hperez'.toLowerCase(),
		name: capitalCadena('HILYADARA '),
		lastName: capitalCadena('PEREZ VELASQUEZ'),
		type: 'regular',
		email: 'hperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15249,
		nationality: 'V'.toUpperCase(),
		cedula: 12687172,
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
		userName: 'ecaripe'.toLowerCase(),
		name: capitalCadena('EUCLIDES RAFAEL'),
		lastName: capitalCadena('CARIPE '),
		type: 'regular',
		email: 'ecaripe@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15255,
		nationality: 'V'.toUpperCase(),
		cedula: 6349728,
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
		userName: 'gquintero'.toLowerCase(),
		name: capitalCadena('GABRIEL DAVID'),
		lastName: capitalCadena('QUINTERO ANDRADES'),
		type: 'regular',
		email: 'gquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15426,
		nationality: 'V'.toUpperCase(),
		cedula: 29969767,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'krebolledo'.toLowerCase(),
		name: capitalCadena('KENLLYRET JHOSMAR'),
		lastName: capitalCadena('REBOLLEDO MARTI'),
		type: 'regular',
		email: 'krebolledo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15514,
		nationality: 'V'.toUpperCase(),
		cedula: 26819676,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
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
		userName: 'vmendez'.toLowerCase(),
		name: capitalCadena('VALERIA VALENTINA'),
		lastName: capitalCadena('MENDEZ SULBARAN'),
		type: 'regular',
		email: 'vmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15611,
		nationality: 'V'.toUpperCase(),
		cedula: 29536657,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvillamizar'.toLowerCase(),
		name: capitalCadena('JUAN MANUEL'),
		lastName: capitalCadena('VILLAMIZAR ECHEZURIA'),
		type: 'regular',
		email: 'jvillamizar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15612,
		nationality: 'V'.toUpperCase(),
		cedula: 30719326,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luflores'.toLowerCase(),
		name: capitalCadena('LUIS ALEJANDRO'),
		lastName: capitalCadena('FLORES ARRAEZ'),
		type: 'regular',
		email: 'luflores@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15660,
		nationality: 'V'.toUpperCase(),
		cedula: 25624711,
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
		userName: 'kesanchez'.toLowerCase(),
		name: capitalCadena('KEN EDUARDO'),
		lastName: capitalCadena('SANCHEZ ALVAREZ'),
		type: 'regular',
		email: 'kesanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15702,
		nationality: 'V'.toUpperCase(),
		cedula: 29529567,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wsanchez'.toLowerCase(),
		name: capitalCadena('WINGER JOSE'),
		lastName: capitalCadena('SANCHEZ MEDRANO'),
		type: 'regular',
		email: 'wsanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15740,
		nationality: 'V'.toUpperCase(),
		cedula: 25792078,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS Y SOPORTE TECNICO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jguedez'.toLowerCase(),
		name: capitalCadena('JULIA MARÍA'),
		lastName: capitalCadena('GUEDEZ ALVARADO'),
		type: 'regular',
		email: 'jguedez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15741,
		nationality: 'V'.toUpperCase(),
		cedula: 20489896,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'chrodriguez'.toLowerCase(),
		name: capitalCadena('CHERDAN ALEXIS'),
		lastName: capitalCadena('RODRÍGUEZ PULIDO'),
		type: 'regular',
		email: 'chrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15744,
		nationality: 'V'.toUpperCase(),
		cedula: 27606735,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'atorrealba'.toLowerCase(),
		name: capitalCadena('ARIANNY DAYERLING'),
		lastName: capitalCadena('TORREALBA QUINTANA'),
		type: 'regular',
		email: 'atorrealba@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15748,
		nationality: 'V'.toUpperCase(),
		cedula: 29595622,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'scgonzalez'.toLowerCase(),
		name: capitalCadena('SCARLET DEL VALLE'),
		lastName: capitalCadena('GONZALEZ TORCATE'),
		type: 'regular',
		email: 'scgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15749,
		nationality: 'V'.toUpperCase(),
		cedula: 28494194,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amedina'.toLowerCase(),
		name: capitalCadena('ALIMAR KATIUSCA'),
		lastName: capitalCadena('MEDINA VELASQUEZ'),
		type: 'regular',
		email: 'amedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15774,
		nationality: 'V'.toUpperCase(),
		cedula: 18186674,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE SEGURIDAD BANCARIA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMIN. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lmendez'.toLowerCase(),
		name: capitalCadena('LUCIO ANTONIO'),
		lastName: capitalCadena('MENDEZ RANGEL'),
		type: 'regular',
		email: 'lmendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15798,
		nationality: 'V'.toUpperCase(),
		cedula: 9414795,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SEGURIDAD INDUSTRIAL Y CONTINGENC']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jmujica'.toLowerCase(),
		name: capitalCadena('JOSE RUBEN'),
		lastName: capitalCadena('MUJICA MOLINA'),
		type: 'regular',
		email: 'jmujica@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15855,
		nationality: 'V'.toUpperCase(),
		cedula: 14130519,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcarias'.toLowerCase(),
		name: capitalCadena('DOUGLAS RAMON'),
		lastName: capitalCadena('CARIAS RAMOS'),
		type: 'regular',
		email: 'dcarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15881,
		nationality: 'V'.toUpperCase(),
		cedula: 12166393,
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
		userName: 'ricastro'.toLowerCase(),
		name: capitalCadena('RICHARD ANTONIO'),
		lastName: capitalCadena('CASTRO ROJAS'),
		type: 'regular',
		email: 'ricastro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15922,
		nationality: 'V'.toUpperCase(),
		cedula: 17778173,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gzabala'.toLowerCase(),
		name: capitalCadena('GERARDO JESUS'),
		lastName: capitalCadena('ZABALA BRACHO'),
		type: 'regular',
		email: 'gzabala@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15943,
		nationality: 'V'.toUpperCase(),
		cedula: 30101952,
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
		userName: 'lurivas'.toLowerCase(),
		name: capitalCadena('LUISA SUJEIS'),
		lastName: capitalCadena('RIVAS LEON'),
		type: 'regular',
		email: 'lurivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15947,
		nationality: 'V'.toUpperCase(),
		cedula: 13465577,
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
		userName: 'etquintero'.toLowerCase(),
		name: capitalCadena('ETY ERMELINDA'),
		lastName: capitalCadena('QUINTERO TORRES'),
		type: 'regular',
		email: 'etquintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16077,
		nationality: 'V'.toUpperCase(),
		cedula: 14985700,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josmendoza'.toLowerCase(),
		name: capitalCadena('JOSE GABRIEL'),
		lastName: capitalCadena('MENDOZA GUTIERREZ'),
		type: 'regular',
		email: 'josmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16080,
		nationality: 'V'.toUpperCase(),
		cedula: 19314314,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SOPORTE INV. TECNO. DE SEGURIDAD BANCARIA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmosquera'.toLowerCase(),
		name: capitalCadena('DEIVY JOHANDER'),
		lastName: capitalCadena('MOSQUERA PERDOMO'),
		type: 'regular',
		email: 'dmosquera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16082,
		nationality: 'V'.toUpperCase(),
		cedula: 26473618,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lsoturno'.toLowerCase(),
		name: capitalCadena('LEONARDO JOSE'),
		lastName: capitalCadena('SOTURNO CORDERO'),
		type: 'regular',
		email: 'lsoturno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16086,
		nationality: 'V'.toUpperCase(),
		cedula: 18918197,
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
		userName: 'emedina'.toLowerCase(),
		name: capitalCadena('ENGERBER JOSE'),
		lastName: capitalCadena('MEDINA OROZCO'),
		type: 'regular',
		email: 'emedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16096,
		nationality: 'V'.toUpperCase(),
		cedula: 12216609,
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
		userName: 'gcolmenares'.toLowerCase(),
		name: capitalCadena('GERMAN EDUARDO'),
		lastName: capitalCadena('COLMENARES ALONZO'),
		type: 'regular',
		email: 'gcolmenares@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16192,
		nationality: 'V'.toUpperCase(),
		cedula: 18530020,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['GERENCIA DE INVESTIGACIONES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['COORDINACIÓN INVESTIGACIONES CARACAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dsalazar'.toLowerCase(),
		name: capitalCadena('DARIANNYS ISABEL'),
		lastName: capitalCadena('SALAZAR MAURERA'),
		type: 'regular',
		email: 'dsalazar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16406,
		nationality: 'V'.toUpperCase(),
		cedula: 30308641,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsoler'.toLowerCase(),
		name: capitalCadena('RODNEISY DEL VALLE'),
		lastName: capitalCadena('SOLER DE ACOSTA'),
		type: 'regular',
		email: 'rsoler@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16421,
		nationality: 'V'.toUpperCase(),
		cedula: 17180042,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mangarcia'.toLowerCase(),
		name: capitalCadena('MANUEL DAVID'),
		lastName: capitalCadena('GARCIA VEGA'),
		type: 'regular',
		email: 'mangarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16423,
		nationality: 'V'.toUpperCase(),
		cedula: 29736647,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ysangronis'.toLowerCase(),
		name: capitalCadena('YURMI COROMOTO'),
		lastName: capitalCadena('SANGRONIS '),
		type: 'regular',
		email: 'ysangronis@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16451,
		nationality: 'V'.toUpperCase(),
		cedula: 28288554,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. PREVENCIÓN Y CONTROL DEL FRAUDE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA MONITOREO Y ANTI FRAUDE CAPITAL']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR DE MONITOREO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrendon'.toLowerCase(),
		name: capitalCadena('LUIS ALFONSO'),
		lastName: capitalCadena('RENDON ROMERO'),
		type: 'regular',
		email: 'lrendon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 344,
		nationality: 'V'.toUpperCase(),
		cedula: 7920230,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'omota'.toLowerCase(),
		name: capitalCadena('OSWALDO ENRIQUE'),
		lastName: capitalCadena('MOTA RUIZ'),
		type: 'regular',
		email: 'omota@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 351,
		nationality: 'V'.toUpperCase(),
		cedula: 5073560,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gmontes'.toLowerCase(),
		name: capitalCadena('GIOVANNI ENRIQUE'),
		lastName: capitalCadena('MONTES BENITEZ'),
		type: 'regular',
		email: 'gmontes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1279,
		nationality: 'V'.toUpperCase(),
		cedula: 14728214,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juhernandez'.toLowerCase(),
		name: capitalCadena('JULIO CESAR'),
		lastName: capitalCadena('HERNANDEZ OLMOS'),
		type: 'regular',
		email: 'juhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1511,
		nationality: 'V'.toUpperCase(),
		cedula: 16877769,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'promero'.toLowerCase(),
		name: capitalCadena('PABLO RENOL'),
		lastName: capitalCadena('ROMERO SALAZAR'),
		type: 'regular',
		email: 'promero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1776,
		nationality: 'V'.toUpperCase(),
		cedula: 5335023,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mdominguez'.toLowerCase(),
		name: capitalCadena('MARIA DEL CARMEN'),
		lastName: capitalCadena('DOMINGUEZ MUJICA'),
		type: 'regular',
		email: 'mdominguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2042,
		nationality: 'V'.toUpperCase(),
		cedula: 6864506,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'degarcia'.toLowerCase(),
		name: capitalCadena('DENIS IBRAIM'),
		lastName: capitalCadena('GARCIA RIVAS'),
		type: 'regular',
		email: 'degarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2481,
		nationality: 'V'.toUpperCase(),
		cedula: 13945277,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sescobar'.toLowerCase(),
		name: capitalCadena('SUSANA PATRICIA'),
		lastName: capitalCadena('ESCOBAR MAHECHA'),
		type: 'regular',
		email: 'sescobar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4275,
		nationality: 'V'.toUpperCase(),
		cedula: 14876302,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jquintal'.toLowerCase(),
		name: capitalCadena('JOSE MANUEL'),
		lastName: capitalCadena('DE QUINTAL QUINTAL'),
		type: 'regular',
		email: 'jquintal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4297,
		nationality: 'V'.toUpperCase(),
		cedula: 11671762,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ggarrido'.toLowerCase(),
		name: capitalCadena('GERARD OMAR'),
		lastName: capitalCadena('GARRIDO COLMENAREZ'),
		type: 'regular',
		email: 'ggarrido@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4890,
		nationality: 'V'.toUpperCase(),
		cedula: 16796542,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'onoguera'.toLowerCase(),
		name: capitalCadena('ORLANDO RAFAEL'),
		lastName: capitalCadena('NOGUERA CHAVEZ'),
		type: 'regular',
		email: 'onoguera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5055,
		nationality: 'V'.toUpperCase(),
		cedula: 14446822,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elinero'.toLowerCase(),
		name: capitalCadena('ELVIS RAMON'),
		lastName: capitalCadena('LINERO CARABALLO'),
		type: 'regular',
		email: 'elinero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5182,
		nationality: 'V'.toUpperCase(),
		cedula: 20870087,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hpena'.toLowerCase(),
		name: capitalCadena('HECTOR JOSE'),
		lastName: capitalCadena('PEÑA '),
		type: 'regular',
		email: 'hpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5314,
		nationality: 'V'.toUpperCase(),
		cedula: 10275579,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aespitia'.toLowerCase(),
		name: capitalCadena('CESAR ALFONSO'),
		lastName: capitalCadena('ESPITIA NEIRA'),
		type: 'regular',
		email: 'aespitia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5424,
		nationality: 'V'.toUpperCase(),
		cedula: 11041854,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcalleja'.toLowerCase(),
		name: capitalCadena('JESUS GREGORIO'),
		lastName: capitalCadena('CALLEJA ATACHO'),
		type: 'regular',
		email: 'jcalleja@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5425,
		nationality: 'V'.toUpperCase(),
		cedula: 5297489,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jreyes'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('REYES LARA'),
		type: 'regular',
		email: 'jreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 5578,
		nationality: 'V'.toUpperCase(),
		cedula: 4681929,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mbastidas'.toLowerCase(),
		name: capitalCadena('MICHAEL EDWARD'),
		lastName: capitalCadena('BASTIDAS CASTILLO'),
		type: 'regular',
		email: 'mbastidas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6097,
		nationality: 'V'.toUpperCase(),
		cedula: 13557634,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dbarcia'.toLowerCase(),
		name: capitalCadena('DANNY MARISOL'),
		lastName: capitalCadena('BARCIA FLORES'),
		type: 'regular',
		email: 'dbarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6870,
		nationality: 'V'.toUpperCase(),
		cedula: 21718326,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lpina'.toLowerCase(),
		name: capitalCadena('LUISANGEL '),
		lastName: capitalCadena('PIÑA BELISARIO'),
		type: 'regular',
		email: 'lpina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7008,
		nationality: 'V'.toUpperCase(),
		cedula: 23636721,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amillan'.toLowerCase(),
		name: capitalCadena('ALFREDO RAFAEL'),
		lastName: capitalCadena('MILLAN CARVALLO'),
		type: 'regular',
		email: 'amillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7039,
		nationality: 'V'.toUpperCase(),
		cedula: 5001046,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'erivas'.toLowerCase(),
		name: capitalCadena('ELISAUL DAVID'),
		lastName: capitalCadena('RIVAS ROJAS'),
		type: 'regular',
		email: 'erivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7330,
		nationality: 'V'.toUpperCase(),
		cedula: 17976861,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'syanez'.toLowerCase(),
		name: capitalCadena('SAYBER ALBERTO'),
		lastName: capitalCadena('YANEZ RIVERO'),
		type: 'regular',
		email: 'syanez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7605,
		nationality: 'V'.toUpperCase(),
		cedula: 24213716,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'chmartinez'.toLowerCase(),
		name: capitalCadena('CHRISTIAN GABRIEL'),
		lastName: capitalCadena('MARTINEZ BUROZ'),
		type: 'regular',
		email: 'chmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7852,
		nationality: 'V'.toUpperCase(),
		cedula: 21089652,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alameda'.toLowerCase(),
		name: capitalCadena('ALBANI ALEJANDRA'),
		lastName: capitalCadena('LAMEDA MUÑOZ'),
		type: 'regular',
		email: 'alameda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7918,
		nationality: 'V'.toUpperCase(),
		cedula: 24216043,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpenaranda'.toLowerCase(),
		name: capitalCadena('JAVIER ALEXANDER'),
		lastName: capitalCadena('PEÑARANDA HERRERA'),
		type: 'regular',
		email: 'jpenaranda@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8100,
		nationality: 'V'.toUpperCase(),
		cedula: 12196555,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mepadilla'.toLowerCase(),
		name: capitalCadena('MELVA DAYANA'),
		lastName: capitalCadena('PADILLA CASANOVA'),
		type: 'regular',
		email: 'mepadilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8392,
		nationality: 'V'.toUpperCase(),
		cedula: 16600831,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lperdomo'.toLowerCase(),
		name: capitalCadena('LUIS DANIEL'),
		lastName: capitalCadena('PERDOMO DE LA OSSA'),
		type: 'regular',
		email: 'lperdomo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8917,
		nationality: 'V'.toUpperCase(),
		cedula: 26271536,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dhuerfano'.toLowerCase(),
		name: capitalCadena('DAUFREN ALEJANDRO'),
		lastName: capitalCadena('HUERFANO CONTRERAS'),
		type: 'regular',
		email: 'dhuerfano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9254,
		nationality: 'V'.toUpperCase(),
		cedula: 26440921,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jomartinez'.toLowerCase(),
		name: capitalCadena('JOSE MIGUEL'),
		lastName: capitalCadena('MARTINEZ CARDONA'),
		type: 'regular',
		email: 'jomartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9425,
		nationality: 'V'.toUpperCase(),
		cedula: 21346493,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ljaimes'.toLowerCase(),
		name: capitalCadena('LUIS MIGUEL'),
		lastName: capitalCadena('JAIMES HERRERA'),
		type: 'regular',
		email: 'ljaimes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9561,
		nationality: 'V'.toUpperCase(),
		cedula: 16904000,
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
		userName: 'wmalagon'.toLowerCase(),
		name: capitalCadena('WILLIAMS '),
		lastName: capitalCadena('MALAGON ZULUAGA'),
		type: 'regular',
		email: 'wmalagon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9794,
		nationality: 'V'.toUpperCase(),
		cedula: 6792685,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alcastillo'.toLowerCase(),
		name: capitalCadena('ALI ALBERTO'),
		lastName: capitalCadena('CASTILLO LIENDO'),
		type: 'regular',
		email: 'alcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10008,
		nationality: 'V'.toUpperCase(),
		cedula: 6508411,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jportela'.toLowerCase(),
		name: capitalCadena('JOSE '),
		lastName: capitalCadena('PORTELA MARTINEZ'),
		type: 'regular',
		email: 'jportela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10048,
		nationality: 'V'.toUpperCase(),
		cedula: 10110301,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luruiz'.toLowerCase(),
		name: capitalCadena('LUIS ALEJANDRO'),
		lastName: capitalCadena('RUIZ MARTINEZ'),
		type: 'regular',
		email: 'luruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10101,
		nationality: 'V'.toUpperCase(),
		cedula: 23617342,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jesteves'.toLowerCase(),
		name: capitalCadena('JULIAN ANDRES'),
		lastName: capitalCadena('ESTEVES LORENZO'),
		type: 'regular',
		email: 'jesteves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10245,
		nationality: 'V'.toUpperCase(),
		cedula: 23000760,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hmartinez'.toLowerCase(),
		name: capitalCadena('HEIBAR IRE'),
		lastName: capitalCadena('MARTINEZ GONZALEZ'),
		type: 'regular',
		email: 'hmartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10782,
		nationality: 'V'.toUpperCase(),
		cedula: 19023086,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hgarcia'.toLowerCase(),
		name: capitalCadena('HEBER ISAI'),
		lastName: capitalCadena('GARCIA VALDESPINO'),
		type: 'regular',
		email: 'hgarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11105,
		nationality: 'V'.toUpperCase(),
		cedula: 23630624,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dediaz'.toLowerCase(),
		name: capitalCadena('DEIKER ANTONIO'),
		lastName: capitalCadena('DIAZ PEÑA'),
		type: 'regular',
		email: 'dediaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11265,
		nationality: 'V'.toUpperCase(),
		cedula: 21467133,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'eberrios'.toLowerCase(),
		name: capitalCadena('ERIKA JOSEFINA'),
		lastName: capitalCadena('BERRIOS BRICEÑO'),
		type: 'regular',
		email: 'eberrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11277,
		nationality: 'V'.toUpperCase(),
		cedula: 26881499,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ggarcia'.toLowerCase(),
		name: capitalCadena('GREADARY GREGKELLY'),
		lastName: capitalCadena('GARCIA BARRERA'),
		type: 'regular',
		email: 'ggarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11313,
		nationality: 'V'.toUpperCase(),
		cedula: 24896528,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'deherrera'.toLowerCase(),
		name: capitalCadena('DEIVI DANIEL'),
		lastName: capitalCadena('HERRERA PINO'),
		type: 'regular',
		email: 'deherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11319,
		nationality: 'V'.toUpperCase(),
		cedula: 18751590,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jjauregui'.toLowerCase(),
		name: capitalCadena('JHONNY EMIL'),
		lastName: capitalCadena('JAUREGUI GARCIA'),
		type: 'regular',
		email: 'jjauregui@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11686,
		nationality: 'V'.toUpperCase(),
		cedula: 7926468,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'acrespo'.toLowerCase(),
		name: capitalCadena('ANTHONY JOHAN'),
		lastName: capitalCadena('CRESPO AMARO'),
		type: 'regular',
		email: 'acrespo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11817,
		nationality: 'V'.toUpperCase(),
		cedula: 24895478,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'danrodriguez'.toLowerCase(),
		name: capitalCadena('DANIEL ALIRIO'),
		lastName: capitalCadena('RODRIGUEZ GONZALEZ'),
		type: 'regular',
		email: 'danrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12198,
		nationality: 'V'.toUpperCase(),
		cedula: 22772445,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'liromero'.toLowerCase(),
		name: capitalCadena('LILESKA MARIANY'),
		lastName: capitalCadena('ROMERO '),
		type: 'regular',
		email: 'liromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12309,
		nationality: 'V'.toUpperCase(),
		cedula: 24900140,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ancastellanos'.toLowerCase(),
		name: capitalCadena('ANA GRACIELA'),
		lastName: capitalCadena('CASTELLANOS DELGADO'),
		type: 'regular',
		email: 'ancastellanos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12344,
		nationality: 'V'.toUpperCase(),
		cedula: 6248960,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'odominguez'.toLowerCase(),
		name: capitalCadena('ORLANDO DE JESUS'),
		lastName: capitalCadena('DOMINGUEZ ALBORNOZ'),
		type: 'regular',
		email: 'odominguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12361,
		nationality: 'V'.toUpperCase(),
		cedula: 13127584,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'stovar'.toLowerCase(),
		name: capitalCadena('SHEYLA ROSA'),
		lastName: capitalCadena('TOVAR ESCALONA'),
		type: 'regular',
		email: 'stovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12425,
		nationality: 'V'.toUpperCase(),
		cedula: 6265115,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jdiyiannatale'.toLowerCase(),
		name: capitalCadena('JULIETA AUXILIADORA'),
		lastName: capitalCadena('DI YIANNATALE LUCENA'),
		type: 'regular',
		email: 'jdiyiannatale@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12430,
		nationality: 'V'.toUpperCase(),
		cedula: 7305026,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA SISTEMAS DE SUCURSALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'szerpa'.toLowerCase(),
		name: capitalCadena('SAMUEL ALEJANDRO'),
		lastName: capitalCadena('ZERPA PARRA'),
		type: 'regular',
		email: 'szerpa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12436,
		nationality: 'V'.toUpperCase(),
		cedula: 27647883,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jobetancourt'.toLowerCase(),
		name: capitalCadena('JONATHAN '),
		lastName: capitalCadena('COLUCCI BETANCOURT'),
		type: 'regular',
		email: 'jobetancourt@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12644,
		nationality: 'V'.toUpperCase(),
		cedula: 13887297,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sbarragan'.toLowerCase(),
		name: capitalCadena('SARAHY DEL VALLE'),
		lastName: capitalCadena('BARRAGAN ORTEGA'),
		type: 'regular',
		email: 'sbarragan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12903,
		nationality: 'V'.toUpperCase(),
		cedula: 21640027,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cescobar'.toLowerCase(),
		name: capitalCadena('CESAR JAVIER'),
		lastName: capitalCadena('ESCOBAR ECHARRY'),
		type: 'regular',
		email: 'cescobar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12934,
		nationality: 'V'.toUpperCase(),
		cedula: 21806608,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ajaime'.toLowerCase(),
		name: capitalCadena('ANGEL ORLANDO'),
		lastName: capitalCadena('JAIME SANCHEZ'),
		type: 'regular',
		email: 'ajaime@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12965,
		nationality: 'V'.toUpperCase(),
		cedula: 16030308,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hlacruz>'.toLowerCase(),
		name: capitalCadena('HOMERO JOSE'),
		lastName: capitalCadena('LACRUZ MORENO'),
		type: 'regular',
		email: 'hlacruz@bnc.com.ve>'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12969,
		nationality: 'V'.toUpperCase(),
		cedula: 28346601,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR TI II'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alrangel'.toLowerCase(),
		name: capitalCadena('ALBERT SLEYTHER'),
		lastName: capitalCadena('RANGEL PERNIA'),
		type: 'regular',
		email: 'alrangel@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13007,
		nationality: 'V'.toUpperCase(),
		cedula: 24757842,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmolina'.toLowerCase(),
		name: capitalCadena('DANIEL JOSE'),
		lastName: capitalCadena('MOLINA LUGO'),
		type: 'regular',
		email: 'dmolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13098,
		nationality: 'V'.toUpperCase(),
		cedula: 16648966,
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
		userName: 'psilva'.toLowerCase(),
		name: capitalCadena('PAULO JORGE'),
		lastName: capitalCadena('SILVA DE OLIVEIRA'),
		type: 'regular',
		email: 'psilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13214,
		nationality: 'V'.toUpperCase(),
		cedula: 81090752,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'angmedina'.toLowerCase(),
		name: capitalCadena('ANGEL RAMON'),
		lastName: capitalCadena('MEDINA CARDENAS'),
		type: 'regular',
		email: 'angmedina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13249,
		nationality: 'V'.toUpperCase(),
		cedula: 9194609,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dzarzalejo'.toLowerCase(),
		name: capitalCadena('DANIEL '),
		lastName: capitalCadena('ZARZALEJO GALLARDO'),
		type: 'regular',
		email: 'dzarzalejo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13254,
		nationality: 'V'.toUpperCase(),
		cedula: 5528485,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'elobo'.toLowerCase(),
		name: capitalCadena('EDUARDO ANTONIO'),
		lastName: capitalCadena('LOBO LANDAETA'),
		type: 'regular',
		email: 'elobo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13317,
		nationality: 'V'.toUpperCase(),
		cedula: 4810546,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ricgonzalez'.toLowerCase(),
		name: capitalCadena('RICHARD JOSE'),
		lastName: capitalCadena('GONZALEZ ADAMES'),
		type: 'regular',
		email: 'ricgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13340,
		nationality: 'V'.toUpperCase(),
		cedula: 6451508,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amartinez'.toLowerCase(),
		name: capitalCadena('ALBENIS ANTONIO'),
		lastName: capitalCadena('MARTINEZ YNCIARTE'),
		type: 'regular',
		email: 'amartinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13506,
		nationality: 'V'.toUpperCase(),
		cedula: 4018017,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cagarcia'.toLowerCase(),
		name: capitalCadena('CARMEN ADELAIDA'),
		lastName: capitalCadena('GARCIA VALBUENA'),
		type: 'regular',
		email: 'cagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13567,
		nationality: 'V'.toUpperCase(),
		cedula: 11950950,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rvallenilla'.toLowerCase(),
		name: capitalCadena('ROMEL JOSE'),
		lastName: capitalCadena('DAVID VALLENILLA'),
		type: 'regular',
		email: 'rvallenilla@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13577,
		nationality: 'V'.toUpperCase(),
		cedula: 11603687,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'purdaneta'.toLowerCase(),
		name: capitalCadena('PAOLA COROMOTO'),
		lastName: capitalCadena('URDANETA PEÑA'),
		type: 'regular',
		email: 'purdaneta@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13581,
		nationality: 'V'.toUpperCase(),
		cedula: 12695932,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mbohorquez'.toLowerCase(),
		name: capitalCadena('MARIUGENIA DEL CARMEN'),
		lastName: capitalCadena('BOHORQUEZ BOHORQUEZ'),
		type: 'regular',
		email: 'mbohorquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13605,
		nationality: 'V'.toUpperCase(),
		cedula: 17634246,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ADMINISTRACIÓN DE BASES DE DATOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ksosa'.toLowerCase(),
		name: capitalCadena('KELLY ROSMARY'),
		lastName: capitalCadena('SOSA CAMACHO'),
		type: 'regular',
		email: 'ksosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13682,
		nationality: 'V'.toUpperCase(),
		cedula: 14062977,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'juromero'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('ROMERO AVILA'),
		type: 'regular',
		email: 'juromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13758,
		nationality: 'V'.toUpperCase(),
		cedula: 14427168,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'iyerena'.toLowerCase(),
		name: capitalCadena('ITAMAR HELEOBANA'),
		lastName: capitalCadena('YERENA SILVA'),
		type: 'regular',
		email: 'iyerena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13818,
		nationality: 'V'.toUpperCase(),
		cedula: 9957498,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yoesanchez'.toLowerCase(),
		name: capitalCadena('YOELT ALEXANDER'),
		lastName: capitalCadena('SANCHEZ REBOLLEDO'),
		type: 'regular',
		email: 'yoesanchez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13825,
		nationality: 'V'.toUpperCase(),
		cedula: 11225694,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rtarazon'.toLowerCase(),
		name: capitalCadena('ROSSANA '),
		lastName: capitalCadena('TARAZON RODRIGUEZ'),
		type: 'regular',
		email: 'rtarazon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13829,
		nationality: 'V'.toUpperCase(),
		cedula: 14427931,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'orreyes'.toLowerCase(),
		name: capitalCadena('ORLANDO '),
		lastName: capitalCadena('REYES '),
		type: 'regular',
		email: 'orreyes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13833,
		nationality: 'V'.toUpperCase(),
		cedula: 4637609,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'henduran'.toLowerCase(),
		name: capitalCadena('HENRRY ANTONIO'),
		lastName: capitalCadena('DURAN GARCIA'),
		type: 'regular',
		email: 'henduran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13837,
		nationality: 'V'.toUpperCase(),
		cedula: 8068267,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jplazola'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('PLAZOLA SIERRA'),
		type: 'regular',
		email: 'jplazola@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13838,
		nationality: 'V'.toUpperCase(),
		cedula: 8760606,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jodiaz'.toLowerCase(),
		name: capitalCadena('JOSE ALBERTO'),
		lastName: capitalCadena('DIAZ ARANGUREN'),
		type: 'regular',
		email: 'jodiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13940,
		nationality: 'V'.toUpperCase(),
		cedula: 19679653,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carraga'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('ARRAGA ROMERO'),
		type: 'regular',
		email: 'carraga@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13958,
		nationality: 'V'.toUpperCase(),
		cedula: 18918300,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vegraterol'.toLowerCase(),
		name: capitalCadena('VERONICA ISABEL'),
		lastName: capitalCadena('GRATEROL MENDOZA'),
		type: 'regular',
		email: 'vegraterol@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13996,
		nationality: 'V'.toUpperCase(),
		cedula: 17232103,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'apatino'.toLowerCase(),
		name: capitalCadena('ANGGIE CHIQUINQUIRA'),
		lastName: capitalCadena('PATIÑO BRACHO'),
		type: 'regular',
		email: 'apatino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13997,
		nationality: 'V'.toUpperCase(),
		cedula: 18494849,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'racuna'.toLowerCase(),
		name: capitalCadena('ROSANGEL ELENA'),
		lastName: capitalCadena('ACUÑA ACUÑA'),
		type: 'regular',
		email: 'racuna@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14010,
		nationality: 'V'.toUpperCase(),
		cedula: 17184722,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CORE BANCARIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hboscan'.toLowerCase(),
		name: capitalCadena('HENDRIK JOSE'),
		lastName: capitalCadena('BOSCAN RINCON'),
		type: 'regular',
		email: 'hboscan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14011,
		nationality: 'V'.toUpperCase(),
		cedula: 11609178,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'msalas'.toLowerCase(),
		name: capitalCadena('MOISES ANTONIO'),
		lastName: capitalCadena('SALAS VILLADIEGO'),
		type: 'regular',
		email: 'msalas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14022,
		nationality: 'V'.toUpperCase(),
		cedula: 14007994,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jpaez'.toLowerCase(),
		name: capitalCadena('JOSE ANTONIO'),
		lastName: capitalCadena('PAEZ HUERTA'),
		type: 'regular',
		email: 'jpaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14050,
		nationality: 'V'.toUpperCase(),
		cedula: 7600969,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mamendez'.toLowerCase(),
		name: capitalCadena('MAXIMO COROMOTO'),
		lastName: capitalCadena('MENDEZ MONSALVE'),
		type: 'regular',
		email: 'mamendez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14053,
		nationality: 'V'.toUpperCase(),
		cedula: 6505913,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA GESTIÓN DE CERTIFICACIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jperez'.toLowerCase(),
		name: capitalCadena('JHOSENDER ERNESTO'),
		lastName: capitalCadena('PEREZ VILLA'),
		type: 'regular',
		email: 'jperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14102,
		nationality: 'V'.toUpperCase(),
		cedula: 14799155,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'editorres'.toLowerCase(),
		name: capitalCadena('EDIXON RAMON'),
		lastName: capitalCadena('TORRES RODRIGUEZ'),
		type: 'regular',
		email: 'editorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14103,
		nationality: 'V'.toUpperCase(),
		cedula: 20380152,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA BI Y SISTEMAS REGULATORIOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'luferrer'.toLowerCase(),
		name: capitalCadena('LUIS EMMANUEL'),
		lastName: capitalCadena('FERRER TERMINE'),
		type: 'regular',
		email: 'luferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14138,
		nationality: 'V'.toUpperCase(),
		cedula: 18429407,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dinojosa'.toLowerCase(),
		name: capitalCadena('DORELIS ARIANA'),
		lastName: capitalCadena('INOJOSA BERMUDEZ'),
		type: 'regular',
		email: 'dinojosa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14208,
		nationality: 'V'.toUpperCase(),
		cedula: 25367898,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kfarias'.toLowerCase(),
		name: capitalCadena('KEINY BRYANT'),
		lastName: capitalCadena('FARIAS HERNANDEZ'),
		type: 'regular',
		email: 'kfarias@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14225,
		nationality: 'V'.toUpperCase(),
		cedula: 20630507,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jchavez'.toLowerCase(),
		name: capitalCadena('JUAN CARLOS'),
		lastName: capitalCadena('CHAVEZ COLINA'),
		type: 'regular',
		email: 'jchavez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14233,
		nationality: 'V'.toUpperCase(),
		cedula: 14525843,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rochoa'.toLowerCase(),
		name: capitalCadena('ROBERT ALEJANDRO'),
		lastName: capitalCadena('OCHOA CASTRO'),
		type: 'regular',
		email: 'rochoa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14250,
		nationality: 'V'.toUpperCase(),
		cedula: 18188454,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amaneiro'.toLowerCase(),
		name: capitalCadena('ANDRES EDUARDO'),
		lastName: capitalCadena('MANEIRO ANTUNEZ'),
		type: 'regular',
		email: 'anmaneiro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14267,
		nationality: 'V'.toUpperCase(),
		cedula: 18647881,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'alrondon'.toLowerCase(),
		name: capitalCadena('ALEJANDRO ANTONIO'),
		lastName: capitalCadena('RONDON MENDOZA'),
		type: 'regular',
		email: 'alrondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14293,
		nationality: 'V'.toUpperCase(),
		cedula: 7833564,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS POS ATMS']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cvera'.toLowerCase(),
		name: capitalCadena('CARLOS ENRIQUE'),
		lastName: capitalCadena('VERA MONTIEL'),
		type: 'regular',
		email: 'cvera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14311,
		nationality: 'V'.toUpperCase(),
		cedula: 20656740,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rcolina'.toLowerCase(),
		name: capitalCadena('RENE ANTONIO'),
		lastName: capitalCadena('COLINA CRUZ'),
		type: 'regular',
		email: 'rcolina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14330,
		nationality: 'V'.toUpperCase(),
		cedula: 5425292,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oguerra'.toLowerCase(),
		name: capitalCadena('ONESIMO ENRIQUE'),
		lastName: capitalCadena('GUERRA PADRON'),
		type: 'regular',
		email: 'oguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14334,
		nationality: 'V'.toUpperCase(),
		cedula: 25205596,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO POS JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rlopez'.toLowerCase(),
		name: capitalCadena('RAFAEL ANGEL'),
		lastName: capitalCadena('LOPEZ GUTIERREZ'),
		type: 'regular',
		email: 'rlopez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14377,
		nationality: 'V'.toUpperCase(),
		cedula: 19178432,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE POS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'afigueroa'.toLowerCase(),
		name: capitalCadena('ALEJANDRO JOSE'),
		lastName: capitalCadena('FIGUEROA BELLO'),
		type: 'regular',
		email: 'afigueroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14403,
		nationality: 'V'.toUpperCase(),
		cedula: 16814936,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lcisnero'.toLowerCase(),
		name: capitalCadena('LUIS MANUEL'),
		lastName: capitalCadena('CISNERO MIRABAL'),
		type: 'regular',
		email: 'lcisnero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14470,
		nationality: 'V'.toUpperCase(),
		cedula: 25233240,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PRODUCCIÓN']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lvidal'.toLowerCase(),
		name: capitalCadena('LUIS ANGEL'),
		lastName: capitalCadena('VIDAL GONZALEZ'),
		type: 'regular',
		email: 'lvidal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14485,
		nationality: 'V'.toUpperCase(),
		cedula: 8752631,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nvillegas'.toLowerCase(),
		name: capitalCadena('NESTOR '),
		lastName: capitalCadena('VILLEGAS FRAGACHAN'),
		type: 'regular',
		email: 'nvillegas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14487,
		nationality: 'V'.toUpperCase(),
		cedula: 4353997,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'damarquez'.toLowerCase(),
		name: capitalCadena('DAVID ALEXANDER'),
		lastName: capitalCadena('MARQUEZ RINCON'),
		type: 'regular',
		email: 'damarquez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14504,
		nationality: 'V'.toUpperCase(),
		cedula: 23638350,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DE MEDIOS DE PAGO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wiherrera'.toLowerCase(),
		name: capitalCadena('WILMER ALI'),
		lastName: capitalCadena('HERRERA RIVAS'),
		type: 'regular',
		email: 'wiherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14536,
		nationality: 'V'.toUpperCase(),
		cedula: 14746065,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yemata'.toLowerCase(),
		name: capitalCadena('YESSIKA VANESSA'),
		lastName: capitalCadena('MATA HERNANDEZ'),
		type: 'regular',
		email: 'yemata@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14569,
		nationality: 'V'.toUpperCase(),
		cedula: 17074529,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROYECTOS TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECT DE INTEGRAC DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rrodriguez'.toLowerCase(),
		name: capitalCadena('ROSBEL JOSE'),
		lastName: capitalCadena('RODRIGUEZ SANCHEZ'),
		type: 'regular',
		email: 'rrodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14628,
		nationality: 'V'.toUpperCase(),
		cedula: 14043861,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'prizzo'.toLowerCase(),
		name: capitalCadena('PAOLO ANTONIO'),
		lastName: capitalCadena('RIZZO GARCIA'),
		type: 'regular',
		email: 'prizzo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14635,
		nationality: 'V'.toUpperCase(),
		cedula: 11313776,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'margutierrez'.toLowerCase(),
		name: capitalCadena('MARCOS AURELIO'),
		lastName: capitalCadena('GUTIERREZ RIVAS'),
		type: 'regular',
		email: 'margutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14680,
		nationality: 'V'.toUpperCase(),
		cedula: 17670882,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gsuarez'.toLowerCase(),
		name: capitalCadena('GUSTAVO ADOLFO'),
		lastName: capitalCadena('SUAREZ LUZARDO'),
		type: 'regular',
		email: 'gsuarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14709,
		nationality: 'V'.toUpperCase(),
		cedula: 5538972,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aexposito'.toLowerCase(),
		name: capitalCadena('ALBERTO JOSE'),
		lastName: capitalCadena('EXPOSITO PIÑERO'),
		type: 'regular',
		email: 'aexposito@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14719,
		nationality: 'V'.toUpperCase(),
		cedula: 18538410,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'carojas'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('ROJAS VERGARA'),
		type: 'regular',
		email: 'carojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14736,
		nationality: 'V'.toUpperCase(),
		cedula: 20944878,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dangarcia'.toLowerCase(),
		name: capitalCadena('DANNY DAVID'),
		lastName: capitalCadena('GARCIA MATOS'),
		type: 'regular',
		email: 'dangarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14738,
		nationality: 'V'.toUpperCase(),
		cedula: 26170589,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE MONITOREO TELCO E INFRAESTRUCTURA']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zavariano'.toLowerCase(),
		name: capitalCadena('ZENON ALFREDO'),
		lastName: capitalCadena('AVARIANO CASTILLO'),
		type: 'regular',
		email: 'zavariano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14741,
		nationality: 'V'.toUpperCase(),
		cedula: 4585475,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yortiz'.toLowerCase(),
		name: capitalCadena('YURI NEIL'),
		lastName: capitalCadena('ORTIZ SANCHEZ'),
		type: 'regular',
		email: 'yortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14752,
		nationality: 'V'.toUpperCase(),
		cedula: 14096900,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PLATAFORMA ESPECIALIZADA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'larodrigue'.toLowerCase(),
		name: capitalCadena('LAURA MICHELLE'),
		lastName: capitalCadena('RODRIGUEZ PRIETO'),
		type: 'regular',
		email: 'larodrigue@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14756,
		nationality: 'V'.toUpperCase(),
		cedula: 25690041,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA ENERGÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lbrinez'.toLowerCase(),
		name: capitalCadena('LUIS MARIO'),
		lastName: capitalCadena('BRIÑEZ CARDOZO'),
		type: 'regular',
		email: 'lbrinez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14799,
		nationality: 'V'.toUpperCase(),
		cedula: 27284907,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(
			vp => vp.name === VPOnlyNames['V.P GESTIÓN DE SOPORTE TÉCNICO Y ARQUITECTURA TI']
		)[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE SOPORTE TECNICO OCCIDENTE']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cnunez'.toLowerCase(),
		name: capitalCadena('CARLOS EDUARDO'),
		lastName: capitalCadena('NUÑEZ OLIVARES'),
		type: 'regular',
		email: 'cnunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14818,
		nationality: 'V'.toUpperCase(),
		cedula: 12377018,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jovivas'.toLowerCase(),
		name: capitalCadena('JOSE LUIS'),
		lastName: capitalCadena('VIVAS CORRALES'),
		type: 'regular',
		email: 'jovivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14877,
		nationality: 'V'.toUpperCase(),
		cedula: 6364032,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA INTEGRACIÓN DE PLATAFORMA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'farevalo'.toLowerCase(),
		name: capitalCadena('FREDDY JAVIER'),
		lastName: capitalCadena('AREVALO TRIAS'),
		type: 'regular',
		email: 'farevalo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14894,
		nationality: 'V'.toUpperCase(),
		cedula: 21016826,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA PROYECTOS DE SEGURIDAD TI']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'airondon'.toLowerCase(),
		name: capitalCadena('AIVERSON ALEJANDRO'),
		lastName: capitalCadena('RONDON GARCIA'),
		type: 'regular',
		email: 'airondon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14963,
		nationality: 'V'.toUpperCase(),
		cedula: 29920343,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jnavarro'.toLowerCase(),
		name: capitalCadena('JUAN DIEGO'),
		lastName: capitalCadena('NAVARRO MARQUEZ'),
		type: 'regular',
		email: 'jnavarro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14970,
		nationality: 'V'.toUpperCase(),
		cedula: 28540503,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SOPORTE A CANALES ELECTRÓNICOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE SOPORTE DE ATMS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['TECNICO ATM JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lchacon'.toLowerCase(),
		name: capitalCadena('LEONARDO JESUS'),
		lastName: capitalCadena('CHACON PACHECO'),
		type: 'regular',
		email: 'lchacon@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15436,
		nationality: 'V'.toUpperCase(),
		cedula: 16113363,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wmaduro'.toLowerCase(),
		name: capitalCadena('WILMARY JOSELYN'),
		lastName: capitalCadena('MADURO CALZADILLA'),
		type: 'regular',
		email: 'wmaduro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15657,
		nationality: 'V'.toUpperCase(),
		cedula: 18467596,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emgonzalez'.toLowerCase(),
		name: capitalCadena('EMILY '),
		lastName: capitalCadena('GONZALEZ DELGADO'),
		type: 'regular',
		email: 'emgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15900,
		nationality: 'V'.toUpperCase(),
		cedula: 26868223,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. TECNOLOGÍA'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA DE COMUNICACIONES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jamarin'.toLowerCase(),
		name: capitalCadena('JAILEL ENRIQUE'),
		lastName: capitalCadena('MARIN NIETO'),
		type: 'regular',
		email: 'jamarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16276,
		nationality: 'V'.toUpperCase(),
		cedula: 12877274,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. GESTIÓN DE PROYECTOS TI'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA OFICINA DE PROYECTOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ksolorzano'.toLowerCase(),
		name: capitalCadena('KEVIN RAFAEL'),
		lastName: capitalCadena('SOLORZANO VILLALTA'),
		type: 'regular',
		email: 'ksolorzano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16283,
		nationality: 'V'.toUpperCase(),
		cedula: 16413780,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. INGENIERIA TECNOLÓGICA'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DESARROLLO DE SOTWARE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA SISTEMA DISTRIBUIDO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rsotillo'.toLowerCase(),
		name: capitalCadena('ROSAURA '),
		lastName: capitalCadena('SOTILLO FLORES'),
		type: 'regular',
		email: 'rsotillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 611,
		nationality: 'V'.toUpperCase(),
		cedula: 5009761,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ychina'.toLowerCase(),
		name: capitalCadena('YUSMARY JOSEFINA'),
		lastName: capitalCadena('CHINA RIVERO'),
		type: 'regular',
		email: 'ychina@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 674,
		nationality: 'V'.toUpperCase(),
		cedula: 14934002,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'zahernandez'.toLowerCase(),
		name: capitalCadena('ZAIDA ELENA'),
		lastName: capitalCadena('HERNANDEZ NIETO'),
		type: 'regular',
		email: 'zahernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 901,
		nationality: 'V'.toUpperCase(),
		cedula: 5607149,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'fbriceno'.toLowerCase(),
		name: capitalCadena('FRANKLIN ALEXANDER'),
		lastName: capitalCadena('BRICEÑO GUERRERO'),
		type: 'regular',
		email: 'fbriceno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1434,
		nationality: 'V'.toUpperCase(),
		cedula: 16904954,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lgonzalez'.toLowerCase(),
		name: capitalCadena('LILA JOSEFINA'),
		lastName: capitalCadena('GONZALEZ GOMEZ'),
		type: 'regular',
		email: 'lgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1458,
		nationality: 'V'.toUpperCase(),
		cedula: 9410166,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'paguilar'.toLowerCase(),
		name: capitalCadena('PEGGY YOLANDA'),
		lastName: capitalCadena('AGUILAR BLANCO'),
		type: 'regular',
		email: 'paguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 1665,
		nationality: 'V'.toUpperCase(),
		cedula: 6304026,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mtellez'.toLowerCase(),
		name: capitalCadena('MIRIAN TERESA'),
		lastName: capitalCadena('TELLES BASTIDAS'),
		type: 'regular',
		email: 'mtellez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 2756,
		nationality: 'V'.toUpperCase(),
		cedula: 9010700,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'garanguren'.toLowerCase(),
		name: capitalCadena('GLENDY YELITZA'),
		lastName: capitalCadena('ARANGUREN GUTIEREZ'),
		type: 'regular',
		email: 'garanguren@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 3643,
		nationality: 'V'.toUpperCase(),
		cedula: 13943073,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbenitez'.toLowerCase(),
		name: capitalCadena('CESAR ALEJANDRO'),
		lastName: capitalCadena('BENITEZ LOZADA'),
		type: 'regular',
		email: 'cbenitez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4309,
		nationality: 'V'.toUpperCase(),
		cedula: 11161174,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gherrera'.toLowerCase(),
		name: capitalCadena('GUSTAVO EDUARDO'),
		lastName: capitalCadena('HERRERA '),
		type: 'regular',
		email: 'gherrera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 4894,
		nationality: 'V'.toUpperCase(),
		cedula: 6448342,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'franblanco'.toLowerCase(),
		name: capitalCadena('FRANKLIN RAMON'),
		lastName: capitalCadena('BLANCO AGUILERA'),
		type: 'regular',
		email: 'franblanco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6366,
		nationality: 'V'.toUpperCase(),
		cedula: 6948757,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'frtorres'.toLowerCase(),
		name: capitalCadena('FREDDY DOMINGO'),
		lastName: capitalCadena('TORRES '),
		type: 'regular',
		email: 'frtorres@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7577,
		nationality: 'V'.toUpperCase(),
		cedula: 6205768,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mariaadiaz'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('DIAZ PÉREZ'),
		type: 'regular',
		email: 'mariaadiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7599,
		nationality: 'V'.toUpperCase(),
		cedula: 13160432,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anhernandez'.toLowerCase(),
		name: capitalCadena('ANYELO JAVIER'),
		lastName: capitalCadena('HERNANDEZ '),
		type: 'regular',
		email: 'anhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7604,
		nationality: 'V'.toUpperCase(),
		cedula: 21369425,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'scollado'.toLowerCase(),
		name: capitalCadena('STUART ARMANDO'),
		lastName: capitalCadena('COLLADO LEINDEZ'),
		type: 'regular',
		email: 'scollado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7721,
		nationality: 'V'.toUpperCase(),
		cedula: 6512994,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jdematos'.toLowerCase(),
		name: capitalCadena('JUAN FRANCISCO'),
		lastName: capitalCadena('DE MATOS CONTASTI'),
		type: 'regular',
		email: 'jdematos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7949,
		nationality: 'V'.toUpperCase(),
		cedula: 21438227,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'brivas'.toLowerCase(),
		name: capitalCadena('BARBARA '),
		lastName: capitalCadena('RIVAS MARIN'),
		type: 'regular',
		email: 'brivas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8212,
		nationality: 'V'.toUpperCase(),
		cedula: 20613051,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'josbhernandez'.toLowerCase(),
		name: capitalCadena('JOSBELYS VIRGINIA'),
		lastName: capitalCadena('HERNANDEZ CABRERA'),
		type: 'regular',
		email: 'josbhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8830,
		nationality: 'V'.toUpperCase(),
		cedula: 24234338,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'xmoreno'.toLowerCase(),
		name: capitalCadena('XIOMARA OFELIA'),
		lastName: capitalCadena('MORENO VILORIA'),
		type: 'regular',
		email: 'xmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9034,
		nationality: 'V'.toUpperCase(),
		cedula: 17977967,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jromero'.toLowerCase(),
		name: capitalCadena('JOHANGELY ALEXANDRA'),
		lastName: capitalCadena('ROMERO FRANCO'),
		type: 'regular',
		email: 'jromero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9146,
		nationality: 'V'.toUpperCase(),
		cedula: 26465566,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECAUDA DE IMPUESTOS Y OTROS SERV']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jofernandez'.toLowerCase(),
		name: capitalCadena('JOSE LEONARDO'),
		lastName: capitalCadena('FERNANDEZ AVILAN'),
		type: 'regular',
		email: 'jofernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9813,
		nationality: 'V'.toUpperCase(),
		cedula: 27713090,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jomendoza'.toLowerCase(),
		name: capitalCadena('JOEL ENRIQUE'),
		lastName: capitalCadena('MENDOZA GARCIA'),
		type: 'regular',
		email: 'jomendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 9982,
		nationality: 'V'.toUpperCase(),
		cedula: 27713265,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hesilva'.toLowerCase(),
		name: capitalCadena('HECTOR JOSE'),
		lastName: capitalCadena('SILVA GONZALEZ'),
		type: 'regular',
		email: 'hesilva@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10261,
		nationality: 'V'.toUpperCase(),
		cedula: 15021704,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nhrojas'.toLowerCase(),
		name: capitalCadena('NHAYLLINGER HAIRAM'),
		lastName: capitalCadena('ROJAS PULGAR'),
		type: 'regular',
		email: 'nhrojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10943,
		nationality: 'V'.toUpperCase(),
		cedula: 25964833,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jruiz'.toLowerCase(),
		name: capitalCadena('JELINEK ODALIS'),
		lastName: capitalCadena('RUIZ OCHOA'),
		type: 'regular',
		email: 'jruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11186,
		nationality: 'V'.toUpperCase(),
		cedula: 24883411,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ccarrillo'.toLowerCase(),
		name: capitalCadena('CARLOS ALBERTO'),
		lastName: capitalCadena('CARRILLO RINCON'),
		type: 'regular',
		email: 'ccarrillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11285,
		nationality: 'V'.toUpperCase(),
		cedula: 16113438,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'darcia'.toLowerCase(),
		name: capitalCadena('DIMAS RAMON'),
		lastName: capitalCadena('ARCIA MONASTERIO'),
		type: 'regular',
		email: 'darcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12248,
		nationality: 'V'.toUpperCase(),
		cedula: 9418338,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aqhernandez'.toLowerCase(),
		name: capitalCadena('AQUILES VICENTE'),
		lastName: capitalCadena('HERNANDEZ MORENO'),
		type: 'regular',
		email: 'aqhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12437,
		nationality: 'V'.toUpperCase(),
		cedula: 14789737,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mperez'.toLowerCase(),
		name: capitalCadena('MARGARITA DEL CARMEN'),
		lastName: capitalCadena('PEREZ '),
		type: 'regular',
		email: 'mperez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13325,
		nationality: 'V'.toUpperCase(),
		cedula: 10449456,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		userName: 'mrada'.toLowerCase(),
		name: capitalCadena('MARBELYS YSABEL'),
		lastName: capitalCadena('RADA SANABRIA'),
		type: 'regular',
		email: 'mrada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13562,
		nationality: 'V'.toUpperCase(),
		cedula: 5528702,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jcubillan'.toLowerCase(),
		name: capitalCadena('JEANY MAITE'),
		lastName: capitalCadena('CUBILLAN BARRIOS'),
		type: 'regular',
		email: 'jcubillan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13831,
		nationality: 'V'.toUpperCase(),
		cedula: 13297237,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jbrizuela'.toLowerCase(),
		name: capitalCadena('JOSE MANUEL'),
		lastName: capitalCadena('BRIZUELA SUAREZ'),
		type: 'regular',
		email: 'jbrizuela@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14044,
		nationality: 'V'.toUpperCase(),
		cedula: 23749161,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'grcastillo'.toLowerCase(),
		name: capitalCadena('GREETCHEN KATHERINE'),
		lastName: capitalCadena('CASTILLO TACHÓN'),
		type: 'regular',
		email: 'grcastillo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14076,
		nationality: 'V'.toUpperCase(),
		cedula: 19710598,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gchourio'.toLowerCase(),
		name: capitalCadena('GUANDA SANDIBEL'),
		lastName: capitalCadena('CHOURIO PULGAR'),
		type: 'regular',
		email: 'gchourio@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14185,
		nationality: 'V'.toUpperCase(),
		cedula: 23739285,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE LIQUIDACIONES Y APLIC DE COBRO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
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
		userName: 'mmiquilena'.toLowerCase(),
		name: capitalCadena('MAIRY CAROLINA'),
		lastName: capitalCadena('MIQUILENA PRIETO'),
		type: 'regular',
		email: 'mmiquilena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14270,
		nationality: 'V'.toUpperCase(),
		cedula: 16731467,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'amorales'.toLowerCase(),
		name: capitalCadena('ANANGELYS '),
		lastName: capitalCadena('MORALES FIGUEROA'),
		type: 'regular',
		email: 'amorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14287,
		nationality: 'V'.toUpperCase(),
		cedula: 24435491,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. EMISIÓN Y DISTRIBUCIÓN'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA ADMIN DE CUENTAS Y ESTADÍSTICAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wparedes'.toLowerCase(),
		name: capitalCadena('WALKAREN WALKIRIA'),
		lastName: capitalCadena('PAREDES PIRELA'),
		type: 'regular',
		email: 'wparedes@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14352,
		nationality: 'V'.toUpperCase(),
		cedula: 26617498,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lemendoza'.toLowerCase(),
		name: capitalCadena('LENY IVELIST'),
		lastName: capitalCadena('MENDOZA RODRIGUEZ'),
		type: 'regular',
		email: 'lemendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14519,
		nationality: 'V'.toUpperCase(),
		cedula: 22783595,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'cbermudez'.toLowerCase(),
		name: capitalCadena('CESAR AUGUSTO'),
		lastName: capitalCadena('BERMUDEZ GARCIA'),
		type: 'regular',
		email: 'cbermudez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14523,
		nationality: 'V'.toUpperCase(),
		cedula: 20579058,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymendoza'.toLowerCase(),
		name: capitalCadena('YANNY CAROLINA'),
		lastName: capitalCadena('MENDOZA PEREZ'),
		type: 'regular',
		email: 'ymendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14683,
		nationality: 'V'.toUpperCase(),
		cedula: 23749322,
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
		userName: 'mariacgonzalez'.toLowerCase(),
		name: capitalCadena('MARIACECILIA CHIQUINQUIRA'),
		lastName: capitalCadena('GONZALEZ ZAMBRANO'),
		type: 'regular',
		email: 'mariacgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14688,
		nationality: 'V'.toUpperCase(),
		cedula: 26112567,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mhernandez'.toLowerCase(),
		name: capitalCadena('MARIA ALEJANDRA'),
		lastName: capitalCadena('HERNANDEZ MARCHAN'),
		type: 'regular',
		email: 'mhernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14700,
		nationality: 'V'.toUpperCase(),
		cedula: 25540980,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE PROCESOS ESPECIALES Y REPORTERÍA']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
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
		userName: 'ecastellano'.toLowerCase(),
		name: capitalCadena('ERIKA MARIA'),
		lastName: capitalCadena('CASTELLANO DE AVILA'),
		type: 'regular',
		email: 'ecastellano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14801,
		nationality: 'V'.toUpperCase(),
		cedula: 17567736,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. DE LIQUIDACIONES Y SERVICIOS'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA OPERACIONES ESPECIALIZADAS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'irojas'.toLowerCase(),
		name: capitalCadena('IVAN ARGENIS'),
		lastName: capitalCadena('ROJAS VICENT'),
		type: 'regular',
		email: 'irojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14889,
		nationality: 'V'.toUpperCase(),
		cedula: 26063838,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'manunez'.toLowerCase(),
		name: capitalCadena('MARLYN WALESKA'),
		lastName: capitalCadena('NUÑEZ AVENDAÑO'),
		type: 'regular',
		email: 'manunez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15095,
		nationality: 'V'.toUpperCase(),
		cedula: 29922432,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dasulbaran'.toLowerCase(),
		name: capitalCadena('DARWING JOSE'),
		lastName: capitalCadena('SULBARAN CONTRERAS'),
		type: 'regular',
		email: 'dasulbaran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15537,
		nationality: 'V'.toUpperCase(),
		cedula: 14050137,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
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
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yurojas'.toLowerCase(),
		name: capitalCadena('YULEIMA MARITZA'),
		lastName: capitalCadena('ROJAS VELAZCO'),
		type: 'regular',
		email: 'yurojas@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16025,
		nationality: 'V'.toUpperCase(),
		cedula: 16282251,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ATENCIÓN AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA RECLAMOS DE CANALES ELECTRONICOS']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'degutierrez'.toLowerCase(),
		name: capitalCadena('DEIVI ROBERTO'),
		lastName: capitalCadena('GUTIERREZ ARIZA'),
		type: 'regular',
		email: 'degutierrez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16088,
		nationality: 'V'.toUpperCase(),
		cedula: 21361021,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS'])[0]
			.directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. OPERACIONES CENTRALIZADAS']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. OPERACIONES DE EFECTIVO'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA DE TRANSPORTE DE VALORES Y CENTROS DE ACOPIO']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['CAJERO DE BOVEDA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vdonate'.toLowerCase(),
		name: capitalCadena('VIKY DARIACNY'),
		lastName: capitalCadena('DONATE RONDON'),
		type: 'regular',
		email: 'vdonate@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16093,
		nationality: 'V'.toUpperCase(),
		cedula: 27272178,
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
		userName: 'mmerchan'.toLowerCase(),
		name: capitalCadena('MARIA VIRGINIA'),
		lastName: capitalCadena('MERCHAN JIMENEZ'),
		type: 'regular',
		email: 'mmerchan@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13823,
		nationality: 'V'.toUpperCase(),
		cedula: 16607251,
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
		userName: 'adfernandez'.toLowerCase(),
		name: capitalCadena('ADRIANA CAROLINA'),
		lastName: capitalCadena('FERNANDEZ YGUARAN'),
		type: 'regular',
		email: 'adfernandez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14133,
		nationality: 'V'.toUpperCase(),
		cedula: 25182285,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'niparra'.toLowerCase(),
		name: capitalCadena('NIUMAR ESTEBAN'),
		lastName: capitalCadena('PARRA PRADO'),
		type: 'regular',
		email: 'niparra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14238,
		nationality: 'V'.toUpperCase(),
		cedula: 24251660,
		locationId: null,
		directivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. SERVICIOS JURÍDICOS'])[0]
			.id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. ASUNTOS LEGALES'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE ÁREA LEGAL Y ORGANISMOS OFICIALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ABOGADO SENIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hmoreno'.toLowerCase(),
		name: capitalCadena('HORACIO ALEJANDRO'),
		lastName: capitalCadena('MORENO TORRES'),
		type: 'regular',
		email: 'hmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14436,
		nationality: 'V'.toUpperCase(),
		cedula: 24731743,
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
		userName: 'anmavarez'.toLowerCase(),
		name: capitalCadena('ANGELINE CLARET'),
		lastName: capitalCadena('MAVAREZ VILLALOBOS'),
		type: 'regular',
		email: 'anmavarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14501,
		nationality: 'V'.toUpperCase(),
		cedula: 26416366,
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
		userName: 'mmoreno'.toLowerCase(),
		name: capitalCadena('MAYERLING AISBEL'),
		lastName: capitalCadena('MORENO GONZALEZ'),
		type: 'regular',
		email: 'mmoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14554,
		nationality: 'V'.toUpperCase(),
		cedula: 13529411,
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
		userName: 'eferrer'.toLowerCase(),
		name: capitalCadena('EDDY YAFRANCI'),
		lastName: capitalCadena('FERRER BRAVO'),
		type: 'regular',
		email: 'eferrer@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14687,
		nationality: 'V'.toUpperCase(),
		cedula: 24727815,
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
		userName: 'hteran'.toLowerCase(),
		name: capitalCadena('HUGO DAVID'),
		lastName: capitalCadena('TERAN PEÑA'),
		type: 'regular',
		email: 'hteran@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14921,
		nationality: 'V'.toUpperCase(),
		cedula: 26169176,
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
		userName: 'yescobar'.toLowerCase(),
		name: capitalCadena('YOMARCRIS MAHOLY'),
		lastName: capitalCadena('ESCOBAR RODRIGUEZ'),
		type: 'regular',
		email: 'yescobar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 795,
		nationality: 'V'.toUpperCase(),
		cedula: 15207373,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE AREA'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maramos'.toLowerCase(),
		name: capitalCadena('MARIA COROMOTO'),
		lastName: capitalCadena('RAMOS GUALDRON'),
		type: 'regular',
		email: 'maramos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6616,
		nationality: 'V'.toUpperCase(),
		cedula: 17927955,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ebarreto'.toLowerCase(),
		name: capitalCadena('ENYERBERT YEROHAN'),
		lastName: capitalCadena('BARRETO MORENO'),
		type: 'regular',
		email: 'ebarreto@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6722,
		nationality: 'V'.toUpperCase(),
		cedula: 18441255,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jguerra'.toLowerCase(),
		name: capitalCadena('JENIFER DEL CARMEN'),
		lastName: capitalCadena('GUERRA GRANADOS'),
		type: 'regular',
		email: 'jguerra@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 6847,
		nationality: 'V'.toUpperCase(),
		cedula: 26422135,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'emarin'.toLowerCase(),
		name: capitalCadena('ERIKA ZORAIMY'),
		lastName: capitalCadena('MARIN MORENO'),
		type: 'regular',
		email: 'emarin@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7413,
		nationality: 'V'.toUpperCase(),
		cedula: 18329167,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'isfranco'.toLowerCase(),
		name: capitalCadena('ISAAC DAVID'),
		lastName: capitalCadena('FRANCO MARTINEZ'),
		type: 'regular',
		email: 'isfranco@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7535,
		nationality: 'V'.toUpperCase(),
		cedula: 24698797,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jobarrios'.toLowerCase(),
		name: capitalCadena('JOSBERT GABRIEL'),
		lastName: capitalCadena('BARRIOS COLMENARES'),
		type: 'regular',
		email: 'jobarrios@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7861,
		nationality: 'V'.toUpperCase(),
		cedula: 23709418,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'hcontreras'.toLowerCase(),
		name: capitalCadena('HERLYM DAMALYS'),
		lastName: capitalCadena('CONTRERAS GUERRERO'),
		type: 'regular',
		email: 'hcontreras@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 7930,
		nationality: 'V'.toUpperCase(),
		cedula: 22031033,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yrafezca'.toLowerCase(),
		name: capitalCadena('YARIMAR YEISLING'),
		lastName: capitalCadena('RAFEZCA TERAN'),
		type: 'regular',
		email: 'yrafezca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 8557,
		nationality: 'V'.toUpperCase(),
		cedula: 21535631,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gpena'.toLowerCase(),
		name: capitalCadena('GABRIELA CARIBAY'),
		lastName: capitalCadena('PEÑA AVENDAÑO'),
		type: 'regular',
		email: 'gpena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 10517,
		nationality: 'V'.toUpperCase(),
		cedula: 27309293,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mquinal'.toLowerCase(),
		name: capitalCadena('MANUEL ENRIQUE'),
		lastName: capitalCadena('QUINAL RODRIGUEZ'),
		type: 'regular',
		email: 'mquinal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11404,
		nationality: 'V'.toUpperCase(),
		cedula: 15701475,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jsandoval'.toLowerCase(),
		name: capitalCadena('JORVI ALEJANDRO'),
		lastName: capitalCadena('SANDOVAL RONDON'),
		type: 'regular',
		email: 'jsandoval@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11767,
		nationality: 'V'.toUpperCase(),
		cedula: 27200036,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'doortiz'.toLowerCase(),
		name: capitalCadena('DORLEY MAYERLIN'),
		lastName: capitalCadena('ORTIZ SIERRA'),
		type: 'regular',
		email: 'doortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11784,
		nationality: 'V'.toUpperCase(),
		cedula: 26711424,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['EJECUTIVO JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kruiz'.toLowerCase(),
		name: capitalCadena('KEVIN JHOAN'),
		lastName: capitalCadena('RUIZ PORTO'),
		type: 'regular',
		email: 'kruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11911,
		nationality: 'V'.toUpperCase(),
		cedula: 21375352,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rmaterano'.toLowerCase(),
		name: capitalCadena('ROSMELITH AMTHEIRINES'),
		lastName: capitalCadena('MATERANO REINA'),
		type: 'regular',
		email: 'rmaterano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 11938,
		nationality: 'V'.toUpperCase(),
		cedula: 27006330,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'arodriguez'.toLowerCase(),
		name: capitalCadena('ANDREINA CAROLINA'),
		lastName: capitalCadena('RODRIGUEZ BECERRA'),
		type: 'regular',
		email: 'arodriguez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12214,
		nationality: 'V'.toUpperCase(),
		cedula: 19453067,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dcampos'.toLowerCase(),
		name: capitalCadena('DANIELA YURAIS'),
		lastName: capitalCadena('CAMPOS DUQUE'),
		type: 'regular',
		email: 'dcampos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12256,
		nationality: 'V'.toUpperCase(),
		cedula: 27756525,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ymoreno'.toLowerCase(),
		name: capitalCadena('YSCAR DEL VALLE'),
		lastName: capitalCadena('MORENO DE VALERO'),
		type: 'regular',
		email: 'ymoreno@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12457,
		nationality: 'V'.toUpperCase(),
		cedula: 21014763,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yopena'.toLowerCase(),
		name: capitalCadena('YOSELIN MATILDE'),
		lastName: capitalCadena('PEÑA MEZA'),
		type: 'regular',
		email: 'yopena@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12766,
		nationality: 'V'.toUpperCase(),
		cedula: 25211635,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mchirinos'.toLowerCase(),
		name: capitalCadena('MAURICIO ALFONZO'),
		lastName: capitalCadena('CHIRINOS RIVERO'),
		type: 'regular',
		email: 'mchirinos@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 12767,
		nationality: 'V'.toUpperCase(),
		cedula: 29605900,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'anieves'.toLowerCase(),
		name: capitalCadena('ARLENMAR THAYLANNY'),
		lastName: capitalCadena('NIEVES RAMOS'),
		type: 'regular',
		email: 'anieves@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13036,
		nationality: 'V'.toUpperCase(),
		cedula: 30552440,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'malvarez'.toLowerCase(),
		name: capitalCadena('MERIHANNI NICOLL'),
		lastName: capitalCadena('ALVAREZ PERALTA'),
		type: 'regular',
		email: 'malvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13126,
		nationality: 'V'.toUpperCase(),
		cedula: 30104045,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vmendoza'.toLowerCase(),
		name: capitalCadena('VANESSA VICTORIA'),
		lastName: capitalCadena('MENDOZA LAYA'),
		type: 'regular',
		email: 'vmendoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13128,
		nationality: 'V'.toUpperCase(),
		cedula: 28136161,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kcaraballo'.toLowerCase(),
		name: capitalCadena('KEILA JARIB'),
		lastName: capitalCadena('CARABALLO MONGES'),
		type: 'regular',
		email: 'kcaraballo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13145,
		nationality: 'V'.toUpperCase(),
		cedula: 25205032,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lroso'.toLowerCase(),
		name: capitalCadena('LILIANA DEL CARMEN'),
		lastName: capitalCadena('ROSO PEÑA'),
		type: 'regular',
		email: 'lroso@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13297,
		nationality: 'V'.toUpperCase(),
		cedula: 8502035,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'maomana'.toLowerCase(),
		name: capitalCadena('MARIA ANDREINA'),
		lastName: capitalCadena('OMAÑA PIRELA'),
		type: 'regular',
		email: 'maomana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 13972,
		nationality: 'V'.toUpperCase(),
		cedula: 19988407,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['GERENTE DE DEPARTAMENTO'])[0].id,
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
		userName: 'raltamirano'.toLowerCase(),
		name: capitalCadena('ROBERT WILLIAMS'),
		lastName: capitalCadena('ALTAMIRANO MENDEZ'),
		type: 'regular',
		email: 'raltamirano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14205,
		nationality: 'V'.toUpperCase(),
		cedula: 19836703,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'bgonzalez'.toLowerCase(),
		name: capitalCadena('BELITZA DE JESUS'),
		lastName: capitalCadena('GONZALEZ RUIZ'),
		type: 'regular',
		email: 'bgonzalez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14326,
		nationality: 'V'.toUpperCase(),
		cedula: 16572947,
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
		userName: 'jaortiz'.toLowerCase(),
		name: capitalCadena('JAVIER JESUS'),
		lastName: capitalCadena('ORTIZ MAGDALENO'),
		type: 'regular',
		email: 'jaortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14447,
		nationality: 'V'.toUpperCase(),
		cedula: 20660275,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA SENIOR'])[0].id,
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
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ESPECIALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kalmarza'.toLowerCase(),
		name: capitalCadena('KRISTYNA DESIREE'),
		lastName: capitalCadena('ALMARZA FERRER'),
		type: 'regular',
		email: 'kalmarza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14776,
		nationality: 'V'.toUpperCase(),
		cedula: 17414875,
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
			dep => dep.name === departamentoOnlyNames['GERENCIA DE DESARROLLO DE CANALES DIGITALES']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['COORDINADOR(A)'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mortiz'.toLowerCase(),
		name: capitalCadena('MAYERLING VICTORIA'),
		lastName: capitalCadena('ORTIZ GONZALEZ'),
		type: 'regular',
		email: 'mortiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 14948,
		nationality: 'V'.toUpperCase(),
		cedula: 23696021,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kcarvajal'.toLowerCase(),
		name: capitalCadena('KARILYN MICHEL'),
		lastName: capitalCadena('CARVAJAL COLMENARES'),
		type: 'regular',
		email: 'kcarvajal@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15042,
		nationality: 'V'.toUpperCase(),
		cedula: 27279970,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'svillafranca'.toLowerCase(),
		name: capitalCadena('SOL CELINA'),
		lastName: capitalCadena('VILLAFRANCA HERNANDEZ'),
		type: 'regular',
		email: 'svillafranca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15092,
		nationality: 'V'.toUpperCase(),
		cedula: 27047747,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wvielma'.toLowerCase(),
		name: capitalCadena('WALEXKA GUADALUPE'),
		lastName: capitalCadena('VIELMA CLEMENTE'),
		type: 'regular',
		email: 'wvielma@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15234,
		nationality: 'V'.toUpperCase(),
		cedula: 30328250,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dmarcano'.toLowerCase(),
		name: capitalCadena('DAINALYS ALEJANDRA'),
		lastName: capitalCadena('MARCANO MEZA'),
		type: 'regular',
		email: 'dmarcano@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15236,
		nationality: 'V'.toUpperCase(),
		cedula: 30245430,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'idiaz'.toLowerCase(),
		name: capitalCadena('IVAN AUGUSTO'),
		lastName: capitalCadena('DIAZ CAMERO'),
		type: 'regular',
		email: 'idiaz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15338,
		nationality: 'V'.toUpperCase(),
		cedula: 30435411,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'vdomador'.toLowerCase(),
		name: capitalCadena('VERONICA DEL VALLE'),
		lastName: capitalCadena('DOMADOR PRINS'),
		type: 'regular',
		email: 'vdomador@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15466,
		nationality: 'V'.toUpperCase(),
		cedula: 29596103,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lequintero'.toLowerCase(),
		name: capitalCadena('LEONEL ARTURO'),
		lastName: capitalCadena('QUINTERO NORIEGA'),
		type: 'regular',
		email: 'lequintero@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15484,
		nationality: 'V'.toUpperCase(),
		cedula: 29973314,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'yurmorales'.toLowerCase(),
		name: capitalCadena('YURY PAOLA'),
		lastName: capitalCadena('MORALES COLMENARES'),
		type: 'regular',
		email: 'yurmorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15531,
		nationality: 'V'.toUpperCase(),
		cedula: 29512201,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kalvarado'.toLowerCase(),
		name: capitalCadena('KAIRO ALEJANDRO'),
		lastName: capitalCadena('ALVARADO PEÑA'),
		type: 'regular',
		email: 'kalvarado@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15613,
		nationality: 'V'.toUpperCase(),
		cedula: 29966955,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'santander'.toLowerCase(),
		name: capitalCadena('LEONEL ANTONIO'),
		lastName: capitalCadena('SANTANDER REYES'),
		type: 'regular',
		email: 'santander@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15701,
		nationality: 'V'.toUpperCase(),
		cedula: 29919822,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nospino'.toLowerCase(),
		name: capitalCadena('YESENIA ANDREINA'),
		lastName: capitalCadena('PAEZ MORENO'),
		type: 'regular',
		email: 'nospino@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15760,
		nationality: 'V'.toUpperCase(),
		cedula: 25203341,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gperdomo'.toLowerCase(),
		name: capitalCadena('GERAR JESUS'),
		lastName: capitalCadena('PERDOMO BELLO'),
		type: 'regular',
		email: 'gperdomo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15845,
		nationality: 'V'.toUpperCase(),
		cedula: 29952771,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sagarcia'.toLowerCase(),
		name: capitalCadena('SANTY YOSUETH'),
		lastName: capitalCadena('GARCIA VERA'),
		type: 'regular',
		email: 'sagarcia@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15846,
		nationality: 'V'.toUpperCase(),
		cedula: 29875677,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['ANALISTA JUNIOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'palzuro'.toLowerCase(),
		name: capitalCadena('PAOLA ROSCARI'),
		lastName: capitalCadena('ALZURO PEÑUELA'),
		type: 'regular',
		email: 'palzuro@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15895,
		nationality: 'V'.toUpperCase(),
		cedula: 28494649,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jgodoy'.toLowerCase(),
		name: capitalCadena('JOSE DAVID'),
		lastName: capitalCadena('GODOY GARCIA'),
		type: 'regular',
		email: 'jgodoy@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 15948,
		nationality: 'V'.toUpperCase(),
		cedula: 28304108,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'mpadaui'.toLowerCase(),
		name: capitalCadena('MARIO ANDRES'),
		lastName: capitalCadena('PADAUI ACEVEDO'),
		type: 'regular',
		email: 'mpadaui@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16092,
		nationality: 'V'.toUpperCase(),
		cedula: 29698405,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jvillafranca'.toLowerCase(),
		name: capitalCadena('JULIO CESAR'),
		lastName: capitalCadena('VILLAFRANCA ORTEGA'),
		type: 'regular',
		email: 'jvillafranca@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16211,
		nationality: 'V'.toUpperCase(),
		cedula: 31795573,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'sparragoza'.toLowerCase(),
		name: capitalCadena('STEPHANY YERALDINE'),
		lastName: capitalCadena('ESPARRAGOZA CABAÑALES'),
		type: 'regular',
		email: 'sparragoza@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16212,
		nationality: 'V'.toUpperCase(),
		cedula: 26268220,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'youzcategui'.toLowerCase(),
		name: capitalCadena('YORGELIS '),
		lastName: capitalCadena('UZCATEGUI FAJARDO'),
		type: 'regular',
		email: 'youzcategui@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16358,
		nationality: 'V'.toUpperCase(),
		cedula: 30057735,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'kaguilar'.toLowerCase(),
		name: capitalCadena('KEYNNER JESUS'),
		lastName: capitalCadena('AGUILAR RAGI'),
		type: 'regular',
		email: 'kaguilar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16362,
		nationality: 'V'.toUpperCase(),
		cedula: 30071320,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'duruiz'.toLowerCase(),
		name: capitalCadena('DUGLENNYS NAZARETH'),
		lastName: capitalCadena('RUIZ GONZALEZ'),
		type: 'regular',
		email: 'duruiz@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16408,
		nationality: 'V'.toUpperCase(),
		cedula: 31309024,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'gestrada'.toLowerCase(),
		name: capitalCadena('GREYSKER JHOSUE'),
		lastName: capitalCadena('ESTRADA FIGUEROA'),
		type: 'regular',
		email: 'gestrada@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16414,
		nationality: 'V'.toUpperCase(),
		cedula: 31341295,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'llezama'.toLowerCase(),
		name: capitalCadena('LUIS IGNACIO'),
		lastName: capitalCadena('LEZAMA DIAZ'),
		type: 'regular',
		email: 'llezama@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16431,
		nationality: 'V'.toUpperCase(),
		cedula: 28126503,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'wvera'.toLowerCase(),
		name: capitalCadena('WRANYELIN ESTEFANI'),
		lastName: capitalCadena('VERA VERA'),
		type: 'regular',
		email: 'wvera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16436,
		nationality: 'V'.toUpperCase(),
		cedula: 26745382,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'edtovar'.toLowerCase(),
		name: capitalCadena('EDUARDO ENRIQUE'),
		lastName: capitalCadena('TOVAR MEZA'),
		type: 'regular',
		email: 'edtovar@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16437,
		nationality: 'V'.toUpperCase(),
		cedula: 28681989,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'oserna'.toLowerCase(),
		name: capitalCadena('OMAR ALBEIRO'),
		lastName: capitalCadena('SERNA CARDENAS'),
		type: 'regular',
		email: 'oserna@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16439,
		nationality: 'V'.toUpperCase(),
		cedula: 30481733,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ammorales'.toLowerCase(),
		name: capitalCadena('AMBAR NHIKOL'),
		lastName: capitalCadena('MORALES MORALES'),
		type: 'regular',
		email: 'ammorales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16440,
		nationality: 'V'.toUpperCase(),
		cedula: 32557059,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'jfigueroa'.toLowerCase(),
		name: capitalCadena('JOELISMAR RACHEL'),
		lastName: capitalCadena('FIGUEROA BLANCA'),
		type: 'regular',
		email: 'jfigueroa@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16443,
		nationality: 'V'.toUpperCase(),
		cedula: 31793928,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'ourbaez'.toLowerCase(),
		name: capitalCadena('ORIANA '),
		lastName: capitalCadena('URBAEZ GONZALEZ'),
		type: 'regular',
		email: 'ourbaez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16444,
		nationality: 'V'.toUpperCase(),
		cedula: 26089326,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'rrozo'.toLowerCase(),
		name: capitalCadena('RUDY ALEJANDRO'),
		lastName: capitalCadena('ROZO OCANTO'),
		type: 'regular',
		email: 'rrozo@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16445,
		nationality: 'V'.toUpperCase(),
		cedula: 31854646,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'nialvarez'.toLowerCase(),
		name: capitalCadena('NICOLAS ARAAC JOSE'),
		lastName: capitalCadena('ALVAREZ GONZALEZ'),
		type: 'regular',
		email: 'nialvarez@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16446,
		nationality: 'V'.toUpperCase(),
		cedula: 28494756,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'dvera'.toLowerCase(),
		name: capitalCadena('DAMIAN EDUARDO'),
		lastName: capitalCadena('VERA JARRIN'),
		type: 'regular',
		email: 'dvera@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16448,
		nationality: 'V'.toUpperCase(),
		cedula: 30166977,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'aaldana'.toLowerCase(),
		name: capitalCadena('ALANNYX ANTHONIETA AYSHA'),
		lastName: capitalCadena('ALDANA GONZALEZ'),
		type: 'regular',
		email: 'aaldana@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16449,
		nationality: 'V'.toUpperCase(),
		cedula: 30709242,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	},
	{
		userName: 'lrosales'.toLowerCase(),
		name: capitalCadena('LAYESKY NAHOMY'),
		lastName: capitalCadena('ROSALES TARAZONA'),
		type: 'regular',
		email: 'lrosales@bnc.com.ve'.toLowerCase(),
		isStillWorking: true,
		employeeCode: 16450,
		nationality: 'V'.toUpperCase(),
		cedula: 31178314,
		locationId: null,
		directivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].directivaId,
		vicepresidenciaEjecutivaId: VPEData.filter(
			vpe => vpe.name === VPEOnlyNames['V.P.E. SOLUCIONES DE CLIENTES Y SERV. DIGITALES']
		)[0].id,
		vicepresidenciaId: VPData.filter(vp => vp.name === VPOnlyNames['V.P. SERVICIOS AL CLIENTE'])[0].id,
		departamentoId: departamentoData.filter(
			dep => dep.name === departamentoOnlyNames['GERENCIA DE AREA CONTACT CENTER']
		)[0].id,
		cargoId: cargosData.filter(cargo => cargo.name === cargoOnlyNames['OPERADOR'])[0].id,
		extension: [],
		phone: []
	}
]
module.exports = { restoTerceraParte }
